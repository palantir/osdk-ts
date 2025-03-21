import type { DatasourceDerived } from "./DatasourceDerived.js";
import type { RolesEnabled } from "./RolesEnabled.js";
import type { RolesEnforced } from "./RolesEnforced.js";
export interface PermissionModel_rolesEnforced {
	type: "rolesEnforced";
	rolesEnforced: RolesEnforced;
}
export interface PermissionModel_rolesEnabled {
	type: "rolesEnabled";
	rolesEnabled: RolesEnabled;
}
export interface PermissionModel_datasourceDerived {
	type: "datasourceDerived";
	datasourceDerived: DatasourceDerived;
}
/**
* The permission model used by the entities in the enrollment.
*/
export type PermissionModel = PermissionModel_rolesEnforced | PermissionModel_rolesEnabled | PermissionModel_datasourceDerived;
