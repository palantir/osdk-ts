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

import type { TimeUnit } from "./TimeUnit";

/**
 * Divides objects into groups according to an interval. Note that this grouping applies only on date and timestamp types.
 * When grouping by `YEARS`, `QUARTERS`, `MONTHS`, or `WEEKS`, the `value` must be set to `1`.
 */
export interface AggregationDurationGroupingV2 {
  field: string;
  value: number;
  unit: TimeUnit;
}
