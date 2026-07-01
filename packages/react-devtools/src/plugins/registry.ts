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

import type { MonitorStore } from "../store/MonitorStore.js";
import type { DevToolsPlugin } from "./types.js";

const GLOBAL_STORE_KEY = "__OSDK_DEVTOOLS_MONITOR_STORE__";

function getGlobalMonitorStore(): MonitorStore | undefined {
  if (typeof globalThis !== "undefined" && GLOBAL_STORE_KEY in globalThis) {
    const candidate = (globalThis as Record<string, unknown>)[GLOBAL_STORE_KEY];
    if (
      typeof candidate === "object" &&
      candidate != null &&
      "getMetricsStore" in candidate &&
      "getComputeStore" in candidate
    ) {
      return candidate as MonitorStore;
    }
  }
  return undefined;
}

const registered: DevToolsPlugin[] = [];
const listeners = new Set<() => void>();

let snapshot: readonly DevToolsPlugin[] = [];

function notifyListeners(): void {
  for (const listener of listeners) {
    try {
      listener();
    } catch {
      // don't let a bad listener break the others
    }
  }
}

export function registerDevToolsPlugin(plugin: DevToolsPlugin): () => void {
  if (registered.some((existing) => existing.id === plugin.id)) {
    return () => {};
  }

  registered.push(plugin);
  snapshot = [...registered];

  const store = getGlobalMonitorStore();
  if (store) {
    plugin.init?.(store);
  }

  notifyListeners();

  return () => {
    const index = registered.indexOf(plugin);
    if (index === -1) {
      return;
    }
    registered.splice(index, 1);
    snapshot = [...registered];

    const disposeStore = getGlobalMonitorStore();
    if (disposeStore) {
      plugin.dispose?.(disposeStore);
    }

    notifyListeners();
  };
}

export function getRegisteredPlugins(): readonly DevToolsPlugin[] {
  return snapshot;
}

export function subscribePlugins(cb: () => void): () => void {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
