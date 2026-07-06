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
import { getCanonicalMetrics } from "./canonicalMetrics.js";

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

    // jsdom has no requestIdleCallback, but MetricsStore schedules its
    // aggregation on idle; polyfill it onto the fake timers so the store flushes.
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

  it("leaves estimatedTimeSavedMs undefined until the network baseline has samples", () => {
    // Requests saved has samples, but with too few misses the network-latency
    // baseline has no value, so the derived estimate must stay undefined.
    const metrics = getCanonicalMetrics(
      makeSnapshot({ cacheHits: 3, cacheMisses: 2, networkResponseTime: 200 })
    );

    expect(metrics.requestsSaved.value).toBeDefined();
    expect(metrics.avgNetworkMs.value).toBeUndefined();
    expect(metrics.estimatedTimeSavedMs.value).toBeUndefined();
  });

  it("gates cacheHitRate at the twenty-sample threshold", () => {
    const below = getCanonicalMetrics(makeSnapshot({ cacheHits: 19 }));
    expect(below.cacheHitRate.sampleCount).toBe(19);
    expect(below.cacheHitRate.value).toBeUndefined();

    const atThreshold = getCanonicalMetrics(makeSnapshot({ cacheHits: 20 }));
    expect(atThreshold.cacheHitRate.sampleCount).toBe(20);
    expect(atThreshold.cacheHitRate.value).toBeDefined();
  });

  it("gates latency metrics at the five-sample threshold", () => {
    const below = getCanonicalMetrics(
      makeSnapshot({ cacheMisses: 4, networkResponseTime: 400 })
    );
    expect(below.avgNetworkMs.value).toBeUndefined();

    const atThreshold = getCanonicalMetrics(
      makeSnapshot({ cacheMisses: 5, networkResponseTime: 500 })
    );
    expect(atThreshold.avgNetworkMs.value).toBeCloseTo(100);
  });

  it("gates requestsSaved at the single-sample threshold", () => {
    expect(
      getCanonicalMetrics(makeSnapshot({})).requestsSaved.value
    ).toBeUndefined();
    expect(
      getCanonicalMetrics(makeSnapshot({ cacheHits: 1 })).requestsSaved.value
    ).toBeDefined();
  });

  it("gates optimistic coverage and rollback rate at the three-sample threshold", () => {
    const below = getCanonicalMetrics(
      makeSnapshot({
        actionCount: 2,
        optimisticActionCount: 1,
        rollbackActionCount: 1,
      })
    );
    expect(below.optimisticCoverage.value).toBeUndefined();
    expect(below.rollbackRate.value).toBeUndefined();

    const atThreshold = getCanonicalMetrics(
      makeSnapshot({
        actionCount: 3,
        optimisticActionCount: 3,
        rollbackActionCount: 0,
      })
    );
    expect(atThreshold.optimisticCoverage.value).toBeCloseTo(1);
    expect(atThreshold.rollbackRate.value).toBeCloseTo(0);
  });

  it("returns undefined for every metric on a zeroed snapshot", () => {
    const metrics = getCanonicalMetrics(makeSnapshot({}));

    for (const key of CANONICAL_KEYS) {
      expect(metrics[key].value).toBeUndefined();
      expect(metrics[key].sampleCount).toBe(0);
    }
  });
});
