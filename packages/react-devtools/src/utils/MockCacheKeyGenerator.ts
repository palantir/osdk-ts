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

import type { SelectedPrimitive } from "../components/PrimitiveSelectionPanel.js";

export interface CacheKey {
  type: string;
  otherKeys: unknown[];
  [key: string]: unknown;
}

/**
 * Generates cache keys compatible with ObservableClient's caching system
 * for mock data based on selected primitives
 */
export class MockCacheKeyGenerator {
  /**
   * Generate a cache key compatible with ObservableClient's caching system
   */
  static generateCacheKey(primitive: SelectedPrimitive): CacheKey | null {
    switch (primitive.type) {
      case "object":
        return this.generateObjectCacheKey(primitive.data);

      case "objectSet":
        return this.generateObjectSetCacheKey(primitive.data);

      case "link":
        return this.generateLinkCacheKey(primitive.data);

      case "action":
        // Actions don't have cache keys in the same way
        // They trigger cache invalidation rather than being cached themselves
        return null;

      default:
        return null;
    }
  }

  /**
   * Generate cache key for single object queries
   * Format: {type: "object", otherKeys: [apiName, primaryKey]}
   */
  private static generateObjectCacheKey(data: any): CacheKey {
    return {
      type: "object",
      apiName: data.type,
      primaryKey: data.primaryKey,
      otherKeys: [data.type, data.primaryKey],
    };
  }

  /**
   * Generate cache key for object set/list queries
   * Format: {type: "list", otherKeys: [apiName, whereClause, orderBy]}
   */
  private static generateObjectSetCacheKey(data: any): CacheKey {
    const whereClause = data.whereClause || {};
    const orderBy = data.orderBy || [];

    return {
      type: "list",
      apiName: data.type,
      where: whereClause,
      orderBy: orderBy,
      otherKeys: [
        data.type,
        this.canonicalizeWhereClause(whereClause),
        this.canonicalizeOrderBy(orderBy),
      ],
    };
  }

  /**
   * Generate cache key for link queries
   * Format: {type: "link", otherKeys: [sourceType, sourcePk, linkName, whereClause, orderBy]}
   */
  private static generateLinkCacheKey(data: any): CacheKey {
    const whereClause = data.where || {};
    const orderBy = data.orderBy || [];

    return {
      type: "link",
      sourceType: data.sourceType,
      sourcePk: data.sourcePk,
      linkName: data.linkName,
      where: whereClause,
      orderBy: orderBy,
      otherKeys: [
        data.sourceType,
        data.sourcePk,
        data.linkName,
        this.canonicalizeWhereClause(whereClause),
        this.canonicalizeOrderBy(orderBy),
      ],
    };
  }

  /**
   * Canonicalize where clause for consistent cache key generation
   * Sorts keys alphabetically to ensure consistent ordering
   */
  private static canonicalizeWhereClause(
    where: Record<string, unknown>,
  ): string {
    if (!where || Object.keys(where).length === 0) {
      return "{}";
    }

    // Sort keys for consistent ordering
    const sortedKeys = Object.keys(where).sort();
    const sorted: Record<string, unknown> = {};
    for (const key of sortedKeys) {
      sorted[key] = where[key];
    }

    return JSON.stringify(sorted);
  }

  /**
   * Canonicalize orderBy for consistent cache key generation
   */
  private static canonicalizeOrderBy(orderBy: any): string {
    if (!orderBy || (Array.isArray(orderBy) && orderBy.length === 0)) {
      return "[]";
    }

    // If it's an object (single orderBy), convert to array format
    if (!Array.isArray(orderBy)) {
      orderBy = [orderBy];
    }

    return JSON.stringify(orderBy);
  }

  /**
   * Check if two cache keys match
   */
  static cacheKeysMatch(key1: CacheKey, key2: CacheKey): boolean {
    if (key1.type !== key2.type) {
      return false;
    }

    // Compare serialized otherKeys arrays
    const serialized1 = JSON.stringify(key1.otherKeys);
    const serialized2 = JSON.stringify(key2.otherKeys);

    return serialized1 === serialized2;
  }

  /**
   * Generate a string representation of a cache key for debugging
   */
  static cacheKeyToString(cacheKey: CacheKey): string {
    return JSON.stringify([cacheKey.type, ...cacheKey.otherKeys]);
  }
}
