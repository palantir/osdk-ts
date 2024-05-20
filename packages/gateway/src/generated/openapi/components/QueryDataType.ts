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

import type { AttachmentType } from "./AttachmentType.js";
import type { BooleanType } from "./BooleanType.js";
import type { DateType } from "./DateType.js";
import type { DoubleType } from "./DoubleType.js";
import type { FloatType } from "./FloatType.js";
import type { IntegerType } from "./IntegerType.js";
import type { LongType } from "./LongType.js";
import type { NullType } from "./NullType.js";
import type { OntologyObjectSetType } from "./OntologyObjectSetType.js";
import type { OntologyObjectType } from "./OntologyObjectType.js";
import type { QueryArrayType } from "./QueryArrayType.js";
import type { QuerySetType } from "./QuerySetType.js";
import type { QueryStructType } from "./QueryStructType.js";
import type { QueryUnionType } from "./QueryUnionType.js";
import type { StringType } from "./StringType.js";
import type { ThreeDimensionalAggregation } from "./ThreeDimensionalAggregation.js";
import type { TimestampType } from "./TimestampType.js";
import type { TwoDimensionalAggregation } from "./TwoDimensionalAggregation.js";
import type { UnsupportedType } from "./UnsupportedType.js";

export interface QueryDataType_Array extends QueryArrayType {
  type: "array";
}

export interface QueryDataType_Attachment extends AttachmentType {
  type: "attachment";
}

export interface QueryDataType_Boolean extends BooleanType {
  type: "boolean";
}

export interface QueryDataType_Date extends DateType {
  type: "date";
}

export interface QueryDataType_Double extends DoubleType {
  type: "double";
}

export interface QueryDataType_Float extends FloatType {
  type: "float";
}

export interface QueryDataType_Integer extends IntegerType {
  type: "integer";
}

export interface QueryDataType_Long extends LongType {
  type: "long";
}

export interface QueryDataType_ObjectSet extends OntologyObjectSetType {
  type: "objectSet";
}

export interface QueryDataType_Object extends OntologyObjectType {
  type: "object";
}

export interface QueryDataType_Set extends QuerySetType {
  type: "set";
}

export interface QueryDataType_String extends StringType {
  type: "string";
}

export interface QueryDataType_Struct extends QueryStructType {
  type: "struct";
}

export interface QueryDataType_ThreeDimensionalAggregation
  extends ThreeDimensionalAggregation
{
  type: "threeDimensionalAggregation";
}

export interface QueryDataType_Timestamp extends TimestampType {
  type: "timestamp";
}

export interface QueryDataType_TwoDimensionalAggregation
  extends TwoDimensionalAggregation
{
  type: "twoDimensionalAggregation";
}

export interface QueryDataType_Union extends QueryUnionType {
  type: "union";
}

export interface QueryDataType_Null extends NullType {
  type: "null";
}

export interface QueryDataType_Unsupported extends UnsupportedType {
  type: "unsupported";
}

export type QueryDataType =
  | QueryDataType_Array
  | QueryDataType_Attachment
  | QueryDataType_Boolean
  | QueryDataType_Date
  | QueryDataType_Double
  | QueryDataType_Float
  | QueryDataType_Integer
  | QueryDataType_Long
  | QueryDataType_ObjectSet
  | QueryDataType_Object
  | QueryDataType_Set
  | QueryDataType_String
  | QueryDataType_Struct
  | QueryDataType_ThreeDimensionalAggregation
  | QueryDataType_Timestamp
  | QueryDataType_TwoDimensionalAggregation
  | QueryDataType_Union
  | QueryDataType_Null
  | QueryDataType_Unsupported;
