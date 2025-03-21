import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* The objectTypeIds and objectTypeRids lists are guaranteed to match up.  Specifically, the id at objectTypeIds[i] and the rid at objectTypeRids[i] represent the same object type for all i, and the lists are the same length. There are guaranteed to be no duplicates in either list.
*/
export interface GetObjectTypesResponse {
	objectTypeIds: Array<ObjectTypeId>;
	objectTypeRids: Array<ObjectTypeRid>;
}
