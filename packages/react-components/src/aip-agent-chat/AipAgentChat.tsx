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

import { foundryModel } from "@osdk/aip-core";
import { useChat } from "@osdk/react/experimental/aip";
import * as React from "react";
import type { AipAgentChatProps } from "./AipAgentChatApi.js";
import { BaseAipAgentChat } from "./BaseAipAgentChat.js";
import { AipAgentChatModelPicker } from "./components/AipAgentChatModelPicker.js";

export type { AipAgentChatProps } from "./AipAgentChatApi.js";

const FALLBACK_MODEL_API_NAME = "gpt-4o";

/**
 * OSDK-aware chat surface backed by `useChat` from
 * `@osdk/react/experimental/aip`. Constructs the LMS-backed model
 * internally, so consumers never need to import `useChat` or
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
  // Ignored when `controlledModel` is provided.
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

  const {
    messages,
    status,
    error,
    sendMessage,
    stop,
    clearError,
  } = useChat({
    model: lmsModel,
    system,
    messages: initialMessages,
    onError,
    onFinish,
  });

  const handleSendMessage = React.useCallback(
    (text: string) => {
      void sendMessage({ text });
    },
    [sendMessage],
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
      error={error}
      messages={messages}
      onClearError={clearError}
      onSendMessage={handleSendMessage}
      onStop={stop}
      placeholder={placeholder}
      renderEmptyState={renderEmptyState}
      renderMessage={renderMessage}
      status={status}
    />
  );
}
