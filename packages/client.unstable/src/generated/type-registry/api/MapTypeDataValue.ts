/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { BaseTypeDataValue } from "./BaseTypeDataValue.js";
import type { BinaryTypeDataValue } from "./BinaryTypeDataValue.js";
import type { BooleanTypeDataValue } from "./BooleanTypeDataValue.js";
import type { ByteTypeDataValue } from "./ByteTypeDataValue.js";
import type { DateTypeDataValue } from "./DateTypeDataValue.js";
import type { DecimalTypeDataValue } from "./DecimalTypeDataValue.js";
import type { DoubleTypeDataValue } from "./DoubleTypeDataValue.js";
import type { FloatTypeDataValue } from "./FloatTypeDataValue.js";
import type { IntegerTypeDataValue } from "./IntegerTypeDataValue.js";
import type { ShortTypeDataValue } from "./ShortTypeDataValue.js";
import type { StringTypeDataValue } from "./StringTypeDataValue.js";
import type { TimestampTypeDataValue } from "./TimestampTypeDataValue.js";

export interface MapTypeDataValue_byte {
  type: "byte";
  byte: Record<ByteTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_date {
  type: "date";
  date: Record<DateTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_double {
  type: "double";
  double: Record<DoubleTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_decimal {
  type: "decimal";
  decimal: Record<DecimalTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_float {
  type: "float";
  float: Record<FloatTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_integer {
  type: "integer";
  integer: Record<IntegerTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_short {
  type: "short";
  short: Record<ShortTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_string {
  type: "string";
  string: Record<StringTypeDataValue, BaseTypeDataValue>;
}

export interface MapTypeDataValue_timestamp {
  type: "timestamp";
  timestamp: Record<TimestampTypeDataValue, BaseTypeDataValue>;
}
export type MapTypeDataValue =
  | MapTypeDataValue_byte
  | MapTypeDataValue_date
  | MapTypeDataValue_double
  | MapTypeDataValue_decimal
  | MapTypeDataValue_float
  | MapTypeDataValue_integer
  | MapTypeDataValue_short
  | MapTypeDataValue_string
  | MapTypeDataValue_timestamp;
