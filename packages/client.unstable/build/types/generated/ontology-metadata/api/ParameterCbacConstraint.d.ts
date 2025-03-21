import type { ConditionValue } from "./ConditionValue.js";
/**
* Contains a non-empty MarkingList Value that represent the max classification of this parameter.
* It must be present and must contain a valid set of cbac markings.
*/
export interface ParameterCbacConstraint {
	markingsValue: ConditionValue | undefined;
}
