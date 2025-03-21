import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { OrganizationRid } from "./OrganizationRid.js";
/**
* Response for ActionTypeGetOrganizationsRequest. Please note that this will contain
* OrganizationRid(s) only for ActionTypeRid(s) that are visible to the user.
*/
export interface DeprecatedActionTypeGetOrganizationsResponse {
	organizationRidByActionTypeRid: Record<ActionTypeRid, OrganizationRid | undefined>;
}
