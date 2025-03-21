import type { ParameterValidation } from "./ParameterValidation.js";
import type { ParameterValidationDisplayMetadata } from "./ParameterValidationDisplayMetadata.js";
export interface ParameterValidationBlock {
	display: ParameterValidationDisplayMetadata;
	validation: ParameterValidation;
}
