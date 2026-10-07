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

import { CacheKeys } from "./CacheKeys.js";
import type { ObjectCacheKey } from "./object/ObjectCacheKey.js";

describe("CacheKeys lifecycle", () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ["Date", "setInterval", "clearInterval"] });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it("keeps a retained key and expires it after its release timeout", () => {
    const cacheKeys = new CacheKeys<ObjectCacheKey>({});
    const key = cacheKeys.get("object", "Employee", 1);
    cacheKeys.retain(key);

    vi.advanceTimersByTime(61_000);
    expect(cacheKeys.peek("object", "Employee", 1)).toBe(key);

    cacheKeys.release(key);
    vi.advanceTimersByTime(60_000);
    expect(cacheKeys.peek("object", "Employee", 1)).toBe(key);

    vi.advanceTimersByTime(1_000);
    expect(cacheKeys.peek("object", "Employee", 1)).toBeUndefined();
    expect(cacheKeys.get("object", "Employee", 1)).not.toBe(key);
  });

  it("stops the recurring timer after its owner is unavailable", () => {
    const collectOwners: Array<() => void> = [];
    vi.stubGlobal(
      "WeakRef",
      class<T extends WeakKey> {
        private target: T | undefined;

        constructor(target: T) {
          this.target = target;
          collectOwners.push(() => {
            this.target = undefined;
          });
        }

        deref(): T | undefined {
          return this.target;
        }
      },
    );
    const cacheKeys = new CacheKeys<ObjectCacheKey>({});
    cacheKeys.get("object", "Employee", 1);
    expect(vi.getTimerCount()).toBe(1);

    for (const collect of collectOwners) {
      collect();
    }
    vi.advanceTimersByTime(1_000);

    expect(vi.getTimerCount()).toBe(0);
  });

  it("keeps the debug finalization message after a key expires", () => {
    const finalizations: Array<() => void> = [];
    vi.stubGlobal(
      "FinalizationRegistry",
      class<T> {
        constructor(private readonly cleanup: (heldValue: T) => void) {}

        register(_target: WeakKey, heldValue: T): void {
          finalizations.push(() => this.cleanup(heldValue));
        }
      },
    );
    const log = vi.spyOn(console, "log").mockImplementation(() => {});
    const cacheKeys = new CacheKeys<ObjectCacheKey>({
      debug: { refCounts: true },
    });
    cacheKeys.get("object", "Employee", 1);
    vi.advanceTimersByTime(16_000);
    expect(cacheKeys.peek("object", "Employee", 1)).toBeUndefined();

    for (const finalize of finalizations) {
      finalize();
    }

    expect(log).toHaveBeenCalledWith(
      'CacheKey Finalization(object, ["Employee",1])',
    );
  });
});
