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
      (p) => p?.object != null,
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

  it("should suspend until data arrives, then resolve", async () => {
    const { store, observer } = createStore();

    expect(store.getSnapShot()).toBeUndefined();
    const promise = store.getSuspensePromise();
    expect(promise).toBeInstanceOf(Promise);
    expect(store.getSuspensePromise()).toBe(promise);

    const payload: MockPayload = {
      object: { id: "1" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: Date.now(),
    };
    observer.next(payload);

    await expect(promise).resolves.toBeUndefined();
    expect(store.getSuspensePromise()).toBeUndefined();
    expect(store.getSnapShot()).toEqual(payload);
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

  it("should skip suspension when peekResult is provided", () => {
    const peekData: MockPayload = {
      object: { id: "1" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: 100,
    };

    let capturedObs: Observer<MockPayload | undefined> | undefined;
    const store = getSuspenseExternalStore<MockPayload>(
      "peek-key",
      (observer) => {
        capturedObs = observer;
        return { unsubscribe: vitest.fn() };
      },
      (p) => p?.object != null,
      peekData,
    );

    expect(store.getSuspensePromise()).toBeUndefined();
    expect(store.getSnapShot()).toEqual(peekData);

    const fullData: MockPayload = {
      object: { id: "1" },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: 200,
    };
    capturedObs?.next(fullData);
    expect(store.getSnapShot()).toEqual(fullData);
  });
});
