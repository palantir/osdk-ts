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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { MetricsStore } from "../store/MetricsStore.js";
import type {
  AggregateMetrics,
  MetricRates,
  MetricsSnapshot,
} from "../types/index.js";
import type { CanonicalMetrics } from "./canonicalMetrics.js";
import { getCanonicalMetrics, MIN_SAMPLES } from "./canonicalMetrics.js";

function flushMicrotasksAndTimers(): void {
  vi.advanceTimersByTime(0);
}

function zeroAggregates(): AggregateMetrics {
  return {
    cacheHits: 0,
    cacheMisses: 0,
    deduplications: 0,
    optimisticUpdates: 0,
    totalResponseTime: 0,
    cachedResponseTime: 0,
    networkResponseTime: 0,
    requestsSaved: 0,
    bytesServedFromCache: 0,
    totalObjectsFromCache: 0,
    totalObjectsFromNetwork: 0,
    actionCount: 0,
    configuredOptimisticActionCount: 0,
    optimisticActionCount: 0,
    rollbackActionCount: 0,
    totalOptimisticRenderTime: 0,
    totalServerRoundTripTime: 0,
    totalPerceivedSpeedup: 0,
    totalOptimisticObjectsAffected: 0,
    revalidations: 0,
    validationCount: 0,
    totalValidationTime: 0,
  };
}

function zeroRates(): MetricRates {
  return {
    cacheHitRate: 0,
    deduplicationRate: 0,
    optimisticUpdateRate: 0,
    averageResponseTime: 0,
    averageCachedResponseTime: 0,
    optimisticActionCoverage: 0,
    configuredOptimisticActionRate: 0,
    rollbackRate: 0,
    averageOptimisticRenderTime: 0,
    averageServerRoundTripTime: 0,
    averagePerceivedSpeedup: 0,
    averageValidationTime: 0,
    validationTimeSaved: 0,
  };
}

function makeSnapshot(overrides: Partial<AggregateMetrics>): MetricsSnapshot {
  return {
    recent: [],
    aggregates: { ...zeroAggregates(), ...overrides },
    rates: zeroRates(),
    timeSeries: {
      timestamps: [],
      cacheHits: [],
      cacheMisses: [],
      revalidations: [],
      deduplications: [],
    },
  };
}

const CANONICAL_KEYS: ReadonlyArray<keyof CanonicalMetrics> = [
  "avgCachedMs",
  "avgNetworkMs",
  "avgPerceivedSpeedupMs",
  "avgResponseMs",
  "cacheHitRate",
  "estimatedTimeSavedMs",
  "optimisticCoverage",
  "requestsSaved",
  "rollbackRate",
];

describe("getCanonicalMetrics", () => {
  let store: MetricsStore;

  beforeEach(() => {
    vi.useFakeTimers();

    if (globalThis.requestIdleCallback === undefined) {
      globalThis.requestIdleCallback = ((cb: IdleRequestCallback) => {
        return setTimeout(
          () =>
            cb({
              didTimeout: false,
              timeRemaining: () => 50,
            }),
          0
        ) as unknown as number;
      }) as typeof globalThis.requestIdleCallback;
      globalThis.cancelIdleCallback = ((id: number) => {
        clearTimeout(id);
      }) as typeof globalThis.cancelIdleCallback;
    }

    store = new MetricsStore(100, 10);
  });

  afterEach(() => {
    store.dispose();
    vi.useRealTimers();
  });

  it("exposes exactly the nine canonical metric keys", () => {
    const metrics = getCanonicalMetrics(makeSnapshot({}));
    expect(Object.keys(metrics).sort()).toEqual([...CANONICAL_KEYS]);
  });

  it("locks the MIN_SAMPLES thresholds", () => {
    expect(MIN_SAMPLES).toEqual({
      cacheHitRate: 20,
      latency: 5,
      requestsSaved: 1,
      optimisticCoverage: 3,
      rollbackRate: 3,
    });
  });

  it("matches MetricsStore.getCacheHitRate() for the request-based formula", () => {
    for (let i = 0; i < 14; i++) {
      store.recordCacheHit(`hit-${i}`, 5);
    }
    for (let i = 0; i < 4; i++) {
      store.recordCacheMiss(`miss-${i}`, 100);
    }
    for (let i = 0; i < 2; i++) {
      store.recordRevalidation(`reval-${i}`, 80);
    }
    flushMicrotasksAndTimers();

    const snapshot = store.getSnapshot();
    const metrics = getCanonicalMetrics(snapshot);

    expect(metrics.cacheHitRate.value).toBeCloseTo(store.getCacheHitRate());
    expect(metrics.cacheHitRate.value).toBeCloseTo((14 + 2) / 20);
    expect(metrics.cacheHitRate.sampleCount).toBe(20);
    expect(metrics.cacheHitRate.ready).toBe(true);
  });

  it("assigns request and millisecond units", () => {
    const metrics = getCanonicalMetrics(
      makeSnapshot({ cacheHits: 5, revalidations: 3, deduplications: 2 })
    );

    expect(metrics.requestsSaved.unit).toBe("requests");
    expect(metrics.estimatedTimeSavedMs.unit).toBe("ms");
    expect(metrics.avgNetworkMs.unit).toBe("ms");
    expect(metrics.avgResponseMs.unit).toBe("ms");
    expect(metrics.avgCachedMs.unit).toBe("ms");
    expect(metrics.avgPerceivedSpeedupMs.unit).toBe("ms");
    expect(metrics.cacheHitRate.unit).toBeUndefined();
    expect(metrics.optimisticCoverage.unit).toBeUndefined();
    expect(metrics.rollbackRate.unit).toBeUndefined();
  });

  it("computes requestsSaved and derives estimatedTimeSavedMs from it", () => {
    const metrics = getCanonicalMetrics(
      makeSnapshot({
        cacheHits: 10,
        cacheMisses: 5,
        networkResponseTime: 500,
      })
    );

    expect(metrics.avgNetworkMs.value).toBeCloseTo(100);
    expect(metrics.requestsSaved.value).toBe(10);
    expect(metrics.estimatedTimeSavedMs.value).toBeCloseTo(1000);
    expect(metrics.estimatedTimeSavedMs.sampleCount).toBe(10);
  });

  it("gates cacheHitRate readiness at the twenty-sample threshold", () => {
    const below = getCanonicalMetrics(makeSnapshot({ cacheHits: 19 }));
    expect(below.cacheHitRate.sampleCount).toBe(19);
    expect(below.cacheHitRate.ready).toBe(false);

    const atThreshold = getCanonicalMetrics(makeSnapshot({ cacheHits: 20 }));
    expect(atThreshold.cacheHitRate.sampleCount).toBe(20);
    expect(atThreshold.cacheHitRate.ready).toBe(true);
  });

  it("gates latency metrics at the five-sample threshold", () => {
    const below = getCanonicalMetrics(
      makeSnapshot({ cacheMisses: 4, networkResponseTime: 400 })
    );
    expect(below.avgNetworkMs.ready).toBe(false);

    const atThreshold = getCanonicalMetrics(
      makeSnapshot({ cacheMisses: 5, networkResponseTime: 500 })
    );
    expect(atThreshold.avgNetworkMs.ready).toBe(true);
    expect(atThreshold.avgNetworkMs.value).toBeCloseTo(100);
  });

  it("gates requestsSaved at the single-sample threshold", () => {
    expect(getCanonicalMetrics(makeSnapshot({})).requestsSaved.ready).toBe(
      false
    );
    expect(
      getCanonicalMetrics(makeSnapshot({ cacheHits: 1 })).requestsSaved.ready
    ).toBe(true);
  });

  it("gates optimistic coverage and rollback rate at the three-sample threshold", () => {
    const below = getCanonicalMetrics(
      makeSnapshot({
        actionCount: 2,
        optimisticActionCount: 1,
        rollbackActionCount: 1,
      })
    );
    expect(below.optimisticCoverage.ready).toBe(false);
    expect(below.rollbackRate.ready).toBe(false);

    const atThreshold = getCanonicalMetrics(
      makeSnapshot({
        actionCount: 3,
        optimisticActionCount: 3,
        rollbackActionCount: 0,
      })
    );
    expect(atThreshold.optimisticCoverage.ready).toBe(true);
    expect(atThreshold.optimisticCoverage.value).toBeCloseTo(1);
    expect(atThreshold.rollbackRate.ready).toBe(true);
    expect(atThreshold.rollbackRate.value).toBeCloseTo(0);
  });

  it("guards every division to a finite zero and stays not-ready on a zeroed snapshot", () => {
    const metrics = getCanonicalMetrics(makeSnapshot({}));

    for (const key of CANONICAL_KEYS) {
      expect(Number.isFinite(metrics[key].value)).toBe(true);
      expect(metrics[key].value).toBe(0);
      expect(metrics[key].sampleCount).toBe(0);
      expect(metrics[key].ready).toBe(false);
    }
  });
});
