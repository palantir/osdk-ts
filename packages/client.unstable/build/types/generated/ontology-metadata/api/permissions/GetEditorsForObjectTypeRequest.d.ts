import type { ObjectTypeRid } from "../ObjectTypeRid.js";
/**
* Request to get the list of editors for the requested object type.
*/
export interface GetEditorsForObjectTypeRequest {
	objectTypeRid: ObjectTypeRid;
}
