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
import type { ArrayElement } from "../../util/ArrayElement.js";
import { splitAggregationKey } from "./modernToLegacyAggregationClause.js";

/** @internal */
export function legacyToModernSingleAggregationResult<
  Q extends ObjectOrInterfaceDefinition,
  AC extends AggregationClause<Q>,
>(
  entry: ArrayElement<AggregateObjectsResponseV2["data"]>,
  select: AC,
): AggregationResultsWithoutGroups<Q, AC> {
  const result: Record<string, Record<string, any>> = {};

  // Seed the result with undefined for every selected metric so that
  // properties are always present, even when the server returns no metrics
  // (e.g. aggregating over 0 objects).
  for (const selectKey of Object.keys(select)) {
    if (selectKey === "$count") {
      continue;
    }
    const { property, metric } = splitAggregationKey(selectKey);
    (result[property] ??= {})[metric] = undefined;
  }

  for (const { name, value } of entry.metrics) {
    if (name === "count") {
      continue;
    }
    const [property, metricType] = name.split(".");
    if (result[property]) { // guard against an unknown metric name
      result[property][metricType] = value;
    }
  }

  return result as AggregationResultsWithoutGroups<Q, AC>;
}
