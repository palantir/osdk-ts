import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { ConditionValueModification } from "./ConditionValueModification.js";
export interface RegexConditionModification {
	value: ConditionValueModification;
	regex: string;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
