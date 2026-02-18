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

import type { ObjectSet, ObjectTypeDefinition, WhereClause } from "@osdk/api";
import React, { memo, useCallback } from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { FilterInputErrorBoundary } from "./FilterInputErrorBoundary.js";
import { ContainsTextInput } from "./inputs/ContainsTextInput.js";
import { MultiDateInput } from "./inputs/MultiDateInput.js";
import { SingleDateInput } from "./inputs/SingleDateInput.js";
import { ToggleInput } from "./inputs/ToggleInput.js";

interface FilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet: ObjectSet<Q>;
  definition: FilterDefinitionUnion<Q>;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  whereClause: WhereClause<Q>;
}

function FilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  definition,
  filterState,
  onFilterStateChanged,
  whereClause,
}: FilterInputProps<Q>): React.ReactElement {
  const content = (
    <FilterInputContent
      objectType={objectType}
      objectSet={objectSet}
      definition={definition}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      whereClause={whereClause}
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
  whereClause,
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
      return <div data-unsupported="true">Unsupported filter type</div>;

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
          whereClause={whereClause}
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
  whereClause: WhereClause<Q>;
}

function PropertyFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  definition,
  filterState,
  onFilterStateChanged,
  whereClause,
}: PropertyFilterInputProps<Q>): React.ReactElement {
  switch (definition.filterComponent) {
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
