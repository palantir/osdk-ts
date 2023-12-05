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

import type { DateFilterValue } from "./DateFilterValue.mjs";
import type { DecimalFilterValue } from "./DecimalFilterValue.mjs";
import type { DoubleFilterValue } from "./DoubleFilterValue.mjs";
import type { IntegerFilterValue } from "./IntegerFilterValue.mjs";
import type { LongFilterValue } from "./LongFilterValue.mjs";
import type { TimestampFilterValue } from "./TimestampFilterValue.mjs";
export interface RangeAggregationFilterValue_integer {
  type: "integer";
  integer: IntegerFilterValue;
}

export interface RangeAggregationFilterValue_long {
  type: "long";
  long: LongFilterValue;
}

export interface RangeAggregationFilterValue_double {
  type: "double";
  double: DoubleFilterValue;
}

export interface RangeAggregationFilterValue_decimal {
  type: "decimal";
  decimal: DecimalFilterValue;
}

export interface RangeAggregationFilterValue_date {
  type: "date";
  date: DateFilterValue;
}

export interface RangeAggregationFilterValue_timestamp {
  type: "timestamp";
  timestamp: TimestampFilterValue;
}

export type RangeAggregationFilterValue =
  | RangeAggregationFilterValue_integer
  | RangeAggregationFilterValue_long
  | RangeAggregationFilterValue_double
  | RangeAggregationFilterValue_decimal
  | RangeAggregationFilterValue_date
  | RangeAggregationFilterValue_timestamp;
