package service

import (
	"context"
	"time"

	"github.com/canary-health/idp/_rpc/users"
	"github.com/canary-health/idp/internal/database"
	"github.com/canary-health/idp/internal/middleware"

	"github.com/go-kit/kit/log"
	"github.com/jmoiron/sqlx"
)

// UserService is the set of service calls that can be made for users
type UserService interface {
	UpsertUser(ctx context.Context, opts *users.UpsertUserOpts) (*users.UserUUID, error)
	AuthUserByEmailAndPassword(ctx context.Context, opts *users.AuthUserByEmailAndPasswordOpts) (*users.UserUUID, error)
}

// NewUserSvc creates a new UserService
func NewUserSvc(db *sqlx.DB, logger log.Logger) UserService {
	idb := database.NewUserDatabase(db, logger)
	lmw := middleware.LoggingMiddleware(logger)
	return &identService{idb, lmw}
}

// UserService implements service Users.
type identService struct {
	DB     database.UserDatabase
	logger *middleware.LoggerMiddleware
}

// UpsertUser inserts or updates an identity wih given options
func (i *identService) UpsertUser(ctx context.Context, opts *users.UpsertUserOpts) (*users.UserUUID, error) {
	err := serviceValidator(opts.ServiceSlug)
	if err != nil {
		defer func(begin time.Time) {
			_ = i.logger.Log(ctx, "", "", err, time.Since(begin))
		}(time.Now())
		return nil, err
	}

	err = emailValidator(opts.Email)
	if err != nil {
		defer func(begin time.Time) {
			_ = i.logger.Log(ctx, "", "", err, time.Since(begin))
		}(time.Now())
		return nil, err
	}

	err = passwordValidator(opts.Password, opts.VerifyPassword)
	if err != nil {
		defer func(begin time.Time) {
			_ = i.logger.Log(ctx, "", "", err, time.Since(begin))
		}(time.Now())
		return nil, err
	}

	result, err := i.DB.UpsertUser(ctx, opts)
	if err != nil {
		return nil, err
	}
	defer func(begin time.Time) {
		_ = i.logger.Log(ctx, "", result, err, time.Since(begin))
	}(time.Now())

	return result, nil
}

func (i *identService) AuthUserByEmailAndPassword(ctx context.Context, opts *users.AuthUserByEmailAndPasswordOpts) (*users.UserUUID, error) {
	if opts.ServiceSlug == "" {
		defer func(begin time.Time) {
			_ = i.logger.Log(ctx, "", "", errServiceSlugRequired, time.Since(begin))
		}(time.Now())
		return nil, errServiceSlugRequired
	}
	if opts.Email == "" || opts.Password == "" {
		defer func(begin time.Time) {
			_ = i.logger.Log(ctx, "", "", errEmailAndPasswordRequired, time.Since(begin))
		}(time.Now())
		return nil, errEmailAndPasswordRequired
	}

	result, err := i.DB.AuthUserByEmailAndPassword(ctx, opts)
	if err != nil {
		return nil, errEmailOrPasswordInvalid
	}
	defer func(begin time.Time) {
		_ = i.logger.Log(ctx, "", result, err, time.Since(begin))
	}(time.Now())

	return result, nil
}
