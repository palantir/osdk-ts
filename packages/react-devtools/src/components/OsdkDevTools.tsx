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

import React, { useContext } from "react";
import { DevToolsContext } from "../DevToolsContext.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import { MonitoringPanel } from "./MonitoringPanel.js";

const GLOBAL_STORE_KEY = "__OSDK_DEVTOOLS_MONITOR_STORE__";

function getGlobalMonitorStore(): MonitorStore | undefined {
  if (
    typeof globalThis !== "undefined"
    && GLOBAL_STORE_KEY in globalThis
  ) {
    const candidate = (globalThis as Record<string, unknown>)[GLOBAL_STORE_KEY];
    if (
      typeof candidate === "object"
      && candidate != null
      && "getMetricsStore" in candidate
      && "getComputeStore" in candidate
    ) {
      return candidate as MonitorStore;
    }
  }
  return undefined;
}

export function OsdkDevTools(): React.ReactElement | null {
  const contextStore = useContext(DevToolsContext);
  const monitorStore = contextStore
    ?? getGlobalMonitorStore()
    ?? null;

  if (!monitorStore) {
    return null;
  }
  return <MonitoringPanel monitorStore={monitorStore} />;
}
