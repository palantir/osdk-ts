/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { Subscription } from "rxjs";
import { describe, expect, it, vi } from "vitest";

import type {
  CommonObserveOptions,
  Observer,
} from "../ObservableClient/common.js";
import { AbstractHelper } from "./AbstractHelper.js";
import type { KnownCacheKey } from "./KnownCacheKey.js";
import type { Query } from "./Query.js";
import type { Store } from "./Store.js";

function flushMicrotasks(): Promise<void> {
  return new Promise((resolve) => queueMicrotask(resolve));
}

describe("AbstractHelper pending cleanup", () => {
  it("coalesces unsubscribe→resubscribe within the same tick", async () => {
    const cacheKey = { type: "object", otherKeys: ["Foo", 1] } as any;

    const retain = vi.fn();
    const release = vi.fn();
    const store = {
      cacheKeys: { retain, release },
      pendingCleanup: new Map<any, number>(),
      logger: undefined,
    } as any;

    const query = {
      cacheKey,
      subscribe: () => new Subscription(),
      registerSubscriptionDedupeInterval: () => {},
      unregisterSubscriptionDedupeInterval: () => {},
    } as any;

    const helper = new (class extends AbstractHelper<any, any> {
      getQuery(): any {
        return query;
      }
    })(store, store.cacheKeys);

    const observer = { next: () => {}, error: () => {}, complete: () => {} };

    const sub1 = helper.observe({ mode: "offline" }, observer);
    expect(retain).toHaveBeenCalledTimes(1);

    sub1.unsubscribe();
    const sub2 = helper.observe({ mode: "offline" }, observer);
    expect(retain).toHaveBeenCalledTimes(1);

    await flushMicrotasks();
    expect(release).toHaveBeenCalledTimes(0);

    sub2.unsubscribe();
    await flushMicrotasks();
    expect(release).toHaveBeenCalledTimes(1);
    expect(store.pendingCleanup.size).toBe(0);
  });

  it("releases once per unsubscribe when multiple occur in the same tick", async () => {
    const cacheKey = { type: "object", otherKeys: ["Foo", 1] } as any;

    const retain = vi.fn();
    const release = vi.fn();
    const store = {
      cacheKeys: { retain, release },
      pendingCleanup: new Map<any, number>(),
      logger: undefined,
    } as any;

    const query = {
      cacheKey,
      subscribe: () => new Subscription(),
      registerSubscriptionDedupeInterval: () => {},
      unregisterSubscriptionDedupeInterval: () => {},
    } as any;

    const helper = new (class extends AbstractHelper<any, any> {
      getQuery(): any {
        return query;
      }
    })(store, store.cacheKeys);

    const observer = { next: () => {}, error: () => {}, complete: () => {} };

    const sub1 = helper.observe({ mode: "offline" }, observer);
    const sub2 = helper.observe({ mode: "offline" }, observer);
    expect(retain).toHaveBeenCalledTimes(2);

    sub1.unsubscribe();
    sub2.unsubscribe();
    await flushMicrotasks();

    expect(release).toHaveBeenCalledTimes(2);
    expect(store.pendingCleanup.size).toBe(0);
  });
});

describe("AbstractHelper revalidate error handling (#3989)", () => {
  it("does not log unhandled error when subscriber handles the error", async () => {
    const cacheKey = {
      type: "object",
      otherKeys: ["Foo", 1],
    } as unknown as KnownCacheKey;
    const testError = new Error("Object not found");

    const loggerError = vi.fn();
    const store = {
      cacheKeys: { retain: vi.fn(), release: vi.fn() },
      pendingCleanup: new Map<KnownCacheKey, number>(),
      logger: { error: loggerError },
    } as unknown as Store;

    const query = {
      cacheKey,
      revalidate: vi.fn().mockRejectedValue(testError),
      subscribe: () => new Subscription(),
      registerSubscriptionDedupeInterval: () => {},
      unregisterSubscriptionDedupeInterval: () => {},
    } as unknown as Query<KnownCacheKey, unknown, CommonObserveOptions>;

    const helper = new (class extends AbstractHelper<
      Query<KnownCacheKey, unknown, CommonObserveOptions>,
      CommonObserveOptions
    > {
      getQuery(): Query<KnownCacheKey, unknown, CommonObserveOptions> {
        return query;
      }
    })(store, store.cacheKeys);

    const observer = {
      next: vi.fn(),
      error: vi.fn(),
      complete: vi.fn(),
    };

    helper.observe({ mode: "force" }, observer);
    await flushMicrotasks();

    expect(observer.error).toHaveBeenCalledTimes(1);
    expect(observer.error).toHaveBeenCalledWith(testError);
    expect(loggerError).not.toHaveBeenCalled();
  });

  it("logs unhandled error when subscriber does not provide an error handler", async () => {
    const cacheKey = {
      type: "object",
      otherKeys: ["Foo", 1],
    } as unknown as KnownCacheKey;
    const testError = new Error("Network error");

    const loggerError = vi.fn();
    const store = {
      cacheKeys: { retain: vi.fn(), release: vi.fn() },
      pendingCleanup: new Map<KnownCacheKey, number>(),
      logger: { error: loggerError },
    } as unknown as Store;

    const query = {
      cacheKey,
      revalidate: vi.fn().mockRejectedValue(testError),
      subscribe: () => new Subscription(),
      registerSubscriptionDedupeInterval: () => {},
      unregisterSubscriptionDedupeInterval: () => {},
    } as unknown as Query<KnownCacheKey, unknown, CommonObserveOptions>;

    const helper = new (class extends AbstractHelper<
      Query<KnownCacheKey, unknown, CommonObserveOptions>,
      CommonObserveOptions
    > {
      getQuery(): Query<KnownCacheKey, unknown, CommonObserveOptions> {
        return query;
      }
    })(store, store.cacheKeys);

    const observer = {
      next: vi.fn(),
    };

    helper.observe({ mode: "force" }, observer as unknown as Observer<unknown>);
    await flushMicrotasks();

    expect(loggerError).toHaveBeenCalledTimes(1);
    expect(loggerError).toHaveBeenCalledWith(
      "Unhandled error in observeObject",
      testError,
    );
  });

  it("logs unhandled error when subscriber error handler itself throws", async () => {
    const cacheKey = {
      type: "object",
      otherKeys: ["Foo", 1],
    } as unknown as KnownCacheKey;
    const testError = new Error("Original error");
    const thrownError = new Error(
      "Error thrown from subscriber error callback",
    );

    const loggerError = vi.fn();
    const store = {
      cacheKeys: { retain: vi.fn(), release: vi.fn() },
      pendingCleanup: new Map<KnownCacheKey, number>(),
      logger: { error: loggerError },
    } as unknown as Store;

    const query = {
      cacheKey,
      revalidate: vi.fn().mockRejectedValue(testError),
      subscribe: () => new Subscription(),
      registerSubscriptionDedupeInterval: () => {},
      unregisterSubscriptionDedupeInterval: () => {},
    } as unknown as Query<KnownCacheKey, unknown, CommonObserveOptions>;

    const helper = new (class extends AbstractHelper<
      Query<KnownCacheKey, unknown, CommonObserveOptions>,
      CommonObserveOptions
    > {
      getQuery(): Query<KnownCacheKey, unknown, CommonObserveOptions> {
        return query;
      }
    })(store, store.cacheKeys);

    const observer = {
      next: vi.fn(),
      error: vi.fn().mockImplementation(() => {
        throw thrownError;
      }),
      complete: vi.fn(),
    };

    helper.observe({ mode: "force" }, observer);
    await flushMicrotasks();

    expect(observer.error).toHaveBeenCalledTimes(1);
    expect(loggerError).toHaveBeenCalledTimes(1);
    expect(loggerError).toHaveBeenCalledWith(
      "Unhandled error in observeObject",
      thrownError,
    );
  });
});
