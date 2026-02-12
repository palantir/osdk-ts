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
} from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react/experimental";
import { useMemo } from "react";

export interface PropertyAggregationValue {
  value: string;
  count: number;
}

export interface UsePropertyAggregationResult {
  data: PropertyAggregationValue[];
  maxCount: number;
  isLoading: boolean;
  error: Error | null;
}

export interface UsePropertyAggregationOptions<Q extends ObjectTypeDefinition> {
  objectSet?: ObjectSet<Q>;
  limit?: number;
}

export function usePropertyAggregation<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>(
  objectType: Q,
  propertyKey: K,
  options?: UsePropertyAggregationOptions<Q>,
): UsePropertyAggregationResult {
  // AggregateOpts requires specific property keys from Q, but we're dynamically
  // using propertyKey. The cast is unavoidable for this dynamic filter pattern.
  const aggregateOptions = useMemo(
    () =>
      ({
        $select: { $count: "unordered" as const },
        $groupBy: { [propertyKey as string]: "exact" as const },
      }) as AggregateOpts<Q>,
    [propertyKey],
  );

  const { data: countData, isLoading, error } = useOsdkAggregation(objectType, {
    aggregate: aggregateOptions,
  });

  const result = useMemo(
    (): { data: PropertyAggregationValue[]; maxCount: number } => {
      if (!countData) {
        return { data: [], maxCount: 0 };
      }

      const values: PropertyAggregationValue[] = [];
      let maxCount = 0;

      // The aggregation result type varies by query structure. Since we're building
      // the query dynamically based on propertyKey, we cast to a known shape that
      // matches the $groupBy + $count aggregation pattern.
      const dataArray = countData as Iterable<{
        $group: Record<string, unknown>;
        $count?: number;
      }>;

      for (const item of dataArray) {
        const rawValue = item.$group[propertyKey as string];
        const value = rawValue != null ? String(rawValue) : "";
        const count = item.$count ?? 0;

        if (value) {
          values.push({ value, count });
          maxCount = Math.max(maxCount, count);
        }
      }

      values.sort((a, b) => a.value.localeCompare(b.value));

      if (options?.limit && values.length > options.limit) {
        return { data: values.slice(0, options.limit), maxCount };
      }

      return { data: values, maxCount };
    },
    [countData, propertyKey, options?.limit],
  );

  return {
    data: result.data,
    maxCount: result.maxCount,
    isLoading,
    error: error ?? null,
  };
}
