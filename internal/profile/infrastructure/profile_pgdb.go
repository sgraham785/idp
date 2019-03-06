package infrastructure

import (
	"context"

	"github.com/canary-health/gotils/pkg/logger"
	"github.com/canary-health/idp/internal/profile"
	"github.com/canary-health/idp/internal/user"
	"github.com/go-kit/kit/log"
	"github.com/jmoiron/sqlx"
)

// ProfileDatabase is the set of calls that can be made to the database for profile
type ProfileDatabase interface {
	UpsertProfile(ctx context.Context, opts *profile.UpsertProfileOpts) (*user.UserUUID, error)
	GetProfileByUserUUID(ctx context.Context, iuuid *user.UserUUID) (*profile.ProfilePayload, error)
}

// NewProfileDatabase is called to connect to the db for profile
func NewProfileDatabase(db *sqlx.DB, ll log.Logger) ProfileDatabase {
	log := logger.NewLogger(ll)
	return &profileDatabase{db, log}
}

type profileDatabase struct {
	DB     *sqlx.DB
	Logger *logger.Logger
}
