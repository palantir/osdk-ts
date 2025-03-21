import type { OntologyIrAllowedStructFieldValuesOverride } from "./OntologyIrAllowedStructFieldValuesOverride.js";
import type { OntologyIrStructFieldPrefillOverride } from "./OntologyIrStructFieldPrefillOverride.js";
import type { ParameterRequiredOverride } from "./ParameterRequiredOverride.js";
import type { VisibilityOverride } from "./VisibilityOverride.js";
export interface OntologyIrStructFieldValidationBlockOverride_parameterRequired {
	type: "parameterRequired";
	parameterRequired: ParameterRequiredOverride;
}
export interface OntologyIrStructFieldValidationBlockOverride_visibility {
	type: "visibility";
	visibility: VisibilityOverride;
}
export interface OntologyIrStructFieldValidationBlockOverride_allowedValues {
	type: "allowedValues";
	allowedValues: OntologyIrAllowedStructFieldValuesOverride;
}
export interface OntologyIrStructFieldValidationBlockOverride_prefill {
	type: "prefill";
	prefill: OntologyIrStructFieldPrefillOverride;
}
export type OntologyIrStructFieldValidationBlockOverride = OntologyIrStructFieldValidationBlockOverride_parameterRequired | OntologyIrStructFieldValidationBlockOverride_visibility | OntologyIrStructFieldValidationBlockOverride_allowedValues | OntologyIrStructFieldValidationBlockOverride_prefill;
