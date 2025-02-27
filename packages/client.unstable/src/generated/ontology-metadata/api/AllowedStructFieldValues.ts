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

import type { ParameterBooleanOrEmpty } from "./ParameterBooleanOrEmpty.js";
import type { ParameterDateTimeRangeOrEmpty } from "./ParameterDateTimeRangeOrEmpty.js";
import type { ParameterFreeTextOrEmpty } from "./ParameterFreeTextOrEmpty.js";
import type { ParameterGeohashOrEmpty } from "./ParameterGeohashOrEmpty.js";
import type { ParameterRangeOrEmpty } from "./ParameterRangeOrEmpty.js";
import type { ParameterValueOneOfOrEmpty } from "./ParameterValueOneOfOrEmpty.js";
export interface AllowedStructFieldValues_oneOf {
  type: "oneOf";
  oneOf: ParameterValueOneOfOrEmpty;
}

export interface AllowedStructFieldValues_range {
  type: "range";
  range: ParameterRangeOrEmpty;
}

export interface AllowedStructFieldValues_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface AllowedStructFieldValues_datetime {
  type: "datetime";
  datetime: ParameterDateTimeRangeOrEmpty;
}

export interface AllowedStructFieldValues_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface AllowedStructFieldValues_geohash {
  type: "geohash";
  geohash: ParameterGeohashOrEmpty;
}
export type AllowedStructFieldValues =
  | AllowedStructFieldValues_oneOf
  | AllowedStructFieldValues_range
  | AllowedStructFieldValues_text
  | AllowedStructFieldValues_datetime
  | AllowedStructFieldValues_boolean
  | AllowedStructFieldValues_geohash;
