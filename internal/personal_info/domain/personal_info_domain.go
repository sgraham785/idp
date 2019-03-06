package domain

import (
	"github.com/canary-health/gotils/pkg/logger"
	"github.com/go-kit/kit/log"
)

// PersonalInfoDomain gathers the user domain methods
type PersonalInfoDomain interface {
}

type personalInfoDomain struct {
	logger *logger.Logger
}

// NewPersonalInfoDomain creates a new PersonalInfoDomain
func NewPersonalInfoDomain(ll log.Logger) PersonalInfoDomain {
	log := logger.NewLogger(ll)
	return &personalInfoDomain{log}
}
