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

import type { ArrayTypeDataValue } from "./ArrayTypeDataValue.js";
import type { BooleanTypeDataValue } from "./BooleanTypeDataValue.js";
import type { ByteTypeDataValue } from "./ByteTypeDataValue.js";
import type { DateTypeDataValue } from "./DateTypeDataValue.js";
import type { DecimalTypeDataValue } from "./DecimalTypeDataValue.js";
import type { DoubleTypeDataValue } from "./DoubleTypeDataValue.js";
import type { FloatTypeDataValue } from "./FloatTypeDataValue.js";
import type { IntegerTypeDataValue } from "./IntegerTypeDataValue.js";
import type { LongTypeDataValue } from "./LongTypeDataValue.js";
import type { ShortTypeDataValue } from "./ShortTypeDataValue.js";
import type { StringTypeDataValue } from "./StringTypeDataValue.js";
import type { TimestampTypeDataValue } from "./TimestampTypeDataValue.js";
export interface PropertyTypeDataValue_array {
  type: "array";
  array: ArrayTypeDataValue;
}

export interface PropertyTypeDataValue_boolean {
  type: "boolean";
  boolean: BooleanTypeDataValue;
}

export interface PropertyTypeDataValue_byte {
  type: "byte";
  byte: ByteTypeDataValue;
}

export interface PropertyTypeDataValue_date {
  type: "date";
  date: DateTypeDataValue;
}

export interface PropertyTypeDataValue_decimal {
  type: "decimal";
  decimal: DecimalTypeDataValue;
}

export interface PropertyTypeDataValue_double {
  type: "double";
  double: DoubleTypeDataValue;
}

export interface PropertyTypeDataValue_float {
  type: "float";
  float: FloatTypeDataValue;
}

export interface PropertyTypeDataValue_integer {
  type: "integer";
  integer: IntegerTypeDataValue;
}

export interface PropertyTypeDataValue_long {
  type: "long";
  long: LongTypeDataValue;
}

export interface PropertyTypeDataValue_short {
  type: "short";
  short: ShortTypeDataValue;
}

export interface PropertyTypeDataValue_string {
  type: "string";
  string: StringTypeDataValue;
}

export interface PropertyTypeDataValue_timestamp {
  type: "timestamp";
  timestamp: TimestampTypeDataValue;
}
/**
 * Data values representation of the base types used in the data constraints.
 */
export type PropertyTypeDataValue =
  | PropertyTypeDataValue_array
  | PropertyTypeDataValue_boolean
  | PropertyTypeDataValue_byte
  | PropertyTypeDataValue_date
  | PropertyTypeDataValue_decimal
  | PropertyTypeDataValue_double
  | PropertyTypeDataValue_float
  | PropertyTypeDataValue_integer
  | PropertyTypeDataValue_long
  | PropertyTypeDataValue_short
  | PropertyTypeDataValue_string
  | PropertyTypeDataValue_timestamp;
