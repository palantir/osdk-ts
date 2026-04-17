/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import type React from "react";
import { useMemo, useRef } from "react";
import {
  type DevToolsRegistry,
  getRegisteredDevTools,
} from "../public/devtools-registry.js";

export function useDevToolsClient(
  baseClient: ObservableClient,
  enabled: boolean,
): {
  client: ObservableClient;
  wrapChildren: ((children: React.ReactNode) => React.ReactNode) | null;
} {
  const stateRef = useRef<{
    base: ObservableClient;
    monitored: ObservableClient;
    devTools: DevToolsRegistry;
  } | null>(null);

  const prev = stateRef.current;

  let wrappedClient: ObservableClient;
  if (!enabled) {
    stateRef.current = null;
    wrappedClient = baseClient;
  } else {
    const devTools = getRegisteredDevTools();
    if (devTools == null) {
      stateRef.current = null;
      wrappedClient = baseClient;
    } else if (
      prev != null &&
      prev.base === baseClient &&
      prev.devTools === devTools
    ) {
      wrappedClient = prev.monitored;
    } else {
      const monitored = devTools.wrapClient(baseClient);
      stateRef.current = { base: baseClient, monitored, devTools };
      wrappedClient = monitored;
    }
  }

  const currentState = stateRef.current;
  const wrapChildren = useMemo(
    () =>
      currentState != null
        ? (children: React.ReactNode): React.ReactNode =>
            currentState.devTools.wrapChildren(children, currentState.monitored)
        : null,
    [currentState],
  );

  return { client: wrappedClient, wrapChildren };
}
