import type { AllowedParameterValues } from "./AllowedParameterValues.js";
import type { ParameterRequiredConfiguration } from "./types/ParameterRequiredConfiguration.js";
export interface ParameterValidation {
	required: ParameterRequiredConfiguration;
	allowedValues: AllowedParameterValues;
}
