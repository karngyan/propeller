package boot

import (
	"context"
	"os"

	"github.com/CRED-CLUB/propeller/internal/config"
	"github.com/CRED-CLUB/propeller/pkg/logger"
)

// GetGitHash returns the git hash
func GetGitHash() string {
	return os.Getenv("DP_GIT_TAG")
}

// NewContext adds core key-value e.g. component name, git hash etc to
// existing context or to a new background context and returns.
func NewContext(ctx context.Context) context.Context {
	if ctx == nil {
		ctx = context.Background()
	}

	return ctx
}

// InitLogging initialises the logger
func InitLogging(config config.Config) error {
	// Initializes logging driver.
	serviceKV := map[string]interface{}{
		"serviceName":   config.ServiceName,
		"gitCommitHash": GetGitHash(),
	}
	_, err := logger.NewLogger(config.Logger.Type, serviceKV, nil)
	if err != nil {
		return err
	}
	return nil
}

// Close ...
func Close() error {
	return nil
}
