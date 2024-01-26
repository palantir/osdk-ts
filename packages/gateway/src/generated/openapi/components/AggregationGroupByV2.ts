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

import type { AggregationDurationGroupingV2 } from "./AggregationDurationGroupingV2";
import type { AggregationExactGrouping } from "./AggregationExactGrouping";
import type { AggregationFixedWidthGrouping } from "./AggregationFixedWidthGrouping";
import type { AggregationRangesGroupingV2 } from "./AggregationRangesGroupingV2";

export interface AggregationGroupByV2_FixedWidth
  extends AggregationFixedWidthGrouping
{
  type: "fixedWidth";
}

export interface AggregationGroupByV2_Ranges
  extends AggregationRangesGroupingV2
{
  type: "ranges";
}

export interface AggregationGroupByV2_Exact extends AggregationExactGrouping {
  type: "exact";
}

export interface AggregationGroupByV2_Duration
  extends AggregationDurationGroupingV2
{
  type: "duration";
}

export type AggregationGroupByV2 =
  | AggregationGroupByV2_FixedWidth
  | AggregationGroupByV2_Ranges
  | AggregationGroupByV2_Exact
  | AggregationGroupByV2_Duration;
