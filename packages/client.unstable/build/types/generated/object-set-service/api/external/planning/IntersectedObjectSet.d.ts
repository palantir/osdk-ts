import type { LogicalObjectSet } from "./LogicalObjectSet.js";
/**
* Object Set containing objects present in all provided Object Sets.
*/
export interface IntersectedObjectSet {
	objectSets: Array<LogicalObjectSet>;
}
