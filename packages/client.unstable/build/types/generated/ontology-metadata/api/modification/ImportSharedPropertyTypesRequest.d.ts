import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
/**
* A request to import SharedPropertyTypes into another ontology
*/
export interface ImportSharedPropertyTypesRequest {
	sharedPropertyTypes: Array<SharedPropertyTypeRid>;
}
