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

type OrderByEntry = Record<string, "asc" | "desc">;
type OrderByValue = OrderByEntry | OrderByEntry[];

export interface ObjectCacheKeyData {
  type: string;
  primaryKey?: string;
}

export interface ObjectSetCacheKeyData {
  type: string;
  whereClause?: Record<string, unknown>;
  orderBy?: OrderByValue;
}

export interface LinkCacheKeyData {
  sourceType: string;
  sourcePk?: string;
  linkName: string;
  where?: Record<string, unknown>;
  orderBy?: OrderByValue;
}

export interface AggregationCacheKeyData {
  type: string;
  whereClause?: Record<string, unknown>;
  aggregate?: Record<string, unknown>;
}

export interface CacheKey {
  type: string;
  otherKeys: unknown[];
  [key: string]: unknown;
}

export class MockCacheKeyGenerator {
  static generateCacheKey(primitive: SelectedPrimitive): CacheKey | null {
    switch (primitive.type) {
      case "object":
        return this.generateObjectCacheKey(primitive.data);

      case "objectSet":
        return this.generateObjectSetCacheKey(primitive.data);

      case "link":
        return this.generateLinkCacheKey(primitive.data);

      case "aggregation":
        return this.generateAggregationCacheKey(primitive.data);

      case "action":
        return null;

      default:
        return null;
    }
  }

  private static generateObjectCacheKey(data: ObjectCacheKeyData): CacheKey {
    return {
      type: "object",
      apiName: data.type,
      primaryKey: data.primaryKey,
      otherKeys: [data.type, data.primaryKey],
    };
  }

  private static generateObjectSetCacheKey(
    data: ObjectSetCacheKeyData,
  ): CacheKey {
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

  private static generateLinkCacheKey(data: LinkCacheKeyData): CacheKey {
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

  private static generateAggregationCacheKey(
    data: AggregationCacheKeyData,
  ): CacheKey {
    const whereClause = data.whereClause || {};
    const aggregate = data.aggregate || {};

    return {
      type: "aggregation",
      apiName: data.type,
      where: whereClause,
      aggregate: aggregate,
      otherKeys: [
        "object",
        data.type,
        this.canonicalizeWhereClause(whereClause),
        undefined,
        JSON.stringify(aggregate),
      ],
    };
  }

  private static canonicalizeWhereClause(
    where: Record<string, unknown>,
  ): string {
    if (!where || Object.keys(where).length === 0) {
      return "{}";
    }

    const sortedKeys = Object.keys(where).sort();
    const sorted: Record<string, unknown> = {};
    for (const key of sortedKeys) {
      sorted[key] = where[key];
    }

    return JSON.stringify(sorted);
  }

  private static canonicalizeOrderBy(
    orderBy: OrderByValue | undefined,
  ): string {
    if (!orderBy || (Array.isArray(orderBy) && orderBy.length === 0)) {
      return "[]";
    }

    if (!Array.isArray(orderBy)) {
      return JSON.stringify([orderBy]);
    }

    return JSON.stringify(orderBy);
  }

  static cacheKeysMatch(key1: CacheKey, key2: CacheKey): boolean {
    if (key1.type !== key2.type) {
      return false;
    }

    const serialized1 = JSON.stringify(key1.otherKeys);
    const serialized2 = JSON.stringify(key2.otherKeys);

    return serialized1 === serialized2;
  }

  static cacheKeyToString(cacheKey: CacheKey): string {
    return JSON.stringify([cacheKey.type, ...cacheKey.otherKeys]);
  }
}
