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

export interface BaseAipAgentChatProps {
  /**
   * Current messages in the conversation.
   */
  messages: ReadonlyArray<UIMessage>;

  /**
   * Current status of the chat lifecycle.
   */
  status: "ready" | "submitted" | "streaming" | "error";

  /**
   * Current error, if any.
   */
  error: Error | undefined;

  /**
   * Called when the user sends a message. Should return a promise that
   * resolves when the message has been sent.
   *
   * @param text The text the user just submitted (already trimmed).
   */
  onSendMessage: (text: string) => Promise<void>;

  /**
   * Called to stop an in-flight request.
   */
  onStop: () => void;

  /**
   * Called to clear the current error.
   */
  onClearError: () => void;

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
 * and error display internally; the consumer provides the current state
 * and callbacks for sending messages and managing state.
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

  const handleSendMessage = React.useCallback(
    async (text: string) => {
      await onSendMessage(text);
    },
    [onSendMessage],
  );

  return (
    <div className={classNames(styles.chat, className)}>
      {error != null && (
        <div aria-live="polite" className={styles.error} role="alert">
          <div className={styles.errorBody}>
            <div className={styles.errorTitle}>Something went wrong</div>
            <div className={styles.errorMessage}>
              {error.message.length > 0
                ? error.message
                : "An unknown error occurred. Try again, or dismiss to keep the conversation."}
            </div>
          </div>
          <div className={styles.errorActions}>
            <ActionButton onClick={onClearError} type="button">
              Dismiss
            </ActionButton>
          </div>
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
        onSendMessage={handleSendMessage}
        onStop={onStop}
        placeholder={placeholder}
      />
    </div>
  );
});
