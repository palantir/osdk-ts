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

import type { Assignment } from "../../generatedNoCheck2/index.js";
import type { IdentifiedFilterDef } from "../../types/filters.js";

/**
 * Property filter definitions for the Assignments tab. Every definition has an `id` so
 * per-filter UI state can be keyed and persisted.
 */
export const ASSIGNMENT_FILTER_DEFS: Array<IdentifiedFilterDef<Assignment>> = [
  {
    type: "PROPERTY",
    id: "title",
    key: "title",
    label: "Title",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
  {
    type: "PROPERTY",
    id: "function",
    key: "function",
    label: "Function",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "assignmentType",
    key: "assignmentType",
    label: "Type",
    filterComponent: "MULTI_SELECT",
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "PROPERTY",
    id: "startDate",
    key: "startDate",
    label: "Start date",
    filterComponent: "DATE_RANGE",
    filterState: { type: "DATE_RANGE" },
  },
  {
    type: "PROPERTY",
    id: "tenureDays",
    key: "tenureDays",
    label: "Tenure (days)",
    filterComponent: "NUMBER_RANGE",
    filterState: { type: "NUMBER_RANGE" },
  },
];
