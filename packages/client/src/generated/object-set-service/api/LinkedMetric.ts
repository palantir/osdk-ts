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

import type { LinkedCountMetric } from "./LinkedCountMetric.js";
import type { LinkedDispersionMetric } from "./LinkedDispersionMetric.js";
import type { LinkedPercentileMetric } from "./LinkedPercentileMetric.js";
import type { LinkedPropertyMetric } from "./LinkedPropertyMetric.js";
export interface LinkedMetric_count {
  type: "count";
  count: LinkedCountMetric;
}

export interface LinkedMetric_avg {
  type: "avg";
  avg: LinkedPropertyMetric;
}

export interface LinkedMetric_max {
  type: "max";
  max: LinkedPropertyMetric;
}

export interface LinkedMetric_min {
  type: "min";
  min: LinkedPropertyMetric;
}

export interface LinkedMetric_sum {
  type: "sum";
  sum: LinkedPropertyMetric;
}

export interface LinkedMetric_percentile {
  type: "percentile";
  percentile: LinkedPercentileMetric;
}

export interface LinkedMetric_cardinality {
  type: "cardinality";
  cardinality: LinkedPropertyMetric;
}

export interface LinkedMetric_exactCardinality {
  type: "exactCardinality";
  exactCardinality: LinkedPropertyMetric;
}

export interface LinkedMetric_standardDeviation {
  type: "standardDeviation";
  standardDeviation: LinkedDispersionMetric;
}

export interface LinkedMetric_variance {
  type: "variance";
  variance: LinkedDispersionMetric;
}
/**
 * An aggregation function and what it should be computed on (e.g. a property).
 */
export type LinkedMetric =
  | LinkedMetric_count
  | LinkedMetric_avg
  | LinkedMetric_max
  | LinkedMetric_min
  | LinkedMetric_sum
  | LinkedMetric_percentile
  | LinkedMetric_cardinality
  | LinkedMetric_exactCardinality
  | LinkedMetric_standardDeviation
  | LinkedMetric_variance;
