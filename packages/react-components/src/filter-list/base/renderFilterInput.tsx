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
import type {
  CheckboxListInputClassNames,
  ContainsTextInputClassNames,
  DateRangeInputClassNames,
  NullValueWrapperClassNames,
  NumberRangeInputClassNames,
  ToggleInputClassNames,
} from "../types/ClassNameOverrides.js";
import type { KeywordSearchFilterState } from "../types/KeywordSearchTypes.js";
import type {
  HasLinkFilterState,
} from "../types/LinkedFilterTypes.js";
import { CheckboxListInput } from "./inputs/CheckboxListInput.js";
import { ContainsTextInput } from "./inputs/ContainsTextInput.js";
import { DateRangeInput } from "./inputs/DateRangeInput.js";
import { NullValueWrapper } from "./inputs/NullValueWrapper.js";
import { NumberRangeInput } from "./inputs/NumberRangeInput.js";
import { ToggleInput } from "./inputs/ToggleInput.js";

interface ContainsTextRenderProps {
  renderSearchIcon?: () => React.ReactNode;
  renderClearIcon?: () => React.ReactNode;
}

export interface InputClassNames {
  checkboxList?: CheckboxListInputClassNames;
  containsText?: ContainsTextInputClassNames;
  containsTextRenderProps?: ContainsTextRenderProps;
  toggle?: ToggleInputClassNames;
  numberRange?: NumberRangeInputClassNames;
  dateRange?: DateRangeInputClassNames;
  nullValueWrapper?: NullValueWrapperClassNames;
}

export function renderFilterInput<Q extends ObjectTypeDefinition>(
  objectType: Q,
  definition: FilterDefinitionUnion<Q>,
  filterState: FilterState | undefined,
  onFilterStateChanged: (state: FilterState) => void,
  inputClassNames?: InputClassNames,
  objectSet?: ObjectSet<Q>,
): React.ReactElement {
  // Handle non-property filter types
  switch (definition.type) {
    case "hasLink": {
      const hasLinkState = filterState as HasLinkFilterState | undefined;
      return (
        <ToggleInput
          enabled={hasLinkState?.type === "HAS_LINK"
            ? hasLinkState.hasLink
            : false}
          onChange={(hasLink) =>
            onFilterStateChanged({
              type: "HAS_LINK",
              hasLink,
            })}
          classNames={inputClassNames?.toggle}
        />
      );
    }

    case "linkedProperty": {
      // linkedProperty renders based on its linkedFilterComponent
      // For now, we show an unsupported message as this requires more complex handling
      return (
        <div data-unsupported="true">
          Linked property filters require custom rendering
        </div>
      );
    }

    case "keywordSearch": {
      const searchState = filterState as KeywordSearchFilterState | undefined;
      return (
        <ContainsTextInput
          value={searchState?.type === "KEYWORD_SEARCH"
            ? searchState.searchTerm
            : undefined}
          onChange={(searchTerm) =>
            onFilterStateChanged({
              type: "KEYWORD_SEARCH",
              searchTerm: searchTerm ?? "",
              operator: searchState?.operator ?? "AND",
            })}
          placeholder={definition.label ?? "Search..."}
          classNames={inputClassNames?.containsText}
          renderSearchIcon={inputClassNames?.containsTextRenderProps
            ?.renderSearchIcon}
          renderClearIcon={inputClassNames?.containsTextRenderProps
            ?.renderClearIcon}
        />
      );
    }

    case "custom": {
      // Custom filters provide their own renderInput function
      if (definition.renderInput && objectSet) {
        const customFilterState = filterState?.type === "CUSTOM"
          ? filterState
          : definition.filterState;
        return (
          <>
            {definition.renderInput({
              objectSet,
              filterState: customFilterState,
              onFilterStateChanged: onFilterStateChanged as (
                state: typeof customFilterState,
              ) => void,
            })}
          </>
        );
      }
      return (
        <div data-unsupported="true">
          Custom filter missing renderInput or objectSet
        </div>
      );
    }

    case "property":
      // Continue to property filter switch below
      break;

    default:
      return (
        <div data-unsupported="true">
          Unsupported filter type
        </div>
      );
  }

  // Handle property filter components
  switch (definition.filterComponent) {
    case "CHECKBOX_LIST": {
      const selectedValues = filterState?.type === "CHECKBOX_LIST"
        ? filterState.selectedValues
        : [];
      const handleChange = (newSelectedValues: string[]) =>
        onFilterStateChanged({
          type: "CHECKBOX_LIST",
          selectedValues: newSelectedValues,
          isExcluding: filterState?.isExcluding ?? false,
        });

      return (
        <CheckboxListInput
          objectType={objectType}
          propertyKey={definition.key}
          selectedValues={selectedValues}
          onChange={handleChange}
          showSelectAll={definition.showSelectAll}
          maxVisibleItems={definition.maxVisibleItems}
          dataIndicator={definition.dataIndicator}
          color={definition.color}
          valueColors={definition.valueColors}
          classNames={inputClassNames?.checkboxList}
        />
      );
    }

    case "CONTAINS_TEXT":
      return (
        <ContainsTextInput
          value={filterState?.type === "CONTAINS_TEXT"
            ? filterState.value
            : undefined}
          onChange={(value) =>
            onFilterStateChanged({
              type: "CONTAINS_TEXT",
              value,
            })}
          placeholder={`Search ${definition.key}...`}
          classNames={inputClassNames?.containsText}
          renderSearchIcon={inputClassNames?.containsTextRenderProps
            ?.renderSearchIcon}
          renderClearIcon={inputClassNames?.containsTextRenderProps
            ?.renderClearIcon}
        />
      );

    case "TOGGLE":
      return (
        <ToggleInput
          enabled={filterState?.type === "TOGGLE" ? filterState.enabled : false}
          onChange={(enabled) =>
            onFilterStateChanged({
              type: "TOGGLE",
              enabled,
            })}
          classNames={inputClassNames?.toggle}
        />
      );

    case "NUMBER_RANGE":
      return (
        <NullValueWrapper
          objectType={objectType}
          propertyKey={definition.key}
          includeNull={filterState?.includeNull}
          onIncludeNullChange={(includeNull) =>
            onFilterStateChanged({
              type: "NUMBER_RANGE",
              minValue: filterState?.type === "NUMBER_RANGE"
                ? filterState.minValue
                : undefined,
              maxValue: filterState?.type === "NUMBER_RANGE"
                ? filterState.maxValue
                : undefined,
              includeNull,
            })}
          classNames={inputClassNames?.nullValueWrapper}
        >
          <NumberRangeInput
            objectType={objectType}
            propertyKey={definition.key}
            minValue={filterState?.type === "NUMBER_RANGE"
              ? filterState.minValue
              : undefined}
            maxValue={filterState?.type === "NUMBER_RANGE"
              ? filterState.maxValue
              : undefined}
            onChange={(minValue, maxValue) =>
              onFilterStateChanged({
                type: "NUMBER_RANGE",
                minValue,
                maxValue,
                includeNull: filterState?.includeNull,
              })}
            showHistogram={definition.dataIndicator === "histogram"}
            classNames={inputClassNames?.numberRange}
          />
        </NullValueWrapper>
      );

    case "DATE_RANGE":
      return (
        <NullValueWrapper
          objectType={objectType}
          propertyKey={definition.key}
          includeNull={filterState?.includeNull}
          onIncludeNullChange={(includeNull) =>
            onFilterStateChanged({
              type: "DATE_RANGE",
              minValue: filterState?.type === "DATE_RANGE"
                ? filterState.minValue
                : undefined,
              maxValue: filterState?.type === "DATE_RANGE"
                ? filterState.maxValue
                : undefined,
              includeNull,
            })}
          classNames={inputClassNames?.nullValueWrapper}
        >
          <DateRangeInput
            objectType={objectType}
            propertyKey={definition.key}
            minValue={filterState?.type === "DATE_RANGE"
              ? filterState.minValue
              : undefined}
            maxValue={filterState?.type === "DATE_RANGE"
              ? filterState.maxValue
              : undefined}
            onChange={(minValue, maxValue) =>
              onFilterStateChanged({
                type: "DATE_RANGE",
                minValue,
                maxValue,
                includeNull: filterState?.includeNull,
              })}
            classNames={inputClassNames?.dateRange}
          />
        </NullValueWrapper>
      );

    default:
      return (
        <div data-unsupported="true">
          Unsupported filter component: {definition.filterComponent}
        </div>
      );
  }
}
