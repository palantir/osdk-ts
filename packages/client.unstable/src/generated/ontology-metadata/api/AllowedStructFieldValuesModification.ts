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
import type { ParameterDateTimeRangeOrEmptyModification } from "./ParameterDateTimeRangeOrEmptyModification.js";
import type { ParameterFreeTextOrEmpty } from "./ParameterFreeTextOrEmpty.js";
import type { ParameterGeohashOrEmpty } from "./ParameterGeohashOrEmpty.js";
import type { ParameterRangeOrEmptyModification } from "./ParameterRangeOrEmptyModification.js";
import type { ParameterValueOneOfOrEmpty } from "./ParameterValueOneOfOrEmpty.js";
export interface AllowedStructFieldValuesModification_oneOf {
  type: "oneOf";
  oneOf: ParameterValueOneOfOrEmpty;
}

export interface AllowedStructFieldValuesModification_range {
  type: "range";
  range: ParameterRangeOrEmptyModification;
}

export interface AllowedStructFieldValuesModification_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface AllowedStructFieldValuesModification_datetime {
  type: "datetime";
  datetime: ParameterDateTimeRangeOrEmptyModification;
}

export interface AllowedStructFieldValuesModification_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface AllowedStructFieldValuesModification_geohash {
  type: "geohash";
  geohash: ParameterGeohashOrEmpty;
}
export type AllowedStructFieldValuesModification =
  | AllowedStructFieldValuesModification_oneOf
  | AllowedStructFieldValuesModification_range
  | AllowedStructFieldValuesModification_text
  | AllowedStructFieldValuesModification_datetime
  | AllowedStructFieldValuesModification_boolean
  | AllowedStructFieldValuesModification_geohash;
