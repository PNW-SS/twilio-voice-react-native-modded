/**
 * Copyright © 2022 Twilio, Inc. All rights reserved. Licensed under the Twilio
 * license.
 *
 * See LICENSE in the project root for license information.
 */

import { EventEmitter } from 'eventemitter3';
import type { NativeCallMessageInfo } from '../type/CallMessage';
import { validateCallMessage } from './CallMessage';

/**
 * CallMessage API is in beta.
 *
 * Provides access to information about a CallMessage, including the call
 * message content, content type, message type, and voice event SID.
 *
 * @public
 */
export class IncomingCallMessage extends EventEmitter {
  /**
   * The content of the message which should match the contentType parameter.
   */
  private _content: any;

  /**
   * The MIME type of the content.
   */
  private _contentType: string;

  /**
   * Message type
   */
  private _messageType: string;

  /**
   * An autogenerated ID that uniquely identifies this message.
   * This is not required when sending a message from the SDK as this is
   * autogenerated.
   * The ID will be available after the message is sent, or immediately when a
   * message is received.
   */
  private _voiceEventSid?: string;

  /**
   * Constructor for the {@link IncomingCallMessage} class. This should not be
   * invoked by third-party code.
   *
   * @param NativeCallMessageInfo - An object containing all of the data from
   * the native layer necessary to fully describe a call message, as well as
   * invoke native functionality for the call message.
   *
   * @internal
   */
  constructor(callMessageInfo: NativeCallMessageInfo) {
    super();

    const { content, contentType, messageType } =
      validateCallMessage(callMessageInfo);

    this._content = content;
    this._contentType = contentType;
    this._messageType = messageType;
    this._voiceEventSid = callMessageInfo.voiceEventSid;
  }

  /**
   * {@inheritdoc CallMessage.content}
   *
   * @returns the content of the call message.
   */
  getContent(): any {
    return this._content;
  }

  /**
   * {@inheritdoc CallMessage.contentType}
   *
   * @returns the content type of the call message.
   */
  getContentType(): string {
    return this._contentType;
  }

  /**
   * {@inheritdoc CallMessage.messageType}
   *
   * @returns the message type of the call message.
   */
  getMessageType(): string {
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
