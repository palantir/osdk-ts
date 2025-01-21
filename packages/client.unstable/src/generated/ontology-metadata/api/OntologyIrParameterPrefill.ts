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

import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.js";
import type { OntologyIrInterfaceParameterPropertyValue } from "./OntologyIrInterfaceParameterPropertyValue.js";
import type { OntologyIrObjectQueryPrefill } from "./OntologyIrObjectQueryPrefill.js";
import type { OntologyIrObjectQueryPropertyValue } from "./OntologyIrObjectQueryPropertyValue.js";
import type { OntologyIrObjectSetRidPrefill } from "./OntologyIrObjectSetRidPrefill.js";
import type { OntologyIrStaticValue } from "./OntologyIrStaticValue.js";
import type { Redacted } from "./Redacted.js";
import type { StaticObjectPrefill } from "./StaticObjectPrefill.js";
export interface OntologyIrParameterPrefill_staticValue {
  type: "staticValue";
  staticValue: OntologyIrStaticValue;
}

export interface OntologyIrParameterPrefill_staticObject {
  type: "staticObject";
  staticObject: StaticObjectPrefill;
}

export interface OntologyIrParameterPrefill_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface OntologyIrParameterPrefill_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: OntologyIrInterfaceParameterPropertyValue;
}

export interface OntologyIrParameterPrefill_objectQueryPrefill {
  type: "objectQueryPrefill";
  objectQueryPrefill: OntologyIrObjectQueryPrefill;
}

export interface OntologyIrParameterPrefill_objectQueryPropertyValue {
  type: "objectQueryPropertyValue";
  objectQueryPropertyValue: OntologyIrObjectQueryPropertyValue;
}

export interface OntologyIrParameterPrefill_objectSetRidPrefill {
  type: "objectSetRidPrefill";
  objectSetRidPrefill: OntologyIrObjectSetRidPrefill;
}

export interface OntologyIrParameterPrefill_redacted {
  type: "redacted";
  redacted: Redacted;
}
/**
 * ParameterPrefill specifies what should initially suggested to users for this Parameter.
 */
export type OntologyIrParameterPrefill =
  | OntologyIrParameterPrefill_staticValue
  | OntologyIrParameterPrefill_staticObject
  | OntologyIrParameterPrefill_objectParameterPropertyValue
  | OntologyIrParameterPrefill_interfaceParameterPropertyValue
  | OntologyIrParameterPrefill_objectQueryPrefill
  | OntologyIrParameterPrefill_objectQueryPropertyValue
  | OntologyIrParameterPrefill_objectSetRidPrefill
  | OntologyIrParameterPrefill_redacted;
