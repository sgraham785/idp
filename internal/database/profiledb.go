package database

import (
	"context"
	"time"

	"github.com/canary-health/idp/_rpc/profiles"
	"github.com/canary-health/idp/_rpc/users"
	"github.com/canary-health/idp/internal/middleware"
	"github.com/go-kit/kit/log"
	"github.com/jmoiron/sqlx"
)

// ProfileDatabase is the set of calls that can be made to the database for profiles
type ProfileDatabase interface {
	UpsertProfile(ctx context.Context, opts *profiles.UpsertProfileOpts) (*users.UserUUID, error)
	GetProfileByUserUUID(ctx context.Context, iuuid *users.UserUUID) (*profiles.ProfilePayload, error)
}

// NewProfileDatabase is called to connect to the db for profiles
func NewProfileDatabase(db *sqlx.DB, logger log.Logger) ProfileDatabase {
	lmw := middleware.LoggingMiddleware(logger)
	return &profilesDatabase{db, lmw}
}

type profilesDatabase struct {
	db     *sqlx.DB
	logger *middleware.LoggerMiddleware
}

func (i *profilesDatabase) UpsertProfile(ctx context.Context, opts *profiles.UpsertProfileOpts) (*users.UserUUID, error) {

	sql := `INSERT INTO profiles (
		user_uuid,
		screen_name,
		avatar,
		description,
		timezone,
		locale 
	)
	VALUES
		(
			$1, $2, $3, $4, $5, $6 
		) ON CONFLICT ON CONSTRAINT profiles_pkey DO
	UPDATE 
		SET (
			user_uuid,
			screen_name,
			avatar,
			description,
			timezone,
			locale 
			) = (
			EXCLUDED.user_uuid,
			EXCLUDED.screen_name,
			EXCLUDED.avatar,
			EXCLUDED.description,
			EXCLUDED.timezone,
			EXCLUDED.locale 
		) RETURNING user_uuid`

	var result users.UserUUID
	err := i.db.QueryRowx(sql, opts.UserUUID, opts.ScreenName, opts.Avatar, opts.Description, opts.Timezone, opts.Locale).StructScan(&result)
	defer func(begin time.Time) {
		_ = i.logger.Log(ctx, opts.UserUUID, result, err, time.Since(begin))
	}(time.Now())
	if err != nil {
		return nil, err
	}

	return &result, nil
}

func (i *profilesDatabase) GetProfileByUserUUID(ctx context.Context, iuuid *users.UserUUID) (*profiles.ProfilePayload, error) {

	sql := `SELECT * FROM profiles WHERE user_uuid = $1`

	var result profiles.ProfilePayload
	err := i.db.QueryRowx(sql, iuuid.UserUUID).StructScan(&result)
	if err != nil {
		return nil, err
	}
	defer func(begin time.Time) {
		_ = i.logger.Log(ctx, iuuid.UserUUID, result.UserUUID, err, time.Since(begin))
	}(time.Now())
	if err != nil {
		return nil, err
	}
	return &result, nil
}
