import type { ConditionValueModification } from "./ConditionValueModification.js";
import type { DynamicObjectSet } from "./DynamicObjectSet.js";
import type { ConditionValueId } from "./types/ConditionValueId.js";
/**
* A wrapper for DynamicObjectSet that includes a ConditionValueMap
*/
export interface ActionsObjectSetModification {
	objectSet: DynamicObjectSet;
	conditionValues: Record<ConditionValueId, ConditionValueModification>;
}
