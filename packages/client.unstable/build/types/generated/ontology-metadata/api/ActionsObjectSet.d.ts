import type { ConditionValue } from "./ConditionValue.js";
import type { DynamicObjectSet } from "./DynamicObjectSet.js";
import type { ConditionValueId } from "./types/ConditionValueId.js";
/**
* A wrapper for DynamicObjectSet that includes a ConditionValueMap
*/
export interface ActionsObjectSet {
	objectSet: DynamicObjectSet;
	conditionValues: Record<ConditionValueId, ConditionValue>;
}
