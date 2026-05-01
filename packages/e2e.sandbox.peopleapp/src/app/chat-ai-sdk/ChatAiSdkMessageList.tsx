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

import type { ChatStatus, UIMessage } from "ai";
import React from "react";
import { ChatAiSdkMessage } from "./ChatAiSdkMessage.js";

export interface ChatAiSdkMessageListProps {
  messages: ReadonlyArray<UIMessage>;
  status: ChatStatus;
  onRegenerate: (messageId: string) => void;
}

export function ChatAiSdkMessageList(props: ChatAiSdkMessageListProps) {
  const lastAssistantId = findLastAssistantId(props.messages);
  const canRegenerate = props.status === "ready";

  if (props.messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Start the conversation by typing below.
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto flex flex-col px-1 py-2">
      {props.messages.map((m) => (
        <ChatAiSdkMessage
          key={m.id}
          message={m}
          showRegenerate={canRegenerate && m.id === lastAssistantId}
          onRegenerate={props.onRegenerate}
        />
      ))}
    </div>
  );
}

function findLastAssistantId(
  messages: ReadonlyArray<UIMessage>,
): string | undefined {
  for (let i = messages.length - 1; i >= 0; i--) {
    const m = messages[i];
    if (m != null && m.role === "assistant") {
      return m.id;
    }
  }
  return undefined;
}
