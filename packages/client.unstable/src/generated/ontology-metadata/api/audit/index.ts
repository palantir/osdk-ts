/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type {
  ActionTypeGetOrganizationsRequestParams,
  ActionTypeGetOrganizationsResponseAuditRecord,
  ActionTypeSearchAuditRecord,
  ActionTypeSearchHitAuditRecord,
  ActionTypeServiceLoadActionTypesFromOntologyRequestParams,
  ActionTypeServiceLoadActionTypesFromOntologyResultParams,
  ActionTypeServiceLoadActionTypesRequestParams,
  ActionTypeServiceLoadActionTypesResultParams,
  ActionTypeServiceLoadActionTypesVersionedRequestParams,
  ActionTypeServiceLoadAllActionTypesFromOntologyRequestParams,
  ActionTypeServiceLoadAllActionTypesFromOntologyResultParams,
  ActionTypeServiceLoadAllActionTypesRequestParams,
  ActionTypeServiceLoadAllActionTypesResultParams,
  ActionTypeServiceModifyActionTypesRequestParams,
  ActionTypeServiceModifyActionTypesResultParams,
  ActionTypeServicePageLoadAllActionTypesFromOntologyRequestParams,
  ActionTypeServicePageLoadAllActionTypesFromOntologyResultParams,
  ActionTypeSetOrganizationsRequestParams,
  CreatedActionTypeAuditRecord,
  CreateOntologyBranchAuditRecord,
  EntityLoadByDatasourceRecord,
  GetLinkTypesAuditRecord,
  InterfaceTypeLoadAuditRecord,
  InterfaceTypeSearchAuditRecord,
  InterfaceTypeSearchHitAuditRecord,
  LinkTypeAndDatasourcesLoadAuditRecord,
  LinkTypeEntityMetadataLoadAuditRecord,
  LinkTypeLoadAuditRecord,
  LinkTypeLoadAuditRecordWithoutId,
  LoadActionTypeAuditRecord,
  LoadActionTypesAuditRecord,
  LoadAllInterfaceTypesFromOntologyAuditRecord,
  LoadAllObjectTypesFromOntologyAuditRecord,
  LoadAllOntologiesAuditRecord,
  LoadAllOntologyBranchesWithProposalAuditRecord,
  LoadAllSharedPropertyTypesFromOntologyAuditRecord,
  LoadAllTypeGroupsFromOntologyAuditRecord,
  LoadEntityMetadataAuditRecord,
  LoadObjectTypeSchemaMigrationsAuditRecord,
  LoadOntologyBranchWithProposalAuditRecord,
  LoadRuleSetAuditRecord,
  LoadRuleSetsAuditRecord,
  LoadSchemaMigrationAuditRecord,
  LoadWorkflowAuditRecord,
  LoadWorkflowsAuditRecord,
  ModifyActionTypesAuditRecord,
  ModifyOntologyBranchWithProposalAuditRecord,
  ObjectTypeAndDatasourcesLoadAuditRecord,
  ObjectTypeEntityMetadataLoadAuditRecord,
  ObjectTypeLoadAuditRecord,
  ObjectTypeLoadAuditRecordWithoutId,
  ObjectTypeLoadAuditRecordWithoutVersion,
  ObjectTypeSearchAuditRecord,
  ObjectTypeSearchAuditRecordV2,
  ObjectTypeSearchHitAuditRecord,
  OntologyAssociationMetadataServiceCreateAssociationRequestParams,
  OntologyAssociationMetadataServiceCreateAssociationResponseParams,
  OntologyAssociationMetadataServiceDeleteAssociationsRequestParams,
  OntologyAssociationMetadataServiceDeleteAssociationsResponseParams,
  OntologyAssociationMetadataServiceLoadOntologyEntityAssociationsRequestParams,
  OntologyAssociationMetadataServiceLoadOntologyEntityAssociationsResponseParams,
  OntologyAssociationMetadataServiceLoadResourceAssociationsRequestParams,
  OntologyAssociationMetadataServiceLoadResourceAssociationsResponseParams,
  OntologyAssociationMetadataServiceUpdateAssociationRequestParams,
  OntologyAssociationMetadataServiceUpdateAssociationResponseParams,
  OntologyBulkLoadEntitiesAuditRecord,
  OntologyBulkLoadEntitiesByDatasourcesAuditRecord,
  OntologyEntityMetadataServiceLoadEntityMetadataRequestParams,
  OntologyEntityMetadataServiceLoadEntityMetadataResponseParams,
  OntologyLoadAllAuditRecord,
  OntologyLoadAuditRecord,
  OntologyLoadDatasourcesAuditRecord,
  OntologyLoadEntitiesAuditRecord,
  OntologyMetadataApprovalsServiceCreateOntologyBranchRequestParams,
  OntologyMetadataApprovalsServiceCreateOntologyBranchResultParams,
  OntologyMetadataApprovalsServiceLoadAllOntologyBranchesWithProposalRequestParams,
  OntologyMetadataApprovalsServiceLoadAllOntologyBranchesWithProposalResultParams,
  OntologyMetadataApprovalsServiceLoadOntologyBranchWithProposalRequestParams,
  OntologyMetadataApprovalsServiceLoadOntologyBranchWithProposalResultParams,
  OntologyMetadataApprovalsServiceModifyOntologyBranchRequestParams,
  OntologyMetadataApprovalsServiceModifyOntologyBranchResultParams,
  OntologyMetadataAuditEvent,
  OntologyMetadataSearchServiceObjectTypeSearchRequestParams,
  OntologyMetadataSearchServiceObjectTypeSearchResponseParams,
  OntologyMetadataSearchServiceSearchActionTypesRequestParams,
  OntologyMetadataSearchServiceSearchActionTypesResponseParams,
  OntologyMetadataSearchServiceSearchInterfaceTypesRequestParams,
  OntologyMetadataSearchServiceSearchInterfaceTypesResponseParams,
  OntologyMetadataSearchServiceSearchObjectTypesRequestParams,
  OntologyMetadataSearchServiceSearchObjectTypesResponseParams,
  OntologyMetadataSearchServiceSearchSharedPropertyTypesRequestParams,
  OntologyMetadataSearchServiceSearchSharedPropertyTypesResponseParams,
  OntologyMetadataSearchServiceSearchTypeGroupsRequestParams,
  OntologyMetadataSearchServiceSearchTypeGroupsResponseParams,
  OntologyMetadataServiceBulkLoadOntologyEntitiesByDatasourcesRequestParams,
  OntologyMetadataServiceBulkLoadOntologyEntitiesByDatasourcesResultParams,
  OntologyMetadataServiceBulkLoadOntologyEntitiesRequestParams,
  OntologyMetadataServiceBulkLoadOntologyEntitiesResultParams,
  OntologyMetadataServiceCreateOntologyRequestParams,
  OntologyMetadataServiceCreateOntologyResultParams,
  OntologyMetadataServiceGetActionTypesForInterfaceTypeRequestParams,
  OntologyMetadataServiceGetActionTypesForInterfaceTypesResultParams,
  OntologyMetadataServiceGetActionTypesForObjectTypeRequestParams,
  OntologyMetadataServiceGetActionTypesForObjectTypesResultParams,
  OntologyMetadataServiceGetActionTypeUsageRequestParams,
  OntologyMetadataServiceGetActionTypeUsageResultParams,
  OntologyMetadataServiceGetDeprecationUsageRequestParams,
  OntologyMetadataServiceGetDeprecationUsageResultParams,
  OntologyMetadataServiceGetEntityModificationHistoryRequestParams,
  OntologyMetadataServiceGetEntityModificationHistoryResultParams,
  OntologyMetadataServiceGetEntityModificationHistoryV2RequestParams,
  OntologyMetadataServiceGetEntityModificationHistoryV2ResultParams,
  OntologyMetadataServiceGetFeatureConfigurationsRequestParams,
  OntologyMetadataServiceGetFeatureConfigurationsResponseParams,
  OntologyMetadataServiceGetLinkTypesForObjectTypesRequestParams,
  OntologyMetadataServiceGetLinkTypesForObjectTypesResultParams,
  OntologyMetadataServiceGetModificationHistoryRequestParams,
  OntologyMetadataServiceGetModificationHistoryResultParams,
  OntologyMetadataServiceGetModifiedEntitiesRequestParams,
  OntologyMetadataServiceGetModifiedEntitiesResponseParams,
  OntologyMetadataServiceGetObjectTypesForInterfaceTypesRequestParams,
  OntologyMetadataServiceGetObjectTypesForInterfaceTypesResultParams,
  OntologyMetadataServiceGetObjectTypesForSharedPropertyTypesRequestParams,
  OntologyMetadataServiceGetObjectTypesForSharedPropertyTypesResultParams,
  OntologyMetadataServiceGetObjectTypesForTypeGroupsRequestParams,
  OntologyMetadataServiceGetObjectTypesForTypeGroupsResultParams,
  OntologyMetadataServiceGetOntologyEntitiesForTypeGroupsRequestParams,
  OntologyMetadataServiceGetOntologyEntitiesForTypeGroupsResultParams,
  OntologyMetadataServiceGetOntologyRidsForEntitiesRequestParams,
  OntologyMetadataServiceGetOntologyRidsForEntitiesResultParams,
  OntologyMetadataServiceGetOntologySummaryRequestParams,
  OntologyMetadataServiceGetOntologySummaryResponseParams,
  OntologyMetadataServiceGetOrganizationRidsForOntologyResultParams,
  OntologyMetadataServiceGetRelationsForObjectTypesRequestParams,
  OntologyMetadataServiceGetRelationsForObjectTypesResultParams,
  OntologyMetadataServiceGetUsageRequestParams,
  OntologyMetadataServiceGetUsageResultParams,
  OntologyMetadataServiceGetUsageSettingsByOrganizationRequestParams,
  OntologyMetadataServiceGetUsageSettingsByOrganizationResultParams,
  OntologyMetadataServiceGetUsageSettingsByUserRequestParams,
  OntologyMetadataServiceGetUsageSettingsByUserResultParams,
  OntologyMetadataServiceGetUsageV2RequestParams,
  OntologyMetadataServiceGetUsageV2ResultParams,
  OntologyMetadataServiceLoadAllInterfaceTypesFromOntologyRequestParams,
  OntologyMetadataServiceLoadAllInterfaceTypesFromOntologyResultParams,
  OntologyMetadataServiceLoadAllObjectTypesFromOntologyRequestParams,
  OntologyMetadataServiceLoadAllObjectTypesFromOntologyResultParams,
  OntologyMetadataServiceLoadAllOntologiesInternalRequestParams,
  OntologyMetadataServiceLoadAllOntologiesInternalResultParams,
  OntologyMetadataServiceLoadAllOntologiesRequestParams,
  OntologyMetadataServiceLoadAllOntologiesResultParams,
  OntologyMetadataServiceLoadAllOntologyEntitiesRequestParams,
  OntologyMetadataServiceLoadAllOntologyEntitiesResultParams,
  OntologyMetadataServiceLoadAllOntologyRequestParams,
  OntologyMetadataServiceLoadAllOntologyResultParams,
  OntologyMetadataServiceLoadAllRuleSetsRequestParams,
  OntologyMetadataServiceLoadAllSharedPropertyTypesFromOntologyRequestParams,
  OntologyMetadataServiceLoadAllSharedPropertyTypesFromOntologyResultParams,
  OntologyMetadataServiceLoadAllTypeGroupsFromOntologyRequestParams,
  OntologyMetadataServiceLoadAllTypeGroupsFromOntologyResultParams,
  OntologyMetadataServiceLoadAllWorkflowsPageRequestParams,
  OntologyMetadataServiceLoadOntologyDatasourcesRequestParams,
  OntologyMetadataServiceLoadOntologyDatasourcesResultParams,
  OntologyMetadataServiceLoadOntologyEntitiesRequestParams,
  OntologyMetadataServiceLoadOntologyEntitiesResultParams,
  OntologyMetadataServiceLoadOntologyRequestParams,
  OntologyMetadataServiceLoadOntologyResultParams,
  OntologyMetadataServiceLoadRuleSetsRequestParams,
  OntologyMetadataServiceLoadRuleSetsResultParams,
  OntologyMetadataServiceLoadWorkflowsPageResultParams,
  OntologyMetadataServiceModificationCheckExistingUniqueIdentifiersRequestParams,
  OntologyMetadataServiceModificationcheckExistingUniqueIdentifiersResultParams,
  OntologyMetadataServiceModificationImportSharedPropertyTypesRequestParams,
  OntologyMetadataServiceModificationImportSharedPropertyTypesResultParams,
  OntologyMetadataServiceModificationRequestParams,
  OntologyMetadataServiceModificationResultParams,
  OntologyMetadataServiceModifyOntologyRequestParams,
  OntologyMetadataServiceModifyOntologyResultParams,
  OntologyMetadataServiceOntologyDeleteRequestParams,
  OntologyMetadataServiceOntologyDeleteResultParams,
  OntologyMetadataServiceOntologyUpdateRequestParams,
  OntologyMetadataServiceOntologyUpdateResultParams,
  OntologyMetadataServiceReportUsageMetadataRequestParams,
  OntologyMetadataServiceReportUsageMetadataResultParams,
  OntologyMetadataServiceSetUsageSettingsByOrganizationRequestParams,
  OntologyMetadataServiceSetUsageSettingsByOrganizationResultParams,
  OntologyMetadataServiceSystemEntityMetadataModificationRequestParams,
  OntologyMetadataServiceSystemEntityMetadataModificationResultParams,
  OntologyPermissionServiceBulkUpdateEntityRolesRequestParams,
  OntologyPermissionServiceBulkUpdateEntityRolesResultParams,
  OntologyPermissionServiceGetActionTypePermissionsRequestParams,
  OntologyPermissionServiceGetActionTypePermissionsResultParams,
  OntologyPermissionServiceGetBulkActionTypePermissionsForUsersRequestParams,
  OntologyPermissionServiceGetBulkActionTypePermissionsForUsersResultParams,
  OntologyPermissionServiceGetBulkActionTypePermissionsRequestParams,
  OntologyPermissionServiceGetBulkActionTypePermissionsResultParams,
  OntologyPermissionServiceGetBulkInterfaceTypePermissionsRequestParams,
  OntologyPermissionServiceGetBulkInterfaceTypePermissionsResultParams,
  OntologyPermissionServiceGetBulkLinkTypePermissionsForUsersRequestParams,
  OntologyPermissionServiceGetBulkLinkTypePermissionsForUsersResultParams,
  OntologyPermissionServiceGetBulkLinkTypePermissionsRequestParams,
  OntologyPermissionServiceGetBulkLinkTypePermissionsResultParams,
  OntologyPermissionServiceGetBulkObjectTypePermissionsForUsersRequestParams,
  OntologyPermissionServiceGetBulkObjectTypePermissionsForUsersResultParams,
  OntologyPermissionServiceGetBulkObjectTypePermissionsRequestParams,
  OntologyPermissionServiceGetBulkObjectTypePermissionsResultParams,
  OntologyPermissionServiceGetBulkSharedPropertyTypePermissionsRequestParams,
  OntologyPermissionServiceGetBulkSharedPropertyTypePermissionsResultParams,
  OntologyPermissionServiceGetBulkTypeGroupPermissionsRequestParams,
  OntologyPermissionServiceGetBulkTypeGroupPermissionsResultParams,
  OntologyPermissionServiceGetCreateOntologyPermissionsRequestParams,
  OntologyPermissionServiceGetCreateOntologyPermissionsResultParams,
  OntologyPermissionServiceGetEditorsForObjectTypeRequestParams,
  OntologyPermissionServiceGetEditorsForObjectTypeResultParams,
  OntologyPermissionServiceGetInterfaceTypePermissionsRequestParams,
  OntologyPermissionServiceGetInterfaceTypePermissionsResultParams,
  OntologyPermissionServiceGetLinkTypePermissionsRequestParams,
  OntologyPermissionServiceGetLinkTypePermissionsResultParams,
  OntologyPermissionServiceGetObjectTypePermissionsRequestParams,
  OntologyPermissionServiceGetObjectTypePermissionsResultParams,
  OntologyPermissionServiceGetOntologyPermissionsRequestParams,
  OntologyPermissionServiceGetOntologyPermissionsResultParams,
  OntologyPermissionServiceGetRuleSetPermissionsRequestParams,
  OntologyPermissionServiceGetRuleSetPermissionsResultParams,
  OntologyPermissionServiceGetSharedPropertyTypePermissionsRequestParams,
  OntologyPermissionServiceGetSharedPropertyTypePermissionsResultParams,
  OntologyPermissionServiceGetSuggestedRolesForActionTypeRequestParams,
  OntologyPermissionServiceGetSuggestedRolesForActionTypeResultParams,
  OntologyPermissionServiceGetSuggestedRolesForLinkTypeDatasourceRequestParams,
  OntologyPermissionServiceGetSuggestedRolesForLinkTypeDatasourceResultParams,
  OntologyPermissionServiceGetSuggestedRolesForLinkTypeRequestParams,
  OntologyPermissionServiceGetSuggestedRolesForLinkTypeResultParams,
  OntologyPermissionServiceGetSuggestedRolesForObjectTypeDatasourceRequestParams,
  OntologyPermissionServiceGetSuggestedRolesForObjectTypeDatasourceResultParams,
  OntologyPermissionServiceGetSuggestedRolesForObjectTypeRequestParams,
  OntologyPermissionServiceGetSuggestedRolesForObjectTypeResultParams,
  OntologyPermissionServiceGetWorkflowPermissionsRequestParams,
  OntologyPermissionServiceGetWorkflowPermissionsResultParams,
  OntologyPermissionServiceUpdateEntityRolesRequestParams,
  OntologyPermissionServiceUpdateEntityRolesResultParams,
  OntologyProvenanceServiceBatchGetDependentsForOntologyEntityIdentifierRequestParams,
  OntologyProvenanceServiceBatchGetDependentsOntologyEntityIdentifierResultParams,
  OntologyProvenanceServiceGetDependenciesRequestParams,
  OntologyProvenanceServiceGetDependenciesResultParams,
  OntologyProvenanceServiceGetDependenciesV2RequestParams,
  OntologyProvenanceServiceGetDependenciesV2ResultParams,
  OntologyProvenanceServiceGetDependentsForOntologyEntityIdentifierRequestParams,
  OntologyProvenanceServiceGetDependentsOntologyEntityIdentifierResultParams,
  OntologyProvenanceServiceGetDependentsRequestParams,
  OntologyProvenanceServiceGetDependentsResultParams,
  OntologyProvenanceServiceRegisterDependencyRequestParams,
  OntologyProvenanceServiceRegisterDependencyResultParams,
  OntologyProvenanceServiceTagDependentRequestParams,
  OntologyProvenanceServiceTagDependentResponseParams,
  OntologySchemaMigrationServiceLoadObjectTypeSchemaMigrationsRequestParams,
  OntologySchemaMigrationServiceLoadObjectTypeSchemaMigrationsResponseParams,
  RelationLoadAuditRecord,
  RelationLoadAuditRecordWithoutVersion,
  SharedPropertyTypeLoadAuditRecord,
  SharedPropertyTypeSearchAuditRecord,
  SharedPropertyTypeSearchHitAuditRecord,
  TypeGroupLoadAuditRecord,
  TypeGroupSearchAuditRecord,
  TypeGroupSearchHitAuditRecord,
  UpdatedActionTypeAuditRecord,
} from "./__components.js";
