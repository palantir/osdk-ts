import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
/**
* There was an attempt to create SharedPropertyTypes that already exist.
*/
export interface SharedPropertyTypesAlreadyExistError {
	sharedPropertyTypeRids: Array<SharedPropertyTypeRid>;
}
