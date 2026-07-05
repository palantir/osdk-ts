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
import { useMetrics } from "./useMetrics.js";

export interface PerformanceTiles {
  /** Cache hit rate as a fraction in `[0, 1]` (snapshot `rates.cacheHitRate`). */
  cacheHitRate: number;
  /** Network requests: snapshot `aggregates.cacheMisses + aggregates.revalidations`. */
  networkRequests: number;
  /** Average response time in milliseconds (snapshot `rates.averageResponseTime`). */
  averageResponseTime: number;
  /** Deduplicated (duplicate) requests (snapshot `aggregates.deduplications`). */
  duplicateRequests: number;
}

/**
 * Derives the Overview's performance tiles from the metrics store's public
 * snapshot — never private fields — so the tiles track the same numbers the
 * Performance tab shows and update live as new operations are recorded.
 */
export function usePerformanceTiles(
  monitorStore: MonitorStore
): PerformanceTiles {
  const { aggregates, rates } = useMetrics(monitorStore.getMetricsStore());
  return {
    cacheHitRate: rates.cacheHitRate,
    networkRequests: aggregates.cacheMisses + aggregates.revalidations,
    averageResponseTime: rates.averageResponseTime,
    duplicateRequests: aggregates.deduplications,
  };
}
