import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { OntologyIrCondition } from "./OntologyIrCondition.js";
export interface OntologyIrNotCondition {
	condition: OntologyIrCondition;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
