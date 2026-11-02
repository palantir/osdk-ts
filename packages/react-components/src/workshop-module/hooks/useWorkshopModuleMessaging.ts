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

import { connectToWorkshopModule } from "@osdk/workshop-embed";
import type {
  WorkshopModuleConnection,
  WorkshopVariableValues,
} from "@osdk/workshop-embed";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactEventHandler } from "react";

import { useEventCallback } from "../../shared/hooks/useEventCallback.js";

const EMPTY_VARIABLES: WorkshopVariableValues = {};

export function useWorkshopModuleMessaging(
  src: string | undefined,
  variables: WorkshopVariableValues | undefined,
  onVariablesChanged: ((changes: WorkshopVariableValues) => void) | undefined,
  onConnectionError: ((error: Error) => void) | undefined,
): ReactEventHandler<HTMLIFrameElement> {
  const destination = useMemo(() => ({ src }), [src]);
  const [loadedFrame, setLoadedFrame] = useState<{
    element: HTMLIFrameElement;
    destination: typeof destination;
  }>();
  const connection = useRef<WorkshopModuleConnection>();
  const knownValues = useRef(EMPTY_VARIABLES);
  const reportError = useEventCallback((error: unknown) => {
    onConnectionError?.(
      error instanceof Error ? error : new Error(String(error)),
    );
  });
  const updateInputs = useEventCallback(() => {
    if (connection.current == null) return;
    const inputs = variables ?? EMPTY_VARIABLES;
    const changes = getChangedValues(inputs, knownValues.current);
    try {
      if (Object.keys(changes).length > 0)
        connection.current.setVariables(changes);
      knownValues.current = { ...knownValues.current, ...changes };
    } catch (error) {
      reportError(error);
    }
  });
  const receiveChanges = useEventCallback((values: WorkshopVariableValues) => {
    const changes = getChangedValues(values, knownValues.current);
    // Record Workshop's values before the parent merges them back into props.
    knownValues.current = { ...knownValues.current, ...values };
    if (Object.keys(changes).length > 0) onVariablesChanged?.(changes);
  });

  useEffect(() => {
    // Even when returning to the same URL, wait for this navigation's load event.
    if (destination.src == null || loadedFrame?.destination !== destination)
      return;
    const iframe = loadedFrame.element;
    const targetWindow = iframe.contentWindow;
    const hostWindow = iframe.ownerDocument.defaultView;
    if (targetWindow == null || hostWindow == null) return;
    const abortController = new AbortController();
    let stopListening: (() => void) | undefined;
    void connectToWorkshopModule({
      targetWindow,
      targetOrigin: new URL(destination.src).origin,
      hostWindow,
      signal: abortController.signal,
    }).then(
      (current) => {
        if (abortController.signal.aborted) {
          current.disconnect();
          return;
        }
        connection.current = current;
        knownValues.current = EMPTY_VARIABLES;
        stopListening = current.onVariablesSet(receiveChanges);
        // Props may have changed while the handshake was in progress.
        updateInputs();
      },
      (error: unknown) => {
        if (!abortController.signal.aborted) reportError(error);
      },
    );
    return () => {
      stopListening?.();
      abortController.abort();
      connection.current = undefined;
    };
  }, [loadedFrame, destination, updateInputs, receiveChanges, reportError]);

  useEffect(() => {
    updateInputs();
  }, [variables, updateInputs]);

  return useCallback(
    (event) => {
      if (destination.src != null)
        setLoadedFrame({ element: event.currentTarget, destination });
    },
    [destination],
  );
}

function getChangedValues(
  values: WorkshopVariableValues,
  previous: WorkshopVariableValues,
): WorkshopVariableValues {
  return Object.fromEntries(
    Object.entries(values).filter(
      ([key, value]) =>
        !Object.hasOwn(previous, key) || previous[key] !== value,
    ),
  );
}
