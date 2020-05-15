// package: reminders
// file: services/reminders/messages.proto

import * as jspb from "google-protobuf";

export class AddReminderRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getNoteId(): string;
  setNoteId(value: string): void;

  getDatetime(): string;
  setDatetime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddReminderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddReminderRequest): AddReminderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddReminderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddReminderRequest;
  static deserializeBinaryFromReader(message: AddReminderRequest, reader: jspb.BinaryReader): AddReminderRequest;
}

export namespace AddReminderRequest {
  export type AsObject = {
    userId: string,
    noteId: string,
    datetime: string,
  }
}

export class UpdateReminderRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getNoteId(): string;
  setNoteId(value: string): void;

  getDatetime(): string;
  setDatetime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReminderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReminderRequest): UpdateReminderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReminderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReminderRequest;
  static deserializeBinaryFromReader(message: UpdateReminderRequest, reader: jspb.BinaryReader): UpdateReminderRequest;
}

export namespace UpdateReminderRequest {
  export type AsObject = {
    userId: string,
    noteId: string,
    datetime: string,
  }
}

export class DeleteReminderRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getNoteId(): string;
  setNoteId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReminderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReminderRequest): DeleteReminderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteReminderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReminderRequest;
  static deserializeBinaryFromReader(message: DeleteReminderRequest, reader: jspb.BinaryReader): DeleteReminderRequest;
}

export namespace DeleteReminderRequest {
  export type AsObject = {
    userId: string,
    noteId: string,
  }
}

export class AddReminderResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddReminderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddReminderResponse): AddReminderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddReminderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddReminderResponse;
  static deserializeBinaryFromReader(message: AddReminderResponse, reader: jspb.BinaryReader): AddReminderResponse;
}

export namespace AddReminderResponse {
  export type AsObject = {
  }
}

export class UpdateReminderResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReminderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReminderResponse): UpdateReminderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReminderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReminderResponse;
  static deserializeBinaryFromReader(message: UpdateReminderResponse, reader: jspb.BinaryReader): UpdateReminderResponse;
}

export namespace UpdateReminderResponse {
  export type AsObject = {
  }
}

export class DeleteReminderResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReminderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReminderResponse): DeleteReminderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteReminderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReminderResponse;
  static deserializeBinaryFromReader(message: DeleteReminderResponse, reader: jspb.BinaryReader): DeleteReminderResponse;
}

export namespace DeleteReminderResponse {
  export type AsObject = {
  }
}

