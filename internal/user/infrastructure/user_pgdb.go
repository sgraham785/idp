package infrastructure

import (
	"context"

	"github.com/canary-health/gotils/pkg/logger"
	"github.com/canary-health/idp/internal/user"
	"github.com/go-kit/kit/log"
	"github.com/jmoiron/sqlx"
)

// UserDatabase is the set of calls that can be made to the database for users
type UserDatabase interface {
	UpsertUser(ctx context.Context, opts *user.UpsertUserOpts) (*user.UserUUID, error)
	AuthenticateUser(ctx context.Context, opts *user.AuthenticateUserOpts) (*user.UserUUID, error)
}

type userDatabase struct {
	DB     *sqlx.DB
	Logger *logger.Logger
}

// NewUserDatabase is called to connect to the db for users
func NewUserDatabase(db *sqlx.DB, ll log.Logger) UserDatabase {
	log := logger.NewLogger(ll)
	return &userDatabase{db, log}
}
