import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";
/**
* Response to GetObjectTypesForTypeGroupsRequest.
*/
export interface GetObjectTypesForTypeGroupsResponse {
	objectTypeRidsByTypeGroupRids: Record<TypeGroupRid, Array<ObjectTypeRid>>;
}
