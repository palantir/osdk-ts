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

import type { AggregationGroupKeyV2 } from "./AggregationGroupKeyV2";
import type { AggregationGroupValueV2 } from "./AggregationGroupValueV2";
import type { AggregationMetricResultV2 } from "./AggregationMetricResultV2";

export interface AggregateObjectsResponseItemV2 {
  group: Record<AggregationGroupKeyV2, AggregationGroupValueV2>;
  metrics: ReadonlyArray<AggregationMetricResultV2>;
}
