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
import { assertUnreachable } from "../../shared/assertUnreachable.js";
import { formatDateForInput } from "../../shared/dateUtils.js";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { getFilterKey } from "./getFilterKey.js";

type PropertyFilter = Record<string, unknown> | boolean | string | number;

interface CompoundFilter {
  __compound: true;
  conditions: PropertyFilter[];
  includeNull: boolean;
}

function isCompoundFilter(
  f: PropertyFilter | CompoundFilter,
): f is CompoundFilter {
  return typeof f === "object" && f != null && "__compound" in f;
}

const NUMERIC_BOUNDS: Record<string, { min: number; max: number }> = {
  byte: { min: -128, max: 127 },
  short: { min: -32_768, max: 32_767 },
  integer: { min: -2_147_483_648, max: 2_147_483_647 },
  long: { min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER },
};

function clampToPropertyBounds(
  value: number,
  propertyType: string | undefined,
): number {
  if (propertyType === undefined) {
    return value;
  }
  const bounds = NUMERIC_BOUNDS[propertyType];
  if (bounds === undefined) {
    return value;
  }
  return Math.max(bounds.min, Math.min(bounds.max, value));
}

function formatDateValue(
  date: Date,
  propertyType: string | undefined,
): string {
  if (propertyType === "datetime") {
    return formatDateForInput(date);
  }
  return date.toISOString();
}

function filterStateToPropertyFilter(
  state: FilterState,
  propertyType?: string,
): PropertyFilter | CompoundFilter | undefined {
  switch (state.type) {
    case "CONTAINS_TEXT": {
      if (!state.value) {
        return undefined;
      }
      return { $containsAnyTerm: state.value };
    }

    case "TOGGLE": {
      return state.enabled;
    }

    case "DATE_RANGE": {
      const conditions: PropertyFilter[] = [];

      if (state.minValue !== undefined) {
        conditions.push({
          $gte: formatDateValue(state.minValue, propertyType),
        });
      }
      if (state.maxValue !== undefined) {
        conditions.push({
          $lte: formatDateValue(state.maxValue, propertyType),
        });
      }

      if (conditions.length === 0 && !state.includeNull) {
        return undefined;
      }

      if (conditions.length === 0 && state.includeNull) {
        return { $isNull: true };
      }

      if (conditions.length === 1 && !state.includeNull) {
        return conditions[0];
      }

      return {
        __compound: true,
        conditions,
        includeNull: state.includeNull ?? false,
      };
    }

    case "NUMBER_RANGE": {
      const conditions: PropertyFilter[] = [];

      if (state.minValue !== undefined) {
        conditions.push({
          $gte: clampToPropertyBounds(state.minValue, propertyType),
        });
      }
      if (state.maxValue !== undefined) {
        conditions.push({
          $lte: clampToPropertyBounds(state.maxValue, propertyType),
        });
      }

      if (conditions.length === 0 && !state.includeNull) {
        return undefined;
      }

      if (conditions.length === 0 && state.includeNull) {
        return { $isNull: true };
      }

      if (conditions.length === 1 && !state.includeNull) {
        return conditions[0];
      }

      return {
        __compound: true,
        conditions,
        includeNull: state.includeNull ?? false,
      };
    }

    case "EXACT_MATCH": {
      return buildValueOrNullFilter(state.values);
    }

    case "SELECT": {
      if (state.selectedValues.length === 0) {
        return undefined;
      }
      const values: (string | number | boolean)[] = state.selectedValues.map(
        (v) =>
          v instanceof Date
            ? formatDateValue(v, propertyType)
            : v as string | number | boolean,
      );
      return buildValueOrNullFilter(values);
    }

    case "TIMELINE": {
      const conditions: PropertyFilter[] = [];
      if (state.startDate !== undefined) {
        conditions.push({
          $gte: formatDateValue(state.startDate, propertyType),
        });
      }
      if (state.endDate !== undefined) {
        conditions.push({
          $lte: formatDateValue(state.endDate, propertyType),
        });
      }
      if (conditions.length === 0) {
        return undefined;
      }
      if (conditions.length === 1) {
        return conditions[0];
      }
      return {
        __compound: true,
        conditions,
        includeNull: false,
      };
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
export interface PropertyTypeInfo {
  type: string;
  multiplicity: boolean;
}

export function buildWhereClause<Q extends ObjectTypeDefinition>(
  definitions: Array<FilterDefinitionUnion<Q>> | undefined,
  filterStates: Map<string, FilterState>,
  propertyTypes?: Map<string, PropertyTypeInfo>,
  excludeFilterKey?: string,
): WhereClause<Q> {
  if (!definitions || definitions.length === 0) {
    return {} as WhereClause<Q>;
  }

  const clauses: Array<Record<string, unknown>> = [];

  for (const definition of definitions) {
    const key = getFilterKey(definition);
    if (key === excludeFilterKey) {
      continue;
    }
    const state = filterStates.get(key);

    if (!state) {
      continue;
    }

    switch (definition.type) {
      case "PROPERTY": {
        const propertyType = propertyTypes?.get(definition.key as string)
          ?.type;
        const filter = filterStateToPropertyFilter(state, propertyType);
        if (filter !== undefined) {
          const isExcluding = "isExcluding" in state && state.isExcluding;
          if (isCompoundFilter(filter)) {
            const fieldClauses = filter.conditions.map(c => ({
              [definition.key]: c,
            }));
            let rangeClause: Record<string, unknown> = fieldClauses.length === 1
              ? fieldClauses[0]
              : { $and: fieldClauses };
            if (filter.includeNull) {
              rangeClause = {
                $or: [rangeClause, { [definition.key]: { $isNull: true } }],
              };
            }
            clauses.push(isExcluding ? { $not: rangeClause } : rangeClause);
          } else {
            const clause = { [definition.key]: filter };
            clauses.push(isExcluding ? { $not: clause } : clause);
          }
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
          if (propertyTypes && propertyTypes.size > 0) {
            propertiesToSearch = [];
            for (const [key, info] of propertyTypes) {
              if (info.type === "string" && !info.multiplicity) {
                propertiesToSearch.push(key);
              }
            }
          } else {
            if (process.env.NODE_ENV !== "production") {
              // eslint-disable-next-line no-console
              console.warn(
                "[FilterList] Keyword search with properties: 'all' requires propertyTypes to be provided. Filter will be skipped.",
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
          [prop]: { [containsOp]: searchTerm },
        }));

        let searchClause: Record<string, unknown>;
        if (propertySearches.length === 1) {
          searchClause = propertySearches[0];
        } else {
          searchClause = { $or: propertySearches };
        }
        clauses.push(
          state.isExcluding ? { $not: searchClause } : searchClause,
        );
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

  return { $and: clauses } as WhereClause<Q>;
}

/** Splits values into non-empty and empty, returning $isNull for empty strings. */
function buildValueOrNullFilter(
  values: (string | number | boolean)[],
): PropertyFilter | CompoundFilter | undefined {
  if (values.length === 0) {
    return undefined;
  }

  const nonEmpty = values.filter((v) => v !== "");
  const hasEmpty = nonEmpty.length < values.length;

  const valueClause: PropertyFilter | undefined = nonEmpty.length === 0
    ? undefined
    : nonEmpty.length === 1
    ? nonEmpty[0]
    : { $in: nonEmpty };

  if (!hasEmpty) {
    return valueClause;
  }

  if (valueClause === undefined) {
    return { $isNull: true };
  }

  return {
    __compound: true,
    conditions: [valueClause],
    includeNull: true,
  };
}
