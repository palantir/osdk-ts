/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ApproximateDistinctAggregationV2 } from "./ApproximateDistinctAggregationV2.js";
import type { ApproximatePercentileAggregationV2 } from "./ApproximatePercentileAggregationV2.js";
import type { AvgAggregationV2 } from "./AvgAggregationV2.js";
import type { CountAggregationV2 } from "./CountAggregationV2.js";
import type { MaxAggregationV2 } from "./MaxAggregationV2.js";
import type { MinAggregationV2 } from "./MinAggregationV2.js";
import type { SumAggregationV2 } from "./SumAggregationV2.js";

export interface AggregationV2_Max extends MaxAggregationV2 {
  type: "max";
}

export interface AggregationV2_Min extends MinAggregationV2 {
  type: "min";
}

export interface AggregationV2_Avg extends AvgAggregationV2 {
  type: "avg";
}

export interface AggregationV2_Sum extends SumAggregationV2 {
  type: "sum";
}

export interface AggregationV2_Count extends CountAggregationV2 {
  type: "count";
}

export interface AggregationV2_ApproximateDistinct
  extends ApproximateDistinctAggregationV2
{
  type: "approximateDistinct";
}

export interface AggregationV2_ApproximatePercentile
  extends ApproximatePercentileAggregationV2
{
  type: "approximatePercentile";
}

export type AggregationV2 =
  | AggregationV2_Max
  | AggregationV2_Min
  | AggregationV2_Avg
  | AggregationV2_Sum
  | AggregationV2_Count
  | AggregationV2_ApproximateDistinct
  | AggregationV2_ApproximatePercentile;
