import type { StructFieldConditionalOverrideModification } from "./StructFieldConditionalOverrideModification.js";
import type { StructFieldValidationBlockModification } from "./StructFieldValidationBlockModification.js";
export interface StructFieldConditionalValidationBlockModification {
	conditionalOverrides: Array<StructFieldConditionalOverrideModification>;
	defaultValidation: StructFieldValidationBlockModification;
}
