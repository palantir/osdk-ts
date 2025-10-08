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
  ObjectOrInterfaceDefinition,
  WhereClause,
} from "@osdk/api";
import type {
  DerivedPropertyDefinition,
  ObjectSet as WireObjectSet,
  SelectedPropertyOperation,
} from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import { modernToLegacyWhereClause } from "../internal/conversions/modernToLegacyWhereClause.js";
import type { SimpleWhereClause } from "../observable/internal/SimpleWhereClause.js";
import { derivedPropertyDefinitionFactory } from "./derivedPropertyDefinitionFactory.js";

type WithConstSelect<Q extends ObjectOrInterfaceDefinition> =
  & DerivedProperty.SelectPropertyBuilder<Q, false>
  & {
    constant: DerivedProperty.Builder<Q, true>["constant"];
  };

/** @internal */
export function createWithPropertiesObjectSet<
  Q extends ObjectOrInterfaceDefinition,
>(
  objectType: Q,
  objectSet: WireObjectSet,
  definitionMap: Map<any, DerivedPropertyDefinition>,
  fromBaseObjectSet: boolean = false,
): WithConstSelect<Q> {
  return {
    pivotTo: (link) => {
      return createWithPropertiesObjectSet(objectType, {
        type: "searchAround",
        objectSet,
        link,
      }, definitionMap);
    },
    where: (clause) => {
      const rdpNames = new Set(definitionMap.keys());
      return createWithPropertiesObjectSet(objectType, {
        type: "filter",
        objectSet: objectSet,
        where: modernToLegacyWhereClause(clause, objectType, rdpNames),
      }, definitionMap);
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
      const wrappedObjectSet: DerivedPropertyDefinition = {
        type: "selection",
        objectSet: objectSet,
        operation: aggregationOperationDefinition,
      };
      const selectorResult: DerivedProperty.Definition<any, any> =
        derivedPropertyDefinitionFactory(wrappedObjectSet, definitionMap);
      definitionMap.set(selectorResult, wrappedObjectSet);
      return selectorResult as any;
    },
    selectProperty: (name) => {
      if (fromBaseObjectSet) {
        const wrappedObjectSet: DerivedPropertyDefinition = {
          type: "property",
          apiName: name,
        };
        const selectorResult: DerivedProperty.Definition<any, any> =
          derivedPropertyDefinitionFactory(wrappedObjectSet, definitionMap);
        definitionMap.set(selectorResult, wrappedObjectSet);
        return selectorResult as any;
      }
      const wrappedObjectSet: DerivedPropertyDefinition = {
        type: "selection",
        objectSet: objectSet,
        operation: {
          type: "get",
          selectedPropertyApiName: name,
        },
      };
      const selectorResult: DerivedProperty.Definition<any, any> =
        derivedPropertyDefinitionFactory(wrappedObjectSet, definitionMap);
      definitionMap.set(selectorResult, wrappedObjectSet);
      return selectorResult as any;
    },
    constant: {
      double: (value) => {
        invariant(false, "Not supported");
      },
      integer: (value) => {
        invariant(false, "Not supported");
      },
      long: (value) => {
        invariant(false, "Not supported");
      },
      datetime: (value) => {
        invariant(false, "Not supported");
      },
      timestamp: (value) => {
        invariant(false, "Not supported");
      },
    },
  };
}
