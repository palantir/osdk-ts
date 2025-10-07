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
import type { ActionParameterConditionalOverride } from "./ActionParameterConditionalOverride.js";
import type { ActionParameterType } from "./ActionParameterType.js";

export interface ActionParameterConfiguration {
  allowedValues?: ActionParameterAllowedValues;
  required?: ActionParameterRequirementConstraint;
  defaultVisibility?: "editable" | "disabled" | "hidden";
  conditionalOverrides?: Array<ActionParameterConditionalOverride>;
  defaultValue?: OntologyIrParameterPrefill;
  displayName?: string;
  description?: string;
  // should only be used on non-property parameters
  customParameterType?: ActionParameterType;
}

export type ActionParameterRequirementConstraint =
  | boolean
  | { listLength: { min?: number; max?: number } };
