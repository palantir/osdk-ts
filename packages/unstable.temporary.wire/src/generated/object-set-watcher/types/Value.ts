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

import type { Attachment } from "./Attachment.js";
import type { Byte } from "./Byte.js";
import type { Ciphertext } from "./Ciphertext.js";
import type { Date } from "./Date.js";
import type { Decimal } from "./Decimal.js";
import type { Float } from "./Float.js";
import type { Geohash } from "./Geohash.js";
import type { Geoshape } from "./Geoshape.js";
import type { GeotimeSeriesReference } from "./GeotimeSeriesReference.js";
import type { Long } from "./Long.js";
import type { Marking } from "./Marking.js";
import type { MediaReference } from "./MediaReference.js";
import type { Null } from "./Null.js";
import type { Short } from "./Short.js";
import type { Timestamp } from "./Timestamp.js";
import type { Vector } from "./Vector.js";
export interface Value_array {
  type: "array";
  array: Array<Value>;
}

export interface Value_attachment {
  type: "attachment";
  attachment: Attachment;
}

export interface Value_null {
  type: "null";
  null: Null;
}

export interface Value_binary {
  type: "binary";
  binary: Blob;
}

export interface Value_boolean {
  type: "boolean";
  boolean: boolean;
}

export interface Value_byte {
  type: "byte";
  byte: Byte;
}

export interface Value_ciphertext {
  type: "ciphertext";
  ciphertext: Ciphertext;
}

export interface Value_date {
  type: "date";
  date: Date;
}

export interface Value_decimal {
  type: "decimal";
  decimal: Decimal;
}

export interface Value_double {
  type: "double";
  double: string;
}

export interface Value_float {
  type: "float";
  float: Float;
}

export interface Value_geohash {
  type: "geohash";
  geohash: Geohash;
}

export interface Value_geoshape {
  type: "geoshape";
  geoshape: Geoshape;
}

export interface Value_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReference;
}

export interface Value_integer {
  type: "integer";
  integer: string;
}

export interface Value_long {
  type: "long";
  long: Long;
}

export interface Value_marking {
  type: "marking";
  marking: Marking;
}

export interface Value_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReference;
}

export interface Value_short {
  type: "short";
  short: Short;
}

export interface Value_string {
  type: "string";
  string: string;
}

export interface Value_timestamp {
  type: "timestamp";
  timestamp: Timestamp;
}

export interface Value_vector {
  type: "vector";
  vector: Vector;
}
export type Value =
  | Value_array
  | Value_attachment
  | Value_null
  | Value_binary
  | Value_boolean
  | Value_byte
  | Value_ciphertext
  | Value_date
  | Value_decimal
  | Value_double
  | Value_float
  | Value_geohash
  | Value_geoshape
  | Value_geotimeSeriesReference
  | Value_integer
  | Value_long
  | Value_marking
  | Value_mediaReference
  | Value_short
  | Value_string
  | Value_timestamp
  | Value_vector;
