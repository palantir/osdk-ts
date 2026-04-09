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
import { DEBUG_CACHE_KEYS, DEBUG_REFCOUNTS } from "../DebugFlags.js";
import type { CacheKey } from "./CacheKey.js";
import { RefCounts } from "./RefCounts.js";

/**
 * Cache key management with canonicalization.
 * - Uses Trie structure for efficient storage and lookup
 */
export class CacheKeys<TCacheKey extends CacheKey> {
  #cacheKeys = new Trie<TCacheKey>(false, (keys) => {
    const cacheKey = {
      type: keys[0],
      otherKeys: keys.slice(1),
    } as unknown as TCacheKey;
    this.#onCreate?.(cacheKey);

    if (DEBUG_REFCOUNTS) {
      // eslint-disable-next-line no-console
      console.log(
        `CacheKeys.onCreate(${cacheKey.type}, ${
          JSON.stringify(cacheKey.otherKeys)
        })`,
      );

      this.#finalizationRegistry.register(cacheKey, () => {
        // eslint-disable-next-line no-console
        console.log(
          `CacheKey Finalization(${cacheKey.type}, ${
            JSON.stringify(cacheKey.otherKeys)
          })`,
        );
      });
    }
    return cacheKey;
  });

  #refCounts = new RefCounts<TCacheKey>(
    DEBUG_REFCOUNTS ? 15_000 : 60_000,
    (k) => this.#cleanupCacheKey(k),
  );

  // we are currently only using this for debug logging and should just remove it in the future if that
  // continues to be true
  #finalizationRegistry: FinalizationRegistry<() => void>;

  #onCreate?: (cacheKey: TCacheKey) => void;
  #onDestroy?: (cacheKey: TCacheKey) => void;

  constructor(
    { onCreate, onDestroy }: {
      onCreate?: (cacheKey: TCacheKey) => void;
      onDestroy?: (cacheKey: TCacheKey) => void;
    },
  ) {
    this.#onCreate = onCreate;
    this.#onDestroy = onDestroy;

    setInterval(() => {
      this.#refCounts.gc();
    }, 1000);

    this.#finalizationRegistry = new FinalizationRegistry<() => void>(
      (cleanupCallback) => {
        try {
          cleanupCallback();
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(
            "Caught an error while running a finalization callback",
            e,
          );
        }
      },
    );
  }

  get<K extends TCacheKey>(
    type: K["type"],
    ...args: K["__cacheKey"]["args"]
  ): K {
    const cacheKeyArgs = this.#normalizeArgs(type, args);
    if (process.env.NODE_ENV !== "production" && DEBUG_CACHE_KEYS) {
      // eslint-disable-next-line no-console
      console.debug(
        `CacheKeys.get([${type},
        ${
          cacheKeyArgs.slice(1).map(x => JSON.stringify(x)).join(", ")
        }]) - already exists? `,
        this.#cacheKeys.peekArray(cacheKeyArgs) != null,
      );
    }

    const cacheKey = this.#cacheKeys.lookupArray(
      cacheKeyArgs,
    ) as K;

    // This is an idempotent call that ensures the cache key is registered for
    // cleanup. If already registered, this does nothing.
    this.#refCounts.register(cacheKey);

    return cacheKey;
  }

  /**
   * Look up an existing cache key without creating or registering it.
   * Returns undefined if the key does not exist in the trie.
   */
  peek<K extends TCacheKey>(
    type: K["type"],
    ...args: K["__cacheKey"]["args"]
  ): K | undefined {
    return this.#cacheKeys.peekArray(
      this.#normalizeArgs(type, args),
    ) as K | undefined;
  }

  #normalizeArgs(
    type: TCacheKey["type"],
    args: unknown[],
  ): unknown[] {
    // Normalize trailing undefined values to ensure consistent cache key lookup
    // This makes ("object", "Foo", 1, undefined) equivalent to ("object", "Foo", 1)
    const normalizedArgs = [...args];
    while (
      normalizedArgs.length > 0
      && normalizedArgs[normalizedArgs.length - 1] === undefined
    ) {
      normalizedArgs.pop();
    }
    return [type, ...normalizedArgs];
  }

  retain(cacheKey: TCacheKey): void {
    this.#refCounts.retain(cacheKey);
  }

  release(cacheKey: TCacheKey): void {
    this.#refCounts.release(cacheKey);
  }

  #remove<K extends TCacheKey>(cacheKey: K): void {
    this.#cacheKeys.remove(cacheKey.type, ...cacheKey.otherKeys);
  }

  /**
   * Called after a key is no longer retained and the timeout has elapsed
   * @param key
   */
  #cleanupCacheKey = (key: TCacheKey) => {
    this.#onDestroy?.(key);
    this.#remove(key);
  };
}
