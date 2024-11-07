package push

import (
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
)

var (
	connectedClients = promauto.NewGauge(prometheus.GaugeOpts{
		Name: "propeller_connected_clients_total",
		Help: "The total number of clients connected",
	})

	sessionDuration = promauto.NewHistogram(prometheus.HistogramOpts{
		Name:    "propeller_session_duration_seconds",
		Help:    "Duration of session calls",
		Buckets: []float64{5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000},
	})

	messagesSent = promauto.NewCounterVec(
		prometheus.CounterOpts{
			Name: "propeller_messages_sent_by_event",
			Help: "Total number of messages sent",
		},
		[]string{"event"},
	)

	messagesReceived = promauto.NewCounterVec(
		prometheus.CounterOpts{
			Name: "propeller_messages_received_by_event",
			Help: "Total number of messages received",
		},
		[]string{"event"},
	)
)
