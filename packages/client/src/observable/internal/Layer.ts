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
import { WeakMapWithEntries } from "./WeakMapWithEntries.js";

/*
  Image some layers

  [
    { cache: { obj1: { a: 1 } }, layerId: undefined },
    { cache: { obj1: { a: 1, b: 2 } }, layerId: "layer1" },
    { cache: { obj1: { a: undefined, b: 2 } }, layerId: "layer2" },
    { cache: { obj1: { a: 1, b: 2 } }, layerId: "layer3" },
  ]
*/

export class Layer {
  #parent: Layer | undefined;
  #cache = new WeakMapWithEntries<CacheKey<string, any, any>, Entry<any>>();
  #layerId: unknown;

  constructor(parent: Layer | undefined, layerId: unknown) {
    this.#parent = parent;
    this.#layerId = layerId;
  }

  get parentLayer(): Layer | undefined {
    return this.#parent;
  }

  get layerId(): unknown {
    return this.#layerId;
  }

  addLayer(layerId: unknown): Layer {
    return new Layer(this, layerId);
  }

  removeLayer(layerId: unknown): Layer {
    if (layerId == null || this.#parent == null) {
      // we are the root, so we can't remove anything
      return this;
    }
    if (this.#layerId !== layerId) {
      this.#parent = this.#parent.removeLayer(layerId);
      return this;
    }

    return this.#parent ?? this;
  }

  entries(): IterableIterator<[CacheKey<string, any, any>, Entry<any>]> {
    return this.#cache.entries();
  }

  public get<K extends CacheKey<string, unknown, any>>(
    cacheKey: K,
  ): Entry<K> | undefined {
    return this.#cache.get(cacheKey) as Entry<K> | undefined
      ?? this.#parent?.get(cacheKey) as Entry<K> | undefined;
  }

  public set<K extends CacheKey<string, unknown, any>>(
    cacheKey: K,
    value: Entry<K>,
  ): void {
    this.#cache.set(cacheKey, value);
  }
}

export class Entry<K extends CacheKey<any, any, any>> {
  readonly cacheKey: K;
  value: K["__cacheKey"]["value"] | undefined;
  lastUpdated: number;
  status: "init" | "loading" | "loaded" | "error";

  constructor(
    cacheKey: K,
    value: K["__cacheKey"]["value"],
    lastUpdated: number,
  ) {
    this.cacheKey = cacheKey;
    this.value = value;
    this.lastUpdated = lastUpdated;
    this.status = "init";
  }
}
