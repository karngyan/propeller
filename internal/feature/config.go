package feature

// Config for features
type Config struct {
	SampleFeature Feature
}

// Feature specific fields
type Feature struct {
	Enabled           bool
	RolloutPercentage int
}
