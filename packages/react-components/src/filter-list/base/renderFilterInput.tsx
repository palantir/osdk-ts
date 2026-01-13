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
import React from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { coerceToString, coerceToStringArray } from "../utils/coerceFilterValue.js";
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

export function renderFilterInput<Q extends ObjectTypeDefinition>(
  objectType: Q,
  objectSet: ObjectSet<Q>,
  definition: FilterDefinitionUnion<Q>,
  filterState: FilterState | undefined,
  onFilterStateChanged: (state: FilterState) => void,
): React.ReactElement {
  const content = renderFilterInputContent(
    objectType,
    objectSet,
    definition,
    filterState,
    onFilterStateChanged,
  );

  return <FilterInputErrorBoundary>{content}</FilterInputErrorBoundary>;
}

function renderFilterInputContent<Q extends ObjectTypeDefinition>(
  objectType: Q,
  objectSet: ObjectSet<Q>,
  definition: FilterDefinitionUnion<Q>,
  filterState: FilterState | undefined,
  onFilterStateChanged: (state: FilterState) => void,
): React.ReactElement {
  switch (definition.type) {
    case "hasLink": {
      const hasLink = filterState?.type === "HAS_LINK" ? filterState.hasLink : false;
      return (
        <ToggleInput
          enabled={hasLink}
          onChange={(hasLink) => onFilterStateChanged({ type: "HAS_LINK", hasLink })}
        />
      );
    }

    case "linkedProperty":
      return (
        <LinkedPropertyInput
          objectSet={objectSet}
          definition={definition}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />
      );

    case "keywordSearch": {
      const searchTerm = filterState?.type === "KEYWORD_SEARCH" ? filterState.searchTerm : undefined;
      const operator = filterState?.type === "KEYWORD_SEARCH" ? filterState.operator : "AND";
      return (
        <ContainsTextInput
          value={searchTerm}
          onChange={(newSearchTerm) =>
            onFilterStateChanged({
              type: "KEYWORD_SEARCH",
              searchTerm: newSearchTerm ?? "",
              operator,
            })}
          placeholder={definition.label ?? "Search..."}
        />
      );
    }

    case "custom": {
      if (!definition.renderInput) {
        return <div data-unsupported="true">Custom filter missing renderInput</div>;
      }
      const customFilterState = filterState?.type === "CUSTOM" ? filterState : definition.filterState;
      const typedCallback = onFilterStateChanged as (state: typeof customFilterState) => void;
      return (
        <>
          {definition.renderInput({
            objectSet,
            filterState: customFilterState,
            onFilterStateChanged: typedCallback,
          })}
        </>
      );
    }

    case "property":
      break;

    default:
      return <div data-unsupported="true">Unsupported filter type</div>;
  }

  switch (definition.filterComponent) {
    case "CHECKBOX_LIST": {
      const selectedValues = filterState?.type === "CHECKBOX_LIST" ? filterState.selectedValues : [];
      return (
        <CheckboxListInput
          objectType={objectType}
          propertyKey={definition.key}
          selectedValues={selectedValues}
          onChange={(newSelectedValues) => {
            onFilterStateChanged({
              type: "CHECKBOX_LIST",
              selectedValues: newSelectedValues,
              isExcluding: filterState?.isExcluding ?? false,
            });
          }}
        />
      );
    }

    case "CONTAINS_TEXT":
      return (
        <ContainsTextInput
          value={filterState?.type === "CONTAINS_TEXT" ? filterState.value : undefined}
          onChange={(value) => onFilterStateChanged({ type: "CONTAINS_TEXT", value })}
          placeholder={`Search ${definition.key}...`}
        />
      );

    case "TOGGLE":
      return (
        <ToggleInput
          enabled={filterState?.type === "TOGGLE" ? filterState.enabled : false}
          onChange={(enabled) => onFilterStateChanged({ type: "TOGGLE", enabled })}
        />
      );

    case "NUMBER_RANGE": {
      const nr = filterState?.type === "NUMBER_RANGE" ? filterState : undefined;
      return (
        <NullValueWrapper
          objectType={objectType}
          propertyKey={definition.key}
          includeNull={filterState?.includeNull}
          onIncludeNullChange={(includeNull) =>
            onFilterStateChanged({ type: "NUMBER_RANGE", minValue: nr?.minValue, maxValue: nr?.maxValue, includeNull })}
        >
          <NumberRangeInput
            objectType={objectType}
            propertyKey={definition.key}
            minValue={nr?.minValue}
            maxValue={nr?.maxValue}
            onChange={(minValue, maxValue) =>
              onFilterStateChanged({ type: "NUMBER_RANGE", minValue, maxValue, includeNull: filterState?.includeNull })}
          />
        </NullValueWrapper>
      );
    }

    case "DATE_RANGE": {
      const dr = filterState?.type === "DATE_RANGE" ? filterState : undefined;
      return (
        <NullValueWrapper
          objectType={objectType}
          propertyKey={definition.key}
          includeNull={filterState?.includeNull}
          onIncludeNullChange={(includeNull) =>
            onFilterStateChanged({ type: "DATE_RANGE", minValue: dr?.minValue, maxValue: dr?.maxValue, includeNull })}
        >
          <DateRangeInput
            objectType={objectType}
            propertyKey={definition.key}
            minValue={dr?.minValue}
            maxValue={dr?.maxValue}
            onChange={(minValue, maxValue) =>
              onFilterStateChanged({ type: "DATE_RANGE", minValue, maxValue, includeNull: filterState?.includeNull })}
          />
        </NullValueWrapper>
      );
    }

    case "SINGLE_SELECT":
      return (
        <SingleSelectInput
          objectType={objectType}
          propertyKey={definition.key}
          selectedValue={filterState?.type === "SINGLE_SELECT" ? coerceToString(filterState.selectedValue) : undefined}
          onChange={(value) =>
            onFilterStateChanged({ type: "SINGLE_SELECT", selectedValue: value, isExcluding: filterState?.isExcluding ?? false })}
        />
      );

    case "MULTI_SELECT": {
      const values = filterState?.type === "MULTI_SELECT" ? coerceToStringArray(filterState.selectedValues) : [];
      return (
        <MultiSelectInput
          objectType={objectType}
          propertyKey={definition.key}
          selectedValues={values}
          onChange={(selectedValues) =>
            onFilterStateChanged({ type: "MULTI_SELECT", selectedValues, isExcluding: filterState?.isExcluding ?? false })}
        />
      );
    }

    case "SINGLE_DATE":
      return (
        <SingleDateInput
          selectedDate={filterState?.type === "SINGLE_DATE" ? filterState.selectedDate : undefined}
          onChange={(selectedDate) =>
            onFilterStateChanged({ type: "SINGLE_DATE", selectedDate, isExcluding: filterState?.isExcluding ?? false })}
        />
      );

    case "MULTI_DATE": {
      const dates = filterState?.type === "MULTI_DATE" ? filterState.selectedDates : [];
      return (
        <MultiDateInput
          selectedDates={dates}
          onChange={(selectedDates) =>
            onFilterStateChanged({ type: "MULTI_DATE", selectedDates, isExcluding: filterState?.isExcluding ?? false })}
        />
      );
    }

    case "LISTOGRAM": {
      const values = filterState?.type === "EXACT_MATCH" ? coerceToStringArray(filterState.values) : [];
      return (
        <ListogramInput
          objectType={objectType}
          propertyKey={definition.key}
          selectedValues={values}
          onChange={(values) =>
            onFilterStateChanged({ type: "EXACT_MATCH", values, isExcluding: filterState?.isExcluding ?? false })}
        />
      );
    }

    case "TEXT_TAGS": {
      const tags = filterState?.type === "EXACT_MATCH" ? coerceToStringArray(filterState.values) : [];
      return (
        <TextTagsInput
          objectType={objectType}
          propertyKey={definition.key}
          tags={tags}
          onChange={(values) =>
            onFilterStateChanged({ type: "EXACT_MATCH", values, isExcluding: filterState?.isExcluding ?? false })}
        />
      );
    }

    case "TIMELINE":
      return (
        <TimelineInput
          startDate={filterState?.type === "TIMELINE" ? filterState.startDate : undefined}
          endDate={filterState?.type === "TIMELINE" ? filterState.endDate : undefined}
          onChange={(startDate, endDate) =>
            onFilterStateChanged({ type: "TIMELINE", startDate, endDate, isExcluding: filterState?.isExcluding ?? false })}
        />
      );

    default:
      return <div data-unsupported="true">Unsupported filter component: {definition.filterComponent}</div>;
  }
}
