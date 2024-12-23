import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb'; // proto import: "google/protobuf/any.proto"


export class ChannelRequest extends jspb.Message {
  getChannelEvent(): ChannelEvent | undefined;
  setChannelEvent(value?: ChannelEvent): ChannelRequest;
  hasChannelEvent(): boolean;
  clearChannelEvent(): ChannelRequest;

  getChannelEventAck(): ChannelEventAck | undefined;
  setChannelEventAck(value?: ChannelEventAck): ChannelRequest;
  hasChannelEventAck(): boolean;
  clearChannelEventAck(): ChannelRequest;

  getTopicSubscriptionRequest(): TopicSubscriptionRequest | undefined;
  setTopicSubscriptionRequest(value?: TopicSubscriptionRequest): ChannelRequest;
  hasTopicSubscriptionRequest(): boolean;
  clearTopicSubscriptionRequest(): ChannelRequest;

  getTopicUnsubscriptionRequest(): TopicUnsubscriptionRequest | undefined;
  setTopicUnsubscriptionRequest(value?: TopicUnsubscriptionRequest): ChannelRequest;
  hasTopicUnsubscriptionRequest(): boolean;
  clearTopicUnsubscriptionRequest(): ChannelRequest;

  getRequestCase(): ChannelRequest.RequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelRequest): ChannelRequest.AsObject;
  static serializeBinaryToWriter(message: ChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelRequest;
  static deserializeBinaryFromReader(message: ChannelRequest, reader: jspb.BinaryReader): ChannelRequest;
}

export namespace ChannelRequest {
  export type AsObject = {
    channelEvent?: ChannelEvent.AsObject,
    channelEventAck?: ChannelEventAck.AsObject,
    topicSubscriptionRequest?: TopicSubscriptionRequest.AsObject,
    topicUnsubscriptionRequest?: TopicUnsubscriptionRequest.AsObject,
  }

  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    CHANNEL_EVENT = 1,
    CHANNEL_EVENT_ACK = 2,
    TOPIC_SUBSCRIPTION_REQUEST = 3,
    TOPIC_UNSUBSCRIPTION_REQUEST = 4,
  }
}

export class ChannelResponse extends jspb.Message {
  getConnectAck(): ConnectAck | undefined;
  setConnectAck(value?: ConnectAck): ChannelResponse;
  hasConnectAck(): boolean;
  clearConnectAck(): ChannelResponse;

  getChannelEvent(): ChannelEvent | undefined;
  setChannelEvent(value?: ChannelEvent): ChannelResponse;
  hasChannelEvent(): boolean;
  clearChannelEvent(): ChannelResponse;

  getChannelEventAck(): ChannelEventAck | undefined;
  setChannelEventAck(value?: ChannelEventAck): ChannelResponse;
  hasChannelEventAck(): boolean;
  clearChannelEventAck(): ChannelResponse;

  getTopicSubscriptionRequestAck(): TopicSubscriptionRequestAck | undefined;
  setTopicSubscriptionRequestAck(value?: TopicSubscriptionRequestAck): ChannelResponse;
  hasTopicSubscriptionRequestAck(): boolean;
  clearTopicSubscriptionRequestAck(): ChannelResponse;

  getTopicUnsubscriptionRequestAck(): TopicUnsubscriptionRequestAck | undefined;
  setTopicUnsubscriptionRequestAck(value?: TopicUnsubscriptionRequestAck): ChannelResponse;
  hasTopicUnsubscriptionRequestAck(): boolean;
  clearTopicUnsubscriptionRequestAck(): ChannelResponse;

  getResponseCase(): ChannelResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelResponse): ChannelResponse.AsObject;
  static serializeBinaryToWriter(message: ChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelResponse;
  static deserializeBinaryFromReader(message: ChannelResponse, reader: jspb.BinaryReader): ChannelResponse;
}

export namespace ChannelResponse {
  export type AsObject = {
    connectAck?: ConnectAck.AsObject,
    channelEvent?: ChannelEvent.AsObject,
    channelEventAck?: ChannelEventAck.AsObject,
    topicSubscriptionRequestAck?: TopicSubscriptionRequestAck.AsObject,
    topicUnsubscriptionRequestAck?: TopicUnsubscriptionRequestAck.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    CONNECT_ACK = 1,
    CHANNEL_EVENT = 2,
    CHANNEL_EVENT_ACK = 3,
    TOPIC_SUBSCRIPTION_REQUEST_ACK = 4,
    TOPIC_UNSUBSCRIPTION_REQUEST_ACK = 5,
  }
}

export class ChannelEvent extends jspb.Message {
  getUniqueId(): string;
  setUniqueId(value: string): ChannelEvent;

  getTopic(): string;
  setTopic(value: string): ChannelEvent;

  getEvent(): Event | undefined;
  setEvent(value?: Event): ChannelEvent;
  hasEvent(): boolean;
  clearEvent(): ChannelEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelEvent): ChannelEvent.AsObject;
  static serializeBinaryToWriter(message: ChannelEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelEvent;
  static deserializeBinaryFromReader(message: ChannelEvent, reader: jspb.BinaryReader): ChannelEvent;
}

export namespace ChannelEvent {
  export type AsObject = {
    uniqueId: string,
    topic: string,
    event?: Event.AsObject,
  }
}

export class ConnectAck extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): ConnectAck;
  hasStatus(): boolean;
  clearStatus(): ConnectAck;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectAck.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectAck): ConnectAck.AsObject;
  static serializeBinaryToWriter(message: ConnectAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectAck;
  static deserializeBinaryFromReader(message: ConnectAck, reader: jspb.BinaryReader): ConnectAck;
}

export namespace ConnectAck {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class ChannelEventAck extends jspb.Message {
  getUniqueId(): string;
  setUniqueId(value: string): ChannelEventAck;

  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): ChannelEventAck;
  hasStatus(): boolean;
  clearStatus(): ChannelEventAck;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelEventAck.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelEventAck): ChannelEventAck.AsObject;
  static serializeBinaryToWriter(message: ChannelEventAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelEventAck;
  static deserializeBinaryFromReader(message: ChannelEventAck, reader: jspb.BinaryReader): ChannelEventAck;
}

export namespace ChannelEventAck {
  export type AsObject = {
    uniqueId: string,
    status?: ResponseStatus.AsObject,
  }
}

export class TopicSubscriptionRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): TopicSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TopicSubscriptionRequest): TopicSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: TopicSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicSubscriptionRequest;
  static deserializeBinaryFromReader(message: TopicSubscriptionRequest, reader: jspb.BinaryReader): TopicSubscriptionRequest;
}

export namespace TopicSubscriptionRequest {
  export type AsObject = {
    topic: string,
  }
}

export class TopicSubscriptionRequestAck extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): TopicSubscriptionRequestAck;

  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): TopicSubscriptionRequestAck;
  hasStatus(): boolean;
  clearStatus(): TopicSubscriptionRequestAck;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicSubscriptionRequestAck.AsObject;
  static toObject(includeInstance: boolean, msg: TopicSubscriptionRequestAck): TopicSubscriptionRequestAck.AsObject;
  static serializeBinaryToWriter(message: TopicSubscriptionRequestAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicSubscriptionRequestAck;
  static deserializeBinaryFromReader(message: TopicSubscriptionRequestAck, reader: jspb.BinaryReader): TopicSubscriptionRequestAck;
}

export namespace TopicSubscriptionRequestAck {
  export type AsObject = {
    topic: string,
    status?: ResponseStatus.AsObject,
  }
}

export class TopicUnsubscriptionRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): TopicUnsubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicUnsubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TopicUnsubscriptionRequest): TopicUnsubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: TopicUnsubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicUnsubscriptionRequest;
  static deserializeBinaryFromReader(message: TopicUnsubscriptionRequest, reader: jspb.BinaryReader): TopicUnsubscriptionRequest;
}

export namespace TopicUnsubscriptionRequest {
  export type AsObject = {
    topic: string,
  }
}

export class TopicUnsubscriptionRequestAck extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): TopicUnsubscriptionRequestAck;

  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): TopicUnsubscriptionRequestAck;
  hasStatus(): boolean;
  clearStatus(): TopicUnsubscriptionRequestAck;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicUnsubscriptionRequestAck.AsObject;
  static toObject(includeInstance: boolean, msg: TopicUnsubscriptionRequestAck): TopicUnsubscriptionRequestAck.AsObject;
  static serializeBinaryToWriter(message: TopicUnsubscriptionRequestAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicUnsubscriptionRequestAck;
  static deserializeBinaryFromReader(message: TopicUnsubscriptionRequestAck, reader: jspb.BinaryReader): TopicUnsubscriptionRequestAck;
}

export namespace TopicUnsubscriptionRequestAck {
  export type AsObject = {
    topic: string,
    status?: ResponseStatus.AsObject,
  }
}

export class GetClientActiveDevicesRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): GetClientActiveDevicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientActiveDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientActiveDevicesRequest): GetClientActiveDevicesRequest.AsObject;
  static serializeBinaryToWriter(message: GetClientActiveDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientActiveDevicesRequest;
  static deserializeBinaryFromReader(message: GetClientActiveDevicesRequest, reader: jspb.BinaryReader): GetClientActiveDevicesRequest;
}

export namespace GetClientActiveDevicesRequest {
  export type AsObject = {
    clientId: string,
  }
}

export class GetClientActiveDevicesResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): GetClientActiveDevicesResponse;
  hasStatus(): boolean;
  clearStatus(): GetClientActiveDevicesResponse;

  getIsClientOnline(): boolean;
  setIsClientOnline(value: boolean): GetClientActiveDevicesResponse;

  getDevicesList(): Array<Device>;
  setDevicesList(value: Array<Device>): GetClientActiveDevicesResponse;
  clearDevicesList(): GetClientActiveDevicesResponse;
  addDevices(value?: Device, index?: number): Device;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientActiveDevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientActiveDevicesResponse): GetClientActiveDevicesResponse.AsObject;
  static serializeBinaryToWriter(message: GetClientActiveDevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientActiveDevicesResponse;
  static deserializeBinaryFromReader(message: GetClientActiveDevicesResponse, reader: jspb.BinaryReader): GetClientActiveDevicesResponse;
}

export namespace GetClientActiveDevicesResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
    isClientOnline: boolean,
    devicesList: Array<Device.AsObject>,
  }
}

export class SendEventToClientChannelRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): SendEventToClientChannelRequest;

  getEvent(): Event | undefined;
  setEvent(value?: Event): SendEventToClientChannelRequest;
  hasEvent(): boolean;
  clearEvent(): SendEventToClientChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEventToClientChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendEventToClientChannelRequest): SendEventToClientChannelRequest.AsObject;
  static serializeBinaryToWriter(message: SendEventToClientChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEventToClientChannelRequest;
  static deserializeBinaryFromReader(message: SendEventToClientChannelRequest, reader: jspb.BinaryReader): SendEventToClientChannelRequest;
}

export namespace SendEventToClientChannelRequest {
  export type AsObject = {
    clientId: string,
    event?: Event.AsObject,
  }
}

export class SendEventToClientChannelResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): SendEventToClientChannelResponse;
  hasStatus(): boolean;
  clearStatus(): SendEventToClientChannelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEventToClientChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendEventToClientChannelResponse): SendEventToClientChannelResponse.AsObject;
  static serializeBinaryToWriter(message: SendEventToClientChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEventToClientChannelResponse;
  static deserializeBinaryFromReader(message: SendEventToClientChannelResponse, reader: jspb.BinaryReader): SendEventToClientChannelResponse;
}

export namespace SendEventToClientChannelResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class SendEventToClientDeviceChannelRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): SendEventToClientDeviceChannelRequest;

  getDeviceId(): string;
  setDeviceId(value: string): SendEventToClientDeviceChannelRequest;

  getEvent(): Event | undefined;
  setEvent(value?: Event): SendEventToClientDeviceChannelRequest;
  hasEvent(): boolean;
  clearEvent(): SendEventToClientDeviceChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEventToClientDeviceChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendEventToClientDeviceChannelRequest): SendEventToClientDeviceChannelRequest.AsObject;
  static serializeBinaryToWriter(message: SendEventToClientDeviceChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEventToClientDeviceChannelRequest;
  static deserializeBinaryFromReader(message: SendEventToClientDeviceChannelRequest, reader: jspb.BinaryReader): SendEventToClientDeviceChannelRequest;
}

export namespace SendEventToClientDeviceChannelRequest {
  export type AsObject = {
    clientId: string,
    deviceId: string,
    event?: Event.AsObject,
  }
}

export class SendEventToClientDeviceChannelResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): SendEventToClientDeviceChannelResponse;
  hasStatus(): boolean;
  clearStatus(): SendEventToClientDeviceChannelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEventToClientDeviceChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendEventToClientDeviceChannelResponse): SendEventToClientDeviceChannelResponse.AsObject;
  static serializeBinaryToWriter(message: SendEventToClientDeviceChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEventToClientDeviceChannelResponse;
  static deserializeBinaryFromReader(message: SendEventToClientDeviceChannelResponse, reader: jspb.BinaryReader): SendEventToClientDeviceChannelResponse;
}

export namespace SendEventToClientDeviceChannelResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class SendEventToTopicRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): SendEventToTopicRequest;

  getEvent(): Event | undefined;
  setEvent(value?: Event): SendEventToTopicRequest;
  hasEvent(): boolean;
  clearEvent(): SendEventToTopicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEventToTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendEventToTopicRequest): SendEventToTopicRequest.AsObject;
  static serializeBinaryToWriter(message: SendEventToTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEventToTopicRequest;
  static deserializeBinaryFromReader(message: SendEventToTopicRequest, reader: jspb.BinaryReader): SendEventToTopicRequest;
}

export namespace SendEventToTopicRequest {
  export type AsObject = {
    topic: string,
    event?: Event.AsObject,
  }
}

export class SendEventToTopicResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): SendEventToTopicResponse;
  hasStatus(): boolean;
  clearStatus(): SendEventToTopicResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEventToTopicResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendEventToTopicResponse): SendEventToTopicResponse.AsObject;
  static serializeBinaryToWriter(message: SendEventToTopicResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEventToTopicResponse;
  static deserializeBinaryFromReader(message: SendEventToTopicResponse, reader: jspb.BinaryReader): SendEventToTopicResponse;
}

export namespace SendEventToTopicResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class SendEventToTopicsRequest extends jspb.Message {
  getRequestsList(): Array<SendEventToTopicRequest>;
  setRequestsList(value: Array<SendEventToTopicRequest>): SendEventToTopicsRequest;
  clearRequestsList(): SendEventToTopicsRequest;
  addRequests(value?: SendEventToTopicRequest, index?: number): SendEventToTopicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEventToTopicsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendEventToTopicsRequest): SendEventToTopicsRequest.AsObject;
  static serializeBinaryToWriter(message: SendEventToTopicsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEventToTopicsRequest;
  static deserializeBinaryFromReader(message: SendEventToTopicsRequest, reader: jspb.BinaryReader): SendEventToTopicsRequest;
}

export namespace SendEventToTopicsRequest {
  export type AsObject = {
    requestsList: Array<SendEventToTopicRequest.AsObject>,
  }
}

export class SendEventToTopicsResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): SendEventToTopicsResponse;
  hasStatus(): boolean;
  clearStatus(): SendEventToTopicsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEventToTopicsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendEventToTopicsResponse): SendEventToTopicsResponse.AsObject;
  static serializeBinaryToWriter(message: SendEventToTopicsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEventToTopicsResponse;
  static deserializeBinaryFromReader(message: SendEventToTopicsResponse, reader: jspb.BinaryReader): SendEventToTopicsResponse;
}

export namespace SendEventToTopicsResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class Event extends jspb.Message {
  getName(): string;
  setName(value: string): Event;

  getFormatType(): Event.Type;
  setFormatType(value: Event.Type): Event;

  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): Event;
  hasData(): boolean;
  clearData(): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    name: string,
    formatType: Event.Type,
    data?: google_protobuf_any_pb.Any.AsObject,
  }

  export enum Type { 
    TYPE_JSON_UNSPECIFIED = 0,
    TYPE_PROTO = 1,
  }
}

export class ResponseStatus extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ResponseStatus;

  getErrorCode(): string;
  setErrorCode(value: string): ResponseStatus;

  getMessageMap(): jspb.Map<string, string>;
  clearMessageMap(): ResponseStatus;

  getErrorType(): string;
  setErrorType(value: string): ResponseStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseStatus): ResponseStatus.AsObject;
  static serializeBinaryToWriter(message: ResponseStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseStatus;
  static deserializeBinaryFromReader(message: ResponseStatus, reader: jspb.BinaryReader): ResponseStatus;
}

export namespace ResponseStatus {
  export type AsObject = {
    success: boolean,
    errorCode: string,
    messageMap: Array<[string, string]>,
    errorType: string,
  }
}

export class Device extends jspb.Message {
  getId(): string;
  setId(value: string): Device;

  getLoggedInAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLoggedInAt(value?: google_protobuf_timestamp_pb.Timestamp): Device;
  hasLoggedInAt(): boolean;
  clearLoggedInAt(): Device;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): Device;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    id: string,
    loggedInAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    attributesMap: Array<[string, string]>,
  }
}

