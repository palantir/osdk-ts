import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { OntologyIrCondition } from "./OntologyIrCondition.js";
export interface OntologyIrOrCondition {
	conditions: Array<OntologyIrCondition>;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
