/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  CompileTimeMetadata,
  DeriveObjectSet,
  LinkedType,
  LinkNames,
  ObjectOrInterfaceDefinition,
  WhereClause,
} from "@osdk/api";
import type {
  DerivedPropertyDefinition,
  ObjectSet as WireObjectSet,
  ObjectSetSearchAroundType,
  SelectedPropertyDefinition,
  SelectedPropertyOperation,
} from "@osdk/internal.foundry.core";
import invariant from "tiny-invariant";
import { modernToLegacyWhereClause } from "../internal/conversions/modernToLegacyWhereClause.js";
import { MinimalClient } from "../MinimalClientContext.js";
import { resolveBaseObjectSetType } from "../util/objectSetUtils.js";

let idCounter = 0;

/** @internal */
export function createDeriveObjectSet<Q extends ObjectOrInterfaceDefinition>(
  objectType: Q,
  objectSet: WireObjectSet,
  definitionMap: Map<any, DerivedPropertyDefinition>,
): DeriveObjectSet<Q> {
  const base: DeriveObjectSet<Q> = {
    pivotTo: (link) => {
      return createDeriveObjectSet(objectType, {
        type: "searchAround",
        objectSet,
        link,
      }, definitionMap) as any;
    },
    where: (clause) => {
      return createDeriveObjectSet(objectType, {
        type: "filter",
        objectSet: objectSet,
        where: modernToLegacyWhereClause(clause, objectType),
      }, definitionMap);
    },
    aggregate: (aggregation: string, opt: any) => {
      const definitionId = idCounter++;
      const splitAggregation = aggregation.split(":");
      invariant(splitAggregation.length === 2, "Invalid aggregation format");
      const [aggregationPropertyName, aggregationOperation] = splitAggregation;
      let aggregationOperationDefinition: SelectedPropertyOperation;
      switch (aggregationOperation) {
        case "$count":
          aggregationOperationDefinition = {
            type: "count",
          };
          break;
        case "sum":
        case "avg":
        case "min":
        case "max":
        case "exactDistinct":
        case "approximateDistinct":
          aggregationOperationDefinition = {
            type: aggregationOperation,
            selectedPropertyApiName: aggregationPropertyName,
          };
          break;
        case "approximatePercentile":
          aggregationOperationDefinition = {
            type: "approximatePercentile",
            selectedPropertyApiName: aggregationPropertyName,
            approximatePercentile: opt?.percentile ?? .5,
          };
          break;
        case "collectSet":
        case "collectList":
          aggregationOperationDefinition = {
            type: aggregationOperation,
            selectedPropertyApiName: aggregationPropertyName,
            limit: opt?.limit ?? 100,
          };
          break;
        default:
          invariant(
            false,
            "Invalid aggregation operation " + aggregationOperation,
          );
      }
      definitionMap.set(definitionId, {
        type: "selection",
        objectSet: objectSet,
        operation: aggregationOperationDefinition,
      });
      return { definitionId: definitionId, type: { type: "integer" } as any };
    },
    selectProperty: (name) => {
      const definitionId = globalThis.crypto.randomUUID();
      definitionMap.set(definitionId, {
        type: "selection",
        objectSet: objectSet,
        operation: {
          type: "get",
          selectedPropertyApiName: name,
        },
      });
      return { definitionId: definitionId, type: { type: "integer" } as any };
    },
  };

  // we are using a type assertion because the marker symbol defined in BaseObjectSet isn't actually used
  // at runtime.
  return base;
}
