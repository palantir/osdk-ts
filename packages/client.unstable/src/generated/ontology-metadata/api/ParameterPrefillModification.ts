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

import type { InterfaceParameterPropertyValueModification } from "./InterfaceParameterPropertyValueModification.js";
import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.js";
import type { ObjectQueryPrefillModification } from "./ObjectQueryPrefillModification.js";
import type { ObjectQueryPropertyValueModification } from "./ObjectQueryPropertyValueModification.js";
import type { ObjectSetRidPrefillModification } from "./ObjectSetRidPrefillModification.js";
import type { Redacted } from "./Redacted.js";
import type { StaticObjectPrefill } from "./StaticObjectPrefill.js";
import type { StaticValue } from "./StaticValue.js";
export interface ParameterPrefillModification_staticValue {
  type: "staticValue";
  staticValue: StaticValue;
}

export interface ParameterPrefillModification_staticObject {
  type: "staticObject";
  staticObject: StaticObjectPrefill;
}

export interface ParameterPrefillModification_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ParameterPrefillModification_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: InterfaceParameterPropertyValueModification;
}

export interface ParameterPrefillModification_objectQueryPrefill {
  type: "objectQueryPrefill";
  objectQueryPrefill: ObjectQueryPrefillModification;
}

export interface ParameterPrefillModification_objectQueryPropertyValue {
  type: "objectQueryPropertyValue";
  objectQueryPropertyValue: ObjectQueryPropertyValueModification;
}

export interface ParameterPrefillModification_objectSetRidPrefill {
  type: "objectSetRidPrefill";
  objectSetRidPrefill: ObjectSetRidPrefillModification;
}

export interface ParameterPrefillModification_redacted {
  type: "redacted";
  redacted: Redacted;
}
/**
 * ParameterPrefillModification specifies what should initially suggested to users for this Parameter.
 */
export type ParameterPrefillModification =
  | ParameterPrefillModification_staticValue
  | ParameterPrefillModification_staticObject
  | ParameterPrefillModification_objectParameterPropertyValue
  | ParameterPrefillModification_interfaceParameterPropertyValue
  | ParameterPrefillModification_objectQueryPrefill
  | ParameterPrefillModification_objectQueryPropertyValue
  | ParameterPrefillModification_objectSetRidPrefill
  | ParameterPrefillModification_redacted;
