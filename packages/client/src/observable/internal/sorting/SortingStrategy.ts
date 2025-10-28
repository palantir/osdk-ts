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

import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { BatchContext } from "../BatchContext.js";
import type { Canonical } from "../Canonical.js";
import type { ObjectCacheKey } from "../object/ObjectCacheKey.js";

/**
 * Strategy interface for collection sorting
 */
export interface SortingStrategy {
  /**
   * Sort an array of object cache keys
   * @param objectCacheKeys - Keys to sort
   * @param batch - Batch context for reading objects
   * @returns Sorted array of keys
   */
  sortCacheKeys(
    objectCacheKeys: ObjectCacheKey[],
    batch: BatchContext,
  ): ObjectCacheKey[];
}

/**
 * No-operation sorting strategy that preserves original order
 */
export class NoOpSortingStrategy implements SortingStrategy {
  sortCacheKeys(
    objectCacheKeys: ObjectCacheKey[],
    _batch: BatchContext,
  ): ObjectCacheKey[] {
    return objectCacheKeys;
  }
}

type ObjectInterfaceComparer = (
  a: ObjectHolder | InterfaceHolder | undefined,
  b: ObjectHolder | InterfaceHolder | undefined,
) => number;

/**
 * Sorting strategy for OrderBy clauses
 */
export class OrderBySortingStrategy implements SortingStrategy {
  private readonly sortFns: Array<ObjectInterfaceComparer>;

  constructor(
    private readonly apiName: string,
    private readonly orderBy: Canonical<
      Record<string, "asc" | "desc" | undefined>
    >,
  ) {
    this.sortFns = createOrderBySortFns(orderBy);
  }

  sortCacheKeys(
    objectCacheKeys: ObjectCacheKey[],
    batch: BatchContext,
  ): ObjectCacheKey[] {
    if (Object.keys(this.orderBy).length === 0) {
      return objectCacheKeys;
    }

    return objectCacheKeys.sort((a, b) => {
      for (const sortFn of this.sortFns) {
        const ret = sortFn(
          batch.read(a)?.value?.$as(this.apiName),
          batch.read(b)?.value?.$as(this.apiName),
        );
        if (ret !== 0) {
          return ret;
        }
      }
      return 0;
    });
  }
}

/**
 * Creates sort functions for an orderBy clause
 * @param orderBy - The order by clause
 * @returns Array of sort functions
 */
export function createOrderBySortFns(
  orderBy: Canonical<Record<string, "asc" | "desc" | undefined>>,
): ObjectInterfaceComparer[] {
  return Object.entries(orderBy).map(([key, order]) => {
    return (
      a: ObjectHolder | InterfaceHolder | undefined,
      b: ObjectHolder | InterfaceHolder | undefined,
    ): number => {
      const aValue = a?.[key];
      const bValue = b?.[key];

      if (aValue == null && bValue == null) {
        return 0;
      }
      if (aValue == null) {
        return 1;
      }
      if (bValue == null) {
        return -1;
      }
      const m = order === "asc" ? -1 : 1;
      return aValue < bValue ? m : aValue > bValue ? -m : 0;
    };
  });
}
