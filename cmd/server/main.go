package main

import (
	"context"
	"net/http"
	"os"
	"time"

	"github.com/canary-health/idp/_rpc/personal_info"
	"github.com/canary-health/idp/_rpc/profiles"
	"github.com/canary-health/idp/_rpc/users"
	"github.com/canary-health/idp/internal/service"

	"github.com/canary-health/twirp-hooks/promhook"
	"github.com/etherlabsio/healthcheck"
	"github.com/etherlabsio/healthcheck/checkers"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/twitchtv/twirp"

	"github.com/go-kit/kit/log"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func main() {
	// Create a single logger, which we'll use and give to other components.
	var logger log.Logger
	{
		logger = log.NewLogfmtLogger(os.Stderr)
		logger = log.With(logger, "ts", log.DefaultTimestampUTC)
		logger = log.With(logger, "caller", log.DefaultCaller)
	}
	// Create a single logger, which we'll use on all routes.
	var hooks *twirp.ServerHooks
	{
		hooks = promhook.NewServerHooks(os.Getenv("REPO_NAME"))
	}

	dburl := os.Getenv("APP_DB_URL") // "postgres://postgres@localhost:5432/canary_health?sslmode=disable&search_path=idp" //

	db, err := sqlx.Open("postgres", dburl)
	if err != nil {
		logger.Log("msg", twirp.NewError(twirp.Unavailable, "Database unreachable"), "err", err)
	}

	var usvc = service.NewUserSvc(db, logger)
	var psvc = service.NewProfileSvc(db, logger)
	var pisvc = service.NewPersonalInfoSvc(db, logger)

	// Route handlers
	mux := http.NewServeMux()

	mux.Handle(users.UsersPathPrefix, users.NewUsersServer(usvc, hooks))
	mux.Handle(profiles.ProfilesPathPrefix, profiles.NewProfilesServer(psvc, hooks))
	mux.Handle(personalinfo.PersonalInfoPathPrefix, personalinfo.NewPersonalInfoServer(pisvc, hooks))

	mux.Handle("/healthcheck", healthcheck.Handler(

		// WithTimeout allows you to set a max overall timeout.
		healthcheck.WithTimeout(5*time.Second),

		// Checkers fail the status in case of any error.
		healthcheck.WithChecker(
			"heartbeat", checkers.Heartbeat("./heartbeat"),
		),

		healthcheck.WithChecker(
			"database", healthcheck.CheckerFunc(
				func(ctx context.Context) error {
					return db.PingContext(ctx)
				},
			),
		),

		// Observers do not fail the status in case of error.
		healthcheck.WithObserver(
			"diskspace", checkers.DiskSpace("/var/log", 90),
		),
	))
	mux.Handle("/metrics", promhttp.Handler())

	srv := &http.Server{
		Addr:    os.Getenv("SERVER_ADDR"), // ":8080",
		Handler: mux,
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	logger.Log("msg", os.Getenv("REPO_NAME")+" Server is running on port: "+os.Getenv("SERVER_ADDR"))
	logger.Log("err", srv.ListenAndServe())
}
