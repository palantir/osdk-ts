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

import React from "react";

import type { MonitorStore } from "../store/MonitorStore.js";

/**
 * Live count of user-facing problems: every window-error-store entry (each is an
 * error) plus every console-log-store entry logged at `error` or `warn`. Both
 * stores are subscribable, so the count re-reads whenever either emits.
 */
export function useErrorWarningCount(monitorStore: MonitorStore): number {
  const errorStore = monitorStore.getWindowErrorStore();
  const consoleStore = monitorStore.getConsoleLogStore();

  const subscribe = React.useCallback(
    (callback: () => void) => {
      const unsubscribeError = errorStore.subscribe(callback);
      const unsubscribeConsole = consoleStore.subscribe(callback);
      return () => {
        unsubscribeError();
        unsubscribeConsole();
      };
    },
    [errorStore, consoleStore]
  );

  const getSnapshot = React.useCallback(() => {
    const windowErrors = errorStore.getEntries().length;
    const consoleIssues = consoleStore
      .getEntries()
      .filter(
        (entry) => entry.level === "error" || entry.level === "warn"
      ).length;
    return windowErrors + consoleIssues;
  }, [errorStore, consoleStore]);

  return React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
