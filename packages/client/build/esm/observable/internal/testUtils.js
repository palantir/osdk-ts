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

import { Chalk } from "chalk";
import pDefer from "p-defer";
import invariant from "tiny-invariant";
import { afterEach, beforeEach, expect, vi, vitest } from "vitest";
import { additionalContext } from "../../Client.js";
import { storeOsdkInstances } from "./ObjectQuery.js";
const chalk = new Chalk(); // new Chalk({ level: 3 });

function mockLog(...args) {
  // eslint-disable-next-line no-console
  console.log(chalk.yellow("mockClient"), ...args);
}
// interface LogFn {
//   (obj: unknown, msg?: string, ...args: any[]): void;
//   (msg: string, ...args: any[]): void;
// }

export function createTestLogger(bindings, options) {
  const colors = {
    debug: [chalk.cyan, chalk.bgCyan],
    info: [chalk.green, chalk.bgGreen],
    trace: [chalk.gray, chalk.bgGray],
    error: [chalk.red, chalk.bgRed],
    warn: [chalk.yellow, chalk.bgYellow],
    fatal: [chalk.redBright, chalk.bgRedBright]
  };
  function createLogMethod(name) {
    return vi.fn((...args) => {
      const hasData = args.length > 0 && typeof args[0] !== "string";
      const obj = hasData ? args[0] : {};
      const more = hasData ? args.slice(1) : args.slice(0);

      // eslint-disable-next-line no-console
      console.log(`${colors[name][1](name)}${options?.msgPrefix ? " " + colors[name][0](options.msgPrefix) : ""}${obj?.methodName ? ` .${chalk.magenta(obj.methodName)}()` : ""}`, ...more);
      if (bindings && Object.keys(bindings).length > 0) {
        // eslint-disable-next-line no-console
        console.log(bindings);
      }
    });
  }
  return {
    debug: createLogMethod("debug"),
    error: createLogMethod("error"),
    info: createLogMethod("info"),
    warn: createLogMethod("warn"),
    fatal: createLogMethod("fatal"),
    child: vi.fn((theseBindings, theseOptions) => createTestLogger({
      ...bindings,
      ...theseBindings
    }, {
      level: (theseOptions ?? options)?.level,
      msgPrefix: options?.msgPrefix || theseOptions?.msgPrefix ? `${options?.msgPrefix ? `${options.msgPrefix} ` : ""}${theseOptions?.msgPrefix || ""}` : undefined
    })),
    trace: createLogMethod("trace"),
    isLevelEnabled: vi.fn(() => true)
  };
}
export function createClientMockHelper() {
  const client = vitest.fn();
  const logger = createTestLogger({});

  // this is just a fallback for when there is nothing set so we can track whats up
  client.mockImplementation((...args) => {
    const localLogger = logger.child({}, {
      msgPrefix: "fallback mock client"
    });
    try {
      throw new Error("IN THE FALLBACK MOCK CLIENT IMPLEMENTATION");
    } catch (e) {
      localLogger.error("Just for the stack trace", e);
    }
    let where;
    const deadObjectSet = {
      where: (...whereArgs) => {
        localLogger.trace("where", whereArgs);
        where = whereArgs;
        return deadObjectSet;
      },
      fetchPage: (...fetchArgs) => {
        localLogger.trace("fetchPage", where, fetchArgs);
        throw new Error("NO");
      },
      fetchOne: (...fetchArgs) => {
        localLogger.trace("fetchOne", fetchArgs);
        throw new Error("NO");
      }
    };
    return deadObjectSet;
  });
  client[additionalContext] = {
    baseUrl: "http://localhost:8080",
    ontologyRid: "ri.something",
    objectFactory: vitest.fn(),
    objectFactory2: vitest.fn(),
    ontologyProvider: {
      getActionDefinition: vitest.fn(),
      getInterfaceDefinition: vitest.fn(),
      getObjectDefinition: vitest.fn(),
      getQueryDefinition: vitest.fn()
    },
    tokenProvider: vitest.fn(),
    objectSetFactory: vitest.fn(),
    fetch: vitest.fn(),
    clientCacheKey: {},
    requestContext: {},
    logger
  };
  client.fetchMetadata = vitest.fn();
  return {
    client,
    mockApplyActionOnce: function () {
      const d = pDefer();
      client.mockReturnValueOnce({
        applyAction: async () => {
          const x = await d.promise;
          return {
            type: "edits",
            addedLinks: x.addedLinks ?? [],
            addedObjects: x.addedObjects ?? [],
            deletedObjects: x.deletedObjects ?? [],
            deletedLinks: x.deletedLinks ?? [],
            deletedLinksCount: x.deletedLinksCount ?? 0,
            deletedObjectsCount: x.deletedObjectsCount ?? 0,
            editedObjectTypes: x.editedObjectTypes ?? [],
            modifiedObjects: x.modifiedObjects ?? []
          };
        }
      });
      return d;
    },
    mockFetchOneOnce: function (expectedId) {
      const d = pDefer();
      client.mockReturnValueOnce({
        fetchOne: async a => {
          mockLog("fetchOne", a);
          !(expectedId === undefined || a === expectedId) ? process.env.NODE_ENV !== "production" ? invariant(false, "expected id to match") : invariant(false) : void 0;
          const r = await d.promise;
          !(r.$primaryKey === a) ? process.env.NODE_ENV !== "production" ? invariant(false, `expected id to match. Got ${a} but object to return was ${r.$primaryKey}`) : invariant(false) : void 0;
          return r;
        }
      });
      return d;
    },
    mockObjectFactory2Once: function () {
      const d = pDefer();
      vi.mocked(client[additionalContext].objectFactory2).mockReturnValueOnce(d.promise);
      return d;
    },
    mockFetchPageOnce: function () {
      const d = pDefer();
      const objectSet = {
        fetchPage: async fetchPageArgs => {
          mockLog("fetchPage", fetchPageArgs);
          const r = await d.promise;
          return {
            ...r,
            $primaryKey: fetchPageArgs
          };
        },
        where: clause => {
          mockLog("where", clause);
          return objectSet;
        }
      };
      client.mockReturnValueOnce(objectSet);
      return d;
    }
  };
}
export function createDefer() {
  let subscriptions;
  beforeEach(() => {
    subscriptions = [];
  });
  afterEach(() => {
    for (const s of subscriptions) {
      s.unsubscribe();
    }
    subscriptions = [];
  });
  return function (x) {
    subscriptions.push(x);
    return x;
  };
}
export function expectSingleListCallAndClear(subFn, resolvedList, payloadOptions = {}) {
  if (vitest.isFakeTimers()) {
    vitest.runOnlyPendingTimers();
  }
  expect(subFn.next).toHaveBeenCalledExactlyOnceWith(listPayloadContaining({
    ...payloadOptions,
    resolvedList: resolvedList
  }));
  subFn.next.mockClear();
}
export function expectSingleObjectCallAndClear(subFn, object, status) {
  expect(subFn.next).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({
    object,
    status: status ?? expect.any(String)
  }));
  subFn.next.mockClear();
}
export async function waitForCall(subFn, times = 1) {
  if ("next" in subFn && "error" in subFn && "complete" in subFn) {
    subFn = subFn.next;
  }
  try {
    await vi.waitFor(() => {
      expect(subFn).toHaveBeenCalledTimes(times);
    });
  } catch (e) {
    // we don't need the error, it will retrigger on the next line
    // and that provides better behavior in the vitest vscode
    // plugin. This places the error in the test itself instead of
    // only in this file
  }
  expect(subFn).toHaveBeenCalledTimes(times);
}
export function expectNoMoreCalls(observer) {
  expect(observer.next).not.toHaveBeenCalled();
  expect(observer.error).not.toHaveBeenCalled();
}
function createSubscriptionHelper() {}
export function mockSingleSubCallback() {
  const ret = mockObserver();

  //   async function expectLoaded(value: unknown) {
  //     await waitForCall(ret);
  //     // as long as we get the loaded call we are happy
  //     expect(ret).toHaveBeenLastCalledWith(
  //       cacheEntryContaining({
  //         value,
  //         status: "loaded",
  //       }),
  //     );
  //     ret.mockClear();
  //   }

  //   async function expectLoading(value: unknown) {
  //     await waitForCall(ret);
  //     // as long as we get the loaded call we are happy
  //     expect(ret).toHaveBeenCalledExactlyOnceWith(
  //       cacheEntryContaining({
  //         value,
  //         status: "loading",
  //       }),
  //     );
  //     ret.mockClear();
  //   }

  return Object.assign(ret, {
    // expectLoaded,
    // expectLoading,
    expectLoadingAndLoaded: async q => {
      await waitForCall(ret.next, 2);

      // as long as we get the loaded call we are happy
      expect(ret.next).toHaveBeenNthCalledWith(1, q.loading);
      expect(ret.next).toHaveBeenNthCalledWith(2, q.loaded);
      expect(ret.next).toHaveBeenCalledTimes(2);
      ret.next.mockClear();
    }
  });
}
export function mockObserver() {
  return {
    next: vitest.fn(),
    // error: vitest.fn((x) => console.error(x)),
    error: vitest.fn(),
    complete: vitest.fn()
  };
}
export function mockListSubCallback() {
  return mockObserver();
}
export function cacheEntryContaining(x) {
  return {
    cacheKey: x.cacheKey ?? expect.any(Object),
    value: "value" in x ? x.value : expect.toBeOneOf([expect.anything(), undefined]),
    status: x.status ?? expect.anything(),
    lastUpdated: x.lastUpdated ?? expect.anything()
  };
}
function nonOptionalValue(src, key) {
  return key in src ? src[key] : expect.toBeOneOf([expect.anything(), undefined]);
}
export function objectPayloadContaining(x) {
  return {
    object: nonOptionalValue(x, "object"),
    isOptimistic: expect.any(Boolean),
    status: x.status ?? expect.anything(),
    lastUpdated: x.lastUpdated ?? expect.anything()
  };
}
export function listPayloadContaining(x) {
  return {
    fetchMore: x.fetchMore ?? expect.any(Function),
    hasMore: x.hasMore ?? expect.any(Boolean),
    resolvedList: x.resolvedList ?? expect.anything(),
    isOptimistic: expect.any(Boolean),
    status: x.status ?? expect.anything(),
    lastUpdated: x.lastUpdated ?? expect.anything()
  };
}
export function applyCustomMatchers() {
  expect.extend({
    toBeGreaterThan: (r, e) => {
      return {
        pass: r > e,
        message: () => `expected ${r} to be greater than ${e} (lastUpdated)`
      };
    }
  });
}
/**
 * Updates the internal state of a list and will create a new internal query if needed.
 *
 * Helper method only for tests right now. May be removed later.
 *
 * @param apiName
 * @param where
 * @param orderBy
 * @param objects
 * @param param4
 * @param opts
 */
export function updateList(store, {
  type,
  where,
  orderBy
}, objects, {
  optimisticId
} = {}, opts = {
  dedupeInterval: 0
}) {
  if (process.env.NODE_ENV !== "production") {
    store.logger?.child({
      methodName: "updateList"
    }).info("", {
      optimisticId
    });
  }
  const query = store.getListQuery(type, where ?? {}, orderBy ?? {}, opts);
  store.batch({
    optimisticId
  }, batch => {
    const objectCacheKeys = storeOsdkInstances(store, objects, batch);
    query._updateList(objectCacheKeys, false, "loaded", batch);
  });
}
export function getObject(store, type, pk) {
  return store.getValue(store.getCacheKey("object", type, pk))?.value;
}
export function updateObject(store, value, {
  optimisticId
} = {}) {
  const query = store.getObjectQuery(value.$apiName, value.$primaryKey);
  store.batch({
    optimisticId
  }, batch => {
    return query.writeToStore(value, "loaded", batch);
  });
  return value;
}
//# sourceMappingURL=testUtils.js.map