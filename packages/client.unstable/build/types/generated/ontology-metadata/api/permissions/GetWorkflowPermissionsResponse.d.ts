/**
* The operations the user has on the provided Workflow.
*/
export interface GetWorkflowPermissionsResponse {
	canEdit: boolean;
	canDelete: boolean;
	canUpdateRoles: boolean;
	hasRolesApplied: boolean;
}
