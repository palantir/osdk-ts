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

// Import styles to ensure they're bundled
import "./styles.js";

export { BubbleChart } from "./components/BubbleChart.js";
export { MonitorErrorBoundary } from "./components/MonitorErrorBoundary.js";
export type { MonitorErrorBoundaryProps } from "./components/MonitorErrorBoundary.js";
export {
  MonitoringPanel,
  SafeMonitoringPanel,
} from "./components/MonitoringPanel.js";
export type { MonitoringPanelProps } from "./components/MonitoringPanel.js";
export { ReactProfilerWrapper } from "./components/ReactProfilerWrapper.js";
export type { ReactProfilerWrapperProps } from "./components/ReactProfilerWrapper.js";

export { useActionChains } from "./hooks/useActionChains.js";
export type {
  UseActionChainsOptions,
  UseActionChainsResult,
} from "./hooks/useActionChains.js";
export { useActionImpact } from "./hooks/useActionImpact.js";
export type {
  UseActionImpactOptions,
  UseActionImpactResult,
} from "./hooks/useActionImpact.js";
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
export { ActionChainTracker } from "./utils/ActionChainTracker.js";
export type {
  ActionChain,
  ActionInChain,
  ActionTrigger,
} from "./utils/ActionChainTracker.js";
export { ActionImpactTracker } from "./utils/ActionImpactTracker.js";
export type {
  ActionImpactGraph,
  ActionPhase,
  AffectedObject,
  InvalidatedQuery,
  RenderedComponent,
} from "./utils/ActionImpactTracker.js";
export { componentContextCapture } from "./utils/ComponentContextCapture.js";
export type {
  ComponentContext,
  ComponentContextCapture,
  Fiber,
} from "./utils/ComponentContextCapture.js";
export type { ComponentQueryRegistry } from "./utils/ComponentQueryRegistry.js";
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
