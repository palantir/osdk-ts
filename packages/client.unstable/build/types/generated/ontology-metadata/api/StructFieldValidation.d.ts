import type { AllowedStructFieldValues } from "./AllowedStructFieldValues.js";
import type { ParameterRequiredConfiguration } from "./types/ParameterRequiredConfiguration.js";
export interface StructFieldValidation {
	required: ParameterRequiredConfiguration;
	allowedValues: AllowedStructFieldValues;
}
