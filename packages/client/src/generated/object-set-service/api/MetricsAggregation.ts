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

import type { Aggregation } from "./Aggregation.js";
import type { AggregationFilter } from "./AggregationFilter.js";
import type { AggregationName } from "./AggregationName.js";
import type { Dimension } from "./Dimension.js";
import type { Metric } from "./Metric.js";
import type { MetricName } from "./MetricName.js";
import type { Ordering } from "./Ordering.js";

export interface MetricsAggregation {
  dimension: Dimension;
  ordering: Array<Ordering>;
  metrics: Map<MetricName, Metric>;
  filter: AggregationFilter | undefined;
  subAggregations: Map<AggregationName, Aggregation>;
}
