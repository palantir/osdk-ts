import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { ConditionModification } from "./ConditionModification.js";
export interface AndConditionModification {
	conditions: Array<ConditionModification>;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
