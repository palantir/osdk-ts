import { type ConjureContext } from "conjure-lite";
import type { GetOntologyEntitiesForTypeGroupsRequest } from "../GetOntologyEntitiesForTypeGroupsRequest.js";
import type { GetOntologyEntitiesForTypeGroupsResponse } from "../GetOntologyEntitiesForTypeGroupsResponse.js";
/**
* Gets a map of TypeGroupRids to the rids of all the ontology entities that use the TypeGroup.
* At most 50 TypeGroupRids can be requested.
*/
export declare function getOntologyEntitiesForTypeGroups(ctx: ConjureContext, request: GetOntologyEntitiesForTypeGroupsRequest): Promise<GetOntologyEntitiesForTypeGroupsResponse>;
