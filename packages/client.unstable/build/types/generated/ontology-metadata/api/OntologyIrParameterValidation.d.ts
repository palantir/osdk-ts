import type { OntologyIrAllowedParameterValues } from "./OntologyIrAllowedParameterValues.js";
import type { ParameterRequiredConfiguration } from "./types/ParameterRequiredConfiguration.js";
export interface OntologyIrParameterValidation {
	required: ParameterRequiredConfiguration;
	allowedValues: OntologyIrAllowedParameterValues;
}
