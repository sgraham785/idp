package usecase

import (
	"context"

	"github.com/canary-health/gotils/pkg/logger"
	"github.com/canary-health/idp/internal/user"
	"github.com/canary-health/idp/internal/user/domain"
	"github.com/canary-health/idp/internal/user/infrastructure"
	"github.com/go-kit/kit/log"
)

// UserUsecase is the set of service calls that can be made for users
type UserUsecase interface {
	UpsertUser(ctx context.Context, opts *user.UpsertUserOpts) (*user.UserUUID, error)
	AuthenticateUser(ctx context.Context, opts *user.AuthenticateUserOpts) (*user.UserUUID, error)
}

type userUsecase struct {
	userDomain domain.UserDomain
	userDB     infrastructure.UserDatabase
	Logger     *logger.Logger
}

// NewUserUsecase creates a new UserUsecase
func NewUserUsecase(udb infrastructure.UserDatabase, ll log.Logger) UserUsecase {
	ud := domain.NewUserDomain(ll)
	log := logger.NewLogger(ll)
	return &userUsecase{ud, udb, log}
}
