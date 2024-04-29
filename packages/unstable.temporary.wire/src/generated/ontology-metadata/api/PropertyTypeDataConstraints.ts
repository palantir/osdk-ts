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

import type { ArrayTypeDataConstraints } from "./ArrayTypeDataConstraints.js";
import type { BooleanTypeDataConstraints } from "./BooleanTypeDataConstraints.js";
import type { DateTypeDataConstraints } from "./DateTypeDataConstraints.js";
import type { DecimalTypeDataConstraints } from "./DecimalTypeDataConstraints.js";
import type { DoubleTypeDataConstraints } from "./DoubleTypeDataConstraints.js";
import type { FloatTypeDataConstraints } from "./FloatTypeDataConstraints.js";
import type { IntegerTypeDataConstraints } from "./IntegerTypeDataConstraints.js";
import type { LongTypeDataConstraints } from "./LongTypeDataConstraints.js";
import type { ShortTypeDataConstraints } from "./ShortTypeDataConstraints.js";
import type { StringTypeDataConstraints } from "./StringTypeDataConstraints.js";
import type { TimestampTypeDataConstraints } from "./TimestampTypeDataConstraints.js";
export interface PropertyTypeDataConstraints_array {
  type: "array";
  array: ArrayTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_boolean {
  type: "boolean";
  boolean: BooleanTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_date {
  type: "date";
  date: DateTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_decimal {
  type: "decimal";
  decimal: DecimalTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_double {
  type: "double";
  double: DoubleTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_float {
  type: "float";
  float: FloatTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_integer {
  type: "integer";
  integer: IntegerTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_long {
  type: "long";
  long: LongTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_short {
  type: "short";
  short: ShortTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_string {
  type: "string";
  string: StringTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_timestamp {
  type: "timestamp";
  timestamp: TimestampTypeDataConstraints;
}
export type PropertyTypeDataConstraints =
  | PropertyTypeDataConstraints_array
  | PropertyTypeDataConstraints_boolean
  | PropertyTypeDataConstraints_date
  | PropertyTypeDataConstraints_decimal
  | PropertyTypeDataConstraints_double
  | PropertyTypeDataConstraints_float
  | PropertyTypeDataConstraints_integer
  | PropertyTypeDataConstraints_long
  | PropertyTypeDataConstraints_short
  | PropertyTypeDataConstraints_string
  | PropertyTypeDataConstraints_timestamp;
