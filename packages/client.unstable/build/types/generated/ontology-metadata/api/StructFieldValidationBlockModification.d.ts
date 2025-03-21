import type { StructFieldValidationDisplayMetadataModification } from "./StructFieldValidationDisplayMetadataModification.js";
import type { StructFieldValidationModification } from "./StructFieldValidationModification.js";
export interface StructFieldValidationBlockModification {
	display: StructFieldValidationDisplayMetadataModification;
	validation: StructFieldValidationModification;
}
