import type { ObjectSet } from "./ObjectSet.js";
/**
* Object Set containing objects present in at least one of the provided Object Sets.
*/
export interface UnionedObjectSet {
	objectSets: Array<ObjectSet>;
}
