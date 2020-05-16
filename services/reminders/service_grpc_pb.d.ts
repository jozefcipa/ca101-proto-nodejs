// GENERATED CODE -- DO NOT EDIT!

// package: reminders
// file: services/reminders/service.proto

import * as services_reminders_service_pb from "../../services/reminders/service_pb";
import * as services_reminders_messages_pb from "../../services/reminders/messages_pb";
import * as grpc from "grpc";

interface IReminderAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  addReminder: grpc.MethodDefinition<services_reminders_messages_pb.AddReminderRequest, services_reminders_messages_pb.AddReminderResponse>;
  updateReminder: grpc.MethodDefinition<services_reminders_messages_pb.UpdateReminderRequest, services_reminders_messages_pb.UpdateReminderResponse>;
  deleteReminder: grpc.MethodDefinition<services_reminders_messages_pb.DeleteReminderRequest, services_reminders_messages_pb.DeleteReminderResponse>;
  getUserReminders: grpc.MethodDefinition<services_reminders_messages_pb.GetUserRemindersRequest, services_reminders_messages_pb.GetUserRemindersResponse>;
}

export const ReminderAPIService: IReminderAPIService;

export class ReminderAPIClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  addReminder(argument: services_reminders_messages_pb.AddReminderRequest, callback: grpc.requestCallback<services_reminders_messages_pb.AddReminderResponse>): grpc.ClientUnaryCall;
  addReminder(argument: services_reminders_messages_pb.AddReminderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_reminders_messages_pb.AddReminderResponse>): grpc.ClientUnaryCall;
  addReminder(argument: services_reminders_messages_pb.AddReminderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_reminders_messages_pb.AddReminderResponse>): grpc.ClientUnaryCall;
  updateReminder(argument: services_reminders_messages_pb.UpdateReminderRequest, callback: grpc.requestCallback<services_reminders_messages_pb.UpdateReminderResponse>): grpc.ClientUnaryCall;
  updateReminder(argument: services_reminders_messages_pb.UpdateReminderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_reminders_messages_pb.UpdateReminderResponse>): grpc.ClientUnaryCall;
  updateReminder(argument: services_reminders_messages_pb.UpdateReminderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_reminders_messages_pb.UpdateReminderResponse>): grpc.ClientUnaryCall;
  deleteReminder(argument: services_reminders_messages_pb.DeleteReminderRequest, callback: grpc.requestCallback<services_reminders_messages_pb.DeleteReminderResponse>): grpc.ClientUnaryCall;
  deleteReminder(argument: services_reminders_messages_pb.DeleteReminderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_reminders_messages_pb.DeleteReminderResponse>): grpc.ClientUnaryCall;
  deleteReminder(argument: services_reminders_messages_pb.DeleteReminderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_reminders_messages_pb.DeleteReminderResponse>): grpc.ClientUnaryCall;
  getUserReminders(argument: services_reminders_messages_pb.GetUserRemindersRequest, callback: grpc.requestCallback<services_reminders_messages_pb.GetUserRemindersResponse>): grpc.ClientUnaryCall;
  getUserReminders(argument: services_reminders_messages_pb.GetUserRemindersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_reminders_messages_pb.GetUserRemindersResponse>): grpc.ClientUnaryCall;
  getUserReminders(argument: services_reminders_messages_pb.GetUserRemindersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_reminders_messages_pb.GetUserRemindersResponse>): grpc.ClientUnaryCall;
}
