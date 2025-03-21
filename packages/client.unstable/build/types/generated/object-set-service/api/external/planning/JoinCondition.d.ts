import type { ManyToManyJoinCondition } from "./ManyToManyJoinCondition.js";
import type { ObjectTypeJoinCondition } from "./ObjectTypeJoinCondition.js";
export interface JoinCondition_objectType {
	type: "objectType";
	objectType: ObjectTypeJoinCondition;
}
export interface JoinCondition_manyToMany {
	type: "manyToMany";
	manyToMany: ManyToManyJoinCondition;
}
/**
* Specifies which Object Sets to join, and how they should be joined.
*/
export type JoinCondition = JoinCondition_objectType | JoinCondition_manyToMany;
