import type { OntologyIrAllowedStructFieldValues } from "./OntologyIrAllowedStructFieldValues.js";
import type { ParameterRequiredConfiguration } from "./types/ParameterRequiredConfiguration.js";
export interface OntologyIrStructFieldValidation {
	required: ParameterRequiredConfiguration;
	allowedValues: OntologyIrAllowedStructFieldValues;
}
