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

import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.mjs";
import type { ObjectQueryPrefill } from "./ObjectQueryPrefill.mjs";
import type { ObjectQueryPropertyValue } from "./ObjectQueryPropertyValue.mjs";
import type { ObjectSetRidPrefill } from "./ObjectSetRidPrefill.mjs";
import type { Redacted } from "./Redacted.mjs";
import type { StaticObjectPrefill } from "./StaticObjectPrefill.mjs";
import type { StaticValue } from "./StaticValue.mjs";
export interface ParameterPrefill_staticValue {
  type: "staticValue";
  staticValue: StaticValue;
}

export interface ParameterPrefill_staticObject {
  type: "staticObject";
  staticObject: StaticObjectPrefill;
}

export interface ParameterPrefill_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ParameterPrefill_objectQueryPrefill {
  type: "objectQueryPrefill";
  objectQueryPrefill: ObjectQueryPrefill;
}

export interface ParameterPrefill_objectQueryPropertyValue {
  type: "objectQueryPropertyValue";
  objectQueryPropertyValue: ObjectQueryPropertyValue;
}

export interface ParameterPrefill_objectSetRidPrefill {
  type: "objectSetRidPrefill";
  objectSetRidPrefill: ObjectSetRidPrefill;
}

export interface ParameterPrefill_redacted {
  type: "redacted";
  redacted: Redacted;
}

export type ParameterPrefill =
  | ParameterPrefill_staticValue
  | ParameterPrefill_staticObject
  | ParameterPrefill_objectParameterPropertyValue
  | ParameterPrefill_objectQueryPrefill
  | ParameterPrefill_objectQueryPropertyValue
  | ParameterPrefill_objectSetRidPrefill
  | ParameterPrefill_redacted;
