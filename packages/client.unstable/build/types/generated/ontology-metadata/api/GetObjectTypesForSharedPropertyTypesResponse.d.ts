import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
/**
* Response to GetObjectTypesForSharedPropertyTypesRequest.
*/
export interface GetObjectTypesForSharedPropertyTypesResponse {
	objectTypeRidsBySharedPropertyTypeRid: Record<SharedPropertyTypeRid, Array<ObjectTypeRid>>;
}
