import type { Condition } from "./Condition.js";
import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
export interface AndCondition {
	conditions: Array<Condition>;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
