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
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type {
  CheckboxListFilterState,
  ContainsTextFilterState,
  DateRangeFilterState,
  FilterComponentType,
  FilterState,
  NumberRangeFilterState,
  ToggleFilterState,
} from "../FilterListItemApi.js";

export const MockObjectType = {
  apiName: "TestObject",
  type: "object",
  __DefinitionMetadata: {
    primaryKeyApiName: "id",
    primaryKeyType: "string",
    properties: {
      id: { type: "string", multiplicity: false },
      name: { type: "string", multiplicity: false },
      age: { type: "integer", multiplicity: false },
      active: { type: "boolean", multiplicity: false },
      createdAt: { type: "timestamp", multiplicity: false },
      score: { type: "double", multiplicity: false },
    },
  },
} as unknown as ObjectTypeDefinition;

/**
 * Create a property filter definition for testing
 */
export function createPropertyFilterDef<
  K extends string = string,
  C extends FilterComponentType = FilterComponentType,
>(
  key: K,
  filterComponent: C,
  filterState: FilterState,
): FilterDefinitionUnion<typeof MockObjectType> {
  return {
    type: "property",
    key,
    filterComponent,
    filterState,
  } as FilterDefinitionUnion<typeof MockObjectType>;
}

/**
 * Create a hasLink filter definition for testing
 */
export function createHasLinkFilterDef(
  linkName: string,
): FilterDefinitionUnion<typeof MockObjectType> {
  return {
    type: "hasLink",
    linkName,
    filterState: { type: "HAS_LINK", hasLink: false },
  } as FilterDefinitionUnion<typeof MockObjectType>;
}

/**
 * Create a linkedProperty filter definition for testing.
 * Cast required because LinkedPropertyFilterDefinition has complex generic constraints
 * that can't be satisfied with literal link names.
 */
export function createLinkedPropertyFilterDef(
  linkName: string,
  linkedPropertyKey: string,
): FilterDefinitionUnion<typeof MockObjectType> {
  return {
    type: "linkedProperty",
    linkName,
    linkedPropertyKey,
    linkedFilterComponent: "CHECKBOX_LIST",
    linkedFilterState: { type: "CHECKBOX_LIST", selectedValues: [] },
    filterState: {
      type: "LINKED_PROPERTY",
      linkedFilterState: { type: "CHECKBOX_LIST", selectedValues: [] },
    },
  } as FilterDefinitionUnion<typeof MockObjectType>;
}

/**
 * Create a keywordSearch filter definition for testing
 */
export function createKeywordSearchFilterDef(
  properties: string[] | "all",
): FilterDefinitionUnion<typeof MockObjectType> {
  return {
    type: "keywordSearch",
    properties,
    filterState: { type: "KEYWORD_SEARCH", searchTerm: "", operator: "AND" },
  } as FilterDefinitionUnion<typeof MockObjectType>;
}

/**
 * Create a custom filter definition for testing.
 * Cast required because CustomFilterDefinition expects specific callback signatures.
 */
export function createCustomFilterDef(
  key: string,
): FilterDefinitionUnion<typeof MockObjectType> {
  return {
    type: "custom",
    key,
    filterComponent: "CUSTOM",
    filterState: { type: "CUSTOM", customState: {} },
    renderInput: () => null,
    toWhereClause: () => ({}),
  } as FilterDefinitionUnion<typeof MockObjectType>;
}

/**
 * Helper to create a CheckboxListFilterState
 */
export function createCheckboxListState(
  selectedValues: string[],
  options?: { isExcluding?: boolean; includeNull?: boolean },
): CheckboxListFilterState {
  return {
    type: "CHECKBOX_LIST",
    selectedValues,
    isExcluding: options?.isExcluding,
    includeNull: options?.includeNull,
  };
}

/**
 * Helper to create a ContainsTextFilterState
 */
export function createContainsTextState(
  value?: string,
  options?: { isExcluding?: boolean },
): ContainsTextFilterState {
  return {
    type: "CONTAINS_TEXT",
    value,
    isExcluding: options?.isExcluding,
  };
}

/**
 * Helper to create a ToggleFilterState
 */
export function createToggleState(enabled: boolean): ToggleFilterState {
  return {
    type: "TOGGLE",
    enabled,
  };
}

/**
 * Helper to create a NumberRangeFilterState
 */
export function createNumberRangeState(
  minValue?: number,
  maxValue?: number,
  options?: { includeNull?: boolean },
): NumberRangeFilterState {
  return {
    type: "NUMBER_RANGE",
    minValue,
    maxValue,
    includeNull: options?.includeNull,
  };
}

/**
 * Helper to create a DateRangeFilterState
 */
export function createDateRangeState(
  minValue?: Date,
  maxValue?: Date,
  options?: { includeNull?: boolean },
): DateRangeFilterState {
  return {
    type: "DATE_RANGE",
    minValue,
    maxValue,
    includeNull: options?.includeNull,
  };
}
