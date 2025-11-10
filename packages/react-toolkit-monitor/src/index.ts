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

export { BubbleChart } from "./components/BubbleChart.js";
export { MonitorErrorBoundary } from "./components/MonitorErrorBoundary.js";
export type { MonitorErrorBoundaryProps } from "./components/MonitorErrorBoundary.js";
export {
  MonitoringPanel,
  SafeMonitoringPanel,
} from "./components/MonitoringPanel.js";
export type { MonitoringPanelProps } from "./components/MonitoringPanel.js";

export { useComputeMetrics } from "./hooks/useComputeMetrics.js";
export {
  useComputeMetrics as useComputeMetricsSelector,
  useComputeRecording,
  useComputeRequests,
} from "./hooks/useComputeSelectors.js";
export { useMetrics } from "./hooks/useMetrics.js";
export {
  useMetricRates,
  useMetricsAggregates,
  useMetricsTimeSeries,
  useRecentOperations,
} from "./hooks/useMetricsSelectors.js";
export { usePersistedState } from "./hooks/usePersistedState.js";

export { ComputeStore } from "./store/ComputeStore.js";
export { MonitorStore } from "./store/MonitorStore.js";
export { ComputeMonitor } from "./utils/ComputeMonitor.js";

export type {
  AggregateMetrics,
  ComponentMetrics,
  HookUsage,
  MetricRates,
  MetricsSnapshot,
  MonitorConfig,
  Operation,
  OperationMetadata,
  OperationType,
  PanelPosition,
  RequestSignature,
  TimeSeriesData,
} from "./types/index.js";

import type { Logger } from "@osdk/api";
import { type Client } from "@osdk/client";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { MonitorStore } from "./store/MonitorStore.js";

export interface ClientConfig {
  baseUrl: string;
  ontologyRid: string | Promise<string>;
  auth: () => Promise<string>;
  logger?: Logger;
  branch?: string;
}

/**
 * Enables comprehensive monitoring for OSDK React Toolkit.
 *
 * This function creates a monitored client with full observability:
 * - Installs a fetch interceptor to capture compute usage from API responses
 * - Creates the base Client with intercepted fetch
 * - Creates an ObservableClient with the intercepted fetch
 * - Wraps the client with a proxy to track cache hits, misses, and deduplication
 * - Tracks action lifecycle including optimistic updates and rollbacks
 *
 * CRITICAL: This function creates the client internally to guarantee proper
 * initialization order. The fetch interceptor MUST be installed before the
 * client is created, otherwise the client will capture the original fetch.
 *
 * @param config Client configuration (url, ontologyRid, auth, logger, branch)
 * @returns The base client, monitored ObservableClient, monitor store, and dispose function
 *
 * @example
 * ```tsx
 * import { enableReactToolkitMonitor, MonitoringPanel } from "@osdk/react-toolkit-monitor";
 * import { createPublicOauthClient } from "@osdk/oauth";
 *
 * const auth = createPublicOauthClient(...);
 *
 * const { client, observableClient, monitorStore } = enableReactToolkitMonitor({
 *   baseUrl: "https://example.palantirfoundry.com",
 *   ontologyRid: "ri.ontology.main.ontology.xxx",
 *   auth: auth,
 * });
 *
 * // Use in your app
 * <OsdkProvider2 client={client} observableClient={observableClient}>
 *   <App />
 *   <MonitoringPanel monitorStore={monitorStore} />
 * </OsdkProvider2>
 * ```
 */
export function enableReactToolkitMonitor(
  config: ClientConfig,
): {
  client: Client;
  observableClient: ObservableClient;
  monitorStore: MonitorStore;
  dispose: () => void;
} {
  const store = new MonitorStore();
  const { client, observableClient } = store.createMonitoredClient(config);

  return {
    client,
    observableClient,
    monitorStore: store,
    dispose: () => store.dispose(),
  };
}
