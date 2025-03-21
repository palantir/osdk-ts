import type { ActionTypeRid } from "./ActionTypeRid.js";
/**
* Request to get the associated OrganizationRid(s) for given ActionTypeRid(s).
*/
export interface ActionTypeGetOrganizationsRequest {
	actionTypeRids: Array<ActionTypeRid>;
}
