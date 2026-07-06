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

import type { MetricsSnapshot } from "../types/index.js";

export interface Metric {
  /** The computed value, or undefined until enough samples have accrued. */
  value: number | undefined;
  sampleCount: number;
  unit?: string;
}

export interface CanonicalMetrics {
  cacheHitRate: Metric;
  requestsSaved: Metric;
  estimatedTimeSavedMs: Metric;
  avgResponseMs: Metric;
  avgCachedMs: Metric;
  avgNetworkMs: Metric;
  optimisticCoverage: Metric;
  avgPerceivedSpeedupMs: Metric;
  rollbackRate: Metric;
}

export const MIN_SAMPLES = {
  cacheHitRate: 20,
  latency: 5,
  requestsSaved: 1,
  optimisticCoverage: 3,
  rollbackRate: 3,
} as const;

type MinSamplesGroup = keyof typeof MIN_SAMPLES;

function metric(
  value: number,
  sampleCount: number,
  group: MinSamplesGroup,
  unit?: string
): Metric {
  const enough = sampleCount >= MIN_SAMPLES[group];
  const safeValue = Number.isFinite(value) ? value : 0;
  return {
    value: enough ? safeValue : undefined,
    sampleCount,
    unit,
  };
}

export function getCanonicalMetrics(
  snapshot: MetricsSnapshot
): CanonicalMetrics {
  const a = snapshot.aggregates;
  const hits = a.cacheHits;
  const misses = a.cacheMisses;
  const revals = a.revalidations;
  const dedups = a.deduplications;
  const actions = a.actionCount;
  const optimisticActions = a.optimisticActionCount;
  const rollbacks = a.rollbackActionCount;

  const requestTotal = hits + misses + revals;

  const cacheHitRate = metric(
    requestTotal > 0 ? (hits + revals) / requestTotal : 0,
    requestTotal,
    "cacheHitRate"
  );

  const requestsSavedCount = hits + revals + dedups;
  const requestsSaved = metric(
    requestsSavedCount,
    requestsSavedCount,
    "requestsSaved",
    "requests"
  );

  const avgNetworkMs = metric(
    a.networkResponseTime / Math.max(misses, 1),
    misses,
    "latency",
    "ms"
  );

  // Derived from two other metrics, so it stays undefined until both of those
  // have enough samples to be meaningful.
  const timeSaved =
    requestsSaved.value !== undefined && avgNetworkMs.value !== undefined
      ? requestsSaved.value * avgNetworkMs.value
      : undefined;
  const estimatedTimeSavedMs: Metric = {
    value:
      timeSaved !== undefined && Number.isFinite(timeSaved)
        ? timeSaved
        : undefined,
    sampleCount: requestsSavedCount,
    unit: "ms",
  };

  const avgResponseMs = metric(
    requestTotal > 0 ? a.totalResponseTime / requestTotal : 0,
    requestTotal,
    "latency",
    "ms"
  );

  const avgCachedMs = metric(
    a.cachedResponseTime / Math.max(hits, 1),
    hits,
    "latency",
    "ms"
  );

  const optimisticCoverage = metric(
    actions > 0 ? optimisticActions / actions : 0,
    actions,
    "optimisticCoverage"
  );

  const avgPerceivedSpeedupMs = metric(
    a.totalPerceivedSpeedup / Math.max(optimisticActions, 1),
    optimisticActions,
    "latency",
    "ms"
  );

  const rollbackRate = metric(
    actions > 0 ? rollbacks / actions : 0,
    actions,
    "rollbackRate"
  );

  return {
    cacheHitRate,
    requestsSaved,
    estimatedTimeSavedMs,
    avgResponseMs,
    avgCachedMs,
    avgNetworkMs,
    optimisticCoverage,
    avgPerceivedSpeedupMs,
    rollbackRate,
  };
}

/** Format a metric as a display string, or "N/A" until it has a value. */
export function formatMetric(m: Metric): string {
  if (m.value === undefined) {
    return "N/A";
  }
  if (m.unit === "requests") {
    return `${Math.round(m.value)}`;
  }
  if (m.unit === "ms") {
    return `${Math.round(m.value)} ms`;
  }
  return `${Math.round(m.value * 100)}%`;
}
