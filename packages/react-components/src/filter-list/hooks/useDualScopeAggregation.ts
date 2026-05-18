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
  /** Cap on the number of returned values (forwarded to the narrowed aggregation). */
  limit?: number;
  /** Sort order for the returned values. */
  sortBy?: "count" | "value";
  /** Currently-selected values that should always render (even at count=0). */
  selectedValues?: string[];
}

/**
 * Aggregates a property under one or two pre-computed object-set scopes.
 *
 * - **Single-scope** (`widerObjectSet` undefined OR same reference as
 *   `scopedObjectSet`): equivalent to a plain `usePropertyAggregation` call
 *   against `scopedObjectSet`. Returns its result directly.
 *
 * - **Dual-scope** (`widerObjectSet` distinct from `scopedObjectSet`): runs two
 *   aggregations — one against `widerObjectSet` to discover the value universe,
 *   one against `scopedObjectSet` for the primary counts. The wider values are
 *   merged into `activeValues` so that values present in the wider scope but
 *   absent in the narrowed scope render as count=0 ghost entries.
 *
 * Callers compute the two scopes externally (typically via
 * `applyWhereClauseToObjectSet`); the hook itself is scope-shape agnostic.
 *
 * `isLoading` reflects either query loading. `error` is the primary
 * aggregation's error. If the wider aggregation fails in dual-scope mode,
 * ghost rendering silently degrades — the narrowed view is still correct.
 *
 * Hooks are called unconditionally regardless of scope; in single-scope mode
 * the second `usePropertyAggregation` uses the same arguments as the first,
 * so the observable client dedupes at the wire layer.
 */
export function useDualScopeAggregation<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>(
  objectType: Q,
  propertyKey: K,
  scopedObjectSet: ObjectSet<Q> | undefined,
  widerObjectSet: ObjectSet<Q> | undefined,
  options: UseDualScopeAggregationOptions = {},
): UsePropertyAggregationResult {
  const { sortBy, selectedValues = EMPTY_VALUES, limit } = options;
  const isDualScope = widerObjectSet != null
    && widerObjectSet !== scopedObjectSet;

  const widerAggregation = usePropertyAggregation(
    objectType,
    propertyKey,
    isDualScope ? widerObjectSet : scopedObjectSet,
  );

  const activeValues = useMemo(() => {
    const fallback = selectedValues.length === 0 ? undefined : selectedValues;
    const skipMerge = !isDualScope
      || widerAggregation.error != null
      || widerAggregation.data.length === 0;
    if (skipMerge) {
      return fallback;
    }
    const widerValues = widerAggregation.data.map((d) => d.value);
    return Array.from(new Set([...selectedValues, ...widerValues]));
  }, [
    isDualScope,
    widerAggregation.data,
    widerAggregation.error,
    selectedValues,
  ]);

  const primaryOptions = useMemo(
    () => ({ sortBy, activeValues, limit }),
    [sortBy, activeValues, limit],
  );
  const primaryAggregation = usePropertyAggregation(
    objectType,
    propertyKey,
    scopedObjectSet,
    primaryOptions,
  );

  const isLoading = primaryAggregation.isLoading
    || (isDualScope && widerAggregation.isLoading);

  return {
    data: primaryAggregation.data,
    maxCount: primaryAggregation.maxCount,
    isLoading,
    error: primaryAggregation.error,
  };
}
