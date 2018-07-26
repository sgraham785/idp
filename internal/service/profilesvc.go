package service

import (
	"context"
	"time"

	"github.com/canary-health/idp/_rpc/profiles"
	"github.com/canary-health/idp/_rpc/users"
	"github.com/canary-health/idp/internal/database"
	"github.com/canary-health/idp/internal/middleware"

	"github.com/go-kit/kit/log"
	"github.com/jmoiron/sqlx"
)

// ProfileService is the set of service calls that can be made for profiles
type ProfileService interface {
	UpsertProfile(ctx context.Context, opts *profiles.UpsertProfileOpts) (*users.UserUUID, error)
	GetProfileByUserUUID(ctx context.Context, iuuid *users.UserUUID) (*profiles.ProfilePayload, error)
}

// NewProfileSvc creates a new ProfileService
func NewProfileSvc(db *sqlx.DB, logger log.Logger) ProfileService {
	idb := database.NewProfileDatabase(db, logger)
	lmw := middleware.LoggingMiddleware(logger)
	return &profilesService{idb, lmw}
}

// profilesService implements service Profiles.
type profilesService struct {
	DB     database.ProfileDatabase
	logger *middleware.LoggerMiddleware
}

// UpsertProfile inserts or updates profiles wih given options
func (i *profilesService) UpsertProfile(ctx context.Context, opts *profiles.UpsertProfileOpts) (*users.UserUUID, error) {
	if opts.UserUUID == "" {
		defer func(begin time.Time) {
			_ = i.logger.Log(ctx, "", "", errUserUUIDRequired, time.Since(begin))
		}(time.Now())
		return nil, errUserUUIDRequired
	}
	result, err := i.DB.UpsertProfile(ctx, opts)
	if err != nil {
		return nil, err
	}
	defer func(begin time.Time) {
		_ = i.logger.Log(ctx, "", "user_uuid\":"+result.UserUUID, err, time.Since(begin))
	}(time.Now())

	return result, nil
}

func (i *profilesService) GetProfileByUserUUID(ctx context.Context, iuuid *users.UserUUID) (*profiles.ProfilePayload, error) {
	if iuuid == nil {
		defer func(begin time.Time) {
			_ = i.logger.Log(ctx, "", "", errUserUUIDRequired, time.Since(begin))
		}(time.Now())
		return nil, errUserUUIDRequired
	}

	result, err := i.DB.GetProfileByUserUUID(ctx, iuuid)
	if err != nil {
		return nil, errNotFoundError
	}
	defer func(begin time.Time) {
		_ = i.logger.Log(ctx, "user_uuid\":"+iuuid.UserUUID, "user_uuid\":"+result.UserUUID, err, time.Since(begin))
	}(time.Now())

	return result, nil
}
