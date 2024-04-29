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

import type { OneOfStringTypeConstraint } from "./OneOfStringTypeConstraint.js";
import type { RegexConstraint } from "./RegexConstraint.js";
import type { StringTypeIsRidConstraint } from "./StringTypeIsRidConstraint.js";
import type { StringTypeIsUuidConstraint } from "./StringTypeIsUuidConstraint.js";
import type { StringTypeLengthConstraint } from "./StringTypeLengthConstraint.js";
export interface StringTypeDataConstraints_regex {
  type: "regex";
  regex: RegexConstraint;
}

export interface StringTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfStringTypeConstraint;
}

export interface StringTypeDataConstraints_length {
  type: "length";
  length: StringTypeLengthConstraint;
}

export interface StringTypeDataConstraints_isUuid {
  type: "isUuid";
  isUuid: StringTypeIsUuidConstraint;
}

export interface StringTypeDataConstraints_isRid {
  type: "isRid";
  isRid: StringTypeIsRidConstraint;
}
export type StringTypeDataConstraints =
  | StringTypeDataConstraints_regex
  | StringTypeDataConstraints_oneOf
  | StringTypeDataConstraints_length
  | StringTypeDataConstraints_isUuid
  | StringTypeDataConstraints_isRid;
