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
import type { BooleanType } from "./BooleanType";
import type { DateType } from "./DateType";
import type { FloatType } from "./FloatType";
import type { IntegerType } from "./IntegerType";
import type { ModelApiArrayType } from "./ModelApiArrayType";
import type { ModelApiMapType } from "./ModelApiMapType";
import type { ModelApiStructType } from "./ModelApiStructType";
import type { ModelApiUnionType } from "./ModelApiUnionType";
import type { NullType } from "./NullType";
import type { StringType } from "./StringType";
import type { TimestampType } from "./TimestampType";

export interface ModelApiType_Any extends AnyType {
  type: "any";
}

export interface ModelApiType_Array extends ModelApiArrayType {
  type: "array";
}

export interface ModelApiType_Boolean extends BooleanType {
  type: "boolean";
}

export interface ModelApiType_Date extends DateType {
  type: "date";
}

export interface ModelApiType_Float extends FloatType {
  type: "float";
}

export interface ModelApiType_Integer extends IntegerType {
  type: "integer";
}

export interface ModelApiType_Map extends ModelApiMapType {
  type: "map";
}

export interface ModelApiType_Null extends NullType {
  type: "null";
}

export interface ModelApiType_String extends StringType {
  type: "string";
}

export interface ModelApiType_Struct extends ModelApiStructType {
  type: "struct";
}

export interface ModelApiType_Timestamp extends TimestampType {
  type: "timestamp";
}

export interface ModelApiType_Union extends ModelApiUnionType {
  type: "union";
}

export type ModelApiType =
  | ModelApiType_Any
  | ModelApiType_Array
  | ModelApiType_Boolean
  | ModelApiType_Date
  | ModelApiType_Float
  | ModelApiType_Integer
  | ModelApiType_Map
  | ModelApiType_Null
  | ModelApiType_String
  | ModelApiType_Struct
  | ModelApiType_Timestamp
  | ModelApiType_Union;
