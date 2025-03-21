import type { SecurityGroupAndCondition } from "./SecurityGroupAndCondition.js";
import type { SecurityGroupComparisonCondition } from "./SecurityGroupComparisonCondition.js";
import type { SecurityGroupMarkingsCondition } from "./SecurityGroupMarkingsCondition.js";
import type { SecurityGroupNotCondition } from "./SecurityGroupNotCondition.js";
import type { SecurityGroupOrCondition } from "./SecurityGroupOrCondition.js";
import type { SecurityGroupTrueCondition } from "./SecurityGroupTrueCondition.js";
export interface SecurityGroupGranularCondition_not {
	type: "not";
	not: SecurityGroupNotCondition;
}
export interface SecurityGroupGranularCondition_true {
	type: "true";
	true: SecurityGroupTrueCondition;
}
export interface SecurityGroupGranularCondition_and {
	type: "and";
	and: SecurityGroupAndCondition;
}
export interface SecurityGroupGranularCondition_or {
	type: "or";
	or: SecurityGroupOrCondition;
}
export interface SecurityGroupGranularCondition_markings {
	type: "markings";
	markings: SecurityGroupMarkingsCondition;
}
export interface SecurityGroupGranularCondition_comparison {
	type: "comparison";
	comparison: SecurityGroupComparisonCondition;
}
/**
* This definition is a subset of the full GPS policy definition language. It contains minimal supported conditions.
* Note that more conditions can and will be added in the future, as the need arises.
*/
export type SecurityGroupGranularCondition = SecurityGroupGranularCondition_not | SecurityGroupGranularCondition_true | SecurityGroupGranularCondition_and | SecurityGroupGranularCondition_or | SecurityGroupGranularCondition_markings | SecurityGroupGranularCondition_comparison;
