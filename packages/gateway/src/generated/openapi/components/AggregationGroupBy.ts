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

import type { AggregationDurationGrouping } from "./AggregationDurationGrouping";
import type { AggregationExactGrouping } from "./AggregationExactGrouping";
import type { AggregationFixedWidthGrouping } from "./AggregationFixedWidthGrouping";
import type { AggregationRangesGrouping } from "./AggregationRangesGrouping";

export interface AggregationGroupBy_FixedWidth
  extends AggregationFixedWidthGrouping
{
  type: "fixedWidth";
}

export interface AggregationGroupBy_Ranges extends AggregationRangesGrouping {
  type: "ranges";
}

export interface AggregationGroupBy_Exact extends AggregationExactGrouping {
  type: "exact";
}

export interface AggregationGroupBy_Duration
  extends AggregationDurationGrouping
{
  type: "duration";
}

export type AggregationGroupBy =
  | AggregationGroupBy_FixedWidth
  | AggregationGroupBy_Ranges
  | AggregationGroupBy_Exact
  | AggregationGroupBy_Duration;
