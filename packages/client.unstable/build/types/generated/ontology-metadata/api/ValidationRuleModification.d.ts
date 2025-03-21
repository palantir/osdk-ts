import type { Condition } from "./Condition.js";
import type { ValidationRuleDisplayMetadata } from "./ValidationRuleDisplayMetadata.js";
export interface ValidationRuleModification {
	displayMetadata: ValidationRuleDisplayMetadata;
	condition: Condition;
}
