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
import { objectCacheHitRate } from "../utils/cacheHitRate.js";
import { useMetrics } from "./useMetrics.js";

export interface PerformanceTiles {
  /**
   * Object-based cache hit rate as a fraction in `[0, 1]` — the same value the
   * Performance tab's cache metrics show (see `objectCacheHitRate`). `null` when
   * no objects have been loaded yet, so the rate has no denominator.
   */
  cacheHitRate: number | null;
  /**
   * Network requests: snapshot `aggregates.cacheMisses + aggregates.revalidations`.
   * `null` when nothing has been recorded yet.
   */
  networkRequests: number | null;
  /**
   * Average response time in milliseconds (snapshot `rates.averageResponseTime`).
   * `null` when nothing has been recorded yet.
   */
  averageResponseTime: number | null;
  /**
   * Deduplicated (duplicate) requests (snapshot `aggregates.deduplications`).
   * `null` when nothing has been recorded yet.
   */
  duplicateRequests: number | null;
}

/**
 * Derives the Overview's performance tiles from the metrics store's public
 * snapshot — never private fields — so the tiles track the same numbers the
 * Performance tab shows and update live as new operations are recorded. When no
 * activity has been recorded yet, tiles are `null` so the Overview renders "N/A"
 * rather than a misleading zero.
 */
export function usePerformanceTiles(
  monitorStore: MonitorStore
): PerformanceTiles {
  const { aggregates, rates } = useMetrics(monitorStore.getMetricsStore());
  const totalObjects =
    aggregates.totalObjectsFromCache + aggregates.totalObjectsFromNetwork;
  const hasActivity =
    totalObjects > 0 ||
    aggregates.cacheHits > 0 ||
    aggregates.cacheMisses > 0 ||
    aggregates.revalidations > 0 ||
    aggregates.deduplications > 0 ||
    aggregates.actionCount > 0 ||
    aggregates.validationCount > 0;
  return {
    cacheHitRate: totalObjects > 0 ? objectCacheHitRate(aggregates) : null,
    networkRequests: hasActivity
      ? aggregates.cacheMisses + aggregates.revalidations
      : null,
    averageResponseTime: hasActivity ? rates.averageResponseTime : null,
    duplicateRequests: hasActivity ? aggregates.deduplications : null,
  };
}
