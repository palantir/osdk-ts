import type { Condition } from "./Condition.js";
import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
export interface NotCondition {
	condition: Condition;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
