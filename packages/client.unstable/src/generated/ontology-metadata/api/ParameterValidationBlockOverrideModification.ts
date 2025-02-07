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

import type { AllowedValuesOverrideModification } from "./AllowedValuesOverrideModification.js";
import type { ParameterPrefillOverrideModification } from "./ParameterPrefillOverrideModification.js";
import type { ParameterRequiredOverride } from "./ParameterRequiredOverride.js";
import type { VisibilityOverride } from "./VisibilityOverride.js";
export interface ParameterValidationBlockOverrideModification_parameterRequired {
  type: "parameterRequired";
  parameterRequired: ParameterRequiredOverride;
}

export interface ParameterValidationBlockOverrideModification_visibility {
  type: "visibility";
  visibility: VisibilityOverride;
}

export interface ParameterValidationBlockOverrideModification_allowedValues {
  type: "allowedValues";
  allowedValues: AllowedValuesOverrideModification;
}

export interface ParameterValidationBlockOverrideModification_prefill {
  type: "prefill";
  prefill: ParameterPrefillOverrideModification;
}
export type ParameterValidationBlockOverrideModification =
  | ParameterValidationBlockOverrideModification_parameterRequired
  | ParameterValidationBlockOverrideModification_visibility
  | ParameterValidationBlockOverrideModification_allowedValues
  | ParameterValidationBlockOverrideModification_prefill;
