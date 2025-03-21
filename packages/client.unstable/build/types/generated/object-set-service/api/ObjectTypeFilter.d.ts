import type { ObjectTypeId } from "./ObjectTypeId.js";
/**
* An object matches an ObjectTypeFilter iff its ObjectTypeId matches the provided ObjectTypeId.
*/
export interface ObjectTypeFilter {
	objectTypeId: ObjectTypeId;
}
