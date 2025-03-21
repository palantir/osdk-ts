import type { EntityParent } from "./EntityParent.js";
import type { PermissionsOntologyEntity } from "./PermissionsOntologyEntity.js";
import type { RoleGrantPatch } from "./RoleGrantPatch.js";
/**
* Request to update the roles on an ontology entity.
* - The RoleSet of the ontology project must be in the Ontology context.
* - The role must be within the RoleSet of the ontology project.
*/
export interface UpdateEntityRolesRequest {
	entity: PermissionsOntologyEntity;
	grantPatches: Array<RoleGrantPatch>;
	parent: EntityParent | undefined;
	dryRun: boolean | undefined;
	disableInheritedPermissions: boolean | undefined;
}
