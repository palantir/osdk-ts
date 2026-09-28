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

import type {
  ParameterConfig,
  ParameterValue,
  WidgetConfig,
  WidgetMessage,
} from "@osdk/widget.api";
import * as React from "react";

import type {
  MessageLogEntry,
  PreviewConfig,
  PreviewMessage,
} from "./config.js";
import { loadedParameterValue } from "./parameterValues.js";

/** @public */
export interface WidgetPreviewStateOptions {
  sourceId: string;
  config: PreviewConfig;
  initialParameters?: Record<string, ParameterValue>;
}

/** @public */
export interface WidgetPreviewState {
  parameterValues: Record<string, ParameterValue>;
  messageLog: MessageLogEntry[];
  handleParameterReset: () => void;
  handleParameterValueChange: (id: string, value: ParameterValue) => void;
  handleAppendMessageLog: (message: PreviewMessage) => void;
  handleEvent: (
    payload: WidgetMessage.Payload.EmitEvent<WidgetConfig<ParameterConfig>>,
  ) => void;
}

const MESSAGE_LOG_MAX_SIZE = 1000;

/** @public */
export function useWidgetPreviewState({
  sourceId,
  config,
  initialParameters = {},
}: WidgetPreviewStateOptions): WidgetPreviewState {
  const [state, setState] = React.useState(() => ({
    sourceId,
    generation: 0,
    parameterValues: initialParameters,
    messageLog: [] as MessageLogEntry[],
  }));
  if (state.sourceId !== sourceId) {
    setState({
      sourceId,
      generation: state.generation + 1,
      parameterValues: initialParameters,
      messageLog: [],
    });
  }
  const generation = state.generation;
  const handleParameterReset = React.useCallback(() => {
    setState((previous) =>
      previous.sourceId === sourceId && previous.generation === generation
        ? {
            ...previous,
            generation: previous.generation + 1,
            parameterValues: {},
          }
        : previous,
    );
  }, [sourceId, generation]);
  const handleParameterValueChange = React.useCallback(
    (id: string, value: ParameterValue) => {
      setState((previous) =>
        previous.sourceId === sourceId && previous.generation === generation
          ? {
              ...previous,
              parameterValues: { ...previous.parameterValues, [id]: value },
            }
          : previous,
      );
    },
    [sourceId, generation],
  );
  const handleAppendMessageLog = React.useCallback(
    (message: PreviewMessage) => {
      const entry = { timestamp: new Date(), message };
      setState((previous) =>
        previous.sourceId === sourceId && previous.generation === generation
          ? {
              ...previous,
              messageLog: [
                entry,
                ...previous.messageLog.slice(0, MESSAGE_LOG_MAX_SIZE - 1),
              ],
            }
          : previous,
      );
    },
    [sourceId, generation],
  );
  const handleEvent = React.useCallback(
    (
      payload: WidgetMessage.Payload.EmitEvent<WidgetConfig<ParameterConfig>>,
    ) => {
      const event = config.events.find(
        (candidate) => candidate.id === payload.eventId,
      );
      if (event == null) throw new Error(`Unknown event "${payload.eventId}".`);
      const updates = Object.fromEntries(
        Object.entries(payload.parameterUpdates).map(([id, value]) => {
          const definition = config.parameters.find(
            (parameter) => parameter.id === id,
          );
          if (definition == null || !event.parameterUpdateIds.includes(id)) {
            throw new Error(
              `Event "${payload.eventId}" cannot update parameter "${id}".`,
            );
          }
          return [id, loadedParameterValue(definition, value)];
        }),
      );
      setState((previous) =>
        previous.sourceId === sourceId && previous.generation === generation
          ? {
              ...previous,
              parameterValues: { ...previous.parameterValues, ...updates },
            }
          : previous,
      );
    },
    [config, sourceId, generation],
  );
  return {
    parameterValues: state.parameterValues,
    messageLog: state.messageLog,
    handleParameterReset,
    handleParameterValueChange,
    handleAppendMessageLog,
    handleEvent,
  };
}
