/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { CreateOntologyBranchRequest as _approvals_api_CreateOntologyBranchRequest } from "../../approvals/api/__components.js";
import type { LoadAllOntologyBranchesWithProposalPageRequest as _approvals_api_LoadAllOntologyBranchesWithProposalPageRequest } from "../../approvals/api/__components.js";
import type { LoadOntologyBranchWithProposalRequest as _approvals_api_LoadOntologyBranchWithProposalRequest } from "../../approvals/api/__components.js";
import type { ModifyOntologyBranchRequest as _approvals_api_ModifyOntologyBranchRequest } from "../../approvals/api/__components.js";
import type { WorkflowDisplayName as _workflow_api_WorkflowDisplayName } from "../../workflow/api/__components.js";
import type { WorkflowRid as _workflow_api_WorkflowRid } from "../../workflow/api/__components.js";
import type { LoadAllWorkflowsPageRequest as _workflow_api_LoadAllWorkflowsPageRequest } from "../../workflow/api/__components.js";
import type { ActionTypeRid as _api_ActionTypeRid } from "../__components.js";
import type { OrganizationRid as _api_OrganizationRid } from "../__components.js";
import type { OntologyRid as _api_OntologyRid } from "../__components.js";
import type { OntologyVersion as _api_OntologyVersion } from "../__components.js";
import type { LoadActionTypesFromOntologyRequest as _api_LoadActionTypesFromOntologyRequest } from "../__components.js";
import type { ActionTypeLoadRequest as _api_ActionTypeLoadRequest } from "../__components.js";
import type { ActionTypeLoadVersionedRequest as _api_ActionTypeLoadVersionedRequest } from "../__components.js";
import type { LoadAllActionTypesFromOntologyRequest as _api_LoadAllActionTypesFromOntologyRequest } from "../__components.js";
import type { ActionTypeLoadAllRequest as _api_ActionTypeLoadAllRequest } from "../__components.js";
import type { ActionTypeModifyRequest as _api_ActionTypeModifyRequest } from "../__components.js";
import type { LoadAllActionTypesPageRequest as _api_LoadAllActionTypesPageRequest } from "../__components.js";
import type { ActionTypeVersion as _api_ActionTypeVersion } from "../__components.js";
import type { OntologyBranchRid as _api_OntologyBranchRid } from "../__components.js";
import type { InterfaceTypeRid as _api_InterfaceTypeRid } from "../__components.js";
import type { DatasourceRid as _api_DatasourceRid } from "../__components.js";
import type { LinkTypeId as _api_LinkTypeId } from "../__components.js";
import type { LinkTypeRid as _api_LinkTypeRid } from "../__components.js";
import type { ObjectTypeRid as _api_ObjectTypeRid } from "../__components.js";
import type { SharedPropertyTypeRid as _api_SharedPropertyTypeRid } from "../__components.js";
import type { TypeGroupRid as _api_TypeGroupRid } from "../__components.js";
import type { SchemaVersion as _api_SchemaVersion } from "../__components.js";
import type { RuleSetRid as _api_RuleSetRid } from "../__components.js";
import type { SchemaMigrationRid as _api_SchemaMigrationRid } from "../__components.js";
import type { ObjectTypeId as _api_ObjectTypeId } from "../__components.js";
import type { OntologyBulkLoadEntitiesByDatasourcesRequest as _api_OntologyBulkLoadEntitiesByDatasourcesRequest } from "../__components.js";
import type { OntologyBulkLoadEntitiesRequest as _api_OntologyBulkLoadEntitiesRequest } from "../__components.js";
import type { GetActionTypesForInterfaceTypeRequest as _api_GetActionTypesForInterfaceTypeRequest } from "../__components.js";
import type { GetActionTypesForInterfaceTypeResponse as _api_GetActionTypesForInterfaceTypeResponse } from "../__components.js";
import type { GetActionTypesForObjectTypeRequest as _api_GetActionTypesForObjectTypeRequest } from "../__components.js";
import type { GetActionTypesForObjectTypeResponse as _api_GetActionTypesForObjectTypeResponse } from "../__components.js";
import type { GetEntityDelegateDatasetRequest as _api_GetEntityDelegateDatasetRequest } from "../__components.js";
import type { GetEntityDelegateDatasetResponse as _api_GetEntityDelegateDatasetResponse } from "../__components.js";
import type { GetEntityQueryableSourceRequest as _api_GetEntityQueryableSourceRequest } from "../__components.js";
import type { GetEntityQueryableSourceResponse as _api_GetEntityQueryableSourceResponse } from "../__components.js";
import type { GetFeatureConfigurationsResponse as _api_GetFeatureConfigurationsResponse } from "../__components.js";
import type { GetLinkTypesForObjectTypesRequest as _api_GetLinkTypesForObjectTypesRequest } from "../__components.js";
import type { GetObjectTypesForInterfaceTypesRequest as _api_GetObjectTypesForInterfaceTypesRequest } from "../__components.js";
import type { GetObjectTypesForInterfaceTypesResponse as _api_GetObjectTypesForInterfaceTypesResponse } from "../__components.js";
import type { GetObjectTypesForSharedPropertyTypesRequest as _api_GetObjectTypesForSharedPropertyTypesRequest } from "../__components.js";
import type { GetObjectTypesForSharedPropertyTypesResponse as _api_GetObjectTypesForSharedPropertyTypesResponse } from "../__components.js";
import type { GetObjectTypesForTypeGroupsRequest as _api_GetObjectTypesForTypeGroupsRequest } from "../__components.js";
import type { GetObjectTypesForTypeGroupsResponse as _api_GetObjectTypesForTypeGroupsResponse } from "../__components.js";
import type { GetOntologyEntitiesForTypeGroupsRequest as _api_GetOntologyEntitiesForTypeGroupsRequest } from "../__components.js";
import type { GetOntologyEntitiesForTypeGroupsResponse as _api_GetOntologyEntitiesForTypeGroupsResponse } from "../__components.js";
import type { OntologyRidsForEntitiesRequest as _api_OntologyRidsForEntitiesRequest } from "../__components.js";
import type { OntologyRidsForEntitiesResponse as _api_OntologyRidsForEntitiesResponse } from "../__components.js";
import type { GetOntologySummaryRequest as _api_GetOntologySummaryRequest } from "../__components.js";
import type { GetOntologySummaryResponse as _api_GetOntologySummaryResponse } from "../__components.js";
import type { OrganizationRidsForOntologyResponse as _api_OrganizationRidsForOntologyResponse } from "../__components.js";
import type { GetRelationsForObjectTypesRequest as _api_GetRelationsForObjectTypesRequest } from "../__components.js";
import type { LoadAllInterfaceTypesPageRequest as _api_LoadAllInterfaceTypesPageRequest } from "../__components.js";
import type { LoadAllObjectTypesPageRequest as _api_LoadAllObjectTypesPageRequest } from "../__components.js";
import type { LoadAllOntologiesRequest as _api_LoadAllOntologiesRequest } from "../__components.js";
import type { OntologyLoadAllEntitiesRequest as _api_OntologyLoadAllEntitiesRequest } from "../__components.js";
import type { OntologyLoadAllRequest as _api_OntologyLoadAllRequest } from "../__components.js";
import type { LoadAllSharedPropertyTypesPageRequest as _api_LoadAllSharedPropertyTypesPageRequest } from "../__components.js";
import type { LoadAllTypeGroupsPageRequest as _api_LoadAllTypeGroupsPageRequest } from "../__components.js";
import type { LoadMergedRebaseStateRequest as _api_LoadMergedRebaseStateRequest } from "../__components.js";
import type { OntologyLoadDatasourcesRequest as _api_OntologyLoadDatasourcesRequest } from "../__components.js";
import type { OntologyLoadEntitiesRequest as _api_OntologyLoadEntitiesRequest } from "../__components.js";
import type { OntologyLoadRequest as _api_OntologyLoadRequest } from "../__components.js";
import type { OntologyModifyRequest as _api_OntologyModifyRequest } from "../__components.js";
import type { OntologyModifyResponse as _api_OntologyModifyResponse } from "../__components.js";
import type { RelationId as _api_RelationId } from "../__components.js";
import type { RelationRid as _api_RelationRid } from "../__components.js";
import type { CreateAssociationRequest as _api_association_metadata_CreateAssociationRequest } from "../association/metadata/__components.js";
import type { CreateAssociationResponse as _api_association_metadata_CreateAssociationResponse } from "../association/metadata/__components.js";
import type { DeleteAssociationsRequest as _api_association_metadata_DeleteAssociationsRequest } from "../association/metadata/__components.js";
import type { DeleteAssociationsResponse as _api_association_metadata_DeleteAssociationsResponse } from "../association/metadata/__components.js";
import type { LoadOntologyEntityAssociationsRequest as _api_association_metadata_LoadOntologyEntityAssociationsRequest } from "../association/metadata/__components.js";
import type { LoadOntologyEntityAssociationsResponse as _api_association_metadata_LoadOntologyEntityAssociationsResponse } from "../association/metadata/__components.js";
import type { LoadResourceAssociationsRequest as _api_association_metadata_LoadResourceAssociationsRequest } from "../association/metadata/__components.js";
import type { LoadResourceAssociationsResponse as _api_association_metadata_LoadResourceAssociationsResponse } from "../association/metadata/__components.js";
import type { UpdateAssociationRequest as _api_association_metadata_UpdateAssociationRequest } from "../association/metadata/__components.js";
import type { UpdateAssociationResponse as _api_association_metadata_UpdateAssociationResponse } from "../association/metadata/__components.js";
import type { GetStreamingProfileConfigsResponse as _api_entitymetadata_GetStreamingProfileConfigsResponse } from "../entitymetadata/__components.js";
import type { LoadEntityMetadataRequest as _api_entitymetadata_LoadEntityMetadataRequest } from "../entitymetadata/__components.js";
import type { SystemEntityMetadataModificationRequest as _api_entitymetadata_SystemEntityMetadataModificationRequest } from "../entitymetadata/__components.js";
import type { SystemEntityMetadataModificationResponse as _api_entitymetadata_SystemEntityMetadataModificationResponse } from "../entitymetadata/__components.js";
import type { LoadAllRuleSetsRequest as _api_formatting_LoadAllRuleSetsRequest } from "../formatting/__components.js";
import type { LoadRuleSetsRequest as _api_formatting_LoadRuleSetsRequest } from "../formatting/__components.js";
import type { LoadRuleSetsRequestV2 as _api_formatting_LoadRuleSetsRequestV2 } from "../formatting/__components.js";
import type { OntologyCreateRequest as _api_modification_OntologyCreateRequest } from "../modification/__components.js";
import type { OntologyCreateResponse as _api_modification_OntologyCreateResponse } from "../modification/__components.js";
import type { OntologyModificationDryRunRequest as _api_modification_OntologyModificationDryRunRequest } from "../modification/__components.js";
import type { OntologyModificationDryRunResponse as _api_modification_OntologyModificationDryRunResponse } from "../modification/__components.js";
import type { GetEntityModificationHistoryRequest as _api_modification_GetEntityModificationHistoryRequest } from "../modification/__components.js";
import type { GetEntityModificationHistoryResponse as _api_modification_GetEntityModificationHistoryResponse } from "../modification/__components.js";
import type { GetModificationHistoryRequest as _api_modification_GetModificationHistoryRequest } from "../modification/__components.js";
import type { GetModificationHistoryResponse as _api_modification_GetModificationHistoryResponse } from "../modification/__components.js";
import type { GetModifiedEntitiesRequest as _api_modification_GetModifiedEntitiesRequest } from "../modification/__components.js";
import type { GetModifiedEntitiesResponse as _api_modification_GetModifiedEntitiesResponse } from "../modification/__components.js";
import type { LoadAllOntologiesInternalRequest as _api_modification_LoadAllOntologiesInternalRequest } from "../modification/__components.js";
import type { LoadAllOntologiesInternalResponse as _api_modification_LoadAllOntologiesInternalResponse } from "../modification/__components.js";
import type { CheckExistingUniqueIdentifiersRequest as _api_modification_CheckExistingUniqueIdentifiersRequest } from "../modification/__components.js";
import type { CheckExistingUniqueIdentifiersResponse as _api_modification_CheckExistingUniqueIdentifiersResponse } from "../modification/__components.js";
import type { OntologyModificationRequest as _api_modification_OntologyModificationRequest } from "../modification/__components.js";
import type { OntologyModificationResponse as _api_modification_OntologyModificationResponse } from "../modification/__components.js";
import type { OntologyDeleteRequest as _api_modification_OntologyDeleteRequest } from "../modification/__components.js";
import type { OntologyDeleteResponse as _api_modification_OntologyDeleteResponse } from "../modification/__components.js";
import type { OntologyUpdateRequest as _api_modification_OntologyUpdateRequest } from "../modification/__components.js";
import type { OntologyUpdateResponse as _api_modification_OntologyUpdateResponse } from "../modification/__components.js";
import type { BulkUpdateEntityRolesRequest as _api_permissions_BulkUpdateEntityRolesRequest } from "../permissions/__components.js";
import type { BulkUpdateEntityRolesResponse as _api_permissions_BulkUpdateEntityRolesResponse } from "../permissions/__components.js";
import type { GetActionTypePermissionsResponse as _api_permissions_GetActionTypePermissionsResponse } from "../permissions/__components.js";
import type { GetBulkActionTypePermissionsForUsersRequest as _api_permissions_GetBulkActionTypePermissionsForUsersRequest } from "../permissions/__components.js";
import type { GetBulkActionTypePermissionsForUsersResponse as _api_permissions_GetBulkActionTypePermissionsForUsersResponse } from "../permissions/__components.js";
import type { GetBulkActionTypePermissionsRequest as _api_permissions_GetBulkActionTypePermissionsRequest } from "../permissions/__components.js";
import type { GetBulkActionTypePermissionsResponse as _api_permissions_GetBulkActionTypePermissionsResponse } from "../permissions/__components.js";
import type { GetBulkInterfaceTypePermissionsRequest as _api_permissions_GetBulkInterfaceTypePermissionsRequest } from "../permissions/__components.js";
import type { GetBulkInterfaceTypePermissionsResponse as _api_permissions_GetBulkInterfaceTypePermissionsResponse } from "../permissions/__components.js";
import type { GetBulkLinkTypePermissionsForUsersRequest as _api_permissions_GetBulkLinkTypePermissionsForUsersRequest } from "../permissions/__components.js";
import type { GetBulkLinkTypePermissionsForUsersResponse as _api_permissions_GetBulkLinkTypePermissionsForUsersResponse } from "../permissions/__components.js";
import type { GetBulkLinkTypePermissionsRequest as _api_permissions_GetBulkLinkTypePermissionsRequest } from "../permissions/__components.js";
import type { GetBulkLinkTypePermissionsResponse as _api_permissions_GetBulkLinkTypePermissionsResponse } from "../permissions/__components.js";
import type { GetBulkObjectTypePermissionsForUsersRequest as _api_permissions_GetBulkObjectTypePermissionsForUsersRequest } from "../permissions/__components.js";
import type { GetBulkObjectTypePermissionsForUsersResponse as _api_permissions_GetBulkObjectTypePermissionsForUsersResponse } from "../permissions/__components.js";
import type { GetBulkObjectTypePermissionsRequest as _api_permissions_GetBulkObjectTypePermissionsRequest } from "../permissions/__components.js";
import type { GetBulkObjectTypePermissionsResponse as _api_permissions_GetBulkObjectTypePermissionsResponse } from "../permissions/__components.js";
import type { GetBulkOntologyPermissionsRequest as _api_permissions_GetBulkOntologyPermissionsRequest } from "../permissions/__components.js";
import type { GetBulkOntologyPermissionsResponse as _api_permissions_GetBulkOntologyPermissionsResponse } from "../permissions/__components.js";
import type { GetBulkSharedPropertyTypePermissionsRequest as _api_permissions_GetBulkSharedPropertyTypePermissionsRequest } from "../permissions/__components.js";
import type { GetBulkSharedPropertyTypePermissionsResponse as _api_permissions_GetBulkSharedPropertyTypePermissionsResponse } from "../permissions/__components.js";
import type { GetBulkTypeGroupPermissionsRequest as _api_permissions_GetBulkTypeGroupPermissionsRequest } from "../permissions/__components.js";
import type { GetBulkTypeGroupPermissionsResponse as _api_permissions_GetBulkTypeGroupPermissionsResponse } from "../permissions/__components.js";
import type { GetCreateOntologyPermissionsResponse as _api_permissions_GetCreateOntologyPermissionsResponse } from "../permissions/__components.js";
import type { GetEditorsForObjectTypeRequest as _api_permissions_GetEditorsForObjectTypeRequest } from "../permissions/__components.js";
import type { GetEditorsForObjectTypeResponse as _api_permissions_GetEditorsForObjectTypeResponse } from "../permissions/__components.js";
import type { GetInterfaceTypePermissionsResponse as _api_permissions_GetInterfaceTypePermissionsResponse } from "../permissions/__components.js";
import type { GetLinkTypePermissionsResponse as _api_permissions_GetLinkTypePermissionsResponse } from "../permissions/__components.js";
import type { GetObjectTypePermissionsResponse as _api_permissions_GetObjectTypePermissionsResponse } from "../permissions/__components.js";
import type { GetOntologyPermissionsResponse as _api_permissions_GetOntologyPermissionsResponse } from "../permissions/__components.js";
import type { GetRuleSetPermissionsResponse as _api_permissions_GetRuleSetPermissionsResponse } from "../permissions/__components.js";
import type { GetSharedPropertyTypePermissionsResponse as _api_permissions_GetSharedPropertyTypePermissionsResponse } from "../permissions/__components.js";
import type { GetSuggestedRolesResponse as _api_permissions_GetSuggestedRolesResponse } from "../permissions/__components.js";
import type { GetSuggestedRolesDatasourceResponse as _api_permissions_GetSuggestedRolesDatasourceResponse } from "../permissions/__components.js";
import type { GetWorkflowPermissionsResponse as _api_permissions_GetWorkflowPermissionsResponse } from "../permissions/__components.js";
import type { UpdateEntityRolesRequest as _api_permissions_UpdateEntityRolesRequest } from "../permissions/__components.js";
import type { UpdateEntityRolesResponse as _api_permissions_UpdateEntityRolesResponse } from "../permissions/__components.js";
import type { BatchGetTaggedDependentsForOntologyEntityIdentifierRequest as _api_provenance_BatchGetTaggedDependentsForOntologyEntityIdentifierRequest } from "../provenance/__components.js";
import type { BatchGetTaggedDependentsForOntologyEntityIdentifierResponse as _api_provenance_BatchGetTaggedDependentsForOntologyEntityIdentifierResponse } from "../provenance/__components.js";
import type { GetDependenciesForTaggedDependentRequest as _api_provenance_GetDependenciesForTaggedDependentRequest } from "../provenance/__components.js";
import type { GetDependenciesForTaggedDependentResponse as _api_provenance_GetDependenciesForTaggedDependentResponse } from "../provenance/__components.js";
import type { GetDependenciesForTaggedDependentRequestV2 as _api_provenance_GetDependenciesForTaggedDependentRequestV2 } from "../provenance/__components.js";
import type { GetDependenciesForTaggedDependentResponseV2 as _api_provenance_GetDependenciesForTaggedDependentResponseV2 } from "../provenance/__components.js";
import type { GetTaggedDependentsForOntologyEntityIdentifierRequest as _api_provenance_GetTaggedDependentsForOntologyEntityIdentifierRequest } from "../provenance/__components.js";
import type { GetTaggedDependentsForOntologyEntityIdentifierResponse as _api_provenance_GetTaggedDependentsForOntologyEntityIdentifierResponse } from "../provenance/__components.js";
import type { GetTaggedDependentsForOntologyEntityRequest as _api_provenance_GetTaggedDependentsForOntologyEntityRequest } from "../provenance/__components.js";
import type { GetTaggedDependentsForOntologyEntityResponse as _api_provenance_GetTaggedDependentsForOntologyEntityResponse } from "../provenance/__components.js";
import type { RegisterDependencyRequest as _api_provenance_RegisterDependencyRequest } from "../provenance/__components.js";
import type { RegisterDependencyResponse as _api_provenance_RegisterDependencyResponse } from "../provenance/__components.js";
import type { TagDependentRequest as _api_provenance_TagDependentRequest } from "../provenance/__components.js";
import type { TagDependentResponse as _api_provenance_TagDependentResponse } from "../provenance/__components.js";
import type { LoadObjectTypeSchemaMigrationsRequest as _api_schemamigrations_LoadObjectTypeSchemaMigrationsRequest } from "../schemamigrations/__components.js";
import type { CombinedEntityTypeRid as _api_search_CombinedEntityTypeRid } from "../search/__components.js";
import type { ObjectTypeSearchRequest as _api_search_ObjectTypeSearchRequest } from "../search/__components.js";
import type { ActionTypeSearchRequest as _api_search_ActionTypeSearchRequest } from "../search/__components.js";
import type { InterfaceTypeSearchRequest as _api_search_InterfaceTypeSearchRequest } from "../search/__components.js";
import type { LinkTypeSearchRequest as _api_search_LinkTypeSearchRequest } from "../search/__components.js";
import type { ObjectTypeSearchRequestV2 as _api_search_ObjectTypeSearchRequestV2 } from "../search/__components.js";
import type { SharedPropertyTypeSearchRequest as _api_search_SharedPropertyTypeSearchRequest } from "../search/__components.js";
import type { SearchTitleInCombinedEntityTypeRequest as _api_search_SearchTitleInCombinedEntityTypeRequest } from "../search/__components.js";
import type { TypeGroupSearchRequest as _api_search_TypeGroupSearchRequest } from "../search/__components.js";
import type { GetObjectTypeSemanticSearchStatusResponse as _api_search_GetObjectTypeSemanticSearchStatusResponse } from "../search/__components.js";
import type { GetActionTypeUsageRequest as _api_usage_GetActionTypeUsageRequest } from "../usage/__components.js";
import type { GetActionTypeUsageResponse as _api_usage_GetActionTypeUsageResponse } from "../usage/__components.js";
import type { GetDeprecationUsageRequest as _api_usage_GetDeprecationUsageRequest } from "../usage/__components.js";
import type { GetDeprecationUsageResponse as _api_usage_GetDeprecationUsageResponse } from "../usage/__components.js";
import type { GetUsageRequest as _api_usage_GetUsageRequest } from "../usage/__components.js";
import type { GetUsageResponse as _api_usage_GetUsageResponse } from "../usage/__components.js";
import type { GetUsageSettingsByOrganizationRequest as _api_usage_GetUsageSettingsByOrganizationRequest } from "../usage/__components.js";
import type { GetUsageSettingsByOrganizationResponse as _api_usage_GetUsageSettingsByOrganizationResponse } from "../usage/__components.js";
import type { GetUsageSettingsByUserRequest as _api_usage_GetUsageSettingsByUserRequest } from "../usage/__components.js";
import type { GetUsageSettingsByUserResponse as _api_usage_GetUsageSettingsByUserResponse } from "../usage/__components.js";
import type { GetUsageRequestV2 as _api_usage_GetUsageRequestV2 } from "../usage/__components.js";
import type { GetUsageResponseV2 as _api_usage_GetUsageResponseV2 } from "../usage/__components.js";
import type { ReportUsageMetadataRequest as _api_usage_ReportUsageMetadataRequest } from "../usage/__components.js";
import type { ReportUsageMetadataResponse as _api_usage_ReportUsageMetadataResponse } from "../usage/__components.js";
import type { SetUsageSettingsByOrganizationRequest as _api_usage_SetUsageSettingsByOrganizationRequest } from "../usage/__components.js";
import type { SetUsageSettingsByOrganizationResponse as _api_usage_SetUsageSettingsByOrganizationResponse } from "../usage/__components.js";
export interface ActionTypeGetOrganizationsRequestParams {
  actionTypeRids: Array<_api_ActionTypeRid>;
}
export interface ActionTypeGetOrganizationsResponseAuditRecord {
  organizationRidsByActionTypeRids: Record<
    _api_ActionTypeRid,
    Array<_api_OrganizationRid>
  >;
}
export interface ActionTypeSearchAuditRecord {
  actionTypes: Array<ActionTypeSearchHitAuditRecord>;
}
export interface ActionTypeSearchHitAuditRecord {
  actionTypeRid: _api_ActionTypeRid;
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface ActionTypeServiceLoadActionTypesFromOntologyRequestParams {
  request: _api_LoadActionTypesFromOntologyRequest;
}
export interface ActionTypeServiceLoadActionTypesFromOntologyResultParams {
  record: LoadActionTypesAuditRecord;
}
export interface ActionTypeServiceLoadActionTypesRequestParams {
  request: _api_ActionTypeLoadRequest;
}
export interface ActionTypeServiceLoadActionTypesResultParams {
  record: LoadActionTypesAuditRecord;
}
export interface ActionTypeServiceLoadActionTypesVersionedRequestParams {
  request: _api_ActionTypeLoadVersionedRequest;
}
export interface ActionTypeServiceLoadAllActionTypesFromOntologyRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _api_LoadAllActionTypesFromOntologyRequest;
}
export interface ActionTypeServiceLoadAllActionTypesFromOntologyResultParams {
  record: LoadActionTypesAuditRecord;
}
export interface ActionTypeServiceLoadAllActionTypesRequestParams {
  request: _api_ActionTypeLoadAllRequest;
}
export interface ActionTypeServiceLoadAllActionTypesResultParams {
  record: LoadActionTypesAuditRecord;
}
export interface ActionTypeServiceModifyActionTypesRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _api_ActionTypeModifyRequest;
}
export interface ActionTypeServiceModifyActionTypesResultParams {
  record: ModifyActionTypesAuditRecord;
}
export interface ActionTypeServicePageLoadAllActionTypesFromOntologyRequestParams {
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
  request: _api_LoadAllActionTypesPageRequest;
}
export interface ActionTypeServicePageLoadAllActionTypesFromOntologyResultParams {
  record: LoadActionTypesAuditRecord;
}
export interface ActionTypeSetOrganizationsRequestParams {
  organizationRidsByActionTypeRids: Record<
    _api_ActionTypeRid,
    Array<_api_OrganizationRid>
  >;
}
export interface CombinedEntityTypeTitleSearchAuditRecord {
  entityTypes: Array<CombinedEntityTypeTitleSearchHitAuditRecord>;
}
export interface CombinedEntityTypeTitleSearchHitAuditRecord {
  combinedEntityTypeRid: _api_search_CombinedEntityTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface CreatedActionTypeAuditRecord {
  actionTypeRid: _api_ActionTypeRid;
  version: _api_ActionTypeVersion;
}
export interface CreateOntologyBranchAuditRecord {
  ontologyBranchRid: _api_OntologyBranchRid;
}
export interface EntityLoadByDatasourceRecord_objectTypeAndDatasources {
  type: "objectTypeAndDatasources";
  objectTypeAndDatasources: ObjectTypeAndDatasourcesLoadAuditRecord;
}

export interface EntityLoadByDatasourceRecord_linkTypeAndDatasources {
  type: "linkTypeAndDatasources";
  linkTypeAndDatasources: LinkTypeAndDatasourcesLoadAuditRecord;
}
export type EntityLoadByDatasourceRecord =
  | EntityLoadByDatasourceRecord_objectTypeAndDatasources
  | EntityLoadByDatasourceRecord_linkTypeAndDatasources;

export interface GetLinkTypesAuditRecord {
  linkTypeCount: number;
}
export interface InterfaceTypeLoadAuditRecord {
  interfaceTypeRid: _api_InterfaceTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface InterfaceTypeSearchAuditRecord {
  interfaceTypes: Array<InterfaceTypeSearchHitAuditRecord>;
}
export interface InterfaceTypeSearchHitAuditRecord {
  interfaceTypeRid: _api_InterfaceTypeRid;
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface LinkTypeAndDatasourcesLoadAuditRecord {
  datasourceRids: Array<_api_DatasourceRid>;
  linkTypeId: _api_LinkTypeId;
  linkTypeRid: _api_LinkTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface LinkTypeEntityMetadataLoadAuditRecord {
  linkTypeRid: _api_LinkTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface LinkTypeLoadAuditRecord {
  linkTypeId: _api_LinkTypeId;
  linkTypeRid: _api_LinkTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface LinkTypeLoadAuditRecordWithoutId {
  linkTypeRid: _api_LinkTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface LinkTypeSearchAuditRecord {
  linkTypes: Array<LinkTypeSearchHitAuditRecord>;
}
export interface LinkTypeSearchHitAuditRecord {
  linkTypeRid: _api_LinkTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface LoadActionTypeAuditRecord {
  actionTypeRid: _api_ActionTypeRid;
  version: _api_ActionTypeVersion;
}
export interface LoadActionTypesAuditRecord {
  actionTypes: Array<LoadActionTypeAuditRecord>;
}
export interface LoadAllInterfaceTypesFromOntologyAuditRecord {
  interfaceTypeRids: Array<_api_InterfaceTypeRid>;
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface LoadAllObjectTypesFromOntologyAuditRecord {
  objectTypes: Array<_api_ObjectTypeRid>;
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface LoadAllOntologiesAuditRecord {
  ontologies: Record<_api_OntologyRid, _api_OntologyVersion>;
}
export interface LoadAllOntologyBranchesWithProposalAuditRecord {
  ontologyBranchRids: Array<_api_OntologyBranchRid>;
}
export interface LoadAllSharedPropertyTypesFromOntologyAuditRecord {
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
  sharedPropertyTypeRids: Array<_api_SharedPropertyTypeRid>;
}
export interface LoadAllTypeGroupsFromOntologyAuditRecord {
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
  typeGroupRids: Array<_api_TypeGroupRid>;
}
export interface LoadEntityMetadataAuditRecord {
  linkTypes: Array<LinkTypeEntityMetadataLoadAuditRecord>;
  objectTypes: Array<ObjectTypeEntityMetadataLoadAuditRecord>;
}
export interface LoadObjectTypeSchemaMigrationsAuditRecord {
  migrations: Array<LoadSchemaMigrationAuditRecord>;
  schemaVersion: _api_SchemaVersion;
}
export interface LoadOntologyBranchWithProposalAuditRecord {
  ontologyBranchRid: _api_OntologyBranchRid;
}
export interface LoadRuleSetAuditRecord {
  ruleSetName: string;
  ruleSetRid: _api_RuleSetRid;
}
export interface LoadRuleSetsAuditRecord {
  ruleSets: Array<LoadRuleSetAuditRecord>;
}
export interface LoadSchemaMigrationAuditRecord {
  migrationRid: Array<_api_SchemaMigrationRid>;
  source: _api_SchemaVersion;
  target: _api_SchemaVersion;
}
export interface LoadWorkflowAuditRecord {
  workflowDisplayName: _workflow_api_WorkflowDisplayName;
  workflowRid: _workflow_api_WorkflowRid;
}
export interface LoadWorkflowsAuditRecord {
  workflows: Array<LoadWorkflowAuditRecord>;
}
export interface ModifyActionTypesAuditRecord {
  createdActionTypes: Array<CreatedActionTypeAuditRecord>;
  updatedActionTypes: Array<UpdatedActionTypeAuditRecord>;
}
export interface ModifyOntologyBranchWithProposalAuditRecord {}
export interface ObjectTypeAndDatasourcesLoadAuditRecord {
  datasourceRids: Array<_api_DatasourceRid>;
  objectTypeId: _api_ObjectTypeId;
  objectTypeRid: _api_ObjectTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface ObjectTypeEntityMetadataLoadAuditRecord {
  objectTypeRid: _api_ObjectTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface ObjectTypeLoadAuditRecord {
  objectTypeId: _api_ObjectTypeId;
  objectTypeRid: _api_ObjectTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface ObjectTypeLoadAuditRecordWithoutId {
  objectTypeRid: _api_ObjectTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface ObjectTypeLoadAuditRecordWithoutVersion {
  objectTypeId: _api_ObjectTypeId;
  objectTypeRid: _api_ObjectTypeRid;
}
export interface ObjectTypeSearchAuditRecord {
  objectTypes: Array<ObjectTypeSearchHitAuditRecord>;
}
export interface ObjectTypeSearchAuditRecordV2 {
  objectTypes: Array<ObjectTypeSearchHitAuditRecord>;
}
export interface ObjectTypeSearchHitAuditRecord {
  objectTypeRid: _api_ObjectTypeRid;
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface OntologyAssociationMetadataServiceCreateAssociationRequestParams {
  request: _api_association_metadata_CreateAssociationRequest;
}
export interface OntologyAssociationMetadataServiceCreateAssociationResponseParams {
  response: _api_association_metadata_CreateAssociationResponse;
}
export interface OntologyAssociationMetadataServiceDeleteAssociationsRequestParams {
  request: _api_association_metadata_DeleteAssociationsRequest;
}
export interface OntologyAssociationMetadataServiceDeleteAssociationsResponseParams {
  response: _api_association_metadata_DeleteAssociationsResponse;
}
export interface OntologyAssociationMetadataServiceLoadOntologyEntityAssociationsRequestParams {
  request: _api_association_metadata_LoadOntologyEntityAssociationsRequest;
}
export interface OntologyAssociationMetadataServiceLoadOntologyEntityAssociationsResponseParams {
  response: _api_association_metadata_LoadOntologyEntityAssociationsResponse;
}
export interface OntologyAssociationMetadataServiceLoadResourceAssociationsRequestParams {
  request: _api_association_metadata_LoadResourceAssociationsRequest;
}
export interface OntologyAssociationMetadataServiceLoadResourceAssociationsResponseParams {
  response: _api_association_metadata_LoadResourceAssociationsResponse;
}
export interface OntologyAssociationMetadataServiceUpdateAssociationRequestParams {
  request: _api_association_metadata_UpdateAssociationRequest;
}
export interface OntologyAssociationMetadataServiceUpdateAssociationResponseParams {
  response: _api_association_metadata_UpdateAssociationResponse;
}
export interface OntologyBulkLoadEntitiesAuditRecord {
  interfaceTypes: Array<InterfaceTypeLoadAuditRecord>;
  linkTypes: Array<LinkTypeAndDatasourcesLoadAuditRecord>;
  objectTypes: Array<ObjectTypeAndDatasourcesLoadAuditRecord>;
  sharedPropertyTypes: Array<SharedPropertyTypeLoadAuditRecord>;
  typeGroups: Array<TypeGroupLoadAuditRecord>;
}
export interface OntologyBulkLoadEntitiesByDatasourcesAuditRecord {
  entities: Array<EntityLoadByDatasourceRecord>;
}
export interface OntologyEntityMetadataServiceGetStreamingProfileConfigsRequestParams {}
export interface OntologyEntityMetadataServiceGetStreamingProfileConfigsResponseParams {
  response: _api_entitymetadata_GetStreamingProfileConfigsResponse;
}
export interface OntologyEntityMetadataServiceLoadEntityMetadataRequestParams {
  request: _api_entitymetadata_LoadEntityMetadataRequest;
}
export interface OntologyEntityMetadataServiceLoadEntityMetadataResponseParams {
  request: LoadEntityMetadataAuditRecord;
}
export interface OntologyLoadAllAuditRecord {
  currentOntologyVersion?: _api_OntologyVersion | null | undefined;
  entitiesOntologyVersion?: _api_OntologyVersion | null | undefined;
  entityCount: number;
}
export interface OntologyLoadAuditRecord {
  objectTypes: Array<ObjectTypeLoadAuditRecord>;
  relations: Array<RelationLoadAuditRecord>;
}
export interface OntologyLoadDatasourcesAuditRecord {
  manyToManyLinkTypeDatasourceCount: number;
  objectTypeDatasourceCount: number;
}
export interface OntologyLoadEntitiesAuditRecord {
  linkTypes: Array<LinkTypeLoadAuditRecord>;
  objectTypes: Array<ObjectTypeLoadAuditRecord>;
}
export interface OntologyMetadataApprovalsServiceCreateOntologyBranchRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _approvals_api_CreateOntologyBranchRequest;
}
export interface OntologyMetadataApprovalsServiceCreateOntologyBranchResultParams {
  response: CreateOntologyBranchAuditRecord;
}
export interface OntologyMetadataApprovalsServiceLoadAllOntologyBranchesWithProposalRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _approvals_api_LoadAllOntologyBranchesWithProposalPageRequest;
}
export interface OntologyMetadataApprovalsServiceLoadAllOntologyBranchesWithProposalResultParams {
  response: LoadAllOntologyBranchesWithProposalAuditRecord;
}
export interface OntologyMetadataApprovalsServiceLoadOntologyBranchWithProposalRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _approvals_api_LoadOntologyBranchWithProposalRequest;
}
export interface OntologyMetadataApprovalsServiceLoadOntologyBranchWithProposalResultParams {
  response: LoadOntologyBranchWithProposalAuditRecord;
}
export interface OntologyMetadataApprovalsServiceModifyOntologyBranchRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _approvals_api_ModifyOntologyBranchRequest;
}
export interface OntologyMetadataApprovalsServiceModifyOntologyBranchResultParams {
  response: ModifyOntologyBranchWithProposalAuditRecord;
}
export type OntologyMetadataAuditEvent =
  | "EXPERIMENTAL_ACTION_TYPES_ORGS_SERVICE_SET_ORGANIZATIONS"
  | "EXPERIMENTAL_ACTION_TYPES_ORGS_SERVICE_GET_ORGANIZATIONS"
  | "ACTION_TYPES_SERVICE_LOAD_ACTION_TYPES"
  | "ACTION_TYPES_SERVICE_LOAD_ACTION_TYPES_VERSIONED"
  | "ACTION_TYPES_SERVICE_LOAD_ALL_ACTION_TYPES"
  | "ACTION_TYPES_SERVICE_MODIFY_ACTION_TYPES"
  | "ACTION_TYPES_SERVICE_LOAD_ALL_ACTION_TYPES_FROM_ONTOLOGY"
  | "ACTION_TYPES_SERVICE_PAGE_LOAD_ALL_ACTION_TYPES_FROM_ONTOLOGY"
  | "ACTION_TYPES_SERVICE_LOAD_ACTION_TYPES_FROM_ONTOLOGY"
  | "ACTION_TYPES_SERVICE_BATCH_GET_ENRICHED_ACTION_TYPE_METADATA"
  | "ONTOLOGY_METADATA_SERVICE_BULK_LOAD_ONTOLOGY_ENTITIES"
  | "ONTOLOGY_METADATA_SERVICE_BULK_LOAD_ONTOLOGY_ENTITIES_BY_DATASOURCES"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_MERGED_REBASE_STATE"
  | "ONTOLOGY_METADATA_SERVICE_GET_FEATURE_CONFIGURATIONS"
  | "ONTOLOGY_METADATA_SERVICE_GET_ACTION_TYPES_FOR_OBJECT_TYPE"
  | "ONTOLOGY_METADATA_SERVICE_GET_ACTION_TYPES_FOR_INTERFACE_TYPE"
  | "ONTOLOGY_METADATA_SERVICE_GET_MODIFICATION_HISTORY"
  | "ONTOLOGY_METADATA_SERVICE_GET_ENTITY_MODIFICATION_HISTORY"
  | "ONTOLOGY_METADATA_SERVICE_GET_ENTITY_MODIFICATION_HISTORY_V2"
  | "ONTOLOGY_METADATA_SERVICE_GET_OBJECT_TYPE_SEMANTIC_SEARCH_STATUS"
  | "ONTOLOGY_METADATA_SERVICE_GET_ONTOLOGY_RIDS_FOR_ONTOLOGY_ENTITIES"
  | "ONTOLOGY_METADATA_SERVICE_GET_ORGANIZATION_RIDS_FOR_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_GET_RELATIONS_FOR_OBJECT_TYPES"
  | "ONTOLOGY_METADATA_SERVICE_GET_LINK_TYPES_FOR_OBJECT_TYPES"
  | "ONTOLOGY_METADATA_SERVICE_GET_OBJECT_TYPES_FOR_SHARED_PROPERTY_TYPES"
  | "ONTOLOGY_METADATA_SERVICE_GET_OBJECT_TYPES_FOR_INTERFACE_TYPES"
  | "ONTOLOGY_METADATA_SERVICE_GET_ONTOLOGY_ENTITIES_FOR_TYPE_GROUPS"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ONTOLOGY_ENTITIES"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_OBJECT_TYPES_FROM_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_ONTOLOGIES"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_ONTOLOGY_ENTITIES"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_SHARED_PROPERTY_TYPES_FROM_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_INTERFACE_TYPES_FROM_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_TYPE_GROUPS_FROM_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ONTOLOGY_DATASOURCES"
  | "ONTOLOGY_METADATA_SERVICE_GET_ENTITY_DELEGATE_DATASET"
  | "ONTOLOGY_METADATA_SERVICE_GET_ENTITY_QUERYABLE_SOURCE"
  | "ONTOLOGY_METADATA_SERVICE_MODIFY_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_DRY_RUN_MODIFY_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_MODIFICATION"
  | "ONTOLOGT_METADATA_SERVICE_SYSTEM_ENTITY_METADATA_MODIFICATION"
  | "ONTOLOGY_METADATA_SERVICE_MODIFICATION_CHECK_UNIQUE_IDENTIFIERS"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_RULE_SETS"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_RULE_SETS"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_WORKFLOWS_FROM_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_CREATE_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_ONTOLOGIES_INTERNAL"
  | "ONTOLOGY_METADATA_SERVICE_UPDATE_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_DELETE_ONTOLOGY"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_OBJECT_TYPES"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_SEARCH_OBJECT_TYPES"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_SEARCH_ACTION_TYPES"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_SEARCH_INTERFACE_TYPES"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_SEARCH_SHARED_PROPERTY_TYPES"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_SEARCH_TYPE_GROUPS"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_SEARCH_LINK_TYPES"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_SEARCH_TITLE_IN_COMBINED_ENTITY_TYPE"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_REPORT_USAGE_METADATA"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_GET_USAGE"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_GET_USAGE_V2"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_GET_DEPRECATION_USAGE"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_GET_USAGE_SETTINGS_BY_ORGANIZATION"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_GET_USAGE_SETTINGS_BY_USER"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_SET_USAGE_SETTINGS_BY_ORGANIZATION"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_GET_ACTION_TYPE_USAGE"
  | "ONTOLOGY_METADATA_SERVICE_GET_ONTOLOGY_SUMMARY"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_ONTOLOGY_CREATE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_ONTOLOGY_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_ONTOLOGY_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_OBJECT_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_OBJECT_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_OBJECT_TYPE_PERMISSIONS_FOR_USERS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_LINK_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_LINK_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_LINK_TYPE_PERMISSIONS_FOR_USERS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_ACTION_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_ACTION_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_ACTION_TYPE_PERMISSIONS_FOR_USERS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_RULE_SET_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_WORKFLOW_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_SHARED_PROPERTY_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_SHARED_PROPERTY_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_INTERFACE_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_INTERFACE_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_TYPE_GROUP_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_UPDATE_ENTITY_ROLES"
  | "ONTOLOGY_PERMISSION_SERVICE_BULK_UPDATE_ENTITY_ROLES"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_EDITORS_FOR_OBJECT_TYPE"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_SUGGESTED_ROLES_FOR_OBJECT_TYPE"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_SUGGESTED_ROLES_FOR_OBJECT_TYPE_DATASOURCE"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_SUGGESTED_ROLES_FOR_LINK_TYPE"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_SUGGESTED_ROLES_FOR_LINK_TYPE_DATASOURCE"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_SUGGESTED_ROLES_FOR_ACTION_TYPE"
  | "ONTOLOGY_PERMISSION_SERVICE_MIGRATE_ENTITIES_TO_PROJECT"
  | "ONTOLOGY_PERMISSION_SERVICE_REVERT_PUBLIC_PROJECT_ENTITY"
  | "ONTOLOGY_PERMISSION_SERVICE_BULK_REVERT_PUBLIC_PROJECT_ENTITIES"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_ENTITY_MIGRATION_STATUS"
  | "ONTOLOGY_PROVENANCE_SERVICE_REGISTER_DEPENDENCY"
  | "ONTOLOGY_PROVENANCE_SERVICE_TAG_DEPENDENT"
  | "ONTOLOGY_PROVENANCE_SERVICE_GET_DEPENDENTS"
  | "ONTOLOGY_PROVENANCE_SERVICE_GET_DEPENDENTS_FOR_ONTOLOGY_ENTITY_IDENTIFIER"
  | "ONTOLOGY_PROVENANCE_SERVICE_BATCH_GET_DEPENDENTS_FOR_ONTOLOGY_ENTITY_IDENTIFIER"
  | "ONTOLOGY_PROVENANCE_SERVICE_GET_DEPENDENCIES"
  | "ONTOLOGY_PROVENANCE_SERVICE_GET_DEPENDENCIES_V2"
  | "ONTOLOGY_ASSOCIATION_METADATA_SERVICE_CREATE_ASSOCIATION"
  | "ONTOLOGY_ASSOCIATION_METADATA_SERVICE_LOAD_ONTOLOGY_ENTITY_ASSOCIATIONS"
  | "ONTOLOGY_ASSOCIATION_METADATA_SERVICE_LOAD_RESOURCE_ASSOCIATIONS"
  | "ONTOLOGY_ASSOCIATION_METADATA_SERVICE_UPDATE_ASSOCIATION"
  | "ONTOLOGY_ASSOCIATION_METADATA_SERVICE_DELETE_ASSOCIATIONS"
  | "ONTOLOGY_METADATA_APPROVALS_SERVICE_CREATE_ONTOLOGY_BRANCH"
  | "ONTOLOGY_METADATA_APPROVALS_SERVICE_LOAD_ALL_BRANCHES_WITH_PROPOSAL"
  | "ONTOLOGY_METADATA_APPROVALS_SERVICE_LOAD_BRANCH_WITH_PROPOSAL"
  | "ONTOLOGY_METADATA_APPROVALS_SERVICE_MODIFY_BRANCH_WITH_PROPOSAL"
  | "ONTOLOGY_ENTITY_METADATA_SERVICE_LOAD_ENTITY_METADATA"
  | "ONTOLOGY_ENTITY_METADATA_SERVICE_GET_STREAMING_PROFILE_CONFIGS"
  | "ONTOLOGY_SCHEMA_MIGRATION_SERVICE_LOAD_OBJECT_TYPE_SCHEMA_MIGRATIONS"
  | "ONTOLOGY_SCHEMA_MIGRATION_SERVICE_BULK_LOAD_OBJECT_TYPE_SCHEMA_MIGRATIONS";
export interface OntologyMetadataSearchServiceObjectTypeSearchRequestParams {
  request: _api_search_ObjectTypeSearchRequest;
}
export interface OntologyMetadataSearchServiceObjectTypeSearchResponseParams {
  record: ObjectTypeSearchAuditRecord;
}
export interface OntologyMetadataSearchServiceSearchActionTypesRequestParams {
  request: _api_search_ActionTypeSearchRequest;
}
export interface OntologyMetadataSearchServiceSearchActionTypesResponseParams {
  record: ActionTypeSearchAuditRecord;
}
export interface OntologyMetadataSearchServiceSearchInterfaceTypesRequestParams {
  request: _api_search_InterfaceTypeSearchRequest;
}
export interface OntologyMetadataSearchServiceSearchInterfaceTypesResponseParams {
  record: InterfaceTypeSearchAuditRecord;
}
export interface OntologyMetadataSearchServiceSearchLinkTypesRequestParams {
  record: _api_search_LinkTypeSearchRequest;
}
export interface OntologyMetadataSearchServiceSearchLinkTypesResponseParams {
  record: LinkTypeSearchAuditRecord;
}
export interface OntologyMetadataSearchServiceSearchObjectTypesRequestParams {
  request: _api_search_ObjectTypeSearchRequestV2;
}
export interface OntologyMetadataSearchServiceSearchObjectTypesResponseParams {
  record: ObjectTypeSearchAuditRecordV2;
}
export interface OntologyMetadataSearchServiceSearchSharedPropertyTypesRequestParams {
  request: _api_search_SharedPropertyTypeSearchRequest;
}
export interface OntologyMetadataSearchServiceSearchSharedPropertyTypesResponseParams {
  record: SharedPropertyTypeSearchAuditRecord;
}
export interface OntologyMetadataSearchServiceSearchTitleInCombinedEntityTypeRequestParams {
  record: _api_search_SearchTitleInCombinedEntityTypeRequest;
}
export interface OntologyMetadataSearchServiceSearchTitleInCombinedEntityTypeResponseParams {
  record: CombinedEntityTypeTitleSearchAuditRecord;
}
export interface OntologyMetadataSearchServiceSearchTypeGroupsRequestParams {
  request: _api_search_TypeGroupSearchRequest;
}
export interface OntologyMetadataSearchServiceSearchTypeGroupsResponseParams {
  record: TypeGroupSearchAuditRecord;
}
export interface OntologyMetadataServiceBulkLoadOntologyEntitiesByDatasourcesRequestParams {
  request: _api_OntologyBulkLoadEntitiesByDatasourcesRequest;
}
export interface OntologyMetadataServiceBulkLoadOntologyEntitiesByDatasourcesResultParams {
  record: OntologyBulkLoadEntitiesByDatasourcesAuditRecord;
}
export interface OntologyMetadataServiceBulkLoadOntologyEntitiesRequestParams {
  request: _api_OntologyBulkLoadEntitiesRequest;
}
export interface OntologyMetadataServiceBulkLoadOntologyEntitiesResultParams {
  record: OntologyBulkLoadEntitiesAuditRecord;
}
export interface OntologyMetadataServiceCreateOntologyRequestParams {
  request: _api_modification_OntologyCreateRequest;
}
export interface OntologyMetadataServiceCreateOntologyResultParams {
  response: _api_modification_OntologyCreateResponse;
}
export interface OntologyMetadataServiceDryRunModificationRequestParams {
  request: _api_modification_OntologyModificationDryRunRequest;
}
export interface OntologyMetadataServiceDryRunModificationResultParams {
  response: _api_modification_OntologyModificationDryRunResponse;
}
export interface OntologyMetadataServiceGetActionTypesForInterfaceTypeRequestParams {
  request: _api_GetActionTypesForInterfaceTypeRequest;
}
export interface OntologyMetadataServiceGetActionTypesForInterfaceTypesResultParams {
  response: _api_GetActionTypesForInterfaceTypeResponse;
}
export interface OntologyMetadataServiceGetActionTypesForObjectTypeRequestParams {
  request: _api_GetActionTypesForObjectTypeRequest;
}
export interface OntologyMetadataServiceGetActionTypesForObjectTypesResultParams {
  response: _api_GetActionTypesForObjectTypeResponse;
}
export interface OntologyMetadataServiceGetActionTypeUsageRequestParams {
  request: _api_usage_GetActionTypeUsageRequest;
}
export interface OntologyMetadataServiceGetActionTypeUsageResultParams {
  response: _api_usage_GetActionTypeUsageResponse;
}
export interface OntologyMetadataServiceGetDeprecationUsageRequestParams {
  request: _api_usage_GetDeprecationUsageRequest;
}
export interface OntologyMetadataServiceGetDeprecationUsageResultParams {
  response: _api_usage_GetDeprecationUsageResponse;
}
export interface OntologyMetadataServiceGetEntityDelegateDatasetRequestParams {
  request: _api_GetEntityDelegateDatasetRequest;
}
export interface OntologyMetadataServiceGetEntityDelegateDatasetResponseParams {
  response: _api_GetEntityDelegateDatasetResponse;
}
export interface OntologyMetadataServiceGetEntityModificationHistoryRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _api_modification_GetEntityModificationHistoryRequest;
}
export interface OntologyMetadataServiceGetEntityModificationHistoryResultParams {
  ontologyRid: _api_OntologyRid;
  response: _api_modification_GetEntityModificationHistoryResponse;
}
export interface OntologyMetadataServiceGetEntityModificationHistoryV2RequestParams {
  request: _api_modification_GetEntityModificationHistoryRequest;
}
export interface OntologyMetadataServiceGetEntityModificationHistoryV2ResultParams {
  response: _api_modification_GetEntityModificationHistoryResponse;
}
export interface OntologyMetadataServiceGetEntityQueryableSourceRequestParams {
  request: _api_GetEntityQueryableSourceRequest;
}
export interface OntologyMetadataServiceGetEntityQueryableSourceResponseParams {
  response: _api_GetEntityQueryableSourceResponse;
}
export interface OntologyMetadataServiceGetFeatureConfigurationsRequestParams {}
export interface OntologyMetadataServiceGetFeatureConfigurationsResponseParams {
  response: _api_GetFeatureConfigurationsResponse;
}
export interface OntologyMetadataServiceGetLinkTypesForObjectTypesRequestParams {
  request: _api_GetLinkTypesForObjectTypesRequest;
}
export interface OntologyMetadataServiceGetLinkTypesForObjectTypesResultParams {
  record: GetLinkTypesAuditRecord;
}
export interface OntologyMetadataServiceGetModificationHistoryRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _api_modification_GetModificationHistoryRequest;
}
export interface OntologyMetadataServiceGetModificationHistoryResultParams {
  ontologyRid: _api_OntologyRid;
  response: _api_modification_GetModificationHistoryResponse;
}
export interface OntologyMetadataServiceGetModifiedEntitiesRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _api_modification_GetModifiedEntitiesRequest;
}
export interface OntologyMetadataServiceGetModifiedEntitiesResponseParams {
  ontologyRid: _api_OntologyRid;
  response: _api_modification_GetModifiedEntitiesResponse;
}
export interface OntologyMetadataServiceGetObjectTypeSemanticSearchStatusRequestParams {}
export interface OntologyMetadataServiceGetObjectTypeSemanticSearchStatusResponseParams {
  response: _api_search_GetObjectTypeSemanticSearchStatusResponse;
}
export interface OntologyMetadataServiceGetObjectTypesForInterfaceTypesRequestParams {
  request: _api_GetObjectTypesForInterfaceTypesRequest;
}
export interface OntologyMetadataServiceGetObjectTypesForInterfaceTypesResultParams {
  response: _api_GetObjectTypesForInterfaceTypesResponse;
}
export interface OntologyMetadataServiceGetObjectTypesForSharedPropertyTypesRequestParams {
  request: _api_GetObjectTypesForSharedPropertyTypesRequest;
}
export interface OntologyMetadataServiceGetObjectTypesForSharedPropertyTypesResultParams {
  response: _api_GetObjectTypesForSharedPropertyTypesResponse;
}
export interface OntologyMetadataServiceGetObjectTypesForTypeGroupsRequestParams {
  request: _api_GetObjectTypesForTypeGroupsRequest;
}
export interface OntologyMetadataServiceGetObjectTypesForTypeGroupsResultParams {
  response: _api_GetObjectTypesForTypeGroupsResponse;
}
export interface OntologyMetadataServiceGetOntologyEntitiesForTypeGroupsRequestParams {
  request: _api_GetOntologyEntitiesForTypeGroupsRequest;
}
export interface OntologyMetadataServiceGetOntologyEntitiesForTypeGroupsResultParams {
  response: _api_GetOntologyEntitiesForTypeGroupsResponse;
}
export interface OntologyMetadataServiceGetOntologyRidsForEntitiesRequestParams {
  request: _api_OntologyRidsForEntitiesRequest;
}
export interface OntologyMetadataServiceGetOntologyRidsForEntitiesResultParams {
  response: _api_OntologyRidsForEntitiesResponse;
}
export interface OntologyMetadataServiceGetOntologySummaryRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _api_GetOntologySummaryRequest;
}
export interface OntologyMetadataServiceGetOntologySummaryResponseParams {
  response: _api_GetOntologySummaryResponse;
}
export interface OntologyMetadataServiceGetOrganizationRidsForOntologyResultParams {
  response: _api_OrganizationRidsForOntologyResponse;
}
export interface OntologyMetadataServiceGetRelationsForObjectTypesRequestParams {
  request: _api_GetRelationsForObjectTypesRequest;
}
export interface OntologyMetadataServiceGetRelationsForObjectTypesResultParams {
  record: OntologyLoadAuditRecord;
}
export interface OntologyMetadataServiceGetUsageRequestParams {
  request: _api_usage_GetUsageRequest;
}
export interface OntologyMetadataServiceGetUsageResultParams {
  response: _api_usage_GetUsageResponse;
}
export interface OntologyMetadataServiceGetUsageSettingsByOrganizationRequestParams {
  organizationRid: _api_OrganizationRid;
  request: _api_usage_GetUsageSettingsByOrganizationRequest;
}
export interface OntologyMetadataServiceGetUsageSettingsByOrganizationResultParams {
  response: _api_usage_GetUsageSettingsByOrganizationResponse;
}
export interface OntologyMetadataServiceGetUsageSettingsByUserRequestParams {
  request: _api_usage_GetUsageSettingsByUserRequest;
}
export interface OntologyMetadataServiceGetUsageSettingsByUserResultParams {
  response: _api_usage_GetUsageSettingsByUserResponse;
}
export interface OntologyMetadataServiceGetUsageV2RequestParams {
  request: _api_usage_GetUsageRequestV2;
}
export interface OntologyMetadataServiceGetUsageV2ResultParams {
  response: _api_usage_GetUsageResponseV2;
}
export interface OntologyMetadataServiceLoadAllInterfaceTypesFromOntologyRequestParams {
  request: _api_LoadAllInterfaceTypesPageRequest;
}
export interface OntologyMetadataServiceLoadAllInterfaceTypesFromOntologyResultParams {
  response: LoadAllInterfaceTypesFromOntologyAuditRecord;
}
export interface OntologyMetadataServiceLoadAllObjectTypesFromOntologyRequestParams {
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
  request: _api_LoadAllObjectTypesPageRequest;
}
export interface OntologyMetadataServiceLoadAllObjectTypesFromOntologyResultParams {
  record: LoadAllObjectTypesFromOntologyAuditRecord;
}
export interface OntologyMetadataServiceLoadAllOntologiesInternalRequestParams {
  request: _api_modification_LoadAllOntologiesInternalRequest;
}
export interface OntologyMetadataServiceLoadAllOntologiesInternalResultParams {
  response: _api_modification_LoadAllOntologiesInternalResponse;
}
export interface OntologyMetadataServiceLoadAllOntologiesRequestParams {
  request: _api_LoadAllOntologiesRequest;
}
export interface OntologyMetadataServiceLoadAllOntologiesResultParams {
  record: LoadAllOntologiesAuditRecord;
}
export interface OntologyMetadataServiceLoadAllOntologyEntitiesRequestParams {
  request: _api_OntologyLoadAllEntitiesRequest;
}
export interface OntologyMetadataServiceLoadAllOntologyEntitiesResultParams {
  record: OntologyLoadEntitiesAuditRecord;
}
export interface OntologyMetadataServiceLoadAllOntologyRequestParams {
  request: _api_OntologyLoadAllRequest;
}
export interface OntologyMetadataServiceLoadAllOntologyResultParams {
  record: OntologyLoadAllAuditRecord;
}
export interface OntologyMetadataServiceLoadAllRuleSetsRequestParams {
  request: _api_formatting_LoadAllRuleSetsRequest;
}
export interface OntologyMetadataServiceLoadAllSharedPropertyTypesFromOntologyRequestParams {
  request: _api_LoadAllSharedPropertyTypesPageRequest;
}
export interface OntologyMetadataServiceLoadAllSharedPropertyTypesFromOntologyResultParams {
  response: LoadAllSharedPropertyTypesFromOntologyAuditRecord;
}
export interface OntologyMetadataServiceLoadAllTypeGroupsFromOntologyRequestParams {
  request: _api_LoadAllTypeGroupsPageRequest;
}
export interface OntologyMetadataServiceLoadAllTypeGroupsFromOntologyResultParams {
  response: LoadAllTypeGroupsFromOntologyAuditRecord;
}
export interface OntologyMetadataServiceLoadAllWorkflowsPageRequestParams {
  request: _workflow_api_LoadAllWorkflowsPageRequest;
}
export interface OntologyMetadataServiceLoadMergedRebaseStateRequestParams {
  request: _api_LoadMergedRebaseStateRequest;
}
export interface OntologyMetadataServiceLoadMergedRebaseStateResultParams {
  record: OntologyBulkLoadEntitiesAuditRecord;
}
export interface OntologyMetadataServiceLoadOntologyDatasourcesRequestParams {
  request: _api_OntologyLoadDatasourcesRequest;
}
export interface OntologyMetadataServiceLoadOntologyDatasourcesResultParams {
  record: OntologyLoadDatasourcesAuditRecord;
}
export interface OntologyMetadataServiceLoadOntologyEntitiesRequestParams {
  request: _api_OntologyLoadEntitiesRequest;
}
export interface OntologyMetadataServiceLoadOntologyEntitiesResultParams {
  record: OntologyLoadEntitiesAuditRecord;
}
export interface OntologyMetadataServiceLoadOntologyRequestParams {
  request: _api_OntologyLoadRequest;
}
export interface OntologyMetadataServiceLoadOntologyResultParams {
  record: OntologyLoadAuditRecord;
}
export interface OntologyMetadataServiceLoadRuleSetsRequestParams {
  request: _api_formatting_LoadRuleSetsRequest;
}
export interface OntologyMetadataServiceLoadRuleSetsResultParams {
  record: LoadRuleSetsAuditRecord;
}
export interface OntologyMetadataServiceLoadRuleSetsV2RequestParams {
  request: _api_formatting_LoadRuleSetsRequestV2;
}
export interface OntologyMetadataServiceLoadWorkflowsPageResultParams {
  record: LoadWorkflowsAuditRecord;
}
export interface OntologyMetadataServiceModificationCheckExistingUniqueIdentifiersRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _api_modification_CheckExistingUniqueIdentifiersRequest;
}
export interface OntologyMetadataServiceModificationcheckExistingUniqueIdentifiersResultParams {
  response: _api_modification_CheckExistingUniqueIdentifiersResponse;
}
export interface OntologyMetadataServiceModificationRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _api_modification_OntologyModificationRequest;
}
export interface OntologyMetadataServiceModificationResultParams {
  response: _api_modification_OntologyModificationResponse;
}
export interface OntologyMetadataServiceModifyOntologyRequestParams {
  request: _api_OntologyModifyRequest;
}
export interface OntologyMetadataServiceModifyOntologyResultParams {
  response: _api_OntologyModifyResponse;
}
export interface OntologyMetadataServiceOntologyDeleteRequestParams {
  request: _api_modification_OntologyDeleteRequest;
}
export interface OntologyMetadataServiceOntologyDeleteResultParams {
  response: _api_modification_OntologyDeleteResponse;
}
export interface OntologyMetadataServiceOntologyUpdateRequestParams {
  request: _api_modification_OntologyUpdateRequest;
}
export interface OntologyMetadataServiceOntologyUpdateResultParams {
  response: _api_modification_OntologyUpdateResponse;
}
export interface OntologyMetadataServiceReportUsageMetadataRequestParams {
  request: _api_usage_ReportUsageMetadataRequest;
}
export interface OntologyMetadataServiceReportUsageMetadataResultParams {
  response: _api_usage_ReportUsageMetadataResponse;
}
export interface OntologyMetadataServiceSetUsageSettingsByOrganizationRequestParams {
  organizationRid: _api_OrganizationRid;
  request: _api_usage_SetUsageSettingsByOrganizationRequest;
}
export interface OntologyMetadataServiceSetUsageSettingsByOrganizationResultParams {
  response: _api_usage_SetUsageSettingsByOrganizationResponse;
}
export interface OntologyMetadataServiceSystemEntityMetadataModificationRequestParams {
  ontologyRid: _api_OntologyRid;
  request: _api_entitymetadata_SystemEntityMetadataModificationRequest;
}
export interface OntologyMetadataServiceSystemEntityMetadataModificationResultParams {
  response: _api_entitymetadata_SystemEntityMetadataModificationResponse;
}
export interface OntologyPermissionServiceBulkUpdateEntityRolesRequestParams {
  response: _api_permissions_BulkUpdateEntityRolesRequest;
}
export interface OntologyPermissionServiceBulkUpdateEntityRolesResultParams {
  response: _api_permissions_BulkUpdateEntityRolesResponse;
}
export interface OntologyPermissionServiceGetActionTypePermissionsRequestParams {
  request: _api_ActionTypeRid;
}
export interface OntologyPermissionServiceGetActionTypePermissionsResultParams {
  response: _api_permissions_GetActionTypePermissionsResponse;
}
export interface OntologyPermissionServiceGetBulkActionTypePermissionsForUsersRequestParams {
  request: _api_permissions_GetBulkActionTypePermissionsForUsersRequest;
}
export interface OntologyPermissionServiceGetBulkActionTypePermissionsForUsersResultParams {
  request: _api_permissions_GetBulkActionTypePermissionsForUsersResponse;
}
export interface OntologyPermissionServiceGetBulkActionTypePermissionsRequestParams {
  request: _api_permissions_GetBulkActionTypePermissionsRequest;
}
export interface OntologyPermissionServiceGetBulkActionTypePermissionsResultParams {
  request: _api_permissions_GetBulkActionTypePermissionsResponse;
}
export interface OntologyPermissionServiceGetBulkInterfaceTypePermissionsRequestParams {
  request: _api_permissions_GetBulkInterfaceTypePermissionsRequest;
}
export interface OntologyPermissionServiceGetBulkInterfaceTypePermissionsResultParams {
  request: _api_permissions_GetBulkInterfaceTypePermissionsResponse;
}
export interface OntologyPermissionServiceGetBulkLinkTypePermissionsForUsersRequestParams {
  request: _api_permissions_GetBulkLinkTypePermissionsForUsersRequest;
}
export interface OntologyPermissionServiceGetBulkLinkTypePermissionsForUsersResultParams {
  request: _api_permissions_GetBulkLinkTypePermissionsForUsersResponse;
}
export interface OntologyPermissionServiceGetBulkLinkTypePermissionsRequestParams {
  request: _api_permissions_GetBulkLinkTypePermissionsRequest;
}
export interface OntologyPermissionServiceGetBulkLinkTypePermissionsResultParams {
  request: _api_permissions_GetBulkLinkTypePermissionsResponse;
}
export interface OntologyPermissionServiceGetBulkObjectTypePermissionsForUsersRequestParams {
  request: _api_permissions_GetBulkObjectTypePermissionsForUsersRequest;
}
export interface OntologyPermissionServiceGetBulkObjectTypePermissionsForUsersResultParams {
  request: _api_permissions_GetBulkObjectTypePermissionsForUsersResponse;
}
export interface OntologyPermissionServiceGetBulkObjectTypePermissionsRequestParams {
  request: _api_permissions_GetBulkObjectTypePermissionsRequest;
}
export interface OntologyPermissionServiceGetBulkObjectTypePermissionsResultParams {
  request: _api_permissions_GetBulkObjectTypePermissionsResponse;
}
export interface OntologyPermissionServiceGetBulkOntologyPermissionsRequestParams {
  request: _api_permissions_GetBulkOntologyPermissionsRequest;
}
export interface OntologyPermissionServiceGetBulkOntologyPermissionsResultParams {
  response: _api_permissions_GetBulkOntologyPermissionsResponse;
}
export interface OntologyPermissionServiceGetBulkSharedPropertyTypePermissionsRequestParams {
  request: _api_permissions_GetBulkSharedPropertyTypePermissionsRequest;
}
export interface OntologyPermissionServiceGetBulkSharedPropertyTypePermissionsResultParams {
  request: _api_permissions_GetBulkSharedPropertyTypePermissionsResponse;
}
export interface OntologyPermissionServiceGetBulkTypeGroupPermissionsRequestParams {
  request: _api_permissions_GetBulkTypeGroupPermissionsRequest;
}
export interface OntologyPermissionServiceGetBulkTypeGroupPermissionsResultParams {
  request: _api_permissions_GetBulkTypeGroupPermissionsResponse;
}
export interface OntologyPermissionServiceGetCreateOntologyPermissionsRequestParams {}
export interface OntologyPermissionServiceGetCreateOntologyPermissionsResultParams {
  response: _api_permissions_GetCreateOntologyPermissionsResponse;
}
export interface OntologyPermissionServiceGetEditorsForObjectTypeRequestParams {
  request: _api_permissions_GetEditorsForObjectTypeRequest;
}
export interface OntologyPermissionServiceGetEditorsForObjectTypeResultParams {
  response: _api_permissions_GetEditorsForObjectTypeResponse;
}
export interface OntologyPermissionServiceGetInterfaceTypePermissionsRequestParams {
  request: _api_InterfaceTypeRid;
}
export interface OntologyPermissionServiceGetInterfaceTypePermissionsResultParams {
  response: _api_permissions_GetInterfaceTypePermissionsResponse;
}
export interface OntologyPermissionServiceGetLinkTypePermissionsRequestParams {
  request: _api_LinkTypeRid;
}
export interface OntologyPermissionServiceGetLinkTypePermissionsResultParams {
  response: _api_permissions_GetLinkTypePermissionsResponse;
}
export interface OntologyPermissionServiceGetObjectTypePermissionsRequestParams {
  request: _api_ObjectTypeRid;
}
export interface OntologyPermissionServiceGetObjectTypePermissionsResultParams {
  response: _api_permissions_GetObjectTypePermissionsResponse;
}
export interface OntologyPermissionServiceGetOntologyPermissionsRequestParams {
  branchRid?: _api_OntologyBranchRid | null | undefined;
  request: _api_OntologyRid;
}
export interface OntologyPermissionServiceGetOntologyPermissionsResultParams {
  response: _api_permissions_GetOntologyPermissionsResponse;
}
export interface OntologyPermissionServiceGetRuleSetPermissionsRequestParams {
  branchRid?: _api_OntologyBranchRid | null | undefined;
  request: _api_RuleSetRid;
}
export interface OntologyPermissionServiceGetRuleSetPermissionsResultParams {
  response: _api_permissions_GetRuleSetPermissionsResponse;
}
export interface OntologyPermissionServiceGetSharedPropertyTypePermissionsRequestParams {
  request: _api_SharedPropertyTypeRid;
}
export interface OntologyPermissionServiceGetSharedPropertyTypePermissionsResultParams {
  response: _api_permissions_GetSharedPropertyTypePermissionsResponse;
}
export interface OntologyPermissionServiceGetSuggestedRolesForActionTypeRequestParams {
  request: _api_ActionTypeRid;
}
export interface OntologyPermissionServiceGetSuggestedRolesForActionTypeResultParams {
  response: _api_permissions_GetSuggestedRolesResponse;
}
export interface OntologyPermissionServiceGetSuggestedRolesForLinkTypeDatasourceRequestParams {
  request: _api_LinkTypeRid;
}
export interface OntologyPermissionServiceGetSuggestedRolesForLinkTypeDatasourceResultParams {
  response: _api_permissions_GetSuggestedRolesDatasourceResponse;
}
export interface OntologyPermissionServiceGetSuggestedRolesForLinkTypeRequestParams {
  request: _api_LinkTypeRid;
}
export interface OntologyPermissionServiceGetSuggestedRolesForLinkTypeResultParams {
  response: _api_permissions_GetSuggestedRolesResponse;
}
export interface OntologyPermissionServiceGetSuggestedRolesForObjectTypeDatasourceRequestParams {
  request: _api_ObjectTypeRid;
}
export interface OntologyPermissionServiceGetSuggestedRolesForObjectTypeDatasourceResultParams {
  response: _api_permissions_GetSuggestedRolesDatasourceResponse;
}
export interface OntologyPermissionServiceGetSuggestedRolesForObjectTypeRequestParams {
  request: _api_ObjectTypeRid;
}
export interface OntologyPermissionServiceGetSuggestedRolesForObjectTypeResultParams {
  response: _api_permissions_GetSuggestedRolesResponse;
}
export interface OntologyPermissionServiceGetWorkflowPermissionsRequestParams {
  request: _workflow_api_WorkflowRid;
}
export interface OntologyPermissionServiceGetWorkflowPermissionsResultParams {
  response: _api_permissions_GetWorkflowPermissionsResponse;
}
export interface OntologyPermissionServiceUpdateEntityRolesRequestParams {
  response: _api_permissions_UpdateEntityRolesRequest;
}
export interface OntologyPermissionServiceUpdateEntityRolesResultParams {
  response: _api_permissions_UpdateEntityRolesResponse;
}
export interface OntologyProvenanceServiceBatchGetDependentsForOntologyEntityIdentifierRequestParams {
  request: _api_provenance_BatchGetTaggedDependentsForOntologyEntityIdentifierRequest;
}
export interface OntologyProvenanceServiceBatchGetDependentsOntologyEntityIdentifierResultParams {
  request: _api_provenance_BatchGetTaggedDependentsForOntologyEntityIdentifierResponse;
}
export interface OntologyProvenanceServiceGetDependenciesRequestParams {
  request: _api_provenance_GetDependenciesForTaggedDependentRequest;
}
export interface OntologyProvenanceServiceGetDependenciesResultParams {
  request: _api_provenance_GetDependenciesForTaggedDependentResponse;
}
export interface OntologyProvenanceServiceGetDependenciesV2RequestParams {
  request: _api_provenance_GetDependenciesForTaggedDependentRequestV2;
}
export interface OntologyProvenanceServiceGetDependenciesV2ResultParams {
  request: _api_provenance_GetDependenciesForTaggedDependentResponseV2;
}
export interface OntologyProvenanceServiceGetDependentsForOntologyEntityIdentifierRequestParams {
  request: _api_provenance_GetTaggedDependentsForOntologyEntityIdentifierRequest;
}
export interface OntologyProvenanceServiceGetDependentsOntologyEntityIdentifierResultParams {
  request: _api_provenance_GetTaggedDependentsForOntologyEntityIdentifierResponse;
}
export interface OntologyProvenanceServiceGetDependentsRequestParams {
  request: _api_provenance_GetTaggedDependentsForOntologyEntityRequest;
}
export interface OntologyProvenanceServiceGetDependentsResultParams {
  request: _api_provenance_GetTaggedDependentsForOntologyEntityResponse;
}
export interface OntologyProvenanceServiceRegisterDependencyRequestParams {
  request: _api_provenance_RegisterDependencyRequest;
}
export interface OntologyProvenanceServiceRegisterDependencyResultParams {
  request: _api_provenance_RegisterDependencyResponse;
}
export interface OntologyProvenanceServiceTagDependentRequestParams {
  request: _api_provenance_TagDependentRequest;
}
export interface OntologyProvenanceServiceTagDependentResponseParams {
  request: _api_provenance_TagDependentResponse;
}
export interface OntologySchemaMigrationServiceLoadObjectTypeSchemaMigrationsRequestParams {
  request: _api_schemamigrations_LoadObjectTypeSchemaMigrationsRequest;
}
export interface OntologySchemaMigrationServiceLoadObjectTypeSchemaMigrationsResponseParams {
  response: LoadObjectTypeSchemaMigrationsAuditRecord;
}
export interface RelationLoadAuditRecord {
  ontologyVersion: _api_OntologyVersion;
  relationId: _api_RelationId;
  relationRid: _api_RelationRid;
}
export interface RelationLoadAuditRecordWithoutVersion {
  relationId: _api_RelationId;
  relationRid: _api_RelationRid;
}
export interface SharedPropertyTypeLoadAuditRecord {
  ontologyVersion: _api_OntologyVersion;
  sharedPropertyTypeRid: _api_SharedPropertyTypeRid;
}
export interface SharedPropertyTypeSearchAuditRecord {
  sharedPropertyTypes: Array<SharedPropertyTypeSearchHitAuditRecord>;
}
export interface SharedPropertyTypeSearchHitAuditRecord {
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
  sharedPropertyTypeRid: _api_SharedPropertyTypeRid;
}
export interface TypeGroupLoadAuditRecord {
  ontologyVersion: _api_OntologyVersion;
  typeGroupRid: _api_TypeGroupRid;
}
export interface TypeGroupSearchAuditRecord {
  typeGroups: Array<TypeGroupSearchHitAuditRecord>;
}
export interface TypeGroupSearchHitAuditRecord {
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
  typeGroupRid: _api_TypeGroupRid;
}
export interface UpdatedActionTypeAuditRecord {
  actionTypeRid: _api_ActionTypeRid;
  version: _api_ActionTypeVersion;
}
