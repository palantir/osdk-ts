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

import { getUIMessageText, type UIMessage } from "@osdk/aip-core";
import classNames from "classnames";
import * as React from "react";
import styles from "../AipAgentChat.module.css";

export interface AipAgentChatMessageProps {
  message: UIMessage;
}

/**
 * Default rendering for a single chat message bubble. User messages are
 * right-aligned with a primary background; assistant messages are
 * left-aligned with a secondary background; system messages render
 * centered in muted style.
 */
export function AipAgentChatMessage(
  { message }: AipAgentChatMessageProps,
): React.ReactElement {
  const text = getUIMessageText(message);
  const role = message.role;

  return (
    <div
      aria-label={MESSAGE_ROLE_LABELS[role]}
      className={classNames(styles.message, ROLE_TO_CONTAINER_CLASS[role])}
      role="group"
    >
      <div
        className={classNames(
          styles.bubble,
          ROLE_TO_BUBBLE_CLASS[role],
        )}
      >
        {text.length > 0
          ? text
          : <span className={styles.streamingPlaceholder}>…</span>}
      </div>
    </div>
  );
}

const ROLE_TO_CONTAINER_CLASS: Record<UIMessage["role"], string> = {
  user: styles.userMessage,
  assistant: styles.assistantMessage,
  system: styles.systemMessage,
};

const ROLE_TO_BUBBLE_CLASS: Record<UIMessage["role"], string> = {
  user: styles.userBubble,
  assistant: styles.assistantBubble,
  system: styles.systemBubble,
};

const MESSAGE_ROLE_LABELS: Record<UIMessage["role"], string> = {
  user: "User message",
  assistant: "Assistant message",
  system: "System message",
};
