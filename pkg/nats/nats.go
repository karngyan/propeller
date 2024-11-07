package natspkg

import (
	"context"
	"time"

	"github.com/CRED-CLUB/propeller/internal/perror"
	"github.com/CRED-CLUB/propeller/pkg/logger"
	"github.com/nats-io/nats-server/v2/server"
	"github.com/nats-io/nats.go"
)

// wait period for the embedded server to start
const waitPeriod = 5

// Client holds the connection to NATS
type Client struct {
	conn *nats.Conn
}

// NewClient returns a new client with the connection
func NewClient(ctx context.Context, config Config) (*Client, error) {
	nc, err := nats.Connect(config.URL)
	if err != nil {
		pErr := perror.Newf(perror.Internal, "unable to connect to nats %w", err)
		logger.Ctx(ctx).Error(pErr.Error())
		return nil, pErr
	}
	return &Client{nc}, err
}

// Publish data to the subject
func (nc *Client) Publish(ctx context.Context, request PublishRequest) error {
	err := nc.conn.Publish(request.Channel, request.Data)
	if err != nil {
		pErr := perror.Newf(perror.Internal, "unable to publish to nats %w", err)
		logger.Ctx(ctx).Error(pErr.Error())
		return pErr
	}
	return nil
}

// Unsubscribe a subscriber
func (nc *Client) Unsubscribe(ctx context.Context, subscription *nats.Subscription) error {
	err := subscription.Unsubscribe()
	if err != nil {
		pErr := perror.Newf(perror.Internal, "unable to unsubscribe %w", err)
		logger.Ctx(ctx).Error(pErr.Error())
		return pErr
	}
	return nil
}

// AsyncSubscribe to a subject
func (nc *Client) AsyncSubscribe(ctx context.Context, subject string, f func(msg *nats.Msg)) (*nats.Subscription, error) {
	s, err := nc.conn.Subscribe(subject, f)
	if err != nil {
		pErr := perror.Newf(perror.Internal, "error in creating subscription %w", err)
		logger.Ctx(ctx).Error(pErr.Error())
		return nil, pErr
	}
	return s, nil
}

// NewEmbeddedServer start an embedded NATS server for stage/testing
func NewEmbeddedServer(ctx context.Context) (string, error) {
	opts := &server.Options{JetStream: true}
	ns, err := server.NewServer(opts)
	if err != nil {
		pErr := perror.Newf(perror.Internal, "unable to init nats server %w", err)
		logger.Ctx(ctx).Error(pErr.Error())
		return "", pErr
	}

	go ns.Start()
	if !ns.ReadyForConnections(waitPeriod * time.Second) {
		pErr := perror.Newf(perror.Internal, "not ready for connection after %d secs", waitPeriod)
		logger.Ctx(ctx).Error(pErr.Error())
		return "", pErr
	}
	return ns.ClientURL(), nil
}
