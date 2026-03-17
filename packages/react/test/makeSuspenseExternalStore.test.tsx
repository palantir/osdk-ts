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

  it("should create store with correct initial state", () => {
    const { store, observer } = createStore();
    expect(observer).toBeDefined();
    expect(store.getSnapShot()).toBeUndefined();
    const promise = store.getSuspensePromise();
    expect(promise).toBeInstanceOf(Promise);
    expect(store.getSuspensePromise()).toBe(promise);
  });

  it("should resolve promise on loaded or error", async () => {
    const { store: loadedStore, observer: loadedObs } = createStore(
      "loaded-key",
    );
    const loadedPromise = loadedStore.getSuspensePromise();

    loadedObs.next({
      object: { id: "1" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: Date.now(),
    });

    await expect(loadedPromise).resolves.toBeUndefined();
    expect(loadedStore.getSuspensePromise()).toBeUndefined();

    const { store: errorStore, observer: errorObs } = createStore("error-key");
    const errorPromise = errorStore.getSuspensePromise();

    errorObs.error(new Error("fetch failed"));

    await expect(errorPromise).resolves.toBeUndefined();
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
    const factory = (_observer: Observer<MockPayload | undefined>) => {
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

    let observationStarted = false;
    let capturedObs: Observer<MockPayload | undefined> | undefined;
    const store = getSuspenseExternalStore<MockPayload>(
      "peek-key",
      (observer) => {
        observationStarted = true;
        capturedObs = observer;
        return { unsubscribe: vitest.fn() };
      },
      peekData,
    );

    expect(store.getSuspensePromise()).toBeUndefined();
    expect(store.getSnapShot()).toEqual(peekData);
    expect(observationStarted).toBe(true);

    const fullData: MockPayload = {
      object: { id: "1" },
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
      (_observer) => {
        return { unsubscribe: vitest.fn() };
      },
      undefined,
    );

    const promise = store.getSuspensePromise();
    expect(promise).toBeInstanceOf(Promise);
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
        (_observer) => {
          return { unsubscribe: mockUnsubscribe };
        },
      );

      vitest.advanceTimersByTime(59_000);
      expect(mockUnsubscribe).not.toHaveBeenCalled();

      vitest.advanceTimersByTime(1_000);

      expect(mockUnsubscribe).toHaveBeenCalledTimes(1);

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

  it("should not re-suspend after error (hasErrored prevents new promise)", () => {
    let capturedObserver: Observer<MockPayload | undefined> | undefined;
    const store = getSuspenseExternalStore<MockPayload>(
      "error-test-key",
      (obs) => {
        capturedObserver = obs;
        return { unsubscribe: vitest.fn() };
      },
    );

    if (capturedObserver === undefined) {
      throw new Error("Observer not captured");
    }

    capturedObserver.error(new Error("fetch failed"));

    expect(store.getSuspensePromise()).toBeUndefined();
    expect(store.getError()?.message).toBe("fetch failed");
  });
});
