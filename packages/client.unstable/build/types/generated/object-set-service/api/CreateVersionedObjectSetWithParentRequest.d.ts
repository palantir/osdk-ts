import type { ObjectSet } from "./ObjectSet.js";
export interface CreateVersionedObjectSetWithParentRequest {
	parentRid: string;
	objectSet: ObjectSet;
}
