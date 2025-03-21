import type { OntologyVersion } from "./OntologyVersion.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
/**
* Request to get a map of SharedPropertyTypeRid to the set of ObjectTypeRids that use the SharedPropertyType.
*/
export interface GetObjectTypesForSharedPropertyTypesRequest {
	ontologyVersion: OntologyVersion | undefined;
	sharedPropertyTypeRids: Array<SharedPropertyTypeRid>;
}
