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

import {
  foundryModel,
  generateMessageId,
  getUIMessageText,
  streamText,
  type UIMessage,
} from "@osdk/aip-core";
import * as React from "react";
import type { AipAgentChatProps } from "./AipAgentChatApi.js";
import type { BaseAipAgentChatSendContext } from "./BaseAipAgentChat.js";
import { BaseAipAgentChat } from "./BaseAipAgentChat.js";
import { AipAgentChatModelPicker } from "./components/AipAgentChatModelPicker.js";

export type { AipAgentChatProps } from "./AipAgentChatApi.js";

const FALLBACK_MODEL_API_NAME = "gpt-4o";

/**
 * OSDK-aware chat surface backed by Foundry's Language Model Service.
 * Constructs the LMS-backed model internally and runs `streamText`
 * against it, so consumers never need to import `streamText` or
 * `foundryModel` themselves.
 */
export function AipAgentChat({
  client,
  model: controlledModel,
  defaultModel,
  availableModels,
  onModelChange,
  system,
  initialMessages,
  className,
  placeholder,
  enableAutoScroll,
  onError,
  onFinish,
  renderEmptyState,
  renderMessage,
}: AipAgentChatProps): React.ReactElement {
  // Internal state used only in uncontrolled mode. Initialized once
  // from the first available source: `controlledModel` → `defaultModel`
  // → first entry of `availableModels` → `FALLBACK_MODEL_API_NAME`.
  const [internalModel, setInternalModel] = React.useState<string>(
    () =>
      controlledModel
        ?? defaultModel
        ?? availableModels?.[0]
        ?? FALLBACK_MODEL_API_NAME,
  );

  const isControlled = controlledModel != null;
  const activeModel = isControlled ? controlledModel : internalModel;

  const handleModelChange = React.useCallback(
    (next: string) => {
      if (!isControlled) {
        setInternalModel(next);
      }
      onModelChange?.(next);
    },
    [isControlled, onModelChange],
  );

  const lmsModel = React.useMemo(
    () => foundryModel({ client, model: activeModel }),
    [client, activeModel],
  );

  const handleSendMessage = React.useCallback(
    async (
      text: string,
      ctx: BaseAipAgentChatSendContext,
    ): Promise<UIMessage> => {
      const userMessage: UIMessage = {
        id: generateMessageId(),
        role: "user",
        parts: [{ type: "text", text }],
      };
      const conversation = [...ctx.history, userMessage];

      const stream = streamText({
        model: lmsModel,
        messages: uiMessagesToModelMessages(conversation),
        system,
        abortSignal: ctx.signal,
      });

      let accumulated = "";
      const reader = stream.textStream.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          accumulated += value;
          ctx.setStreamingText(accumulated);
        }
      } finally {
        reader.releaseLock();
      }

      const assistantMessage: UIMessage = {
        id: generateMessageId(),
        role: "assistant",
        parts: [{ type: "text", text: accumulated }],
      };

      onFinish?.({
        message: assistantMessage,
        messages: [...conversation, assistantMessage],
      });

      return assistantMessage;
    },
    [lmsModel, system, onFinish],
  );

  const composerFooter = availableModels != null && availableModels.length > 0
    ? (
      <AipAgentChatModelPicker
        activeModel={activeModel}
        models={availableModels}
        onModelChange={handleModelChange}
      />
    )
    : undefined;

  return (
    <BaseAipAgentChat
      className={className}
      composerFooter={composerFooter}
      enableAutoScroll={enableAutoScroll}
      initialMessages={initialMessages}
      onError={onError}
      onSendMessage={handleSendMessage}
      placeholder={placeholder}
      renderEmptyState={renderEmptyState}
      renderMessage={renderMessage}
    />
  );
}

/**
 * Convert UI messages (the conversation shape rendered in the chat)
 * into the `ModelMessage[]` shape `streamText` accepts. v0: text-only.
 * Mirrors `uiMessagesToModelMessages` in `@osdk/aip-core/internal`,
 * which is not part of the public surface.
 */
function uiMessagesToModelMessages(
  ui: ReadonlyArray<UIMessage>,
): Array<{ role: "user" | "assistant" | "system"; content: string }> {
  const out: Array<
    { role: "user" | "assistant" | "system"; content: string }
  > = [];
  for (const m of ui) {
    const text = getUIMessageText(m);
    if (text.length === 0) {
      continue;
    }
    out.push({ role: m.role, content: text });
  }
  return out;
}
