import type { OntologyIrAllowedValuesOverride } from "./OntologyIrAllowedValuesOverride.js";
import type { OntologyIrParameterPrefillOverride } from "./OntologyIrParameterPrefillOverride.js";
import type { ParameterRequiredOverride } from "./ParameterRequiredOverride.js";
import type { VisibilityOverride } from "./VisibilityOverride.js";
export interface OntologyIrParameterValidationBlockOverride_parameterRequired {
	type: "parameterRequired";
	parameterRequired: ParameterRequiredOverride;
}
export interface OntologyIrParameterValidationBlockOverride_visibility {
	type: "visibility";
	visibility: VisibilityOverride;
}
export interface OntologyIrParameterValidationBlockOverride_allowedValues {
	type: "allowedValues";
	allowedValues: OntologyIrAllowedValuesOverride;
}
export interface OntologyIrParameterValidationBlockOverride_prefill {
	type: "prefill";
	prefill: OntologyIrParameterPrefillOverride;
}
export type OntologyIrParameterValidationBlockOverride = OntologyIrParameterValidationBlockOverride_parameterRequired | OntologyIrParameterValidationBlockOverride_visibility | OntologyIrParameterValidationBlockOverride_allowedValues | OntologyIrParameterValidationBlockOverride_prefill;
