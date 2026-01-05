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

import type { ObjectTypeDefinition, WhereClause } from "@osdk/api";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { CustomFilterState } from "../types/CustomRendererTypes.js";
import type { KeywordSearchFilterState } from "../types/KeywordSearchTypes.js";
import type {
  HasLinkFilterState,
  LinkedPropertyFilterState,
} from "../types/LinkedFilterTypes.js";
import { assertUnreachable } from "./assertUnreachable.js";

type PropertyFilter = Record<string, unknown> | boolean | string | number;

function filterStateToPropertyFilter(
  state: FilterState,
): PropertyFilter | undefined {
  switch (state.type) {
    case "CHECKBOX_LIST": {
      if (state.selectedValues.length === 0) {
        return undefined;
      }
      const filter = { $in: state.selectedValues };
      if (state.isExcluding) {
        return { $not: filter };
      }
      return filter;
    }

    case "CONTAINS_TEXT": {
      if (!state.value) {
        return undefined;
      }
      // Use $startsWith for prefix matching - "consult" matches "Consultant"
      const filter = { $startsWith: state.value };
      if (state.isExcluding) {
        return { $not: filter };
      }
      return filter;
    }

    case "TOGGLE": {
      return state.enabled;
    }

    case "DATE_RANGE": {
      const conditions: PropertyFilter[] = [];

      if (state.minValue) {
        conditions.push({ $gte: state.minValue.toISOString() });
      }
      if (state.maxValue) {
        conditions.push({ $lte: state.maxValue.toISOString() });
      }

      if (conditions.length === 0) {
        return undefined;
      }
      if (conditions.length === 1) {
        return conditions[0];
      }
      return { $and: conditions };
    }

    case "NUMBER_RANGE": {
      const conditions: PropertyFilter[] = [];

      if (state.minValue !== undefined) {
        conditions.push({ $gte: state.minValue });
      }
      if (state.maxValue !== undefined) {
        conditions.push({ $lte: state.maxValue });
      }

      if (conditions.length === 0) {
        return undefined;
      }
      if (conditions.length === 1) {
        return conditions[0];
      }
      return { $and: conditions };
    }

    case "EXACT_MATCH": {
      if (state.values.length === 0) {
        return undefined;
      }
      if (state.values.length === 1) {
        return state.values[0];
      }
      return { $in: state.values };
    }

    case "SINGLE_SELECT": {
      if (state.selectedValue === undefined) {
        return undefined;
      }
      return state.selectedValue;
    }

    case "MULTI_SELECT": {
      if (state.selectedValues.length === 0) {
        return undefined;
      }
      if (state.selectedValues.length === 1) {
        return state.selectedValues[0];
      }
      return { $in: state.selectedValues };
    }

    case "SINGLE_DATE": {
      if (state.selectedDate === undefined) {
        return undefined;
      }
      return state.selectedDate.toISOString();
    }

    case "MULTI_DATE": {
      if (state.selectedDates.length === 0) {
        return undefined;
      }
      return { $in: state.selectedDates.map((d) => d.toISOString()) };
    }

    case "TIMELINE": {
      const conditions: PropertyFilter[] = [];
      if (state.startDate) {
        conditions.push({ $gte: state.startDate.toISOString() });
      }
      if (state.endDate) {
        conditions.push({ $lte: state.endDate.toISOString() });
      }
      if (conditions.length === 0) {
        return undefined;
      }
      if (conditions.length === 1) {
        return conditions[0];
      }
      return { $and: conditions };
    }

    // These filter types are handled separately in buildWhereClause
    // since they need access to the full definition, not just state
    case "HAS_LINK":
    case "LINKED_PROPERTY":
    case "KEYWORD_SEARCH":
    case "CUSTOM":
      return undefined;

    default:
      return assertUnreachable(state);
  }
}

/**
 * Builds a WhereClause from filter definitions and their current states.
 *
 * Note: The `as WhereClause<Q>` casts are necessary because we're building
 * clauses dynamically from property keys determined at runtime. TypeScript
 * cannot verify that the constructed clause structure matches the generic Q's
 * expected shape, but the structure is guaranteed to be valid by construction.
 */
export function buildWhereClause<Q extends ObjectTypeDefinition>(
  definitions: Array<FilterDefinitionUnion<Q>> | undefined,
  filterStates: Map<string, FilterState>,
  operator: "and" | "or",
): WhereClause<Q> {
  if (!definitions || definitions.length === 0) {
    return {} as WhereClause<Q>;
  }

  const clauses: Array<Record<string, unknown>> = [];

  for (const definition of definitions) {
    let key: string;
    let state: FilterState | undefined;

    switch (definition.type) {
      case "property":
        key = definition.key;
        state = filterStates.get(key);
        break;
      case "hasLink":
      case "linkedProperty":
        key = definition.linkName;
        state = filterStates.get(key);
        break;
      case "keywordSearch":
        key = `keywordSearch-${
          Array.isArray(definition.properties)
            ? definition.properties.join("-")
            : "all"
        }`;
        state = filterStates.get(key);
        break;
      case "custom":
        key = definition.key;
        state = filterStates.get(key);
        break;
      default:
        continue;
    }

    if (!state) {
      continue;
    }

    switch (definition.type) {
      case "property": {
        const filter = filterStateToPropertyFilter(state);
        if (filter !== undefined) {
          clauses.push({ [key]: filter });
        }
        break;
      }

      case "hasLink": {
        const hasLinkState = state as HasLinkFilterState;
        if (hasLinkState.type === "HAS_LINK") {
          // Filter objects based on whether they have linked objects
          // The clause structure depends on how links are queried in OSDK
          if (hasLinkState.hasLink) {
            // Has at least one linked object
            clauses.push({ [definition.linkName]: { $isNotNull: true } });
          } else {
            // Has no linked objects
            clauses.push({ [definition.linkName]: { $isNull: true } });
          }
        }
        break;
      }

      case "linkedProperty": {
        const linkedState = state as LinkedPropertyFilterState;
        if (
          linkedState.type === "LINKED_PROPERTY"
          && linkedState.linkedFilterState
        ) {
          // Build the filter for the linked property
          const linkedFilter = filterStateToPropertyFilter(
            linkedState.linkedFilterState,
          );
          if (linkedFilter !== undefined) {
            // Nested filter on linked object's property
            clauses.push({
              [definition.linkName]: {
                [definition.linkedPropertyKey]: linkedFilter,
              },
            });
          }
        }
        break;
      }

      case "keywordSearch": {
        const searchState = state as KeywordSearchFilterState;
        if (searchState.type === "KEYWORD_SEARCH" && searchState.searchTerm) {
          const searchTerm = searchState.searchTerm.trim();
          if (searchTerm) {
            // Build search filter across specified properties
            const properties = definition.properties;
            if (properties === "all") {
              // Use $containsAllTermsInOrder for full-text search
              clauses.push({
                $containsAllTermsInOrder: searchTerm,
              });
            } else {
              // Search specific properties with $or
              const propertySearches = properties.map((prop) => ({
                [prop]: { $startsWith: searchTerm },
              }));
              if (propertySearches.length === 1) {
                clauses.push(propertySearches[0]);
              } else if (propertySearches.length > 1) {
                clauses.push({ $or: propertySearches });
              }
            }
          }
        }
        break;
      }

      case "custom": {
        const customState = state as CustomFilterState;
        if (customState.type === "CUSTOM") {
          // Custom filters provide their own toWhereClause function
          const customClause = definition.toWhereClause(customState);
          if (customClause && Object.keys(customClause).length > 0) {
            clauses.push(customClause as Record<string, unknown>);
          }
        }
        break;
      }
    }
  }

  if (clauses.length === 0) {
    return {} as WhereClause<Q>;
  }

  if (clauses.length === 1) {
    return clauses[0] as WhereClause<Q>;
  }

  if (operator === "and") {
    return { $and: clauses } as WhereClause<Q>;
  }

  return { $or: clauses } as WhereClause<Q>;
}
