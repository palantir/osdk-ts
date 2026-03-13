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
import type { ActionError, Operation } from "../types/index.js";
import { MetricsStore } from "./MetricsStore.js";

function flushMicrotasksAndTimers(): void {
  vi.advanceTimersByTime(0);
}

describe("MetricsStore", () => {
  let store: MetricsStore;

  beforeEach(() => {
    vi.useFakeTimers();

    if (typeof globalThis.requestIdleCallback === "undefined") {
      globalThis.requestIdleCallback = ((cb: IdleRequestCallback) => {
        return setTimeout(() =>
          cb({
            didTimeout: false,
            timeRemaining: () => 50,
          }), 0) as unknown as number;
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

  it("should create instance with default aggregates", () => {
    const snapshot = store.getSnapshot();
    expect(snapshot.aggregates.cacheHits).toBe(0);
    expect(snapshot.aggregates.cacheMisses).toBe(0);
    expect(snapshot.aggregates.deduplications).toBe(0);
    expect(snapshot.aggregates.optimisticUpdates).toBe(0);
    expect(snapshot.aggregates.totalResponseTime).toBe(0);
    expect(snapshot.recent).toHaveLength(0);
  });

  it("should update aggregates after recording a cache hit", () => {
    store.recordCacheHit("test-sig", 5, undefined, 3);
    flushMicrotasksAndTimers();

    const snapshot = store.getSnapshot();
    expect(snapshot.aggregates.cacheHits).toBe(1);
    expect(snapshot.aggregates.totalObjectsFromCache).toBe(3);
    expect(snapshot.aggregates.cachedResponseTime).toBe(5);
    expect(snapshot.aggregates.totalResponseTime).toBe(5);
    expect(snapshot.recent).toHaveLength(1);
    expect(snapshot.recent[0].type).toBe("cache-hit");
  });

  it("should update aggregates after recording a cache miss", () => {
    store.recordCacheMiss("test-sig", 150, undefined, 5);
    flushMicrotasksAndTimers();

    const snapshot = store.getSnapshot();
    expect(snapshot.aggregates.cacheMisses).toBe(1);
    expect(snapshot.aggregates.totalObjectsFromNetwork).toBe(5);
    expect(snapshot.aggregates.networkResponseTime).toBe(150);
    expect(snapshot.aggregates.totalResponseTime).toBe(150);
    expect(snapshot.recent).toHaveLength(1);
    expect(snapshot.recent[0].type).toBe("cache-miss");
  });

  it("should calculate cache hit rate with zero-division safety", () => {
    expect(store.getCacheHitRate()).toBe(0);

    store.recordCacheHit("sig-1", 5);
    store.recordCacheHit("sig-2", 3);
    store.recordCacheMiss("sig-3", 100);
    flushMicrotasksAndTimers();

    const hitRate = store.getCacheHitRate();
    expect(hitRate).toBeCloseTo(2 / 3);
  });

  it("should return cached snapshot and invalidate after new recording", () => {
    const firstSnapshot = store.getSnapshot();
    const secondSnapshot = store.getSnapshot();
    expect(firstSnapshot).toBe(secondSnapshot);

    store.recordCacheHit("sig-1", 5);
    flushMicrotasksAndTimers();

    const thirdSnapshot = store.getSnapshot();
    expect(thirdSnapshot).not.toBe(firstSnapshot);
    expect(thirdSnapshot.aggregates.cacheHits).toBe(1);
  });

  it("should notify subscribers after recording", () => {
    const subscriber = vi.fn();
    store.subscribe(subscriber);

    store.recordCacheHit("sig-1", 5);
    flushMicrotasksAndTimers();

    expect(subscriber).toHaveBeenCalled();
  });

  it("should allow unsubscribing", () => {
    const subscriber = vi.fn();
    const unsubscribe = store.subscribe(subscriber);
    unsubscribe();

    store.recordCacheHit("sig-1", 5);
    flushMicrotasksAndTimers();

    expect(subscriber).not.toHaveBeenCalled();
  });

  it("should drop oldest operations when ring buffer wraps around", () => {
    const smallStore = new MetricsStore(5, 10);

    for (let i = 0; i < 8; i++) {
      smallStore.recordCacheHit(`sig-${i}`, 10);
    }
    flushMicrotasksAndTimers();

    const snapshot = smallStore.getSnapshot();
    expect(snapshot.recent.length).toBeLessThanOrEqual(5);
    expect(snapshot.aggregates.cacheHits).toBe(8);

    smallStore.dispose();
  });

  it("should track action errors", () => {
    const error: ActionError = {
      id: "err-1",
      actionType: "createEmployee",
      timestamp: Date.now(),
      message: "Validation failed",
      parameters: { name: "Test" },
      validationErrors: [
        { field: "name", message: "Too short", value: "T" },
      ],
    };

    store.recordActionError(error);

    const errors = store.getActionErrors();
    expect(errors).toHaveLength(1);
    expect(errors[0].id).toBe("err-1");
    expect(errors[0].actionType).toBe("createEmployee");
  });

  it("should return action errors in reverse chronological order", () => {
    const error1: ActionError = {
      id: "err-1",
      actionType: "action1",
      timestamp: 1000,
      message: "first",
      parameters: {},
    };
    const error2: ActionError = {
      id: "err-2",
      actionType: "action2",
      timestamp: 2000,
      message: "second",
      parameters: {},
    };

    store.recordActionError(error1);
    store.recordActionError(error2);

    const errors = store.getActionErrors();
    expect(errors[0].id).toBe("err-2");
    expect(errors[1].id).toBe("err-1");
  });

  it("should reset all state", () => {
    store.recordCacheHit("sig-1", 5);
    store.recordCacheMiss("sig-2", 100);
    flushMicrotasksAndTimers();

    store.recordActionError({
      id: "err-1",
      actionType: "test",
      timestamp: Date.now(),
      message: "error",
      parameters: {},
    });

    store.reset();

    const snapshot = store.getSnapshot();
    expect(snapshot.aggregates.cacheHits).toBe(0);
    expect(snapshot.aggregates.cacheMisses).toBe(0);
    expect(snapshot.aggregates.totalResponseTime).toBe(0);
    expect(snapshot.recent).toHaveLength(0);
    expect(store.getActionErrors()).toHaveLength(0);
  });

  it("should clear interval, reset state, and clear subscribers on dispose", () => {
    const subscriber = vi.fn();
    store.subscribe(subscriber);

    store.recordCacheHit("sig-1", 5);
    flushMicrotasksAndTimers();

    store.dispose();

    const snapshot = store.getSnapshot();
    expect(snapshot.aggregates.cacheHits).toBe(0);
    expect(snapshot.recent).toHaveLength(0);

    subscriber.mockClear();

    store.recordCacheHit("sig-after-dispose", 5);
    flushMicrotasksAndTimers();
    expect(subscriber).not.toHaveBeenCalled();
  });

  it("should calculate rates with zero-division safety", () => {
    const snapshot = store.getSnapshot();
    expect(snapshot.rates.cacheHitRate).toBe(0);
    expect(snapshot.rates.averageResponseTime).toBe(0);
    expect(snapshot.rates.deduplicationRate).toBe(0);
    expect(snapshot.rates.optimisticUpdateRate).toBe(0);
    expect(snapshot.rates.averageCachedResponseTime).toBe(0);
    expect(snapshot.rates.optimisticActionCoverage).toBe(0);
    expect(snapshot.rates.rollbackRate).toBe(0);
    expect(snapshot.rates.averageOptimisticRenderTime).toBe(0);
    expect(snapshot.rates.averageServerRoundTripTime).toBe(0);
    expect(snapshot.rates.averagePerceivedSpeedup).toBe(0);
    expect(snapshot.rates.averageValidationTime).toBe(0);
  });

  it("should increment deduplications and requestsSaved after recordDeduplication", () => {
    store.recordDeduplication("sig-dedup");
    flushMicrotasksAndTimers();

    const snapshot = store.getSnapshot();
    expect(snapshot.aggregates.deduplications).toBe(1);
    expect(snapshot.aggregates.requestsSaved).toBe(1);
    expect(snapshot.recent).toHaveLength(1);
    expect(snapshot.recent[0].type).toBe("deduplication");
  });

  it("should increment optimisticUpdates after recordOptimisticUpdate", () => {
    store.recordOptimisticUpdate("sig-opt");
    flushMicrotasksAndTimers();

    const snapshot = store.getSnapshot();
    expect(snapshot.aggregates.optimisticUpdates).toBe(1);
    expect(snapshot.recent).toHaveLength(1);
    expect(snapshot.recent[0].type).toBe("optimistic-update");
  });

  it("should increment validationCount and totalValidationTime after recordActionValidation", () => {
    store.recordActionValidation("sig-val", 25);
    flushMicrotasksAndTimers();

    const snapshot = store.getSnapshot();
    expect(snapshot.aggregates.validationCount).toBe(1);
    expect(snapshot.aggregates.totalValidationTime).toBe(25);
    expect(snapshot.rates.averageValidationTime).toBe(25);
    expect(snapshot.recent).toHaveLength(1);
    expect(snapshot.recent[0].type).toBe("action-validation");
  });

  it("should update action aggregates after recordActionLifecycle", () => {
    const op: Operation = {
      id: "action-op-1",
      type: "action",
      signature: "createEmployee",
      timestamp: Date.now(),
      actionName: "createEmployee",
      optimisticConfigured: true,
      optimisticObserved: true,
      optimisticRenderTime: 5,
      serverRoundTripTime: 200,
      perceivedSpeedup: 195,
      optimisticObjectsAffected: 3,
    };

    store.recordActionLifecycle(op);
    flushMicrotasksAndTimers();

    const snapshot = store.getSnapshot();
    expect(snapshot.aggregates.actionCount).toBe(1);
    expect(snapshot.aggregates.configuredOptimisticActionCount).toBe(1);
    expect(snapshot.aggregates.optimisticActionCount).toBe(1);
    expect(snapshot.aggregates.totalOptimisticRenderTime).toBe(5);
    expect(snapshot.aggregates.totalServerRoundTripTime).toBe(200);
    expect(snapshot.aggregates.totalPerceivedSpeedup).toBe(195);
    expect(snapshot.aggregates.totalOptimisticObjectsAffected).toBe(3);
  });

  it("should populate timeSeries after advancing timer", () => {
    store.dispose();
    vi.useRealTimers();

    vi.useFakeTimers({
      toFake: [
        "setTimeout",
        "clearTimeout",
        "setInterval",
        "clearInterval",
        "Date",
      ],
    });
    const localStore = new MetricsStore(100, 10);

    localStore.recordCacheHit("ts-sig", 5);
    vi.advanceTimersByTime(10);

    vi.advanceTimersByTime(2000);

    const snapshot = localStore.getSnapshot();
    expect(snapshot.timeSeries.timestamps.length).toBeGreaterThan(0);
    expect(snapshot.timeSeries.cacheHits.some((n: number) => n > 0)).toBe(true);

    localStore.dispose();
  });

  it("should drop oldest errors when buffer exceeds 100", () => {
    for (let i = 0; i < 105; i++) {
      store.recordActionError({
        id: `err-${i}`,
        actionType: "testAction",
        timestamp: i,
        message: `error ${i}`,
        parameters: {},
      });
    }

    const errors = store.getActionErrors();
    expect(errors).toHaveLength(100);
    expect(errors[0].id).toBe("err-104");
    expect(errors[99].id).toBe("err-5");
  });

  it("should process all operations via batch processing", () => {
    for (let i = 0; i < 120; i++) {
      store.recordCacheHit(`batch-sig-${i}`, 10);
    }

    vi.advanceTimersByTime(10);

    const snapshot = store.getSnapshot();
    expect(snapshot.aggregates.cacheHits).toBe(120);
    expect(snapshot.recent.length).toBeLessThanOrEqual(100);
  });
});
