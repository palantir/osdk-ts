import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { ConditionValue } from "./ConditionValue.js";
import type { MarkingFilter } from "./MarkingFilter.js";
/**
* True if the user satisfies the markings represented by the value field.
* This follows com.palantir.gps.api.policy.MarkingsCondition
*/
export interface MarkingsCondition {
	value: ConditionValue;
	filters: MarkingFilter;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
