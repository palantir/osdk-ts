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

import { describe, expect, it } from "vitest";
import { CacheKeys } from "../CacheKeys.js";
import type { ObjectCacheKey } from "./ObjectCacheKey.js";

describe("ObjectCacheKey", () => {
  it("partitions by includeAllBaseObjectProperties", () => {
    const cacheKeys = new CacheKeys<ObjectCacheKey>({});

    const keyWithoutFlag = cacheKeys.get<ObjectCacheKey>(
      "object",
      "Employee",
      1,
      undefined,
    );
    const keyWithFlag = cacheKeys.get<ObjectCacheKey>(
      "object",
      "Employee",
      1,
      undefined,
      true,
    );

    expect(keyWithoutFlag).not.toBe(keyWithFlag);
  });

  // Guards the `flag ? true : undefined` normalization idiom that callers in
  // ListsHelper, LinksHelper, ObjectsHelper, and BaseListQuery rely on. If a
  // future refactor passes the boolean directly, `false` would form a different
  // cache key from omitted/undefined and silently fragment the cache.
  it("treats omitted and undefined includeAllBaseObjectProperties as the same key", () => {
    const cacheKeys = new CacheKeys<ObjectCacheKey>({});

    const keyOmitted = cacheKeys.get<ObjectCacheKey>(
      "object",
      "Employee",
      1,
      undefined,
    );
    const keyExplicitUndefined = cacheKeys.get<ObjectCacheKey>(
      "object",
      "Employee",
      1,
      undefined,
      undefined,
    );

    expect(keyOmitted).toBe(keyExplicitUndefined);
  });
});
