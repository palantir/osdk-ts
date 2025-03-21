import type { SecurityGroupAndConditionModification } from "./SecurityGroupAndConditionModification.js";
import type { SecurityGroupComparisonConditionModification } from "./SecurityGroupComparisonConditionModification.js";
import type { SecurityGroupMarkingsConditionModification } from "./SecurityGroupMarkingsConditionModification.js";
import type { SecurityGroupNotConditionModification } from "./SecurityGroupNotConditionModification.js";
import type { SecurityGroupOrConditionModification } from "./SecurityGroupOrConditionModification.js";
import type { SecurityGroupTrueConditionModification } from "./SecurityGroupTrueConditionModification.js";
export interface SecurityGroupGranularConditionModification_not {
	type: "not";
	not: SecurityGroupNotConditionModification;
}
export interface SecurityGroupGranularConditionModification_true {
	type: "true";
	true: SecurityGroupTrueConditionModification;
}
export interface SecurityGroupGranularConditionModification_and {
	type: "and";
	and: SecurityGroupAndConditionModification;
}
export interface SecurityGroupGranularConditionModification_or {
	type: "or";
	or: SecurityGroupOrConditionModification;
}
export interface SecurityGroupGranularConditionModification_markings {
	type: "markings";
	markings: SecurityGroupMarkingsConditionModification;
}
export interface SecurityGroupGranularConditionModification_comparison {
	type: "comparison";
	comparison: SecurityGroupComparisonConditionModification;
}
export type SecurityGroupGranularConditionModification = SecurityGroupGranularConditionModification_not | SecurityGroupGranularConditionModification_true | SecurityGroupGranularConditionModification_and | SecurityGroupGranularConditionModification_or | SecurityGroupGranularConditionModification_markings | SecurityGroupGranularConditionModification_comparison;
