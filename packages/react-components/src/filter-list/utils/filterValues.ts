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
    case "CHECKBOX_LIST":
      return state.selectedValues.length > 0;
    case "SINGLE_SELECT":
      return state.selectedValue !== undefined;
    case "MULTI_SELECT":
      return state.selectedValues.length > 0;
    case "EXACT_MATCH":
      return state.values.length > 0;
    case "CONTAINS_TEXT":
      return state.value !== undefined && state.value !== "";
    case "NUMBER_RANGE":
      return state.minValue !== undefined || state.maxValue !== undefined || state.includeNull === true;
    case "DATE_RANGE":
      return state.minValue !== undefined || state.maxValue !== undefined || state.includeNull === true;
    case "SINGLE_DATE":
      return state.selectedDate !== undefined;
    case "MULTI_DATE":
      return state.selectedDates.length > 0;
    case "TOGGLE":
      return state.enabled;
    case "HAS_LINK":
      return state.hasLink;
    case "LINKED_PROPERTY":
      return filterHasActiveState(state.linkedFilterState);
    case "KEYWORD_SEARCH":
      return state.searchTerm !== undefined && state.searchTerm !== "";
    case "TIMELINE":
      return state.startDate !== undefined || state.endDate !== undefined;
    case "CUSTOM":
      return true;
    default:
      return false;
  }
}
