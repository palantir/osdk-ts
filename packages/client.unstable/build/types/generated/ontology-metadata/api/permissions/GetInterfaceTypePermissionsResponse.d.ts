import type { OntologyPackageRid } from "../OntologyPackageRid.js";
/**
* The operations the user has on the provided InterfaceType.
*/
export interface GetInterfaceTypePermissionsResponse {
	canEdit: boolean;
	canDelete: boolean;
	canUpdateRoles: boolean;
	packageRid: OntologyPackageRid | undefined;
}
