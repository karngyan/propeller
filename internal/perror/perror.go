package perror

import (
	"fmt"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// PError is propeller error
type PError struct {
	error
	code Code
}

// Code returns the error code
func (e *PError) Code() Code {
	return e.code
}

// ToGRPCError returns the grpc error
func (e *PError) ToGRPCError() error {
	return ToGRPCError(e)
}

// ToGRPCError converts perror to grpc status error
func ToGRPCError(e error) error {
	if perr, ok := e.(*PError); ok {
		return status.Error(internalToGRPCCodeMapping[perr.code], perr.Error())
	}
	return status.Error(codes.Unknown, e.Error())
}

// New returns a perror with code and a message
func New(code Code, msg string) *PError {
	return &PError{code: code, error: fmt.Errorf(msg)}
}

// Newf returns a perror with code and a formatted message
func Newf(code Code, format string, arg ...interface{}) *PError {
	return &PError{code: code, error: fmt.Errorf(format, arg...)}
}
