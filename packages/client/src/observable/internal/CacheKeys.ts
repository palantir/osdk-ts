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
import type { CacheKey } from "./CacheKey.js";
import type { ListCacheKey } from "./ListQuery.js";
import type { ObjectCacheKey } from "./ObjectQuery.js";
import type { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

export class CacheKeys {
  #cacheKeys = new Trie<CacheKey<string, any, any>>(false, (keys) => {
    const ret = {
      type: keys[0],
      otherKeys: keys.slice(1),
    } as unknown as CacheKey<
      string,
      any,
      any
    >;
    this.#onCreate(ret);
    return ret;
  });
  #cacheKeyFactories = new Map<string, (...args: any[]) => CacheKey>();
  #onCreate: (cacheKey: CacheKey) => void;

  constructor(
    whereCanonicalizer: WhereClauseCanonicalizer,
    onCreate: (cacheKey: CacheKey) => void,
  ) {
    this.#onCreate = onCreate;
    this.#registerCacheKeyFactory<ObjectCacheKey>(
      "object",
      (apiName, pk) => {
        if (process.env.NODE_ENV !== "production") {
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
      (apiName, where) => {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.debug(
            `CacheKeys.get([list, ${apiName}, ${
              JSON.stringify(where)
            }]) -- already exists? `,
            this.#cacheKeys.peekArray([
              "list",
              apiName,
              whereCanonicalizer.canonicalize(where),
            ]) != null,
          );
        }
        return this.#cacheKeys.lookupArray([
          "list",
          apiName,
          whereCanonicalizer.canonicalize(where),
        ]) as ListCacheKey;
      },
    );
  }

  #registerCacheKeyFactory<K extends CacheKey>(
    type: K["type"],
    factory: (...args: K["__cacheKey"]["args"]) => K,
  ): void {
    this.#cacheKeyFactories.set(type, factory);
  }

  get<K extends CacheKey<string, any, any>>(
    type: K["type"],
    ...args: K["__cacheKey"]["args"]
  ): K {
    const factory = this.#cacheKeyFactories.get(type);
    invariant(factory, `no cache key factory for type "${type}"`);
    return factory(...args) as K;
  }

  remove<K extends CacheKey<string, any, any>>(
    cacheKey: K,
  ): void {
    this.#cacheKeys.remove(cacheKey.type, ...cacheKey.otherKeys);
  }
}
