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

import type { AndAggregationFilter } from "./AndAggregationFilter.js";
import type { ExactMatchAggregationFilter } from "./ExactMatchAggregationFilter.js";
import type { HasPropertyAggregationFilter } from "./HasPropertyAggregationFilter.js";
import type { NotAggregationFilter } from "./NotAggregationFilter.js";
import type { OrAggregationFilter } from "./OrAggregationFilter.js";
import type { RangeAggregationFilter } from "./RangeAggregationFilter.js";
export interface AggregationFilter_or {
  type: "or";
  or: OrAggregationFilter;
}

export interface AggregationFilter_and {
  type: "and";
  and: AndAggregationFilter;
}

export interface AggregationFilter_not {
  type: "not";
  not: NotAggregationFilter;
}

export interface AggregationFilter_exactMatch {
  type: "exactMatch";
  exactMatch: ExactMatchAggregationFilter;
}

export interface AggregationFilter_range {
  type: "range";
  range: RangeAggregationFilter;
}

export interface AggregationFilter_hasProperty {
  type: "hasProperty";
  hasProperty: HasPropertyAggregationFilter;
}
/**
 * Defines filtering of objects when computing an aggregated metric value.
 */
export type AggregationFilter =
  | AggregationFilter_or
  | AggregationFilter_and
  | AggregationFilter_not
  | AggregationFilter_exactMatch
  | AggregationFilter_range
  | AggregationFilter_hasProperty;
