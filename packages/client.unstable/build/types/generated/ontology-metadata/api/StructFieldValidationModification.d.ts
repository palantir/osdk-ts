import type { AllowedStructFieldValuesModification } from "./AllowedStructFieldValuesModification.js";
import type { ParameterRequiredConfiguration } from "./types/ParameterRequiredConfiguration.js";
export interface StructFieldValidationModification {
	required: ParameterRequiredConfiguration;
	allowedValues: AllowedStructFieldValuesModification;
}
