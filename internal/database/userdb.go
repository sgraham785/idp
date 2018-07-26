package database

import (
	"context"
	"fmt"
	"reflect"
	"time"

	"github.com/canary-health/idp/_rpc/users"
	"github.com/canary-health/idp/internal/middleware"
	"github.com/go-kit/kit/log"
	"github.com/jmoiron/sqlx"
	"golang.org/x/crypto/bcrypt"
)

// UserDatabase is the set of calls that can be made to the database for users
type UserDatabase interface {
	UpsertUser(ctx context.Context, opts *users.UpsertUserOpts) (*users.UserUUID, error)
	AuthUserByEmailAndPassword(ctx context.Context, opts *users.AuthUserByEmailAndPasswordOpts) (*users.UserUUID, error)
}

// NewUserDatabase is called to connect to the db for users
func NewUserDatabase(db *sqlx.DB, logger log.Logger) UserDatabase {
	lmw := middleware.LoggingMiddleware(logger)
	return &userDatabase{db, lmw}
}

type userDatabase struct {
	db     *sqlx.DB
	logger *middleware.LoggerMiddleware
}

func (i *userDatabase) UpsertUser(ctx context.Context, opts *users.UpsertUserOpts) (*users.UserUUID, error) {

	sql := `INSERT INTO users ( service_slug, email, password )
		VALUES
			( $1, $2, $3 ) ON CONFLICT ON CONSTRAINT users_service_slug_email_key DO
		UPDATE 
			SET ( service_slug, email, password ) = ( EXCLUDED.service_slug, EXCLUDED.email, EXCLUDED.password ) RETURNING user_uuid`

	var result users.UserUUID
	hash, err := bcrypt.GenerateFromPassword([]byte(opts.Password), 10)
	err = i.db.QueryRowx(sql, opts.ServiceSlug, opts.Email, hash).StructScan(&result)
	defer func(begin time.Time) {
		_ = i.logger.Log(ctx, result, "", err, time.Since(begin))
	}(time.Now())
	if err != nil {
		return nil, err
	}

	return &result, nil
}

func (i *userDatabase) AuthUserByEmailAndPassword(ctx context.Context, opts *users.AuthUserByEmailAndPasswordOpts) (*users.UserUUID, error) {

	sql := `SELECT user_uuid, service_slug, email, password FROM users WHERE service_slug = $1 AND email = $2`

	var iuuid users.UserUUID
	var result users.AuthUserByEmailAndPasswordPayload
	err := i.db.QueryRowx(sql, opts.ServiceSlug, opts.Email).StructScan(&result)
	if err != nil {
		return nil, err
	}
	fmt.Println(reflect.TypeOf(result.UserUUID))

	err = bcrypt.CompareHashAndPassword([]byte(result.Password), []byte(opts.Password))
	defer func(begin time.Time) {
		_ = i.logger.Log(ctx, result, "", err, time.Since(begin))
	}(time.Now())
	if err != nil {
		return nil, err
	}
	iuuid.UserUUID = result.UserUUID
	return &iuuid, nil
}
