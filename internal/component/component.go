package component

import "context"

// IComponent interface is implemented by various services
type IComponent interface {
	// Start the component, it should be implemented as a blocking call
	// method should return gracefully when ctx is Done
	Start(ctx context.Context) error
}
