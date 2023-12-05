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

import type { BooleanFilterValue } from "./BooleanFilterValue.js";
import type { DateFilterValue } from "./DateFilterValue.js";
import type { DecimalFilterValue } from "./DecimalFilterValue.js";
import type { DoubleFilterValue } from "./DoubleFilterValue.js";
import type { IntegerFilterValue } from "./IntegerFilterValue.js";
import type { LongFilterValue } from "./LongFilterValue.js";
import type { StringFilterValue } from "./StringFilterValue.js";
import type { TimestampFilterValue } from "./TimestampFilterValue.js";
export interface AggregationFilterValue_string {
  type: "string";
  string: StringFilterValue;
}

export interface AggregationFilterValue_integer {
  type: "integer";
  integer: IntegerFilterValue;
}

export interface AggregationFilterValue_long {
  type: "long";
  long: LongFilterValue;
}

export interface AggregationFilterValue_double {
  type: "double";
  double: DoubleFilterValue;
}

export interface AggregationFilterValue_decimal {
  type: "decimal";
  decimal: DecimalFilterValue;
}

export interface AggregationFilterValue_boolean {
  type: "boolean";
  boolean: BooleanFilterValue;
}

export interface AggregationFilterValue_date {
  type: "date";
  date: DateFilterValue;
}

export interface AggregationFilterValue_timestamp {
  type: "timestamp";
  timestamp: TimestampFilterValue;
}

export type AggregationFilterValue =
  | AggregationFilterValue_string
  | AggregationFilterValue_integer
  | AggregationFilterValue_long
  | AggregationFilterValue_double
  | AggregationFilterValue_decimal
  | AggregationFilterValue_boolean
  | AggregationFilterValue_date
  | AggregationFilterValue_timestamp;
