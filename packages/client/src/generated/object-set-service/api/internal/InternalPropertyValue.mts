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

import type { AttachmentPropertyValue } from "../AttachmentPropertyValue.mjs";
import type { BooleanPropertyValue } from "../BooleanPropertyValue.mjs";
import type { CipherTextPropertyValue } from "../CipherTextPropertyValue.mjs";
import type { DatePropertyValue } from "../DatePropertyValue.mjs";
import type { DecimalPropertyValue } from "../DecimalPropertyValue.mjs";
import type { DoublePropertyValue } from "../DoublePropertyValue.mjs";
import type { GeoShapePropertyValue } from "../GeoShapePropertyValue.mjs";
import type { GeotimeSeriesReferencePropertyValue } from "../GeotimeSeriesReferencePropertyValue.mjs";
import type { IntegerPropertyValue } from "../IntegerPropertyValue.mjs";
import type { LongPropertyValue } from "../LongPropertyValue.mjs";
import type { MarkingPropertyValue } from "../MarkingPropertyValue.mjs";
import type { MediaReferencePropertyValue } from "../MediaReferencePropertyValue.mjs";
import type { NullPropertyValue } from "../NullPropertyValue.mjs";
import type { StringPropertyValue } from "../StringPropertyValue.mjs";
import type { TimeDependentPropertyValue } from "../TimeDependentPropertyValue.mjs";
import type { TimestampPropertyValue } from "../TimestampPropertyValue.mjs";
import type { VectorPropertyValue } from "../VectorPropertyValue.mjs";
import type { InternalArrayPropertyValue } from "./InternalArrayPropertyValue.mjs";
import type { InternalFloatPropertyValue } from "./InternalFloatPropertyValue.mjs";
import type { InternalGeohashPropertyValue } from "./InternalGeohashPropertyValue.mjs";
export interface InternalPropertyValue_array {
  type: "array";
  array: InternalArrayPropertyValue;
}

export interface InternalPropertyValue_boolean {
  type: "boolean";
  boolean: BooleanPropertyValue;
}

export interface InternalPropertyValue_cipherText {
  type: "cipherText";
  cipherText: CipherTextPropertyValue;
}

export interface InternalPropertyValue_date {
  type: "date";
  date: DatePropertyValue;
}

export interface InternalPropertyValue_decimal {
  type: "decimal";
  decimal: DecimalPropertyValue;
}

export interface InternalPropertyValue_double {
  type: "double";
  double: DoublePropertyValue;
}

export interface InternalPropertyValue_float {
  type: "float";
  float: InternalFloatPropertyValue;
}

export interface InternalPropertyValue_geoHash {
  type: "geoHash";
  geoHash: InternalGeohashPropertyValue;
}

export interface InternalPropertyValue_geoShape {
  type: "geoShape";
  geoShape: GeoShapePropertyValue;
}

export interface InternalPropertyValue_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferencePropertyValue;
}

export interface InternalPropertyValue_integer {
  type: "integer";
  integer: IntegerPropertyValue;
}

export interface InternalPropertyValue_long {
  type: "long";
  long: LongPropertyValue;
}

export interface InternalPropertyValue_marking {
  type: "marking";
  marking: MarkingPropertyValue;
}

export interface InternalPropertyValue_null {
  type: "null";
  null: NullPropertyValue;
}

export interface InternalPropertyValue_string {
  type: "string";
  string: StringPropertyValue;
}

export interface InternalPropertyValue_timeDependent {
  type: "timeDependent";
  timeDependent: TimeDependentPropertyValue;
}

export interface InternalPropertyValue_timestamp {
  type: "timestamp";
  timestamp: TimestampPropertyValue;
}

export interface InternalPropertyValue_attachment {
  type: "attachment";
  attachment: AttachmentPropertyValue;
}

export interface InternalPropertyValue_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferencePropertyValue;
}

export interface InternalPropertyValue_vector {
  type: "vector";
  vector: VectorPropertyValue;
}

export type InternalPropertyValue =
  | InternalPropertyValue_array
  | InternalPropertyValue_boolean
  | InternalPropertyValue_cipherText
  | InternalPropertyValue_date
  | InternalPropertyValue_decimal
  | InternalPropertyValue_double
  | InternalPropertyValue_float
  | InternalPropertyValue_geoHash
  | InternalPropertyValue_geoShape
  | InternalPropertyValue_geotimeSeriesReference
  | InternalPropertyValue_integer
  | InternalPropertyValue_long
  | InternalPropertyValue_marking
  | InternalPropertyValue_null
  | InternalPropertyValue_string
  | InternalPropertyValue_timeDependent
  | InternalPropertyValue_timestamp
  | InternalPropertyValue_attachment
  | InternalPropertyValue_mediaReference
  | InternalPropertyValue_vector;
