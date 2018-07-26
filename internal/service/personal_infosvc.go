package service

import (
	"context"
	"time"

	"github.com/canary-health/idp/_rpc/personal_info"
	"github.com/canary-health/idp/_rpc/users"
	"github.com/canary-health/idp/internal/database"
	"github.com/canary-health/idp/internal/middleware"

	"github.com/go-kit/kit/log"
	"github.com/jmoiron/sqlx"
)

// PersonalInfoService is the set of service calls that can be made for personalInfos
type PersonalInfoService interface {
	UpsertPersonalInfo(ctx context.Context, opts *personalinfo.UpsertPersonalInfoOpts) (*users.UserUUID, error)
	GetPersonalInfoByUserUUID(ctx context.Context, iuuid *users.UserUUID) (*personalinfo.PersonalInfoPayload, error)
}

// NewPersonalInfoSvc creates a new PersonalInfoService
func NewPersonalInfoSvc(db *sqlx.DB, logger log.Logger) PersonalInfoService {
	idb := database.NewPersonalInfoDatabase(db, logger)
	lmw := middleware.LoggingMiddleware(logger)
	return &personalInfoService{idb, lmw}
}

// PersonalInfoService implements service PersonalInfos.
type personalInfoService struct {
	DB     database.PersonalInfoDatabase
	logger *middleware.LoggerMiddleware
}

// UpsertLessonContent inserts or updates lesson content wih given options
func (i *personalInfoService) UpsertPersonalInfo(ctx context.Context, opts *personalinfo.UpsertPersonalInfoOpts) (*users.UserUUID, error) {
	if opts.UserUUID == "" {
		defer func(begin time.Time) {
			_ = i.logger.Log(ctx, "", "", errUserUUIDRequired, time.Since(begin))
		}(time.Now())
		return nil, errUserUUIDRequired
	}

	result, err := i.DB.UpsertPersonalInfo(ctx, opts)
	if err != nil {
		return nil, err
	}
	defer func(begin time.Time) {
		_ = i.logger.Log(ctx, opts.UserUUID, result, err, time.Since(begin))
	}(time.Now())

	return result, nil
}

func (i *personalInfoService) GetPersonalInfoByUserUUID(ctx context.Context, iuuid *users.UserUUID) (*personalinfo.PersonalInfoPayload, error) {
	if iuuid == nil {
		defer func(begin time.Time) {
			_ = i.logger.Log(ctx, "", "", errUserUUIDRequired, time.Since(begin))
		}(time.Now())
		return nil, errUserUUIDRequired
	}

	result, err := i.DB.GetPersonInfoByUserUUID(ctx, iuuid)
	if err != nil {
		return nil, err
	}
	defer func(begin time.Time) {
		_ = i.logger.Log(ctx, "user_uuid\":"+iuuid.UserUUID, "user_uuid\":"+result.UserUUID, err, time.Since(begin))
	}(time.Now())

	return result, nil
}
