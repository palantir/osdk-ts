import type { OrganizationRid } from "./OrganizationRid.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";
/**
* Response for TypeGroupGetOrganizationsRequest. Please note that this will contain
* OrganizationRid(s) only for TypeGroupRid(s) that are visible to the user.
*/
export interface TypeGroupGetOrganizationsResponse {
	organizationRidByTypeGroupRid: Record<TypeGroupRid, Array<OrganizationRid>>;
}
