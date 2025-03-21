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
  #parent;
  #cache = new WeakMapWithEntries();
  #layerId;
  constructor(parent, layerId) {
    this.#parent = parent;
    this.#layerId = layerId;
  }
  get parentLayer() {
    return this.#parent;
  }
  get layerId() {
    return this.#layerId;
  }
  addLayer(layerId) {
    return new Layer(this, layerId);
  }
  removeLayer(layerId) {
    if (layerId == null || this.#parent == null) {
      // we are the root, so we can't remove anything
      return this;
    }
    if (this.#layerId !== layerId) {
      this.#parent = this.#parent.removeLayer(layerId);
      return this;
    }
    return this.#parent.removeLayer(layerId);
  }
  entries() {
    return this.#cache.entries();
  }
  keys() {
    return this.#cache.keys();
  }
  get(cacheKey) {
    return this.#cache.get(cacheKey) ?? this.#parent?.get(cacheKey);
  }
  set(cacheKey, value) {
    this.#cache.set(cacheKey, value);
  }
}
export class Entry {
  constructor(cacheKey, value, lastUpdated, status = "init") {
    this.cacheKey = cacheKey;
    this.value = value;
    this.lastUpdated = lastUpdated;
    this.status = status;
  }
}
//# sourceMappingURL=Layer.js.map