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
import React from "react";
import { assertUnreachable } from "../../shared/assertUnreachable.js";
import { NoValueLabel } from "../base/inputs/NoValueLabel.js";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { isEmptyValue } from "./filterValues.js";

export function getFilterLabel<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
): string {
  if ("label" in definition && definition.label) {
    return definition.label;
  }

  switch (definition.type) {
    case "PROPERTY":
      return definition.key;
    case "HAS_LINK":
    case "LINKED_PROPERTY":
      return definition.linkName;
    case "KEYWORD_SEARCH":
      return "Search";
    case "CUSTOM":
      return definition.key;
    case "STATIC_VALUES":
      return definition.key;
    default:
      return assertUnreachable(definition);
  }
}

/**
 * Returns a short summary of the filter's current value, suitable for the
 * label inside a horizontal filter trigger. Examples:
 *   empty  → ""
 *   single → "Active"
 *   multi  → "3 selected"
 *   range  → "May 1 – May 31"
 *
 * The caller wraps this with the filter label (e.g. `Status: Active`).
 */
export function summarizeFilterValue<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
  state: FilterState | undefined,
): React.ReactNode {
  if (state == null) return "";
  switch (state.type) {
    case "EXACT_MATCH": {
      const values = state.values;
      if (values.length === 0) return "";
      if (values.length === 1) {
        const v = values[0];
        return isEmptyValue(v)
          ? React.createElement(NoValueLabel)
          : String(v);
      }
      return `${values.length} selected`;
    }
    case "SELECT": {
      const values = state.selectedValues;
      if (values.length === 0) return "";
      if (values.length === 1) {
        const v = values[0];
        if (v instanceof Date) {
          const formatDate = "formatDate" in definition && definition.formatDate
            ? (definition.formatDate as (d: Date) => string)
            : undefined;
          return formatDate ? formatDate(v) : v.toLocaleDateString();
        }
        return isEmptyValue(v)
          ? React.createElement(NoValueLabel)
          : String(v);
      }
      return `${values.length} selected`;
    }
    case "CONTAINS_TEXT":
      return state.value && state.value.length > 0 ? state.value : "";
    case "NUMBER_RANGE": {
      const { minValue, maxValue } = state;
      if (minValue == null && maxValue == null) return "";
      const fmt = (n: number) => String(n);
      return `${minValue != null ? fmt(minValue) : "−∞"} – ${
        maxValue != null ? fmt(maxValue) : "∞"
      }`;
    }
    case "DATE_RANGE": {
      const { minValue, maxValue } = state;
      if (minValue == null && maxValue == null) return "";
      const formatDate = "formatDate" in definition && definition.formatDate
        ? (definition.formatDate as (d: Date) => string)
        : (d: Date) => d.toLocaleDateString();
      return `${minValue != null ? formatDate(minValue) : "—"} – ${
        maxValue != null ? formatDate(maxValue) : "—"
      }`;
    }
    case "TIMELINE": {
      const { startDate, endDate } = state;
      if (startDate == null && endDate == null) return "";
      const formatDate = "formatDate" in definition && definition.formatDate
        ? (definition.formatDate as (d: Date) => string)
        : (d: Date) => d.toLocaleDateString();
      return `${startDate != null ? formatDate(startDate) : "—"} – ${
        endDate != null ? formatDate(endDate) : "—"
      }`;
    }
    case "TOGGLE":
      return state.enabled ? "On" : "";
    case "hasLink":
      return state.hasLink ? "Has link" : "";
    case "linkedProperty":
      return summarizeFilterValue(definition, state.linkedFilterState);
    case "keywordSearch":
      return state.searchTerm && state.searchTerm.length > 0
        ? state.searchTerm
        : "";
    case "custom":
      return "Active";
    default: {
      const _exhaustive: never = state;
      void _exhaustive;
      return "";
    }
  }
}
