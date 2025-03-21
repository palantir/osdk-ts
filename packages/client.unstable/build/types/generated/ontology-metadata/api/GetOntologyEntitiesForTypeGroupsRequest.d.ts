import type { OntologyVersion } from "./OntologyVersion.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";
/**
* Request to get a map of TypeGroupRids to the rids of ontology entities that use the TypeGroupRids.
*/
export interface GetOntologyEntitiesForTypeGroupsRequest {
	ontologyVersion: OntologyVersion | undefined;
	typeGroupRids: Array<TypeGroupRid>;
}
