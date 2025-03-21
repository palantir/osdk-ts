import type { ConditionModification } from "./ConditionModification.js";
import type { StructFieldValidationBlockOverrideModification } from "./StructFieldValidationBlockOverrideModification.js";
export interface StructFieldConditionalOverrideModification {
	condition: ConditionModification;
	structFieldBlockOverrides: Array<StructFieldValidationBlockOverrideModification>;
}
