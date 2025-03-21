import type { TypeGroupRid } from "./TypeGroupRid.js";
/**
* Request to get the associated OrganizationRid(s) for given TypeGroupRid(s).
*/
export interface TypeGroupGetOrganizationsRequest {
	typeGroupRids: Array<TypeGroupRid>;
}
