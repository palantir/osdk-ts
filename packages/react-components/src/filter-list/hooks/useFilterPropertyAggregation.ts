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
import { applyWhereClauseToObjectSet } from "../utils/applyWhereClauseToObjectSet.js";
import { stripLinkEntries } from "../utils/stripLinkEntries.js";
import {
  usePropertyAggregation,
  type UsePropertyAggregationResult,
} from "./usePropertyAggregation.js";

const EMPTY_VALUES: string[] = [];

export interface UseFilterPropertyAggregationOptions {
  limit?: number;
  sortBy?: "count" | "value";
  /** Values to always render (count=0 ghosts when absent from the aggregation). */
  selectedValues?: string[];
  /**
   * When `true` AND `whereClause` contains link entries, runs a second
   * aggregation against the link-entries-stripped scope to discover the wider
   * value universe — values absent from the narrowed scope render as count=0
   * ghosts.
   */
  showFilteredOutValues?: boolean;
}

/**
 * Aggregates a property on `objectSet` narrowed by `whereClause`. When
 * `showFilteredOutValues` is on AND `whereClause` has link entries, also
 * aggregates against the link-stripped scope and merges its values in so
 * they render as count=0 ghosts.
 */
export function useFilterPropertyAggregation<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>(
  objectType: Q,
  propertyKey: K,
  objectSet: ObjectSet<Q> | undefined,
  whereClause: WhereClause<Q>,
  options: UseFilterPropertyAggregationOptions = {},
): UsePropertyAggregationResult {
  const {
    sortBy,
    selectedValues = EMPTY_VALUES,
    limit,
    showFilteredOutValues,
  } = options;

  const { scopedObjectSet, widerObjectSet } = useMemo(() => {
    if (objectSet == null) {
      return { scopedObjectSet: undefined, widerObjectSet: undefined };
    }
    const extended = whereClause as unknown as Record<string, unknown>;
    const scoped = applyWhereClauseToObjectSet(objectSet, extended);
    if (!showFilteredOutValues) {
      return { scopedObjectSet: scoped, widerObjectSet: undefined };
    }
    const stripped = stripLinkEntries(extended);
    const wider = stripped.hadLinkEntries
      ? applyWhereClauseToObjectSet(objectSet, stripped.clause)
      : undefined;
    return { scopedObjectSet: scoped, widerObjectSet: wider };
  }, [objectSet, whereClause, showFilteredOutValues]);

  const isDualScope = widerObjectSet !== undefined;

  // Hooks must be called unconditionally, but passing `undefined` lets the
  // SDK short-circuit the wider aggregation when not in dual scope.
  const widerAggregation = usePropertyAggregation(
    objectType,
    propertyKey,
    widerObjectSet,
  );

  const activeValues = useMemo(() => {
    const fallback = selectedValues.length === 0 ? undefined : selectedValues;
    if (!isDualScope) {
      return fallback;
    }
    if (
      widerAggregation.error != null || widerAggregation.data.length === 0
    ) {
      return fallback;
    }
    return Array.from(
      new Set([
        ...selectedValues,
        ...widerAggregation.data.map((d) => d.value),
      ]),
    );
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
  const primary = usePropertyAggregation(
    objectType,
    propertyKey,
    scopedObjectSet,
    primaryOptions,
  );

  return {
    data: primary.data,
    maxCount: primary.maxCount,
    isLoading: primary.isLoading
      || (isDualScope && widerAggregation.isLoading),
    error: primary.error,
  };
}
