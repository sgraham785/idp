package infrastructure

import (
	"context"
	"time"

	"github.com/canary-health/idp/internal/user"
	"golang.org/x/crypto/bcrypt"
)

func (i *userDatabase) UpsertUser(ctx context.Context, opts *user.UpsertUserOpts) (*user.UserUUID, error) {

	sql := `INSERT INTO users ( service_slug, email, password )
		VALUES
			( $1, $2, $3 ) ON CONFLICT ON CONSTRAINT users_service_slug_email_key DO
		UPDATE 
			SET ( service_slug, email, password ) = ( EXCLUDED.service_slug, EXCLUDED.email, EXCLUDED.password ) RETURNING user_uuid`

	var result user.UserUUID
	hash, err := bcrypt.GenerateFromPassword([]byte(opts.Password), 10)
	err = i.DB.QueryRowx(sql, opts.ServiceSlug, opts.Email, hash).StructScan(&result)
	defer func(begin time.Time) {
		_ = i.Logger.TwirpLog(ctx, "", nil, result, err, time.Since(begin))
	}(time.Now())
	if err != nil {
		return nil, err
	}

	return &result, nil
}
