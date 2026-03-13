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

import type { AllGroupByValues, GroupByClause, GroupByRange } from "@osdk/api";
import { DurationMapping } from "@osdk/api";
import type {
  AggregationGroupByV2,
  AggregationRangeV2,
  PropertyIdentifier,
} from "@osdk/foundry.ontologies";

function isGroupByValue(value: unknown): value is AllGroupByValues {
  if (typeof value === "string" && value === "exact") {
    return true;
  }
  if (typeof value === "object" && value != null) {
    return "$exactWithLimit" in value
      || "$exact" in value
      || "$fixedWidth" in value
      || "$ranges" in value
      || "$duration" in value;
  }
  return false;
}

function convertGroupByValue(
  propertyIdentifier: PropertyIdentifier,
  type: AllGroupByValues,
): AggregationGroupByV2[] {
  if (type === "exact") {
    return [{ type, propertyIdentifier }];
  } else if ("$exactWithLimit" in type) {
    return [
      {
        type: "exact",
        propertyIdentifier,
        maxGroupCount: type.$exactWithLimit,
      },
    ];
  } else if ("$exact" in type) {
    return [
      {
        type: "exact",
        propertyIdentifier,
        maxGroupCount: type.$exact?.$limit ?? undefined,
        defaultValue: type.$exact.$defaultValue ?? undefined,
        includeNullValues: type.$exact.$includeNullValue === true
          ? true
          : undefined,
      },
    ];
  } else if ("$fixedWidth" in type) {
    return [{
      type: "fixedWidth",
      propertyIdentifier,
      fixedWidth: type.$fixedWidth,
    }];
  } else if ("$ranges" in type) {
    return [{
      type: "ranges",
      propertyIdentifier,
      ranges: type.$ranges.map(range => convertRange(range)),
    }];
  } else if ("$duration" in type) {
    return [{
      type: "duration",
      propertyIdentifier,
      value: type.$duration[0],
      unit: DurationMapping[type.$duration[1]],
    }];
  }
  return [];
}

/** @internal */
export function modernToLegacyGroupByClause(
  groupByClause: GroupByClause<any> | undefined,
) {
  if (!groupByClause) return [];

  return Object.entries(
    groupByClause as Record<
      string,
      AllGroupByValues | Record<string, AllGroupByValues>
    >,
  ).flatMap<AggregationGroupByV2>(([field, type]) => {
    if (isGroupByValue(type)) {
      return convertGroupByValue({ type: "property", apiName: "field" }, type);
    }

    return Object.entries(type as Record<string, AllGroupByValues>).flatMap(
      ([structField, structType]) =>
        convertGroupByValue({
          type: "structField",
          propertyApiName: field,
          structFieldApiName: structField,
        }, structType),
    );
  });
}

function convertRange(
  range: GroupByRange<number | string>,
): AggregationRangeV2 {
  return { startValue: range[0], endValue: range[1] };
}
