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

import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { ParameterLength } from "./ParameterLength.js";
import type { StaticValue } from "./StaticValue.js";
import type { UserProperty } from "./UserProperty.js";
export interface ConditionValue_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}

export interface ConditionValue_staticValue {
  type: "staticValue";
  staticValue: StaticValue;
}

export interface ConditionValue_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ConditionValue_userProperty {
  type: "userProperty";
  userProperty: UserProperty;
}

export interface ConditionValue_parameterLength {
  type: "parameterLength";
  parameterLength: ParameterLength;
}
export type ConditionValue =
  | ConditionValue_parameterId
  | ConditionValue_staticValue
  | ConditionValue_objectParameterPropertyValue
  | ConditionValue_userProperty
  | ConditionValue_parameterLength;
