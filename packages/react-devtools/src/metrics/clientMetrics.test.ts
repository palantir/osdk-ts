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
import type { ClientMetrics, Metric } from "./clientMetrics.js";
import { formatMetric, getClientMetrics } from "./clientMetrics.js";

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

const CLIENT_KEYS: ReadonlyArray<keyof ClientMetrics> = [
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

describe("getClientMetrics", () => {
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

  it("exposes exactly the nine client metric keys", () => {
    const metrics = getClientMetrics(makeSnapshot({}));
    expect(Object.keys(metrics).sort()).toEqual([...CLIENT_KEYS]);
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
    const metrics = getClientMetrics(snapshot);

    expect(metrics.cacheHitRate.value).toBeCloseTo(store.getCacheHitRate());
    expect(metrics.cacheHitRate.value).toBeCloseTo((14 + 2) / 20);
    expect(metrics.cacheHitRate.sampleCount).toBe(20);
  });

  it("assigns request and millisecond units", () => {
    const metrics = getClientMetrics(
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
    const metrics = getClientMetrics(
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
    const metrics = getClientMetrics(
      makeSnapshot({ cacheHits: 3, cacheMisses: 2, networkResponseTime: 200 })
    );

    expect(metrics.requestsSaved.value).toBeDefined();
    expect(metrics.avgNetworkMs.value).toBeUndefined();
    expect(metrics.estimatedTimeSavedMs.value).toBeUndefined();
  });

  it("gates cacheHitRate at the twenty-sample threshold", () => {
    const below = getClientMetrics(makeSnapshot({ cacheHits: 19 }));
    expect(below.cacheHitRate.sampleCount).toBe(19);
    expect(below.cacheHitRate.value).toBeUndefined();

    const atThreshold = getClientMetrics(makeSnapshot({ cacheHits: 20 }));
    expect(atThreshold.cacheHitRate.sampleCount).toBe(20);
    expect(atThreshold.cacheHitRate.value).toBeDefined();
  });

  it("gates latency metrics at the five-sample threshold", () => {
    const below = getClientMetrics(
      makeSnapshot({ cacheMisses: 4, networkResponseTime: 400 })
    );
    expect(below.avgNetworkMs.value).toBeUndefined();

    const atThreshold = getClientMetrics(
      makeSnapshot({ cacheMisses: 5, networkResponseTime: 500 })
    );
    expect(atThreshold.avgNetworkMs.value).toBeCloseTo(100);
  });

  it("gates requestsSaved at the single-sample threshold", () => {
    expect(
      getClientMetrics(makeSnapshot({})).requestsSaved.value
    ).toBeUndefined();
    expect(
      getClientMetrics(makeSnapshot({ cacheHits: 1 })).requestsSaved.value
    ).toBeDefined();
  });

  it("gates optimistic coverage and rollback rate at the three-sample threshold", () => {
    const below = getClientMetrics(
      makeSnapshot({
        actionCount: 2,
        optimisticActionCount: 1,
        rollbackActionCount: 1,
      })
    );
    expect(below.optimisticCoverage.value).toBeUndefined();
    expect(below.rollbackRate.value).toBeUndefined();

    const atThreshold = getClientMetrics(
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
    const metrics = getClientMetrics(makeSnapshot({}));

    for (const key of CLIENT_KEYS) {
      expect(metrics[key].value).toBeUndefined();
      expect(metrics[key].sampleCount).toBe(0);
    }
  });
});

describe("formatMetric", () => {
  function m(value: number | undefined, unit?: string): Metric {
    return { value, sampleCount: 100, unit };
  }

  it("shows N/A until a value has accrued", () => {
    expect(formatMetric(m(undefined))).toBe("N/A");
    expect(formatMetric(m(undefined, "ms"))).toBe("N/A");
  });

  it("rounds a request count to a whole number", () => {
    expect(formatMetric(m(4.6, "requests"))).toBe("5");
  });

  it("renders a unitless ratio as a rounded percentage", () => {
    expect(formatMetric(m(0.6667))).toBe("67%");
  });

  it("keeps sub-second durations in milliseconds", () => {
    expect(formatMetric(m(12, "ms"))).toBe("12 ms");
    expect(formatMetric(m(999, "ms"))).toBe("999 ms");
  });

  it("humanizes durations of a second or more into seconds", () => {
    expect(formatMetric(m(1000, "ms"))).toBe("1 s");
    expect(formatMetric(m(1500, "ms"))).toBe("1.5 s");
    expect(formatMetric(m(12340, "ms"))).toBe("12.3 s");
    expect(formatMetric(m(45000, "ms"))).toBe("45 s");
  });

  it("humanizes durations of a minute or more into minutes", () => {
    expect(formatMetric(m(60000, "ms"))).toBe("1 min");
    expect(formatMetric(m(90000, "ms"))).toBe("1.5 min");
  });
});
