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

import type { ArrayTypeDataValue } from "./ArrayTypeDataValue.mjs";
import type { BooleanTypeDataValue } from "./BooleanTypeDataValue.mjs";
import type { ByteTypeDataValue } from "./ByteTypeDataValue.mjs";
import type { DateTypeDataValue } from "./DateTypeDataValue.mjs";
import type { DecimalTypeDataValue } from "./DecimalTypeDataValue.mjs";
import type { DoubleTypeDataValue } from "./DoubleTypeDataValue.mjs";
import type { FloatTypeDataValue } from "./FloatTypeDataValue.mjs";
import type { IntegerTypeDataValue } from "./IntegerTypeDataValue.mjs";
import type { LongTypeDataValue } from "./LongTypeDataValue.mjs";
import type { ShortTypeDataValue } from "./ShortTypeDataValue.mjs";
import type { StringTypeDataValue } from "./StringTypeDataValue.mjs";
import type { TimestampTypeDataValue } from "./TimestampTypeDataValue.mjs";
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
