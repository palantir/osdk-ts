import type { PrincipalId } from "../PrincipalId.js";
/**
* The set of principals suggested to have the editor or owner role on the entity.
*/
export interface GetSuggestedRolesDatasourceResponse {
	editors: Array<PrincipalId>;
	owners: Array<PrincipalId>;
}
