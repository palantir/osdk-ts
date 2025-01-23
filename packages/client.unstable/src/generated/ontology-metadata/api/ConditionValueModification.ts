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
import type { ParameterId } from "./ParameterId.js";
import type { ParameterLength } from "./ParameterLength.js";
import type { StaticValue } from "./StaticValue.js";
import type { UserProperty } from "./UserProperty.js";
export interface ConditionValueModification_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}

export interface ConditionValueModification_staticValue {
  type: "staticValue";
  staticValue: StaticValue;
}

export interface ConditionValueModification_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ConditionValueModification_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: InterfaceParameterPropertyValueModification;
}

export interface ConditionValueModification_userProperty {
  type: "userProperty";
  userProperty: UserProperty;
}

export interface ConditionValueModification_parameterLength {
  type: "parameterLength";
  parameterLength: ParameterLength;
}
export type ConditionValueModification =
  | ConditionValueModification_parameterId
  | ConditionValueModification_staticValue
  | ConditionValueModification_objectParameterPropertyValue
  | ConditionValueModification_interfaceParameterPropertyValue
  | ConditionValueModification_userProperty
  | ConditionValueModification_parameterLength;
