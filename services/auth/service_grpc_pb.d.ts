// GENERATED CODE -- DO NOT EDIT!

// package: auth
// file: services/auth/service.proto

import * as services_auth_service_pb from "../../services/auth/service_pb";
import * as services_auth_messages_pb from "../../services/auth/messages_pb";
import * as grpc from "grpc";

interface IAuthAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  loginUser: grpc.MethodDefinition<services_auth_messages_pb.LoginRequest, services_auth_messages_pb.LoginResponse>;
}

export const AuthAPIService: IAuthAPIService;

export class AuthAPIClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  loginUser(argument: services_auth_messages_pb.LoginRequest, callback: grpc.requestCallback<services_auth_messages_pb.LoginResponse>): grpc.ClientUnaryCall;
  loginUser(argument: services_auth_messages_pb.LoginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_auth_messages_pb.LoginResponse>): grpc.ClientUnaryCall;
  loginUser(argument: services_auth_messages_pb.LoginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_auth_messages_pb.LoginResponse>): grpc.ClientUnaryCall;
}
