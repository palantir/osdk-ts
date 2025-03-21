/**
* The operations the user has on the provided TypeGroup.
*/
export interface GetTypeGroupPermissionsResponse {
	canEdit: boolean;
	canDelete: boolean;
	canUpdateRoles: boolean;
}
