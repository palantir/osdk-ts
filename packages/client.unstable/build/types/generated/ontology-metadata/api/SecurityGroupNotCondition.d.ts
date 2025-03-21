import type { SecurityGroupGranularCondition } from "./SecurityGroupGranularCondition.js";
/**
* True if the condition is false. This condition cannot have an empty property type.
*/
export interface SecurityGroupNotCondition {
	condition: SecurityGroupGranularCondition;
}
