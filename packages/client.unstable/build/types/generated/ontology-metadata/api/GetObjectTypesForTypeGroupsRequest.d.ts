import type { OntologyVersion } from "./OntologyVersion.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";
/**
* Request to get a map of TypeGroupRids to the set of ObjectTypeRids that use the TypeGroupRids.
*/
export interface GetObjectTypesForTypeGroupsRequest {
	ontologyVersion: OntologyVersion | undefined;
	typeGroupRids: Array<TypeGroupRid>;
}
