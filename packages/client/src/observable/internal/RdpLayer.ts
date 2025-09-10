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

import type { Canonical } from "./Canonical.js";
import type { ObjectCacheKey } from "./ObjectQuery.js";
import type { OptimisticId } from "./OptimisticId.js";
import type { Rdp } from "./RdpCanonicalizer.js";
import type { RdpData } from "./RdpStorage.js";

export class RdpLayer {
  #parent: RdpLayer | undefined;
  #cache = new WeakMap<ObjectCacheKey, Map<Canonical<Rdp>, RdpData>>();
  #layerId: OptimisticId | undefined;

  constructor(parent: RdpLayer | undefined, layerId: OptimisticId | undefined) {
    this.#parent = parent;
    this.#layerId = layerId;
  }

  get parentLayer(): RdpLayer | undefined {
    return this.#parent;
  }

  get layerId(): OptimisticId | undefined {
    return this.#layerId;
  }

  addLayer(layerId: OptimisticId): RdpLayer {
    return new RdpLayer(this, layerId);
  }

  removeLayer(layerId: OptimisticId): RdpLayer {
    if (layerId == null || this.#parent == null) {
      return this;
    }

    if (this.#layerId !== layerId) {
      this.#parent = this.#parent.removeLayer(layerId);
      return this;
    }

    return this.#parent.removeLayer(layerId);
  }

  get(
    objectKey: ObjectCacheKey,
    rdpConfig: Canonical<Rdp>,
  ): RdpData | undefined {
    const local = this.#cache.get(objectKey)?.get(rdpConfig);
    if (local !== undefined) return local;
    return this.#parent?.get(objectKey, rdpConfig);
  }

  set(
    objectKey: ObjectCacheKey,
    rdpConfig: Canonical<Rdp>,
    data: RdpData,
  ): void {
    let rdpMap = this.#cache.get(objectKey);
    if (!rdpMap) {
      rdpMap = new Map();
      this.#cache.set(objectKey, rdpMap);
    }
    rdpMap.set(rdpConfig, data);
  }

  delete(objectKey: ObjectCacheKey, rdpConfig?: Canonical<Rdp>): void {
    if (rdpConfig) {
      this.#cache.get(objectKey)?.delete(rdpConfig);
    } else {
      this.#cache.delete(objectKey);
    }
  }

  has(objectKey: ObjectCacheKey, rdpConfig?: Canonical<Rdp>): boolean {
    if (rdpConfig) {
      const hasLocal = this.#cache.get(objectKey)?.has(rdpConfig) ?? false;
      if (hasLocal) return true;
      return this.#parent?.has(objectKey, rdpConfig) ?? false;
    }
    return this.#cache.has(objectKey)
      || (this.#parent?.has(objectKey) ?? false);
  }
}
