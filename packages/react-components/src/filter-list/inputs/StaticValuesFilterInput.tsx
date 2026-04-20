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

import type { ObjectTypeDefinition } from "@osdk/api";
import React, { memo, useCallback, useMemo } from "react";
import { assertUnreachable } from "../../shared/assertUnreachable.js";
import { FilterInputExcludeRow } from "../base/FilterInputExcludeRow.js";
import { ListogramInput } from "../base/inputs/ListogramInput.js";
import { MultiSelectInput } from "../base/inputs/MultiSelectInput.js";
import { SingleSelectInput } from "../base/inputs/SingleSelectInput.js";
import { TextTagsInput } from "../base/inputs/TextTagsInput.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { PropertyAggregationValue } from "../types/AggregationTypes.js";
import type { StaticValuesFilterDefinition } from "../types/StaticValuesTypes.js";
import {
  coerceToString,
  coerceToStringArray,
} from "../utils/coerceFilterValue.js";

interface StaticValuesFilterInputProps<Q extends ObjectTypeDefinition> {
  /** The static values filter definition containing values and component config */
  definition: StaticValuesFilterDefinition<Q>;
  /** Current filter state, or undefined if no selection has been made */
  filterState: FilterState | undefined;
  /** Callback fired when the user changes the filter selection */
  onFilterStateChanged: (state: FilterState) => void;
  /** Search term for filtering displayed values within the filter input */
  searchQuery?: string;
  /** Whether the exclude/include toggle row is expanded */
  excludeRowOpen?: boolean;
  /** Whether to show aggregation counts next to option values */
  showCount?: boolean;
}

/**
 * Hooks for EXACT_MATCH state management (used by LISTOGRAM and TEXT_TAGS).
 */
function useExactMatchState(
  filterState: FilterState | undefined,
  onFilterStateChanged: (state: FilterState) => void,
  isExcluding: boolean,
) {
  const selectedValues = useMemo(
    () =>
      filterState?.type === "EXACT_MATCH"
        ? coerceToStringArray(filterState.values)
        : [],
    [filterState],
  );

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

  return { selectedValues, handleClearAll, handleChange };
}

/**
 * Hooks for SELECT state management (used by SINGLE_SELECT and MULTI_SELECT).
 */
function useSelectState(
  filterState: FilterState | undefined,
  onFilterStateChanged: (state: FilterState) => void,
  isExcluding: boolean,
) {
  const selectedValue = useMemo(
    () =>
      filterState?.type === "SELECT"
        ? coerceToString(filterState.selectedValues[0])
        : undefined,
    [filterState],
  );

  const selectedValues = useMemo(
    () =>
      filterState?.type === "SELECT"
        ? coerceToStringArray(filterState.selectedValues)
        : [],
    [filterState],
  );

  const handleClearAll = useCallback(() => {
    onFilterStateChanged({
      type: "SELECT",
      selectedValues: [],
      isExcluding,
    });
  }, [onFilterStateChanged, isExcluding]);

  const handleSingleChange = useCallback(
    (value: string | undefined) => {
      onFilterStateChanged({
        type: "SELECT",
        selectedValues: value !== undefined ? [value] : [],
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  const handleMultiChange = useCallback(
    (selectedValues: string[]) => {
      onFilterStateChanged({
        type: "SELECT",
        selectedValues,
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  return {
    selectedValue,
    selectedValues,
    handleClearAll,
    handleSingleChange,
    handleMultiChange,
  };
}

function StaticValuesFilterInputInner<Q extends ObjectTypeDefinition>({
  definition,
  filterState,
  onFilterStateChanged,
  searchQuery,
  excludeRowOpen,
  showCount,
}: StaticValuesFilterInputProps<Q>): React.ReactElement {
  const aggregationValues: PropertyAggregationValue[] = useMemo(
    () => definition.values.map((value) => ({ value, count: 0 })),
    [definition.values],
  );

  const isExcluding = filterState?.isExcluding ?? false;

  const exactMatch = useExactMatchState(
    filterState,
    onFilterStateChanged,
    isExcluding,
  );
  const select = useSelectState(
    filterState,
    onFilterStateChanged,
    isExcluding,
  );

  switch (definition.filterComponent) {
    case "LISTOGRAM":
      return (
        <FilterInputExcludeRow
          excludeRowOpen={excludeRowOpen}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          totalValueCount={aggregationValues.length}
          onClearAll={exactMatch.handleClearAll}
        >
          <ListogramInput
            values={aggregationValues}
            maxCount={0}
            isLoading={false}
            error={null}
            selectedValues={exactMatch.selectedValues}
            onChange={exactMatch.handleChange}
            colorMap={definition.colorMap}
            displayMode={definition.listogramConfig?.displayMode}
            showCount={showCount}
            isExcluding={isExcluding}
            maxVisibleItems={definition.listogramConfig?.maxVisibleItems ?? 5}
            searchQuery={searchQuery}
            renderValue={definition.renderValue}
          />
        </FilterInputExcludeRow>
      );

    case "SINGLE_SELECT":
      return (
        <FilterInputExcludeRow
          excludeRowOpen={excludeRowOpen}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          totalValueCount={aggregationValues.length}
          onClearAll={select.handleClearAll}
        >
          <SingleSelectInput
            values={aggregationValues}
            isLoading={false}
            error={null}
            selectedValue={select.selectedValue}
            onChange={select.handleSingleChange}
            showCounts={showCount}
            ariaLabel={`Select ${definition.key}`}
            renderValue={definition.renderValue}
          />
        </FilterInputExcludeRow>
      );

    case "MULTI_SELECT":
      return (
        <FilterInputExcludeRow
          excludeRowOpen={excludeRowOpen}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          totalValueCount={aggregationValues.length}
          onClearAll={select.handleClearAll}
        >
          <MultiSelectInput
            values={aggregationValues}
            isLoading={false}
            error={null}
            selectedValues={select.selectedValues}
            onChange={select.handleMultiChange}
            showCounts={showCount}
            ariaLabel={`Search ${definition.key} values`}
            renderValue={definition.renderValue}
          />
        </FilterInputExcludeRow>
      );

    case "TEXT_TAGS":
      return (
        <FilterInputExcludeRow
          excludeRowOpen={excludeRowOpen}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          totalValueCount={aggregationValues.length}
          onClearAll={exactMatch.handleClearAll}
        >
          <TextTagsInput
            suggestions={aggregationValues}
            isLoading={false}
            error={null}
            tags={exactMatch.selectedValues}
            onChange={exactMatch.handleChange}
          />
        </FilterInputExcludeRow>
      );

    default:
      return assertUnreachable(definition.filterComponent);
  }
}

export const StaticValuesFilterInput: typeof StaticValuesFilterInputInner =
  memo(
    StaticValuesFilterInputInner,
  ) as typeof StaticValuesFilterInputInner;
