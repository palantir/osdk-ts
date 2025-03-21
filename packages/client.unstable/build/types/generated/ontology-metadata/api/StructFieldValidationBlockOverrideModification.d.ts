import type { AllowedStructFieldValuesOverrideModification } from "./AllowedStructFieldValuesOverrideModification.js";
import type { ParameterRequiredOverride } from "./ParameterRequiredOverride.js";
import type { StructFieldPrefillOverrideModification } from "./StructFieldPrefillOverrideModification.js";
import type { VisibilityOverride } from "./VisibilityOverride.js";
export interface StructFieldValidationBlockOverrideModification_parameterRequired {
	type: "parameterRequired";
	parameterRequired: ParameterRequiredOverride;
}
export interface StructFieldValidationBlockOverrideModification_visibility {
	type: "visibility";
	visibility: VisibilityOverride;
}
export interface StructFieldValidationBlockOverrideModification_allowedValues {
	type: "allowedValues";
	allowedValues: AllowedStructFieldValuesOverrideModification;
}
export interface StructFieldValidationBlockOverrideModification_prefill {
	type: "prefill";
	prefill: StructFieldPrefillOverrideModification;
}
export type StructFieldValidationBlockOverrideModification = StructFieldValidationBlockOverrideModification_parameterRequired | StructFieldValidationBlockOverrideModification_visibility | StructFieldValidationBlockOverrideModification_allowedValues | StructFieldValidationBlockOverrideModification_prefill;
