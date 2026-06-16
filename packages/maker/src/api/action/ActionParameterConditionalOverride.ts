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

import type { OntologyIrParameterPrefill } from "@osdk/client.unstable";
import type { ActionParameterAllowedValues } from "./ActionParameterAllowedValues.js";
import type { ConditionDefinition } from "./ConditionDefinition.js";

export type ActionParameterConditionalOverride =
  | VisibilityOverride
  | DisabledOverride
  | RequiredOverride
  | DefaultValueOverride
  | ConstraintOverride;

export type VisibilityOverride = {
  type: "visibility";
  condition: ConditionDefinition;
  then?:
    | "editable"
    | "disabled"
    | "hidden";
};

export type DisabledOverride = {
  type: "disabled";
  condition: ConditionDefinition;
  then?:
    | "editable"
    | "disabled"
    | "hidden";
};

export type RequiredOverride = {
  type: "required";
  condition: ConditionDefinition;
};

export type DefaultValueOverride = {
  type: "defaultValue";
  condition: ConditionDefinition;
  defaultValue: OntologyIrParameterPrefill;
};

export type ConstraintOverride = {
  type: "constraint";
  condition: ConditionDefinition;
  constraint: ActionParameterAllowedValues;
};
