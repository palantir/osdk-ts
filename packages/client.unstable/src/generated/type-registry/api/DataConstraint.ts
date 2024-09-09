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

import type { ArrayTypeDataConstraints } from "./ArrayTypeDataConstraints.js";
import type { BooleanTypeDataConstraints } from "./BooleanTypeDataConstraints.js";
import type { BinaryTypeDataConstraints } from "./BinaryTypeDataConstraints.js";
import type { DateTypeDataConstraints } from "./DateTypeDataConstraints.js";
import type { DecimalTypeDataConstraints } from "./DecimalTypeDataConstraints.js";
import type { DoubleTypeDataConstraints } from "./DoubleTypeDataConstraints.js";
import type { FloatTypeDataConstraints } from "./FloatTypeDataConstraints.js";
import type { IntegerTypeDataConstraints } from "./IntegerTypeDataConstraints.js";
import type { LongTypeDataConstraints } from "./LongTypeDataConstraints.js";
import type { MapTypeDataConstraints } from "./MapTypeDataConstraints.js";
import type { NullableDataConstraint } from "./NullableDataConstraint.js";
import type { ShortTypeDataConstraints } from "./ShortTypeDataConstraints.js";
import type { StringTypeDataConstraints } from "./StringTypeDataConstraints.js";
import type { StructTypeDataConstraints } from "./StructTypeDataConstraints.js";
import type { StructTypeV2DataConstraints } from "./StructTypeV2DataConstraints.js";
import type { TimestampTypeDataConstraints } from "./TimestampTypeDataConstraints.js";
export interface DataConstraint_array {
type: "array";
array: ArrayTypeDataConstraints
}

export interface DataConstraint_boolean {
type: "boolean";
boolean: BooleanTypeDataConstraints
}

export interface DataConstraint_binary {
type: "binary";
binary: BinaryTypeDataConstraints
}

export interface DataConstraint_date {
type: "date";
date: DateTypeDataConstraints
}

export interface DataConstraint_decimal {
type: "decimal";
decimal: DecimalTypeDataConstraints
}

export interface DataConstraint_double {
type: "double";
double: DoubleTypeDataConstraints
}

export interface DataConstraint_float {
type: "float";
float: FloatTypeDataConstraints
}

export interface DataConstraint_integer {
type: "integer";
integer: IntegerTypeDataConstraints
}

export interface DataConstraint_long {
type: "long";
long: LongTypeDataConstraints
}

export interface DataConstraint_map {
type: "map";
map: MapTypeDataConstraints
}

export interface DataConstraint_nullable {
type: "nullable";
nullable: NullableDataConstraint
}

export interface DataConstraint_short {
type: "short";
short: ShortTypeDataConstraints
}

export interface DataConstraint_string {
type: "string";
string: StringTypeDataConstraints
}

export interface DataConstraint_struct {
type: "struct";
struct: StructTypeDataConstraints
}

export interface DataConstraint_structV2 {
type: "structV2";
structV2: StructTypeV2DataConstraints
}

export interface DataConstraint_timestamp {
type: "timestamp";
timestamp: TimestampTypeDataConstraints
}export type DataConstraint = DataConstraint_array | DataConstraint_boolean | DataConstraint_binary | DataConstraint_date | DataConstraint_decimal | DataConstraint_double | DataConstraint_float | DataConstraint_integer | DataConstraint_long | DataConstraint_map | DataConstraint_nullable | DataConstraint_short | DataConstraint_string | DataConstraint_struct | DataConstraint_structV2 | DataConstraint_timestamp