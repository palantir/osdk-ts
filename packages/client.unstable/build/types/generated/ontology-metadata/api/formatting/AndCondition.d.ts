import type { Condition } from "./Condition.js";
/**
* True if all conditions are true.
*/
export interface AndCondition {
	conditions: Array<Condition>;
}
