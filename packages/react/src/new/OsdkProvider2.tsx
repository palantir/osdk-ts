/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { Client } from "@osdk/client";
import {
  createObservableClient,
  type ObservableClient,
} from "@osdk/client/unstable-do-not-use";
import React, { useEffect, useMemo, useRef } from "react";
import { OsdkContext } from "../OsdkContext.js";
import { OsdkContext2 } from "./OsdkContext2.js";

declare const process: { env?: { NODE_ENV?: string } } | undefined;
declare const require: ((id: string) => unknown) | undefined;

interface OsdkProviderOptions {
  children: React.ReactNode;
  client: Client;
  observableClient?: ObservableClient;
  devMode?: boolean;
}

export function OsdkProvider2({
  children,
  client,
  observableClient,
  devMode = typeof process !== "undefined"
    && process.env?.NODE_ENV === "development",
}: OsdkProviderOptions): React.JSX.Element {
  const baseObservableClient = useMemo(
    () => observableClient ?? createObservableClient(client),
    [client, observableClient],
  );

  interface MetricsStoreInterface {
    subscribe: (cb: () => void) => () => void;
    dispose: () => void;
  }

  interface ComputeStoreInterface {
    subscribe: (cb: () => void) => () => void;
    dispose: () => void;
  }

  interface ComputeMonitorInterface {
    install: () => void;
    uninstall: () => void;
  }

  interface MonitorCleanup {
    computeMonitor?: ComputeMonitorInterface;
    computeStore?: ComputeStoreInterface;
  }

  const cleanupRef = useRef<MonitorCleanup>({});

  const { finalClient, monitorPanel } = useMemo(() => {
    if (!devMode) {
      return { finalClient: baseObservableClient, monitorPanel: null };
    }

    interface MonitorModule {
      MonitoringPanel: React.ComponentType<{
        metricsStore: MetricsStoreInterface;
        computeStore?: ComputeStoreInterface;
      }>;
      enableReactToolkitMonitor: (client: ObservableClient) => {
        monitoredClient: ObservableClient;
        metricsStore: MetricsStoreInterface;
        dispose: () => void;
      };
      ComputeStore: new() => ComputeStoreInterface;
      ComputeMonitor: new(
        store: ComputeStoreInterface,
      ) => ComputeMonitorInterface;
    }

    function isValidMonitorModule(mod: unknown): mod is MonitorModule {
      if (typeof mod !== "object" || mod == null) return false;
      if (
        !("MonitoringPanel" in mod) || !("enableReactToolkitMonitor" in mod)
        || !("ComputeStore" in mod) || !("ComputeMonitor" in mod)
      ) {
        return false;
      }
      return (
        typeof mod.MonitoringPanel === "function"
        && typeof mod.enableReactToolkitMonitor === "function"
        && typeof mod.ComputeStore === "function"
        && typeof mod.ComputeMonitor === "function"
      );
    }

    let monitor: MonitorModule | null = null;

    try {
      if (typeof require !== "undefined") {
        const loadedModule = require("@osdk/react-toolkit-monitor");
        if (isValidMonitorModule(loadedModule)) {
          monitor = loadedModule;
        }
      }
    } catch (e) {
      return { finalClient: baseObservableClient, monitorPanel: null };
    }

    if (!monitor) {
      return { finalClient: baseObservableClient, monitorPanel: null };
    }

    const { monitoredClient, metricsStore } = monitor.enableReactToolkitMonitor(
      baseObservableClient,
    );

    let computeStore: ComputeStoreInterface | null = null;
    let computeMonitor: ComputeMonitorInterface | null = null;

    try {
      computeStore = new monitor.ComputeStore();
      computeMonitor = new monitor.ComputeMonitor(computeStore);
      computeMonitor.install();

      cleanupRef.current = {
        computeMonitor,
        computeStore,
      };
    } catch (e) {
    }

    const MonitoringPanel = monitor.MonitoringPanel;

    return {
      finalClient: monitoredClient,
      monitorPanel: (
        <MonitoringPanel
          metricsStore={metricsStore}
          computeStore={computeStore ?? undefined}
        />
      ),
    };
  }, [devMode, baseObservableClient]);

  useEffect(() => {
    return () => {
      const cleanup = cleanupRef.current;
      if (cleanup.computeMonitor) {
        cleanup.computeMonitor.uninstall();
      }
      if (cleanup.computeStore) {
        cleanup.computeStore.dispose();
      }
    };
  }, []);

  return (
    <OsdkContext2.Provider
      value={{ client, observableClient: finalClient }}
    >
      <OsdkContext.Provider value={{ client }}>
        {children}
        {monitorPanel}
      </OsdkContext.Provider>
    </OsdkContext2.Provider>
  );
}
