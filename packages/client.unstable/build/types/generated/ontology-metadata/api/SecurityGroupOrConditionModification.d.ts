import type { SecurityGroupGranularConditionModification } from "./SecurityGroupGranularConditionModification.js";
export interface SecurityGroupOrConditionModification {
	conditions: Array<SecurityGroupGranularConditionModification>;
}
