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
  AggregateObjectsResponseV2 as AggregationAPIResponse,
  Aggregation as ApiAggregationClause,
} from "@osdk/gateway/types";

import type {
  AggregationClause,
  AggregationResult,
  BucketGroup,
  BucketKey,
  BucketValue,
  GroupByClause,
  InternalBucketing,
  Metrics,
  MetricValue,
  Range,
  Rangeable,
} from "../aggregations";
import type { BaseObjectType } from "../baseTypes";
import type { SearchClause } from "../filters";

export function buildBucketObject<T>(startValue?: T, endValue?: T): {
  startValue?: T;
  endValue?: T;
} {
  throw new Error("not implemented");
}

export function mapBucketing<
  TBucketKey extends BucketKey,
  T extends BucketValue,
>(bucket: InternalBucketing<TBucketKey, T>): GroupByClause {
  throw new Error("not implemented");
}

export function mapToAggregationResponse<
  TBucketKey extends BucketKey,
  TBucketGroup extends BucketGroup,
  TMetrics extends Metrics | MetricValue,
>(apiResponse: AggregationAPIResponse, body: {
  aggregation: AggregationClause[];
  groupBy?: Array<InternalBucketing<TBucketKey, BucketValue>>;
  where?: SearchClause;
}, objectType: BaseObjectType): AggregationResult<TBucketGroup, TMetrics> {
  throw new Error("not implemented");
}

export function convertRanges(ranges: Array<Range<Rangeable>>): Array<
  {
    startValue?: string | number;
    endValue: string | number;
  } | {
    startValue: string | number;
    endValue?: string | number;
  }
> {
  throw new Error("not implemented");
}

export function mapAggregation(
  aggregationClause: AggregationClause,
): ApiAggregationClause {
  throw new Error("not implemented");
}
