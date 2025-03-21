import type { OntologyPackageRid } from "../OntologyPackageRid.js";
/**
* The operations the user has on the provided ActionType
*/
export interface GetActionTypePermissionsResponse {
	canView: boolean;
	canEdit: boolean;
	canUseNotifications: boolean;
	canUpdateRoles: boolean;
	hasRolesApplied: boolean;
	packageRid: OntologyPackageRid | undefined;
}
