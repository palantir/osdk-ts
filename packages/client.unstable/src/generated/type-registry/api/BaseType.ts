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

import type { ArrayType } from "./ArrayType.js";
import type { BooleanType } from "./BooleanType.js";
import type { BinaryType } from "./BinaryType.js";
import type { ByteType } from "./ByteType.js";
import type { DateType } from "./DateType.js";
import type { DecimalType } from "./DecimalType.js";
import type { DoubleType } from "./DoubleType.js";
import type { FloatType } from "./FloatType.js";
import type { IntegerType } from "./IntegerType.js";
import type { LongType } from "./LongType.js";
import type { MapType } from "./MapType.js";
import type { OptionalType } from "./OptionalType.js";
import type { ReferencedType } from "./ReferencedType.js";
import type { ShortType } from "./ShortType.js";
import type { StringType } from "./StringType.js";
import type { StructType } from "./StructType.js";
import type { StructTypeV2 } from "./StructTypeV2.js";
import type { TimestampType } from "./TimestampType.js";
import type { UnionType } from "./UnionType.js";
export interface BaseType_array {
type: "array";
array: ArrayType
}

export interface BaseType_boolean {
type: "boolean";
boolean: BooleanType
}

export interface BaseType_binary {
type: "binary";
binary: BinaryType
}

export interface BaseType_byte {
type: "byte";
byte: ByteType
}

export interface BaseType_date {
type: "date";
date: DateType
}

export interface BaseType_decimal {
type: "decimal";
decimal: DecimalType
}

export interface BaseType_double {
type: "double";
double: DoubleType
}

export interface BaseType_float {
type: "float";
float: FloatType
}

export interface BaseType_integer {
type: "integer";
integer: IntegerType
}

export interface BaseType_long {
type: "long";
long: LongType
}

export interface BaseType_map {
type: "map";
map: MapType
}

export interface BaseType_optional {
type: "optional";
optional: OptionalType
}

export interface BaseType_referenced {
type: "referenced";
referenced: ReferencedType
}

export interface BaseType_short {
type: "short";
short: ShortType
}

export interface BaseType_string {
type: "string";
string: StringType
}

export interface BaseType_struct {
type: "struct";
struct: StructType
}

export interface BaseType_structV2 {
type: "structV2";
structV2: StructTypeV2
}

export interface BaseType_timestamp {
type: "timestamp";
timestamp: TimestampType
}

export interface BaseType_union {
type: "union";
union: UnionType
}
/**
 * Base physical (data) type, representing the lowest layer in the type system.
 */
export type BaseType = BaseType_array | BaseType_boolean | BaseType_binary | BaseType_byte | BaseType_date | BaseType_decimal | BaseType_double | BaseType_float | BaseType_integer | BaseType_long | BaseType_map | BaseType_optional | BaseType_referenced | BaseType_short | BaseType_string | BaseType_struct | BaseType_structV2 | BaseType_timestamp | BaseType_union