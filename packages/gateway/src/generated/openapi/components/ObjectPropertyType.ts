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

import type { AttachmentType } from "./AttachmentType";
import type { BooleanType } from "./BooleanType";
import type { ByteType } from "./ByteType";
import type { DateType } from "./DateType";
import type { DecimalType } from "./DecimalType";
import type { DoubleType } from "./DoubleType";
import type { FloatType } from "./FloatType";
import type { GeoPointType } from "./GeoPointType";
import type { GeoShapeType } from "./GeoShapeType";
import type { IntegerType } from "./IntegerType";
import type { LongType } from "./LongType";
import type { OntologyObjectArrayType } from "./OntologyObjectArrayType";
import type { ShortType } from "./ShortType";
import type { StringType } from "./StringType";
import type { TimeseriesType } from "./TimeseriesType";
import type { TimestampType } from "./TimestampType";

export interface ObjectPropertyType_Array extends OntologyObjectArrayType {
  type: "array";
}

export interface ObjectPropertyType_Attachment extends AttachmentType {
  type: "attachment";
}

export interface ObjectPropertyType_Boolean extends BooleanType {
  type: "boolean";
}

export interface ObjectPropertyType_Byte extends ByteType {
  type: "byte";
}

export interface ObjectPropertyType_Date extends DateType {
  type: "date";
}

export interface ObjectPropertyType_Decimal extends DecimalType {
  type: "decimal";
}

export interface ObjectPropertyType_Double extends DoubleType {
  type: "double";
}

export interface ObjectPropertyType_Float extends FloatType {
  type: "float";
}

export interface ObjectPropertyType_Geopoint extends GeoPointType {
  type: "geopoint";
}

export interface ObjectPropertyType_Geoshape extends GeoShapeType {
  type: "geoshape";
}

export interface ObjectPropertyType_Integer extends IntegerType {
  type: "integer";
}

export interface ObjectPropertyType_Long extends LongType {
  type: "long";
}

export interface ObjectPropertyType_Short extends ShortType {
  type: "short";
}

export interface ObjectPropertyType_String extends StringType {
  type: "string";
}

export interface ObjectPropertyType_Timestamp extends TimestampType {
  type: "timestamp";
}

export interface ObjectPropertyType_Timeseries extends TimeseriesType {
  type: "timeseries";
}

export type ObjectPropertyType =
  | ObjectPropertyType_Array
  | ObjectPropertyType_Attachment
  | ObjectPropertyType_Boolean
  | ObjectPropertyType_Byte
  | ObjectPropertyType_Date
  | ObjectPropertyType_Decimal
  | ObjectPropertyType_Double
  | ObjectPropertyType_Float
  | ObjectPropertyType_Geopoint
  | ObjectPropertyType_Geoshape
  | ObjectPropertyType_Integer
  | ObjectPropertyType_Long
  | ObjectPropertyType_Short
  | ObjectPropertyType_String
  | ObjectPropertyType_Timestamp
  | ObjectPropertyType_Timeseries;
