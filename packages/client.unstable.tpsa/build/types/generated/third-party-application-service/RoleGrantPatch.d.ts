import type { PatchOperation } from "./PatchOperation.js";
import type { RoleGrant } from "./RoleGrant.js";
export interface RoleGrantPatch {
	roleGrant: RoleGrant;
	patchOperation: PatchOperation;
}
