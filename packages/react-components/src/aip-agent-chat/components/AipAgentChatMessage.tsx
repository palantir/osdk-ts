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
export function AipAgentChatMessage({
  message,
}: AipAgentChatMessageProps): React.ReactElement {
  const text = getUIMessageText(message);
  const role = message.role;
  const styling = ROLE_STYLING[role];

  return (
    <div
      aria-label={styling.label}
      className={classNames(styles.message, styling.container)}
      role="group"
    >
      <div className={classNames(styles.bubble, styling.bubble)}>
        {text.length > 0 ? (
          text
        ) : (
          <span className={styles.streamingPlaceholder}>…</span>
        )}
      </div>
    </div>
  );
}

interface RoleStyling {
  container: string;
  bubble: string;
  label: string;
}

const ROLE_STYLING: Record<UIMessage["role"], RoleStyling> = {
  user: {
    container: styles.userMessage,
    bubble: styles.userBubble,
    label: "User message",
  },
  assistant: {
    container: styles.assistantMessage,
    bubble: styles.assistantBubble,
    label: "Assistant message",
  },
  system: {
    container: styles.systemMessage,
    bubble: styles.systemBubble,
    label: "System message",
  },
};
