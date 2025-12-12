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

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { registerDevTools } from "@osdk/react/devtools-registry";
import React from "react";
import { MonitoringPanel } from "./components/MonitoringPanel.js";
import { ReactProfilerWrapper } from "./components/ReactProfilerWrapper.js";
import { getMonitorStore, MonitorStore } from "./store/MonitorStore.js";

registerDevTools({
  wrapClient: (client: unknown) => {
    const monitorStore = new MonitorStore();
    return monitorStore.wrapExistingClient(client as ObservableClient);
  },

  wrapChildren: (children: React.ReactNode, monitoredClient: unknown) => {
    const monitorStore = getMonitorStore(monitoredClient as object);

    if (!monitorStore) {
      return children;
    }

    return React.createElement(
      ReactProfilerWrapper,
      {
        renderAttributionTracker: monitorStore.getRenderAttributionTracker(),
        enabled: true,
        children,
      },
    );
  },

  renderPanel: (monitoredClient: unknown) => {
    const monitorStore = getMonitorStore(monitoredClient as object);

    if (!monitorStore) {
      return null;
    }

    return React.createElement(MonitoringPanel, { monitorStore });
  },

  dispose: (monitoredClient: unknown) => {
    const monitorStore = getMonitorStore(monitoredClient as object);

    if (monitorStore) {
      monitorStore.dispose();
    }
  },
});
