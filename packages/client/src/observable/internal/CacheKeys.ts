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
import type { CacheKey } from "./CacheKey.js";
import type { KnownCacheKey } from "./KnownCacheKey.js";
import type { SpecificLinkCacheKey } from "./links/SpecificLinkCacheKey.js";
import type { ListCacheKey } from "./ListCacheKey.js";
import type { ObjectCacheKey } from "./ObjectQuery.js";
import type { OrderByCanonicalizer } from "./OrderByCanonicalizer.js";
import type { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

type CacheKeyArgs<K extends CacheKey> = [K["type"], ...K["otherKeys"]];

export class CacheKeys {
  #cacheKeys = new Trie<KnownCacheKey>(false, (keys) => {
    const ret = {
      type: keys[0],
      otherKeys: keys.slice(1),
    } as unknown as KnownCacheKey;
    this.#onCreate(ret);
    return ret;
  });
  #cacheKeyFactories = new Map<string, (...args: any[]) => KnownCacheKey>();
  #onCreate: (cacheKey: KnownCacheKey) => void;

  constructor(
    whereCanonicalizer: WhereClauseCanonicalizer,
    orderByCanonicalizer: OrderByCanonicalizer,
    onCreate: (cacheKey: KnownCacheKey) => void,
  ) {
    this.#onCreate = onCreate;
    this.#registerCacheKeyFactory<ObjectCacheKey>(
      "object",
      (apiName, pk) => {
        if (process.env.NODE_ENV !== "production" && DEBUG_CACHE_KEYS) {
          // eslint-disable-next-line no-console
          console.debug(
            `CacheKeys.get([object, ${apiName}, ${pk}]) -- already exists? `,
            this.#cacheKeys.peekArray([
              "object",
              apiName,
              pk,
            ]) != null,
          );
        }
        return this.#cacheKeys.lookupArray([
          "object",
          apiName,
          pk,
        ]) as ObjectCacheKey;
      },
    );
    this.#registerCacheKeyFactory<ListCacheKey>(
      "list",
      (type, apiName, where, orderBy) => {
        if (process.env.NODE_ENV !== "production" && DEBUG_CACHE_KEYS) {
          // eslint-disable-next-line no-console
          console.debug(
            `CacheKeys.get([list, ${apiName}, ${JSON.stringify(where)}, ${
              JSON.stringify(orderBy)
            }]) -- already exists? `,
            this.#cacheKeys.peekArray([
              "list",
              apiName,
              whereCanonicalizer.canonicalize(where),
              orderByCanonicalizer.canonicalize(orderBy),
            ]) != null,
          );
        }
        return this.#cacheKeys.lookupArray<
          CacheKeyArgs<ListCacheKey>
        >([
          "list",
          type,
          apiName,
          whereCanonicalizer.canonicalize(where),
          orderByCanonicalizer.canonicalize(orderBy),
        ]) as ListCacheKey;
      },
    );
    this.#registerCacheKeyFactory<SpecificLinkCacheKey>(
      "specificLink",
      (sourceObjectType, sourcePk, linkName) => {
        if (process.env.NODE_ENV !== "production" && DEBUG_CACHE_KEYS) {
          // eslint-disable-next-line no-console
          console.debug(
            `CacheKeys.get([specificLink, ${sourceObjectType}, ${sourcePk}, ${linkName}]) -- already exists? `,
            this.#cacheKeys.peekArray([
              "specificLink",
              sourceObjectType,
              sourcePk,
              linkName,
            ]) != null,
          );
        }
        return this.#cacheKeys.lookupArray([
          "specificLink",
          sourceObjectType,
          sourcePk,
          linkName,
        ]) as SpecificLinkCacheKey;
      },
    );
  }

  #registerCacheKeyFactory<K extends KnownCacheKey>(
    type: K["type"],
    factory: (...args: K["__cacheKey"]["args"]) => K,
  ): void {
    this.#cacheKeyFactories.set(type, factory);
  }

  get<K extends KnownCacheKey>(
    type: K["type"],
    ...args: K["__cacheKey"]["args"]
  ): K {
    const factory = this.#cacheKeyFactories.get(type);
    invariant(factory, `no cache key factory for type "${type}"`);
    return factory(...args) as K;
  }

  remove<K extends KnownCacheKey>(
    cacheKey: K,
  ): void {
    this.#cacheKeys.remove(cacheKey.type, ...cacheKey.otherKeys);
  }
}
