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

import type { KnownCacheKey } from "./KnownCacheKey.js";
import { type Entry, Layer } from "./Layer.js";
import type { Store } from "./Store.js";

export interface MockManager {
  findMockByCacheKey(cacheKey: KnownCacheKey): MockResponseForCache | null;
}

export interface MockResponseForCache {
  id: string;
  response: unknown;
  metadata?: Record<string, unknown>;
}

/**
 * MockLayer extends the base Layer class to provide mock data capability.
 * It sits between the truth layer and optimistic layers, allowing mocks to:
 * - Override server data when defined
 * - Participate in the normal cache flow
 * - Be shared across components with identical queries
 * - Benefit from deduplication
 */
export class MockLayer extends Layer {
  private mockManager?: MockManager;
  private mockCache = new Map<string, Entry<any>>();
  private store?: Store;

  constructor(
    parent: Layer | undefined,
    layerId: unknown,
    mockManager?: MockManager,
  ) {
    super(parent, layerId);
    this.mockManager = mockManager;
  }

  /**
   * Set the store reference for invalidation callbacks
   */
  setStore(store: Store): void {
    this.store = store;
  }

  /**
   * Override the get method to check for mocks first
   */
  public override get<K extends KnownCacheKey>(
    cacheKey: K,
  ): Entry<K> | undefined {
    // Check if we have a cached mock entry for this key
    const cacheKeyStr = this.serializeCacheKey(cacheKey);
    const cachedMock = this.mockCache.get(cacheKeyStr);
    if (cachedMock) {
      return cachedMock as Entry<K>;
    }

    // Check if MockManager has a mock for this cache key
    if (this.mockManager) {
      const mock = this.mockManager.findMockByCacheKey(cacheKey);
      if (mock) {
        const entry = this.convertMockToEntry(mock, cacheKey);
        // Cache the converted entry for subsequent requests
        this.mockCache.set(cacheKeyStr, entry);
        return entry;
      }
    }

    // No mock found, fall through to parent layer
    return super.get(cacheKey);
  }

  /**
   * Convert a mock response to a cache entry format
   */
  private convertMockToEntry<K extends KnownCacheKey>(
    mock: MockResponseForCache,
    cacheKey: K,
  ): Entry<K> {
    return {
      cacheKey,
      value: mock.response as K["__cacheKey"]["value"],
      lastUpdated: Date.now(),
      status: "loaded",
      // Add metadata to indicate this came from a mock
      ...(mock.metadata && {
        __debugMetadata: {
          servedFromMock: true,
          mockId: mock.id,
          ...mock.metadata,
        },
      }),
    } as Entry<K>;
  }

  /**
   * Invalidate a specific mock by its ID.
   * This removes the mock from the local cache and triggers a store refresh
   * to ensure subscribers get updated with real data.
   */
  invalidateMock(mockId: string): void {
    // Collect cache keys that need store invalidation
    const keysToInvalidate: KnownCacheKey[] = [];

    // Remove all cached entries that came from this mock
    for (const [key, entry] of this.mockCache) {
      if (entry.__debugMetadata?.mockId === mockId) {
        this.mockCache.delete(key);
        // Parse the serialized key back to a cache key for store invalidation
        keysToInvalidate.push(entry.cacheKey);
      }
    }

    // Trigger store refresh for affected cache keys
    if (this.store) {
      for (const cacheKey of keysToInvalidate) {
        this.store.invalidateCacheKey(cacheKey);
      }
    }
  }

  /**
   * Clear all cached mock entries
   */
  clearMockCache(): void {
    this.mockCache.clear();
  }

  /**
   * Update the mock manager
   */
  setMockManager(mockManager: MockManager): void {
    this.mockManager = mockManager;
    // Clear cache when manager changes to ensure fresh data
    this.clearMockCache();
  }

  /**
   * Serialize a cache key for storage in the mock cache map
   */
  private serializeCacheKey(cacheKey: KnownCacheKey): string {
    return JSON.stringify([cacheKey.type, ...cacheKey.otherKeys]);
  }
}
