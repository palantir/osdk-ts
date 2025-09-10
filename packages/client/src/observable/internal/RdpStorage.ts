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
import type { Rdp } from "./RdpCanonicalizer.js";

export interface RdpData {
  [key: string]: unknown;
}

export class RdpStorage {
  #storage = new WeakMap<ObjectCacheKey, Map<Canonical<Rdp>, RdpData>>();

  get(
    objectKey: ObjectCacheKey,
    rdpConfig: Canonical<Rdp>,
  ): RdpData | undefined {
    return this.#storage.get(objectKey)?.get(rdpConfig);
  }

  set(
    objectKey: ObjectCacheKey,
    rdpConfig: Canonical<Rdp>,
    data: RdpData,
  ): void {
    let rdpMap = this.#storage.get(objectKey);
    if (!rdpMap) {
      rdpMap = new Map();
      this.#storage.set(objectKey, rdpMap);
    }
    rdpMap.set(rdpConfig, data);
  }

  delete(objectKey: ObjectCacheKey, rdpConfig?: Canonical<Rdp>): void {
    if (rdpConfig) {
      this.#storage.get(objectKey)?.delete(rdpConfig);
    } else {
      this.#storage.delete(objectKey);
    }
  }

  has(objectKey: ObjectCacheKey, rdpConfig?: Canonical<Rdp>): boolean {
    if (rdpConfig) {
      return this.#storage.get(objectKey)?.has(rdpConfig) ?? false;
    }
    return this.#storage.has(objectKey);
  }

  getAllRdpConfigs(objectKey: ObjectCacheKey): Set<Canonical<Rdp>> {
    const rdpMap = this.#storage.get(objectKey);
    return rdpMap ? new Set(rdpMap.keys()) : new Set();
  }

  invalidate(objectKey: ObjectCacheKey, rdpConfig?: Canonical<Rdp>): void {
    if (rdpConfig) {
      // Invalidate specific RDP configuration
      const rdpMap = this.#storage.get(objectKey);
      if (rdpMap) {
        rdpMap.delete(rdpConfig);
      }
    } else {
      // Invalidate all RDP configurations for this object
      this.#storage.delete(objectKey);
    }
  }
}
