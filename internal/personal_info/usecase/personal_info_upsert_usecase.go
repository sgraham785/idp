package usecase

import (
	"context"
	"time"

	"github.com/canary-health/idp/internal/err_msg"
	"github.com/canary-health/idp/internal/personal_info"
	"github.com/canary-health/idp/internal/user"
)

// UpsertLessonContent inserts or updates lesson content wih given options
func (i *personalInfoUsecase) UpsertPersonalInfo(ctx context.Context, opts *personalinfo.UpsertPersonalInfoOpts) (*user.UserUUID, error) {
	if opts.UserUUID == "" {
		defer func(begin time.Time) {
			_ = i.Logger.TwirpLog(ctx, "", "", errmsg.UserUUIDRequired, time.Since(begin))
		}(time.Now())
		return nil, errUserUUIDRequired
	}

	result, err := i.personalInfoDB.UpsertPersonalInfo(ctx, opts)
	if err != nil {
		return nil, err
	}
	defer func(begin time.Time) {
		_ = i.Logger.TwirpLog(ctx, opts.UserUUID, result, err, time.Since(begin))
	}(time.Now())

	return result, nil
}
