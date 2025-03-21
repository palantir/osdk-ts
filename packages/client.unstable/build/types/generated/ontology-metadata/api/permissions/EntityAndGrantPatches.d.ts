import type { EntityParent } from "./EntityParent.js";
import type { PermissionsOntologyEntity } from "./PermissionsOntologyEntity.js";
import type { RoleGrantPatch } from "./RoleGrantPatch.js";
export interface EntityAndGrantPatches {
	entity: PermissionsOntologyEntity;
	grantPatches: Array<RoleGrantPatch>;
	parent: EntityParent | undefined;
}
