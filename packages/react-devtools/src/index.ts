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

import "./register.js";
import "./styles.js";

export { BubbleChart } from "./components/BubbleChart.js";
export { MonitorErrorBoundary } from "./components/MonitorErrorBoundary.js";
export type { MonitorErrorBoundaryProps } from "./components/MonitorErrorBoundary.js";
export {
  MonitoringPanel,
  SafeMonitoringPanel,
} from "./components/MonitoringPanel.js";
export type { MonitoringPanelProps } from "./components/MonitoringPanel.js";
export { OsdkDevTools } from "./components/OsdkDevTools.js";

export {
  useComputeMetrics,
  useComputeRecording,
  useComputeRequests,
} from "./hooks/useComputeSelectors.js";
export { useMetrics } from "./hooks/useMetrics.js";
export { usePersistedState } from "./hooks/usePersistedState.js";

export type { Fiber } from "./fiber/types.js";
export { ComputeStore } from "./store/ComputeStore.js";
export { MonitorStore } from "./store/MonitorStore.js";
export { componentContextCapture } from "./utils/ComponentContextCapture.js";
export type {
  ComponentContext,
  ComponentContextCapture,
} from "./utils/ComponentContextCapture.js";
export type { ComponentQueryRegistry } from "./utils/ComponentQueryRegistry.js";
export { ComputeMonitor } from "./utils/ComputeMonitor.js";

export type {
  AggregateMetrics,
  MetricRates,
  MetricsSnapshot,
  Operation,
  OperationMetadata,
  OperationType,
  PanelPosition,
  TimeSeriesData,
} from "./types/index.js";
