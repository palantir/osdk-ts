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

import type { ArrayPropertyType } from "./ArrayPropertyType.mjs";
import type { AttachmentPropertyType } from "./AttachmentPropertyType.mjs";
import type { BooleanPropertyType } from "./BooleanPropertyType.mjs";
import type { BytePropertyType } from "./BytePropertyType.mjs";
import type { CipherTextPropertyType } from "./CipherTextPropertyType.mjs";
import type { DatePropertyType } from "./DatePropertyType.mjs";
import type { DecimalPropertyType } from "./DecimalPropertyType.mjs";
import type { DoublePropertyType } from "./DoublePropertyType.mjs";
import type { ExperimentalTimeDependentPropertyTypeV1 } from "./ExperimentalTimeDependentPropertyTypeV1.mjs";
import type { FloatPropertyType } from "./FloatPropertyType.mjs";
import type { GeohashPropertyType } from "./GeohashPropertyType.mjs";
import type { GeoshapePropertyType } from "./GeoshapePropertyType.mjs";
import type { GeotimeSeriesReferencePropertyType } from "./GeotimeSeriesReferencePropertyType.mjs";
import type { IntegerPropertyType } from "./IntegerPropertyType.mjs";
import type { LongPropertyType } from "./LongPropertyType.mjs";
import type { MarkingPropertyType } from "./MarkingPropertyType.mjs";
import type { MediaReferencePropertyType } from "./MediaReferencePropertyType.mjs";
import type { ShortPropertyType } from "./ShortPropertyType.mjs";
import type { StringPropertyType } from "./StringPropertyType.mjs";
import type { TimestampPropertyType } from "./TimestampPropertyType.mjs";
import type { VectorPropertyType } from "./VectorPropertyType.mjs";
export interface Type_array {
  type: "array";
  array: ArrayPropertyType;
}

export interface Type_boolean {
  type: "boolean";
  boolean: BooleanPropertyType;
}

export interface Type_byte {
  type: "byte";
  byte: BytePropertyType;
}

export interface Type_date {
  type: "date";
  date: DatePropertyType;
}

export interface Type_decimal {
  type: "decimal";
  decimal: DecimalPropertyType;
}

export interface Type_double {
  type: "double";
  double: DoublePropertyType;
}

export interface Type_float {
  type: "float";
  float: FloatPropertyType;
}

export interface Type_geohash {
  type: "geohash";
  geohash: GeohashPropertyType;
}

export interface Type_geoshape {
  type: "geoshape";
  geoshape: GeoshapePropertyType;
}

export interface Type_integer {
  type: "integer";
  integer: IntegerPropertyType;
}

export interface Type_long {
  type: "long";
  long: LongPropertyType;
}

export interface Type_short {
  type: "short";
  short: ShortPropertyType;
}

export interface Type_string {
  type: "string";
  string: StringPropertyType;
}

export interface Type_experimentalTimeDependentV1 {
  type: "experimentalTimeDependentV1";
  experimentalTimeDependentV1: ExperimentalTimeDependentPropertyTypeV1;
}

export interface Type_timestamp {
  type: "timestamp";
  timestamp: TimestampPropertyType;
}

export interface Type_attachment {
  type: "attachment";
  attachment: AttachmentPropertyType;
}

export interface Type_marking {
  type: "marking";
  marking: MarkingPropertyType;
}

export interface Type_cipherText {
  type: "cipherText";
  cipherText: CipherTextPropertyType;
}

export interface Type_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferencePropertyType;
}

export interface Type_vector {
  type: "vector";
  vector: VectorPropertyType;
}

export interface Type_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferencePropertyType;
}

export type Type =
  | Type_array
  | Type_boolean
  | Type_byte
  | Type_date
  | Type_decimal
  | Type_double
  | Type_float
  | Type_geohash
  | Type_geoshape
  | Type_integer
  | Type_long
  | Type_short
  | Type_string
  | Type_experimentalTimeDependentV1
  | Type_timestamp
  | Type_attachment
  | Type_marking
  | Type_cipherText
  | Type_mediaReference
  | Type_vector
  | Type_geotimeSeriesReference;
