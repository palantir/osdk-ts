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
import type {
  CheckboxListFilterState,
  ContainsTextFilterState,
  DateRangeFilterState,
  FilterState,
  NumberRangeFilterState,
  ToggleFilterState,
} from "../FilterListItemApi.js";

type PropertyFilter = Record<string, unknown> | boolean | string | number;

function filterStateToPropertyFilter(
  state: FilterState,
): PropertyFilter | undefined {
  switch (state.type) {
    case "CHECKBOX_LIST": {
      const checkboxState = state as CheckboxListFilterState;
      if (checkboxState.selectedValues.length === 0) {
        return undefined;
      }
      const filter = { $in: checkboxState.selectedValues };
      if (checkboxState.isExcluding) {
        return { $not: filter };
      }
      return filter;
    }

    case "CONTAINS_TEXT": {
      const textState = state as ContainsTextFilterState;
      if (!textState.value) {
        return undefined;
      }
      const filter = { $containsAllTermsInOrder: textState.value };
      if (textState.isExcluding) {
        return { $not: filter };
      }
      return filter;
    }

    case "TOGGLE": {
      const toggleState = state as ToggleFilterState;
      return toggleState.enabled;
    }

    case "DATE_RANGE": {
      const dateState = state as DateRangeFilterState;
      const conditions: PropertyFilter[] = [];

      if (dateState.minValue) {
        conditions.push({ $gte: dateState.minValue.toISOString() });
      }
      if (dateState.maxValue) {
        conditions.push({ $lte: dateState.maxValue.toISOString() });
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
      const numState = state as NumberRangeFilterState;
      const conditions: PropertyFilter[] = [];

      if (numState.minValue !== undefined) {
        conditions.push({ $gte: numState.minValue });
      }
      if (numState.maxValue !== undefined) {
        conditions.push({ $lte: numState.maxValue });
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
      const exactState = state as { values: (string | boolean)[] };
      if (exactState.values.length === 0) {
        return undefined;
      }
      if (exactState.values.length === 1) {
        return exactState.values[0];
      }
      return { $in: exactState.values };
    }

    default:
      return undefined;
  }
}

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
        key = definition.key as string;
        state = filterStates.get(key);
        break;
      case "hasLink":
      case "linkedProperty":
        key = definition.linkName as string;
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

    if (definition.type === "property") {
      const filter = filterStateToPropertyFilter(state);
      if (filter !== undefined) {
        clauses.push({ [key]: filter });
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
