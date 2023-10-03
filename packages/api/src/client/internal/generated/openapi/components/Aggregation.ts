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

import type { ApproximateDistinctAggregation } from "./ApproximateDistinctAggregation";
import type { AvgAggregation } from "./AvgAggregation";
import type { CountAggregation } from "./CountAggregation";
import type { MaxAggregation } from "./MaxAggregation";
import type { MinAggregation } from "./MinAggregation";
import type { SumAggregation } from "./SumAggregation";

export interface Aggregation_Max extends MaxAggregation {
  type: "max";
}

export interface Aggregation_Min extends MinAggregation {
  type: "min";
}

export interface Aggregation_Avg extends AvgAggregation {
  type: "avg";
}

export interface Aggregation_Sum extends SumAggregation {
  type: "sum";
}

export interface Aggregation_Count extends CountAggregation {
  type: "count";
}

export interface Aggregation_ApproximateDistinct
  extends ApproximateDistinctAggregation
{
  type: "approximateDistinct";
}

export type Aggregation =
  | Aggregation_Max
  | Aggregation_Min
  | Aggregation_Avg
  | Aggregation_Sum
  | Aggregation_Count
  | Aggregation_ApproximateDistinct;
