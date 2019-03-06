package infrastructure

import (
	"context"
	"fmt"
	"time"

	"github.com/canary-health/idp/internal/user"
	"golang.org/x/crypto/bcrypt"
)

func (i *userDatabase) AuthenticateUser(ctx context.Context, opts *user.AuthenticateUserOpts) (*user.UserUUID, error) {

	sql := `SELECT user_uuid, service_slug, email, password FROM users WHERE service_slug = $1 AND email = $2`
	fmt.Printf("AuthenticateUser opts -> %v\n", opts)
	var uuid user.UserUUID
	var result user.AuthenticateUserPayload
	err := i.DB.QueryRowx(sql, opts.ServiceSlug, opts.Email).StructScan(&result)
	if err != nil {
		return nil, err
	}
	fmt.Println("result -> ", result)
	optsHash, err := bcrypt.GenerateFromPassword([]byte(opts.Password), 10)
	fmt.Println("optsHash -> ", optsHash)
	err = bcrypt.CompareHashAndPassword([]byte(result.Password), []byte(optsHash))
	defer func(begin time.Time) {
		_ = i.Logger.TwirpLog(ctx, "", nil, result, err, time.Since(begin))
	}(time.Now())
	if err != nil {
		return nil, err
	}
	uuid.UserUUID = result.UserUUID
	return &uuid, nil
}
