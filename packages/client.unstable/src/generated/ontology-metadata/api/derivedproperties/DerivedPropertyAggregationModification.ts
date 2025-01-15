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

import type { LinkedCollectionModification } from "./LinkedCollectionModification.js";
import type { LinkedCountMetric } from "./LinkedCountMetric.js";
import type { PropertyTypeIdentifierInRequest } from "./PropertyTypeIdentifierInRequest.js";
export interface DerivedPropertyAggregationModification_count {
  type: "count";
  count: LinkedCountMetric;
}

export interface DerivedPropertyAggregationModification_avg {
  type: "avg";
  avg: PropertyTypeIdentifierInRequest;
}

export interface DerivedPropertyAggregationModification_max {
  type: "max";
  max: PropertyTypeIdentifierInRequest;
}

export interface DerivedPropertyAggregationModification_min {
  type: "min";
  min: PropertyTypeIdentifierInRequest;
}

export interface DerivedPropertyAggregationModification_sum {
  type: "sum";
  sum: PropertyTypeIdentifierInRequest;
}

export interface DerivedPropertyAggregationModification_approximateCardinality {
  type: "approximateCardinality";
  approximateCardinality: PropertyTypeIdentifierInRequest;
}

export interface DerivedPropertyAggregationModification_exactCardinality {
  type: "exactCardinality";
  exactCardinality: PropertyTypeIdentifierInRequest;
}

export interface DerivedPropertyAggregationModification_collectList {
  type: "collectList";
  collectList: LinkedCollectionModification;
}

export interface DerivedPropertyAggregationModification_collectSet {
  type: "collectSet";
  collectSet: LinkedCollectionModification;
}
export type DerivedPropertyAggregationModification =
  | DerivedPropertyAggregationModification_count
  | DerivedPropertyAggregationModification_avg
  | DerivedPropertyAggregationModification_max
  | DerivedPropertyAggregationModification_min
  | DerivedPropertyAggregationModification_sum
  | DerivedPropertyAggregationModification_approximateCardinality
  | DerivedPropertyAggregationModification_exactCardinality
  | DerivedPropertyAggregationModification_collectList
  | DerivedPropertyAggregationModification_collectSet;
