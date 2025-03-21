/**
* The operations the user has on the provided ontology.
*/
export interface GetOntologyPermissionsResponse {
	canCreateObjectTypes: boolean;
	canCreateLinkTypes: boolean;
	canCreateActionTypes: boolean;
	canUseNotificationsWithActionType: boolean;
	canCreateRuleSets: boolean;
	canCreateWorkflows: boolean;
	canCreateSharedPropertyTypes: boolean;
	canCreateInterfaceTypes: boolean;
	canCreateTypeGroups: boolean;
}
