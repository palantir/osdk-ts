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

import { Trie } from "@wry/trie";
import invariant from "tiny-invariant";
import { DEBUG_CACHE_KEYS } from "../DebugFlags.js";
export class CacheKeys {
  #cacheKeys = new Trie(false, keys => {
    const ret = {
      type: keys[0],
      otherKeys: keys.slice(1)
    };
    this.#onCreate(ret);
    return ret;
  });
  #cacheKeyFactories = new Map();
  #onCreate;
  constructor(whereCanonicalizer, orderByCanonicalizer, onCreate) {
    this.#onCreate = onCreate;
    this.#registerCacheKeyFactory("object", (apiName, pk) => {
      if (process.env.NODE_ENV !== "production" && DEBUG_CACHE_KEYS) {
        // eslint-disable-next-line no-console
        console.debug(`CacheKeys.get([object, ${apiName}, ${pk}]) -- already exists? `, this.#cacheKeys.peekArray(["object", apiName, pk]) != null);
      }
      return this.#cacheKeys.lookupArray(["object", apiName, pk]);
    });
    this.#registerCacheKeyFactory("list", (type, apiName, where, orderBy) => {
      if (process.env.NODE_ENV !== "production" && DEBUG_CACHE_KEYS) {
        // eslint-disable-next-line no-console
        console.debug(`CacheKeys.get([list, ${apiName}, ${JSON.stringify(where)}, ${JSON.stringify(orderBy)}]) -- already exists? `, this.#cacheKeys.peekArray(["list", apiName, whereCanonicalizer.canonicalize(where), orderByCanonicalizer.canonicalize(orderBy)]) != null);
      }
      return this.#cacheKeys.lookupArray(["list", type, apiName, whereCanonicalizer.canonicalize(where), orderByCanonicalizer.canonicalize(orderBy)]);
    });
  }
  #registerCacheKeyFactory(type, factory) {
    this.#cacheKeyFactories.set(type, factory);
  }
  get(type, ...args) {
    const factory = this.#cacheKeyFactories.get(type);
    !factory ? process.env.NODE_ENV !== "production" ? invariant(false, `no cache key factory for type "${type}"`) : invariant(false) : void 0;
    return factory(...args);
  }
  remove(cacheKey) {
    this.#cacheKeys.remove(cacheKey.type, ...cacheKey.otherKeys);
  }
}
//# sourceMappingURL=CacheKeys.js.map