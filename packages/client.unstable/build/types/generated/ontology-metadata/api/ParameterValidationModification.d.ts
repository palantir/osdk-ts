import type { AllowedParameterValuesModification } from "./AllowedParameterValuesModification.js";
import type { ParameterRequiredConfiguration } from "./types/ParameterRequiredConfiguration.js";
export interface ParameterValidationModification {
	required: ParameterRequiredConfiguration;
	allowedValues: AllowedParameterValuesModification;
}
