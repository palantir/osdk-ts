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

import type { FilterState } from "../FilterListItemApi.js";

/** Returns true for filter state types that support in-filter search. */
export function supportsSearch(state: FilterState | undefined): boolean {
  if (!state) {
    return false;
  }
  switch (state.type) {
    case "SELECT":
    case "EXACT_MATCH":
      return true;
    case "CONTAINS_TEXT":
    case "NUMBER_RANGE":
    case "DATE_RANGE":
    case "TOGGLE":
    case "hasLink":
    case "linkedProperty":
    case "keywordSearch":
    case "TIMELINE":
    case "custom":
      return false;
    default: {
      const _exhaustive: never = state;
      return false;
    }
  }
}

/** Returns the count of selected values for the given filter state. */
export function getSelectedValueCount(state: FilterState | undefined): number {
  if (!state) {
    return 0;
  }
  switch (state.type) {
    case "SELECT":
      return state.selectedValues.length;
    case "EXACT_MATCH":
      return state.values.length;
    case "CONTAINS_TEXT":
      return state.value ? 1 : 0;
    case "NUMBER_RANGE":
    case "DATE_RANGE":
    case "TOGGLE":
    case "hasLink":
    case "linkedProperty":
    case "keywordSearch":
    case "TIMELINE":
    case "custom":
      return 0;
    default: {
      const _exhaustive: never = state;
      return 0;
    }
  }
}

/** Returns true for filter state types that support isExcluding. */
export function supportsExcluding(state: FilterState | undefined): boolean {
  if (!state) {
    return false;
  }
  switch (state.type) {
    case "SELECT":
    case "EXACT_MATCH":
    case "CONTAINS_TEXT":
    case "TIMELINE":
      return true;
    case "NUMBER_RANGE":
    case "DATE_RANGE":
    case "TOGGLE":
    case "hasLink":
    case "linkedProperty":
    case "keywordSearch":
    case "custom":
      return false;
    default: {
      const _exhaustive: never = state;
      return false;
    }
  }
}

/** Returns a cleared version of the filter state, or undefined if the type doesn't support clearing. */
export function clearFilterState(
  state: FilterState,
): FilterState | undefined {
  switch (state.type) {
    case "SELECT":
      return { ...state, selectedValues: [] };
    case "EXACT_MATCH":
      return { ...state, values: [] };
    case "CONTAINS_TEXT":
      return { ...state, value: undefined };
    case "NUMBER_RANGE":
      return {
        ...state,
        minValue: undefined,
        maxValue: undefined,
        includeNull: false,
      };
    case "DATE_RANGE":
      return {
        ...state,
        minValue: undefined,
        maxValue: undefined,
        includeNull: false,
      };
    case "TIMELINE":
      return { ...state, startDate: undefined, endDate: undefined };
    case "TOGGLE":
      return { ...state, enabled: false };
    case "hasLink":
      return { ...state, hasLink: false };
    case "keywordSearch":
      return { ...state, searchTerm: "" };
    case "linkedProperty":
    case "custom":
      return undefined;
    default: {
      const _exhaustive: never = state;
      return undefined;
    }
  }
}

/** Case-insensitive substring filter for search functionality. */
export function filterValuesBySearch<T>(
  values: T[],
  searchValue: string,
  getValue: (item: T) => string,
): T[] {
  const trimmed = searchValue.trim();
  if (!trimmed) return values;
  const lowerSearch = trimmed.toLowerCase();
  return values.filter((v) => getValue(v).toLowerCase().includes(lowerSearch));
}

/** Check if a filter state has an active (non-empty) value. */
export function filterHasActiveState(state: FilterState | undefined): boolean {
  if (!state) return false;

  switch (state.type) {
    case "SELECT":
      return state.selectedValues.length > 0;
    case "EXACT_MATCH":
      return state.values.length > 0;
    case "CONTAINS_TEXT":
      return state.value !== undefined && state.value !== "";
    case "NUMBER_RANGE":
      return state.minValue !== undefined || state.maxValue !== undefined
        || state.includeNull === true;
    case "DATE_RANGE":
      return state.minValue !== undefined || state.maxValue !== undefined
        || state.includeNull === true;
    case "TOGGLE":
      return state.enabled;
    case "hasLink":
      return state.hasLink;
    case "linkedProperty":
      return filterHasActiveState(state.linkedFilterState);
    case "keywordSearch":
      return state.searchTerm !== undefined && state.searchTerm !== "";
    case "TIMELINE":
      return state.startDate !== undefined || state.endDate !== undefined;
    case "custom":
      return true;
    default: {
      const _exhaustive: never = state;
      return false;
    }
  }
}
