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
import type { ConsoleLogEntry } from "../store/ConsoleLogStore.js";
import type { MonitorStore } from "../store/MonitorStore.js";

interface ConsoleLogSnapshot {
  entries: readonly ConsoleLogEntry[];
  count: number;
}

export function useConsoleLogs(monitorStore: MonitorStore): {
  entries: readonly ConsoleLogEntry[];
  count: number;
  clear: () => void;
} {
  const store = monitorStore.getConsoleLogStore();

  const subscribe = React.useCallback(
    (callback: () => void) => store.subscribe(callback),
    [store],
  );

  const cachedRef = React.useRef<ConsoleLogSnapshot>({
    entries: store.getEntries(),
    count: store.getSize(),
  });

  const getSnapshot = React.useCallback(
    (): ConsoleLogSnapshot => {
      const entries = store.getEntries();
      const count = store.getSize();
      const prev = cachedRef.current;
      if (prev.entries === entries && prev.count === count) {
        return prev;
      }
      cachedRef.current = { entries, count };
      return cachedRef.current;
    },
    [store],
  );

  const snapshot = React.useSyncExternalStore(subscribe, getSnapshot);

  const clear = React.useCallback(() => store.clear(), [store]);

  return {
    entries: snapshot.entries,
    count: snapshot.count,
    clear,
  };
}
