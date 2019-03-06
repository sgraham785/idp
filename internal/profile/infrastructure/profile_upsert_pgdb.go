package infrastructure

import (
	"context"
	"time"

	"github.com/canary-health/idp/internal/profile"
	"github.com/canary-health/idp/internal/user"
)

func (i *profileDatabase) UpsertProfile(ctx context.Context, opts *profile.UpsertProfileOpts) (*user.UserUUID, error) {

	sql := `INSERT INTO profile (
		user_uuid,
		screen_name,
		avatar,
		description,
		timezone,
		locale 
	)
	VALUES
		(
			$1, $2, $3, $4, $5, $6 
		) ON CONFLICT ON CONSTRAINT profile_pkey DO
	UPDATE 
		SET (
			user_uuid,
			screen_name,
			avatar,
			description,
			timezone,
			locale 
			) = (
			EXCLUDED.user_uuid,
			EXCLUDED.screen_name,
			EXCLUDED.avatar,
			EXCLUDED.description,
			EXCLUDED.timezone,
			EXCLUDED.locale 
		) RETURNING user_uuid`

	var result user.UserUUID
	err := i.DB.QueryRowx(sql, opts.UserUUID, opts.ScreenName, opts.Avatar, opts.Description, opts.Timezone, opts.Locale).StructScan(&result)
	defer func(begin time.Time) {
		_ = i.Logger.TwirpLog(ctx, opts.UserUUID, result, err, time.Since(begin))
	}(time.Now())
	if err != nil {
		return nil, err
	}

	return &result, nil
}
