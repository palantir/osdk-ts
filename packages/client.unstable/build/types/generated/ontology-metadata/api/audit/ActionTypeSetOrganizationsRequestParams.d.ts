import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { OrganizationRid } from "../OrganizationRid.js";
export interface ActionTypeSetOrganizationsRequestParams {
	organizationRidsByActionTypeRids: Record<ActionTypeRid, Array<OrganizationRid>>;
}
