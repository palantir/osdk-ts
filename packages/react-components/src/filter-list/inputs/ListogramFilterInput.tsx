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
import { ListogramInput } from "../base/inputs/ListogramInput.js";
import type { FilterState } from "../FilterListItemApi.js";
import { usePropertyAggregation } from "../hooks/usePropertyAggregation.js";
import { coerceToStringArray } from "../utils/coerceFilterValue.js";

interface ListogramFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet?: ObjectSet<Q>;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  whereClause: WhereClause<Q>;
  colorMap?: Record<string, string>;
  displayMode?: "full" | "count" | "minimal";
  maxVisibleItems?: number;
  searchQuery?: string;
  excludeRowOpen?: boolean;
  renderValue?: (value: string) => string;
}

function ListogramFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  propertyKey,
  filterState,
  onFilterStateChanged,
  whereClause,
  colorMap,
  displayMode,
  maxVisibleItems,
  searchQuery,
  excludeRowOpen,
  renderValue,
}: ListogramFilterInputProps<Q>): React.ReactElement {
  const selectedValues = useMemo(
    () =>
      filterState?.type === "EXACT_MATCH"
        ? coerceToStringArray(filterState.values)
        : [],
    [filterState],
  );
  const isExcluding = filterState?.isExcluding ?? false;

  const handleClearAll = useCallback(() => {
    onFilterStateChanged({
      type: "EXACT_MATCH",
      values: [],
      isExcluding,
    });
  }, [onFilterStateChanged, isExcluding]);

  const handleChange = useCallback(
    (values: string[]) => {
      onFilterStateChanged({
        type: "EXACT_MATCH",
        values,
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  const sortBy = displayMode === "minimal"
    ? "value" as const
    : "count" as const;
  const aggregationOptions = useMemo(
    () => ({ where: whereClause, sortBy }),
    [whereClause, sortBy],
  );

  const { data, maxCount, isLoading, error } = usePropertyAggregation(
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
      onClearAll={handleClearAll}
    >
      <ListogramInput
        values={data}
        maxCount={maxCount}
        isLoading={isLoading}
        error={error}
        selectedValues={selectedValues}
        onChange={handleChange}
        colorMap={colorMap}
        displayMode={displayMode}
        isExcluding={isExcluding}
        maxVisibleItems={maxVisibleItems}
        searchQuery={searchQuery}
        renderValue={renderValue}
      />
    </FilterInputExcludeRow>
  );
}

export const ListogramFilterInput: typeof ListogramFilterInputInner = memo(
  ListogramFilterInputInner,
) as typeof ListogramFilterInputInner;
