import type { Condition } from "./Condition.js";
import type { ValidationRuleDisplayMetadata } from "./ValidationRuleDisplayMetadata.js";
export interface EditValidationRuleRequest {
	displayMetadata: ValidationRuleDisplayMetadata;
	condition: Condition;
}
