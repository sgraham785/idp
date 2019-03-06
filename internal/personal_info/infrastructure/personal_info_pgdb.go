package infrastructure

import (
	"context"

	"github.com/canary-health/gotils/pkg/logger"
	"github.com/canary-health/idp/internal/personal_info"
	"github.com/canary-health/idp/internal/user"

	"github.com/go-kit/kit/log"
	"github.com/jmoiron/sqlx"
)

// PersonalInfoDatabase is the set of calls that can be made to the database for personal_info
type PersonalInfoDatabase interface {
	UpsertPersonalInfo(ctx context.Context, opts *personalinfo.UpsertPersonalInfoOpts) (*user.UserUUID, error)
	GetPersonInfoByUserUUID(ctx context.Context, uuid *user.UserUUID) (*personalinfo.PersonalInfoPayload, error)
}

type personalInfoDatabase struct {
	DB     *sqlx.DB
	Logger *logger.Logger
}

// NewPersonalInfoDatabase is called to connect to the db for personal_info
func NewPersonalInfoDatabase(db *sqlx.DB, ll log.Logger) PersonalInfoDatabase {
	log := logger.NewLogger(ll)
	return &personalInfoDatabase{db, log}
}
