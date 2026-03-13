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

function setNestedValue(
  obj: Record<string, unknown>,
  keys: string[],
  value: unknown,
): void {
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current)) {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }
  current[keys[keys.length - 1]] = value;
}

/** @internal */
export function legacyToModernSingleAggregationResult<
  Q extends ObjectOrInterfaceDefinition,
  AC extends AggregationClause<Q>,
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
        parts.length >= 2,
        "expected metric name to be at least `${key}.${type}`",
      );
      setNestedValue(
        accumulator as Record<string, unknown>,
        parts,
        curValue.value,
      );
      return accumulator;
    },
    {} as AggregationResultsWithoutGroups<Q, AC>,
  );
}
