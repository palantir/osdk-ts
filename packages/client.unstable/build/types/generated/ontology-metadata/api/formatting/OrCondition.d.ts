import type { Condition } from "./Condition.js";
/**
* True if at least one condition is true.
*/
export interface OrCondition {
	conditions: Array<Condition>;
}
