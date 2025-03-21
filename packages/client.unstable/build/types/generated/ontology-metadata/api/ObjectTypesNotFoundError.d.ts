import type { ObjectTypeId } from "./ObjectTypeId.js";
/**
* The ObjectTypes were not found.
*/
export interface ObjectTypesNotFoundError {
	objectTypeIds: Array<ObjectTypeId>;
}
