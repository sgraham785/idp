package usecase

import (
	"context"

	"github.com/canary-health/gotils/pkg/logger"
	"github.com/canary-health/idp/internal/personal_info"
	"github.com/canary-health/idp/internal/personal_info/infrastructure"
	"github.com/canary-health/idp/internal/user"

	"github.com/go-kit/kit/log"
)

// PersonalInfoUsecase is the set of service calls that can be made for personalInfos
type PersonalInfoUsecase interface {
	UpsertPersonalInfo(ctx context.Context, opts *personalinfo.UpsertPersonalInfoOpts) (*user.UserUUID, error)
	GetPersonalInfoByUserUUID(ctx context.Context, uuid *user.UserUUID) (*personalinfo.PersonalInfoPayload, error)
}

type personalInfoUsecase struct {
	personalInfoDB infrastructure.PersonalInfoDatabase
	Logger         *logger.Logger
}

// NewPersonalInfoUsecase creates a new PersonalInfoUsecase
func NewPersonalInfoUsecase(pidb infrastructure.PersonalInfoDatabase, ll log.Logger) PersonalInfoUsecase {
	log := logger.NewLogger(ll)
	return &personalInfoUsecase{pidb, log}
}
