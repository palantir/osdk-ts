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
export type ParameterValidationBlockOverrideModification = ParameterValidationBlockOverrideModification_parameterRequired | ParameterValidationBlockOverrideModification_visibility | ParameterValidationBlockOverrideModification_allowedValues | ParameterValidationBlockOverrideModification_prefill;
