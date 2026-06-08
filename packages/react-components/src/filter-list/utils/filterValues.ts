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

/**
 * Unwraps a `linkedProperty` wrapper one level so callers can reason about the
 * underlying filter state directly (e.g. for header controls that should
 * follow the inner filter's capabilities).
 */
export function getEffectiveFilterState(
  state: FilterState | undefined,
): FilterState | undefined {
  if (state?.type === "linkedProperty") {
    return state.linkedFilterState;
  }
  return state;
}

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
    // hasLink supports excluding via the overflow dropdown: "Keeping" filters
    // to objects that have the link, "Excluding" to those that do not.
    case "hasLink":
      return true;
    case "NUMBER_RANGE":
    case "DATE_RANGE":
    case "TOGGLE":
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
 * Sentinel identity for the "No value" bucket (null/undefined property values).
 *
 * `selectedValues` is a `string[]`, so the null/undefined state needs a string
 * stand-in that cannot collide with a real value. Put `NO_VALUE` in `selectedValues`
 * to filter for objects whose property `$isNull`.
 */
export const NO_VALUE = "__NO_VALUE__";

/**
 * Returns true if the given value represents "No value" (a null/undefined
 * property value), i.e. the {@link NO_VALUE} sentinel (or a raw null/undefined
 * defensively).
 */
export function isNoValue(value: string | null | undefined): boolean {
  return value == null || value === NO_VALUE;
}

/**
 * Merges every null/undefined aggregation row into a single "No value" bucket
 * (keyed by the {@link NO_VALUE} sentinel) placed at the position of the first
 * such row encountered. Backends sometimes return separate rows for null and
 * undefined; this collapses them so consumers (listogram, dropdown,
 * multi-select) all see one canonical "No value" row.
 *
 * Literal empty-string (`""`) rows are real values and are left untouched as
 * their own distinct rows.
 */
export function dedupeEmptyAggregationRows(
  values: PropertyAggregationValue[],
): PropertyAggregationValue[] {
  const out: PropertyAggregationValue[] = [];
  let noValueCount = 0;
  let firstNoValueIndex = -1;
  for (const v of values) {
    if (isNoValue(v.value)) {
      if (firstNoValueIndex === -1) {
        firstNoValueIndex = out.length;
      }
      noValueCount += v.count;
    } else {
      out.push(v);
    }
  }
  if (firstNoValueIndex >= 0 && noValueCount > 0) {
    out.splice(firstNoValueIndex, 0, {
      value: NO_VALUE,
      count: noValueCount,
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
  if (!trimmed) {
    return values;
  }
  const lowerSearch = trimmed.toLowerCase();
  return values.filter((v) => getValue(v).toLowerCase().includes(lowerSearch));
}

/**
 * Returns a "cleared" version of the given filter state, preserving the
 * discriminator and `isExcluding` flag so the UI doesn't snap between filter
 * modes when a user clicks "Clear all selections". Returns `undefined` if no
 * cleared form is meaningful for the state shape.
 */
export function clearFilterState(
  state: FilterState | undefined,
): FilterState | undefined {
  if (!state) {
    return undefined;
  }
  switch (state.type) {
    case "SELECT":
      return {
        type: "SELECT",
        selectedValues: [],
        isExcluding: state.isExcluding,
      };
    case "EXACT_MATCH":
      return {
        type: "EXACT_MATCH",
        values: [],
        isExcluding: state.isExcluding,
      };
    case "CONTAINS_TEXT":
      return {
        type: "CONTAINS_TEXT",
        value: undefined,
        isExcluding: state.isExcluding,
      };
    case "NUMBER_RANGE":
      return {
        type: "NUMBER_RANGE",
        minValue: undefined,
        maxValue: undefined,
        includeNull: false,
      };
    case "DATE_RANGE":
      return {
        type: "DATE_RANGE",
        minValue: undefined,
        maxValue: undefined,
        includeNull: false,
      };
    case "TIMELINE":
      return {
        type: "TIMELINE",
        startDate: undefined,
        endDate: undefined,
        isExcluding: state.isExcluding,
      };
    case "TOGGLE":
      return { type: "TOGGLE", enabled: false };
    case "hasLink":
      return {
        type: "hasLink",
        hasLink: false,
        isExcluding: state.isExcluding,
      };
    case "keywordSearch":
      return {
        type: "keywordSearch",
        searchTerm: "",
        operator: state.operator,
      };
    case "linkedProperty": {
      const innerCleared = clearFilterState(state.linkedFilterState);
      if (!innerCleared) {
        return undefined;
      }
      return { type: "linkedProperty", linkedFilterState: innerCleared };
    }
    case "custom":
      return undefined;
    default: {
      const _exhaustive: never = state;
      return undefined;
    }
  }
}

/**
 * Returns the state with `isExcluding` flipped, preserving the discriminator
 * and unwrapping/re-wrapping any `linkedProperty` wrapper. Returns `undefined`
 * if the wrapped state is one that does not support excluding.
 */
export function toggleIsExcluding(
  state: FilterState,
): FilterState | undefined {
  if (state.type === "linkedProperty") {
    const inner = state.linkedFilterState;
    return {
      type: "linkedProperty",
      linkedFilterState: { ...inner, isExcluding: !inner.isExcluding },
    };
  }
  if (!supportsExcluding(state)) {
    return undefined;
  }
  return { ...state, isExcluding: !state.isExcluding };
}

/**
 * Returns the number of values the user has actively selected for filters
 * whose UI surfaces a selected-of-total count (LISTOGRAM, SINGLE_SELECT,
 * MULTI_SELECT, TEXT_TAGS). Returns 0 for state shapes that don't have a
 * discrete list of selected values.
 */
export function getSelectedCount(state: FilterState | undefined): number {
  if (!state) {
    return 0;
  }
  if (state.type === "EXACT_MATCH") {
    return state.values.length;
  }
  if (state.type === "SELECT") {
    return state.selectedValues.length;
  }
  return 0;
}

/** Check if a filter state has an active (non-empty) value. */
export function filterHasActiveState(state: FilterState | undefined): boolean {
  if (!state) {
    return false;
  }

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
