/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

export type { ActionLogMetadataModification } from "./ActionLogMetadataModification.mjs";
export type { ActionLogNotRequiredModification } from "./ActionLogNotRequiredModification.mjs";
export type { ActionLogRequiredModification } from "./ActionLogRequiredModification.mjs";
export type { ActionLogRequirednessModification } from "./ActionLogRequirednessModification.mjs";
export type { ActionTypeModification } from "./ActionTypeModification.mjs";
export type { ActivePropertyTypeStatusModification } from "./ActivePropertyTypeStatusModification.mjs";
export type { CheckExistingUniqueIdentifiersRequest } from "./CheckExistingUniqueIdentifiersRequest.mjs";
export type { CheckExistingUniqueIdentifiersResponse } from "./CheckExistingUniqueIdentifiersResponse.mjs";
export type { CompassFolderRid } from "./CompassFolderRid.mjs";
export type { CompassNamespaceRid } from "./CompassNamespaceRid.mjs";
export type { DataConstraintsModification } from "./DataConstraintsModification.mjs";
export type { DeprecatedPropertyTypeStatusModification } from "./DeprecatedPropertyTypeStatusModification.mjs";
export type { EditsResolutionStrategyModification } from "./EditsResolutionStrategyModification.mjs";
export type { EntityConfigModification } from "./EntityConfigModification.mjs";
export type { EntityModificationHistoryPageItem } from "./EntityModificationHistoryPageItem.mjs";
export type { EntityProvenanceModification } from "./EntityProvenanceModification.mjs";
export type { EntityProvenanceSourceModification } from "./EntityProvenanceSourceModification.mjs";
export type { EntityRid } from "./EntityRid.mjs";
export type { EventMetadataModification } from "./EventMetadataModification.mjs";
export type { ExperimentalPropertyTypeStatusModification } from "./ExperimentalPropertyTypeStatusModification.mjs";
export type { GetEntityModificationHistoryRequest } from "./GetEntityModificationHistoryRequest.mjs";
export type { GetEntityModificationHistoryResponse } from "./GetEntityModificationHistoryResponse.mjs";
export type { GetModificationHistoryRequest } from "./GetModificationHistoryRequest.mjs";
export type { GetModificationHistoryResponse } from "./GetModificationHistoryResponse.mjs";
export type { GetModifiedEntitiesRequest } from "./GetModifiedEntitiesRequest.mjs";
export type { GetModifiedEntitiesResponse } from "./GetModifiedEntitiesResponse.mjs";
export type { ImportSharedPropertyTypesRequest } from "./ImportSharedPropertyTypesRequest.mjs";
export type { ImportSharedPropertyTypesResponse } from "./ImportSharedPropertyTypesResponse.mjs";
export type { InlineActionTypeModification } from "./InlineActionTypeModification.mjs";
export type { InterfaceTypeModification } from "./InterfaceTypeModification.mjs";
export type { LinkDefinitionModification } from "./LinkDefinitionModification.mjs";
export type { LinkTypeCreate } from "./LinkTypeCreate.mjs";
export type { LinkTypeDelete } from "./LinkTypeDelete.mjs";
export type { LinkTypeEntityMetadataModifyRequest } from "./LinkTypeEntityMetadataModifyRequest.mjs";
export type { LinkTypeModification } from "./LinkTypeModification.mjs";
export type { LinkTypeModifyRequest } from "./LinkTypeModifyRequest.mjs";
export type { LinkTypeUpdate } from "./LinkTypeUpdate.mjs";
export type { LoadAllOntologiesInternalRequest } from "./LoadAllOntologiesInternalRequest.mjs";
export type { LoadAllOntologiesInternalResponse } from "./LoadAllOntologiesInternalResponse.mjs";
export type { ManyToManyLinkDefinitionModification } from "./ManyToManyLinkDefinitionModification.mjs";
export type { ManyToManyLinkTypeDatasetDatasourceModification } from "./ManyToManyLinkTypeDatasetDatasourceModification.mjs";
export type { ManyToManyLinkTypeDatasourceCreate } from "./ManyToManyLinkTypeDatasourceCreate.mjs";
export type { ManyToManyLinkTypeDatasourceDelete } from "./ManyToManyLinkTypeDatasourceDelete.mjs";
export type { ManyToManyLinkTypeDatasourceModificationDefinition } from "./ManyToManyLinkTypeDatasourceModificationDefinition.mjs";
export type { ManyToManyLinkTypeDatasourceModifyRequest } from "./ManyToManyLinkTypeDatasourceModifyRequest.mjs";
export type { ManyToManyLinkTypeDatasourceUpdate } from "./ManyToManyLinkTypeDatasourceUpdate.mjs";
export type { ManyToManyLinkTypeStreamDatasourceModification } from "./ManyToManyLinkTypeStreamDatasourceModification.mjs";
export type { MigrationConfigurationModification } from "./MigrationConfigurationModification.mjs";
export type { ModificationHistoryPageItem } from "./ModificationHistoryPageItem.mjs";
export type { ModificationHistoryPageItemSummary } from "./ModificationHistoryPageItemSummary.mjs";
export type { ModificationHistoryPageToken } from "./ModificationHistoryPageToken.mjs";
export type { ModificationType } from "./ModificationType.mjs";
export type { NoneEntityProvenance } from "./NoneEntityProvenance.mjs";
export type { ObjectStorageV1Modification } from "./ObjectStorageV1Modification.mjs";
export type { ObjectStorageV2Modification } from "./ObjectStorageV2Modification.mjs";
export type { ObjectTypeCreate } from "./ObjectTypeCreate.mjs";
export type { ObjectTypeDatasetDatasourceModification } from "./ObjectTypeDatasetDatasourceModification.mjs";
export type { ObjectTypeDatasetDatasourceV2Modification } from "./ObjectTypeDatasetDatasourceV2Modification.mjs";
export type { ObjectTypeDatasourceCreate } from "./ObjectTypeDatasourceCreate.mjs";
export type { ObjectTypeDatasourceDelete } from "./ObjectTypeDatasourceDelete.mjs";
export type { ObjectTypeDatasourceModificationDefinition } from "./ObjectTypeDatasourceModificationDefinition.mjs";
export type { ObjectTypeDatasourceModifyRequest } from "./ObjectTypeDatasourceModifyRequest.mjs";
export type { ObjectTypeDatasourceUpdate } from "./ObjectTypeDatasourceUpdate.mjs";
export type { ObjectTypeDelete } from "./ObjectTypeDelete.mjs";
export type { ObjectTypeEntityMetadataModifyRequest } from "./ObjectTypeEntityMetadataModifyRequest.mjs";
export type { ObjectTypeGeotimeSeriesDatasourceModification } from "./ObjectTypeGeotimeSeriesDatasourceModification.mjs";
export type { ObjectTypeMediaDatasourceModification } from "./ObjectTypeMediaDatasourceModification.mjs";
export type { ObjectTypeMediaSetViewDatasourceModification } from "./ObjectTypeMediaSetViewDatasourceModification.mjs";
export type { ObjectTypeModification } from "./ObjectTypeModification.mjs";
export type { ObjectTypeModifyRequest } from "./ObjectTypeModifyRequest.mjs";
export type { ObjectTypeRestrictedStreamDatasourceModification } from "./ObjectTypeRestrictedStreamDatasourceModification.mjs";
export type { ObjectTypeRestrictedViewDatasourceModification } from "./ObjectTypeRestrictedViewDatasourceModification.mjs";
export type { ObjectTypeRestrictedViewDatasourceV2Modification } from "./ObjectTypeRestrictedViewDatasourceV2Modification.mjs";
export type { ObjectTypeStreamDatasourceModification } from "./ObjectTypeStreamDatasourceModification.mjs";
export type { ObjectTypeTimeSeriesDatasourceModification } from "./ObjectTypeTimeSeriesDatasourceModification.mjs";
export type { ObjectTypeTraitsModification } from "./ObjectTypeTraitsModification.mjs";
export type { ObjectTypeUpdate } from "./ObjectTypeUpdate.mjs";
export type { OneToManyLinkDefinitionModification } from "./OneToManyLinkDefinitionModification.mjs";
export type { OntologyAdminConfig } from "./OntologyAdminConfig.mjs";
export type { OntologyCreateRequest } from "./OntologyCreateRequest.mjs";
export type { OntologyCreateResponse } from "./OntologyCreateResponse.mjs";
export type { OntologyDeleteRequest } from "./OntologyDeleteRequest.mjs";
export type { OntologyDeleteResponse } from "./OntologyDeleteResponse.mjs";
export type { OntologyDiff } from "./OntologyDiff.mjs";
export type { OntologyInformationInternal } from "./OntologyInformationInternal.mjs";
export type { OntologyModificationDescription } from "./OntologyModificationDescription.mjs";
export type { OntologyModificationRequest } from "./OntologyModificationRequest.mjs";
export type { OntologyModificationResponse } from "./OntologyModificationResponse.mjs";
export type { OntologyNamespace } from "./OntologyNamespace.mjs";
export type { OntologyProjectRid } from "./OntologyProjectRid.mjs";
export type { OntologyUpdateRequest } from "./OntologyUpdateRequest.mjs";
export type { OntologyUpdateResponse } from "./OntologyUpdateResponse.mjs";
export type { PartialPropertyTypeModification } from "./PartialPropertyTypeModification.mjs";
export type { PerOntologyUniqueIdentifier } from "./PerOntologyUniqueIdentifier.mjs";
export type { PropertyTypeModification } from "./PropertyTypeModification.mjs";
export type { PropertyTypeStatusModification } from "./PropertyTypeStatusModification.mjs";
export type { PutParameterRequestWithId } from "./PutParameterRequestWithId.mjs";
export type { PutSectionRequestWithId } from "./PutSectionRequestWithId.mjs";
export type { ReadOnlyV1V2Modification } from "./ReadOnlyV1V2Modification.mjs";
export type { SensorTraitModification } from "./SensorTraitModification.mjs";
export type { SharedPropertyTypeModification } from "./SharedPropertyTypeModification.mjs";
export type { StorageBackendModification } from "./StorageBackendModification.mjs";
export type { TimeSeriesMetadataModification } from "./TimeSeriesMetadataModification.mjs";
export type { TypeGroupModification } from "./TypeGroupModification.mjs";
export type { ValidationRuleModificationWithIdInRequest } from "./ValidationRuleModificationWithIdInRequest.mjs";
export type { ValueTypeReferenceModification } from "./ValueTypeReferenceModification.mjs";
export type { WorkflowObjectTypeTraitImplModification } from "./WorkflowObjectTypeTraitImplModification.mjs";
