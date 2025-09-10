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

import type { KnownCacheKey } from "./KnownCacheKey.js";
import type { Query } from "./Query.js";

export class Queries {
  // we can use a regular Map here because the refCounting will
  // handle cleanup.
  map: Map<
    KnownCacheKey,
    Query<any, any, any>
  > = new Map();

  peek<K extends KnownCacheKey>(
    cacheKey: K,
  ): K["__cacheKey"]["query"] | undefined {
    return this.map.get(cacheKey) as K["__cacheKey"]["query"] | undefined;
  }

  get<K extends KnownCacheKey>(
    cacheKey: K,
    createQuery: () => K["__cacheKey"]["query"],
  ): K["__cacheKey"]["query"] {
    let query = this.peek(cacheKey);
    if (!query) {
      query = createQuery();
      this.map.set(cacheKey, query);
    }
    return query;
  }

  keys(): IteratorObject<KnownCacheKey, BuiltinIteratorReturn, unknown> {
    return this.map.keys();
  }

  delete<K extends KnownCacheKey>(cacheKey: K): void {
    this.map.get(cacheKey)?.dispose();
    this.map.delete(cacheKey);
  }
}
