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
	build-client                   Build the test client binary
	build-client-linux             Build the test client binary
	build-linux                    build the binary file for linux
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
if you face missing go.sum entry for module providing package issue use while running make build use this command
```
go mod tidy
```

To start the redis locally (make redis-cli is installed)
```
make dev-dependencies-up
```
`./bin/propeller` to run the service
```
./bin/propeller
```
if there is any failure in running try adding platform value in docker-compose-dependencies.yml file
```
platform: linux/amd64 #based on the system
```

## Testing
