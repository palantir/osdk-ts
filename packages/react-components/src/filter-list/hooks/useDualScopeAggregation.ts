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

import type {
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import { useMemo } from "react";
import {
  usePropertyAggregation,
  type UsePropertyAggregationResult,
} from "./usePropertyAggregation.js";

const EMPTY_VALUES: string[] = [];

export interface UseDualScopeAggregationOptions<
  Q extends ObjectTypeDefinition = ObjectTypeDefinition,
> {
  /** Cap on the number of returned values (forwarded to the narrowed aggregation). */
  limit?: number;
  /** Per-filter where clause excluding this facet's own selection. */
  where?: WhereClause<Q>;
  /** Sort order for the returned values. */
  sortBy?: "count" | "value";
  /** Currently-selected values that should always render (even at count=0). */
  selectedValues?: string[];
}

/**
 * Aggregates a property under one or two scopes, depending on whether a
 * separate `baseObjectSet` is provided.
 *
 * - **Single-scope** (`baseObjectSet` is undefined OR the same reference as
 *   `objectSet`): equivalent to a plain `usePropertyAggregation(objectType,
 *   propertyKey, objectSet, options)` call. Returns its result directly.
 *
 * - **Dual-scope** (`baseObjectSet` provided AND distinct from `objectSet`):
 *   runs two aggregations — one against `baseObjectSet` to discover the
 *   universe of values, and the primary one against `objectSet`. The base
 *   values are merged into `activeValues` so that values present in the base
 *   scope but absent under narrowing render as count=0 ghost entries.
 *
 * `isLoading` reflects either query loading. `error` is the primary
 * (narrowed) aggregation's error. If the base aggregation fails in dual-scope
 * mode, ghost rendering silently degrades — the narrowed view is still
 * correct, but base-only values are not surfaced. A `console.warn` fires in
 * non-production builds.
 *
 * Hooks are called unconditionally regardless of scope; in single-scope mode
 * the second `usePropertyAggregation` uses the same `objectSet` and `where`
 * as the first, so the observable client dedupes at the wire layer (no extra
 * network traffic) and the React-side cost is one extra result-shaping pass.
 */
export function useDualScopeAggregation<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>(
  objectType: Q,
  propertyKey: K,
  objectSet: ObjectSet<Q> | undefined,
  baseObjectSet: ObjectSet<Q> | undefined,
  options: UseDualScopeAggregationOptions<Q> = {},
): UsePropertyAggregationResult {
  const { where, sortBy, selectedValues = EMPTY_VALUES, limit } = options;
  const isDualScope = baseObjectSet != null && baseObjectSet !== objectSet;

  // Base scope discovery. In single-scope mode we still call the hook for
  // structural stability, but its data is unused; the wire layer dedupes
  // against the primary call so no extra network request fires.
  const baseOptions = useMemo(() => ({ where }), [where]);
  const baseAggregation = usePropertyAggregation(
    objectType,
    propertyKey,
    isDualScope ? baseObjectSet : objectSet,
    baseOptions,
  );

  const activeValues = useMemo(() => {
    if (!isDualScope) {
      return selectedValues.length === 0 ? undefined : selectedValues;
    }
    if (baseAggregation.error != null) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn(
          "[useDualScopeAggregation] base aggregation failed; ghost rendering degraded.",
          baseAggregation.error,
        );
      }
      return selectedValues.length === 0 ? undefined : selectedValues;
    }
    const baseValues = baseAggregation.data.map((d) => d.value);
    if (baseValues.length === 0) {
      return selectedValues.length === 0 ? undefined : selectedValues;
    }
    return Array.from(new Set([...selectedValues, ...baseValues]));
  }, [
    isDualScope,
    baseAggregation.data,
    baseAggregation.error,
    selectedValues,
  ]);

  const primaryOptions = useMemo(
    () => ({ where, sortBy, activeValues, limit }),
    [where, sortBy, activeValues, limit],
  );
  const primaryAggregation = usePropertyAggregation(
    objectType,
    propertyKey,
    objectSet,
    primaryOptions,
  );

  const isLoading = primaryAggregation.isLoading
    || (isDualScope && baseAggregation.isLoading);

  return useMemo(
    () => ({
      data: primaryAggregation.data,
      maxCount: primaryAggregation.maxCount,
      isLoading,
      error: primaryAggregation.error,
    }),
    [
      primaryAggregation.data,
      primaryAggregation.maxCount,
      isLoading,
      primaryAggregation.error,
    ],
  );
}
