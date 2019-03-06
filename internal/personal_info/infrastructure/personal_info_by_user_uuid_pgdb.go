package infrastructure

import (
	"context"
	"time"

	"github.com/canary-health/idp/internal/personal_info"
	"github.com/canary-health/idp/internal/user"
)

func (i *personalInfoDatabase) GetPersonInfoByUserUUID(ctx context.Context, uuid *user.UserUUID) (*personalinfo.PersonalInfoPayload, error) {

	sql := `SELECT * FROM personal_info WHERE user_uuid = $1`

	var result personalinfo.PersonalInfoPayload
	err := i.DB.QueryRowx(sql, uuid.UserUUID).StructScan(&result)
	defer func(begin time.Time) {
		_ = i.Logger.TwirpLog(ctx, uuid.UserUUID, result.UserUUID, err, time.Since(begin))
	}(time.Now())
	if err != nil {
		return nil, err
	}

	return &result, nil
}
