import type { ObjectSet } from "./ObjectSet.js";
/**
* Object Set containing objects present in all provided Object Sets.
*/
export interface IntersectedObjectSet {
	objectSets: Array<ObjectSet>;
}
