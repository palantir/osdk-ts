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

import type { Observer } from "@osdk/client/unstable-do-not-use";
import { afterEach, describe, expect, it, vitest } from "vitest";
import {
  _clearSuspenseCache,
  getSuspenseExternalStore,
  throwIfSuspenseNeeded,
} from "../src/new/makeSuspenseExternalStore.js";

interface MockPayload {
  object: { id: string } | undefined;
  status: "init" | "loading" | "loaded" | "error";
  isOptimistic: boolean;
  lastUpdated: number;
}

afterEach(() => {
  _clearSuspenseCache();
});

describe("getSuspenseExternalStore", () => {
  function createStore(key = "test-key") {
    let capturedObserver: Observer<MockPayload | undefined> | undefined;
    const mockUnsubscribe = vitest.fn();

    const store = getSuspenseExternalStore<MockPayload>(
      key,
      (observer) => {
        capturedObserver = observer;
        return { unsubscribe: mockUnsubscribe };
      },
    );

    return {
      store,
      get observer() {
        if (capturedObserver === undefined) {
          throw new Error("Observer not captured");
        }
        return capturedObserver;
      },
      mockUnsubscribe,
    };
  }

  it("should capture observer eagerly on creation", () => {
    const { observer } = createStore();
    expect(observer).toBeDefined();
  });

  it("should return undefined snapshot before any data", () => {
    const { store } = createStore();
    expect(store.getSnapShot()).toBeUndefined();
  });

  it("should return a pending promise before data loads", () => {
    const { store } = createStore();
    const promise = store.getSuspensePromise();
    expect(promise).toBeInstanceOf(Promise);
  });

  it("should return the same promise instance on repeated calls", () => {
    const { store } = createStore();
    const p1 = store.getSuspensePromise();
    const p2 = store.getSuspensePromise();
    expect(p1).toBe(p2);
  });

  it("should resolve the promise when status becomes loaded", async () => {
    const { store, observer } = createStore();
    const promise = store.getSuspensePromise();

    observer.next({
      object: { id: "1" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: Date.now(),
    });

    await expect(promise).resolves.toBeUndefined();
  });

  it("should return undefined from getSuspensePromise after data has loaded", () => {
    const { store, observer } = createStore();

    observer.next({
      object: { id: "1" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: Date.now(),
    });

    expect(store.getSuspensePromise()).toBeUndefined();
  });

  it("should resolve the promise on error (so ErrorBoundary can catch)", async () => {
    const { store, observer } = createStore();
    const promise = store.getSuspensePromise();

    observer.error(new Error("fetch failed"));

    await expect(promise).resolves.toBeUndefined();
  });

  it("should not re-suspend when data is already loaded (stale-while-revalidate)", () => {
    const { store, observer } = createStore();

    observer.next({
      object: { id: "1" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: Date.now(),
    });

    expect(store.getSuspensePromise()).toBeUndefined();

    observer.next({
      object: { id: "1" },
      status: "loading",
      isOptimistic: false,
      lastUpdated: Date.now(),
    });

    expect(store.getSuspensePromise()).toBeUndefined();
  });

  it("should update snapshot on next()", () => {
    const { store, observer } = createStore();

    const payload: MockPayload = {
      object: { id: "1" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: 123,
    };
    observer.next(payload);

    expect(store.getSnapShot()).toEqual(payload);
  });

  it("should notify React when subscribe callback is registered", () => {
    const { store, observer } = createStore();
    const notifyUpdate = vitest.fn();
    store.subscribe(notifyUpdate);

    observer.next({
      object: { id: "1" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: Date.now(),
    });

    expect(notifyUpdate).toHaveBeenCalledTimes(1);
  });

  it("should preserve error on snapshot when observer.error is called", () => {
    const { store, observer } = createStore();

    observer.error(new Error("network error"));

    const snapshot = store.getSnapShot();
    expect(snapshot).toBeDefined();
    expect(snapshot?.error).toBeInstanceOf(Error);
    expect(snapshot?.error?.message).toBe("network error");
  });

  it("should unsubscribe and clean up cache when cleanup is called", () => {
    const { store, mockUnsubscribe } = createStore();
    const cleanup = store.subscribe(vitest.fn());
    cleanup();
    expect(mockUnsubscribe).toHaveBeenCalledTimes(1);
  });

  it("should notify multiple subscribers", () => {
    const { store, observer } = createStore("multi-sub-key");
    const notify1 = vitest.fn();
    const notify2 = vitest.fn();
    store.subscribe(notify1);
    store.subscribe(notify2);

    observer.next({
      object: { id: "1" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: Date.now(),
    });

    expect(notify1).toHaveBeenCalledTimes(1);
    expect(notify2).toHaveBeenCalledTimes(1);
  });

  it("should not clean up cache until all subscribers unsubscribe", () => {
    const key = "multi-unsubscribe-key";
    const { store, mockUnsubscribe } = createStore(key);
    const cleanup1 = store.subscribe(vitest.fn());
    const store2 = getSuspenseExternalStore<MockPayload>(key, () => ({
      unsubscribe: vitest.fn(),
    }));
    const cleanup2 = store2.subscribe(vitest.fn());

    cleanup1();
    expect(mockUnsubscribe).not.toHaveBeenCalled();

    cleanup2();
    expect(mockUnsubscribe).toHaveBeenCalledTimes(1);
  });

  it("should return existing cache entry for same key", () => {
    const key = "shared-key";
    let callCount = 0;
    const factory = (observer: Observer<MockPayload | undefined>) => {
      callCount++;
      return { unsubscribe: vitest.fn() };
    };

    getSuspenseExternalStore<MockPayload>(key, factory);
    getSuspenseExternalStore<MockPayload>(key, factory);

    expect(callCount).toBe(1);
  });

  it("should skip suspension when peekResult is provided", () => {
    const peekData: MockPayload = {
      object: { id: "1" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: 100,
    };

    const store = getSuspenseExternalStore<MockPayload>(
      "peek-key",
      (observer) => {
        return { unsubscribe: vitest.fn() };
      },
      peekData,
    );

    expect(store.getSuspensePromise()).toBeUndefined();
    expect(store.getSnapShot()).toEqual(peekData);
  });

  it("should return peek data from getSnapShot before observation delivers", () => {
    const peekData: MockPayload = {
      object: { id: "peek" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: 50,
    };

    let capturedObs: Observer<MockPayload | undefined> | undefined;
    const store = getSuspenseExternalStore<MockPayload>(
      "peek-snapshot-key",
      (observer) => {
        capturedObs = observer;
        return { unsubscribe: vitest.fn() };
      },
      peekData,
    );

    // Before observation delivers, snapshot should be the peek data
    expect(store.getSnapShot()).toEqual(peekData);

    // After observation delivers, snapshot should update
    const fullData: MockPayload = {
      object: { id: "peek" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: 200,
    };
    capturedObs?.next(fullData);
    expect(store.getSnapShot()).toEqual(fullData);
  });

  it("should still suspend when peekResult is undefined", () => {
    const store = getSuspenseExternalStore<MockPayload>(
      "no-peek-key",
      (observer) => {
        return { unsubscribe: vitest.fn() };
      },
      undefined,
    );

    const promise = store.getSuspensePromise();
    expect(promise).toBeInstanceOf(Promise);
  });

  it("should start observation eagerly even with peekResult", () => {
    let observationStarted = false;

    getSuspenseExternalStore<MockPayload>(
      "eager-peek-key",
      (observer) => {
        observationStarted = true;
        return { unsubscribe: vitest.fn() };
      },
      {
        object: { id: "1" },
        status: "loaded",
        isOptimistic: false,
        lastUpdated: 100,
      },
    );

    expect(observationStarted).toBe(true);
  });

  it("should clean up orphaned entries that are never subscribed", () => {
    vitest.useFakeTimers({
      now: 0,
      toFake: [
        "setTimeout",
        "clearTimeout",
        "setInterval",
        "clearInterval",
        "Date",
      ],
    });
    try {
      const mockUnsubscribe = vitest.fn();
      getSuspenseExternalStore<MockPayload>(
        "orphan-key",
        (observer) => {
          return { unsubscribe: mockUnsubscribe };
        },
      );

      // First interval tick at 60s: age == 60s (not >), entry not cleaned
      vitest.advanceTimersByTime(61_000);
      expect(mockUnsubscribe).not.toHaveBeenCalled();

      // Second interval tick at 120s: age == 120s > 60s, entry cleaned
      vitest.advanceTimersByTime(60_000);

      expect(mockUnsubscribe).toHaveBeenCalledTimes(1);

      // Verify cache was purged: same key now creates a fresh observation
      let secondCallCount = 0;
      getSuspenseExternalStore<MockPayload>(
        "orphan-key",
        () => {
          secondCallCount++;
          return { unsubscribe: vitest.fn() };
        },
      );

      expect(secondCallCount).toBe(1);
    } finally {
      vitest.useRealTimers();
    }
  });

  it("should surface error via getError when peek data is present and observer errors", () => {
    const peekData: MockPayload = {
      object: { id: "1" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: 100,
    };

    let capturedObs: Observer<MockPayload | undefined> | undefined;
    const store = getSuspenseExternalStore<MockPayload>(
      "peek-error-key",
      (observer) => {
        capturedObs = observer;
        return { unsubscribe: vitest.fn() };
      },
      peekData,
    );

    expect(store.getSuspensePromise()).toBeUndefined();
    expect(store.getError()).toBeUndefined();

    capturedObs?.error(new Error("something broke"));

    expect(store.getError()?.message).toBe("something broke");
    expect(store.getSuspensePromise()).toBeUndefined();
    const snapshot = store.getSnapShot();
    expect(snapshot?.error).toBeInstanceOf(Error);
    expect(snapshot?.error?.message).toBe("something broke");
  });
});

describe("throwIfSuspenseNeeded", () => {
  it("should throw error when store has error", () => {
    const store = {
      getSuspensePromise: () => undefined,
      getError: () => new Error("test error"),
    };

    expect(() =>
      throwIfSuspenseNeeded(
        store,
        () => false,
        () => undefined,
      )
    ).toThrow("test error");
  });

  it("should throw promise when no data and promise is available", () => {
    const promise = new Promise<void>(() => {});
    const store = {
      getSuspensePromise: () => promise,
      getError: () => undefined,
    };

    try {
      throwIfSuspenseNeeded(
        store,
        () => false,
        () => undefined,
      );
      expect.fail("should have thrown");
    } catch (thrown) {
      expect(thrown).toBe(promise);
    }
  });

  it("should not throw when data is available", () => {
    const store = {
      getSuspensePromise: () => new Promise<void>(() => {}),
      getError: () => undefined,
    };
    const getSnapShot = () =>
      ({ object: { id: "1" } }) as Record<string, unknown> & {
        error?: Error;
      };

    expect(() =>
      throwIfSuspenseNeeded(
        store,
        (p) => p != null && typeof p === "object" && "object" in p,
        getSnapShot,
      )
    ).not.toThrow();
  });

  it("should not throw when no data and no promise", () => {
    const store = {
      getSuspensePromise: () => undefined,
      getError: () => undefined,
    };

    expect(() =>
      throwIfSuspenseNeeded(
        store,
        () => false,
        () => undefined,
      )
    ).not.toThrow();
  });

  it("should not re-suspend after error (hasErrored prevents new promise)", () => {
    const { store, observer } = (() => {
      let capturedObserver: Observer<MockPayload | undefined> | undefined;
      const s = getSuspenseExternalStore<MockPayload>(
        "error-test-key",
        (obs) => {
          capturedObserver = obs;
          return { unsubscribe: vitest.fn() };
        },
      );
      return {
        store: s,
        get observer() {
          if (capturedObserver === undefined) {
            throw new Error("Observer not captured");
          }
          return capturedObserver;
        },
      };
    })();

    observer.error(new Error("fetch failed"));

    // After error, getSuspensePromise should return undefined (hasErrored=true)
    // so the error gets thrown by getError instead of suspending
    expect(store.getSuspensePromise()).toBeUndefined();
    expect(store.getError()?.message).toBe("fetch failed");
  });
});
