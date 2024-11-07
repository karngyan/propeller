package main

import (
	"context"
	"flag"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/CRED-CLUB/propeller/internal/boot"
	"github.com/CRED-CLUB/propeller/internal/component"
	"github.com/CRED-CLUB/propeller/internal/config"
	configreader "github.com/CRED-CLUB/propeller/pkg/config"
	"github.com/CRED-CLUB/propeller/pkg/logger"
)

// ConfigFileName is the default name of propeller config file
const ConfigFileName = "propeller"

func main() {
	// Initialize context
	ctx := boot.NewContext(context.Background())

	// parse the cmd input
	flag.Parse()

	// read the componentName config for appEnv
	var appConfig config.Config
	err := configreader.NewDefaultConfig().Load(ConfigFileName, &appConfig)
	if err != nil {
		log.Fatal(err)
	}

	// init log
	err = boot.InitLogging(appConfig)
	if err != nil {
		log.Fatalf(err.Error())
	}

	// initialise API server
	apiServer, err := component.NewAPIServer(appConfig)
	if err != nil {
		logger.Ctx(ctx).Fatalf(err.Error())
	}

	// Run propeller
	err = Run(ctx, apiServer)
	if err != nil {
		logger.Ctx(ctx).Fatalf(err.Error())
	}

	logger.Ctx(ctx).Infof("stopping propeller")
}

// Run handles the component execution lifecycle
func Run(ctx context.Context, component component.IComponent) error {
	ctx, cancel := context.WithCancel(ctx)

	// Shutdown monitoring
	defer func() {
		err := boot.Close()
		if err != nil {
			logger.Ctx(ctx).Fatalw("error closing", "error", err.Error())
		}
	}()

	// Handle SIGINT & SIGTERM - Shutdown gracefully
	sigCh := make(chan os.Signal, 1)
	done := make(chan bool, 1)
	signal.Notify(sigCh, syscall.SIGTERM)

	// cleanup
	defer func() {
		signal.Stop(sigCh)
		cancel()
	}()

	go func() {
		sig := <-sigCh
		logger.Ctx(ctx).Infof("received signal to stop %v", sig)
		cancel()
		done <- true
	}()

	err := component.Start(ctx)
	if err != nil {
		return err
	}
	<-done
	return nil
}
