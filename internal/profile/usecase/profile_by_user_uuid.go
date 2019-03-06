package usecase

import (
	"context"
	"time"

	"github.com/canary-health/idp/internal/err_msg"
	"github.com/canary-health/idp/internal/profile"
	"github.com/canary-health/idp/internal/user"
)

func (i *profileUsecase) GetProfileByUserUUID(ctx context.Context, uuid *user.UserUUID) (*profile.ProfilePayload, error) {

	if uuid == nil {
		defer func(begin time.Time) {
			_ = i.Logger.TwirpLog(ctx, "", "", errUserUUIDRequired, time.Since(begin))
		}(time.Now())
		return nil, errmsg.UserUUIDRequired
	}

	result, err := i.profileDB.GetProfileByUserUUID(ctx, uuid)
	if err != nil {
		return nil, errmsg.NotFoundError
	}
	defer func(begin time.Time) {
		_ = i.Logger.TwirpLog(ctx, "user_uuid\":"+uuid.UserUUID, "user_uuid\":"+result.UserUUID, err, time.Since(begin))
	}(time.Now())

	return result, nil
}
