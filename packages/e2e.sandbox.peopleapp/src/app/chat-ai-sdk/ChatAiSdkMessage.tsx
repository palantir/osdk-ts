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

import type { UIMessage } from "ai";
import React from "react";
import { Button } from "../../components/Button.js";

export interface ChatAiSdkMessageProps {
  message: UIMessage;
  showRegenerate: boolean;
  onRegenerate: (messageId: string) => void;
}

function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((p): p is Extract<typeof p, { type: "text" }> => p.type === "text")
    .map((p) => p.text)
    .join("");
}

export function ChatAiSdkMessage(props: ChatAiSdkMessageProps) {
  const { message } = props;
  const text = getMessageText(message);
  const isUser = message.role === "user";
  const isAssistant = message.role === "assistant";

  const bubbleClass = isUser
    ? "self-end bg-blue-500 text-white"
    : isAssistant
    ? "self-start bg-gray-200 text-gray-900"
    : "self-center bg-gray-100 text-gray-700 italic";

  return (
    <div className="flex flex-col mb-2">
      <div
        className={`max-w-[80%] rounded-md px-3 py-2 whitespace-pre-wrap break-words ${bubbleClass}`}
      >
        {text.length > 0 ? text : <span className="opacity-60">&hellip;</span>}
      </div>
      {props.showRegenerate && (
        <div className="self-start mt-1">
          <Button
            variant="secondary"
            onClick={() => props.onRegenerate(message.id)}
          >
            Regenerate
          </Button>
        </div>
      )}
    </div>
  );
}
