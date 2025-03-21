import type { PrincipalId } from "../PrincipalId.js";
import type { RoleId } from "../RoleId.js";
/**
* A request for a principal to be granted a set of roles on a ontology entity.
*/
export interface OntologyEntityRoleGrantSubRequest {
	roles: Array<RoleId>;
	principal: PrincipalId;
	expiresBy: string | undefined;
}
