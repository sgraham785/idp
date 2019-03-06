package domain

import (
	"context"

	"github.com/canary-health/gotils/pkg/logger"
	"github.com/canary-health/idp/internal/user"
	"github.com/go-kit/kit/log"
)

// UserDomain gathers the user domain methods
type UserDomain interface {
	IsUserValid(ctx context.Context, opts *user.UpsertUserOpts) (bool, error)
}

type userDomain struct {
	Logger *logger.Logger
}

// NewUserDomain creates a new UserDomain
func NewUserDomain(ll log.Logger) UserDomain {
	log := logger.NewLogger(ll)
	return &userDomain{log}
}
