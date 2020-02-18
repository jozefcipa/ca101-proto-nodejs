// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_auth_messages_pb = require('../../services/auth/messages_pb.js');

function serialize_auth_LoginRequest(arg) {
  if (!(arg instanceof services_auth_messages_pb.LoginRequest)) {
    throw new Error('Expected argument of type auth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginRequest(buffer_arg) {
  return services_auth_messages_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginResponse(arg) {
  if (!(arg instanceof services_auth_messages_pb.LoginResponse)) {
    throw new Error('Expected argument of type auth.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginResponse(buffer_arg) {
  return services_auth_messages_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// AuthAPI service
var AuthAPIService = exports.AuthAPIService = {
  // Login user with email and password
loginUser: {
    path: '/auth.AuthAPI/LoginUser',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_messages_pb.LoginRequest,
    responseType: services_auth_messages_pb.LoginResponse,
    requestSerialize: serialize_auth_LoginRequest,
    requestDeserialize: deserialize_auth_LoginRequest,
    responseSerialize: serialize_auth_LoginResponse,
    responseDeserialize: deserialize_auth_LoginResponse,
  },
};

exports.AuthAPIClient = grpc.makeGenericClientConstructor(AuthAPIService);
