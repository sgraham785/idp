package usecase

import (
	"context"
	"time"

	"github.com/canary-health/idp/internal/personal_info"
	"github.com/canary-health/idp/internal/user"
)

func (i *personalInfoUsecase) GetPersonalInfoByUserUUID(ctx context.Context, uuid *user.UserUUID) (*personalinfo.PersonalInfoPayload, error) {
	if uuid == nil {
		defer func(begin time.Time) {
			_ = i.Logger.TwirpLog(ctx, "", "", errUserUUIDRequired, time.Since(begin))
		}(time.Now())
		return nil, errUserUUIDRequired
	}

	result, err := i.personalInfoDB.GetPersonInfoByUserUUID(ctx, uuid)
	if err != nil {
		return nil, err
	}
	defer func(begin time.Time) {
		_ = i.Logger.TwirpLog(ctx, "user_uuid\":"+uuid.UserUUID, "user_uuid\":"+result.UserUUID, err, time.Since(begin))
	}(time.Now())

	return result, nil
}
