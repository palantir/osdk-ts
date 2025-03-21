import type { OrganizationRid } from "./OrganizationRid.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";
/**
* Request to associate given set of OrganizationRids with the specified TypeGroupRid(s).
* Users should have permissions to modify the specified TypeGroupRid(s) and also have
* relevant permissions to apply the specified organizations' markings.
* An empty set of organizations is not permissible.
*/
export interface TypeGroupSetOrganizationsRequest {
	organizationRidByTypeGroupRid: Record<TypeGroupRid, Array<OrganizationRid>>;
}
