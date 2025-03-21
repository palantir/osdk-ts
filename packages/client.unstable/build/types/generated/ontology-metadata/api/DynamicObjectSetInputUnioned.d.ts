import type { DynamicObjectSet } from "./DynamicObjectSet.js";
/**
* Depicts an ObjectSet which is a union of all ObjectSets provided.
*/
export interface DynamicObjectSetInputUnioned {
	dynamicObjectSets: Array<DynamicObjectSet>;
}
