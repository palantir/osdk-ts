import type { RoleId } from "../RoleId.js";
import type { Principal } from "./Principal.js";
/**
* The role to add/remove and to which principal
*/
export interface RoleGrant {
	role: RoleId;
	principal: Principal;
}
