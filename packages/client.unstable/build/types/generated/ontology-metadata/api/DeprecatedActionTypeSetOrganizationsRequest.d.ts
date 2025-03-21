import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { OrganizationRid } from "./OrganizationRid.js";
/**
* Request to associate given OrganizationRid(s) with the specified ActionTypeRid(s).
* Users should have permissions to modify the specified ActionTypeRid(s) and also have
* relevant permissions to apply the specified organizations' markings.
*/
export interface DeprecatedActionTypeSetOrganizationsRequest {
	organizationRidByActionTypeRid: Record<ActionTypeRid, OrganizationRid>;
}
