import type { OntologyIrCondition } from "./OntologyIrCondition.js";
import type { ValidationRuleDisplayMetadata } from "./ValidationRuleDisplayMetadata.js";
export interface OntologyIrValidationRule {
	displayMetadata: ValidationRuleDisplayMetadata;
	condition: OntologyIrCondition;
}
