import type { LogicalObjectSet } from "./LogicalObjectSet.js";
/**
* Object Set containing objects present in at least one of the provided Object Sets.
*/
export interface UnionedObjectSet {
	objectSets: Array<LogicalObjectSet>;
}
