/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { BooleanValue } from "./BooleanValue.js";
import type { DateValue } from "./DateValue.js";
import type { DoubleValue } from "./DoubleValue.js";
import type { GeohashValue } from "./GeohashValue.js";
import type { IntegerValue } from "./IntegerValue.js";
import type { LongValue } from "./LongValue.js";
import type { NullValue } from "./NullValue.js";
import type { StringValue } from "./StringValue.js";
import type { TimestampValue } from "./TimestampValue.js";
export interface StructFieldDataValue_boolean {
  type: "boolean";
  boolean: BooleanValue;
}

export interface StructFieldDataValue_integer {
  type: "integer";
  integer: IntegerValue;
}

export interface StructFieldDataValue_long {
  type: "long";
  long: LongValue;
}

export interface StructFieldDataValue_double {
  type: "double";
  double: DoubleValue;
}

export interface StructFieldDataValue_string {
  type: "string";
  string: StringValue;
}

export interface StructFieldDataValue_date {
  type: "date";
  date: DateValue;
}

export interface StructFieldDataValue_geohash {
  type: "geohash";
  geohash: GeohashValue;
}

export interface StructFieldDataValue_timestamp {
  type: "timestamp";
  timestamp: TimestampValue;
}

export interface StructFieldDataValue_null {
  type: "null";
  null: NullValue;
}
/**
 * DataValue types that are allowed as struct parameter field. Each struct field in a struct parameter is mapped
 * mapped to a StructFieldDataValue. See StructFieldBaseParameterType for which types are supported for struct
 * parameter fields.
 */
export type StructFieldDataValue =
  | StructFieldDataValue_boolean
  | StructFieldDataValue_integer
  | StructFieldDataValue_long
  | StructFieldDataValue_double
  | StructFieldDataValue_string
  | StructFieldDataValue_date
  | StructFieldDataValue_geohash
  | StructFieldDataValue_timestamp
  | StructFieldDataValue_null;
