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
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterComponentType, FilterState } from "../FilterListItemApi.js";

/**
 * Filter components whose state supports the overflow (…) controls
 * (include/exclude, clear all) and/or in-filter search. Keep this in sync with
 * `supportsExcluding`/`supportsSearch` in `filterValues.ts` — these are exactly
 * the components that wrap their input in `FilterInputExcludeRow`.
 */
function emptyOverflowStateForComponent(
  component: FilterComponentType,
): FilterState | undefined {
  switch (component) {
    case "MULTI_SELECT":
    case "SINGLE_SELECT":
      return { type: "SELECT", selectedValues: [] };
    case "LISTOGRAM":
    case "TEXT_TAGS":
      return { type: "EXACT_MATCH", values: [] };
    case "CONTAINS_TEXT":
      return { type: "CONTAINS_TEXT", value: undefined };
    case "TIMELINE":
      return { type: "TIMELINE", startDate: undefined, endDate: undefined };
    case "NUMBER_RANGE":
    case "DATE_RANGE":
    case "SINGLE_DATE":
    case "MULTI_DATE":
    case "TOGGLE":
      return undefined;
    default: {
      const _exhaustive: never = component;
      return undefined;
    }
  }
}

/**
 * Returns a typed-but-empty `FilterState` to render for a filter that has no
 * stored state yet, so capability-driven header controls (the overflow … menu
 * and search) appear for empty/just-added filters without seeding the actual
 * filter state. Returns `undefined` for filter kinds/components that have no
 * such controls, leaving their display state empty.
 *
 * This is a *display-only* fallback — it is never written into the filter-state
 * map, so an untouched filter stays empty (no where-clause, not counted active).
 */
export function getEmptyDisplayState<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
): FilterState | undefined {
  switch (definition.type) {
    case "PROPERTY":
    case "STATIC_VALUES":
      return emptyOverflowStateForComponent(definition.filterComponent);
    case "LINKED_PROPERTY": {
      const inner = emptyOverflowStateForComponent(
        definition.linkedFilterComponent,
      );
      return inner == null
        ? undefined
        : { type: "linkedProperty", linkedFilterState: inner };
    }
    case "HAS_LINK":
      // hasLink supports the include/exclude overflow dropdown.
      return { type: "hasLink", hasLink: false };
    case "KEYWORD_SEARCH":
    case "CUSTOM":
      return undefined;
    default: {
      const _exhaustive: never = definition;
      return undefined;
    }
  }
}
