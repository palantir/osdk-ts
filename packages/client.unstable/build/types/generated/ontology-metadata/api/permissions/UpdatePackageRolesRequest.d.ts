import type { RoleGrantPatch } from "./RoleGrantPatch.js";
/**
* Updates the roles on the package.
*/
export interface UpdatePackageRolesRequest {
	grantPatches: Array<RoleGrantPatch>;
}
