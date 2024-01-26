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

import type { DateType } from "./DateType";
import type { DoubleType } from "./DoubleType";
import type { IntegerType } from "./IntegerType";
import type { TimestampType } from "./TimestampType";

export interface QueryAggregationRangeSubType_Date extends DateType {
  type: "date";
}

export interface QueryAggregationRangeSubType_Double extends DoubleType {
  type: "double";
}

export interface QueryAggregationRangeSubType_Integer extends IntegerType {
  type: "integer";
}

export interface QueryAggregationRangeSubType_Timestamp extends TimestampType {
  type: "timestamp";
}

export type QueryAggregationRangeSubType =
  | QueryAggregationRangeSubType_Date
  | QueryAggregationRangeSubType_Double
  | QueryAggregationRangeSubType_Integer
  | QueryAggregationRangeSubType_Timestamp;
