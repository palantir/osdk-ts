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

import type { AggregationV2 } from "@osdk/internal.foundry";
import type {
  NumericAggregateOption,
  StringAggregateOption,
} from "../../query/aggregations/AggregatableKeys.js";
import type {
  OrderedAggregationClause,
  UnorderedAggregationClause,
} from "../../query/aggregations/AggregationsClause.js";

const directionFieldMap = (dir?: "asc" | "desc" | "unordered") =>
  dir === "asc" ? "ASC" : dir === "desc" ? "DESC" : undefined;

export function modernToLegacyAggregationClause<
  AC extends UnorderedAggregationClause<any> | OrderedAggregationClause<any>,
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

      // k is property:metric
      const colonPos = propAndMetric.lastIndexOf(":");
      const property = propAndMetric.slice(0, colonPos);
      const metric = propAndMetric.slice(colonPos + 1);

      return [
        {
          type: metric as StringAggregateOption | NumericAggregateOption,
          name: `${property}.${metric}`,
          field: property,
          direction: directionFieldMap(aggregationType),
        },
      ];
    },
  );
}
