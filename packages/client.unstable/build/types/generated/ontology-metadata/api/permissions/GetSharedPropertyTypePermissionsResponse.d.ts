import type { OntologyPackageRid } from "../OntologyPackageRid.js";
import type { OntologyRid } from "../OntologyRid.js";
/**
* The operations the user has on the provided SharedPropertyType.
*/
export interface GetSharedPropertyTypePermissionsResponse {
	canEdit: boolean;
	canDelete: boolean;
	canUpdateRoles: boolean;
	importedInto: Array<OntologyRid>;
	packageRid: OntologyPackageRid | undefined;
}
