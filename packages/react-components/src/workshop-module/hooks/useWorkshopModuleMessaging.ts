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
  WorkshopVariableMap,
  WorkshopVariableValues,
} from "@osdk/workshop-embed";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactEventHandler } from "react";

import { useEventCallback } from "../../shared/hooks/useEventCallback.js";
import type { BaseWorkshopModuleProps } from "../WorkshopModuleApi.js";

export function useWorkshopModuleMessaging<
  TVariables extends WorkshopVariableMap,
>(
  src: string | undefined,
  {
    variables,
    onVariablesChanged,
  }: Pick<
    BaseWorkshopModuleProps<TVariables>,
    "variables" | "onVariablesChanged"
  >,
): ReactEventHandler<HTMLIFrameElement> {
  const destination = useMemo(() => ({ src }), [src]);
  const [loadedFrame, setLoadedFrame] = useState<{
    element: HTMLIFrameElement;
    destination: typeof destination;
  }>();
  const connection = useRef<WorkshopModuleConnection<TVariables>>();
  const sendVariables = useEventCallback(() => {
    if (variables == null) return;
    try {
      connection.current?.setVariables(variables);
    } catch (error) {
      reportError(error);
    }
  });
  const receiveVariables = useEventCallback(
    (changes: WorkshopVariableValues<TVariables>) => {
      onVariablesChanged?.(changes);
    },
  );

  useEffect(() => {
    // Returning to the same URL still needs a new iframe load event.
    if (destination.src == null || loadedFrame?.destination !== destination)
      return;
    const targetWindow = loadedFrame.element.contentWindow;
    const hostWindow = loadedFrame.element.ownerDocument.defaultView;
    if (targetWindow == null || hostWindow == null) return;

    const controller = new AbortController();
    let unsubscribe: (() => void) | undefined;
    void connectToWorkshopModule<TVariables>({
      targetWindow,
      hostWindow,
      targetOrigin: new URL(destination.src).origin,
      signal: controller.signal,
    })
      .then((current) => {
        if (controller.signal.aborted) {
          current.disconnect();
          return;
        }
        connection.current = current;
        unsubscribe = current.onVariablesSet(receiveVariables);
        // Use the latest props, including edits made during the handshake.
        sendVariables();
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted) reportError(error);
      });

    return () => {
      unsubscribe?.();
      controller.abort();
      connection.current = undefined;
    };
  }, [destination, loadedFrame, receiveVariables, sendVariables]);

  useEffect(() => {
    sendVariables();
  }, [variables, sendVariables]);

  return useCallback(
    (event) => {
      if (destination.src != null)
        setLoadedFrame({ element: event.currentTarget, destination });
    },
    [destination],
  );
}

function reportError(error: unknown): void {
  console.error("Workshop module messaging failed.", error);
}
