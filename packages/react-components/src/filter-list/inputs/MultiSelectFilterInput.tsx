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
import {
  MultiSelectInput,
  type MultiSelectInputLayout,
} from "../base/inputs/MultiSelectInput.js";
import type { FilterState } from "../FilterListItemApi.js";
import { useFilterPropertyAggregation } from "../hooks/useFilterPropertyAggregation.js";
import {
  EMPTY_LINKED_FILTERS,
  type LinkedFilter,
} from "../types/LinkedFilterTypes.js";
import { coerceToStringArray } from "../utils/coerceFilterValue.js";

interface MultiSelectFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q | undefined;
  objectSet?: ObjectSet<Q>;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  whereClause: WhereClause<Q>;
  linkedFilters?: ReadonlyArray<LinkedFilter<Q>>;
  showFilteredOutValues?: boolean;
  excludeRowOpen?: boolean;
  renderValue?: (value: string) => React.ReactNode;
  showCount?: boolean;
  layout?: MultiSelectInputLayout;
}

function MultiSelectFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  propertyKey,
  filterState,
  onFilterStateChanged,
  whereClause,
  linkedFilters = EMPTY_LINKED_FILTERS,
  showFilteredOutValues,
  excludeRowOpen,
  renderValue,
  showCount,
  layout,
}: MultiSelectFilterInputProps<Q>): React.ReactElement {
  const selectedValues = useMemo(
    () =>
      filterState?.type === "SELECT"
        ? coerceToStringArray(filterState.selectedValues)
        : [],
    [filterState],
  );
  const isExcluding = filterState?.isExcluding ?? false;

  const handleClearAll = useCallback(() => {
    onFilterStateChanged({
      type: "SELECT",
      selectedValues: [],
      isExcluding,
    });
  }, [onFilterStateChanged, isExcluding]);

  const handleChange = useCallback(
    (selectedValues: string[]) => {
      onFilterStateChanged({
        type: "SELECT",
        selectedValues,
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  const { data, isLoading, error } = useFilterPropertyAggregation(
    objectType,
    propertyKey as PropertyKeys<Q>,
    objectSet,
    whereClause,
    linkedFilters,
    { selectedValues, showFilteredOutValues },
  );

  return (
    <FilterInputExcludeRow
      excludeRowOpen={excludeRowOpen}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      totalValueCount={data.length}
      onClearAll={handleClearAll}
    >
      <MultiSelectInput
        values={data}
        isLoading={isLoading}
        error={error}
        selectedValues={selectedValues}
        onChange={handleChange}
        showCounts={showCount}
        ariaLabel={`Search ${propertyKey} values`}
        renderValue={renderValue}
        layout={layout}
      />
    </FilterInputExcludeRow>
  );
}

export const MultiSelectFilterInput: typeof MultiSelectFilterInputInner = memo(
  MultiSelectFilterInputInner,
) as typeof MultiSelectFilterInputInner;
