import type { OntologyIrSecurityGroupAndCondition } from "./OntologyIrSecurityGroupAndCondition.js";
import type { OntologyIrSecurityGroupComparisonCondition } from "./OntologyIrSecurityGroupComparisonCondition.js";
import type { OntologyIrSecurityGroupMarkingsCondition } from "./OntologyIrSecurityGroupMarkingsCondition.js";
import type { OntologyIrSecurityGroupNotCondition } from "./OntologyIrSecurityGroupNotCondition.js";
import type { OntologyIrSecurityGroupOrCondition } from "./OntologyIrSecurityGroupOrCondition.js";
import type { SecurityGroupTrueCondition } from "./SecurityGroupTrueCondition.js";
export interface OntologyIrSecurityGroupGranularCondition_not {
	type: "not";
	not: OntologyIrSecurityGroupNotCondition;
}
export interface OntologyIrSecurityGroupGranularCondition_true {
	type: "true";
	true: SecurityGroupTrueCondition;
}
export interface OntologyIrSecurityGroupGranularCondition_and {
	type: "and";
	and: OntologyIrSecurityGroupAndCondition;
}
export interface OntologyIrSecurityGroupGranularCondition_or {
	type: "or";
	or: OntologyIrSecurityGroupOrCondition;
}
export interface OntologyIrSecurityGroupGranularCondition_markings {
	type: "markings";
	markings: OntologyIrSecurityGroupMarkingsCondition;
}
export interface OntologyIrSecurityGroupGranularCondition_comparison {
	type: "comparison";
	comparison: OntologyIrSecurityGroupComparisonCondition;
}
/**
* This definition is a subset of the full GPS policy definition language. It contains minimal supported conditions.
* Note that more conditions can and will be added in the future, as the need arises.
*/
export type OntologyIrSecurityGroupGranularCondition = OntologyIrSecurityGroupGranularCondition_not | OntologyIrSecurityGroupGranularCondition_true | OntologyIrSecurityGroupGranularCondition_and | OntologyIrSecurityGroupGranularCondition_or | OntologyIrSecurityGroupGranularCondition_markings | OntologyIrSecurityGroupGranularCondition_comparison;
