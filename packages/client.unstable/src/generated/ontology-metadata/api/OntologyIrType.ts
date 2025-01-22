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

import type { AttachmentPropertyType } from "./AttachmentPropertyType.js";
import type { BooleanPropertyType } from "./BooleanPropertyType.js";
import type { BytePropertyType } from "./BytePropertyType.js";
import type { DatePropertyType } from "./DatePropertyType.js";
import type { DecimalPropertyType } from "./DecimalPropertyType.js";
import type { DoublePropertyType } from "./DoublePropertyType.js";
import type { ExperimentalTimeDependentPropertyTypeV1 } from "./ExperimentalTimeDependentPropertyTypeV1.js";
import type { FloatPropertyType } from "./FloatPropertyType.js";
import type { GeohashPropertyType } from "./GeohashPropertyType.js";
import type { GeoshapePropertyType } from "./GeoshapePropertyType.js";
import type { GeotimeSeriesReferencePropertyType } from "./GeotimeSeriesReferencePropertyType.js";
import type { IntegerPropertyType } from "./IntegerPropertyType.js";
import type { LongPropertyType } from "./LongPropertyType.js";
import type { MarkingPropertyType } from "./MarkingPropertyType.js";
import type { MediaReferencePropertyType } from "./MediaReferencePropertyType.js";
import type { OntologyIrArrayPropertyType } from "./OntologyIrArrayPropertyType.js";
import type { OntologyIrCipherTextPropertyType } from "./OntologyIrCipherTextPropertyType.js";
import type { OntologyIrStructPropertyType } from "./OntologyIrStructPropertyType.js";
import type { ShortPropertyType } from "./ShortPropertyType.js";
import type { StringPropertyType } from "./StringPropertyType.js";
import type { TimestampPropertyType } from "./TimestampPropertyType.js";
import type { VectorPropertyType } from "./VectorPropertyType.js";
export interface OntologyIrType_array {
  type: "array";
  array: OntologyIrArrayPropertyType;
}

export interface OntologyIrType_boolean {
  type: "boolean";
  boolean: BooleanPropertyType;
}

export interface OntologyIrType_byte {
  type: "byte";
  byte: BytePropertyType;
}

export interface OntologyIrType_date {
  type: "date";
  date: DatePropertyType;
}

export interface OntologyIrType_decimal {
  type: "decimal";
  decimal: DecimalPropertyType;
}

export interface OntologyIrType_double {
  type: "double";
  double: DoublePropertyType;
}

export interface OntologyIrType_float {
  type: "float";
  float: FloatPropertyType;
}

export interface OntologyIrType_geohash {
  type: "geohash";
  geohash: GeohashPropertyType;
}

export interface OntologyIrType_geoshape {
  type: "geoshape";
  geoshape: GeoshapePropertyType;
}

export interface OntologyIrType_integer {
  type: "integer";
  integer: IntegerPropertyType;
}

export interface OntologyIrType_long {
  type: "long";
  long: LongPropertyType;
}

export interface OntologyIrType_short {
  type: "short";
  short: ShortPropertyType;
}

export interface OntologyIrType_string {
  type: "string";
  string: StringPropertyType;
}

export interface OntologyIrType_experimentalTimeDependentV1 {
  type: "experimentalTimeDependentV1";
  experimentalTimeDependentV1: ExperimentalTimeDependentPropertyTypeV1;
}

export interface OntologyIrType_timestamp {
  type: "timestamp";
  timestamp: TimestampPropertyType;
}

export interface OntologyIrType_attachment {
  type: "attachment";
  attachment: AttachmentPropertyType;
}

export interface OntologyIrType_marking {
  type: "marking";
  marking: MarkingPropertyType;
}

export interface OntologyIrType_cipherText {
  type: "cipherText";
  cipherText: OntologyIrCipherTextPropertyType;
}

export interface OntologyIrType_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferencePropertyType;
}

export interface OntologyIrType_vector {
  type: "vector";
  vector: VectorPropertyType;
}

export interface OntologyIrType_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferencePropertyType;
}

export interface OntologyIrType_struct {
  type: "struct";
  struct: OntologyIrStructPropertyType;
}
/**
 * Wrapper type for the various supported property types.
 *
 * Note: this type also encodes information on how to store the property. Use `DataType` if only the raw type
 * information matters (e.g. this format condition input must be a string).
 */
export type OntologyIrType =
  | OntologyIrType_array
  | OntologyIrType_boolean
  | OntologyIrType_byte
  | OntologyIrType_date
  | OntologyIrType_decimal
  | OntologyIrType_double
  | OntologyIrType_float
  | OntologyIrType_geohash
  | OntologyIrType_geoshape
  | OntologyIrType_integer
  | OntologyIrType_long
  | OntologyIrType_short
  | OntologyIrType_string
  | OntologyIrType_experimentalTimeDependentV1
  | OntologyIrType_timestamp
  | OntologyIrType_attachment
  | OntologyIrType_marking
  | OntologyIrType_cipherText
  | OntologyIrType_mediaReference
  | OntologyIrType_vector
  | OntologyIrType_geotimeSeriesReference
  | OntologyIrType_struct;
