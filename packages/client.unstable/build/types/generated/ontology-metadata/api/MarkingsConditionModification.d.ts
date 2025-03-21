import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { ConditionValueModification } from "./ConditionValueModification.js";
import type { MarkingFilter } from "./MarkingFilter.js";
/**
* True if the user satisfies the markings represented by the value field.
* This follows com.palantir.gps.api.policy.MarkingsCondition
*/
export interface MarkingsConditionModification {
	value: ConditionValueModification;
	filters: MarkingFilter;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
