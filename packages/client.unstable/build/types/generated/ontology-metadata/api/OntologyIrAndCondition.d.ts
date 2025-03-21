import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { OntologyIrCondition } from "./OntologyIrCondition.js";
export interface OntologyIrAndCondition {
	conditions: Array<OntologyIrCondition>;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
