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
  DerivedProperty,
  ObjectMetadata,
  ObjectOrInterfaceDefinition,
} from "@osdk/api";
import type {
  DerivedPropertyDefinition,
  ObjectSet as WireObjectSet,
  SelectedPropertyOperation,
} from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import { modernToLegacyWhereClause } from "../internal/conversions/modernToLegacyWhereClause.js";
import type { MinimalClient } from "../MinimalClientContext.js";

const idCounter = 0;

// @internal
export type DerivedPropertyDefinitionMap = Map<
  any,
  {
    def: DerivedPropertyDefinition;
    typeCallback: () => Promise<ObjectMetadata.Property>;
  }
>;

/** @internal */
export function createWithPropertiesObjectSet<
  Q extends ObjectOrInterfaceDefinition,
>(
  objectType: Q,
  objectSet: WireObjectSet,
  clientCtx: MinimalClient,
  definitionMap: DerivedPropertyDefinitionMap,
): DerivedProperty.SelectPropertyBuilder<Q, false> {
  const base: DerivedProperty.SelectPropertyBuilder<Q, false> = {
    pivotTo: (link) => {
      return createWithPropertiesObjectSet(
        objectType,
        {
          type: "searchAround",
          objectSet,
          link,
        },
        clientCtx,
        definitionMap,
      );
    },
    where: (clause) => {
      return createWithPropertiesObjectSet(
        objectType,
        {
          type: "filter",
          objectSet: objectSet,
          where: modernToLegacyWhereClause(clause, objectType),
        },
        clientCtx,
        definitionMap,
      );
    },
    aggregate: (aggregation: string, opt: any) => {
      const splitAggregation = aggregation.split(":");
      invariant(
        splitAggregation.length === 2 || splitAggregation[0] === "$count",
        "Invalid aggregation format",
      );
      const [aggregationPropertyName, aggregationOperation] = splitAggregation;
      let aggregationOperationDefinition: SelectedPropertyOperation;
      switch (aggregationOperation) {
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
        case undefined:
          if (aggregationPropertyName === "$count") {
            aggregationOperationDefinition = {
              type: "count",
            };
            break;
          }
        default:
          invariant(
            false,
            "Invalid aggregation operation " + aggregationOperation,
          );
      }
      const selectorResult: DerivedProperty.SelectorResult<any> = { type: {} };
      definitionMap.set(selectorResult, {
        "def": {
          type: "selection",
          objectSet: objectSet,
          operation: aggregationOperationDefinition,
        },
        "typeCallback": async () => {
          const objDef = await clientCtx.ontologyProvider.getObjectDefinition(
            objectType.apiName,
          );
          invariant(objDef, `Missing definition for '${objectType.apiName}'`);
          return objDef.properties[aggregationPropertyName];
        },
      });
      return selectorResult;
    },
    selectProperty: (name) => {
      const selectorResult: DerivedProperty.SelectorResult<any> = { type: {} };
      definitionMap.set(selectorResult, {
        "def": {
          type: "selection",
          objectSet: objectSet,
          operation: {
            type: "get",
            selectedPropertyApiName: name,
          },
        },
        "typeCallback": async () => {
          const objDef = await clientCtx.ontologyProvider.getObjectDefinition(
            objectType.apiName,
          );
          invariant(objDef, `Missing definition for '${objectType.apiName}'`);
          return objDef.properties[name];
        },
      });
      return selectorResult;
    },
  };

  return base;
}
