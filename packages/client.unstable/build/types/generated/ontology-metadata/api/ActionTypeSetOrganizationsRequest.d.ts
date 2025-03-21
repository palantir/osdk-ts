import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { OrganizationRid } from "./OrganizationRid.js";
/**
* Request to associate given set of OrganizationRids with the specified ActionTypeRid(s).
* Users should have permissions to modify the specified ActionTypeRid(s) and also have
* relevant permissions to apply the specified organizations' markings.
* An empty set of organizations is not permissible.
*/
export interface ActionTypeSetOrganizationsRequest {
	organizationRidByActionTypeRid: Record<ActionTypeRid, Array<OrganizationRid>>;
}
