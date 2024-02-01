/**
 * Copyright © 2022 Twilio, Inc. All rights reserved. Licensed under the Twilio
 * license.
 *
 * See LICENSE in the project root for license information.
 */

import { EventEmitter } from 'eventemitter3';
// NOTE(kchoy): VBLOCKS-2673 Remove after typescript 5.x upgrade
//@ts-ignore
import { Constants } from './constants';
import type { NativeCallMessageInfo } from './type/CallMessage';
import { InvalidArgumentError } from './error/InvalidArgumentError';

/**
 * Provides access to information about a callMessage, including the call
 * message content, contentType, messageType, and voiceEventSid
 *
 * @public
 */
export class CallMessage extends EventEmitter {
  /**
   * The content of the message which should match the contentType parameter.
   */
  private _content: any;

  /**
   * The MIME type of the content.
   */
  private _contentType: CallMessage.ContentType;

  /**
   * Message type
   */
  private _messageType: CallMessage.MessageType;

  /**
   * An autogenerated id that uniquely identifies the instance of this message.
   * This is not required when sending a message from the SDK as this is autogenerated.
   * But it will be available after the message is sent, or when a message is received.
   */
  private _voiceEventSid?: string;

  /**
   * Constructor for the {@link (CallMessage:class) | CallMessage class}. This should
   * not be invoked by third-party code.
   *
   * @param NativeCallMessageInfo - An object containing all of the data from the
   * native layer necessary to fully describe a callMessage, as well as invoke native
   * functionality for the callMessage.
   *
   * @internal
   */
  constructor({
    content,
    contentType,
    messageType,
    voiceEventSid,
  }: NativeCallMessageInfo) {
    super();

    this._content = content;
    this._contentType = contentType;
    this._messageType = messageType;
    this._voiceEventSid = voiceEventSid;
  }

  /**
   * Get the content body of the message.
   * @returns
   * - A string representing the content body of the message.
   */
  getContent(): any {
    return this._content;
  }

  /**
   * Get the MIME type for the message.
   * @returns
   * - A {@link (CallMessage:namespace).ContentType}.
   */
  getContentType(): CallMessage.ContentType {
    return this._contentType;
  }

  /**
   * Get the message type.
   * @returns
   * - A {@link (CallMessage:namespace).MessageType}.
   */
  getMessageType(): CallMessage.MessageType {
    return this._messageType;
  }

  /**
   * Get the message SID.
   * @returns
   * - A string representing the message SID.
   * - `undefined` if the call information has not yet been received from the
   *   native layer.
   */
  getSid(): string | undefined {
    return this._voiceEventSid;
  }
}

/**
 * Namespace for enumerations and types used by
 * {@link (CallMessage:class) | CallMessage objects}.
 *
 * @remarks
 *  - See also the {@link (CallMessage:class) | CallMessage class}.
 *
 * @public
 */
export namespace CallMessage {
  export enum MessageType {
    'UserDefinedMessage' = Constants.UserDefinedMessage,
  }

  export enum ContentType {
    'ApplicationJson' = Constants.ApplicationJson,
  }
}

export const verifySendMessage = (message: CallMessage): void => {
  if (!(message instanceof CallMessage)) {
    throw new InvalidArgumentError(
      'Argument "message" must be instanceof "CallMessage"'
    );
  }

  if (
    typeof message.getContent() === 'undefined' ||
    message.getContent() === null
  ) {
    throw new InvalidArgumentError('"content" is empty');
  }

  if (message.getMessageType().toString().length === 0) {
    throw new InvalidArgumentError('"messageType" must be a non-empty string');
  }
};
