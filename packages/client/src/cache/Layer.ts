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

import type { CacheKey } from "./CacheKey.js";

export class Layer {
  #parent: Layer | undefined;
  #cache = new WeakMap<CacheKey<string, any>, Entry<any>>();

  constructor(parent: Layer | undefined) {
    this.#parent = parent;
  }

  addLayer(): Layer {
    return new Layer(this);
  }

  removeLayer(): Layer {
    return this.#parent ?? this;
  }

  public get<K extends CacheKey<string, unknown>>(
    cacheKey: K,
  ): Entry<K> | undefined {
    return this.#cache.get(cacheKey) as Entry<K> | undefined
      ?? this.#parent?.get(cacheKey) as Entry<K> | undefined;
  }

  public set<K extends CacheKey<string, unknown>>(
    cacheKey: K,
    value: Entry<K>,
  ): void {
    this.#cache.set(cacheKey, value);
  }
}

export class Entry<K extends CacheKey<any, any>> {
  readonly cacheKey: K;
  value: K["__cacheKey"]["value"];
  lastUpdated: number;

  constructor(
    cacheKey: K,
    value: K["__cacheKey"]["value"],
    lastUpdated: number,
  ) {
    this.cacheKey = cacheKey;
    this.value = value;
    this.lastUpdated = lastUpdated;
  }
}
