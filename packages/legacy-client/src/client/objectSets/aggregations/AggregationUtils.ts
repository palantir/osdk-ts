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
  Aggregation as ApiAggregationClause,
  AggregationGroupByV2,
  AggregationGroupByV2_Duration,
  AggregationGroupByV2_Exact,
  AggregationGroupByV2_FixedWidth,
  AggregationGroupByV2_Ranges,
  AggregationRangeV2,
} from "@osdk/gateway/types";

import { LocalDate, Timestamp } from "../../baseTypes/index.js";
import type {
  AggregationClause,
  BucketKey,
  BucketValue,
  InternalBucketing,
  InternalBucketingVisitor,
  Range,
  Rangeable,
} from "./Aggregations.js";
import { visitInternalBucketing } from "./Aggregations.js";

export function buildBucketObject<T>(startValue?: T, endValue?: T): {
  startValue?: T;
  endValue?: T;
} {
  const result: { startValue?: T; endValue?: T } = {};
  if (startValue) {
    result.startValue = startValue;
  }
  if (endValue) {
    result.endValue = endValue;
  }
  return result;
}

export function mapBucketing<
  TBucketKey extends BucketKey,
  T extends BucketValue,
>(bucket: InternalBucketing<TBucketKey, T>): AggregationGroupByV2 {
  return visitInternalBucketing(bucket, {
    onExactValue(bucketing): AggregationGroupByV2_Exact {
      return {
        type: "exact",
        field: bucketing.propertyApiName,
        maxGroupCount: bucketing.maxGroupCount,
      };
    },
    onRange(
      bucketing,
    ): AggregationGroupByV2_Ranges {
      return {
        type: "ranges",
        field: bucketing.propertyApiName,
        ranges: convertRanges(bucketing.ranges),
      };
    },
    onFixedWidth(
      bucketing,
    ): AggregationGroupByV2_FixedWidth {
      return {
        type: "fixedWidth",
        field: bucketing.propertyApiName,
        fixedWidth: bucketing.fixedWidth,
      };
    },
    onDuration(
      bucketing,
    ): AggregationGroupByV2_Duration {
      return {
        type: "duration",
        field: bucketing.propertyApiName,
        value: bucketing.value,
        unit: bucketing.unit,
      };
    },
  } as InternalBucketingVisitor<TBucketKey, T, AggregationGroupByV2>);
}

export function convertRanges(
  ranges: Array<Range<Rangeable>>,
): AggregationRangeV2[] {
  return ranges.map(range => {
    let convertedStartValue: undefined | string | number;
    let convertedEndValue: undefined | string | number;
    if (range.startValue !== undefined) {
      convertedStartValue = convertRange(range.startValue);
    }
    if (range.endValue !== undefined) {
      convertedEndValue = convertRange(range.endValue);
    }

    if (convertedStartValue === undefined) {
      return {
        endValue: convertedEndValue!,
      } as AggregationRangeV2;
    } else if (convertedEndValue === undefined) {
      return {
        startValue: convertedStartValue!,
      } as AggregationRangeV2;
    }
    return {
      startValue: convertedStartValue,
      endValue: convertedEndValue,
    };
  });
}

export function mapAggregation(
  aggregationClause: AggregationClause,
): ApiAggregationClause {
  if (aggregationClause.type === "count") {
    return { type: "count", name: aggregationClause.name };
  } else {
    return {
      type: aggregationClause.type,
      name: aggregationClause.name,
      field: aggregationClause.field!,
    };
  }
}

function convertRange(value: Rangeable) {
  let convertedStartValue;
  if (value instanceof Timestamp) {
    convertedStartValue = value.toISOString();
  } else if (value instanceof LocalDate) {
    convertedStartValue = value.toISOString();
  } else {
    convertedStartValue = value;
  }
  return convertedStartValue;
}
