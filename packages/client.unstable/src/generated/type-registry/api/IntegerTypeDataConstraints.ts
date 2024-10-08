/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { IntegerTypeRangeConstraint } from "./IntegerTypeRangeConstraint.js";
import type { OneOfIntegerTypeConstraint } from "./OneOfIntegerTypeConstraint.js";
export interface IntegerTypeDataConstraints_range {
  type: "range";
  range: IntegerTypeRangeConstraint;
}

export interface IntegerTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfIntegerTypeConstraint;
}
export type IntegerTypeDataConstraints =
  | IntegerTypeDataConstraints_range
  | IntegerTypeDataConstraints_oneOf;
