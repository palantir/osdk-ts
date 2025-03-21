import type { Condition } from "./Condition.js";
import type { ValidationRuleDisplayMetadata } from "./ValidationRuleDisplayMetadata.js";
export interface ValidationRule {
	displayMetadata: ValidationRuleDisplayMetadata;
	condition: Condition;
}
