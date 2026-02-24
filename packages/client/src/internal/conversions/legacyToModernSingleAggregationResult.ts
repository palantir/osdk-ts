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
  AggregationClause,
  AggregationResultsWithoutGroups,
  ObjectOrInterfaceDefinition,
} from "@osdk/api";
import type { AggregateObjectsResponseV2 } from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import type { ArrayElement } from "../../util/ArrayElement.js";
import { extractNamespace } from "./extractNamespace.js";

/**
 * Un-qualifies a property name for interfaces by removing the namespace if it
 * matches the interface's namespace.
 * @internal
 */
export function unqualifyPropName(
  fieldName: string,
  objectOrInterface: ObjectOrInterfaceDefinition | undefined,
): string {
  if (objectOrInterface?.type !== "interface") {
    return fieldName;
  }

  const [objApiNamespace] = extractNamespace(objectOrInterface.apiName);
  if (objApiNamespace == null) {
    return fieldName;
  }

  const [fieldApiNamespace, fieldShortName] = extractNamespace(fieldName);
  return fieldApiNamespace === objApiNamespace ? fieldShortName : fieldName;
}

/** @internal */
export function legacyToModernSingleAggregationResult<
  Q extends ObjectOrInterfaceDefinition,
  AC extends AggregationClause<Q>,
>(
  entry: ArrayElement<AggregateObjectsResponseV2["data"]>,
  objectOrInterface?: ObjectOrInterfaceDefinition,
): AggregationResultsWithoutGroups<Q, AC> {
  return entry.metrics.reduce(
    (accumulator: AggregationResultsWithoutGroups<Q, AC>, curValue) => {
      const parts = curValue.name.split(".");
      if (parts[0] === "count") {
        return accumulator;
      }

      // For interfaces with namespaces, the property name may be "a.prop.metric"
      // where "a" is the namespace, "prop" is the property, and "metric" is the aggregation type
      // We need to reconstruct the full property name and then un-qualify it
      const metricType = parts[parts.length - 1];
      const property = parts.slice(0, -1).join(".");

      invariant(
        property.length > 0,
        "assumed we were getting a `${key}.${type}`",
      );

      const unqualifiedProperty = unqualifyPropName(
        property,
        objectOrInterface,
      ) as keyof AggregationResultsWithoutGroups<Q, AC>;

      if (!(unqualifiedProperty in accumulator)) {
        accumulator[unqualifiedProperty] = {} as any; // fixme?
      }
      (accumulator[unqualifiedProperty] as any)[metricType] = curValue.value; // fixme?

      return accumulator;
    },
    {} as AggregationResultsWithoutGroups<Q, AC>,
  );
}
