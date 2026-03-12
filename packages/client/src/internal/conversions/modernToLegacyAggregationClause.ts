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

import type { AggregationClause } from "@osdk/api";
import type {
  AggregationV2,
  PropertyIdentifier,
} from "@osdk/foundry.ontologies";

type AggregationDirection = "asc" | "desc" | "unordered";

const directionFieldMap = (dir?: AggregationDirection) =>
  dir === "asc" ? "ASC" : dir === "desc" ? "DESC" : undefined;

function isAggregationDirection(value: unknown): value is AggregationDirection {
  return value === "asc" || value === "desc" || value === "unordered";
}

function convertAggregationEntry(
  property: PropertyIdentifier,
  aggregationName: string,
  metric: string,
  direction: AggregationDirection,
): AggregationV2 {
  return {
    type: metric as
      | "approximateDistinct"
      | "exactDistinct"
      | "min"
      | "max"
      | "sum"
      | "avg",
    name: `${aggregationName}.${metric}`,
    direction: directionFieldMap(direction),
    propertyIdentifier: property,
  };
}

/** @internal */
export function modernToLegacyAggregationClause<
  AC extends AggregationClause<any>,
>(select: AC) {
  return Object.entries(select).flatMap<AggregationV2>(
    ([propAndMetric, aggregationType]) => {
      if (propAndMetric === "$count") {
        return {
          type: "count",
          name: "count",
          direction: directionFieldMap(aggregationType),
        };
      }

      if (
        typeof aggregationType === "object"
        && aggregationType != null
        && !isAggregationDirection(aggregationType)
      ) {
        return Object.entries(
          aggregationType as Record<string, AggregationDirection>,
        ).map(([fieldAndMetric, direction]) => {
          const colonPos = fieldAndMetric.lastIndexOf(":");
          const structField = fieldAndMetric.slice(0, colonPos);
          const metric = fieldAndMetric.slice(colonPos + 1);
          return convertAggregationEntry(
            {
              type: "structField",
              propertyApiName: propAndMetric,
              structFieldApiName: structField,
            },
            `${propAndMetric}.${structField}`,
            metric,
            direction,
          );
        });
      }

      const colonPos = propAndMetric.lastIndexOf(":");
      const property = propAndMetric.slice(0, colonPos);
      const metric = propAndMetric.slice(colonPos + 1);

      return [
        convertAggregationEntry(
          { type: "property", apiName: property },
          property,
          metric,
          aggregationType ?? "unordered",
        ),
      ];
    },
  );
}
