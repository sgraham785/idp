package usecase

import (
	"context"
	"time"

	"github.com/canary-health/idp/internal/err_msg"
	"github.com/canary-health/idp/internal/user"
)

func (i *userUsecase) AuthenticateUser(ctx context.Context, opts *user.AuthenticateUserOpts) (*user.UserUUID, error) {

	if opts.ServiceSlug == "" {
		defer func(begin time.Time) {
			_ = i.Logger.TwirpLog(ctx, "", nil, nil, errmsg.ServiceSlugRequired, time.Since(begin))
		}(time.Now())
		return nil, errmsg.ServiceSlugRequired
	}
	if opts.Email == "" || opts.Password == "" {
		defer func(begin time.Time) {
			_ = i.Logger.TwirpLog(ctx, "", nil, nil, errmsg.EmailAndPasswordRequired, time.Since(begin))
		}(time.Now())
		return nil, errmsg.EmailAndPasswordRequired
	}

	result, err := i.userDB.AuthenticateUser(ctx, opts)
	if err != nil {
		return nil, errmsg.EmailOrPasswordInvalid
	}
	defer func(begin time.Time) {
		_ = i.Logger.TwirpLog(ctx, "", opts.ServiceSlug, result, err, time.Since(begin))
	}(time.Now())

	return result, nil
}
