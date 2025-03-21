import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { ConditionValue } from "./ConditionValue.js";
export interface RegexCondition {
	value: ConditionValue;
	regex: string;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
