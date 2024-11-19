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

import type { DeriveClause, ObjectOrInterfaceDefinition } from "@osdk/api";
import type {
  DerivedPropertyApiName,
  DerivedPropertyDefinition,
  ObjectSet as WireObjectSet,
  ObjectSetWithPropertiesType,
  SelectedPropertyOperation,
} from "@osdk/internal.foundry.core";
import invariant from "tiny-invariant";

export function createWithPropertyObjectSet<
  Q extends ObjectOrInterfaceDefinition,
>(
  clause: DeriveClause<Q>,
  objectSet: WireObjectSet,
) {
  const derivedPropertyDefinitions: Record<
    DerivedPropertyApiName,
    DerivedPropertyDefinition
  > = {};
  for (const [name, def] of Object.entries(clause)) {
    if (typeof def === "string") {
      // native property def
      throw new Error("Unsupported filter");
    }
    invariant(Object.keys(def).length === 1, "only one key allowed");
    const calculatedKeys: string[] = [];
    const aggregateKeys: string[] = [];
    const [key, definition] = Object.entries(def)[0];

    if (calculatedKeys.includes(key)) {
      throw new Error("Unsupported filter");
    } else if (aggregateKeys.includes(key)) {
      const [aggregationTypeDollarSign, aggregation] =
        Object.entries(definition)[0];
      invariant(aggregation != null && typeof aggregation === "object");
      const [linkName, linkPropertyName] = Object.entries(aggregation)[0];
      invariant(
        linkPropertyName != null && typeof linkPropertyName === "string",
      );
      const aggregationType = aggregationTypeDollarSign.substring(
        1,
      ) as SelectedPropertyOperation["type"];
      invariant(
        aggregation != null && typeof aggregation === "object"
          && Object.keys(aggregation).length === 1,
      );
      switch (aggregationType) {
        case "approximatePercentile":
          derivedPropertyDefinitions["name"] = {
            type: "selection",
            objectSet: {
              type: "searchAround",
              objectSet,
              link: linkName,
            },
            operation: {
              type: aggregationType,
              selectedPropertyApiName: linkPropertyName,
              approximatePercentile: 2,
            },
          };
          break;
        case "collectList":
        case "collectSet":
          derivedPropertyDefinitions["name"] = {
            type: "selection",
            objectSet: {
              type: "searchAround",
              objectSet,
              link: linkName,
            },
            operation: {
              type: aggregationType,
              selectedPropertyApiName: linkPropertyName,
              limit: 100,
            },
          };
          break;
        default:
          invariant(aggregation != null && typeof aggregation === "string");
          derivedPropertyDefinitions["name"] = {
            type: "selection",
            objectSet: {
              type: "searchAround",
              objectSet,
              link: aggregation,
            },
            operation: {
              type: aggregationType,
              selectedPropertyApiName: aggregation,
            },
          };
      }
    } else {
      const [linkName, linkPropertyName] = Object.entries(definition)[0];
      invariant(
        linkPropertyName != null && typeof linkPropertyName === "string",
        "linkPropertyName must be a string",
      );
      derivedPropertyDefinitions["name"] = {
        type: "selection",
        objectSet: {
          type: "searchAround",
          objectSet,
          link: linkName,
        },
        operation: {
          type: "get",
          selectedPropertyApiName: linkPropertyName,
        },
      };
    }
  }
  const objectSetWithProperties: ObjectSetWithPropertiesType = {
    objectSet,
    derivedProperties: derivedPropertyDefinitions,
  };
  return objectSetWithProperties;
}
