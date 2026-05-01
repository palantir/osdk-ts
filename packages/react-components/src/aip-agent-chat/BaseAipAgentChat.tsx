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

import type { UIMessage } from "@osdk/aip-core";
import classNames from "classnames";
import * as React from "react";
import { ActionButton } from "../base-components/action-button/ActionButton.js";
import styles from "./AipAgentChat.module.css";
import { AipAgentChatComposer } from "./components/AipAgentChatComposer.js";
import { AipAgentChatMessageList } from "./components/AipAgentChatMessageList.js";

/**
 * Lifecycle of a chat as exposed to {@link BaseAipAgentChat}. Mirrors
 * `ChatStatus` from `@osdk/react/experimental/aip` but is duplicated here
 * intentionally so this component remains independent of OSDK packages.
 */
export type BaseAipAgentChatStatus =
  | "ready"
  | "submitted"
  | "streaming"
  | "error";

export interface BaseAipAgentChatProps {
  /**
   * Conversation snapshot. Driven by the consumer's chat hook.
   */
  messages: ReadonlyArray<UIMessage>;

  /**
   * Current chat lifecycle.
   */
  status: BaseAipAgentChatStatus;

  /**
   * Last error reported by the chat backend, if any.
   */
  error?: Error;

  /**
   * Send a new user message. Wired to the composer's send button and the
   * Enter keypress.
   */
  onSendMessage: (text: string) => void;

  /**
   * Cancel the in-flight stream. When provided, the composer renders a
   * "Stop" button while `status === "streaming" | "submitted"`.
   */
  onStop?: () => void;

  /**
   * Clear the current error from the underlying chat hook. When provided,
   * the error banner renders a "Dismiss" button.
   */
  onClearError?: () => void;

  /**
   * Optional content rendered in the composer footer, to the left of the
   * send button. The OSDK wrapper uses this slot for the model picker.
   */
  composerFooter?: React.ReactNode;

  className?: string;

  /**
   * Placeholder text for the message composer textarea.
   *
   * @default "Type a message..."
   */
  placeholder?: string;

  /**
   * Whether the message list automatically scrolls to the most recent
   * message as the conversation grows.
   *
   * @default true
   */
  enableAutoScroll?: boolean;

  renderEmptyState?: () => React.ReactNode;
  renderMessage?: (message: UIMessage) => React.ReactNode;
}

/**
 * OSDK-agnostic chat surface. Pairs a message list with a composer and
 * renders streaming and error UI. Consumers wire it to a chat
 * hook (typically `useChat` from `@osdk/react/experimental/aip`).
 */
export const BaseAipAgentChat: React.NamedExoticComponent<
  BaseAipAgentChatProps
> = React.memo(function BaseAipAgentChat({
  messages,
  status,
  error,
  onSendMessage,
  onStop,
  onClearError,
  composerFooter,
  className,
  placeholder = "Type a message...",
  enableAutoScroll = true,
  renderEmptyState,
  renderMessage,
}) {
  const isInFlight = status === "submitted" || status === "streaming";

  return (
    <div className={classNames(styles.chat, className)}>
      {error != null && (
        <div aria-live="polite" className={styles.error} role="alert">
          <span className={styles.errorMessage}>{error.message}</span>
          {onClearError != null && (
            <ActionButton onClick={onClearError} type="button">
              Dismiss
            </ActionButton>
          )}
        </div>
      )}
      <AipAgentChatMessageList
        enableAutoScroll={enableAutoScroll}
        isStreaming={isInFlight}
        messages={messages}
        renderEmptyState={renderEmptyState}
        renderMessage={renderMessage}
      />
      <AipAgentChatComposer
        footerLeft={composerFooter}
        isInFlight={isInFlight}
        onSendMessage={onSendMessage}
        onStop={onStop}
        placeholder={placeholder}
      />
    </div>
  );
});
