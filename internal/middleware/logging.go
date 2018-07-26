package middleware

import (
	"context"
	"time"

	"github.com/twitchtv/twirp"

	"github.com/go-kit/kit/log"
)

// LoggingMiddleware takes a logger as a dependency
// and returns type LoggerMiddleware.
func LoggingMiddleware(logger log.Logger) *LoggerMiddleware {
	return &LoggerMiddleware{logger}
}

// LoggerMiddleware defines a logger
type LoggerMiddleware struct {
	logger log.Logger
}

// Log implemetents logging middleware
func (mw *LoggerMiddleware) Log(ctx context.Context, input, output interface{}, err error, took time.Duration) error {
	pkg, _ := twirp.PackageName(ctx)
	service, _ := twirp.ServiceName(ctx)
	method, _ := twirp.MethodName(ctx)
	_ = mw.logger.Log(
		"pkg", pkg,
		"service", service,
		"method", method,
		"input", input,
		"output", output,
		"err", err,
		"took", took,
	)
	return nil
}
