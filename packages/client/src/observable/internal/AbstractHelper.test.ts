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
import { AbstractHelper } from "./AbstractHelper.js";

function flushMicrotasks(): Promise<void> {
  return new Promise(resolve => queueMicrotask(resolve));
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
