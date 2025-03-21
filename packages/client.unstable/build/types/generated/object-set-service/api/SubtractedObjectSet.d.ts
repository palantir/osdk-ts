import type { ObjectSet } from "./ObjectSet.js";
/**
* Object Set containing objects present in first provided Object Set and no other Object Sets.
*/
export interface SubtractedObjectSet {
	objectSets: Array<ObjectSet>;
}
