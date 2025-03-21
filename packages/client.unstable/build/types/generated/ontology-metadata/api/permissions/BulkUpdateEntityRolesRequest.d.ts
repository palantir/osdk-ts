import type { EntityAndGrantPatches } from "./EntityAndGrantPatches.js";
/**
* Request to update the roles on an ontology entity.
* - The RoleSet of the ontology project must be in the Ontology context.
* - The roles must be within the RoleSet of the ontology project.
*/
export interface BulkUpdateEntityRolesRequest {
	entitiesAndGrantPatches: Array<EntityAndGrantPatches>;
	dryRun: boolean | undefined;
}
