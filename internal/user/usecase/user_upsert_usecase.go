package usecase

import (
	"context"
	"time"

	"github.com/canary-health/idp/internal/err_msg"
	"github.com/canary-health/idp/internal/user"
)

// UpsertUser inserts or updates an user identity wih given options
func (i *userUsecase) UpsertUser(ctx context.Context, opts *user.UpsertUserOpts) (*user.UserUUID, error) {

	if ok, _ := i.userDomain.IsUserValid(ctx, opts); ok {
		result, err := i.userDB.UpsertUser(ctx, opts)
		if err != nil {
			return nil, err
		}
		defer func(begin time.Time) {
			_ = i.Logger.TwirpLog(ctx, "", opts.ServiceSlug, result, err, time.Since(begin))
		}(time.Now())

		return result, nil
	}

	return nil, errmsg.NotFoundError
}
