package subscription

import (
	"github.com/google/uuid"
)

// Subscription holds a subscription by a subscriber
type Subscription struct {
	EventChan chan []byte
	ErrChan   chan error
	ID        uuid.UUID
}
