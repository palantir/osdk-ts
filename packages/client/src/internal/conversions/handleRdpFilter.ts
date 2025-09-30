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

import type { PossibleWhereClauseFilters } from "@osdk/api";
import type {
  PropertyIdentifier,
  SearchJsonQueryV2,
} from "@osdk/foundry.ontologies";

export function handleRdpFilter(
  rdpName: string,
  filter: any,
): SearchJsonQueryV2 {
  // Handle simple equality
  if (
    typeof filter === "string" || typeof filter === "number"
    || typeof filter === "boolean"
  ) {
    return {
      type: "eq",
      propertyIdentifier: {
        type: "property",
        apiName: rdpName,
      },
      value: filter,
    };
  }

  // Handle filter operators
  const filterOp = Object.keys(filter)[0] as PossibleWhereClauseFilters;
  const filterValue = filter[filterOp];

  const propertyIdentifier: PropertyIdentifier = {
    type: "property",
    apiName: rdpName,
  };

  switch (filterOp) {
    case "$ne":
      return {
        type: "not",
        value: {
          type: "eq",
          propertyIdentifier,
          value: filterValue,
        },
      };

    case "$eq":
      return {
        type: "eq",
        propertyIdentifier,
        value: filterValue,
      };

    case "$lt":
      return {
        type: "lt",
        propertyIdentifier,
        value: filterValue,
      };

    case "$lte":
      return {
        type: "lte",
        propertyIdentifier,
        value: filterValue,
      };

    case "$gt":
      return {
        type: "gt",
        propertyIdentifier,
        value: filterValue,
      };

    case "$gte":
      return {
        type: "gte",
        propertyIdentifier,
        value: filterValue,
      };

    case "$in":
      return {
        type: "in",
        propertyIdentifier,
        value: filterValue,
      };

    case "$isNull":
      return {
        type: "isNull",
        propertyIdentifier,
        value: filterValue,
      };

    case "$contains":
      return {
        type: "contains",
        propertyIdentifier,
        value: filterValue,
      };

    case "$startsWith":
      return {
        type: "startsWith",
        propertyIdentifier,
        value: filterValue,
      };

    case "$containsAllTerms":
    case "$containsAnyTerm":
      return {
        type: filterOp.substring(1) as "containsAllTerms" | "containsAnyTerm",
        propertyIdentifier,
        value: typeof filterValue === "string"
          ? filterValue
          : filterValue["term"],
        fuzzy: typeof filterValue === "string"
          ? false
          : filterValue["fuzzySearch"] ?? false,
      };

    case "$containsAllTermsInOrder":
      return {
        type: "containsAllTermsInOrder",
        propertyIdentifier,
        value: filterValue,
      };

    case "$within":
    case "$intersects":
      throw new Error(
        `Geo filter ${filterOp} is not supported on runtime derived properties`,
      );

    default:
      throw new Error(`Unknown filter operator: ${filterOp}`);
  }
}
