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

import type {
  AggregateOpts,
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react";
import { useMemo } from "react";

import type { AggregationGroupResult } from "../utils/aggregationHelpers.js";
import { dedupeEmptyAggregationRows, NO_VALUE } from "../utils/filterValues.js";

export type { PropertyAggregationValue } from "../types/AggregationTypes.js";

import type { PropertyAggregationValue } from "../types/AggregationTypes.js";

export interface UsePropertyAggregationResult {
  data: PropertyAggregationValue[];
  maxCount: number;
  isLoading: boolean;
  error: Error | null;
}

const EMPTY_ACTIVE_VALUES: string[] = [];

export interface UsePropertyAggregationOptions<
  Q extends ObjectTypeDefinition = ObjectTypeDefinition,
> {
  limit?: number;
  where?: WhereClause<Q>;
  sortBy?: "count" | "value";
  /** Selected values to include in results even when they have zero matching
   *  rows (e.g. saved filter selections from initialFilterStates). */
  activeValues?: string[];
}

export function usePropertyAggregation<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>(
  objectType: Q,
  propertyKey: K,
  objectSet: ObjectSet<Q> | undefined,
  options?: UsePropertyAggregationOptions<Q>
): UsePropertyAggregationResult {
  // AggregateOpts requires specific property keys from Q, but we're dynamically
  // using propertyKey. The cast is unavoidable for this dynamic filter pattern.
  const aggregateOptions = useMemo(
    () =>
      ({
        $select: { $count: "unordered" as const },
        $groupBy: {
          [propertyKey as string]: {
            $exact: { $includeNullValue: true },
          },
        },
      }) as AggregateOpts<Q>,
    [propertyKey]
  );

  const aggregationArgs = useMemo(
    () => ({ aggregate: aggregateOptions, where: options?.where, objectSet }),
    [aggregateOptions, options?.where, objectSet]
  );

  const {
    data: countData,
    isLoading,
    error,
  } = useOsdkAggregation(objectType, aggregationArgs);

  const activeValues = options?.activeValues ?? EMPTY_ACTIVE_VALUES;

  const result = useMemo((): {
    data: PropertyAggregationValue[];
    maxCount: number;
  } => {
    if (!countData) {
      return { data: [], maxCount: 0 };
    }

    const values: PropertyAggregationValue[] = [];
    let maxCount = 0;

    // The aggregation result type varies by query structure. Since we're building
    // the query dynamically based on propertyKey, we cast to a known shape that
    // matches the $groupBy + $count aggregation pattern.
    const dataArray = countData as AggregationGroupResult;

    // Build a set of values present in the aggregation so we can identify
    // which active selections need to be synthesized as filtered-out entries.
    const existingValues = new Set<string>();
    for (const item of dataArray) {
      const raw = item.$group[propertyKey as string];
      existingValues.add(raw == null ? NO_VALUE : String(raw));
    }

    // Synthesize filtered-out entries for active selections absent from
    // aggregation results (e.g. saved filters with zero matching rows). They
    // use the same shape as real entries so the loop below handles isNull
    // uniformly.
    const filteredOutEntries = activeValues.flatMap((v) =>
      existingValues.has(v)
        ? []
        : [{ $group: { [propertyKey as string]: v }, $count: 0 }]
    );

    for (const item of [...dataArray, ...filteredOutEntries]) {
      const rawValue = item.$group[propertyKey as string];
      const count = item.$count ?? 0;

      if (rawValue == null) {
        values.push({ value: NO_VALUE, count, isNull: true });
      } else {
        values.push({ value: String(rawValue), count });
      }
      maxCount = Math.max(maxCount, count);
    }

    const deduped = dedupeEmptyAggregationRows(values);

    const sortBy = options?.sortBy ?? "count";
    if (sortBy === "count") {
      deduped.sort(
        (a, b) => b.count - a.count || a.value.localeCompare(b.value)
      );
    } else {
      deduped.sort((a, b) => a.value.localeCompare(b.value));
    }

    if (options?.limit && deduped.length > options.limit) {
      return { data: deduped.slice(0, options.limit), maxCount };
    }

    return { data: deduped, maxCount };
  }, [countData, propertyKey, options?.limit, options?.sortBy, activeValues]);

  return {
    data: result.data,
    maxCount: result.maxCount,
    isLoading,
    error: error ?? null,
  };
}
