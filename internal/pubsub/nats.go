package pubsub

import (
	"context"
	"sync"

	"github.com/CRED-CLUB/propeller/internal/perror"
	"github.com/CRED-CLUB/propeller/internal/pubsub/subscription"
	"github.com/CRED-CLUB/propeller/pkg/logger"
	natsclient "github.com/CRED-CLUB/propeller/pkg/nats"
	natspkg "github.com/CRED-CLUB/propeller/pkg/nats"
	"github.com/google/uuid"
	"github.com/nats-io/nats.go"
)

// Nats is wrapper for nats pubsub
type Nats struct {
	BasePubSub
	conn *natsclient.Client
}

// NewNats returns nats Redis
func NewNats(conn *natsclient.Client) IPubSub {
	return &Nats{BasePubSub{&sync.Map{}}, conn}
}

// Publish a event
func (n *Nats) Publish(ctx context.Context, request PublishRequest) error {
	publishReq := natspkg.PublishRequest{Channel: request.Channel, Data: request.Data}
	return n.conn.Publish(ctx, publishReq)
}

// PublishBulk publishes messages in bulk
func (n *Nats) PublishBulk(ctx context.Context, request []PublishRequest) error {
	//TODO implement bulk in NATS @Mayank
	for _, v := range request {
		publishReq := natspkg.PublishRequest{Channel: v.Channel, Data: v.Data}
		err := n.conn.Publish(ctx, publishReq)
		if err != nil {
			pErr := perror.Newf(perror.Internal, "error in publishing %w", err)
			logger.Ctx(ctx).Error(pErr.Error())
			return pErr
		}
	}
	return nil
}

// AsyncSubscribe to subscribe to a subject
func (n *Nats) AsyncSubscribe(ctx context.Context, subject ...string) (*subscription.Subscription, error) {
	id, err := uuid.NewUUID()
	if err != nil {
		return nil, err
	}
	subs := &subscription.Subscription{
		EventChan: make(chan []byte),
		ErrChan:   make(chan error),
		ID:        id,
	}

	natsSubscription := &natsSubscription{ctx, subs}
	var natsSubscriptionList []*nats.Subscription

	for _, s := range subject {
		ns, err := n.conn.AsyncSubscribe(ctx, s, natsSubscription.asyncMessageHandler)
		if err != nil {
			subs.ErrChan <- err
		}
		natsSubscriptionList = append(natsSubscriptionList, ns)
		n.BasePubSub.Store(ctx, id.String(), natsSubscriptionList)
	}
	return subs, nil
}

// Unsubscribe from a subject
func (n *Nats) Unsubscribe(ctx context.Context, subs *subscription.Subscription) error {
	v, err := n.BasePubSub.LoadAndDelete(ctx, subs.ID.String())
	if err != nil {
		return err
	}
	var ns *nats.Subscription
	switch v.(type) {
	case *nats.Subscription:
		ns = v.(*nats.Subscription)
	default:
		pErr := perror.Newf(perror.Internal, "type not defined")
		logger.Ctx(ctx).Error(pErr)
		return pErr
	}
	return n.conn.Unsubscribe(ctx, ns)
}

// AddSubscription ..
func (n *Nats) AddSubscription(ctx context.Context, subject string, subs *subscription.Subscription) error {
	//TODO: add implementation
	return nil
}

// RemoveSubscription ...
func (n *Nats) RemoveSubscription(ctx context.Context, subject string, subs *subscription.Subscription) error {
	//TODO: add implementation
	return nil
}

type natsSubscription struct {
	ctx          context.Context
	subscription *subscription.Subscription
}

func (ns *natsSubscription) asyncMessageHandler(msg *nats.Msg) {
	ns.subscription.EventChan <- msg.Data
}
