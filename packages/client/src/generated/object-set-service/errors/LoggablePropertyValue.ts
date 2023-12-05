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

import type { AttachmentPropertyValue } from "../api/AttachmentPropertyValue.js";
import type { BooleanPropertyValue } from "../api/BooleanPropertyValue.js";
import type { CipherTextPropertyValue } from "../api/CipherTextPropertyValue.js";
import type { DatePropertyValue } from "../api/DatePropertyValue.js";
import type { DecimalPropertyValue } from "../api/DecimalPropertyValue.js";
import type { DoublePropertyValue } from "../api/DoublePropertyValue.js";
import type { GeoPointPropertyValue } from "../api/GeoPointPropertyValue.js";
import type { GeoShapePropertyValue } from "../api/GeoShapePropertyValue.js";
import type { GeotimeSeriesReferencePropertyValue } from "../api/GeotimeSeriesReferencePropertyValue.js";
import type { IntegerPropertyValue } from "../api/IntegerPropertyValue.js";
import type { LongPropertyValue } from "../api/LongPropertyValue.js";
import type { MarkingPropertyValue } from "../api/MarkingPropertyValue.js";
import type { NullPropertyValue } from "../api/NullPropertyValue.js";
import type { StringPropertyValue } from "../api/StringPropertyValue.js";
import type { TimeDependentPropertyValue } from "../api/TimeDependentPropertyValue.js";
import type { TimestampPropertyValue } from "../api/TimestampPropertyValue.js";
import type { VectorPropertyValue } from "../api/VectorPropertyValue.js";
import type { LoggableArrayPropertyValue } from "./LoggableArrayPropertyValue.js";
import type { LoggableMediaReferencePropertyValue } from "./LoggableMediaReferencePropertyValue.js";
export interface LoggablePropertyValue_array {
  type: "array";
  array: LoggableArrayPropertyValue;
}

export interface LoggablePropertyValue_boolean {
  type: "boolean";
  boolean: BooleanPropertyValue;
}

export interface LoggablePropertyValue_cipherText {
  type: "cipherText";
  cipherText: CipherTextPropertyValue;
}

export interface LoggablePropertyValue_date {
  type: "date";
  date: DatePropertyValue;
}

export interface LoggablePropertyValue_decimal {
  type: "decimal";
  decimal: DecimalPropertyValue;
}

export interface LoggablePropertyValue_double {
  type: "double";
  double: DoublePropertyValue;
}

export interface LoggablePropertyValue_geoPoint {
  type: "geoPoint";
  geoPoint: GeoPointPropertyValue;
}

export interface LoggablePropertyValue_geoShape {
  type: "geoShape";
  geoShape: GeoShapePropertyValue;
}

export interface LoggablePropertyValue_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferencePropertyValue;
}

export interface LoggablePropertyValue_integer {
  type: "integer";
  integer: IntegerPropertyValue;
}

export interface LoggablePropertyValue_long {
  type: "long";
  long: LongPropertyValue;
}

export interface LoggablePropertyValue_marking {
  type: "marking";
  marking: MarkingPropertyValue;
}

export interface LoggablePropertyValue_null {
  type: "null";
  null: NullPropertyValue;
}

export interface LoggablePropertyValue_string {
  type: "string";
  string: StringPropertyValue;
}

export interface LoggablePropertyValue_timeDependent {
  type: "timeDependent";
  timeDependent: TimeDependentPropertyValue;
}

export interface LoggablePropertyValue_timestamp {
  type: "timestamp";
  timestamp: TimestampPropertyValue;
}

export interface LoggablePropertyValue_attachment {
  type: "attachment";
  attachment: AttachmentPropertyValue;
}

export interface LoggablePropertyValue_mediaReference {
  type: "mediaReference";
  mediaReference: LoggableMediaReferencePropertyValue;
}

export interface LoggablePropertyValue_vector {
  type: "vector";
  vector: VectorPropertyValue;
}

export type LoggablePropertyValue =
  | LoggablePropertyValue_array
  | LoggablePropertyValue_boolean
  | LoggablePropertyValue_cipherText
  | LoggablePropertyValue_date
  | LoggablePropertyValue_decimal
  | LoggablePropertyValue_double
  | LoggablePropertyValue_geoPoint
  | LoggablePropertyValue_geoShape
  | LoggablePropertyValue_geotimeSeriesReference
  | LoggablePropertyValue_integer
  | LoggablePropertyValue_long
  | LoggablePropertyValue_marking
  | LoggablePropertyValue_null
  | LoggablePropertyValue_string
  | LoggablePropertyValue_timeDependent
  | LoggablePropertyValue_timestamp
  | LoggablePropertyValue_attachment
  | LoggablePropertyValue_mediaReference
  | LoggablePropertyValue_vector;
