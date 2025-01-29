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

import type { OntologyIrParameterDateTimeRangeOrEmpty } from "./OntologyIrParameterDateTimeRangeOrEmpty.js";
import type { OntologyIrParameterRangeOrEmpty } from "./OntologyIrParameterRangeOrEmpty.js";
import type { OntologyIrParameterValueOneOfOrEmpty } from "./OntologyIrParameterValueOneOfOrEmpty.js";
import type { ParameterBooleanOrEmpty } from "./ParameterBooleanOrEmpty.js";
import type { ParameterFreeTextOrEmpty } from "./ParameterFreeTextOrEmpty.js";
import type { ParameterGeohashOrEmpty } from "./ParameterGeohashOrEmpty.js";
export interface OntologyIrAllowedStructFieldValues_oneOf {
  type: "oneOf";
  oneOf: OntologyIrParameterValueOneOfOrEmpty;
}

export interface OntologyIrAllowedStructFieldValues_range {
  type: "range";
  range: OntologyIrParameterRangeOrEmpty;
}

export interface OntologyIrAllowedStructFieldValues_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface OntologyIrAllowedStructFieldValues_datetime {
  type: "datetime";
  datetime: OntologyIrParameterDateTimeRangeOrEmpty;
}

export interface OntologyIrAllowedStructFieldValues_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface OntologyIrAllowedStructFieldValues_geohash {
  type: "geohash";
  geohash: ParameterGeohashOrEmpty;
}
export type OntologyIrAllowedStructFieldValues =
  | OntologyIrAllowedStructFieldValues_oneOf
  | OntologyIrAllowedStructFieldValues_range
  | OntologyIrAllowedStructFieldValues_text
  | OntologyIrAllowedStructFieldValues_datetime
  | OntologyIrAllowedStructFieldValues_boolean
  | OntologyIrAllowedStructFieldValues_geohash;
