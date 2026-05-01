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

import { Chat } from "@blueprintjs/icons";
import { getUIMessageText, type UIMessage } from "@osdk/aip-core";
import classNames from "classnames";
import * as React from "react";
import styles from "../AipAgentChat.module.css";
import { useChatAutoScroll } from "../hooks/useChatAutoScroll.js";
import { AipAgentChatLoader } from "./AipAgentChatLoader.js";
import { AipAgentChatMessage } from "./AipAgentChatMessage.js";

export interface AipAgentChatMessageListProps {
  messages: ReadonlyArray<UIMessage>;
  isStreaming: boolean;
  enableAutoScroll: boolean;
  className?: string;
  renderEmptyState?: () => React.ReactNode;
  renderMessage?: (message: UIMessage) => React.ReactNode;
}

const DEFAULT_EMPTY_STATE: React.ReactNode = (
  <>
    <Chat className={styles.emptyIcon} size={64} />
    <div className={styles.emptyTitle}>Start a conversation</div>
    <div>Type a message below to chat with the assistant.</div>
  </>
);

export function AipAgentChatMessageList({
  messages,
  isStreaming,
  enableAutoScroll,
  className,
  renderEmptyState,
  renderMessage,
}: AipAgentChatMessageListProps): React.ReactElement {
  const lastMessageTextLength = messages.length === 0
    ? 0
    : getUIMessageText(messages[messages.length - 1]!).length;
  const scrollSignal = `${messages.length}:${lastMessageTextLength}`;

  const containerRef = useChatAutoScroll<HTMLDivElement>(
    scrollSignal,
    enableAutoScroll,
  );

  if (messages.length === 0 && !isStreaming) {
    return (
      <div
        className={classNames(styles.messageList, styles.empty, className)}
        ref={containerRef}
      >
        {renderEmptyState != null ? renderEmptyState() : DEFAULT_EMPTY_STATE}
      </div>
    );
  }

  return (
    <div
      aria-live="polite"
      className={classNames(styles.messageList, className)}
      ref={containerRef}
      role="log"
    >
      {messages.map(message => (
        <React.Fragment key={message.id}>
          {renderMessage != null
            ? renderMessage(message)
            : <AipAgentChatMessage message={message} />}
        </React.Fragment>
      ))}
      {isStreaming && trailingMessageRole(messages) !== "assistant" && (
        <div className={classNames(styles.message, styles.assistantMessage)}>
          <div className={classNames(styles.bubble, styles.assistantBubble)}>
            <AipAgentChatLoader />
          </div>
        </div>
      )}
    </div>
  );
}

function trailingMessageRole(
  messages: ReadonlyArray<UIMessage>,
): UIMessage["role"] | undefined {
  if (messages.length === 0) {
    return undefined;
  }
  return messages[messages.length - 1]!.role;
}
