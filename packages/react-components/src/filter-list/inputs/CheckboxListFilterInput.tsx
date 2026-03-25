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
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import React, { memo, useCallback, useMemo } from "react";
import { FilterInputExcludeRow } from "../base/FilterInputExcludeRow.js";
import { CheckboxListInput } from "../base/inputs/CheckboxListInput.js";
import type { FilterState } from "../FilterListItemApi.js";
import { usePropertyAggregation } from "../hooks/usePropertyAggregation.js";
import { coerceToStringArray } from "../utils/coerceFilterValue.js";

interface CheckboxListFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet: ObjectSet<Q>;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  whereClause: WhereClause<Q>;
  colorMap?: Record<string, string>;
  searchQuery?: string;
  excludeRowOpen?: boolean;
}

function CheckboxListFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  propertyKey,
  filterState,
  onFilterStateChanged,
  whereClause,
  colorMap,
  searchQuery,
  excludeRowOpen,
}: CheckboxListFilterInputProps<Q>): React.ReactElement {
  const selectedValues = useMemo(
    () =>
      filterState?.type === "SELECT"
        ? coerceToStringArray(filterState.selectedValues)
        : [],
    [filterState],
  );
  const isExcluding = filterState?.isExcluding ?? false;

  const handleChange = useCallback(
    (newSelectedValues: string[]) => {
      onFilterStateChanged({
        type: "SELECT",
        selectedValues: newSelectedValues,
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  const aggregationOptions = useMemo(
    () => ({ where: whereClause }),
    [whereClause],
  );

  const { data, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey as PropertyKeys<Q>,
    objectSet,
    aggregationOptions,
  );

  return (
    <FilterInputExcludeRow
      excludeRowOpen={excludeRowOpen}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      totalValueCount={data.length}
    >
      <CheckboxListInput
        values={data}
        isLoading={isLoading}
        error={error}
        selectedValues={selectedValues}
        onChange={handleChange}
        colorMap={colorMap}
        searchQuery={searchQuery}
      />
    </FilterInputExcludeRow>
  );
}

export const CheckboxListFilterInput: typeof CheckboxListFilterInputInner =
  memo(CheckboxListFilterInputInner) as typeof CheckboxListFilterInputInner;
