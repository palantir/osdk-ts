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
 * @internal
 * A simple async cache that can be used to store values for a given client.
 */

/** @internal */

/**
 * @internal
 * Create a new cache without a factory function.
 */

/**
 * @internal
 * Create a new cache with a factory function.
 * @param fn A factory function that will be used to create the value if it does not exist in the cache.
 */

export function createClientCache(fn) {
  const cache = new WeakMap();
  function set(client, key, value) {
    if (cache.get(client.clientCacheKey) == null) {
      cache.set(client.clientCacheKey, new Map());
    }
    cache.get(client.clientCacheKey).set(key, value);
    return value;
  }
  return {
    get: function (client, key) {
      if (cache.get(client.clientCacheKey) == null) {
        cache.set(client.clientCacheKey, new Map());
      }
      let r = cache.get(client.clientCacheKey).get(key);
      if (r === undefined && fn !== undefined) {
        return set(client, key, fn(client, key));
      } else {
        return r;
      }
    },
    set,
    remove: function (client, key) {
      if (cache.get(client.clientCacheKey) == null) return false;
      return cache.get(client.clientCacheKey).delete(key);
    }
  };
}

/** @internal */

/**
 * @internal
 * Create a new cache with an async factory function.
 * @param fn A factory function that will be used to create the value if it does not exist in the cache.
 * @returns
 */
export function createAsyncClientCache(fn, createCacheLocal = createClientCache) {
  const cache = createCacheLocal();
  const inProgress = createCacheLocal();
  const ret = {
    getOrUndefined: function (client, key) {
      return cache.get(client, key);
    },
    get: async function (client, key) {
      return cache.get(client, key) ?? inProgress.get(client, key) ?? ret.set(client, key, fn(client, key));
    },
    set: async function (client, k, v) {
      // the `.set` happens first to prevent races.
      try {
        const r = await inProgress.set(client, k, v); // returns v

        cache.set(client, k, r);
        inProgress.remove(client, k);
        return r;
      } catch (e) {
        // we don't want to cache failures
        inProgress.remove(client, k);
        throw e;
      }
    }
  };
  return ret;
}
//# sourceMappingURL=Cache.js.map