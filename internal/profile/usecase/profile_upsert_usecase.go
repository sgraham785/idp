package usecase

import (
	"context"
	"time"

	"github.com/canary-health/idp/internal/err_msg"
	"github.com/canary-health/idp/internal/profile"
	"github.com/canary-health/idp/internal/user"
)

// UpsertProfile inserts or updates profiles wih given options
func (i *profileUsecase) UpsertProfile(ctx context.Context, opts *profile.UpsertProfileOpts) (*user.UserUUID, error) {
	if opts.UserUUID == "" {
		defer func(begin time.Time) {
			_ = i.Logger.TwirpLog(ctx, "", "", errmsg.UserUUIDRequired, time.Since(begin))
		}(time.Now())
		return nil, errmsg.errUserUUIDRequired
	}
	result, err := i.profileDB.UpsertProfile(ctx, opts)
	if err != nil {
		return nil, err
	}
	defer func(begin time.Time) {
		_ = i.Logger.TwirpLog(ctx, "", "user_uuid\":"+result.UserUUID, err, time.Since(begin))
	}(time.Now())

	return result, nil
}
