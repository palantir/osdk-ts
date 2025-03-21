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

/**
 * A simple cache that can be used to store values for a given client.
 */

/**
 * Create a new cache with a factory function.
 * @param fn A factory function that will be used to create the value if it does not exist in the cache.
 */

/**
 * Create a new cache without a factory function.
 */

export function createSimpleCache(map = new Map(), fn) {
  function set(key, value) {
    map.set(key, value);
    return value;
  }
  return {
    get: function (key) {
      let r = map.get(key);
      if (r === undefined && fn !== undefined) {
        return set(key, fn(key));
      } else {
        return r;
      }
    },
    set,
    remove: function (key) {
      return map.delete(key);
    }
  };
}
/**
 * A simple async cache that can be used to store values for a given client.
 */

/**
 * Create a new cache with an async factory function.
 * @param fn A factory function that will be used to create the value if it does not exist in the cache.
 * @returns
 */

export function createSimpleAsyncCache(type, fn, createCacheLocal = createSimpleCache) {
  const cache = createCacheLocal(type === "weak" ? new WeakMap() : new Map());
  const inProgress = createCacheLocal(type === "weak" ? new WeakMap() : new Map());
  const ret = {
    getOrUndefined: function (key) {
      return cache.get(key);
    },
    get: async function (key) {
      return cache.get(key) ?? inProgress.get(key) ?? ret.set(key, fn(key));
    },
    set: async function (k, v) {
      // the `.set` happens first to prevent races.
      try {
        const r = await inProgress.set(k, v); // returns v

        cache.set(k, r);
        inProgress.remove(k);
        return r;
      } catch (e) {
        // we don't want to cache failures
        inProgress.remove(k);
        throw e;
      }
    }
  };
  return ret;
}
//# sourceMappingURL=SimpleCache.js.map