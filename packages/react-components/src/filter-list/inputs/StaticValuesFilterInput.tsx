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
  definition: StaticValuesFilterDefinition<Q>;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  searchQuery?: string;
  excludeRowOpen?: boolean;
}

function StaticValuesFilterInputInner<Q extends ObjectTypeDefinition>({
  definition,
  filterState,
  onFilterStateChanged,
  searchQuery,
  excludeRowOpen,
}: StaticValuesFilterInputProps<Q>): React.ReactElement {
  const aggregationValues: PropertyAggregationValue[] = useMemo(
    () => definition.values.map((value) => ({ value, count: 0 })),
    [definition.values],
  );

  const isExcluding = filterState?.isExcluding ?? false;

  switch (definition.filterComponent) {
    case "LISTOGRAM":
      return (
        <StaticListogramInput
          values={aggregationValues}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          isExcluding={isExcluding}
          colorMap={definition.colorMap}
          displayMode={definition.listogramConfig?.displayMode}
          maxVisibleItems={definition.listogramConfig?.maxVisibleItems ?? 5}
          searchQuery={searchQuery}
          excludeRowOpen={excludeRowOpen}
          renderValue={definition.renderValue}
        />
      );

    case "SINGLE_SELECT":
      return (
        <StaticSingleSelectInput
          values={aggregationValues}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          isExcluding={isExcluding}
          excludeRowOpen={excludeRowOpen}
          filterKey={definition.key}
          renderValue={definition.renderValue}
        />
      );

    case "MULTI_SELECT":
      return (
        <StaticMultiSelectInput
          values={aggregationValues}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          isExcluding={isExcluding}
          excludeRowOpen={excludeRowOpen}
          filterKey={definition.key}
          renderValue={definition.renderValue}
        />
      );

    case "TEXT_TAGS":
      return (
        <StaticTextTagsInput
          values={aggregationValues}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          isExcluding={isExcluding}
          excludeRowOpen={excludeRowOpen}
        />
      );
  }
}

export const StaticValuesFilterInput: typeof StaticValuesFilterInputInner =
  memo(
    StaticValuesFilterInputInner,
  ) as typeof StaticValuesFilterInputInner;

// --- Sub-components for each filter component type ---

interface StaticListogramInputProps {
  values: PropertyAggregationValue[];
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  isExcluding: boolean;
  colorMap?: Record<string, string>;
  displayMode?: "full" | "count" | "minimal";
  maxVisibleItems: number;
  searchQuery?: string;
  excludeRowOpen?: boolean;
  renderValue?: (value: string) => string;
}

const StaticListogramInput = memo(function StaticListogramInput({
  values,
  filterState,
  onFilterStateChanged,
  isExcluding,
  colorMap,
  displayMode,
  maxVisibleItems,
  searchQuery,
  excludeRowOpen,
  renderValue,
}: StaticListogramInputProps): React.ReactElement {
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

  return (
    <FilterInputExcludeRow
      excludeRowOpen={excludeRowOpen}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      totalValueCount={values.length}
      onClearAll={handleClearAll}
    >
      <ListogramInput
        values={values}
        maxCount={0}
        isLoading={false}
        error={null}
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
});

interface StaticSingleSelectInputProps {
  values: PropertyAggregationValue[];
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  isExcluding: boolean;
  excludeRowOpen?: boolean;
  filterKey: string;
  renderValue?: (value: string) => string;
}

const StaticSingleSelectInput = memo(function StaticSingleSelectInput({
  values,
  filterState,
  onFilterStateChanged,
  isExcluding,
  excludeRowOpen,
  filterKey,
  renderValue,
}: StaticSingleSelectInputProps): React.ReactElement {
  const selectedValue = useMemo(
    () =>
      filterState?.type === "SELECT"
        ? coerceToString(filterState.selectedValues[0])
        : undefined,
    [filterState],
  );

  const handleClearAll = useCallback(() => {
    onFilterStateChanged({
      type: "SELECT",
      selectedValues: [],
      isExcluding,
    });
  }, [onFilterStateChanged, isExcluding]);

  const handleChange = useCallback(
    (value: string | undefined) => {
      onFilterStateChanged({
        type: "SELECT",
        selectedValues: value !== undefined ? [value] : [],
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  return (
    <FilterInputExcludeRow
      excludeRowOpen={excludeRowOpen}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      totalValueCount={values.length}
      onClearAll={handleClearAll}
    >
      <SingleSelectInput
        values={values}
        isLoading={false}
        error={null}
        selectedValue={selectedValue}
        onChange={handleChange}
        ariaLabel={`Select ${filterKey}`}
        renderValue={renderValue}
      />
    </FilterInputExcludeRow>
  );
});

interface StaticMultiSelectInputProps {
  values: PropertyAggregationValue[];
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  isExcluding: boolean;
  excludeRowOpen?: boolean;
  filterKey: string;
  renderValue?: (value: string) => string;
}

const StaticMultiSelectInput = memo(function StaticMultiSelectInput({
  values,
  filterState,
  onFilterStateChanged,
  isExcluding,
  excludeRowOpen,
  filterKey,
  renderValue,
}: StaticMultiSelectInputProps): React.ReactElement {
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

  return (
    <FilterInputExcludeRow
      excludeRowOpen={excludeRowOpen}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      totalValueCount={values.length}
      onClearAll={handleClearAll}
    >
      <MultiSelectInput
        values={values}
        isLoading={false}
        error={null}
        selectedValues={selectedValues}
        onChange={handleChange}
        ariaLabel={`Search ${filterKey} values`}
        renderValue={renderValue}
      />
    </FilterInputExcludeRow>
  );
});

interface StaticTextTagsInputProps {
  values: PropertyAggregationValue[];
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  isExcluding: boolean;
  excludeRowOpen?: boolean;
}

const StaticTextTagsInput = memo(function StaticTextTagsInput({
  values,
  filterState,
  onFilterStateChanged,
  isExcluding,
  excludeRowOpen,
}: StaticTextTagsInputProps): React.ReactElement {
  const tags = useMemo(
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

  return (
    <FilterInputExcludeRow
      excludeRowOpen={excludeRowOpen}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      totalValueCount={values.length}
      onClearAll={handleClearAll}
    >
      <TextTagsInput
        suggestions={values}
        isLoading={false}
        error={null}
        tags={tags}
        onChange={handleChange}
      />
    </FilterInputExcludeRow>
  );
});
