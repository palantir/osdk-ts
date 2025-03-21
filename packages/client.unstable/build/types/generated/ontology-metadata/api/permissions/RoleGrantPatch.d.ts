import type { PatchOperation } from "./PatchOperation.js";
import type { RoleGrant } from "./RoleGrant.js";
/**
* The patch to apply to the given resource
*/
export interface RoleGrantPatch {
	roleGrant: RoleGrant;
	patchOperation: PatchOperation;
}
