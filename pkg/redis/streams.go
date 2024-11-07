package redispkg

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/CRED-CLUB/propeller/internal/perror"
	"github.com/CRED-CLUB/propeller/pkg/logger"
	"github.com/redis/go-redis/v9"
)

// Streams provide redis streams implementation
type Streams struct {
	c *Client
}

// NewStreams returns redis Streams
func NewStreams(c *Client) *Streams {
	return &Streams{c}
}

// Publish message to redis
func (ss Streams) Publish(ctx context.Context, request PublishRequest) error {
	v := map[string]interface{}{"data": request.Data}

	err := ss.c.client.XAdd(ctx, &redis.XAddArgs{
		Stream: request.Channel,
		MaxLen: 0,
		Values: v,
	}).Err()
	if err != nil {
		pErr := perror.Newf(perror.Internal, "error in redis stream publish %w", err)
		logger.Ctx(ctx).Error(pErr.Error())
		return err
	}

	return nil
}

// PublishBulk publishes messages in bulk
func (ss Streams) PublishBulk(ctx context.Context, publishRequests []PublishRequest) error {
	pipeline := ss.c.client.Pipeline()

	for _, request := range publishRequests {
		v := map[string]interface{}{"data": request.Data}
		err := pipeline.XAdd(ctx, &redis.XAddArgs{
			Stream: request.Channel,
			MaxLen: 0,
			Values: v,
		}).Err()

		if err != nil {
			pErr := perror.Newf(perror.Internal, "error in redis stream publish %w for request %+v", err, request)
			logger.Ctx(ctx).Error(pErr.Error())
		}

	}

	_, err := pipeline.Exec(ctx)
	if err != nil {
		pErr := perror.Newf(perror.Internal, "error in redis stream publish %w", err)
		logger.Ctx(ctx).Error(pErr.Error())
		return err
	}

	return nil
}

// Subscribe to a redis stream
func (ss Streams) Subscribe(ctx context.Context, channel ...string) ISubscription {
	StreamSubscription := StreamSubscription{
		Streams: ss,
		baseSubscription: baseSubscription{
			dataChan: make(chan []byte),
			topics:   channel,
		},
		channel: channel,
	}
	go StreamSubscription.start(ctx)
	return StreamSubscription
}

// RemoveSubscription ...
func (ss Streams) RemoveSubscription(ctx context.Context, channel string, s ISubscription) error {
	//TODO: implement
	return nil
}

// AddSubscription ...
func (ss Streams) AddSubscription(ctx context.Context, channel string, s ISubscription) error {
	//TODO: implement
	return nil
}

// UnSubscribe ...
func (ss Streams) UnSubscribe(ctx context.Context, s ISubscription) error {
	return nil
}

// StreamSubscription provides stream subscription
type StreamSubscription struct {
	Streams
	baseSubscription
	channel []string
}

func (st StreamSubscription) start(ctx context.Context) {
	for {
		select {
		case <-ctx.Done():
			return
		default:
			streams, err := st.Streams.c.client.XRead(ctx, &redis.XReadArgs{
				Streams: append(st.channel, "0"),
				Count:   1,
				Block:   60 * time.Second,
			}).Result()
			if err != nil {
				if strings.Contains(fmt.Sprint(err), "redis: nil") {
					continue
				}
				logger.Ctx(ctx).Errorw("error is", "err", err)
				return
			}
			for _, stream := range streams[0].Messages {
				var msg []byte
				msg = []byte(stream.Values["data"].(string))
				st.dataChan <- msg
				for _, chh := range st.channel {
					logger.Ctx(ctx).Infow("received message", "channel", chh, "message", string(msg))
					_, err := st.Streams.c.client.XDel(ctx, chh, stream.ID).Result()
					if err != nil {
						logger.Ctx(ctx).Infow("error deleting", "err", err.Error())
					}
				}
			}
		}
	}
}
