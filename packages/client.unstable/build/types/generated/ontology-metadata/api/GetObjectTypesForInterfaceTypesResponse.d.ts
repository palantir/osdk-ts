import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* Response to GetObjectTypesForInterfaceTypesRequest.
*/
export interface GetObjectTypesForInterfaceTypesResponse {
	objectTypeRidsByInterfaceTypeRid: Record<InterfaceTypeRid, Array<ObjectTypeRid>>;
}
