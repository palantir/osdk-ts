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

import type { ActionLevelValidationDefinition } from "../action/ActionLevelValidationDefinition.js";
import type { ActionParameterAllowedValues } from "../action/ActionParameterAllowedValues.js";
import type {
  ActionParameterConditionalOverride,
} from "../action/ActionParameterConditionalOverride.js";
import type {
  ActionParameterRequirementConstraint,
} from "../action/ActionParameterConfiguration.js";
import type { ActionSection } from "../action/ActionSection.js";
import type { ConditionDefinition } from "../action/ConditionDefinition.js";

/**
 * Per-parameter validation surface for V2 actions. Mirrors v1's
 * `ActionParameterConfiguration` minus rendering hints and prefill
 * defaults (those are documented as power-user fields and can be added
 * later if needed).
 */
export interface ParameterValidationV2Config {
  allowedValues?: ActionParameterAllowedValues;
  required?: ActionParameterRequirementConstraint;
  defaultVisibility?: "editable" | "disabled" | "hidden";
  conditionalOverrides?: Array<ActionParameterConditionalOverride>;
}

/**
 * Action-level validation rules (cross-parameter constraints). Mirrors
 * v1's `ActionLevelValidationDefinition` shape directly.
 */
export type ActionLevelValidationV2Config = ActionLevelValidationDefinition;

/**
 * Form section configuration for grouping parameters. Mirrors v1's
 * `ActionSection` shape directly.
 */
export type SectionV2Config = ActionSection;

// Re-exports for ergonomics — users can import everything they need
// from one place.
export type {
  ActionParameterAllowedValues,
  ActionParameterConditionalOverride,
  ActionParameterRequirementConstraint,
  ConditionDefinition,
};
