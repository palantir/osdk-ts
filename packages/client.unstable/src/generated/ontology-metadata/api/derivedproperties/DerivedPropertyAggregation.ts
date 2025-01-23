/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { LinkedCollection } from "./LinkedCollection.js";
import type { LinkedCountMetric } from "./LinkedCountMetric.js";
import type { PropertyTypeIdentifier } from "./PropertyTypeIdentifier.js";
export interface DerivedPropertyAggregation_count {
  type: "count";
  count: LinkedCountMetric;
}

export interface DerivedPropertyAggregation_avg {
  type: "avg";
  avg: PropertyTypeIdentifier;
}

export interface DerivedPropertyAggregation_max {
  type: "max";
  max: PropertyTypeIdentifier;
}

export interface DerivedPropertyAggregation_min {
  type: "min";
  min: PropertyTypeIdentifier;
}

export interface DerivedPropertyAggregation_sum {
  type: "sum";
  sum: PropertyTypeIdentifier;
}

export interface DerivedPropertyAggregation_approximateCardinality {
  type: "approximateCardinality";
  approximateCardinality: PropertyTypeIdentifier;
}

export interface DerivedPropertyAggregation_exactCardinality {
  type: "exactCardinality";
  exactCardinality: PropertyTypeIdentifier;
}

export interface DerivedPropertyAggregation_collectList {
  type: "collectList";
  collectList: LinkedCollection;
}

export interface DerivedPropertyAggregation_collectSet {
  type: "collectSet";
  collectSet: LinkedCollection;
}
/**
 * An aggregation function and what it should be computed on (e.g. a property type on the linked object type).
 */
export type DerivedPropertyAggregation =
  | DerivedPropertyAggregation_count
  | DerivedPropertyAggregation_avg
  | DerivedPropertyAggregation_max
  | DerivedPropertyAggregation_min
  | DerivedPropertyAggregation_sum
  | DerivedPropertyAggregation_approximateCardinality
  | DerivedPropertyAggregation_exactCardinality
  | DerivedPropertyAggregation_collectList
  | DerivedPropertyAggregation_collectSet;
