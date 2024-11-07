package feature

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestShouldRollout(t *testing.T) {
	rolloutPercentage := 13
	iterations := 1000
	f := Feature{
		Enabled:           true,
		RolloutPercentage: rolloutPercentage,
	}
	enabledCount := 0
	for i := 0; i < iterations; i++ {
		if ShouldRollout(f) {
			enabledCount++
		}
	}
	assert.LessOrEqualf(t, enabledCount*100/iterations, rolloutPercentage+5, "failed")
	assert.GreaterOrEqual(t, enabledCount*100/iterations, rolloutPercentage-5, "failed")
	fmt.Println(enabledCount)
}
