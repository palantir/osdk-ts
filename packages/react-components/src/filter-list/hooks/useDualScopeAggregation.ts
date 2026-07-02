/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectSet, ObjectTypeDefinition, PropertyKeys } from "@osdk/api";
import { useMemo } from "react";

import {
  usePropertyAggregation,
  type UsePropertyAggregationResult,
} from "./usePropertyAggregation.js";

const EMPTY_VALUES: string[] = [];

export interface UseDualScopeAggregationOptions {
  limit?: number;
  sortBy?: "count" | "value";
  selectedValues?: string[];
}

/**
 * Aggregates a property over `scopedObjectSet` (the narrowed scope) and pins
 * any values that exist in `emptySourceObjectSet` (the unfiltered base) but
 * are absent from the narrowed result to count=0, so facets can render
 * "filtered-out" rows alongside live counts.
 *
 * When `emptySourceObjectSet` is `undefined`, this falls through to a single
 * aggregation against `scopedObjectSet` — equivalent to `usePropertyAggregation`
 * with `selectedValues` as the only pinned values.
 *
 * @param objectType - Object type for the aggregation
 * @param propertyKey - Property to aggregate on
 * @param scopedObjectSet - Set the live counts are computed against (post-narrowing)
 * @param emptySourceObjectSet - Unfiltered base set whose values are pinned as
 *   count=0 when absent from the scoped aggregation. Pass `undefined` to skip
 *   the dual-scope behavior.
 * @param options.selectedValues - Values to always include in the result, even
 *   when their count is 0 (e.g. currently-selected filter values)
 * @returns Aggregation against the scoped set, with isLoading reflecting both
 *   queries when dual-scope is active.
 */
export function useDualScopeAggregation<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>(
  objectType: Q,
  propertyKey: K,
  scopedObjectSet: ObjectSet<Q> | undefined,
  emptySourceObjectSet: ObjectSet<Q> | undefined,
  options: UseDualScopeAggregationOptions = {}
): UsePropertyAggregationResult {
  const { sortBy, selectedValues = EMPTY_VALUES, limit } = options;
  const isDualScope = emptySourceObjectSet !== undefined;

  const emptySourceAggregation = usePropertyAggregation(
    objectType,
    propertyKey,
    emptySourceObjectSet
  );

  const activeValues = useMemo(() => {
    const merged = new Set(selectedValues);
    if (isDualScope && emptySourceAggregation.error == null) {
      for (const d of emptySourceAggregation.data) {
        merged.add(d.value);
      }
    }
    return merged.size === 0 ? undefined : Array.from(merged);
  }, [
    isDualScope,
    emptySourceAggregation.data,
    emptySourceAggregation.error,
    selectedValues,
  ]);

  const primary = usePropertyAggregation(
    objectType,
    propertyKey,
    scopedObjectSet,
    { sortBy, activeValues, limit }
  );

  return {
    data: primary.data,
    maxCount: primary.maxCount,
    isLoading:
      primary.isLoading || (isDualScope && emptySourceAggregation.isLoading),
    error: primary.error,
  };
}
