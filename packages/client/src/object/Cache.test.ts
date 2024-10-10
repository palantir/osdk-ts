/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import * as matchers from "jest-extended";
import type CustomMatchers from "jest-extended";
import type { DeferredPromise } from "p-defer";
import pDefer from "p-defer";
import type { PromiseState } from "p-state";
import { promiseStateAsync as pStateAsync } from "p-state";
import type { Mock, MockInstance } from "vitest";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import type { MinimalClient } from "../MinimalClientContext.js";
import type { AsyncClientCache, AsyncFactory } from "./Cache.js";
import { createAsyncClientCache, createClientCache } from "./Cache.js";

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining<T = any> extends CustomMatchers<T> {}
  interface ExpectStatic<T = any> extends CustomMatchers<T> {
    isPromiseLike: () => any;
  }
}

expect.extend(matchers);

function createSpys(cache: ReturnType<typeof createClientCache>) {
  return {
    get: vi.spyOn(cache, "get"),
    remove: vi.spyOn(cache, "remove"),
    set: vi.spyOn(cache, "set"),
  };
}

describe("AsyncCache", () => {
  beforeAll(() => {
  });
  const fauxClient = { clientCacheKey: {} } as MinimalClient;
  const fauxClient2 = { clientCacheKey: {} } as MinimalClient;

  it("keeps clients separate", async () => {
    const cache = createAsyncClientCache((client: MinimalClient, key: string) =>
      Promise.resolve(key)
    );
    await cache.set(fauxClient, "k", "v");
    expect(await cache.get(fauxClient2, "k")).toEqual("k");
  });

  it("has a client and its copy access the same cache", async () => {
    const cache = createAsyncClientCache((client: MinimalClient, key: string) =>
      Promise.resolve(key)
    );
    await cache.set(fauxClient, "k", "v");
    expect(await cache.get({ ...fauxClient }, "k")).toEqual("v");
  });

  it("does not double factory", async () => {
    const resolveToKey = (client: MinimalClient, key: string) =>
      new Promise<string>((resolve, reject) => {
        setTimeout(() => resolve(key), 100);
      });

    const mock = vi.fn(resolveToKey);
    const cache = createAsyncClientCache(mock);

    await Promise.all([
      cache.get(fauxClient, "a"),
      cache.get(fauxClient, "a"),
      cache.get(fauxClient, "a"),
      cache.get(fauxClient, "b"),
      cache.get(fauxClient, "b"),
      cache.get(fauxClient, "b"),
      cache.get(fauxClient, "b"),
    ]);

    expect(mock).toHaveBeenCalledTimes(2);
  });

  describe("race checks", () => {
    let factoryFn: Mock<AsyncFactory<any, any>>;
    let cache: ReturnType<typeof createSpys>;
    let inProgress: ReturnType<typeof createSpys>;
    let asyncCache: AsyncClientCache<string, string>;
    let asyncCacheSpies: {
      [K in keyof typeof asyncCache]: MockInstance<typeof asyncCache[K]>;
    };
    let asyncSetSpy: MockInstance<typeof asyncCache.set>;
    let factoryDefers: DeferredPromise<string>[];
    let getPromises: Promise<string>[];

    let expectedAsyncSets: number;
    let expectedFactoryCalls: number;

    let successfulFetches: Set<string>;
    let pendingFetches: Set<string>;
    let expectedPending: Record<string, number> = {};

    beforeEach(async () => {
      factoryFn = vi.fn();
      factoryFn.mockImplementation(() => {
        const defer = pDefer<string>();
        factoryDefers.push(defer);
        return defer.promise;
      });

      getPromises = [];
      factoryDefers = [];

      expectedAsyncSets = 0;
      expectedFactoryCalls = 0;

      successfulFetches = new Set();
      pendingFetches = new Set();
      expectedPending = {};

      const createSyncCacheMock = vi.fn();

      cache = createSpys(createClientCache() as any);
      inProgress = createSpys(createClientCache() as any);
      createSyncCacheMock.mockReturnValueOnce(cache);
      createSyncCacheMock.mockReturnValueOnce(inProgress);

      asyncCache = createAsyncClientCache<string, string>(
        factoryFn,
        createSyncCacheMock as any,
      );

      asyncSetSpy = vi.spyOn(asyncCache, "set");
      asyncCacheSpies = {
        get: vi.spyOn(asyncCache, "get"),
        set: vi.spyOn(asyncCache, "set"),
        getOrUndefined: vi.spyOn(asyncCache, "getOrUndefined"),
      };

      await expectSaneCalls();
    });

    function initiateAsyncCacheGetFor(key: string) {
      return async () => {
        if (!successfulFetches.has(key)) {
          expectedPending[key] = (expectedPending[key] ?? 0) + 1;
          if (!pendingFetches.has(key)) {
            pendingFetches.add(key);
            expectedFactoryCalls++;
            expectedAsyncSets++;
          }
        }

        // check before and after make sense so that `expectSaneCalls` can work
        const before = await getStats();
        getPromises.push(asyncCache.get(fauxClient, key));
        expect(await getStats()).toStrictEqual({
          ...before,
          asyncCacheGetCalls: before.asyncCacheGetCalls + 1,
          // may or may not bump the unique keys
        });

        await expectSaneCalls();
      };
    }

    function resolveFactoryCall(
      num: number,
      key: string,
      value = `${key}Result`,
    ) {
      return async () => {
        // <preconditions>
        expect(await pStateAsync(factoryDefers[num].promise)).toBe(
          "pending",
        );
        expect(factoryFn.mock.calls[num][1]).toBe(key);
        expect(pendingFetches).toContain(key);
        expect(successfulFetches).not.toContain(key);
        // </preconditions>

        // Update expectations
        pendingFetches.delete(value);
        successfulFetches.add(value);

        // check before and after make sense so that `expectSaneCalls` can work
        const before = await getStats();
        factoryDefers[num].resolve(value);
        expect(await getStats()).toStrictEqual({
          ...before,
          fulfilledFactoryCalls: before.fulfilledFactoryCalls + 1,
        });

        await expectSaneCalls();
      };
    }

    function rejectFactoryCall(
      num: number,
      key: string,
      error = `${key}Error`,
    ) {
      return async () => {
        expect(factoryFn.mock.calls[num][1]).toBe(key);
        expect(pendingFetches).toContain(key);

        pendingFetches.delete(key);
        factoryDefers[num].reject(new Error(error));

        // we need to ensure the outstanding get promises are rejected
        for (let i = 0; i < asyncCacheSpies.get.mock.calls.length; i++) {
          if (asyncCacheSpies.get.mock.calls[i][1] === key) {
            if (asyncCacheSpies.get.mock.results[i].type === "return") {
              expect(getPromises[i]).toReject();
            }
          }
        }

        await expectSaneCalls();
      };
    }

    async function getStats() {
      return {
        fulfilledFactoryCalls: (await Promise.all(
          factoryDefers.map(d => pStateAsync(d.promise)),
        )).filter(a => a === "fulfilled").length,
        rejectedFactoryCalls: (await Promise.all(
          factoryDefers.map(d => pStateAsync(d.promise)),
        )).filter(a => a === "rejected").length,
        asyncCacheGetCalls: asyncCacheSpies.get.mock.calls.length,
      };
    }

    async function expectSaneCalls() {
      const stats = await getStats();

      // both of these should be connected
      expect(factoryFn).toHaveBeenCalledTimes(expectedFactoryCalls);
      expect(inProgress.set).toHaveBeenCalledTimes(expectedFactoryCalls);

      expect(asyncSetSpy).toHaveBeenCalledTimes(expectedAsyncSets);

      // inProgress should be removed after a success or failure
      expect(inProgress.remove).toHaveBeenCalledTimes(
        stats.fulfilledFactoryCalls + stats.rejectedFactoryCalls,
      );

      // the inner cache gets checked once per async get
      expect(cache.get).toHaveBeenCalledTimes(stats.asyncCacheGetCalls);

      // the inner cache only gets set after a successful factory call
      expect(cache.set).toHaveBeenCalledTimes(successfulFetches.size);
    }

    function itRejectsAllRequestsOf(key: string) {
      it(`rejects all ${key} requests`, () => {
        for (
          let i = 0;
          i < asyncCacheSpies.get.mock.calls.length;
          i++
        ) {
          if (asyncCacheSpies.get.mock.calls[i][1] === key) {
            expect(asyncCacheSpies.get.mock.settledResults[i].type).toBe(
              "rejected",
            );
            expect(asyncCacheSpies.get.mock.settledResults[i].value)
              .toMatchObject(new Error("aError"));
          }
        }
      });
    }

    function itDoesNotRejectLastRequestRightAway() {
      it("does not reject right away", () => {
        expect(asyncCacheSpies.get.mock.results.at(-1)?.type).toBe(
          "return",
        );
      });
    }

    function describeRejectsFactoryCall(
      num: number,
      key: string,
      fn: () => void,
    ) {
      return describe(`rejects factory request ${num} for ${key}`, () => {
        beforeEach(rejectFactoryCall(num, key));
        itRejectsAllRequestsOf("a");

        fn();
      });
    }

    function describeResolvesFactoryCall(
      num: number,
      key: string,
      fn: () => void,
    ) {
      return describe(`resolves factory request ${num} for ${key}`, () => {
        beforeEach(resolveFactoryCall(num, key));
        fn();
      });
    }

    function describeAsyncCacheGetFor(key: string, fn: () => void) {
      return describe(`gets a request for '${key}'`, () => {
        beforeEach(initiateAsyncCacheGetFor(key));
        itDoesNotRejectLastRequestRightAway();

        fn();
      });
    }

    function itFulfillsAsyncCacheGets(indexes: number[], value: string) {
      it(`fulfills the AsyncCache.get()'s ${indexes.join(", ")} with '${value}'`, async () => {
        for (const i of indexes) {
          expect(await pStateAsync(getPromises[i])).toBe("fulfilled");
          expect(await getPromises[i]).toBe(value);
        }
      });
    }

    function itLeavesAsyncGetPromisesInStates(states: PromiseState[]) {
      it(`leaves the AsyncCache.get()'s in states [${states.join(", ")}]`, async () => {
        expect(await Promise.all(getPromises.map(p => pStateAsync(p))))
          .toStrictEqual(states);
        for (let i = 0; i < states.length; i++) {
          expect(await pStateAsync(getPromises[i])).toBe(states[i]);
        }
      });
    }

    function itHasOnlyInvokedFactoryNTimes(n: number) {
      it(`has only invoked the factory ${n} times`, () => {
        expect(factoryFn).toHaveBeenCalledTimes(n);
      });
    }

    function itReturnsForAsyncGet(results: any[]) {
      it("returns for async get", () => {
        expect(asyncCacheSpies.get.mock.settledResults.map(a => a.value))
          .toEqual(results);
      });
    }

    it("has a minimal base state", () => {
      expect(cache.get).not.toHaveBeenCalled();
      expect(inProgress.get).not.toHaveBeenCalled();
      expect(factoryFn).not.toHaveBeenCalled();
      expect(inProgress.set).not.toHaveBeenCalled();
    });

    describeAsyncCacheGetFor("a", () => {
      itLeavesAsyncGetPromisesInStates(["pending"]);
      itHasOnlyInvokedFactoryNTimes(1);

      describeAsyncCacheGetFor("a", () => {
        itLeavesAsyncGetPromisesInStates(["pending", "pending"]);
        itHasOnlyInvokedFactoryNTimes(1);

        describe("before the first resolves", () => {
          itLeavesAsyncGetPromisesInStates(["pending", "pending"]);
          itHasOnlyInvokedFactoryNTimes(1);

          describeRejectsFactoryCall(0, "a", () => {
            itLeavesAsyncGetPromisesInStates(["rejected", "rejected"]);
            describeAsyncCacheGetFor("a", () => {
              itDoesNotRejectLastRequestRightAway();
              itHasOnlyInvokedFactoryNTimes(2);
            });
          });

          describeAsyncCacheGetFor("b", () => {
            itLeavesAsyncGetPromisesInStates(["pending", "pending", "pending"]);
            itHasOnlyInvokedFactoryNTimes(2);

            describeResolvesFactoryCall(1, "b", () => {
              itLeavesAsyncGetPromisesInStates([
                "pending",
                "pending",
                "fulfilled",
              ]);

              itReturnsForAsyncGet([
                undefined,
                undefined,
                "bResult",
              ]);
            });
          });

          describeResolvesFactoryCall(0, "a", () => {
            itFulfillsAsyncCacheGets([0, 1], "aResult");
            itLeavesAsyncGetPromisesInStates([
              "fulfilled",
              "fulfilled",
            ]);

            describeAsyncCacheGetFor("a", () => {
              itHasOnlyInvokedFactoryNTimes(1);
              itLeavesAsyncGetPromisesInStates([
                "fulfilled",
                "fulfilled",
                "fulfilled",
              ]);
              itReturnsForAsyncGet([
                "aResult",
                "aResult",
                "aResult",
              ]);
            });
          });
        });
      });
    });
  });
});
