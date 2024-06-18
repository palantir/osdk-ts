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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type {
  AggregationResultsWithoutGroups,
  NumericAggregateOption,
  OrderedAggregationClause,
  StringAggregateOption,
  UnorderedAggregationClause,
} from "@osdk/client.api";
import type { AggregateObjectsResponseV2 } from "@osdk/internal.foundry";
import invariant from "tiny-invariant";
import type { ArrayElement } from "../../util/ArrayElement.js";

export function legacyToModernSingleAggregationResult<
  Q extends ObjectOrInterfaceDefinition,
  AC extends UnorderedAggregationClause<Q> | OrderedAggregationClause<Q>,
>(
  entry: ArrayElement<AggregateObjectsResponseV2["data"]>,
): AggregationResultsWithoutGroups<Q, AC> {
  return entry.metrics.reduce(
    (accumulator: AggregationResultsWithoutGroups<Q, AC>, curValue) => {
      const parts = curValue.name.split(".");
      if (parts[0] === "count") {
        return accumulator;
      }
      invariant(
        parts.length === 2,
        "assumed we were getting a `${key}.${type}`",
      );
      const property = parts[0] as keyof AggregationResultsWithoutGroups<Q, AC>;
      const metricType = parts[1] as
        | StringAggregateOption
        | NumericAggregateOption;
      if (!(property in accumulator)) {
        accumulator[property] = {} as any; // fixme?
      }
      (accumulator[property] as any)[metricType] = curValue.value; // fixme?

      return accumulator;
    },
    {} as AggregationResultsWithoutGroups<Q, AC>,
  );
}
