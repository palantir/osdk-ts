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

import type { CountMetric } from "./CountMetric.js";
import type { DispersionMetric } from "./DispersionMetric.js";
import type { PercentileMetric } from "./PercentileMetric.js";
import type { PropertyMetric } from "./PropertyMetric.js";
export interface Metric_count {
  type: "count";
  count: CountMetric;
}

export interface Metric_avg {
  type: "avg";
  avg: PropertyMetric;
}

export interface Metric_max {
  type: "max";
  max: PropertyMetric;
}

export interface Metric_min {
  type: "min";
  min: PropertyMetric;
}

export interface Metric_sum {
  type: "sum";
  sum: PropertyMetric;
}

export interface Metric_percentile {
  type: "percentile";
  percentile: PercentileMetric;
}

export interface Metric_cardinality {
  type: "cardinality";
  cardinality: PropertyMetric;
}

export interface Metric_exactCardinality {
  type: "exactCardinality";
  exactCardinality: PropertyMetric;
}

export interface Metric_standardDeviation {
  type: "standardDeviation";
  standardDeviation: DispersionMetric;
}

export interface Metric_variance {
  type: "variance";
  variance: DispersionMetric;
}
/**
 * An aggregation function and what it should be computed on (e.g. a property).
 */
export type Metric =
  | Metric_count
  | Metric_avg
  | Metric_max
  | Metric_min
  | Metric_sum
  | Metric_percentile
  | Metric_cardinality
  | Metric_exactCardinality
  | Metric_standardDeviation
  | Metric_variance;
