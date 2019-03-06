package infrastructure

import (
	"context"
	"time"

	"github.com/canary-health/idp/internal/profile"
	"github.com/canary-health/idp/internal/user"
)

func (i *profileDatabase) GetProfileByUserUUID(ctx context.Context, iuuid *user.UserUUID) (*profile.ProfilePayload, error) {

	sql := `SELECT * FROM profile WHERE user_uuid = $1`

	var result profile.ProfilePayload
	err := i.DB.QueryRowx(sql, iuuid.UserUUID).StructScan(&result)
	if err != nil {
		return nil, err
	}
	defer func(begin time.Time) {
		_ = i.Logger.TwirpLog(ctx, iuuid.UserUUID, result.UserUUID, err, time.Since(begin))
	}(time.Now())
	if err != nil {
		return nil, err
	}
	return &result, nil
}
