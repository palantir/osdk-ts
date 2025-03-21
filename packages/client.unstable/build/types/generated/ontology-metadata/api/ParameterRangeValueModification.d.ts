import type { ConditionValueModification } from "./ConditionValueModification.js";
export interface ParameterRangeValueModification {
	value: ConditionValueModification;
	inclusive: boolean;
}
