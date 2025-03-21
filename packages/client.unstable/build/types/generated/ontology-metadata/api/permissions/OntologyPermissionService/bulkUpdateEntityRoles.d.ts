import { type ConjureContext } from "conjure-lite";
import type { BulkUpdateEntityRolesRequest } from "../BulkUpdateEntityRolesRequest.js";
import type { BulkUpdateEntityRolesResponse } from "../BulkUpdateEntityRolesResponse.js";
/**
* Updates the role grants for a set of ontology entities. NOTE: If roles are updated on an ObjectType or LinkType, the
* permissions on these entities will be unrestricted from their datasets.
* Requires `ontology:update-entity-roles` on the entity and `ontology:unrestrict-from-datasource` on all backing
* datasets of the resources you are updating.
*/
export declare function bulkUpdateEntityRoles(ctx: ConjureContext, updateRequest: BulkUpdateEntityRolesRequest): Promise<BulkUpdateEntityRolesResponse>;
