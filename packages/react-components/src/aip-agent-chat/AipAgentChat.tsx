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
import {
  buildObjectContext,
  combineSystemPrompt,
  type LoadedObjectContext,
} from "./buildObjectContext.js";
import { AipAgentChatContextLoader } from "./components/AipAgentChatContextLoader.js";
import { AipAgentChatContextPicker } from "./components/AipAgentChatContextPicker.js";
import { AipAgentChatModelPicker } from "./components/AipAgentChatModelPicker.js";

export type { AipAgentChatProps } from "./AipAgentChatApi.js";

const FALLBACK_MODEL_API_NAME = "gpt-4o";
const EMPTY_SELECTION: ReadonlyArray<string> = [];
const EMPTY_LOADED: Readonly<Record<string, ReadonlyArray<unknown>>> = {};

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
  objectTypes,
  defaultSelectedObjectTypes,
  onSelectedObjectTypesChanged,
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

  const model = React.useMemo(
    () => foundryModel({ client, model: activeModel }),
    [client, activeModel],
  );

  // Map api name -> object type definition, plus the list of api names the
  // picker offers. Both are stable for a given `objectTypes` array.
  const objectTypeByApiName = React.useMemo(() => {
    const map = new Map<
      string,
      NonNullable<typeof objectTypes>[number]
    >();
    for (const objectType of objectTypes ?? []) {
      map.set(objectType.apiName, objectType);
    }
    return map;
  }, [objectTypes]);

  const availableObjectTypeApiNames = React.useMemo(
    () => Array.from(objectTypeByApiName.keys()),
    [objectTypeByApiName],
  );

  // Selection is uncontrolled: seed from `defaultSelectedObjectTypes`,
  // dropping any api names not present in `objectTypes`.
  const [selectedObjectTypes, setSelectedObjectTypes] = React.useState<
    ReadonlyArray<string>
  >(
    () =>
      (defaultSelectedObjectTypes ?? EMPTY_SELECTION).filter((apiName) =>
        objectTypeByApiName.has(apiName)
      ),
  );

  const handleSelectedObjectTypesChange = React.useCallback(
    (next: ReadonlyArray<string>) => {
      setSelectedObjectTypes(next);
      onSelectedObjectTypesChanged?.(next);
    },
    [onSelectedObjectTypesChanged],
  );

  // Objects loaded per selected type, lifted from the per-type loaders.
  const [loadedByType, setLoadedByType] = React.useState<
    Readonly<Record<string, ReadonlyArray<unknown>>>
  >(EMPTY_LOADED);

  const handleObjectsLoaded = React.useCallback(
    (apiName: string, objects: ReadonlyArray<unknown> | undefined) => {
      setLoadedByType((prev) => {
        if (objects == null) {
          if (!(apiName in prev)) {
            return prev;
          }
          const next = { ...prev };
          delete next[apiName];
          return next;
        }
        if (prev[apiName] === objects) {
          return prev;
        }
        return { ...prev, [apiName]: objects };
      });
    },
    [],
  );

  const objectContext = React.useMemo(() => {
    const loaded: Array<LoadedObjectContext> = [];
    for (const apiName of selectedObjectTypes) {
      const objects = loadedByType[apiName];
      if (objects != null) {
        loaded.push({ apiName, objects });
      }
    }
    return buildObjectContext(loaded);
  }, [selectedObjectTypes, loadedByType]);

  const augmentedSystem = React.useMemo(
    () => combineSystemPrompt(system, objectContext),
    [system, objectContext],
  );

  const {
    messages,
    status,
    error,
    sendMessage,
    stop,
    clearError,
  } = useChat({
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
      isControlled || availableModels == null || availableModels.length === 0
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
    [sendMessage],
  );

  const isInFlight = status === "submitted" || status === "streaming";

  const hasModelPicker = availableModels != null && availableModels.length > 0;
  const hasContextPicker = availableObjectTypeApiNames.length > 0;

  const composerFooter = hasModelPicker || hasContextPicker
    ? (
      <>
        {hasContextPicker && (
          <AipAgentChatContextPicker
            objectTypes={availableObjectTypeApiNames}
            selected={selectedObjectTypes}
            onChange={handleSelectedObjectTypesChange}
            disabled={isInFlight}
          />
        )}
        {hasModelPicker && (
          <AipAgentChatModelPicker
            activeModel={activeModel}
            models={availableModels}
            onModelChange={handleModelChange}
            disabled={isInFlight}
          />
        )}
      </>
    )
    : undefined;

  return (
    <>
      {
        /* One headless loader per selected type; mounting/unmounting is what
          gates fetching, keeping the rules of hooks satisfied. */
      }
      {selectedObjectTypes.map((apiName) => {
        const objectType = objectTypeByApiName.get(apiName);
        if (objectType == null) {
          return null;
        }
        return (
          <AipAgentChatContextLoader
            key={apiName}
            objectType={objectType}
            onLoaded={handleObjectsLoaded}
          />
        );
      })}
      <BaseAipAgentChat
        className={className}
        composerFooter={composerFooter}
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
