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

import type { AttachmentPropertyType } from "../AttachmentPropertyType.js";
import type { BooleanPropertyType } from "../BooleanPropertyType.js";
import type { BytePropertyType } from "../BytePropertyType.js";
import type { CipherTextPropertyType } from "../CipherTextPropertyType.js";
import type { DatePropertyType } from "../DatePropertyType.js";
import type { DecimalPropertyType } from "../DecimalPropertyType.js";
import type { DoublePropertyType } from "../DoublePropertyType.js";
import type { ExperimentalTimeDependentPropertyTypeV1 } from "../ExperimentalTimeDependentPropertyTypeV1.js";
import type { FloatPropertyType } from "../FloatPropertyType.js";
import type { GeohashPropertyType } from "../GeohashPropertyType.js";
import type { GeoshapePropertyType } from "../GeoshapePropertyType.js";
import type { GeotimeSeriesReferencePropertyType } from "../GeotimeSeriesReferencePropertyType.js";
import type { IntegerPropertyType } from "../IntegerPropertyType.js";
import type { LongPropertyType } from "../LongPropertyType.js";
import type { MarkingPropertyType } from "../MarkingPropertyType.js";
import type { MediaReferencePropertyType } from "../MediaReferencePropertyType.js";
import type { ShortPropertyType } from "../ShortPropertyType.js";
import type { StringPropertyType } from "../StringPropertyType.js";
import type { TimestampPropertyType } from "../TimestampPropertyType.js";
import type { VectorPropertyType } from "../VectorPropertyType.js";
import type { ArrayPropertyTypeModification } from "./ArrayPropertyTypeModification.js";
import type { StructPropertyTypeModification } from "./StructPropertyTypeModification.js";
export interface TypeForModification_array {
  type: "array";
  array: ArrayPropertyTypeModification;
}

export interface TypeForModification_boolean {
  type: "boolean";
  boolean: BooleanPropertyType;
}

export interface TypeForModification_byte {
  type: "byte";
  byte: BytePropertyType;
}

export interface TypeForModification_date {
  type: "date";
  date: DatePropertyType;
}

export interface TypeForModification_decimal {
  type: "decimal";
  decimal: DecimalPropertyType;
}

export interface TypeForModification_double {
  type: "double";
  double: DoublePropertyType;
}

export interface TypeForModification_float {
  type: "float";
  float: FloatPropertyType;
}

export interface TypeForModification_geohash {
  type: "geohash";
  geohash: GeohashPropertyType;
}

export interface TypeForModification_geoshape {
  type: "geoshape";
  geoshape: GeoshapePropertyType;
}

export interface TypeForModification_integer {
  type: "integer";
  integer: IntegerPropertyType;
}

export interface TypeForModification_long {
  type: "long";
  long: LongPropertyType;
}

export interface TypeForModification_short {
  type: "short";
  short: ShortPropertyType;
}

export interface TypeForModification_string {
  type: "string";
  string: StringPropertyType;
}

export interface TypeForModification_experimentalTimeDependentV1 {
  type: "experimentalTimeDependentV1";
  experimentalTimeDependentV1: ExperimentalTimeDependentPropertyTypeV1;
}

export interface TypeForModification_timestamp {
  type: "timestamp";
  timestamp: TimestampPropertyType;
}

export interface TypeForModification_attachment {
  type: "attachment";
  attachment: AttachmentPropertyType;
}

export interface TypeForModification_marking {
  type: "marking";
  marking: MarkingPropertyType;
}

export interface TypeForModification_cipherText {
  type: "cipherText";
  cipherText: CipherTextPropertyType;
}

export interface TypeForModification_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferencePropertyType;
}

export interface TypeForModification_vector {
  type: "vector";
  vector: VectorPropertyType;
}

export interface TypeForModification_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferencePropertyType;
}

export interface TypeForModification_struct {
  type: "struct";
  struct: StructPropertyTypeModification;
}
/**
 * Duplicate of Type in ontology-metadata-api, with the exception of StructPropertyTypeModification. This is because
 * struct field rids shouldn't be supplied in the modification request by client - they should be generated on
 * the backend.
 */
export type TypeForModification =
  | TypeForModification_array
  | TypeForModification_boolean
  | TypeForModification_byte
  | TypeForModification_date
  | TypeForModification_decimal
  | TypeForModification_double
  | TypeForModification_float
  | TypeForModification_geohash
  | TypeForModification_geoshape
  | TypeForModification_integer
  | TypeForModification_long
  | TypeForModification_short
  | TypeForModification_string
  | TypeForModification_experimentalTimeDependentV1
  | TypeForModification_timestamp
  | TypeForModification_attachment
  | TypeForModification_marking
  | TypeForModification_cipherText
  | TypeForModification_mediaReference
  | TypeForModification_vector
  | TypeForModification_geotimeSeriesReference
  | TypeForModification_struct;
