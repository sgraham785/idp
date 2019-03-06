package domain

import (
	"github.com/canary-health/gotils/pkg/logger"
	"github.com/go-kit/kit/log"
)

// ProfileDomain gathers the user domain methods
type ProfileDomain interface{}

type profileDomain struct {
	Logger *logger.Logger
}

// NewProfileDomain creates a new ProfileDomain
func NewProfileDomain(ll log.Logger) ProfileDomain {
	log := logger.NewLogger(ll)
	return &profileDomain{log}
}
