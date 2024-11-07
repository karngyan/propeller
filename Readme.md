# Propeller

Propeller is a platform to enable bi-directional low latency communication between two systems. The primary use-case is to enable server side events to the app.

# Setting Up

## Pre-requisites
1. Docker
2. Go 1.21
## Running the service

After cloning the repo, run `make help` to see list of all available commands
```
Usage:
	build                          Build the binary
	build-sample-client            Build the test client binary
	dev-dependencies-down          Bring down the dependencies
	dev-dependencies-up            Bring up the dependencies
	go-lint                        Run golint check
	goimports                      Run goimports and format files
	goimports-check                Check goimports without modifying the files
	help                           Display this help screen
	proto-clean                    Clean generated proto files
	proto-generate                 Generate proto bindings
	proto-lint                     Proto lint
```

Run `make proto-generate` to generate go bindings from the proto file
```
make proto-generate
```

Run `make build` to generate the executable binary
```
make build
```
To start the redis locally (make redis-cli is installed)
```
make dev-dependencies-up
```
`./bin/propeller` to run the service
```
./bin/propeller
```

## Testing

Build the sample client
```
make build-sample-client
```

`connect` the client
```
bin/propeller-client -action=connect -clientID=clientID
```

`send-event` with the client
```shell
bin/propeller-client -action=send-event -clientID=clientID
```
`connect` the client with an additional topic
```bash
 bin/propeller-client -action=connect -clientID=client -topic=test
```

`send-event` to the topic
```bash
bin/propeller-client -action=send-event -clientID=client -topic=test
```

