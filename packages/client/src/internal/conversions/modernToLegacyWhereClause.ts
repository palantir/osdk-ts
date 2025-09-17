/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
  ObjectOrInterfaceDefinition,
  PossibleWhereClauseFilters,
  WhereClause,
} from "@osdk/api";

import type {
  PropertyIdentifier,
  SearchJsonQueryV2,
} from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import {
  type DropDollarSign,
  fullyQualifyPropName,
  handleRdpFilter,
  makeGeoFilterIntersects,
  makeGeoFilterWithin,
} from "./modernToLegacyUtils.js";

/** @internal */
export function modernToLegacyWhereClause<
  T extends ObjectOrInterfaceDefinition,
>(
  whereClause: WhereClause<T>,
  objectOrInterface: T,
): SearchJsonQueryV2 {
  if ("$and" in whereClause) {
    return {
      type: "and",
      value: (whereClause.$and as WhereClause<T>[]).map(
        (clause) => modernToLegacyWhereClause(clause, objectOrInterface),
      ),
    };
  } else if ("$or" in whereClause) {
    return {
      type: "or",
      value: (whereClause.$or as WhereClause<T>[]).map(
        (clause) => modernToLegacyWhereClause(clause, objectOrInterface),
      ),
    };
  } else if ("$not" in whereClause) {
    return {
      type: "not",
      value: modernToLegacyWhereClause(
        whereClause.$not as WhereClause<T>,
        objectOrInterface,
      ),
    };
  }

  const parts = Object.entries(whereClause);

  if (parts.length === 1) {
    return handleWherePair(parts[0], objectOrInterface);
  }

  return {
    type: "and",
    value: parts.map<SearchJsonQueryV2>(
      v => handleWherePair(v, objectOrInterface),
    ),
  };
}

function handleWherePair(
  [fieldName, filter]: [string, any],
  objectOrInterface: ObjectOrInterfaceDefinition,
  structFieldSelector?: { propertyApiName: string; structFieldApiName: string },
): SearchJsonQueryV2 {
  invariant(
    filter != null,
    "Defined key values are only allowed when they are not undefined.",
  );

  if (fieldName === "$rdp" && typeof filter === "object") {
    const rdpFilters = Object.entries(filter).map(([rdpName, rdpFilter]) =>
      handleRdpFilter(rdpName, rdpFilter)
    );
    if (rdpFilters.length === 1) {
      return rdpFilters[0];
    }

    return {
      type: "and",
      value: rdpFilters,
    };
  }

  const propertyIdentifier: PropertyIdentifier | undefined =
    structFieldSelector != null
      ? {
        type: "structField",
        ...structFieldSelector,
        propertyApiName: fullyQualifyPropName(
          structFieldSelector.propertyApiName,
          objectOrInterface,
        ),
      }
      : undefined;
  const field = structFieldSelector == null
    ? fullyQualifyPropName(fieldName, objectOrInterface)
    : undefined;

  if (
    typeof filter === "string" || typeof filter === "number"
    || typeof filter === "boolean"
  ) {
    propertyIdentifier;
    return {
      type: "eq",
      ...(propertyIdentifier != null
        && { propertyIdentifier }),
      field,
      value: filter,
    };
  }

  const keysOfFilter = Object.keys(filter);

  // If any of the keys start with `$` then they must be the only one.
  // e.g. `where({ name: { $eq: "foo", $ne: "bar" } })` is invalid currently
  const hasDollarSign = keysOfFilter.some((key) => key.startsWith("$"));
  invariant(
    !hasDollarSign
      || keysOfFilter.length === 1,
    "A WhereClause Filter with multiple clauses/fields is not allowed. Instead, use an 'or'/'and' clause to combine multiple filters.",
  );

  if (!hasDollarSign) {
    const structFilter = Object.entries(filter);
    invariant(
      structFilter.length === 1,
      "Cannot filter on more than one struct field in the same clause, need to use an and clause",
    );
    const structFieldApiName = keysOfFilter[0];
    return handleWherePair(Object.entries(filter)[0], objectOrInterface, {
      propertyApiName: fieldName,
      structFieldApiName,
    });
  }

  const firstKey = keysOfFilter[0] as PossibleWhereClauseFilters;
  invariant(filter[firstKey] != null);

  if (firstKey === "$ne") {
    return {
      type: "not",
      value: {
        type: "eq",
        ...(propertyIdentifier != null && { propertyIdentifier }),
        field,
        value: filter[firstKey],
      },
    };
  }

  if (firstKey === "$within") {
    return makeGeoFilterWithin(filter[firstKey], propertyIdentifier, field);
  }
  if (firstKey === "$intersects") {
    return makeGeoFilterIntersects(filter[firstKey], propertyIdentifier, field);
  }

  if (firstKey === "$containsAllTerms" || firstKey === "$containsAnyTerm") {
    return {
      type: firstKey.substring(1) as DropDollarSign<typeof firstKey>,
      ...(propertyIdentifier != null && { propertyIdentifier }),
      field,
      value: typeof filter[firstKey] === "string"
        ? filter[firstKey]
        : filter[firstKey]["term"],
      fuzzy: typeof filter[firstKey] === "string"
        ? false
        : filter[firstKey]["fuzzySearch"] ?? false,
    };
  }

  return {
    type: firstKey.substring(1) as DropDollarSign<typeof firstKey>,
    ...(propertyIdentifier != null && { propertyIdentifier }),
    field,
    value: filter[firstKey] as any,
  };
}
