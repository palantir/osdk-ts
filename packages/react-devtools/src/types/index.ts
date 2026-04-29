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

import type { Logger } from "@osdk/api";

export type OperationType =
  | "cache-hit"
  | "cache-miss"
  | "revalidation"
  | "deduplication"
  | "optimistic-update"
  | "network-request"
  | "action"
  | "action-validation";

export interface Operation {
  readonly id: string;
  readonly type: OperationType;
  readonly signature: string;
  readonly timestamp: number;
  readonly responseTime?: number;
  readonly saved?: number;
  readonly metadata?: OperationMetadata;
  readonly objectCount?: number;
  readonly actionName?: string;
  readonly optimisticConfigured?: boolean;
  readonly optimisticObserved?: boolean;
  readonly optimisticRenderTime?: number;
  readonly serverRoundTripTime?: number;
  readonly perceivedSpeedup?: number;
  readonly rollback?: boolean;
  readonly optimisticObjectsAffected?: number;
  readonly renderGapBeforeServer?: number;
  readonly optimisticLayerCount?: number;
}

export interface OperationMetadata {
  readonly apiName?: string;
  readonly primaryKey?: string;
  readonly actionName?: string;
  readonly objectType?: string;
  readonly whereClause?: string;
  readonly pageSize?: number;
}

export interface AggregateMetrics {
  readonly cacheHits: number;
  readonly cacheMisses: number;
  readonly deduplications: number;
  readonly optimisticUpdates: number;
  readonly totalResponseTime: number;
  readonly cachedResponseTime: number;
  readonly networkResponseTime: number;
  readonly requestsSaved: number;
  readonly bytesServedFromCache: number;
  readonly totalObjectsFromCache: number;
  readonly totalObjectsFromNetwork: number;
  readonly actionCount: number;
  readonly configuredOptimisticActionCount: number;
  readonly optimisticActionCount: number;
  readonly rollbackActionCount: number;
  readonly totalOptimisticRenderTime: number;
  readonly totalServerRoundTripTime: number;
  readonly totalPerceivedSpeedup: number;
  readonly totalOptimisticObjectsAffected: number;
  readonly revalidations: number;
  readonly validationCount: number;
  readonly totalValidationTime: number;
}

export interface MetricsSnapshot {
  readonly recent: ReadonlyArray<Operation>;
  readonly aggregates: AggregateMetrics;
  readonly rates: MetricRates;
  readonly timeSeries: TimeSeriesData;
}

export interface MetricRates {
  readonly cacheHitRate: number;
  readonly deduplicationRate: number;
  readonly optimisticUpdateRate: number;
  readonly averageResponseTime: number;
  readonly averageCachedResponseTime: number;
  readonly optimisticActionCoverage: number;
  readonly configuredOptimisticActionRate: number;
  readonly rollbackRate: number;
  readonly averageOptimisticRenderTime: number;
  readonly averageServerRoundTripTime: number;
  readonly averagePerceivedSpeedup: number;
  readonly averageValidationTime: number;
  readonly validationTimeSaved: number;
}

export interface TimeSeriesData {
  readonly timestamps: ReadonlyArray<number>;
  readonly cacheHits: ReadonlyArray<number>;
  readonly cacheMisses: ReadonlyArray<number>;
  readonly revalidations: ReadonlyArray<number>;
  readonly deduplications: ReadonlyArray<number>;
}

export type DockMode = "floating" | "docked-bottom" | "docked-right";

export interface PanelPosition {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly collapsed: boolean;
  readonly dockMode: DockMode;
}

export interface ObservableDebugMetadata {
  readonly optimisticId?: string | number;
  readonly servedFromCache?: boolean;
  readonly servedFromMock?: boolean;
  readonly mockId?: string;
  readonly fetchSource?:
    | "network"
    | "stream"
    | "optimistic"
    | "cross-propagation";
}

export interface MonitoringConfig {
  readonly logger?: Logger;
  readonly cacheDetectionThresholdMs: number;
  readonly cleanupIntervalMs: number;
  readonly maxOperations: number;
  readonly timeSeriesSize: number;
}

export const DEFAULT_MONITOR_CONFIG: MonitoringConfig = {
  cacheDetectionThresholdMs: 10,
  cleanupIntervalMs: 60000,
  maxOperations: 1000,
  timeSeriesSize: 60,
};

export interface ActionError {
  readonly id: string;
  readonly actionType: string;
  readonly timestamp: number;
  readonly message: string;
  readonly stack?: string;
  readonly parameters: Record<string, unknown>;
  readonly validationErrors?: ValidationError[];
}

export interface ValidationError {
  readonly field: string;
  readonly message: string;
  readonly value: unknown;
}

export interface WastedRender {
  readonly componentId: string;
  readonly componentName: string;
  readonly count: number;
  readonly timestamp: number;
}

export interface UnusedProperty {
  readonly componentId: string;
  readonly componentName: string;
  readonly propertyName: string;
  readonly totalRenders: number;
  readonly accessCount: number;
}

export interface OsdkMonitorGlobal {
  readonly componentRegistry: object;
  readonly componentContextCapture: object;
  readonly prototypeOverrideStore: object;
}

declare global {
  interface Window {
    __OSDK_MONITOR__?: OsdkMonitorGlobal;
  }
}
