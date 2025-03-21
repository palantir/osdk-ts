import type { FilteredObjectSet } from "./FilteredObjectSet.js";
import type { IntersectedObjectSet } from "./IntersectedObjectSet.js";
import type { JoinedObjectSet } from "./JoinedObjectSet.js";
import type { KnnObjectSet } from "./KnnObjectSet.js";
import type { KnnObjectSetV2 } from "./KnnObjectSetV2.js";
import type { ReferenceObjectSet } from "./ReferenceObjectSet.js";
import type { SubtractedObjectSet } from "./SubtractedObjectSet.js";
import type { UnionedObjectSet } from "./UnionedObjectSet.js";
export interface LogicalObjectSet_filter {
	type: "filter";
	filter: FilteredObjectSet;
}
export interface LogicalObjectSet_subtract {
	type: "subtract";
	subtract: SubtractedObjectSet;
}
export interface LogicalObjectSet_unioned {
	type: "unioned";
	unioned: UnionedObjectSet;
}
export interface LogicalObjectSet_intersected {
	type: "intersected";
	intersected: IntersectedObjectSet;
}
export interface LogicalObjectSet_joined {
	type: "joined";
	joined: JoinedObjectSet;
}
export interface LogicalObjectSet_reference {
	type: "reference";
	reference: ReferenceObjectSet;
}
export interface LogicalObjectSet_knn {
	type: "knn";
	knn: KnnObjectSet;
}
export interface LogicalObjectSet_knnV2 {
	type: "knnV2";
	knnV2: KnnObjectSetV2;
}
/**
* The definition of a logical Object Set.
*/
export type LogicalObjectSet = LogicalObjectSet_filter | LogicalObjectSet_subtract | LogicalObjectSet_unioned | LogicalObjectSet_intersected | LogicalObjectSet_joined | LogicalObjectSet_reference | LogicalObjectSet_knn | LogicalObjectSet_knnV2;
