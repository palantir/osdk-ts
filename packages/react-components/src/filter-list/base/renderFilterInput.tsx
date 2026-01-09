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
import React from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type {
  CheckboxListInputClassNames,
  ContainsTextInputClassNames,
  DateRangeInputClassNames,
  ListogramInputClassNames,
  MultiDateInputClassNames,
  MultiSelectInputClassNames,
  NullValueWrapperClassNames,
  NumberRangeInputClassNames,
  SingleDateInputClassNames,
  SingleSelectInputClassNames,
  TextTagsInputClassNames,
  TimelineInputClassNames,
  ToggleInputClassNames,
} from "../types/ClassNameOverrides.js";
import type { KeywordSearchFilterState } from "../types/KeywordSearchTypes.js";
import type { HasLinkFilterState } from "../types/LinkedFilterTypes.js";
import { CheckboxListInput } from "./inputs/CheckboxListInput.js";
import { ContainsTextInput } from "./inputs/ContainsTextInput.js";
import { DateRangeInput } from "./inputs/DateRangeInput.js";
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
  singleSelect?: SingleSelectInputClassNames;
  multiSelect?: MultiSelectInputClassNames;
  singleDate?: SingleDateInputClassNames;
  listogram?: ListogramInputClassNames;
  textTags?: TextTagsInputClassNames;
  multiDate?: MultiDateInputClassNames;
  timeline?: TimelineInputClassNames;
}

export function renderFilterInput<Q extends ObjectTypeDefinition>(
  objectType: Q,
  objectSet: ObjectSet<Q>,
  definition: FilterDefinitionUnion<Q>,
  filterState: FilterState | undefined,
  onFilterStateChanged: (state: FilterState) => void,
  inputClassNames?: InputClassNames,
  /**
   * WhereClause from other filters to chain aggregation queries.
   * When provided, the aggregations in input components will respect other active filters.
   */
  whereClause?: WhereClause<Q>,
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
      if (definition.renderInput) {
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
          Custom filter missing renderInput
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
          whereClause={whereClause}
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
          whereClause={whereClause}
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
            whereClause={whereClause}
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
          whereClause={whereClause}
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
            whereClause={whereClause}
            classNames={inputClassNames?.dateRange}
          />
        </NullValueWrapper>
      );

    case "SINGLE_SELECT":
      return (
        <SingleSelectInput
          objectType={objectType}
          propertyKey={definition.key}
          selectedValue={filterState?.type === "SINGLE_SELECT"
            ? (filterState.selectedValue as string | undefined)
            : undefined}
          onChange={(value) =>
            onFilterStateChanged({
              type: "SINGLE_SELECT",
              selectedValue: value,
              isExcluding: filterState?.isExcluding ?? false,
            })}
          whereClause={whereClause}
          classNames={inputClassNames?.singleSelect}
        />
      );

    case "MULTI_SELECT": {
      const multiSelectValues = filterState?.type === "MULTI_SELECT"
        ? filterState.selectedValues as string[]
        : [];
      return (
        <MultiSelectInput
          objectType={objectType}
          propertyKey={definition.key}
          selectedValues={multiSelectValues}
          onChange={(values) =>
            onFilterStateChanged({
              type: "MULTI_SELECT",
              selectedValues: values,
              isExcluding: filterState?.isExcluding ?? false,
            })}
          whereClause={whereClause}
          showSelectAll={definition.showSelectAll}
          classNames={inputClassNames?.multiSelect}
        />
      );
    }

    case "SINGLE_DATE":
      return (
        <SingleDateInput
          selectedDate={filterState?.type === "SINGLE_DATE"
            ? filterState.selectedDate
            : undefined}
          onChange={(date) =>
            onFilterStateChanged({
              type: "SINGLE_DATE",
              selectedDate: date,
              isExcluding: filterState?.isExcluding ?? false,
            })}
          classNames={inputClassNames?.singleDate}
        />
      );

    case "MULTI_DATE": {
      const multiDateValues = filterState?.type === "MULTI_DATE"
        ? filterState.selectedDates
        : [];
      return (
        <MultiDateInput
          selectedDates={multiDateValues}
          onChange={(dates) =>
            onFilterStateChanged({
              type: "MULTI_DATE",
              selectedDates: dates,
              isExcluding: filterState?.isExcluding ?? false,
            })}
          classNames={inputClassNames?.multiDate}
        />
      );
    }

    case "LISTOGRAM": {
      const listogramValues = filterState?.type === "EXACT_MATCH"
        ? filterState.values as string[]
        : [];
      return (
        <ListogramInput
          objectType={objectType}
          propertyKey={definition.key}
          selectedValues={listogramValues}
          onChange={(values) =>
            onFilterStateChanged({
              type: "EXACT_MATCH",
              values,
              isExcluding: filterState?.isExcluding ?? false,
            })}
          whereClause={whereClause}
          maxVisibleItems={definition.maxVisibleItems}
          classNames={inputClassNames?.listogram}
        />
      );
    }

    case "TEXT_TAGS": {
      const textTagsValues = filterState?.type === "EXACT_MATCH"
        ? filterState.values as string[]
        : [];
      return (
        <TextTagsInput
          objectType={objectType}
          propertyKey={definition.key}
          tags={textTagsValues}
          onChange={(tags) =>
            onFilterStateChanged({
              type: "EXACT_MATCH",
              values: tags,
              isExcluding: filterState?.isExcluding ?? false,
            })}
          whereClause={whereClause}
          classNames={inputClassNames?.textTags}
        />
      );
    }

    case "TIMELINE":
      return (
        <TimelineInput
          startDate={filterState?.type === "TIMELINE"
            ? filterState.startDate
            : undefined}
          endDate={filterState?.type === "TIMELINE"
            ? filterState.endDate
            : undefined}
          onChange={(startDate, endDate) =>
            onFilterStateChanged({
              type: "TIMELINE",
              startDate,
              endDate,
              isExcluding: filterState?.isExcluding ?? false,
            })}
          classNames={inputClassNames?.timeline}
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
