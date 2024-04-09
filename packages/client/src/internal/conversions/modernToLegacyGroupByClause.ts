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

import type { AggregationGroupByV2, AggregationRangeV2 } from "@osdk/omniapi";
import {
  DurationMapping,
  type GroupByRange,
} from "../../query/aggregations/GroupByClause.js";
import type { AllGroupByValues, GroupByClause } from "../../query/index.js";

export function modernToLegacyGroupByClause(
  groupByClause: GroupByClause<any> | undefined,
) {
  if (!groupByClause) return [];

  return Object.entries(
    groupByClause as Record<string, AllGroupByValues>,
  ).flatMap<AggregationGroupByV2>(([field, type]) => {
    if (type === "exact") {
      return [{ type, field }];
    } else if ("exactWithLimit" in type) {
      {
        return [
          {
            type: "exact",
            field,
            maxGroupCount: type.exactWithLimit,
          },
        ];
      }
    } else if ("fixedWidth" in type) {
      return [{
        type: "fixedWidth",
        field,
        fixedWidth: type.fixedWidth,
      }];
    } else if ("ranges" in type) {
      return [{
        type: "ranges",
        field,
        ranges: type.ranges.map(range => convertRange(range)),
      }];
    } else if ("duration" in type) {
      return [{
        type: "duration",
        field,
        value: type.duration[0],
        unit: DurationMapping[type.duration[1]],
      }];
    } else return [];
  });
}

function convertRange(
  range: GroupByRange<number | string>,
): AggregationRangeV2 {
  return { startValue: range[0], endValue: range[1] };
}
