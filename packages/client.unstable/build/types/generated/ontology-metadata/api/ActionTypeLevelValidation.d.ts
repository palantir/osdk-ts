import type { ValidationRule } from "./ValidationRule.js";
import type { ValidationRuleRid } from "./ValidationRuleRid.js";
export interface ActionTypeLevelValidation {
	rules: Record<ValidationRuleRid, ValidationRule>;
	ordering: Array<ValidationRuleRid>;
}
