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

import type { ClientCacheKey, MinimalClient } from "../MinimalClientContext.js";

/**
 * A simple cache that can be used to store values for a given client.
 */
interface ClientCache<K, V> {
  get: (client: MinimalClient, key: K) => V;
  set: <X extends V>(client: MinimalClient, key: K, value: X) => X;
  remove: (client: MinimalClient, key: K) => boolean;
}

/**
 * @internal
 * A simple async cache that can be used to store values for a given client.
 */
export interface AsyncClientCache<K, V> {
  getOrUndefined: (client: MinimalClient, key: K) => V | undefined;

  get: (client: MinimalClient, key: K) => Promise<V>;

  /**
   * @param client the client to key from
   * @param key the sub-key to use
   * @param value the value or a promise to the value
   * @returns a new promise to the resolved value
   */
  set: (
    client: MinimalClient,
    key: K,
    value: V | Promise<V>,
  ) => Promise<V>;
}

/** @internal */
export type Factory<K, V> = (client: MinimalClient, key: K) => V;

/**
 * @internal
 * Create a new cache without a factory function.
 */
export function createClientCache<K, V extends {}>(): ClientCache<
  K,
  V | undefined
>;
/**
 * @internal
 * Create a new cache with a factory function.
 * @param fn A factory function that will be used to create the value if it does not exist in the cache.
 */
export function createClientCache<K, V extends {}>(
  fn: Factory<K, V>,
): ClientCache<K, V>;
export function createClientCache<K, V extends {}>(
  fn?: Factory<K, V>,
): typeof fn extends undefined ? ClientCache<K, V | undefined>
  : ClientCache<K, V>
{
  const cache = new WeakMap<
    ClientCacheKey,
    typeof fn extends undefined ? Map<K, V | undefined> : Map<K, V>
  >();

  function get(client: MinimalClient, key: K) {
    if (cache.get(client.clientCacheKey) == null) {
      cache.set(client.clientCacheKey, new Map());
    }
    let r = cache.get(client.clientCacheKey)!.get(key);
    if (r === undefined && fn !== undefined) {
      return set(client, key, fn(client, key));
    } else {
      return r;
    }
  }

  function set(client: MinimalClient, key: K, value: V) {
    if (cache.get(client.clientCacheKey) == null) {
      cache.set(client.clientCacheKey, new Map());
    }

    cache.get(client.clientCacheKey)!.set(key, value);
    return value;
  }

  function remove(client: MinimalClient, key: K) {
    if (cache.get(client.clientCacheKey) == null) return false;
    return cache.get(client.clientCacheKey)!.delete(key);
  }

  return { get, set, remove } as ClientCache<K, V>;
}

/** @internal */
export type AsyncFactory<K, V extends {}> = (
  client: MinimalClient,
  key: K,
) => Promise<V>;

/**
 * @internal
 * Create a new cache with an async factory function.
 * @param fn A factory function that will be used to create the value if it does not exist in the cache.
 * @returns
 */
export function createAsyncClientCache<K, V extends {}>(
  fn: AsyncFactory<K, V>,
  createCacheLocal: typeof createClientCache = createClientCache,
): AsyncClientCache<K, V> {
  const cache = createCacheLocal<K, V>();
  const inProgress = createCacheLocal<K, Promise<V> | V>();

  const ret = {
    getOrUndefined: function getOrUndefined(client: MinimalClient, key: K) {
      return cache.get(client, key);
    },

    get: async function get(client: MinimalClient, key: K) {
      return cache.get(client, key) ?? inProgress.get(client, key)
        ?? ret.set(client, key, fn(client, key));
    },

    set: async function set(client: MinimalClient, k: K, v: V | Promise<V>) {
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
    },
  };

  return ret;
}
