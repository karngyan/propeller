package broker

import (
	natspkg "github.com/CRED-CLUB/propeller/pkg/nats"
	redispkg "github.com/CRED-CLUB/propeller/pkg/redis"
)

// Config for broker
type Config struct {
	Broker      string
	Persistence bool
	Nats        natspkg.Config
	Redis       redispkg.Config
}
