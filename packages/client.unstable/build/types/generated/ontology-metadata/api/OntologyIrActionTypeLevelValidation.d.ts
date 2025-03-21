import type { OntologyIrValidationRule } from "./OntologyIrValidationRule.js";
import type { ValidationRuleRid } from "./ValidationRuleRid.js";
export interface OntologyIrActionTypeLevelValidation {
	rules: Record<ValidationRuleRid, OntologyIrValidationRule>;
	ordering: Array<ValidationRuleRid>;
}
