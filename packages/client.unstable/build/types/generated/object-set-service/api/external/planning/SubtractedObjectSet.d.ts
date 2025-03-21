import type { LogicalObjectSet } from "./LogicalObjectSet.js";
/**
* Object Set containing objects present in the minuend but not in any of the subtrahends.
*/
export interface SubtractedObjectSet {
	minuend: LogicalObjectSet;
	subtrahends: Array<LogicalObjectSet>;
}
