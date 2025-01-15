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

import type { LinkedCountMetric } from "./LinkedCountMetric.js";
import type { OntologyIrLinkedCollection } from "./OntologyIrLinkedCollection.js";
import type { OntologyIrPropertyTypeIdentifier } from "./OntologyIrPropertyTypeIdentifier.js";
export interface OntologyIrDerivedPropertyAggregation_count {
  type: "count";
  count: LinkedCountMetric;
}

export interface OntologyIrDerivedPropertyAggregation_avg {
  type: "avg";
  avg: OntologyIrPropertyTypeIdentifier;
}

export interface OntologyIrDerivedPropertyAggregation_max {
  type: "max";
  max: OntologyIrPropertyTypeIdentifier;
}

export interface OntologyIrDerivedPropertyAggregation_min {
  type: "min";
  min: OntologyIrPropertyTypeIdentifier;
}

export interface OntologyIrDerivedPropertyAggregation_sum {
  type: "sum";
  sum: OntologyIrPropertyTypeIdentifier;
}

export interface OntologyIrDerivedPropertyAggregation_approximateCardinality {
  type: "approximateCardinality";
  approximateCardinality: OntologyIrPropertyTypeIdentifier;
}

export interface OntologyIrDerivedPropertyAggregation_exactCardinality {
  type: "exactCardinality";
  exactCardinality: OntologyIrPropertyTypeIdentifier;
}

export interface OntologyIrDerivedPropertyAggregation_collectList {
  type: "collectList";
  collectList: OntologyIrLinkedCollection;
}

export interface OntologyIrDerivedPropertyAggregation_collectSet {
  type: "collectSet";
  collectSet: OntologyIrLinkedCollection;
}
/**
 * An aggregation function and what it should be computed on (e.g. a property type on the linked object type).
 */
export type OntologyIrDerivedPropertyAggregation =
  | OntologyIrDerivedPropertyAggregation_count
  | OntologyIrDerivedPropertyAggregation_avg
  | OntologyIrDerivedPropertyAggregation_max
  | OntologyIrDerivedPropertyAggregation_min
  | OntologyIrDerivedPropertyAggregation_sum
  | OntologyIrDerivedPropertyAggregation_approximateCardinality
  | OntologyIrDerivedPropertyAggregation_exactCardinality
  | OntologyIrDerivedPropertyAggregation_collectList
  | OntologyIrDerivedPropertyAggregation_collectSet;
