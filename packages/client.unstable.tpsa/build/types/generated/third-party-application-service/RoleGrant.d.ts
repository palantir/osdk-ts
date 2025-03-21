import type { Principal } from "./Principal.js";
import type { RoleId } from "./RoleId.js";
export interface RoleGrant {
	role: RoleId;
	principal: Principal;
}
