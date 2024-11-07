## Set defaults
export GO111MODULE := on

# Fetch OS info
GOVERSION=$(shell go version)
UNAME_OS=$(shell go env GOOS)
UNAME_ARCH=$(shell go env GOARCH)

# buf
BUF_BIN := /usr/local/bin
BUF_VERSION := 1.17.0
BUF_BINARY_NAME := buf
BUF_UNAME_OS := $(shell uname -s)
BUF_UNAME_ARCH := $(shell uname -m)

BINARY_OUT       := "bin/propeller"
MAIN_PACKAGE_PATH := "github.com/CRED-CLUB/propeller/cmd/service"

CLIENT_BINARY_OUT := "bin/propeller-client"
CLIENT_PACKAGE_PATH := "github.com/CRED-CLUB/propeller/cmd/client"
PERF_CLIENT_BINARY_OUT := "bin/propeller-perf-client"
PERF_CLIENT_PACKAGE_PATH := "github.com/CRED-CLUB/propeller/cmd/client/perf"

RPC_ROOT := "rpc/"

# go binary. Change this to experiment with different versions of go.
GO       = go

VERBOSE = 0
Q 		= $(if $(filter 1,$VERBOSE),,@)
M 		= $(shell printf "\033[34;1m▶\033[0m")

BIN 	 = $(CURDIR)/bin
PKGS     = $(or $(PKG),$(shell $(GO) list ./...))

$(BIN)/%: | $(BIN) ; $(info $(M) building package: $(PACKAGE)…)
	tmp=$$(mktemp -d); \
	   env GOBIN=$(BIN) go install $(PACKAGE) \
		|| ret=$$?; \
	   rm -rf $$tmp ; exit $$ret

$(BIN)/goimports: PACKAGE=golang.org/x/tools/cmd/goimports@latest

GOIMPORTS = $(BIN)/goimports

GOFILES     ?= $(shell find . -type f -name '*.go' -not -path "./vendor/*" -not -path "./statik/*" -not -path "./rpc/*" -not -path "*/mocks/*")

.PHONY: goimports ## Run goimports and format files
goimports: | $(GOIMPORTS) ; $(info $(M) running goimports…) @
	$Q $(GOIMPORTS) -w $(GOFILES)

.PHONY: goimports-check ## Check goimports without modifying the files
goimports-check: | $(GOIMPORTS) ; $(info $(M) running goimports -l …) @
	$(eval FILES=$(shell sh -c '$(GOIMPORTS) -l $(GOFILES)'))
	@$(if $(strip $(FILES)), echo $(FILES); exit 1, echo "goimports check passed")

$(BIN)/golint: PACKAGE=golang.org/x/lint/golint@latest

GOLINT = $(BIN)/golint

.PHONY: go-lint ## Run golint check
go-lint: | $(GOLINT) ; $(info $(M) running golint…) @
	$Q $(GOLINT) -set_exit_status $(PKGS)

.PHONY: proto-generate ## Generate proto bindings
proto-generate:
	go run github.com/bufbuild/buf/cmd/buf@v${BUF_VERSION} generate

.PHONY: proto-lint ## Proto lint
proto-lint:
	go run github.com/bufbuild/buf/cmd/buf@v${BUF_VERSION} lint
	go run github.com/bufbuild/buf/cmd/buf@v${BUF_VERSION} breaking --against '.git#branch=master'

.PHONY: proto-clean ## Clean generated proto files
proto-clean:
	@rm -rf $(RPC_ROOT)

.PHONY: build ## Build the binary
build:  proto-generate
	GOOS=$(UNAME_OS) GOARCH=$(UNAME_ARCH) go build -v -o $(BINARY_OUT) $(MAIN_PACKAGE_PATH)

.PHONY: build-client ## Build the test client binary
build-client:
	GOOS=$(UNAME_OS) GOARCH=$(UNAME_ARCH) go build -v -o $(CLIENT_BINARY_OUT) $(CLIENT_PACKAGE_PATH)

.PHONY: build-client-linux ## Build the test client binary
build-client-linux:
	GOOS=linux GOARCH=amd64 go build -v -o $(CLIENT_BINARY_OUT)-linux $(CLIENT_PACKAGE_PATH)

.PHONY: build-linux ## build the binary file for linux
build-linux:  proto-generate
	GOOS=linux GOARCH=amd64 go build -v -o $(BINARY_OUT)-linux $(MAIN_PACKAGE_PATH)



.PHONY: dev-dependencies-up ## Bring up the dependencies
dev-dependencies-up:
	docker compose -f docker/dev/docker-compose-dependencies.yml up -d

.PHONY: dev-dependencies-down ## Bring down the dependencies
dev-dependencies-down:
	docker compose -f docker/dev/docker-compose-dependencies.yml down

.PHONY: help ## Display this help screen
help:
	@echo "Usage:"
	@grep -E '^\.PHONY: [a-zA-Z_-]+.*?## .*$$' $(MAKEFILE_LIST) | sort | sed 's/\.PHONY\: //' | awk 'BEGIN {FS = " ## "}; {printf "\t\033[36m%-30s\033[0m %s\n", $$1, $$2}'

