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

import type { AnyType } from "./AnyType";
import type { ArrayType } from "./ArrayType";
import type { BinaryType } from "./BinaryType";
import type { BooleanType } from "./BooleanType";
import type { ByteType } from "./ByteType";
import type { DateType } from "./DateType";
import type { DecimalType } from "./DecimalType";
import type { DoubleType } from "./DoubleType";
import type { FloatType } from "./FloatType";
import type { IntegerType } from "./IntegerType";
import type { LongType } from "./LongType";
import type { MapType } from "./MapType";
import type { SetType } from "./SetType";
import type { ShortType } from "./ShortType";
import type { StringType } from "./StringType";
import type { StructType } from "./StructType";
import type { TimestampType } from "./TimestampType";

export interface BaseType_Any extends AnyType {
  type: "any";
}

export interface BaseType_Binary extends BinaryType {
  type: "binary";
}

export interface BaseType_Boolean extends BooleanType {
  type: "boolean";
}

export interface BaseType_Byte extends ByteType {
  type: "byte";
}

export interface BaseType_Date extends DateType {
  type: "date";
}

export interface BaseType_Decimal extends DecimalType {
  type: "decimal";
}

export interface BaseType_Double extends DoubleType {
  type: "double";
}

export interface BaseType_Float extends FloatType {
  type: "float";
}

export interface BaseType_Integer extends IntegerType {
  type: "integer";
}

export interface BaseType_Long extends LongType {
  type: "long";
}

export interface BaseType_Short extends ShortType {
  type: "short";
}

export interface BaseType_String extends StringType {
  type: "string";
}

export interface BaseType_Timestamp extends TimestampType {
  type: "timestamp";
}

export interface BaseType_Array extends ArrayType {
  type: "array";
}

export interface BaseType_Map extends MapType {
  type: "map";
}

export interface BaseType_Set extends SetType {
  type: "set";
}

export interface BaseType_Struct extends StructType {
  type: "struct";
}

export type BaseType =
  | BaseType_Any
  | BaseType_Binary
  | BaseType_Boolean
  | BaseType_Byte
  | BaseType_Date
  | BaseType_Decimal
  | BaseType_Double
  | BaseType_Float
  | BaseType_Integer
  | BaseType_Long
  | BaseType_Short
  | BaseType_String
  | BaseType_Timestamp
  | BaseType_Array
  | BaseType_Map
  | BaseType_Set
  | BaseType_Struct;
