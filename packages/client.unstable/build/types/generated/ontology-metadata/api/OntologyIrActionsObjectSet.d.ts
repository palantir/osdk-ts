import type { DynamicObjectSet } from "./DynamicObjectSet.js";
import type { OntologyIrConditionValue } from "./OntologyIrConditionValue.js";
import type { ConditionValueId } from "./types/ConditionValueId.js";
/**
* A wrapper for DynamicObjectSet that includes a ConditionValueMap
*/
export interface OntologyIrActionsObjectSet {
	objectSet: DynamicObjectSet;
	conditionValues: Record<ConditionValueId, OntologyIrConditionValue>;
}
