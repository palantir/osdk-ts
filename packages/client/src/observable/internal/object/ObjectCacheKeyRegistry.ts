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

import type { Canonical } from "../Canonical.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import { extractRdpFieldNames } from "../utils/rdpFieldOperations.js";
import {
  INCLUDE_ALL_BASE_PROPERTIES_IDX,
  type ObjectCacheKey,
} from "./ObjectCacheKey.js";

interface CacheKeyMetadata {
  apiName: string;
  primaryKey: string;
  rdpConfig?: Canonical<Rdp>;
  rdpFieldSet?: ReadonlySet<string>;
  includeAllBaseObjectProperties?: true;
}

interface BaseKeyEntry {
  variants: Set<ObjectCacheKey>;
  apiName: string;
  primaryKey: string;
}

/**
 * Registry that tracks relationships between compatible object cache-key
 * variants. Full-base-property interface results remain isolated from narrowed
 * results, while compatible RDP variants still propagate updates.
 */
export class ObjectCacheKeyRegistry {
  /**
   * Map from base key (apiName:primaryKey) to all related cache key variants and metadata
   */
  private baseToVariants = new Map<string, BaseKeyEntry>();

  /**
   * Metadata for each cache key (apiName, primaryKey, rdpConfig)
   */
  private keyMetadata = new WeakMap<ObjectCacheKey, CacheKeyMetadata>();

  /**
   * Register a cache key variant for an object
   */
  register(
    cacheKey: ObjectCacheKey,
    apiName: string,
    primaryKey: string | number | boolean,
    rdpConfig?: Canonical<Rdp>
  ): void {
    const includeAllBaseObjectProperties =
      cacheKey.otherKeys[INCLUDE_ALL_BASE_PROPERTIES_IDX];
    const baseKey = this.makeBaseKey(
      apiName,
      primaryKey,
      includeAllBaseObjectProperties
    );
    const primaryKeyStr = String(primaryKey);

    this.keyMetadata.set(cacheKey, {
      apiName,
      primaryKey: primaryKeyStr,
      rdpConfig,
      rdpFieldSet: rdpConfig ? extractRdpFieldNames(rdpConfig) : undefined,
      includeAllBaseObjectProperties,
    });

    let entry = this.baseToVariants.get(baseKey);
    if (!entry) {
      entry = {
        variants: new Set(),
        apiName,
        primaryKey: primaryKeyStr,
      };
      this.baseToVariants.set(baseKey, entry);
    }
    entry.variants.add(cacheKey);
  }

  /**
   * Get all variant cache keys for a specific object
   */
  getVariants(
    apiName: string,
    primaryKey: string | number | boolean,
    includeAllBaseObjectProperties?: true
  ): Set<ObjectCacheKey> {
    const baseKey = this.makeBaseKey(
      apiName,
      primaryKey,
      includeAllBaseObjectProperties
    );
    const entry = this.baseToVariants.get(baseKey);
    return new Set(entry?.variants ?? []);
  }

  /**
   * Unregister a cache key when it's being cleaned up
   */
  unregister(cacheKey: ObjectCacheKey): void {
    const metadata = this.keyMetadata.get(cacheKey);
    if (!metadata) return;

    const baseKey = this.makeBaseKey(
      metadata.apiName,
      metadata.primaryKey,
      metadata.includeAllBaseObjectProperties
    );
    const entry = this.baseToVariants.get(baseKey);

    if (entry) {
      entry.variants.delete(cacheKey);
      if (entry.variants.size === 0) {
        this.baseToVariants.delete(baseKey);
      }
    }

    this.keyMetadata.delete(cacheKey);
  }

  /**
   * Get metadata for a cache key
   */
  getMetadata(cacheKey: ObjectCacheKey): CacheKeyMetadata | undefined {
    return this.keyMetadata.get(cacheKey);
  }

  /**
   * Get the count of variants for a specific object
   */
  getVariantCount(
    apiName: string,
    primaryKey: string | number | boolean,
    includeAllBaseObjectProperties?: true
  ): number {
    const baseKey = this.makeBaseKey(
      apiName,
      primaryKey,
      includeAllBaseObjectProperties
    );
    return this.baseToVariants.get(baseKey)?.variants.size ?? 0;
  }

  getAllVariants(
    apiName: string,
    primaryKey: string | number | boolean
  ): Set<ObjectCacheKey> {
    return new Set([
      ...this.getVariants(apiName, primaryKey),
      ...this.getVariants(apiName, primaryKey, true),
    ]);
  }

  /**
   * Generate a base key from apiName and primaryKey
   */
  private makeBaseKey(
    apiName: string,
    primaryKey: string | number | boolean,
    includeAllBaseObjectProperties?: true
  ): string {
    return `${apiName}:${primaryKey}:${includeAllBaseObjectProperties === true}`;
  }

  /**
   * Check if a cache key has RDP configuration
   */
  hasRdpConfig(cacheKey: ObjectCacheKey): boolean {
    return this.keyMetadata.get(cacheKey)?.rdpConfig != null;
  }

  /**
   * Get the RDP configuration for a cache key
   */
  getRdpConfig(cacheKey: ObjectCacheKey): Canonical<Rdp> | undefined {
    return this.keyMetadata.get(cacheKey)?.rdpConfig;
  }

  /**
   * Get the cached RDP field set for a cache key
   */
  getRdpFieldSet(cacheKey: ObjectCacheKey): ReadonlySet<string> {
    return this.keyMetadata.get(cacheKey)?.rdpFieldSet ?? new Set();
  }
}
