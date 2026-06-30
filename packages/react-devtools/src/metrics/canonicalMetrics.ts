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
  value: number;
  sampleCount: number;
  ready: boolean;
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
  const safeValue = Number.isFinite(value) ? value : 0;
  return {
    value: safeValue,
    sampleCount,
    ready: sampleCount >= MIN_SAMPLES[group],
    unit,
  };
}

export function getCanonicalMetrics(
  snapshot: MetricsSnapshot
): CanonicalMetrics {
  const a = snapshot.aggregates;
  const H = a.cacheHits;
  const M = a.cacheMisses;
  const R = a.revalidations;
  const D = a.deduplications;
  const A = a.actionCount;
  const OA = a.optimisticActionCount;
  const RB = a.rollbackActionCount;

  const requestTotal = H + M + R;

  const cacheHitRate = metric(
    requestTotal > 0 ? (H + R) / requestTotal : 0,
    requestTotal,
    "cacheHitRate"
  );

  const requestsSavedCount = H + R + D;
  const requestsSaved = metric(
    requestsSavedCount,
    requestsSavedCount,
    "requestsSaved",
    "requests"
  );

  const avgNetworkMs = metric(
    a.networkResponseTime / Math.max(M, 1),
    M,
    "latency",
    "ms"
  );

  const estimatedTimeSavedMs = metric(
    requestsSaved.value * avgNetworkMs.value,
    requestsSavedCount,
    "requestsSaved",
    "ms"
  );

  const avgResponseMs = metric(
    requestTotal > 0 ? a.totalResponseTime / requestTotal : 0,
    requestTotal,
    "latency",
    "ms"
  );

  const avgCachedMs = metric(
    a.cachedResponseTime / Math.max(H, 1),
    H,
    "latency",
    "ms"
  );

  const optimisticCoverage = metric(
    A > 0 ? OA / A : 0,
    A,
    "optimisticCoverage"
  );

  const avgPerceivedSpeedupMs = metric(
    a.totalPerceivedSpeedup / Math.max(OA, 1),
    OA,
    "latency",
    "ms"
  );

  const rollbackRate = metric(A > 0 ? RB / A : 0, A, "rollbackRate");

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
