package usecase

import (
	"context"

	"github.com/canary-health/gotils/pkg/logger"
	"github.com/canary-health/idp/internal/profile"
	"github.com/canary-health/idp/internal/profile/domain"
	"github.com/canary-health/idp/internal/profile/infrastructure"
	"github.com/canary-health/idp/internal/user"

	"github.com/go-kit/kit/log"
)

// ProfileUsecase is the set of service calls that can be made for profiles
type ProfileUsecase interface {
	UpsertProfile(ctx context.Context, opts *profile.UpsertProfileOpts) (*user.UserUUID, error)
	GetProfileByUserUUID(ctx context.Context, uuid *user.UserUUID) (*profile.ProfilePayload, error)
}

type profileUsecase struct {
	profileDomain domain.ProfileDomain
	profileDB     infrastructure.ProfileDatabase
	Logger        *logger.Logger
}

// NewProfileUsecase creates a new ProfileUsecase
func NewProfileUsecase(pdb infrastructure.ProfileDatabase, ll log.Logger) ProfileUsecase {
	pd := domain.NewProfileDomains(ll)
	lmw := logger.NewLogger(ll)
	return &profileUsecase{pd, pdb, lmw}
}
