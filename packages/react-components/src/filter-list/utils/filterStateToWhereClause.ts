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

import type {
  LinkedType,
  LinkNames,
  ObjectTypeDefinition,
  WhereClause,
} from "@osdk/api";

import { assertUnreachable } from "../../shared/assertUnreachable.js";
import { formatDateForInput } from "../../shared/dateUtils.js";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type {
  LinkedFilter,
  LinkedPropertyFilterDefinition,
  LinkedPropertyFilterState,
} from "../types/LinkedFilterTypes.js";
import { NO_VALUE } from "./filterValues.js";
import { getFilterKey } from "./getFilterKey.js";

type PropertyFilter = Record<string, unknown> | boolean | string | number;

interface CompoundFilter {
  __compound: true;
  conditions: PropertyFilter[];
  includeNull: boolean;
}

function isCompoundFilter(
  f: PropertyFilter | CompoundFilter
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
  propertyType: string | undefined
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

function formatDateValue(date: Date, propertyType: string | undefined): string {
  if (propertyType === "datetime") {
    return formatDateForInput(date);
  }
  return date.toISOString();
}

function filterStateToPropertyFilter(
  state: FilterState,
  propertyType?: string
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
            : (v as string | number | boolean)
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
 * Builds a WHERE clause fragment for a single property key from filter state.
 */
export function buildPropertyKeyClause(
  key: string | number | symbol,
  state: FilterState,
  propertyType?: string
): Record<string, unknown> | undefined {
  const filter = filterStateToPropertyFilter(state, propertyType);
  if (filter === undefined) {
    return undefined;
  }
  const isExcluding = "isExcluding" in state && state.isExcluding;
  if (isCompoundFilter(filter)) {
    const fieldClauses = filter.conditions.map((c) => ({
      [key]: c,
    }));
    let rangeClause: Record<string, unknown> =
      fieldClauses.length === 1 ? fieldClauses[0] : { $and: fieldClauses };
    if (filter.includeNull) {
      rangeClause = {
        $or: [rangeClause, { [key]: { $isNull: true } }],
      };
    }
    return isExcluding ? { $not: rangeClause } : rangeClause;
  } else {
    const clause = { [key]: filter };
    return isExcluding ? { $not: clause } : clause;
  }
}

export interface PropertyTypeInfo {
  type: string;
  multiplicity: boolean;
}

/**
 * Builds the where clause for a KEYWORD_SEARCH filter, or `undefined` when the
 * filter is inactive / not applicable.
 */
function buildKeywordSearchClause<Q extends ObjectTypeDefinition>(
  definition: Extract<FilterDefinitionUnion<Q>, { type: "KEYWORD_SEARCH" }>,
  state: FilterState,
  propertyTypes?: Map<string, PropertyTypeInfo>
): Record<string, unknown> | undefined {
  if (state.type !== "keywordSearch") {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn(
        `[FilterList] State type mismatch for keywordSearch filter: expected keywordSearch, got ${state.type}`
      );
    }
    return undefined;
  }
  if (!state.searchTerm) {
    return undefined;
  }
  const searchTerm = state.searchTerm.trim();
  if (!searchTerm) {
    return undefined;
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
          "[FilterList] Keyword search with properties: 'all' requires propertyTypes to be provided. Filter will be skipped."
        );
      }
      return undefined;
    }
  } else {
    propertiesToSearch = properties;
  }

  if (propertiesToSearch.length === 0) {
    return undefined;
  }

  const containsOp =
    state.operator === "AND" ? "$containsAllTerms" : "$containsAnyTerm";

  const propertySearches = propertiesToSearch.map((prop) => ({
    [prop]: { [containsOp]: searchTerm },
  }));

  const searchClause: Record<string, unknown> =
    propertySearches.length === 1
      ? propertySearches[0]
      : { $or: propertySearches };
  return state.isExcluding ? { $not: searchClause } : searchClause;
}

/**
 * Builds a `WhereClause<Q>` from direct (non-link-traversing) filter
 * definitions and current states. LINKED_PROPERTY filters are excluded —
 * use `getActiveLinkedFilters` for those and apply via `narrowObjectSet`.
 */
export function buildWhereClause<Q extends ObjectTypeDefinition>(
  definitions: Array<FilterDefinitionUnion<Q>> | undefined,
  filterStates: Map<string, FilterState>,
  propertyTypes?: Map<string, PropertyTypeInfo>,
  excludeFilterKey?: string
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
        const propertyType = propertyTypes?.get(definition.key as string)?.type;
        const clause = buildPropertyKeyClause(
          definition.key,
          state,
          propertyType
        );
        if (clause !== undefined) {
          clauses.push(clause);
        }
        break;
      }

      case "HAS_LINK": {
        if (state.type !== "hasLink") {
          if (process.env.NODE_ENV !== "production") {
            // eslint-disable-next-line no-console
            console.warn(
              `[FilterList] State type mismatch for hasLink filter "${definition.linkName}": expected hasLink, got ${state.type}`
            );
          }
          break;
        }
        if (!state.hasLink) {
          break;
        }
        const hasLinkClause = { [definition.linkName]: { $isNotNull: true } };
        // "Excluding" keeps objects that do NOT have the link.
        clauses.push(
          state.isExcluding ? { $not: hasLinkClause } : hasLinkClause
        );
        break;
      }

      case "LINKED_PROPERTY":
        // Handled by getActiveLinkedFilters — can't be expressed as a
        // WhereClause<Q>.
        break;

      case "KEYWORD_SEARCH": {
        const clause = buildKeywordSearchClause(
          definition,
          state,
          propertyTypes
        );
        if (clause !== undefined) {
          clauses.push(clause);
        }
        break;
      }

      case "CUSTOM": {
        if (state.type !== "custom") {
          if (process.env.NODE_ENV !== "production") {
            // eslint-disable-next-line no-console
            console.warn(
              `[FilterList] State type mismatch for custom filter "${definition.key}": expected custom, got ${state.type}`
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

      case "STATIC_VALUES": {
        if (definition.toWhereClause) {
          const staticClause = definition.toWhereClause(state);
          if (staticClause && Object.keys(staticClause).length > 0) {
            clauses.push(staticClause as Record<string, unknown>);
          }
        } else {
          const clause = buildPropertyKeyClause(definition.key, state);
          if (clause !== undefined) {
            clauses.push(clause);
          }
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

/**
 * Builds the inner `WhereClause` for a linked-property filter, typed against
 * the linked object type. Returns `undefined` when the state doesn't yield a
 * predicate (e.g. empty selection).
 */
export function buildLinkedInnerWhere<
  Q extends ObjectTypeDefinition,
  L extends LinkNames<Q>,
>(
  definition: LinkedPropertyFilterDefinition<Q, L>,
  state: LinkedPropertyFilterState
): WhereClause<LinkedType<Q, L>> | undefined {
  const record = buildPropertyKeyClause(
    definition.linkedPropertyKey,
    state.linkedFilterState
  );
  if (record === undefined) {
    return undefined;
  }
  return record as WhereClause<LinkedType<Q, L>>;
}

/**
 * Returns the active LINKED_PROPERTY filters as `LinkedFilter<Q>` records.
 */
export function getActiveLinkedFilters<Q extends ObjectTypeDefinition>(
  definitions: Array<FilterDefinitionUnion<Q>> | undefined,
  filterStates: Map<string, FilterState>,
  excludeFilterKey?: string
): Array<LinkedFilter<Q>> {
  if (!definitions || definitions.length === 0) {
    return [];
  }
  const result: Array<LinkedFilter<Q>> = [];
  for (const definition of definitions) {
    if (definition.type !== "LINKED_PROPERTY") {
      continue;
    }
    const key = getFilterKey(definition);
    if (key === excludeFilterKey) {
      continue;
    }
    const state = filterStates.get(key);
    if (!state || state.type !== "linkedProperty") {
      continue;
    }
    if (definition.reverseLinkName == null) {
      continue;
    }
    const innerWhere = buildLinkedInnerWhere(definition, state);
    if (innerWhere === undefined) {
      continue;
    }
    result.push({
      linkName: definition.linkName,
      reverseLinkName: definition.reverseLinkName,
      innerWhere,
    } as LinkedFilter<Q>);
  }
  return result;
}

/**
 * Splits values into real values and the NO_VALUE sentinel, returning $isNull
 * for the sentinel. A literal empty string `""` is a real value and matches
 * via equality (`{ key: "" }`), not `$isNull`.
 */
function buildValueOrNullFilter(
  values: (string | number | boolean)[]
): PropertyFilter | CompoundFilter | undefined {
  if (values.length === 0) {
    return undefined;
  }

  const realValues = values.filter((v) => v !== NO_VALUE);
  const hasNoValue = realValues.length < values.length;

  const valueClause: PropertyFilter | undefined =
    realValues.length === 0
      ? undefined
      : realValues.length === 1
        ? realValues[0]
        : { $in: realValues };

  if (!hasNoValue) {
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
