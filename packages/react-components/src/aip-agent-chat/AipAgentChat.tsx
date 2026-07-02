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

import type {
  AipAgentChatContextItem,
  AipAgentChatProps,
} from "./AipAgentChatApi.js";
import { BaseAipAgentChat } from "./BaseAipAgentChat.js";
import {
  buildObjectContext,
  combineSystemPrompt,
  type LoadedObjectContext,
} from "./buildObjectContext.js";
import { AipAgentChatContextLoader } from "./components/AipAgentChatContextLoader.js";
import { AipAgentChatContextPicker } from "./components/AipAgentChatContextPicker.js";
import { AipAgentChatModelPicker } from "./components/AipAgentChatModelPicker.js";

export type {
  AipAgentChatContextItem,
  AipAgentChatObjectTypeContextItem,
  AipAgentChatProps,
} from "./AipAgentChatApi.js";

const FALLBACK_MODEL_API_NAME = "gpt-4o";
const EMPTY_SELECTION: ReadonlyArray<AipAgentChatContextItem> = [];
const EMPTY_LOADED: ReadonlyMap<string, ReadonlyArray<unknown>> = new Map();

function getContextItemId(item: AipAgentChatContextItem): string {
  switch (item.type) {
    case "objectType":
      return item.objectType.apiName;
  }
}

/**
 * OSDK-aware chat surface backed by Foundry's Language Model Service.
 * Constructs the LMS-backed model internally and uses `useChat` to
 * manage conversation state, so consumers never need to import `useChat`,
 * `streamText`, or `foundryModel` themselves.
 */
export function AipAgentChat({
  client,
  model: controlledModel,
  defaultModel,
  availableModels,
  onModelChange,
  system,
  contextItems,
  defaultSelectedContextItems,
  onSelectedContextItemsChanged,
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
      controlledModel ??
      defaultModel ??
      availableModels?.[0] ??
      FALLBACK_MODEL_API_NAME
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
    [isControlled, onModelChange]
  );

  const model = React.useMemo(
    () => foundryModel({ client, model: activeModel }),
    [client, activeModel]
  );

  const contextItemById = React.useMemo(() => {
    const map = new Map<string, AipAgentChatContextItem>();
    for (const item of contextItems ?? []) {
      map.set(getContextItemId(item), item);
    }
    return map;
  }, [contextItems]);

  const availableContextItemIds = React.useMemo(
    () => Array.from(contextItemById.keys()),
    [contextItemById]
  );

  const [selectedContextItemIds, setSelectedContextItemIds] = React.useState<
    ReadonlyArray<string>
  >(() =>
    (defaultSelectedContextItems ?? EMPTY_SELECTION)
      .map(getContextItemId)
      .filter((id) => contextItemById.has(id))
  );

  const handleSelectedContextItemsChange = React.useCallback(
    (nextIds: ReadonlyArray<string>) => {
      setSelectedContextItemIds(nextIds);
      if (onSelectedContextItemsChanged == null) {
        return;
      }
      const nextItems: Array<AipAgentChatContextItem> = [];
      for (const id of nextIds) {
        const item = contextItemById.get(id);
        if (item != null) {
          nextItems.push(item);
        }
      }
      onSelectedContextItemsChanged(nextItems);
    },
    [contextItemById, onSelectedContextItemsChanged]
  );

  // Objects loaded per selected type, lifted from the per-type loaders.
  const [loadedByType, setLoadedByType] =
    React.useState<ReadonlyMap<string, ReadonlyArray<unknown>>>(EMPTY_LOADED);

  const handleObjectsLoaded = React.useCallback(
    (apiName: string, objects: ReadonlyArray<unknown> | undefined) => {
      setLoadedByType((prev) => {
        if (objects == null) {
          if (!prev.has(apiName)) {
            return prev;
          }
          const next = new Map(prev);
          next.delete(apiName);
          return next;
        }
        const next = new Map(prev);
        next.set(apiName, objects);
        return next;
      });
    },
    []
  );

  const objectContext = React.useMemo(() => {
    const loaded: Array<LoadedObjectContext> = [];
    for (const id of selectedContextItemIds) {
      const item = contextItemById.get(id);
      if (item?.type !== "objectType") {
        // TODO: Handle other context item types as they are added
        continue;
      }
      const objects = loadedByType.get(id);
      if (objects != null) {
        loaded.push({ apiName: item.objectType.apiName, objects });
      }
    }
    return buildObjectContext(loaded);
  }, [selectedContextItemIds, contextItemById, loadedByType]);

  const augmentedSystem = React.useMemo(
    () => combineSystemPrompt(system, objectContext),
    [system, objectContext]
  );

  const { messages, status, error, sendMessage, stop, clearError } = useChat({
    model,
    system: augmentedSystem,
    messages: initialMessages,
    onError,
    onFinish,
  });

  // Snap the uncontrolled model to the first available option whenever the
  // current selection isn't in `availableModels` (e.g. on first async resolve).
  React.useEffect(() => {
    if (
      isControlled ||
      availableModels == null ||
      availableModels.length === 0
    ) {
      return;
    }
    if (!availableModels.includes(internalModel)) {
      setInternalModel(availableModels[0]);
    }
  }, [isControlled, availableModels, internalModel]);

  const handleSendMessage = React.useCallback(
    (text: string) => {
      return sendMessage({ text });
    },
    [sendMessage]
  );

  const isInFlight = status === "submitted" || status === "streaming";

  const hasModelPicker = availableModels != null && availableModels.length > 0;
  const hasContextPicker = availableContextItemIds.length > 0;

  const composerActions = hasContextPicker ? (
    <AipAgentChatContextPicker
      contextItemIds={availableContextItemIds}
      selected={selectedContextItemIds}
      onChange={handleSelectedContextItemsChange}
      disabled={isInFlight}
    />
  ) : undefined;

  const belowComposer = hasModelPicker ? (
    <AipAgentChatModelPicker
      activeModel={activeModel}
      models={availableModels}
      onModelChange={handleModelChange}
      disabled={isInFlight}
    />
  ) : undefined;

  return (
    <>
      {selectedContextItemIds.map((id) => {
        const item = contextItemById.get(id);
        if (item?.type !== "objectType") {
          return null;
        }
        return (
          <AipAgentChatContextLoader
            key={id}
            objectType={item.objectType}
            onLoaded={handleObjectsLoaded}
          />
        );
      })}
      <BaseAipAgentChat
        composerActions={composerActions}
        belowComposer={belowComposer}
        className={className}
        enableAutoScroll={enableAutoScroll}
        messages={messages}
        status={status}
        error={error}
        onClearError={clearError}
        onSendMessage={handleSendMessage}
        onStop={stop}
        placeholder={placeholder}
        renderEmptyState={renderEmptyState}
        renderMessage={renderMessage}
      />
    </>
  );
}
