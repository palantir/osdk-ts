import type { ObjectSet } from "./ObjectSet.js";
/**
* Object Set along with a resource identifier used to permission it.
*/
export interface SavedObjectSet {
	objectSet: ObjectSet;
	securityRid: string;
}
