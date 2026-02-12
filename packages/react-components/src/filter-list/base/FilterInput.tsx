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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import React, { memo, useCallback } from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import {
  coerceToString,
  coerceToStringArray,
} from "../utils/coerceFilterValue.js";
import { FilterInputErrorBoundary } from "./FilterInputErrorBoundary.js";
import { CheckboxListInput } from "./inputs/CheckboxListInput.js";
import { ContainsTextInput } from "./inputs/ContainsTextInput.js";
import { DateRangeInput } from "./inputs/DateRangeInput.js";
import { LinkedPropertyInput } from "./inputs/LinkedPropertyInput.js";
import { ListogramInput } from "./inputs/ListogramInput.js";
import { MultiDateInput } from "./inputs/MultiDateInput.js";
import { MultiSelectInput } from "./inputs/MultiSelectInput.js";
import { NullValueWrapper } from "./inputs/NullValueWrapper.js";
import { NumberRangeInput } from "./inputs/NumberRangeInput.js";
import { SingleDateInput } from "./inputs/SingleDateInput.js";
import { SingleSelectInput } from "./inputs/SingleSelectInput.js";
import { TextTagsInput } from "./inputs/TextTagsInput.js";
import { TimelineInput } from "./inputs/TimelineInput.js";
import { ToggleInput } from "./inputs/ToggleInput.js";

interface FilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet: ObjectSet<Q>;
  definition: FilterDefinitionUnion<Q>;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function FilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  definition,
  filterState,
  onFilterStateChanged,
}: FilterInputProps<Q>): React.ReactElement {
  const content = (
    <FilterInputContent
      objectType={objectType}
      objectSet={objectSet}
      definition={definition}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
    />
  );

  return <FilterInputErrorBoundary>{content}</FilterInputErrorBoundary>;
}

export const FilterInput = memo(FilterInputInner) as typeof FilterInputInner;

function FilterInputContent<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  definition,
  filterState,
  onFilterStateChanged,
}: FilterInputProps<Q>): React.ReactElement {
  switch (definition.type) {
    case "HAS_LINK":
      return (
        <HasLinkInput
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "LINKED_PROPERTY":
      return (
        <LinkedPropertyInput
          objectSet={objectSet}
          definition={definition}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "KEYWORD_SEARCH":
      return (
        <KeywordSearchInput
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          placeholder={definition.label ?? "Search..."}
        />
      );

    case "CUSTOM": {
      if (!definition.renderInput) {
        return (
          <div data-unsupported="true">Custom filter missing renderInput</div>
        );
      }
      const customFilterState = filterState?.type === "custom"
        ? filterState
        : definition.filterState;
      return (
        <>
          {definition.renderInput({
            objectSet,
            filterState: customFilterState,
            onFilterStateChanged: (state) => onFilterStateChanged(state),
          })}
        </>
      );
    }

    case "PROPERTY":
      return (
        <PropertyFilterInput
          objectType={objectType}
          objectSet={objectSet}
          definition={definition}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    default:
      return <div data-unsupported="true">Unsupported filter type</div>;
  }
}

interface HasLinkInputProps {
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

const HasLinkInput = memo(function HasLinkInput({
  filterState,
  onFilterStateChanged,
}: HasLinkInputProps): React.ReactElement {
  const hasLink = filterState?.type === "hasLink"
    ? filterState.hasLink
    : false;

  const handleChange = useCallback(
    (hasLink: boolean) => {
      onFilterStateChanged({ type: "hasLink", hasLink });
    },
    [onFilterStateChanged],
  );

  return <ToggleInput enabled={hasLink} onChange={handleChange} />;
});

interface KeywordSearchInputProps {
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  placeholder: string;
}

const KeywordSearchInput = memo(function KeywordSearchInput({
  filterState,
  onFilterStateChanged,
  placeholder,
}: KeywordSearchInputProps): React.ReactElement {
  const searchTerm = filterState?.type === "keywordSearch"
    ? filterState.searchTerm
    : undefined;
  const operator = filterState?.type === "keywordSearch"
    ? filterState.operator
    : "AND";

  const handleChange = useCallback(
    (newSearchTerm: string | undefined) => {
      onFilterStateChanged({
        type: "keywordSearch",
        searchTerm: newSearchTerm ?? "",
        operator,
      });
    },
    [onFilterStateChanged, operator],
  );

  return (
    <ContainsTextInput
      value={searchTerm}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
});

interface PropertyFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet: ObjectSet<Q>;
  definition: Extract<FilterDefinitionUnion<Q>, { type: "PROPERTY" }>;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function PropertyFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  definition,
  filterState,
  onFilterStateChanged,
}: PropertyFilterInputProps<Q>): React.ReactElement {
  switch (definition.filterComponent) {
    case "CHECKBOX_LIST":
      return (
        <CheckboxListFilterInput
          objectType={objectType}
          objectSet={objectSet}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "CONTAINS_TEXT":
      return (
        <ContainsTextFilterInput
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "TOGGLE":
      return (
        <ToggleFilterInput
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "NUMBER_RANGE":
      return (
        <NumberRangeFilterInput
          objectType={objectType}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "DATE_RANGE":
      return (
        <DateRangeFilterInput
          objectType={objectType}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "SINGLE_SELECT":
      return (
        <SingleSelectFilterInput
          objectType={objectType}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "MULTI_SELECT":
      return (
        <MultiSelectFilterInput
          objectType={objectType}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "SINGLE_DATE":
      return (
        <SingleDateFilterInput
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "MULTI_DATE":
      return (
        <MultiDateFilterInput
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "LISTOGRAM":
      return (
        <ListogramFilterInput
          objectType={objectType}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "TEXT_TAGS":
      return (
        <TextTagsFilterInput
          objectType={objectType}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "TIMELINE":
      return (
        <TimelineFilterInput
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    default:
      return (
        <div data-unsupported="true">
          Unsupported filter component: {definition.filterComponent}
        </div>
      );
  }
}

const PropertyFilterInput = memo(
  PropertyFilterInputInner,
) as typeof PropertyFilterInputInner;

interface CheckboxListFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet: ObjectSet<Q>;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function CheckboxListFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  propertyKey,
  filterState,
  onFilterStateChanged,
}: CheckboxListFilterInputProps<Q>): React.ReactElement {
  const selectedValues = filterState?.type === "SELECT"
    ? filterState.selectedValues as string[]
    : [];
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

  return (
    <CheckboxListInput
      objectType={objectType}
      objectSet={objectSet}
      propertyKey={propertyKey}
      selectedValues={selectedValues}
      onChange={handleChange}
    />
  );
}

const CheckboxListFilterInput = memo(
  CheckboxListFilterInputInner,
) as typeof CheckboxListFilterInputInner;

interface ContainsTextFilterInputProps {
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

const ContainsTextFilterInput = memo(function ContainsTextFilterInput({
  propertyKey,
  filterState,
  onFilterStateChanged,
}: ContainsTextFilterInputProps): React.ReactElement {
  const value = filterState?.type === "CONTAINS_TEXT"
    ? filterState.value
    : undefined;

  const handleChange = useCallback(
    (value: string | undefined) => {
      onFilterStateChanged({ type: "CONTAINS_TEXT", value });
    },
    [onFilterStateChanged],
  );

  return (
    <ContainsTextInput
      value={value}
      onChange={handleChange}
      placeholder={`Search ${propertyKey}...`}
    />
  );
});

interface ToggleFilterInputProps {
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

const ToggleFilterInput = memo(function ToggleFilterInput({
  filterState,
  onFilterStateChanged,
}: ToggleFilterInputProps): React.ReactElement {
  const enabled = filterState?.type === "TOGGLE" ? filterState.enabled : false;

  const handleChange = useCallback(
    (enabled: boolean) => {
      onFilterStateChanged({ type: "TOGGLE", enabled });
    },
    [onFilterStateChanged],
  );

  return <ToggleInput enabled={enabled} onChange={handleChange} />;
});

interface NumberRangeFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function NumberRangeFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  filterState,
  onFilterStateChanged,
}: NumberRangeFilterInputProps<Q>): React.ReactElement {
  const nr = filterState?.type === "NUMBER_RANGE" ? filterState : undefined;
  const includeNull = filterState?.includeNull;

  const handleNullChange = useCallback(
    (includeNull: boolean) => {
      onFilterStateChanged({
        type: "NUMBER_RANGE",
        minValue: nr?.minValue,
        maxValue: nr?.maxValue,
        includeNull,
      });
    },
    [onFilterStateChanged, nr?.minValue, nr?.maxValue],
  );

  const handleRangeChange = useCallback(
    (minValue: number | undefined, maxValue: number | undefined) => {
      onFilterStateChanged({
        type: "NUMBER_RANGE",
        minValue,
        maxValue,
        includeNull,
      });
    },
    [onFilterStateChanged, includeNull],
  );

  return (
    <NullValueWrapper
      objectType={objectType}
      propertyKey={propertyKey}
      includeNull={includeNull}
      onIncludeNullChange={handleNullChange}
    >
      <NumberRangeInput
        objectType={objectType}
        propertyKey={propertyKey}
        minValue={nr?.minValue}
        maxValue={nr?.maxValue}
        onChange={handleRangeChange}
      />
    </NullValueWrapper>
  );
}

const NumberRangeFilterInput = memo(
  NumberRangeFilterInputInner,
) as typeof NumberRangeFilterInputInner;

interface DateRangeFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function DateRangeFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  filterState,
  onFilterStateChanged,
}: DateRangeFilterInputProps<Q>): React.ReactElement {
  const dr = filterState?.type === "DATE_RANGE" ? filterState : undefined;
  const includeNull = filterState?.includeNull;

  const handleNullChange = useCallback(
    (includeNull: boolean) => {
      onFilterStateChanged({
        type: "DATE_RANGE",
        minValue: dr?.minValue,
        maxValue: dr?.maxValue,
        includeNull,
      });
    },
    [onFilterStateChanged, dr?.minValue, dr?.maxValue],
  );

  const handleRangeChange = useCallback(
    (minValue: Date | undefined, maxValue: Date | undefined) => {
      onFilterStateChanged({
        type: "DATE_RANGE",
        minValue,
        maxValue,
        includeNull,
      });
    },
    [onFilterStateChanged, includeNull],
  );

  return (
    <NullValueWrapper
      objectType={objectType}
      propertyKey={propertyKey}
      includeNull={includeNull}
      onIncludeNullChange={handleNullChange}
    >
      <DateRangeInput
        objectType={objectType}
        propertyKey={propertyKey}
        minValue={dr?.minValue}
        maxValue={dr?.maxValue}
        onChange={handleRangeChange}
      />
    </NullValueWrapper>
  );
}

const DateRangeFilterInput = memo(
  DateRangeFilterInputInner,
) as typeof DateRangeFilterInputInner;

interface SingleSelectFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function SingleSelectFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  filterState,
  onFilterStateChanged,
}: SingleSelectFilterInputProps<Q>): React.ReactElement {
  const selectedValue = filterState?.type === "SELECT"
    ? coerceToString(
      filterState.selectedValues[0] as string | boolean | number | undefined,
    )
    : undefined;
  const isExcluding = filterState?.isExcluding ?? false;

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
    <SingleSelectInput
      objectType={objectType}
      propertyKey={propertyKey}
      selectedValue={selectedValue}
      onChange={handleChange}
    />
  );
}

const SingleSelectFilterInput = memo(
  SingleSelectFilterInputInner,
) as typeof SingleSelectFilterInputInner;

interface MultiSelectFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function MultiSelectFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  filterState,
  onFilterStateChanged,
}: MultiSelectFilterInputProps<Q>): React.ReactElement {
  const selectedValues = filterState?.type === "SELECT"
    ? coerceToStringArray(
      filterState.selectedValues as (string | boolean | number)[],
    )
    : [];
  const isExcluding = filterState?.isExcluding ?? false;

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
    <MultiSelectInput
      objectType={objectType}
      propertyKey={propertyKey}
      selectedValues={selectedValues}
      onChange={handleChange}
    />
  );
}

const MultiSelectFilterInput = memo(
  MultiSelectFilterInputInner,
) as typeof MultiSelectFilterInputInner;

interface SingleDateFilterInputProps {
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

const SingleDateFilterInput = memo(function SingleDateFilterInput({
  filterState,
  onFilterStateChanged,
}: SingleDateFilterInputProps): React.ReactElement {
  const selectedDate = filterState?.type === "SELECT"
    ? (filterState.selectedValues[0] instanceof Date
      ? filterState.selectedValues[0]
      : undefined)
    : undefined;
  const isExcluding = filterState?.isExcluding ?? false;

  const handleChange = useCallback(
    (selectedDate: Date | undefined) => {
      onFilterStateChanged({
        type: "SELECT",
        selectedValues: selectedDate !== undefined ? [selectedDate] : [],
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  return (
    <SingleDateInput selectedDate={selectedDate} onChange={handleChange} />
  );
});

interface MultiDateFilterInputProps {
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

const MultiDateFilterInput = memo(function MultiDateFilterInput({
  filterState,
  onFilterStateChanged,
}: MultiDateFilterInputProps): React.ReactElement {
  const selectedDates = filterState?.type === "SELECT"
    ? filterState.selectedValues.filter((v): v is Date => v instanceof Date)
    : [];
  const isExcluding = filterState?.isExcluding ?? false;

  const handleChange = useCallback(
    (selectedDates: Date[]) => {
      onFilterStateChanged({
        type: "SELECT",
        selectedValues: selectedDates,
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  return (
    <MultiDateInput selectedDates={selectedDates} onChange={handleChange} />
  );
});

interface ListogramFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function ListogramFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  filterState,
  onFilterStateChanged,
}: ListogramFilterInputProps<Q>): React.ReactElement {
  const selectedValues = filterState?.type === "EXACT_MATCH"
    ? coerceToStringArray(filterState.values)
    : [];
  const isExcluding = filterState?.isExcluding ?? false;

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
    <ListogramInput
      objectType={objectType}
      propertyKey={propertyKey}
      selectedValues={selectedValues}
      onChange={handleChange}
    />
  );
}

const ListogramFilterInput = memo(
  ListogramFilterInputInner,
) as typeof ListogramFilterInputInner;

interface TextTagsFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function TextTagsFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  filterState,
  onFilterStateChanged,
}: TextTagsFilterInputProps<Q>): React.ReactElement {
  const tags = filterState?.type === "EXACT_MATCH"
    ? coerceToStringArray(filterState.values)
    : [];
  const isExcluding = filterState?.isExcluding ?? false;

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
    <TextTagsInput
      objectType={objectType}
      propertyKey={propertyKey}
      tags={tags}
      onChange={handleChange}
    />
  );
}

const TextTagsFilterInput = memo(
  TextTagsFilterInputInner,
) as typeof TextTagsFilterInputInner;

interface TimelineFilterInputProps {
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

const TimelineFilterInput = memo(function TimelineFilterInput({
  filterState,
  onFilterStateChanged,
}: TimelineFilterInputProps): React.ReactElement {
  const startDate = filterState?.type === "TIMELINE"
    ? filterState.startDate
    : undefined;
  const endDate = filterState?.type === "TIMELINE"
    ? filterState.endDate
    : undefined;
  const isExcluding = filterState?.isExcluding ?? false;

  const handleChange = useCallback(
    (startDate: Date | undefined, endDate: Date | undefined) => {
      onFilterStateChanged({
        type: "TIMELINE",
        startDate,
        endDate,
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  return (
    <TimelineInput
      startDate={startDate}
      endDate={endDate}
      onChange={handleChange}
    />
  );
});
