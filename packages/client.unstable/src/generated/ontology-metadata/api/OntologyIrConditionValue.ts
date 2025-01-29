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
import type { OntologyIrStaticValue } from "./OntologyIrStaticValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { ParameterLength } from "./ParameterLength.js";
import type { UserProperty } from "./UserProperty.js";
export interface OntologyIrConditionValue_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}

export interface OntologyIrConditionValue_staticValue {
  type: "staticValue";
  staticValue: OntologyIrStaticValue;
}

export interface OntologyIrConditionValue_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface OntologyIrConditionValue_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: OntologyIrInterfaceParameterPropertyValue;
}

export interface OntologyIrConditionValue_userProperty {
  type: "userProperty";
  userProperty: UserProperty;
}

export interface OntologyIrConditionValue_parameterLength {
  type: "parameterLength";
  parameterLength: ParameterLength;
}
export type OntologyIrConditionValue =
  | OntologyIrConditionValue_parameterId
  | OntologyIrConditionValue_staticValue
  | OntologyIrConditionValue_objectParameterPropertyValue
  | OntologyIrConditionValue_interfaceParameterPropertyValue
  | OntologyIrConditionValue_userProperty
  | OntologyIrConditionValue_parameterLength;
