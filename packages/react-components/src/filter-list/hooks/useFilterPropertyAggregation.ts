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
import type { LinkedFilter } from "../types/LinkedFilterTypes.js";
import { computeDualScopes } from "../utils/narrowObjectSet.js";
import { useDualScopeAggregation } from "./useDualScopeAggregation.js";
import type { UsePropertyAggregationResult } from "./usePropertyAggregation.js";

export interface UseFilterPropertyAggregationOptions {
  limit?: number;
  sortBy?: "count" | "value";
  selectedValues?: string[];
  showFilteredOutValues?: boolean;
}

export function useFilterPropertyAggregation<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>(
  objectType: Q,
  propertyKey: K,
  objectSet: ObjectSet<Q> | undefined,
  whereClause: WhereClause<Q>,
  linkedFilters: ReadonlyArray<LinkedFilter<Q>>,
  options: UseFilterPropertyAggregationOptions = {},
): UsePropertyAggregationResult {
  const { sortBy, selectedValues, limit, showFilteredOutValues } = options;

  const { scoped, emptySource } = useMemo(
    () =>
      computeDualScopes(
        objectSet,
        whereClause,
        linkedFilters,
        showFilteredOutValues,
      ),
    [objectSet, whereClause, linkedFilters, showFilteredOutValues],
  );

  return useDualScopeAggregation(
    objectType,
    propertyKey,
    scoped,
    emptySource,
    { sortBy, selectedValues, limit },
  );
}
