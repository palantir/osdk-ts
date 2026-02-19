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
import { assertUnreachable } from "./assertUnreachable.js";
import { getFilterKey } from "./getFilterKey.js";

type PropertyFilter = Record<string, unknown> | boolean | string | number;

function filterStateToPropertyFilter(
  state: FilterState,
): PropertyFilter | undefined {
  switch (state.type) {
    case "CONTAINS_TEXT": {
      if (!state.value) {
        return undefined;
      }
      const filter = { $containsAnyTerm: state.value };
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

      if (state.minValue !== undefined) {
        conditions.push({ $gte: state.minValue.toISOString() });
      }
      if (state.maxValue !== undefined) {
        conditions.push({ $lte: state.maxValue.toISOString() });
      }

      if (conditions.length === 0 && !state.includeNull) {
        return undefined;
      }

      let rangeFilter: PropertyFilter | undefined;
      if (conditions.length === 1) {
        rangeFilter = conditions[0];
      } else if (conditions.length > 1) {
        rangeFilter = { $and: conditions };
      }

      if (state.includeNull) {
        if (rangeFilter) {
          return { $or: [rangeFilter, { $isNull: true }] };
        }
        return { $isNull: true };
      }

      return rangeFilter;
    }

    case "NUMBER_RANGE": {
      const conditions: PropertyFilter[] = [];

      if (state.minValue !== undefined) {
        conditions.push({ $gte: state.minValue });
      }
      if (state.maxValue !== undefined) {
        conditions.push({ $lte: state.maxValue });
      }

      if (conditions.length === 0 && !state.includeNull) {
        return undefined;
      }

      let rangeFilter: PropertyFilter | undefined;
      if (conditions.length === 1) {
        rangeFilter = conditions[0];
      } else if (conditions.length > 1) {
        rangeFilter = { $and: conditions };
      }

      if (state.includeNull) {
        if (rangeFilter) {
          return { $or: [rangeFilter, { $isNull: true }] };
        }
        return { $isNull: true };
      }

      return rangeFilter;
    }

    case "EXACT_MATCH": {
      if (state.values.length === 0) {
        return undefined;
      }
      const filter = state.values.length === 1
        ? state.values[0]
        : { $in: state.values };
      if (state.isExcluding) {
        return { $not: filter };
      }
      return filter;
    }

    case "SELECT": {
      if (state.selectedValues.length === 0) {
        return undefined;
      }
      const isDateValue = state.selectedValues[0] instanceof Date;
      const values: (string | number | boolean)[] = isDateValue
        ? state.selectedValues.map((v) => (v as Date).toISOString())
        : state.selectedValues as (string | number | boolean)[];
      const filter = values.length === 1 ? values[0] : { $in: values };
      if (state.isExcluding) {
        return { $not: filter };
      }
      return filter;
    }

    case "TIMELINE": {
      const conditions: PropertyFilter[] = [];
      if (state.startDate !== undefined) {
        conditions.push({ $gte: state.startDate.toISOString() });
      }
      if (state.endDate !== undefined) {
        conditions.push({ $lte: state.endDate.toISOString() });
      }
      if (conditions.length === 0) {
        return undefined;
      }
      let rangeFilter: PropertyFilter;
      if (conditions.length === 1) {
        rangeFilter = conditions[0];
      } else {
        rangeFilter = { $and: conditions };
      }
      if (state.isExcluding) {
        return { $not: rangeFilter };
      }
      return rangeFilter;
    }

    // These filter types are handled separately in buildWhereClause
    // since they need access to the full definition, not just state
    case "hasLink":
    case "linkedProperty":
    case "keywordSearch":
    case "custom":
      return undefined;

    default:
      return assertUnreachable(state);
  }
}

/**
 * Builds a WhereClause from filter definitions and their current states.
 *
 * The filterStates map uses string keys derived from filter definitions via
 * getFilterKey(). This ensures stable state lookups even when filters are
 * reordered or definition object references change.
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
  objectType?: Q,
): WhereClause<Q> {
  if (!definitions || definitions.length === 0) {
    return {} as WhereClause<Q>;
  }

  const clauses: Array<Record<string, unknown>> = [];

  for (const definition of definitions) {
    const state = filterStates.get(getFilterKey(definition));

    if (!state) {
      continue;
    }

    switch (definition.type) {
      case "PROPERTY": {
        const filter = filterStateToPropertyFilter(state);
        if (filter !== undefined) {
          clauses.push({ [definition.key]: filter });
        }
        break;
      }

      case "HAS_LINK": {
        if (state.type !== "hasLink") {
          if (process.env.NODE_ENV !== "production") {
            // eslint-disable-next-line no-console
            console.warn(
              `[FilterList] State type mismatch for hasLink filter "${definition.linkName}": expected hasLink, got ${state.type}`,
            );
          }
          break;
        }
        if (!state.hasLink) {
          break;
        }
        clauses.push({ [definition.linkName]: { $isNotNull: true } });
        break;
      }

      case "LINKED_PROPERTY": {
        // OSDK WhereClause does not support filtering through links.
        // Link-based filtering requires ObjectSet operations (pivotTo/intersect).
        // LinkedProperty filters render UI for selection but cannot be included
        // in the where clause. Consumers needing linked property filtering must
        // implement it using ObjectSet.pivotTo() and intersect().
        break;
      }

      case "KEYWORD_SEARCH": {
        if (state.type !== "keywordSearch") {
          if (process.env.NODE_ENV !== "production") {
            // eslint-disable-next-line no-console
            console.warn(
              `[FilterList] State type mismatch for keywordSearch filter: expected keywordSearch, got ${state.type}`,
            );
          }
          break;
        }
        if (!state.searchTerm) {
          break;
        }
        // TypeScript narrows state to KeywordSearchFilterState
        const searchTerm = state.searchTerm.trim();
        if (!searchTerm) {
          break;
        }

        const properties = definition.properties;
        let propertiesToSearch: string[];

        if (properties === "all") {
          if (objectType?.__DefinitionMetadata?.properties) {
            propertiesToSearch = Object.entries(
              objectType.__DefinitionMetadata.properties,
            )
              .filter(([, prop]) =>
                prop.type === "string" && !prop.multiplicity
              )
              .map(([key]) => key);
          } else {
            if (process.env.NODE_ENV !== "production") {
              // eslint-disable-next-line no-console
              console.warn(
                "[FilterList] Keyword search with properties: 'all' requires objectType to be provided. Filter will be skipped.",
              );
            }
            break;
          }
        } else {
          propertiesToSearch = properties;
        }

        if (propertiesToSearch.length === 0) {
          break;
        }

        const containsOp = state.operator === "AND"
          ? "$containsAllTerms"
          : "$containsAnyTerm";

        const propertySearches = propertiesToSearch.map((prop) => ({
          [prop]: state.isExcluding
            ? { $not: { [containsOp]: searchTerm } }
            : { [containsOp]: searchTerm },
        }));

        if (propertySearches.length === 1) {
          clauses.push(propertySearches[0]);
        } else {
          clauses.push({ $or: propertySearches });
        }
        break;
      }

      case "CUSTOM": {
        if (state.type !== "custom") {
          if (process.env.NODE_ENV !== "production") {
            // eslint-disable-next-line no-console
            console.warn(
              `[FilterList] State type mismatch for custom filter "${definition.key}": expected custom, got ${state.type}`,
            );
          }
          break;
        }
        // TypeScript narrows state to CustomFilterState
        const customClause = definition.toWhereClause(state);
        if (customClause && Object.keys(customClause).length > 0) {
          clauses.push(customClause as Record<string, unknown>);
        }
        break;
      }

      default:
        assertUnreachable(definition);
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
