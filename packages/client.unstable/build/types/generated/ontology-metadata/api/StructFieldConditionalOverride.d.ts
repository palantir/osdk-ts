import type { Condition } from "./Condition.js";
import type { StructFieldValidationBlockOverride } from "./StructFieldValidationBlockOverride.js";
export interface StructFieldConditionalOverride {
	condition: Condition;
	structFieldBlockOverrides: Array<StructFieldValidationBlockOverride>;
}
