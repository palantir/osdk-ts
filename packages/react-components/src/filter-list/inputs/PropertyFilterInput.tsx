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
import React, { memo } from "react";
import { FilterInputExcludeRow } from "../base/FilterInputExcludeRow.js";
import type {
  FilterState,
  PropertyFilterDefinition,
} from "../FilterListItemApi.js";
import { ContainsTextFilterInput } from "./ContainsTextFilterInput.js";
import { DateRangeFilterInput } from "./DateRangeFilterInput.js";
import { ListogramFilterInput } from "./ListogramFilterInput.js";
import { MultiDateFilterInput } from "./MultiDateFilterInput.js";
import { MultiSelectFilterInput } from "./MultiSelectFilterInput.js";
import { NumberRangeFilterInput } from "./NumberRangeFilterInput.js";
import { SingleDateFilterInput } from "./SingleDateFilterInput.js";
import { SingleSelectFilterInput } from "./SingleSelectFilterInput.js";
import { TextTagsFilterInput } from "./TextTagsFilterInput.js";
import { TimelineFilterInput } from "./TimelineFilterInput.js";
import { ToggleFilterInput } from "./ToggleFilterInput.js";

interface PropertyFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet?: ObjectSet<Q>;
  definition: PropertyFilterDefinition<Q>;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  whereClause: WhereClause<Q>;
  searchQuery?: string;
  excludeRowOpen?: boolean;
}

function PropertyFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  definition,
  filterState,
  onFilterStateChanged,
  whereClause,
  searchQuery,
  excludeRowOpen,
}: PropertyFilterInputProps<Q>): React.ReactElement {
  switch (definition.filterComponent) {
    case "CONTAINS_TEXT":
      return (
        <FilterInputExcludeRow
          excludeRowOpen={excludeRowOpen}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        >
          <ContainsTextFilterInput
            propertyKey={definition.key}
            filterState={filterState}
            onFilterStateChanged={onFilterStateChanged}
          />
        </FilterInputExcludeRow>
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
          objectSet={objectSet}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "DATE_RANGE":
      return (
        <DateRangeFilterInput
          objectType={objectType}
          objectSet={objectSet}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "SINGLE_SELECT":
      return (
        <SingleSelectFilterInput
          objectType={objectType}
          objectSet={objectSet}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          whereClause={whereClause}
          excludeRowOpen={excludeRowOpen}
        />
      );

    case "MULTI_SELECT":
      return (
        <MultiSelectFilterInput
          objectType={objectType}
          objectSet={objectSet}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          whereClause={whereClause}
          excludeRowOpen={excludeRowOpen}
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
          objectSet={objectSet}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          whereClause={whereClause}
          colorMap={definition.colorMap}
          displayMode={definition.listogramConfig?.displayMode}
          maxVisibleItems={definition.listogramConfig?.maxVisibleItems ?? 5}
          searchQuery={searchQuery}
          excludeRowOpen={excludeRowOpen}
        />
      );

    case "TEXT_TAGS":
      return (
        <TextTagsFilterInput
          objectType={objectType}
          objectSet={objectSet}
          propertyKey={definition.key}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
          whereClause={whereClause}
          excludeRowOpen={excludeRowOpen}
        />
      );

    case "TIMELINE":
      return (
        <FilterInputExcludeRow
          excludeRowOpen={excludeRowOpen}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        >
          <TimelineFilterInput
            filterState={filterState}
            onFilterStateChanged={onFilterStateChanged}
          />
        </FilterInputExcludeRow>
      );

    default:
      return (
        <div data-unsupported="true">
          Unsupported filter component: {definition.filterComponent}
        </div>
      );
  }
}

export const PropertyFilterInput: typeof PropertyFilterInputInner = memo(
  PropertyFilterInputInner,
) as typeof PropertyFilterInputInner;
