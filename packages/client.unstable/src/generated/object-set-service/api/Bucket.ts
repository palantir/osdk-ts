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

import type { AggregationName } from "./AggregationName.js";
import type { MetricName } from "./MetricName.js";
import type { MetricResult } from "./MetricResult.js";
import type { SubAggregateResult } from "./SubAggregateResult.js";

/**
 * A bucket that data was grouped into and the aggregations computed for the data in that bucket.
 */
export interface Bucket {
  key: string;
  metrics: Record<MetricName, MetricResult | undefined>;
  subAggregations: Record<AggregationName, SubAggregateResult>;
}
