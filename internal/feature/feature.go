package feature

import "math/rand"

// ShouldRollout a feature
func ShouldRollout(feat Feature) bool {
	if feat.Enabled && (rand.Intn(100) <= feat.RolloutPercentage) {
		return true
	}
	return false
}
