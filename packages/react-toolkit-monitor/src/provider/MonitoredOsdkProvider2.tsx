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

import { OsdkProvider2 } from "@osdk/react/experimental";
import React, { lazy, Suspense, useMemo, useRef } from "react";
import { enableReactToolkitMonitor } from "../index.js";
import type { ClientConfig } from "../index.js";

declare const process: { env?: { NODE_ENV?: string } } | undefined;

const SafeMonitoringPanel = lazy(() =>
  import("../components/MonitoringPanel.js").then((m) => ({
    default: m.SafeMonitoringPanel,
  }))
);

export interface MonitoredOsdkProvider2Props {
  config: ClientConfig;
  children: React.ReactNode;
  enabled?: boolean;
}

/**
 * A convenience wrapper around OsdkProvider2 that automatically sets up monitoring.
 *
 * This component handles the entire monitoring setup internally:
 * 1. Installs fetch interceptor for compute tracking
 * 2. Creates a monitored Client with the intercepted fetch
 * 3. Creates an ObservableClient from the monitored Client
 * 4. Wraps the ObservableClient with monitoring proxy for cache/action tracking
 * 5. Automatically renders the MonitoringPanel (lazy loaded)
 *
 * The monitoring panel and all monitoring logic is lazy-loaded only when enabled.
 * When disabled, no monitoring code is loaded into your bundle.
 *
 * @param enabled - Whether to enable monitoring. Defaults to development mode check.
 *
 * @example
 * ```tsx
 * import { MonitoredOsdkProvider2 } from "@osdk/react-toolkit-monitor/provider";
 * import { createPublicOauthClient } from "@osdk/oauth";
 *
 * const auth = createPublicOauthClient(...);
 *
 * <MonitoredOsdkProvider2
 *   config={{
 *     baseUrl: "https://example.palantirfoundry.com",
 *     ontologyRid: "ri.ontology.main.ontology.xxx",
 *     auth: auth,
 *   }}
 *   enabled={process.env.NODE_ENV === "development"}
 * >
 *   <App />
 * </MonitoredOsdkProvider2>
 * ```
 */
export function MonitoredOsdkProvider2({
  config,
  children,
  enabled = typeof process !== "undefined"
    && process.env?.NODE_ENV === "development",
}: MonitoredOsdkProvider2Props): React.JSX.Element {
  const disposeRef = useRef<(() => void) | null>(null);

  const monitoringSetup = useMemo(() => {
    if (!enabled) {
      return null;
    }

    if (disposeRef.current) {
      disposeRef.current();
    }
    const result = enableReactToolkitMonitor(config);
    disposeRef.current = result.dispose;
    return result;
  }, [config, enabled]);

  React.useEffect(() => {
    return () => {
      if (disposeRef.current) {
        disposeRef.current();
      }
    };
  }, []);

  if (!enabled || !monitoringSetup) {
    const { client, observableClient } = enableReactToolkitMonitor(config);
    return (
      <OsdkProvider2 client={client} observableClient={observableClient}>
        {children}
      </OsdkProvider2>
    );
  }

  return (
    <OsdkProvider2
      client={monitoringSetup.client}
      observableClient={monitoringSetup.observableClient}
    >
      {children}
      <Suspense fallback={null}>
        <SafeMonitoringPanel monitorStore={monitoringSetup.monitorStore} />
      </Suspense>
    </OsdkProvider2>
  );
}
