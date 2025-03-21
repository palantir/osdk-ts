import { type ConjureContext } from "conjure-lite";
import type { UpdateEntityRolesRequest } from "../UpdateEntityRolesRequest.js";
import type { UpdateEntityRolesResponse } from "../UpdateEntityRolesResponse.js";
/**
* Updates the role grants for an ontology entity. NOTE: If roles are updated on an ObjectType or LinkType, the
* permissions on these entities will be unrestricted from their datasets.
* Requires `ontology:update-entity-roles` on the entity and `ontology:unrestrict-from-datasource` on all backing
* datasets.
*/
export declare function updateEntityRoles(ctx: ConjureContext, updateRequest: UpdateEntityRolesRequest): Promise<UpdateEntityRolesResponse>;
