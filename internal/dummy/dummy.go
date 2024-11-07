package dummy

import (
	"encoding/json"

	pushv1 "github.com/CRED-CLUB/propeller/rpc/push/v1"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/anypb"
)

// Dummy json payload struct
type Dummy struct {
	Name string
}

// GetDummyEvent returns dummy event
func GetDummyEvent(event string, data []byte) []byte {
	e := Dummy{
		Name: string(data),
	}
	jsonEvent, err := json.Marshal(e)
	if err != nil {
		return nil
	}
	pb := &anypb.Any{
		TypeUrl: "",
		Value:   jsonEvent,
	}
	protoEvent := &pushv1.Event{
		Name:       event,
		FormatType: 0,
		Data:       pb,
	}
	b, err := proto.Marshal(protoEvent)
	if err != nil {
		return nil
	}
	return b
}
