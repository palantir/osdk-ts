import type { OntologyEntitiesUsedInTypeGroup } from "./OntologyEntitiesUsedInTypeGroup.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";
/**
* Response to GetOntologyEntitiesForTypeGroupsRequest.
*/
export interface GetOntologyEntitiesForTypeGroupsResponse {
	ontologyEntitiesByTypeGroupRids: Record<TypeGroupRid, OntologyEntitiesUsedInTypeGroup>;
}
