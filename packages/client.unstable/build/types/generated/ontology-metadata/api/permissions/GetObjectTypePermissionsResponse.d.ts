import type { DatasourceRid } from "../DatasourceRid.js";
import type { OntologyPackageRid } from "../OntologyPackageRid.js";
import type { DatasourcePermissions } from "./DatasourcePermissions.js";
/**
* The operations the user has on the provided ObjectType.
*/
export interface GetObjectTypePermissionsResponse {
	canView: boolean;
	canEdit: boolean;
	canDelete: boolean;
	canAddDatasources: boolean;
	canUpdateRoles: boolean;
	datasourcePermissions: Record<DatasourceRid, DatasourcePermissions>;
	isEditRestrictedByDatasources: boolean;
	packageRid: OntologyPackageRid | undefined;
}
