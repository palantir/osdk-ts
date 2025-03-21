import type { ObjectTypeId } from "./ObjectTypeId.js";
/**
* There was an attempt to create ObjectTypes that already exist.
*/
export interface ObjectTypesAlreadyExistError {
	objectTypeIds: Array<ObjectTypeId>;
}
