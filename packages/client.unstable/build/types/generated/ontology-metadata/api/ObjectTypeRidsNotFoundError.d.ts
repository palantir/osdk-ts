import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* The ObjectTypesRids were not found in the current ontology.
*/
export interface ObjectTypeRidsNotFoundError {
	objectTypeRids: Array<ObjectTypeRid>;
}
