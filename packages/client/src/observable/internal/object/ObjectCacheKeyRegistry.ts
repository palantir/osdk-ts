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
import type { ObjectCacheKey } from "./ObjectCacheKey.js";

interface CacheKeyMetadata {
  apiName: string;
  primaryKey: string;
  rdpConfig?: Canonical<Rdp>;
}

/**
 * Registry that tracks relationships between object cache keys with different RDP configurations.
 * This ensures we propagate updates across all "variants" of the same object.
 */
export class ObjectCacheKeyRegistry {
  /**
   * Map from base key (apiName:primaryKey) to all related cache key variants
   */
  private baseToVariants = new Map<string, Set<ObjectCacheKey>>();

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
    rdpConfig?: Canonical<Rdp>,
  ): void {
    const baseKey = this.getBaseKey(apiName, primaryKey);
    this.keyMetadata.set(cacheKey, {
      apiName,
      primaryKey: String(primaryKey),
      rdpConfig,
    });

    let variants = this.baseToVariants.get(baseKey);
    if (!variants) {
      variants = new Set();
      this.baseToVariants.set(baseKey, variants);
    }
    variants.add(cacheKey);
  }

  /**
   * Get all related cache keys for a given cache key, including itself
   */
  getRelated(cacheKey: ObjectCacheKey): Set<ObjectCacheKey> {
    const metadata = this.keyMetadata.get(cacheKey);
    if (!metadata) {
      // Not registered, fallback and just return this key for safety
      return new Set([cacheKey]);
    }

    const baseKey = this.getBaseKey(metadata.apiName, metadata.primaryKey);
    return new Set(this.baseToVariants.get(baseKey) ?? [cacheKey]);
  }

  /**
   * Get all variant cache keys for a specific object
   */
  getVariants(
    apiName: string,
    primaryKey: string | number | boolean,
  ): Set<ObjectCacheKey> {
    const baseKey = this.getBaseKey(apiName, primaryKey);
    return new Set(this.baseToVariants.get(baseKey) ?? []);
  }

  /**
   * Unregister a cache key when it's being cleaned up
   */
  unregister(cacheKey: ObjectCacheKey): void {
    const metadata = this.keyMetadata.get(cacheKey);
    if (!metadata) return;

    const baseKey = this.getBaseKey(metadata.apiName, metadata.primaryKey);
    const variants = this.baseToVariants.get(baseKey);

    if (variants) {
      variants.delete(cacheKey);
      if (variants.size === 0) {
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
   * Generate a base key from apiName and primaryKey
   */
  private getBaseKey(
    apiName: string,
    primaryKey: string | number | boolean,
  ): string {
    return `${apiName}:${primaryKey}`;
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
}
