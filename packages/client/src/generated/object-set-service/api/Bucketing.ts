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

import type { DateBucketing } from "./DateBucketing.js";
import type { GeoHashBucketing } from "./GeoHashBucketing.js";
import type { NumericBucketing } from "./NumericBucketing.js";
import type { StringBucketing } from "./StringBucketing.js";
export interface Bucketing_exactValue {
  type: "exactValue";
  exactValue: StringBucketing;
}

export interface Bucketing_keywords {
  type: "keywords";
  keywords: StringBucketing;
}

export interface Bucketing_geoHash {
  type: "geoHash";
  geoHash: GeoHashBucketing;
}

export interface Bucketing_numeric {
  type: "numeric";
  numeric: NumericBucketing;
}

export interface Bucketing_date {
  type: "date";
  date: DateBucketing;
}

export type Bucketing =
  | Bucketing_exactValue
  | Bucketing_keywords
  | Bucketing_geoHash
  | Bucketing_numeric
  | Bucketing_date;
