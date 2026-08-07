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
import { formatDateForInput } from "../../shared/dateUtils.js";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { FilterListLabels } from "../FilterListLabels.js";
import { resolveLabel } from "../FilterListLabels.js";
import { NO_VALUE } from "./filterValues.js";

// Em-dash reads naturally as an unbounded range half (e.g. "— – Jan 1").
const NO_VALUE_PLACEHOLDER = "—";

function summarizeSelectionValues(
  values: ReadonlyArray<string | number | boolean | Date | null | undefined>,
  formatDate: (d: Date) => string,
  labels: Partial<FilterListLabels> | undefined,
): string {
  if (values.length === 0) {
    return "";
  }
  if (values.length > 1) {
    return resolveLabel(labels, "summaryMultipleSelected")(values.length);
  }
  const v = values[0];
  if (v instanceof Date) {
    return formatDate(v);
  }
  if (v == null || v === NO_VALUE) {
    // Standalone SELECT triggers need the explicit phrase; a bare em-dash
    // isn't discoverable.
    return resolveLabel(labels, "summaryNoValue");
  }
  if (v === "") {
    // Literal empty string is a real, selectable value distinct from "No value".
    return resolveLabel(labels, "emptyStringValue");
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

/**
 * Short summary of a filter's current value for rendering inside a
 * `FilterPopover` trigger.
 *
 * @param labels Optional label overrides. Provide any subset; unset keys fall
 * back to the built-in English defaults. Pass the same object given to
 * `FilterList`/`FilterPopover` so the summary matches the rest of the UI.
 */
export function summarizeFilterValue<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
  state: FilterState | undefined,
  labels?: Partial<FilterListLabels>,
): string {
  if (state == null) {
    return "";
  }
  const formatDate: (d: Date) => string =
    "formatDate" in definition && definition.formatDate
      ? definition.formatDate
      : formatDateForInput;
  switch (state.type) {
    case "EXACT_MATCH":
      return summarizeSelectionValues(state.values, formatDate, labels);
    case "SELECT":
      return summarizeSelectionValues(state.selectedValues, formatDate, labels);
    case "CONTAINS_TEXT":
      return state.value ?? "";
    case "NUMBER_RANGE": {
      const { minValue, maxValue, includeNull } = state;
      if (minValue == null && maxValue == null) {
        return includeNull ? resolveLabel(labels, "summaryIncludesEmpty") : "";
      }
      return formatRange(minValue, maxValue, String, "−∞", "∞");
    }
    case "DATE_RANGE": {
      const { minValue, maxValue, includeNull } = state;
      if (minValue == null && maxValue == null) {
        return includeNull ? resolveLabel(labels, "summaryIncludesEmpty") : "";
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
      return state.enabled ? resolveLabel(labels, "summaryEnabled") : "";
    case "hasLink":
      return state.hasLink ? resolveLabel(labels, "summaryHasLink") : "";
    case "linkedProperty":
      // Forwards the outer definition so options like formatDate flow into the
      // linked summary; assumes the linked property shares the outer property's
      // type (true for current consumers).
      return summarizeFilterValue(definition, state.linkedFilterState, labels);
    case "keywordSearch":
      return state.searchTerm ?? "";
    case "custom":
      return resolveLabel(labels, "summaryCustom");
    default:
      return assertUnreachable(state);
  }
}
