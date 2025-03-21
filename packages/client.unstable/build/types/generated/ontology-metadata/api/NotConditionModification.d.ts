import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { ConditionModification } from "./ConditionModification.js";
export interface NotConditionModification {
	condition: ConditionModification;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
