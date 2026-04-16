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
import { ContainsTextInput } from "./base/inputs/ContainsTextInput.js";
import { ToggleInput } from "./base/inputs/ToggleInput.js";
import type { FilterDefinitionUnion } from "./FilterListApi.js";
import type { FilterState } from "./FilterListItemApi.js";
import { LinkedPropertyInput } from "./inputs/LinkedPropertyInput.js";
import { PropertyFilterInput } from "./inputs/PropertyFilterInput.js";

interface FilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet?: ObjectSet<Q>;
  definition: FilterDefinitionUnion<Q>;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  whereClause: WhereClause<Q>;
  searchQuery?: string;
  excludeRowOpen?: boolean;
}

function FilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  definition,
  filterState,
  onFilterStateChanged,
  whereClause,
  searchQuery,
  excludeRowOpen,
}: FilterInputProps<Q>): React.ReactElement {
  return (
    <FilterInputContent
      objectType={objectType}
      objectSet={objectSet}
      definition={definition}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      whereClause={whereClause}
      searchQuery={searchQuery}
      excludeRowOpen={excludeRowOpen}
    />
  );
}

export const FilterInput = memo(FilterInputInner) as typeof FilterInputInner;

function FilterInputContent<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  definition,
  filterState,
  onFilterStateChanged,
  whereClause,
  searchQuery,
  excludeRowOpen,
}: FilterInputProps<Q>): React.ReactElement {
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
          searchQuery={searchQuery}
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
      const customFilterState =
        filterState?.type === "custom" ? filterState : definition.filterState;
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
          searchQuery={searchQuery}
          excludeRowOpen={excludeRowOpen}
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
  const hasLink = filterState?.type === "hasLink" ? filterState.hasLink : false;

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
  const searchTerm =
    filterState?.type === "keywordSearch" ? filterState.searchTerm : undefined;
  const operator =
    filterState?.type === "keywordSearch" ? filterState.operator : "AND";

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
