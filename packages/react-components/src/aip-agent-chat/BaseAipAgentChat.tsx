/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { generateMessageId, type UIMessage } from "@osdk/aip-core";
import classNames from "classnames";
import * as React from "react";
import { ActionButton } from "../base-components/action-button/ActionButton.js";
import styles from "./AipAgentChat.module.css";
import { AipAgentChatComposer } from "./components/AipAgentChatComposer.js";
import { AipAgentChatMessageList } from "./components/AipAgentChatMessageList.js";

/**
 * Lifecycle of a chat as exposed by {@link BaseAipAgentChat}. Mirrors
 * `ChatStatus` from `@osdk/react/experimental/aip` but is duplicated
 * here intentionally so this component remains independent of OSDK
 * packages.
 */
export type BaseAipAgentChatStatus =
  | "ready"
  | "submitted"
  | "streaming"
  | "error";

/**
 * Context passed to {@link BaseAipAgentChatProps.onSendMessage}.
 */
export interface BaseAipAgentChatSendContext {
  /**
   * Aborted when the user clicks the in-flight Stop button or the
   * component unmounts. Implementors should forward this signal to the
   * underlying network call so requests can be cancelled.
   */
  signal: AbortSignal;

  /**
   * Conversation history at the time of the send, **excluding** the
   * current user message. Useful for backends that require the full
   * conversation context.
   */
  history: ReadonlyArray<UIMessage>;

  /**
   * Push partial assistant text while the response is streaming. Each
   * call replaces the in-flight assistant bubble's text. Use this from
   * a streaming backend; non-streaming backends can ignore it and
   * simply return the final {@link UIMessage} from `onSendMessage`.
   */
  setStreamingText: (text: string) => void;
}

export interface BaseAipAgentChatProps {
  /**
   * Called when the user sends a message. The component manages
   * conversation state and rendering; the implementor is only
   * responsible for producing the assistant's response.
   *
   * Return a finalized {@link UIMessage} (typically with role
   * `"assistant"`). For streaming backends, push partial text via
   * {@link BaseAipAgentChatSendContext.setStreamingText} as it arrives;
   * the resolved value is appended to the conversation when the
   * promise settles.
   *
   * Throwing (or rejecting) flips the chat into the `error` lifecycle
   * and surfaces the error in a banner with a Dismiss button.
   *
   * @param text The text the user just submitted (already trimmed).
   * @param ctx Abort signal, conversation history, and streaming hook.
   */
  onSendMessage: (
    text: string,
    ctx: BaseAipAgentChatSendContext,
  ) => Promise<UIMessage>;

  /**
   * Seed messages used as the initial conversation snapshot.
   */
  initialMessages?: ReadonlyArray<UIMessage>;

  /**
   * Listener fired immediately after a user message is appended to the
   * conversation (before the assistant response starts).
   */
  onMessageSent?: (message: UIMessage) => void;

  /**
   * Listener fired once the assistant response has been finalized and
   * appended to the conversation.
   */
  onResponseReceived?: (message: UIMessage) => void;

  /**
   * Listener fired when `onSendMessage` rejects.
   */
  onError?: (error: Error) => void;

  /**
   * Optional content rendered in the composer footer, to the left of
   * the send button. The OSDK wrapper uses this slot for the model
   * picker.
   */
  composerFooter?: React.ReactNode;

  className?: string;

  /**
   * @default "Type a message..."
   */
  placeholder?: string;

  /**
   * @default true
   */
  enableAutoScroll?: boolean;

  renderEmptyState?: () => React.ReactNode;
  renderMessage?: (message: UIMessage) => React.ReactNode;
}

/**
 * OSDK-agnostic chat surface. Manages conversation state, streaming UI,
 * and error display internally; the consumer only provides an
 * `onSendMessage` callback that produces the assistant's reply.
 */
export const BaseAipAgentChat: React.NamedExoticComponent<
  BaseAipAgentChatProps
> = React.memo(function BaseAipAgentChat({
  onSendMessage,
  initialMessages,
  onMessageSent,
  onResponseReceived,
  onError,
  composerFooter,
  className,
  placeholder = "Type a message...",
  enableAutoScroll = true,
  renderEmptyState,
  renderMessage,
}) {
  const [messages, setMessages] = React.useState<ReadonlyArray<UIMessage>>(
    () => initialMessages ?? EMPTY_MESSAGES,
  );
  const [status, setStatus] = React.useState<BaseAipAgentChatStatus>("ready");
  const [error, setError] = React.useState<Error | undefined>(undefined);
  const [streamingText, setStreamingText] = React.useState<string>("");
  const abortRef = React.useRef<AbortController | null>(null);

  // Abort any in-flight request on unmount.
  React.useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const handleSendMessage = React.useCallback(
    async (text: string) => {
      const userMessage: UIMessage = {
        id: generateMessageId(),
        role: "user",
        parts: [{ type: "text", text }],
      };

      const historySnapshot = messages;
      const messagesAfterSend = [...historySnapshot, userMessage];
      setMessages(messagesAfterSend);
      setStatus("submitted");
      setError(undefined);
      setStreamingText("");
      onMessageSent?.(userMessage);

      const controller = new AbortController();
      abortRef.current?.abort();
      abortRef.current = controller;

      try {
        const assistantMessage = await onSendMessage(text, {
          signal: controller.signal,
          history: historySnapshot,
          setStreamingText: (next: string) => {
            setStatus("streaming");
            setStreamingText(next);
          },
        });

        if (controller.signal.aborted) {
          return;
        }

        setMessages((prev) => [...prev, assistantMessage]);
        setStreamingText("");
        setStatus("ready");
        onResponseReceived?.(assistantMessage);
      } catch (e) {
        if (controller.signal.aborted) {
          // Stop button was pressed; treat as a clean cancel.
          setStatus("ready");
          setStreamingText("");
          return;
        }
        const err = e instanceof Error ? e : new Error(String(e));
        setStatus("error");
        setError(err);
        setStreamingText("");
        onError?.(err);
      } finally {
        if (abortRef.current === controller) {
          abortRef.current = null;
        }
      }
    },
    [messages, onMessageSent, onResponseReceived, onError, onSendMessage],
  );

  const handleStop = React.useCallback(() => {
    abortRef.current?.abort();
  }, []);

  const handleClearError = React.useCallback(() => {
    setError(undefined);
    setStatus("ready");
  }, []);

  const isInFlight = status === "submitted" || status === "streaming";

  // While streaming, show the buffered assistant text as a transient
  // bubble at the end of the message list. The buffer is replaced with
  // the finalized message once `onSendMessage` resolves.
  const displayMessages = React.useMemo(() => {
    if (!isInFlight || streamingText.length === 0) {
      return messages;
    }
    return [
      ...messages,
      {
        id: STREAMING_MESSAGE_ID,
        role: "assistant" as const,
        parts: [{ type: "text" as const, text: streamingText }],
      },
    ];
  }, [messages, streamingText, isInFlight]);

  return (
    <div className={classNames(styles.chat, className)}>
      {error != null && (
        <div aria-live="polite" className={styles.error} role="alert">
          <span className={styles.errorMessage}>{error.message}</span>
          <ActionButton onClick={handleClearError} type="button">
            Dismiss
          </ActionButton>
        </div>
      )}
      <AipAgentChatMessageList
        enableAutoScroll={enableAutoScroll}
        isStreaming={isInFlight}
        messages={displayMessages}
        renderEmptyState={renderEmptyState}
        renderMessage={renderMessage}
      />
      <AipAgentChatComposer
        footerLeft={composerFooter}
        isInFlight={isInFlight}
        onSendMessage={handleSendMessage}
        onStop={handleStop}
        placeholder={placeholder}
      />
    </div>
  );
});

const EMPTY_MESSAGES: ReadonlyArray<UIMessage> = Object.freeze([]);
const STREAMING_MESSAGE_ID = "__aip-agent-chat-streaming__";
