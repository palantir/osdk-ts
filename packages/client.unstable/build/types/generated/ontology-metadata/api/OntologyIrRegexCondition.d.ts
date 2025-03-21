import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { OntologyIrConditionValue } from "./OntologyIrConditionValue.js";
export interface OntologyIrRegexCondition {
	value: OntologyIrConditionValue;
	regex: string;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
