import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { MarkingFilter } from "./MarkingFilter.js";
import type { OntologyIrConditionValue } from "./OntologyIrConditionValue.js";
/**
* True if the user satisfies the markings represented by the value field.
* This follows com.palantir.gps.api.policy.MarkingsCondition
*/
export interface OntologyIrMarkingsCondition {
	value: OntologyIrConditionValue;
	filters: MarkingFilter;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
