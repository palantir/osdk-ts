import type { ParameterValidationDisplayMetadataModification } from "./ParameterValidationDisplayMetadataModification.js";
import type { ParameterValidationModification } from "./ParameterValidationModification.js";
export interface ParameterValidationBlockModification {
	display: ParameterValidationDisplayMetadataModification;
	validation: ParameterValidationModification;
}
