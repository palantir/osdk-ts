/**
* Current configuration of some OMS features. Note that these configurations are stack-wide, which means they do not have granularity on org/enrollment/group level.
*/
export interface GetFeatureConfigurationsResponse {
	allowSharedPropertyTypeUsage: boolean;
	allowGothamTypeMappingUsage: boolean;
	allowTypeRegistryUsage: boolean;
	allowNonRoleEntitiesInProposals: boolean;
	ontologyProposalsInDefaultOntologyWillBeOrgMarked: boolean;
}
