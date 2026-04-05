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
import { registerDevTools } from "@osdk/react/devtools-registry";
import React from "react";
import { SafeMonitoringPanel } from "./components/MonitoringPanel.js";
import { DevToolsContext } from "./DevToolsContext.js";
import { safelyInstallDevToolsHook } from "./fiber/DevtoolsHook.js";
import { MonitorStore } from "./store/MonitorStore.js";

safelyInstallDevToolsHook();

const isDev = typeof process !== "undefined"
  ? process.env?.NODE_ENV !== "production"
  : true;

if (isDev) {
  const globalMonitorStore = new MonitorStore();
  (globalThis as Record<string, unknown>).__OSDK_DEVTOOLS_MONITOR_STORE__ =
    globalMonitorStore;

  registerDevTools({
    wrapClient: (client: ObservableClient) => {
      return globalMonitorStore.wrapExistingClient(client);
    },

    wrapChildren: (
      children: React.ReactNode,
      _monitoredClient: ObservableClient,
    ) => {
      return React.createElement(
        DevToolsContext.Provider,
        { value: globalMonitorStore },
        children,
        React.createElement(SafeMonitoringPanel, {
          monitorStore: globalMonitorStore,
        }),
      );
    },
  });
}
