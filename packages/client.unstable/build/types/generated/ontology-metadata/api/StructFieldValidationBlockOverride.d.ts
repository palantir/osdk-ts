import type { AllowedStructFieldValuesOverride } from "./AllowedStructFieldValuesOverride.js";
import type { ParameterRequiredOverride } from "./ParameterRequiredOverride.js";
import type { StructFieldPrefillOverride } from "./StructFieldPrefillOverride.js";
import type { VisibilityOverride } from "./VisibilityOverride.js";
export interface StructFieldValidationBlockOverride_parameterRequired {
	type: "parameterRequired";
	parameterRequired: ParameterRequiredOverride;
}
export interface StructFieldValidationBlockOverride_visibility {
	type: "visibility";
	visibility: VisibilityOverride;
}
export interface StructFieldValidationBlockOverride_allowedValues {
	type: "allowedValues";
	allowedValues: AllowedStructFieldValuesOverride;
}
export interface StructFieldValidationBlockOverride_prefill {
	type: "prefill";
	prefill: StructFieldPrefillOverride;
}
export type StructFieldValidationBlockOverride = StructFieldValidationBlockOverride_parameterRequired | StructFieldValidationBlockOverride_visibility | StructFieldValidationBlockOverride_allowedValues | StructFieldValidationBlockOverride_prefill;
