/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import { assertUnreachable } from "../../shared/assertUnreachable.js";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";

const NO_VALUE_PLACEHOLDER = "—";

function isEmptySelectionValue(
  value: string | number | boolean | Date | null | undefined,
): boolean {
  if (value == null) {
    return true;
  }
  if (typeof value === "string") {
    return value.trim() === "";
  }
  return false;
}

function summarizeSelectionValues(
  values: ReadonlyArray<string | number | boolean | Date | null | undefined>,
  formatDate: (d: Date) => string,
): string {
  if (values.length === 0) {
    return "";
  }
  if (values.length > 1) {
    return `${values.length} selected`;
  }
  const v = values[0];
  if (v instanceof Date) {
    return formatDate(v);
  }
  if (isEmptySelectionValue(v)) {
    return NO_VALUE_PLACEHOLDER;
  }
  return String(v);
}

function formatRange<T>(
  min: T | undefined,
  max: T | undefined,
  format: (value: T) => string,
  loFallback: string,
  hiFallback: string,
): string {
  return `${min != null ? format(min) : loFallback} – ${
    max != null ? format(max) : hiFallback
  }`;
}

/** Short summary of a filter's current value for rendering inside a `FilterPopover` trigger. */
export function summarizeFilterValue<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
  state: FilterState | undefined,
): string {
  if (state == null) {
    return "";
  }
  const formatDate: (d: Date) => string =
    "formatDate" in definition && definition.formatDate
      ? definition.formatDate
      : (d) => d.toLocaleDateString();
  switch (state.type) {
    case "EXACT_MATCH":
      return summarizeSelectionValues(state.values, formatDate);
    case "SELECT":
      return summarizeSelectionValues(state.selectedValues, formatDate);
    case "CONTAINS_TEXT":
      return state.value ?? "";
    case "NUMBER_RANGE": {
      const { minValue, maxValue, includeNull } = state;
      if (minValue == null && maxValue == null) {
        return includeNull ? "Includes empty" : "";
      }
      return formatRange(minValue, maxValue, String, "−∞", "∞");
    }
    case "DATE_RANGE": {
      const { minValue, maxValue, includeNull } = state;
      if (minValue == null && maxValue == null) {
        return includeNull ? "Includes empty" : "";
      }
      return formatRange(
        minValue,
        maxValue,
        formatDate,
        NO_VALUE_PLACEHOLDER,
        NO_VALUE_PLACEHOLDER,
      );
    }
    case "TIMELINE": {
      const { startDate, endDate } = state;
      if (startDate == null && endDate == null) {
        return "";
      }
      return formatRange(
        startDate,
        endDate,
        formatDate,
        NO_VALUE_PLACEHOLDER,
        NO_VALUE_PLACEHOLDER,
      );
    }
    case "TOGGLE":
      return state.enabled ? "On" : "";
    case "hasLink":
      return state.hasLink ? "Has link" : "";
    case "linkedProperty":
      return summarizeFilterValue(definition, state.linkedFilterState);
    case "keywordSearch":
      return state.searchTerm ?? "";
    case "custom":
      return "Active";
    default:
      return assertUnreachable(state);
  }
}
