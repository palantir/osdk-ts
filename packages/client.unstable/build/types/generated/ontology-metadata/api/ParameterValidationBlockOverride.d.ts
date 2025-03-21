import type { AllowedValuesOverride } from "./AllowedValuesOverride.js";
import type { ParameterPrefillOverride } from "./ParameterPrefillOverride.js";
import type { ParameterRequiredOverride } from "./ParameterRequiredOverride.js";
import type { VisibilityOverride } from "./VisibilityOverride.js";
export interface ParameterValidationBlockOverride_parameterRequired {
	type: "parameterRequired";
	parameterRequired: ParameterRequiredOverride;
}
export interface ParameterValidationBlockOverride_visibility {
	type: "visibility";
	visibility: VisibilityOverride;
}
export interface ParameterValidationBlockOverride_allowedValues {
	type: "allowedValues";
	allowedValues: AllowedValuesOverride;
}
export interface ParameterValidationBlockOverride_prefill {
	type: "prefill";
	prefill: ParameterPrefillOverride;
}
export type ParameterValidationBlockOverride = ParameterValidationBlockOverride_parameterRequired | ParameterValidationBlockOverride_visibility | ParameterValidationBlockOverride_allowedValues | ParameterValidationBlockOverride_prefill;
