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
import type { PropertyAggregationValue } from "../types/AggregationTypes.js";

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

/**
 * Returns true if the given value should render as a "No value" placeholder
 * in dropdown options, listogram buckets, and tag chips.
 *
 * Treats null, undefined, and empty/whitespace strings as empty.
 */
export function isEmptyValue(value: string | null | undefined): boolean {
  if (value == null) {
    return true;
  }
  return value.trim() === "";
}

/**
 * Merges every empty/null/whitespace-only aggregation row into a single
 * "No value" bucket placed at the position of the first empty row encountered.
 * Backends sometimes return separate rows for null, undefined, "", and
 * whitespace-only strings; this collapses them so consumers (listogram,
 * dropdown, multi-select) all see one canonical row.
 */
export function dedupeEmptyAggregationRows(
  values: PropertyAggregationValue[],
): PropertyAggregationValue[] {
  const out: PropertyAggregationValue[] = [];
  let emptyCount = 0;
  let firstEmptyIndex = -1;
  for (const v of values) {
    if (isEmptyValue(v.value)) {
      if (firstEmptyIndex === -1) {
        firstEmptyIndex = out.length;
      }
      emptyCount += v.count;
    } else {
      out.push(v);
    }
  }
  if (firstEmptyIndex >= 0 && emptyCount > 0) {
    out.splice(firstEmptyIndex, 0, {
      value: "",
      count: emptyCount,
      isNull: true,
    });
  }
  return out;
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
