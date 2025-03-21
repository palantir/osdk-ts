import type { ReferenceObjectSet } from "./ReferenceObjectSet.js";
export interface SelectExpression_singleObjectSet {
	type: "singleObjectSet";
	singleObjectSet: ReferenceObjectSet;
}
/**
* The output of the Joined Object Set. For example, in case of Object Type Join Conditions, which side (`left` or `right`) is the selected side. Will always reference an Object Set in the Join Condition.
*/
export type SelectExpression = SelectExpression_singleObjectSet;
