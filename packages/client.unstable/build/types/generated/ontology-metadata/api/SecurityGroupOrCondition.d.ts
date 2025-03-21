import type { SecurityGroupGranularCondition } from "./SecurityGroupGranularCondition.js";
export interface SecurityGroupOrCondition {
	conditions: Array<SecurityGroupGranularCondition>;
}
