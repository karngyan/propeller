package perror

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestToGRPCErrorWithPError(t *testing.T) {
	pErr := New(InvalidArgument, "error msg")
	err := ToGRPCError(pErr)
	assert.Equal(t, err.Error(), "rpc error: code = InvalidArgument desc = error msg")
}

func TestToGRPCErrorWithoutPError(t *testing.T) {
	err := ToGRPCError(fmt.Errorf("error"))
	assert.Equal(t, err.Error(), "rpc error: code = Unknown desc = error")
}

func TestNewWithMsg(t *testing.T) {
	err := New(InvalidArgument, "some invalid msg")
	assert.EqualError(t, err, "some invalid msg")
}

func TestNewWithMsgAndArgs(t *testing.T) {
	err := Newf(PermissionDenied, "permission %d denied for %s", 403, "dummy")
	assert.EqualError(t, err, "permission 403 denied for dummy")
}
