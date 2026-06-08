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
import React, { memo, useCallback, useMemo } from "react";
import { ContainsTextInput } from "./base/inputs/ContainsTextInput.js";
import type { MultiSelectInputLayout } from "./base/inputs/MultiSelectInput.js";
import { ToggleInput } from "./base/inputs/ToggleInput.js";
import type { FilterDefinitionUnion } from "./FilterListApi.js";
import type { FilterState } from "./FilterListItemApi.js";
import { LinkedPropertyInput } from "./inputs/LinkedPropertyInput.js";
import { PropertyFilterInput } from "./inputs/PropertyFilterInput.js";
import { StaticValuesFilterInput } from "./inputs/StaticValuesFilterInput.js";
import type { LinkedFilter } from "./types/LinkedFilterTypes.js";
import {
  type DerivedNarrowing,
  narrowObjectSet,
} from "./utils/narrowObjectSet.js";

const EMPTY_WHERE_CLAUSE = {};
const EMPTY_LINKED_FILTERS: ReadonlyArray<never> = [];

export interface FilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet?: ObjectSet<Q>;
  definition: FilterDefinitionUnion<Q>;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  /** Per-filter excluding-self where clause (direct filters only). */
  whereClause: WhereClause<Q>;
  /** Per-filter excluding-self linked-filter records. */
  linkedFilters?: ReadonlyArray<LinkedFilter<Q>>;
  /** Per-filter excluding-self derived-property narrowings. */
  derivedNarrowings?: ReadonlyArray<DerivedNarrowing<Q>>;
  showFilteredOutValues?: boolean;
  searchQuery?: string;
  excludeRowOpen?: boolean;
  /**
   * Layout for `MULTI_SELECT` filter components. Pass `"inline"` when this
   * input renders inside a popover (or any container where chips would feel
   * redundant) so the value list is always visible. Defaults to `"dropdown"`,
   * which renders chips + a portaled Combobox popup. Ignored by other
   * filter components.
   */
  layout?: MultiSelectInputLayout;
}

function FilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet: rawObjectSet,
  definition,
  filterState,
  onFilterStateChanged,
  whereClause,
  linkedFilters,
  derivedNarrowings,
  showFilteredOutValues,
  searchQuery,
  excludeRowOpen,
  layout,
}: FilterInputProps<Q>): React.ReactElement {
  // Apply the (leave-one-out) derived-property narrowings once here so every
  // child input's facet aggregation is scoped by them, without threading the
  // narrowings through each sub-input. Sub-inputs narrow further with their own
  // whereClause + linkedFilters on top of this.
  const objectSet = useMemo<ObjectSet<Q> | undefined>(
    () =>
      rawObjectSet != null
        && derivedNarrowings != null
        && derivedNarrowings.length > 0
        ? narrowObjectSet(
          rawObjectSet,
          EMPTY_WHERE_CLAUSE,
          EMPTY_LINKED_FILTERS,
          derivedNarrowings,
        )
        : rawObjectSet,
    [rawObjectSet, derivedNarrowings],
  );

  switch (definition.type) {
    case "HAS_LINK":
      return (
        <HasLinkInput
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "LINKED_PROPERTY": {
      if (objectSet == null) {
        return <></>;
      }
      return (
        <LinkedPropertyInput
          objectSet={objectSet}
          definition={definition}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          whereClause={whereClause}
          linkedFilters={linkedFilters}
          showFilteredOutValues={showFilteredOutValues}
          searchQuery={searchQuery}
          layout={layout}
        />
      );
    }

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
            objectType,
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
          linkedFilters={linkedFilters}
          showFilteredOutValues={showFilteredOutValues}
          searchQuery={searchQuery}
          excludeRowOpen={excludeRowOpen}
          layout={layout}
        />
      );

    case "STATIC_VALUES":
      return (
        <StaticValuesFilterInput
          definition={definition}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          searchQuery={searchQuery}
          excludeRowOpen={excludeRowOpen}
          layout={layout}
        />
      );

    default:
      return <div data-unsupported="true">Unsupported filter type</div>;
  }
}

export const FilterInput = memo(FilterInputInner) as typeof FilterInputInner;

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
