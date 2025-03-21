import type { StructFieldValidation } from "./StructFieldValidation.js";
import type { StructFieldValidationDisplayMetadata } from "./StructFieldValidationDisplayMetadata.js";
export interface StructFieldValidationBlock {
	display: StructFieldValidationDisplayMetadata;
	validation: StructFieldValidation;
}
