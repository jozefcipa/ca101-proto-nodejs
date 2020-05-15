// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_reminders_messages_pb = require('../../services/reminders/messages_pb.js');

function serialize_reminders_AddReminderRequest(arg) {
  if (!(arg instanceof services_reminders_messages_pb.AddReminderRequest)) {
    throw new Error('Expected argument of type reminders.AddReminderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_reminders_AddReminderRequest(buffer_arg) {
  return services_reminders_messages_pb.AddReminderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_reminders_AddReminderResponse(arg) {
  if (!(arg instanceof services_reminders_messages_pb.AddReminderResponse)) {
    throw new Error('Expected argument of type reminders.AddReminderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_reminders_AddReminderResponse(buffer_arg) {
  return services_reminders_messages_pb.AddReminderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_reminders_DeleteReminderRequest(arg) {
  if (!(arg instanceof services_reminders_messages_pb.DeleteReminderRequest)) {
    throw new Error('Expected argument of type reminders.DeleteReminderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_reminders_DeleteReminderRequest(buffer_arg) {
  return services_reminders_messages_pb.DeleteReminderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_reminders_DeleteReminderResponse(arg) {
  if (!(arg instanceof services_reminders_messages_pb.DeleteReminderResponse)) {
    throw new Error('Expected argument of type reminders.DeleteReminderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_reminders_DeleteReminderResponse(buffer_arg) {
  return services_reminders_messages_pb.DeleteReminderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_reminders_UpdateReminderRequest(arg) {
  if (!(arg instanceof services_reminders_messages_pb.UpdateReminderRequest)) {
    throw new Error('Expected argument of type reminders.UpdateReminderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_reminders_UpdateReminderRequest(buffer_arg) {
  return services_reminders_messages_pb.UpdateReminderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_reminders_UpdateReminderResponse(arg) {
  if (!(arg instanceof services_reminders_messages_pb.UpdateReminderResponse)) {
    throw new Error('Expected argument of type reminders.UpdateReminderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_reminders_UpdateReminderResponse(buffer_arg) {
  return services_reminders_messages_pb.UpdateReminderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ReminderAPI service
var ReminderAPIService = exports.ReminderAPIService = {
  addReminder: {
    path: '/reminders.ReminderAPI/AddReminder',
    requestStream: false,
    responseStream: false,
    requestType: services_reminders_messages_pb.AddReminderRequest,
    responseType: services_reminders_messages_pb.AddReminderResponse,
    requestSerialize: serialize_reminders_AddReminderRequest,
    requestDeserialize: deserialize_reminders_AddReminderRequest,
    responseSerialize: serialize_reminders_AddReminderResponse,
    responseDeserialize: deserialize_reminders_AddReminderResponse,
  },
  updateReminder: {
    path: '/reminders.ReminderAPI/UpdateReminder',
    requestStream: false,
    responseStream: false,
    requestType: services_reminders_messages_pb.UpdateReminderRequest,
    responseType: services_reminders_messages_pb.UpdateReminderResponse,
    requestSerialize: serialize_reminders_UpdateReminderRequest,
    requestDeserialize: deserialize_reminders_UpdateReminderRequest,
    responseSerialize: serialize_reminders_UpdateReminderResponse,
    responseDeserialize: deserialize_reminders_UpdateReminderResponse,
  },
  deleteReminder: {
    path: '/reminders.ReminderAPI/DeleteReminder',
    requestStream: false,
    responseStream: false,
    requestType: services_reminders_messages_pb.DeleteReminderRequest,
    responseType: services_reminders_messages_pb.DeleteReminderResponse,
    requestSerialize: serialize_reminders_DeleteReminderRequest,
    requestDeserialize: deserialize_reminders_DeleteReminderRequest,
    responseSerialize: serialize_reminders_DeleteReminderResponse,
    responseDeserialize: deserialize_reminders_DeleteReminderResponse,
  },
};

exports.ReminderAPIClient = grpc.makeGenericClientConstructor(ReminderAPIService);
