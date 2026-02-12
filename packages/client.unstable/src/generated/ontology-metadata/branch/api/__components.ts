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

import type {
  ActionTypeRid as _api_ActionTypeRid,
  BasePropertyType as _api_BasePropertyType,
  BranchId as _api_BranchId,
  BuilderPipelineRid as _api_BuilderPipelineRid,
  ColumnName as _api_ColumnName,
  DataConstraints as _api_DataConstraints,
  DatasourceRid as _api_DatasourceRid,
  FoundryFieldType as _api_FoundryFieldType,
  GenericOntologyMetadataError as _api_GenericOntologyMetadataError,
  GeotimeSeriesIntegrationRid as _api_GeotimeSeriesIntegrationRid,
  GlobalBranchRid as _api_GlobalBranchRid,
  InterfaceLinkTypeRidOrIdInRequest as _api_InterfaceLinkTypeRidOrIdInRequest,
  InterfacePropertyTypeRidOrIdInRequest
    as _api_InterfacePropertyTypeRidOrIdInRequest,
  InterfacePropertyTypeType as _api_InterfacePropertyTypeType,
  InterfaceTypeRid as _api_InterfaceTypeRid,
  InterfaceTypeRidOrIdInRequest as _api_InterfaceTypeRidOrIdInRequest,
  LinkedEntityTypeRidOrIdInRequest as _api_LinkedEntityTypeRidOrIdInRequest,
  LinkTypeId as _api_LinkTypeId,
  LinkTypeRid as _api_LinkTypeRid,
  MarkingId as _api_MarkingId,
  MarkingType as _api_MarkingType,
  ObjectTypeFieldApiName as _api_ObjectTypeFieldApiName,
  ObjectTypeId as _api_ObjectTypeId,
  ObjectTypeRid as _api_ObjectTypeRid,
  OntologyBranchRid as _api_OntologyBranchRid,
  OntologyProposalRid as _api_OntologyProposalRid,
  OntologyRid as _api_OntologyRid,
  OntologyVersion as _api_OntologyVersion,
  OrganizationRid as _api_OrganizationRid,
  PropertyTypeId as _api_PropertyTypeId,
  PropertyTypeRid as _api_PropertyTypeRid,
  RestrictedViewRid as _api_RestrictedViewRid,
  RetentionConfig as _api_RetentionConfig,
  RuleSetRid as _api_RuleSetRid,
  SchemaVersion as _api_SchemaVersion,
  SharedPropertyTypeRid as _api_SharedPropertyTypeRid,
  SharedPropertyTypeRidOrIdInRequest as _api_SharedPropertyTypeRidOrIdInRequest,
  StructFieldRid as _api_StructFieldRid,
  TimeSeriesSyncRid as _api_TimeSeriesSyncRid,
  Type as _api_Type,
  TypeClass as _api_TypeClass,
  TypeGroupRid as _api_TypeGroupRid,
  UserId as _api_UserId,
  ValueTypeReference as _api_ValueTypeReference,
} from "../../api/__components.js";
import type {
  ManyToManyLinkTypeBranchIndexingConfiguration
    as _api_modification_ManyToManyLinkTypeBranchIndexingConfiguration,
  ModificationType as _api_modification_ModificationType,
  ObjectTypeBranchIndexingConfiguration
    as _api_modification_ObjectTypeBranchIndexingConfiguration,
} from "../../api/modification/__components.js";
import type { LinkTypeSide as _api_types_LinkTypeSide } from "../../api/types/__components.js";
import type { OntologyValidationError as _api_validation_OntologyValidationError } from "../../api/validation/__components.js";
import type { WorkflowRid as _workflow_api_WorkflowRid } from "../../workflow/api/__components.js";

/**
 * One or more property types referenced in a BaseFormatter definition do not exist.
 */
export interface BaseFormatterReferencedPropertiesDoNotExistError {
  missingPropertyTypeIds?: Array<_api_PropertyTypeId> | null | undefined;
  missingPropertyTypeRids?: Array<_api_PropertyTypeRid> | null | undefined;
  sourcePropertyTypeId?: _api_PropertyTypeId | null | undefined;
  sourcePropertyTypeRid?: _api_PropertyTypeRid | null | undefined;
}
export interface BaseValueTypeUsageError_mismatchPropertyType {
  type: "mismatchPropertyType";
  mismatchPropertyType: ValueTypeUsageMismatchPropertyTypeError;
}

export interface BaseValueTypeUsageError_mismatchStructField {
  type: "mismatchStructField";
  mismatchStructField: ValueTypeUsageMismatchStructFieldError;
}

export interface BaseValueTypeUsageError_missingStructField {
  type: "missingStructField";
  missingStructField: ValueTypeUsageMissingStructFieldError;
}

export interface BaseValueTypeUsageError_mismatchScaleOrPrecision {
  type: "mismatchScaleOrPrecision";
  mismatchScaleOrPrecision: ValueTypeUsageMismatchScaleOrPrecisionError;
}
/**
 * Shared validation errors for usage of value types across property types and shared property types.
 */
export type BaseValueTypeUsageError =
  | BaseValueTypeUsageError_mismatchPropertyType
  | BaseValueTypeUsageError_mismatchStructField
  | BaseValueTypeUsageError_missingStructField
  | BaseValueTypeUsageError_mismatchScaleOrPrecision;

/**
 * Merge conflicts have been detected between your current branch and the main branch. These conflicts must be
 * resolved before you can successfully complete the merge process.
 */
export interface BranchConflictsWithMain {
  conflictingEntitiesSummary: ConflictingEntitiesSummary;
  ontologyBranchRid: _api_OntologyBranchRid;
}
export interface BranchIndexingConfig_indexed {
  type: "indexed";
  indexed: IndexedBranchConfig;
}

export interface BranchIndexingConfig_nonIndexed {
  type: "nonIndexed";
  nonIndexed: NonIndexedBranchConfig;
}
export type BranchIndexingConfig =
  | BranchIndexingConfig_indexed
  | BranchIndexingConfig_nonIndexed;

export interface BranchLock {
  isLocked: boolean;
}
export interface BranchMergeStatus_mergable {
  type: "mergable";
  mergable: MergeableStatus;
}

export interface BranchMergeStatus_error {
  type: "error";
  error: ErrorStatus;
}
export type BranchMergeStatus =
  | BranchMergeStatus_mergable
  | BranchMergeStatus_error;

/**
 * Represents the status of a branch.
 * Inactive branches were branches that were open but were not modified for a specific timeout period (default
 * 14 days). Any indexed data on the branch is now deindexed. The branch can become open again via reactivating.
 * Open branches are the default state of a branch.
 * Merged branches are branches that had their modifications merged into the default branch of the ontology;
 * these branches cannot ever be modified or merged again.
 * Closed branches are branches that were manually closed. Closed branches are not reopenable and cannot
 * ever be modified or merged.
 */
export type BranchStatus = "INACTIVE" | "OPEN" | "MERGED" | "CLOSED";
export interface BranchType_builder {
  type: "builder";
  builder: BuilderServiceBranch;
}
/**
 * The service that is creating the branch
 */
export type BranchType = BranchType_builder;

/**
 * The service that is creating the branch
 */
export interface BuilderServiceBranch {
  builderPipelineRid: _api_BuilderPipelineRid;
}
export interface BulkLoadOntologyBranchEntry_branch {
  type: "branch";
  branch: _api_OntologyBranchRid;
}

export interface BulkLoadOntologyBranchEntry_proposal {
  type: "proposal";
  proposal: _api_OntologyProposalRid;
}

export interface BulkLoadOntologyBranchEntry_ontologyRidAndVersion {
  type: "ontologyRidAndVersion";
  ontologyRidAndVersion: OntologyRidAndVersion;
}
export type BulkLoadOntologyBranchEntry =
  | BulkLoadOntologyBranchEntry_branch
  | BulkLoadOntologyBranchEntry_proposal
  | BulkLoadOntologyBranchEntry_ontologyRidAndVersion;

export interface BulkLoadOntologyBranchesRequest {
  entries: Array<BulkLoadOntologyBranchEntry>;
}
export interface BulkLoadOntologyBranchesResponse {
  results: Array<BulkLoadOntologyBranchResult>;
}
export interface BulkLoadOntologyBranchResult {
  entry: BulkLoadOntologyBranchEntry;
  ontologyBranch: OntologyBranch;
  versionedBranchDetails: VersionedBranchDetails;
}
export interface ClosedStatusV2 {
}
/**
 * An error representing when the property of a many-to-many link type is backed by a column and that column is missing from the backing datasource.
 */
export interface ColumnMissingFromBackingDatasourceForLinkTypeError {
  linkType: _api_LinkTypeRid;
  propertyType: _api_PropertyTypeRid;
}
/**
 * An error representing when the property of an object type is backed by a column and that column is missing from the backing datasource.
 */
export interface ColumnMissingFromBackingDatasourceForObjectTypeError {
  objectType: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyType: _api_PropertyTypeRid;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
}
/**
 * Summary of the conflicting entities. Conflicting entities are calculated by finding the intersection of entities that are updated/deleted on a branch and entities that are updated/deleted on the default branch between the latestRebasedVersion and a target ontologyVersion.
 */
export interface ConflictingEntitiesSummary {
  actionTypes: Array<_api_ActionTypeRid>;
  interfaceTypes: Array<_api_InterfaceTypeRid>;
  linkTypeEntityMetadatas: Array<_api_LinkTypeRid>;
  linkTypes: Array<_api_LinkTypeRid>;
  objectTypeEntityMetadatas: Array<_api_ObjectTypeRid>;
  objectTypes: Array<_api_ObjectTypeRid>;
  objectTypeSchemaMigrations: Array<_api_ObjectTypeRid>;
  ruleSets: Array<_api_RuleSetRid>;
  sharedPropertyTypes: Array<_api_SharedPropertyTypeRid>;
  typeGroups: Array<_api_TypeGroupRid>;
}
/**
 * An interface property is fulfilled more than once for an interface and the multiple implementations are not
 * the same. When an interface and its super interface are both explicitly implemented by an object type, the
 * implementation for an inherited property on the interface must be the same as the implementation of the
 * property for the super interface. Additionally, the implementation of two child interfaces of the same super
 * interface must have the same implementation for any inherited properties.
 */
export interface ConflictingPropertyImplementationError {
  implementedInterfaceTypeRidsOrIdInRequests: Array<
    _api_InterfaceTypeRidOrIdInRequest
  >;
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeIds: Array<_api_PropertyTypeId>;
  sharedPropertyTypeRidOrIdInRequest: _api_SharedPropertyTypeRidOrIdInRequest;
}
/**
 * A type to represent OntologyBranch creation request.
 */
export interface CreateOntologyBranchRequest {
  createAtOntologyVersion?: _api_OntologyVersion | null | undefined;
  datasourceBranchId?: _api_BranchId | null | undefined;
  description: OntologyBranchDescription;
  displayName: OntologyBranchDisplayName;
  indexingConfig: BranchIndexingConfig;
}
/**
 * A type to represent ontology branch creation response
 */
export interface CreateOntologyBranchResponse {
  ontologyBranchRid: _api_OntologyBranchRid;
}
export interface CreateOntologyServiceBranchRequest {
  branchType: BranchType;
  createAtOntologyVersion?: _api_OntologyVersion | null | undefined;
  datasourceBranchId?: _api_BranchId | null | undefined;
  description: OntologyBranchDescription;
  displayName: OntologyBranchDisplayName;
  parentBranchRid?: _api_OntologyBranchRid | null | undefined;
}
export interface CreateOntologyServiceBranchResponse {
  ontologyBranch: OntologyBranch;
  ontologyBranchRid: _api_OntologyBranchRid;
}
export interface DatasourceModificationConstraintError_objectTypeDatasourceWithoutPrimaryKeyColumn {
  type: "objectTypeDatasourceWithoutPrimaryKeyColumn";
  objectTypeDatasourceWithoutPrimaryKeyColumn:
    ObjectTypeDatasourceWithoutPrimaryKeyColumnError;
}

export interface DatasourceModificationConstraintError_objectTypeWithUnmappedTitleProperty {
  type: "objectTypeWithUnmappedTitleProperty";
  objectTypeWithUnmappedTitleProperty: ObjectTypeWithUnmappedTitlePropertyError;
}

export interface DatasourceModificationConstraintError_objectTypeDatasourceColumnMappingMismatch {
  type: "objectTypeDatasourceColumnMappingMismatch";
  objectTypeDatasourceColumnMappingMismatch:
    ObjectTypeDatasourceColumnMappingMismatchError;
}

export interface DatasourceModificationConstraintError_notAllPropertyTypesAreMappedToDatasourceWithinObjectType {
  type: "notAllPropertyTypesAreMappedToDatasourceWithinObjectType";
  notAllPropertyTypesAreMappedToDatasourceWithinObjectType:
    NotAllPropertyTypesAreMappedToDatasourceWithinObjectType;
}

export interface DatasourceModificationConstraintError_manyToManyLinkTypeDatasourcePrimaryKeyMismatch {
  type: "manyToManyLinkTypeDatasourcePrimaryKeyMismatch";
  manyToManyLinkTypeDatasourcePrimaryKeyMismatch:
    ManyToManyLinkTypeDatasourcePrimaryKeyMismatchError;
}

export interface DatasourceModificationConstraintError_primaryKeyIsDerived {
  type: "primaryKeyIsDerived";
  primaryKeyIsDerived: PrimaryKeyIsDerivedError;
}

export interface DatasourceModificationConstraintError_linkTypeInDerivedPropertyDefinitionNotFoundOrDeleted {
  type: "linkTypeInDerivedPropertyDefinitionNotFoundOrDeleted";
  linkTypeInDerivedPropertyDefinitionNotFoundOrDeleted:
    LinkTypeInDerivedPropertyDefinitionNotFoundOrDeletedError;
}

export interface DatasourceModificationConstraintError_foreignPropertyTypeInDerivedPropertyDefinitionNotFound {
  type: "foreignPropertyTypeInDerivedPropertyDefinitionNotFound";
  foreignPropertyTypeInDerivedPropertyDefinitionNotFound:
    ForeignPropertyTypeInDerivedPropertyDefinitionNotFoundError;
}

export interface DatasourceModificationConstraintError_derivedPropertyTypeDependOnAnotherDerivedProperty {
  type: "derivedPropertyTypeDependOnAnotherDerivedProperty";
  derivedPropertyTypeDependOnAnotherDerivedProperty:
    DerivedPropertyTypeDependOnAnotherDerivedPropertyError;
}

export interface DatasourceModificationConstraintError_markingPropertiesMustBeBackedByDatasourceWithGranularPermissions {
  type: "markingPropertiesMustBeBackedByDatasourceWithGranularPermissions";
  markingPropertiesMustBeBackedByDatasourceWithGranularPermissions:
    MarkingPropertiesMustBeBackedByDatasourceWithGranularPermissionsError;
}

export interface DatasourceModificationConstraintError_markingPropertiesMustBeReferencedInGranularPolicy {
  type: "markingPropertiesMustBeReferencedInGranularPolicy";
  markingPropertiesMustBeReferencedInGranularPolicy:
    MarkingPropertiesMustBeReferencedInGranularPolicyError;
}

export interface DatasourceModificationConstraintError_markingPropertiesMustHaveAssociatedMarkingConstraints {
  type: "markingPropertiesMustHaveAssociatedMarkingConstraints";
  markingPropertiesMustHaveAssociatedMarkingConstraints:
    MarkingPropertiesMustHaveAssociatedMarkingConstraintsError;
}

export interface DatasourceModificationConstraintError_derivedPropertyBaseTypeChangedWhenObjectTypeIsNotModified {
  type: "derivedPropertyBaseTypeChangedWhenObjectTypeIsNotModified";
  derivedPropertyBaseTypeChangedWhenObjectTypeIsNotModified:
    DerivedPropertyBaseTypeChangedWhenObjectTypeIsNotModifiedError;
}

export interface DatasourceModificationConstraintError_derivedPropertyDefinitionDoesNotMatchSharedPropertyType {
  type: "derivedPropertyDefinitionDoesNotMatchSharedPropertyType";
  derivedPropertyDefinitionDoesNotMatchSharedPropertyType:
    DerivedPropertyDefinitionDoesNotMatchSharedPropertyTypeError;
}

export interface DatasourceModificationConstraintError_derivedPropertyLinkDefinitionInvalid {
  type: "derivedPropertyLinkDefinitionInvalid";
  derivedPropertyLinkDefinitionInvalid:
    DerivedPropertyLinkDefinitionInvalidError;
}

export interface DatasourceModificationConstraintError_derivedPropertyLinkDoesNotFormChain {
  type: "derivedPropertyLinkDoesNotFormChain";
  derivedPropertyLinkDoesNotFormChain: DerivedPropertyLinkDoesNotFormChainError;
}

export interface DatasourceModificationConstraintError_derivedPropertyLinkDefinitionCardinalityInvalid {
  type: "derivedPropertyLinkDefinitionCardinalityInvalid";
  derivedPropertyLinkDefinitionCardinalityInvalid:
    DerivedPropertyLinkDefinitionCardinalityInvalidError;
}

export interface DatasourceModificationConstraintError_derivedPropertyIncompatibleDefinitionAndForeignPropertyBaseType {
  type: "derivedPropertyIncompatibleDefinitionAndForeignPropertyBaseType";
  derivedPropertyIncompatibleDefinitionAndForeignPropertyBaseType:
    DerivedPropertyIncompatibleDefinitionAndForeignPropertyBaseTypeError;
}

export interface DatasourceModificationConstraintError_derivedPropertyMultiHopLinkIsEmpty {
  type: "derivedPropertyMultiHopLinkIsEmpty";
  derivedPropertyMultiHopLinkIsEmpty: DerivedPropertyMultiHopLinkIsEmptyError;
}

export interface DatasourceModificationConstraintError_derivedPropertyMultiHopLinkExceedsMaximumStepCount {
  type: "derivedPropertyMultiHopLinkExceedsMaximumStepCount";
  derivedPropertyMultiHopLinkExceedsMaximumStepCount:
    DerivedPropertyMultiHopLinkExceedsMaximumStepCountError;
}

export interface DatasourceModificationConstraintError_gpsPolicyColumnsFromRestrictedViewsAreMapped {
  type: "gpsPolicyColumnsFromRestrictedViewsAreMapped";
  gpsPolicyColumnsFromRestrictedViewsAreMapped:
    GpsPolicyColumnsFromRestrictedViewsAreMappedError;
}

export interface DatasourceModificationConstraintError_objectTypeDatasourceCannotHaveAssumedMarkingsUpdated {
  type: "objectTypeDatasourceCannotHaveAssumedMarkingsUpdated";
  objectTypeDatasourceCannotHaveAssumedMarkingsUpdated:
    ObjectTypeDatasourceCannotHaveAssumedMarkingsUpdatedError;
}

export interface DatasourceModificationConstraintError_objectTypeDatasourceCannotHaveDataSecurityUpdatedOnBranch {
  type: "objectTypeDatasourceCannotHaveDataSecurityUpdatedOnBranch";
  objectTypeDatasourceCannotHaveDataSecurityUpdatedOnBranch:
    ObjectTypeDatasourceCannotHaveDataSecurityUpdatedOnBranchError;
}

export interface DatasourceModificationConstraintError_objectTypeDatasourceWithInvalidRetentionTargetSize {
  type: "objectTypeDatasourceWithInvalidRetentionTargetSize";
  objectTypeDatasourceWithInvalidRetentionTargetSize:
    ObjectTypeDatasourceWithInvalidRetentionTargetSizeError;
}

export interface DatasourceModificationConstraintError_objectTypeWithStreamDatasourceCannotHaveMaterializations {
  type: "objectTypeWithStreamDatasourceCannotHaveMaterializations";
  objectTypeWithStreamDatasourceCannotHaveMaterializations:
    ObjectTypeWithStreamDatasourceCannotHaveMaterializationsError;
}
/**
 * A type representing validation errors associated with datasource modifications on a branch.
 */
export type DatasourceModificationConstraintError =
  | DatasourceModificationConstraintError_objectTypeDatasourceWithoutPrimaryKeyColumn
  | DatasourceModificationConstraintError_objectTypeWithUnmappedTitleProperty
  | DatasourceModificationConstraintError_objectTypeDatasourceColumnMappingMismatch
  | DatasourceModificationConstraintError_notAllPropertyTypesAreMappedToDatasourceWithinObjectType
  | DatasourceModificationConstraintError_manyToManyLinkTypeDatasourcePrimaryKeyMismatch
  | DatasourceModificationConstraintError_primaryKeyIsDerived
  | DatasourceModificationConstraintError_linkTypeInDerivedPropertyDefinitionNotFoundOrDeleted
  | DatasourceModificationConstraintError_foreignPropertyTypeInDerivedPropertyDefinitionNotFound
  | DatasourceModificationConstraintError_derivedPropertyTypeDependOnAnotherDerivedProperty
  | DatasourceModificationConstraintError_markingPropertiesMustBeBackedByDatasourceWithGranularPermissions
  | DatasourceModificationConstraintError_markingPropertiesMustBeReferencedInGranularPolicy
  | DatasourceModificationConstraintError_markingPropertiesMustHaveAssociatedMarkingConstraints
  | DatasourceModificationConstraintError_derivedPropertyBaseTypeChangedWhenObjectTypeIsNotModified
  | DatasourceModificationConstraintError_derivedPropertyDefinitionDoesNotMatchSharedPropertyType
  | DatasourceModificationConstraintError_derivedPropertyLinkDefinitionInvalid
  | DatasourceModificationConstraintError_derivedPropertyLinkDoesNotFormChain
  | DatasourceModificationConstraintError_derivedPropertyLinkDefinitionCardinalityInvalid
  | DatasourceModificationConstraintError_derivedPropertyIncompatibleDefinitionAndForeignPropertyBaseType
  | DatasourceModificationConstraintError_derivedPropertyMultiHopLinkIsEmpty
  | DatasourceModificationConstraintError_derivedPropertyMultiHopLinkExceedsMaximumStepCount
  | DatasourceModificationConstraintError_gpsPolicyColumnsFromRestrictedViewsAreMapped
  | DatasourceModificationConstraintError_objectTypeDatasourceCannotHaveAssumedMarkingsUpdated
  | DatasourceModificationConstraintError_objectTypeDatasourceCannotHaveDataSecurityUpdatedOnBranch
  | DatasourceModificationConstraintError_objectTypeDatasourceWithInvalidRetentionTargetSize
  | DatasourceModificationConstraintError_objectTypeWithStreamDatasourceCannotHaveMaterializations;

export interface DefaultOntologyBranchDetails {
}
/**
 * The derived property's base type has changed, either because the type it is deriving from has changed, or
 * because the derived property definition has changed. However the object type it belongs to is not part
 * of the modification, so this change is not allowed.
 *
 * The object type must be modified in the same request for it to accept the new derived property base type.
 * A no-op modification suffices.
 */
export interface DerivedPropertyBaseTypeChangedWhenObjectTypeIsNotModifiedError {
  newDerivedPropertyBaseType: _api_BasePropertyType;
  objectTypeRid: _api_ObjectTypeRid;
  previousBaseType: _api_BasePropertyType;
  propertyTypeRid: _api_PropertyTypeRid;
}
/**
 * The derived properties definition backs a shared property type, but its definition does not
 * match the shared property type definition.
 */
export interface DerivedPropertyDefinitionDoesNotMatchSharedPropertyTypeError {
  derivedPropertyTypeBaseType: _api_BasePropertyType;
  objectTypeRid: _api_ObjectTypeRid;
  propertyTypeRid: _api_PropertyTypeRid;
  sharedPropertyTypeBaseType: _api_BasePropertyType;
}
/**
 * The type of the foreign property type that the derived property definition is deriving from is not
 * compatible with the derived property definition. For example, if the definition is "average", the
 * foreign property type must be of a numeric base type.
 */
export interface DerivedPropertyIncompatibleDefinitionAndForeignPropertyBaseTypeError {
  foreignObjectTypeRid: _api_ObjectTypeRid;
  foreignPropertyTypeBaseType: _api_BasePropertyType;
  foreignPropertyTypeRequirement: string;
  foreignPropertyTypeRid: _api_PropertyTypeRid;
  objectTypeRid: _api_ObjectTypeRid;
  propertyTypeRid: _api_PropertyTypeRid;
}
/**
 * The link type in the derived property definition is not valid for the derived property definition.
 * For example, aggregation must be performed on a "many" side of a link, and linked property
 * must be on an "one" side.
 */
export interface DerivedPropertyLinkDefinitionCardinalityInvalidError {
  linkTypeId?: _api_LinkTypeId | null | undefined;
  linkTypeRid: _api_LinkTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid: _api_ObjectTypeRid;
}
/**
 * The link definition in the derived property definition is not compatible with the object type that the
 * derived property definition belongs to. The link type specified must link the object type, and if a
 * link type side is specified, it must be the opposite side from the current object type's side. The
 * "source" side is always the side linking with the primary key.
 */
export interface DerivedPropertyLinkDefinitionInvalidError {
  linkTypeRid: _api_LinkTypeRid;
  objectTypeRid: _api_ObjectTypeRid;
}
/**
 * The link definition(s) in the derived property definition are not compatible with the object type that the
 * derived property definition belongs to. For a LinkTypeLink, the provided LinkDefinition must link the object
 * type, and if a link type side is specified, it must be the opposite side from the current object type's side.
 * The "source" side is always the side linking with the primary key. For a MultiHopLink, each provided
 * LinkDefinition must fulfill the previous conditions, except the current object type should switch to the
 * `other` linked object type after each link.
 */
export interface DerivedPropertyLinkDoesNotFormChainError {
  linkTypeId?: _api_LinkTypeId | null | undefined;
  linkTypeRid?: _api_LinkTypeRid | null | undefined;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
}
/**
 * Multi-hop link derived properties cannot specify more steps than the allowed maximum number of steps.
 */
export interface DerivedPropertyMultiHopLinkExceedsMaximumStepCountError {
  maxStepCount: number;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
  propertyTypeIds: Array<_api_PropertyTypeId>;
  propertyTypeRids: Array<_api_PropertyTypeRid>;
}
/**
 * Multi-hop link derived properties must specify at least one step.
 */
export interface DerivedPropertyMultiHopLinkIsEmptyError {
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
  propertyTypeIds: Array<_api_PropertyTypeId>;
}
/**
 * A derived property type is deriving from another derived property. This is not allowed.
 */
export interface DerivedPropertyTypeDependOnAnotherDerivedPropertyError {
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid?: _api_PropertyTypeRid | null | undefined;
}
export interface DiscardChangesErrorStatus {
  errors: Array<_api_validation_OntologyValidationError>;
}
/**
 * Request to discard changes made to the specified entities on a branch.
 */
export interface DiscardChangesRequest {
  actionTypeRids: Array<_api_ActionTypeRid>;
  expectedOntologyVersion?: _api_OntologyVersion | null | undefined;
  interfaceTypeRids: Array<_api_InterfaceTypeRid>;
  linkTypeDatasourceRids: Array<_api_DatasourceRid>;
  linkTypeRids: Array<_api_LinkTypeRid>;
  objectTypeDatasourceRids: Array<_api_DatasourceRid>;
  objectTypeRids: Array<_api_ObjectTypeRid>;
  ruleSetRids: Array<_api_RuleSetRid>;
  sharedPropertyTypeRids: Array<_api_SharedPropertyTypeRid>;
  typeGroupRids: Array<_api_TypeGroupRid>;
  workflowRids: Array<_workflow_api_WorkflowRid>;
}
/**
 * Return type for the discardChangesOnBranch endpoint.
 */
export interface DiscardChangesResponse {
  ontologyVersion: _api_OntologyVersion;
}
export interface DiscardChangesResponseV2_success {
  type: "success";
  success: DiscardChangesSuccessStatus;
}

export interface DiscardChangesResponseV2_failure {
  type: "failure";
  failure: DiscardChangesErrorStatus;
}
/**
 * Return type for the discardChangesOnBranchV2 endpoint.
 */
export type DiscardChangesResponseV2 =
  | DiscardChangesResponseV2_success
  | DiscardChangesResponseV2_failure;

export interface DiscardChangesSuccessStatus {
  ontologyVersion: _api_OntologyVersion;
}
export interface EntityIndexingConfiguration {
  manyToManyLinkTypes: Record<
    _api_LinkTypeRid,
    _api_modification_ManyToManyLinkTypeBranchIndexingConfiguration
  >;
  objectTypes: Record<
    _api_ObjectTypeRid,
    _api_modification_ObjectTypeBranchIndexingConfiguration
  >;
}
export interface ErrorStatus {
  errors: Array<ValidationError>;
  ontologyErrors: OntologyErrors;
  resourceErrors: ResourceErrors;
}
export interface FindConflictsRequest {
  ontologyVersion: _api_OntologyVersion;
}
export interface FindConflictsResponse {
  conflictingEntities: ConflictingEntitiesSummary;
}
export interface ForeignKeyConstraintError_linkTypeReferencesInvalidPrimaryKey {
  type: "linkTypeReferencesInvalidPrimaryKey";
  linkTypeReferencesInvalidPrimaryKey: LinkTypeReferencesInvalidPrimaryKeyError;
}

export interface ForeignKeyConstraintError_linkTypeReferencesInvalidForeignKey {
  type: "linkTypeReferencesInvalidForeignKey";
  linkTypeReferencesInvalidForeignKey: LinkTypeReferencesInvalidForeignKeyError;
}

export interface ForeignKeyConstraintError_primaryAndForeignKeyTypeMismatch {
  type: "primaryAndForeignKeyTypeMismatch";
  primaryAndForeignKeyTypeMismatch: PrimaryAndForeignKeyTypeMismatchError;
}

export interface ForeignKeyConstraintError_invalidForeignKeyType {
  type: "invalidForeignKeyType";
  invalidForeignKeyType: InvalidForeignKeyTypeError;
}

export interface ForeignKeyConstraintError_invalidDerivedForeignKey {
  type: "invalidDerivedForeignKey";
  invalidDerivedForeignKey: InvalidDerivedForeignKeyError;
}
/**
 * A type representing the Validation Errors associated with link type primary/foreign key validation.
 */
export type ForeignKeyConstraintError =
  | ForeignKeyConstraintError_linkTypeReferencesInvalidPrimaryKey
  | ForeignKeyConstraintError_linkTypeReferencesInvalidForeignKey
  | ForeignKeyConstraintError_primaryAndForeignKeyTypeMismatch
  | ForeignKeyConstraintError_invalidForeignKeyType
  | ForeignKeyConstraintError_invalidDerivedForeignKey;

/**
 * The derived properties definition is referring to a foreign property type that does not exist or is deleted.
 */
export interface ForeignPropertyTypeInDerivedPropertyDefinitionNotFoundError {
  foreignObjectType: _api_ObjectTypeRid;
  foreignObjectTypeId?: _api_ObjectTypeId | null | undefined;
  foreignPropertyTypeId?: _api_PropertyTypeId | null | undefined;
  foreignPropertyTypeRid?: _api_PropertyTypeRid | null | undefined;
  objectType: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid?: _api_PropertyTypeRid | null | undefined;
}
export interface FoundrySchemaConstraintError_columnMissingFromBackingDatasourceForObjectType {
  type: "columnMissingFromBackingDatasourceForObjectType";
  columnMissingFromBackingDatasourceForObjectType:
    ColumnMissingFromBackingDatasourceForObjectTypeError;
}

export interface FoundrySchemaConstraintError_columnMissingFromBackingDatasourceForLinkType {
  type: "columnMissingFromBackingDatasourceForLinkType";
  columnMissingFromBackingDatasourceForLinkType:
    ColumnMissingFromBackingDatasourceForLinkTypeError;
}

export interface FoundrySchemaConstraintError_structColumnFieldMissingFromBackingDatasourceForObjectType {
  type: "structColumnFieldMissingFromBackingDatasourceForObjectType";
  structColumnFieldMissingFromBackingDatasourceForObjectType:
    StructColumnFieldMissingFromBackingDatasourceForObjectTypeError;
}

export interface FoundrySchemaConstraintError_objectTypePropertyIncompatibleBackingColumnType {
  type: "objectTypePropertyIncompatibleBackingColumnType";
  objectTypePropertyIncompatibleBackingColumnType:
    ObjectTypePropertyIncompatibleBackingColumnTypeError;
}

export interface FoundrySchemaConstraintError_objectTypePropertyIncompatibleDecimalColumnType {
  type: "objectTypePropertyIncompatibleDecimalColumnType";
  objectTypePropertyIncompatibleDecimalColumnType:
    ObjectTypePropertyIncompatibleDecimalColumnTypeError;
}

export interface FoundrySchemaConstraintError_linkTypePropertyIncompatibleBackingColumnType {
  type: "linkTypePropertyIncompatibleBackingColumnType";
  linkTypePropertyIncompatibleBackingColumnType:
    LinkTypePropertyIncompatibleBackingColumnTypeError;
}

export interface FoundrySchemaConstraintError_linkTypePropertiesReferenceSameColumn {
  type: "linkTypePropertiesReferenceSameColumn";
  linkTypePropertiesReferenceSameColumn:
    LinkTypePropertiesReferenceSameColumnError;
}

export interface FoundrySchemaConstraintError_schemaForObjectTypeDatasourceNotFound {
  type: "schemaForObjectTypeDatasourceNotFound";
  schemaForObjectTypeDatasourceNotFound:
    SchemaForObjectTypeDatasourceNotFoundError;
}

export interface FoundrySchemaConstraintError_schemaForLinkTypeDatasourceNotFound {
  type: "schemaForLinkTypeDatasourceNotFound";
  schemaForLinkTypeDatasourceNotFound: SchemaForLinkTypeDatasourceNotFoundError;
}
/**
 * A type representing the Validation Errors associated with Foundry Schema validation.
 */
export type FoundrySchemaConstraintError =
  | FoundrySchemaConstraintError_columnMissingFromBackingDatasourceForObjectType
  | FoundrySchemaConstraintError_columnMissingFromBackingDatasourceForLinkType
  | FoundrySchemaConstraintError_structColumnFieldMissingFromBackingDatasourceForObjectType
  | FoundrySchemaConstraintError_objectTypePropertyIncompatibleBackingColumnType
  | FoundrySchemaConstraintError_objectTypePropertyIncompatibleDecimalColumnType
  | FoundrySchemaConstraintError_linkTypePropertyIncompatibleBackingColumnType
  | FoundrySchemaConstraintError_linkTypePropertiesReferenceSameColumn
  | FoundrySchemaConstraintError_schemaForObjectTypeDatasourceNotFound
  | FoundrySchemaConstraintError_schemaForLinkTypeDatasourceNotFound;

/**
 * An error representing when a geotime series datasource references properties that do not exist on the object type.
 */
export interface GeotimeSeriesDatasourceDoesNotReferenceExistingPropertiesError {
  geotimeSeriesIntegrationRid: _api_GeotimeSeriesIntegrationRid;
  nonExistentPropertyTypeIds: Array<_api_PropertyTypeId>;
  objectType: _api_ObjectTypeRid;
}
/**
 * An error representing when a geotime series datasource references non-GTSR properties.
 */
export interface GeotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferencePropertiesError {
  geotimeSeriesIntegrationRid: _api_GeotimeSeriesIntegrationRid;
  nonGeotimeSeriesReferenceIds: Array<_api_PropertyTypeId>;
  nonGeotimeSeriesReferenceRids: Array<_api_PropertyTypeRid>;
  objectType: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
}
export interface GeotimeSeriesReferencePropertyTypeConstraintError_geotimeSeriesReferencePropertyTypeHasNoDatasources {
  type: "geotimeSeriesReferencePropertyTypeHasNoDatasources";
  geotimeSeriesReferencePropertyTypeHasNoDatasources:
    GeotimeSeriesReferencePropertyTypeHasNoDatasourcesError;
}

export interface GeotimeSeriesReferencePropertyTypeConstraintError_geotimeSeriesDatasourceDoesNotReferenceExistingProperties {
  type: "geotimeSeriesDatasourceDoesNotReferenceExistingProperties";
  geotimeSeriesDatasourceDoesNotReferenceExistingProperties:
    GeotimeSeriesDatasourceDoesNotReferenceExistingPropertiesError;
}

export interface GeotimeSeriesReferencePropertyTypeConstraintError_geotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferenceProperties {
  type:
    "geotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferenceProperties";
  geotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferenceProperties:
    GeotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferencePropertiesError;
}
/**
 * A type representing validation errors associated with geotime series reference property type validation.
 */
export type GeotimeSeriesReferencePropertyTypeConstraintError =
  | GeotimeSeriesReferencePropertyTypeConstraintError_geotimeSeriesReferencePropertyTypeHasNoDatasources
  | GeotimeSeriesReferencePropertyTypeConstraintError_geotimeSeriesDatasourceDoesNotReferenceExistingProperties
  | GeotimeSeriesReferencePropertyTypeConstraintError_geotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferenceProperties;

/**
 * An error representing when geotime series reference properties are not referenced by any datasources.
 */
export interface GeotimeSeriesReferencePropertyTypeHasNoDatasourcesError {
  objectType: _api_ObjectTypeRid;
  propertyType: _api_PropertyTypeRid;
}
/**
 * The restricted view backing the object has a policy which references the column name of a column
 * which is not mapped to any property of the object.
 */
export interface GpsPolicyColumnsFromRestrictedViewsAreMappedError {
  objectTypeRid: _api_ObjectTypeRid;
  restrictedViewRidToMissingColumnNames: Record<
    _api_RestrictedViewRid,
    Array<_api_ColumnName>
  >;
}
/**
 * An interface link type constraint is not fulfilled because the implementing link type does not reference the
 * object type implementing the interface.
 */
export interface ImplementingLinkTypeDoesNotReferenceObjectTypeError {
  interfaceLinkTypeRidOrIdInRequest: _api_InterfaceLinkTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  linkTypeId?: _api_LinkTypeId | null | undefined;
  linkTypeRid?: _api_LinkTypeRid | null | undefined;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
}
/**
 * An interface link type constraint is not fulfilled because the declared link type side does not match the
 * link definition's type.
 */
export interface ImplementingLinkTypeSideDoesNotMatchLinkDefinitionTypeError {
  interfaceLinkTypeRidOrIdInRequest: _api_InterfaceLinkTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  linkTypeId?: _api_LinkTypeId | null | undefined;
  linkTypeRid?: _api_LinkTypeRid | null | undefined;
  linkTypeSide: _api_types_LinkTypeSide;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
}
/**
 * An interface link type constraint is not fulfilled because the implementing link type is self-referential and
 * a link type side was not specified in the implementation.
 */
export interface ImplementingLinkTypeSideIsAmbiguousError {
  interfaceLinkTypeRidOrIdInRequest: _api_InterfaceLinkTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  linkTypeId?: _api_LinkTypeId | null | undefined;
  linkTypeRid?: _api_LinkTypeRid | null | undefined;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
}
/**
 * An interface link type constraint is not fulfilled because the object type is not connected to the end of the
 * implementing link type specified in the link type side.
 */
export interface ImplementingLinkTypeSideIsIncorrectError {
  interfaceLinkTypeRidOrIdInRequest: _api_InterfaceLinkTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  linkTypeId?: _api_LinkTypeId | null | undefined;
  linkTypeRid?: _api_LinkTypeRid | null | undefined;
  linkTypeSide: _api_types_LinkTypeSide;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
}
/**
 * An object type implements multiple interfaces and explicitly provides some property mappings for some
 * interfaces but not for others. It is required to explicitly provide property mappings for all interfaces or
 * for none.
 */
export interface ImplicitAndExplicitPropertyImplementationError {
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
}
/**
 * Indicates that all modified entities on the ontology branch should be indexed on the branch and that these
 * indexes should remain for the full lifetime of the branch. Any entities that have not been modified on the
 * branch will return data from the master branch.
 */
export interface IndexedBranchConfig {
  entityConfig?: EntityIndexingConfiguration | null | undefined;
}
export interface InterfaceImplementationError_missingSharedProperty {
  type: "missingSharedProperty";
  missingSharedProperty: MissingSharedPropertyError;
}

export interface InterfaceImplementationError_missingInterfacePropertyImplementation {
  type: "missingInterfacePropertyImplementation";
  missingInterfacePropertyImplementation:
    MissingInterfacePropertyImplementation;
}

export interface InterfaceImplementationError_invalidPropertyImplementation {
  type: "invalidPropertyImplementation";
  invalidPropertyImplementation: InvalidPropertyImplementationError;
}

export interface InterfaceImplementationError_conflictingPropertyImplementation {
  type: "conflictingPropertyImplementation";
  conflictingPropertyImplementation: ConflictingPropertyImplementationError;
}

export interface InterfaceImplementationError_implicitAndExplicitPropertyImplementation {
  type: "implicitAndExplicitPropertyImplementation";
  implicitAndExplicitPropertyImplementation:
    ImplicitAndExplicitPropertyImplementationError;
}

export interface InterfaceImplementationError_objectAndInterfacePropertyTypesConflictingApiNames {
  type: "objectAndInterfacePropertyTypesConflictingApiNames";
  objectAndInterfacePropertyTypesConflictingApiNames:
    ObjectAndInterfacePropertyTypesConflictingApiNamesError;
}

export interface InterfaceImplementationError_interfaceLinkNotFound {
  type: "interfaceLinkNotFound";
  interfaceLinkNotFound: InterfaceLinkNotFoundError;
}

export interface InterfaceImplementationError_invalidConflictingDefinitionsImplementingInterfaceLinkType {
  type: "invalidConflictingDefinitionsImplementingInterfaceLinkType";
  invalidConflictingDefinitionsImplementingInterfaceLinkType:
    InvalidConflictingDefinitionsImplementingInterfaceLinkTypeError;
}

export interface InterfaceImplementationError_requiredInterfaceLinkTypeNotImplemented {
  type: "requiredInterfaceLinkTypeNotImplemented";
  requiredInterfaceLinkTypeNotImplemented:
    RequiredInterfaceLinkTypeNotImplementedError;
}

export interface InterfaceImplementationError_interfaceLinkTypeImplementedTooOften {
  type: "interfaceLinkTypeImplementedTooOften";
  interfaceLinkTypeImplementedTooOften:
    InterfaceLinkTypeImplementedTooOftenError;
}

export interface InterfaceImplementationError_invalidCardinalityImplementingInterfaceLinkType {
  type: "invalidCardinalityImplementingInterfaceLinkType";
  invalidCardinalityImplementingInterfaceLinkType:
    InvalidCardinalityImplementingInterfaceLinkTypeError;
}

export interface InterfaceImplementationError_implementingLinkTypeDoesNotReferenceObjectType {
  type: "implementingLinkTypeDoesNotReferenceObjectType";
  implementingLinkTypeDoesNotReferenceObjectType:
    ImplementingLinkTypeDoesNotReferenceObjectTypeError;
}

export interface InterfaceImplementationError_implementingLinkTypeSideIsAmbiguous {
  type: "implementingLinkTypeSideIsAmbiguous";
  implementingLinkTypeSideIsAmbiguous: ImplementingLinkTypeSideIsAmbiguousError;
}

export interface InterfaceImplementationError_implementingLinkTypeSideDoesNotMatchLinkDefinitionType {
  type: "implementingLinkTypeSideDoesNotMatchLinkDefinitionType";
  implementingLinkTypeSideDoesNotMatchLinkDefinitionType:
    ImplementingLinkTypeSideDoesNotMatchLinkDefinitionTypeError;
}

export interface InterfaceImplementationError_implementingLinkTypeSideIsIncorrect {
  type: "implementingLinkTypeSideIsIncorrect";
  implementingLinkTypeSideIsIncorrect: ImplementingLinkTypeSideIsIncorrectError;
}

export interface InterfaceImplementationError_invalidLinkedEntityImplementingInterfaceLinkType {
  type: "invalidLinkedEntityImplementingInterfaceLinkType";
  invalidLinkedEntityImplementingInterfaceLinkType:
    InvalidLinkedEntityImplementingInterfaceLinkTypeError;
}

export interface InterfaceImplementationError_objectTypeImplementsTooManyInterfacesError {
  type: "objectTypeImplementsTooManyInterfacesError";
  objectTypeImplementsTooManyInterfacesError:
    ObjectTypeImplementsTooManyInterfacesError;
}
/**
 * A type representing validation errors associated with interface implementations. Since we only validate on
 * branches, we use RIDs instead of the ID/RID union.
 */
export type InterfaceImplementationError =
  | InterfaceImplementationError_missingSharedProperty
  | InterfaceImplementationError_missingInterfacePropertyImplementation
  | InterfaceImplementationError_invalidPropertyImplementation
  | InterfaceImplementationError_conflictingPropertyImplementation
  | InterfaceImplementationError_implicitAndExplicitPropertyImplementation
  | InterfaceImplementationError_objectAndInterfacePropertyTypesConflictingApiNames
  | InterfaceImplementationError_interfaceLinkNotFound
  | InterfaceImplementationError_invalidConflictingDefinitionsImplementingInterfaceLinkType
  | InterfaceImplementationError_requiredInterfaceLinkTypeNotImplemented
  | InterfaceImplementationError_interfaceLinkTypeImplementedTooOften
  | InterfaceImplementationError_invalidCardinalityImplementingInterfaceLinkType
  | InterfaceImplementationError_implementingLinkTypeDoesNotReferenceObjectType
  | InterfaceImplementationError_implementingLinkTypeSideIsAmbiguous
  | InterfaceImplementationError_implementingLinkTypeSideDoesNotMatchLinkDefinitionType
  | InterfaceImplementationError_implementingLinkTypeSideIsIncorrect
  | InterfaceImplementationError_invalidLinkedEntityImplementingInterfaceLinkType
  | InterfaceImplementationError_objectTypeImplementsTooManyInterfacesError;

/**
 * The object type specifies an interface link mapping for an interface link which does not exist.
 */
export interface InterfaceLinkNotFoundError {
  interfaceLinkTypeRidOrIdInRequest: _api_InterfaceLinkTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
}
/**
 * An interface link type with a SINGLE cardinality is implemented more than once.
 */
export interface InterfaceLinkTypeImplementedTooOftenError {
  interfaceLinkTypeRidOrIdInRequest: _api_InterfaceLinkTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  linkTypeIds: Array<_api_LinkTypeId>;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
}
/**
 * An object type is using a primary key property to implement an interface property that cannot be implemented
 * with a primary key property.
 */
export interface InterfacePropertyImplementedWithPrimaryKeyError {
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid: _api_ObjectTypeRid;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
}
/**
 * The object type specifies an implementation mapping for an interface property which does not exist.
 */
export interface InterfacePropertyNotFound {
  interfaceRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
  sharedPropertyTypeRidOrIdInRequest: _api_SharedPropertyTypeRidOrIdInRequest;
}
/**
 * An object type is using a non primary key property to implement an interface property that must be implemented
 * with a primary key property.
 */
export interface InterfacePropertyNotImplementedWithPrimaryKeyError {
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid: _api_ObjectTypeRid;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
}
/**
 * The object type specifies an implementation mapping for an interface property which does not exist.
 */
export interface InterfacePropertyTypeNotFound {
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
}
/**
 * An interface link type with a SINGLE cardinality is implemented by a link type with a many-to-many or a
 * one-to-many cardinality.
 */
export interface InvalidCardinalityImplementingInterfaceLinkTypeError {
  interfaceLinkTypeRidOrIdInRequest: _api_InterfaceLinkTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  linkTypeId: _api_LinkTypeId;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
}
/**
 * An interface link type constraint is fulfilled more than once for an interface and the multiple
 * implementations are not the same. When an interface and its super interface are both explicitly implemented by
 * an object type, the implementation for an inherited link on the interface must be the same as the
 * implementation of the link for the super interface. Additionally, the implementation of two child interfaces
 * of the same super interface must have the same implementation for any inherited links.
 */
export interface InvalidConflictingDefinitionsImplementingInterfaceLinkTypeError {
  interfaceLinkTypeRidOrIdInRequest: _api_InterfaceLinkTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  linkTypeIds: Array<_api_LinkTypeId>;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
  otherLinkTypeIds: Array<_api_LinkTypeId>;
}
export interface InvalidDataConstraintsError {
  interfacePropertyDataConstraints?: _api_DataConstraints | null | undefined;
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectPropertyDataConstraints?: _api_DataConstraints | null | undefined;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
  sharedPropertyTypeRidOrIdInRequest?:
    | _api_SharedPropertyTypeRidOrIdInRequest
    | null
    | undefined;
}
/**
 * The foreign key is a derived property type, this is not allowed.
 */
export interface InvalidDerivedForeignKeyError {
  foreignKeyObjectType: _api_ObjectTypeRid;
  foreignKeyPropertyTypeId: _api_PropertyTypeId;
  linkType: _api_LinkTypeRid;
  primaryKeyObjectType: _api_ObjectTypeRid;
}
/**
 * An error representing when the foreign key property is an invalid type.
 */
export interface InvalidForeignKeyTypeError {
  foreignKeyObjectType: _api_ObjectTypeRid;
  foreignKeyPropertyType: _api_BasePropertyType;
  linkType: _api_LinkTypeRid;
  primaryKeyObjectType: _api_ObjectTypeRid;
}
/**
 * The interface property type is not a struct or the interface struct field rid cannot be found.
 */
export interface InvalidInterfacePropertyForStructPropertyMappingImplementationError {
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  invalidInterfaceStructFieldRid?: _api_StructFieldRid | null | undefined;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
  sharedPropertyTypeRidOrIdInRequest?:
    | _api_SharedPropertyTypeRidOrIdInRequest
    | null
    | undefined;
}
/**
 * Expected local property implementing interface property to have the same value for indexed for search, but it
 * did not.
 */
export interface InvalidIsIndexedForSearchError {
  interfacePropertyIsIndexedForSearch: boolean;
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectPropertyIsIndexForSearch: boolean;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
  sharedPropertyTypeRidOrIdInRequest?:
    | _api_SharedPropertyTypeRidOrIdInRequest
    | null
    | undefined;
}
/**
 * An interface link type constraint is not fulfilled because the local linked entity type is different than the
 * interface link type's linked entity type.
 */
export interface InvalidLinkedEntityImplementingInterfaceLinkTypeError {
  actualLinkedEntity: _api_LinkedEntityTypeRidOrIdInRequest;
  expectedLinkedEntity: _api_LinkedEntityTypeRidOrIdInRequest;
  interfaceLinkTypeRidOrIdInRequest: _api_InterfaceLinkTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  linkTypeId: _api_LinkTypeId;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
}
/**
 * A property specified in the datasource definition is not mapped to a property security group or is mapped
 * to more than one property security group.
 */
export interface InvalidNumberOfPropertyReferencesInPropertySecurityGroupError {
  datasourceRid: _api_DatasourceRid;
  invalidNumberOfReferenceCounts: Record<_api_PropertyTypeId, number>;
  objectTypeRid: _api_ObjectTypeRid;
}
export interface InvalidPropertyImplementationError_invalidPropertyTypeV2 {
  type: "invalidPropertyTypeV2";
  invalidPropertyTypeV2: InvalidPropertyTypeError;
}

export interface InvalidPropertyImplementationError_invalidTypeClassesV2 {
  type: "invalidTypeClassesV2";
  invalidTypeClassesV2: InvalidTypeClassesError;
}

export interface InvalidPropertyImplementationError_invalidDataConstraintsV2 {
  type: "invalidDataConstraintsV2";
  invalidDataConstraintsV2: InvalidDataConstraintsError;
}

export interface InvalidPropertyImplementationError_invalidValueTypeV2 {
  type: "invalidValueTypeV2";
  invalidValueTypeV2: InvalidValueTypeError;
}

export interface InvalidPropertyImplementationError_invalidIsIndexedForSearchV2 {
  type: "invalidIsIndexedForSearchV2";
  invalidIsIndexedForSearchV2: InvalidIsIndexedForSearchError;
}

export interface InvalidPropertyImplementationError_propertyIdNotFoundV2 {
  type: "propertyIdNotFoundV2";
  propertyIdNotFoundV2: MissingImplementingPropertyError;
}

export interface InvalidPropertyImplementationError_interfacePropertyNotFound {
  type: "interfacePropertyNotFound";
  interfacePropertyNotFound: InterfacePropertyNotFound;
}

export interface InvalidPropertyImplementationError_interfacePropertyTypeNotFound {
  type: "interfacePropertyTypeNotFound";
  interfacePropertyTypeNotFound: InterfacePropertyTypeNotFound;
}

export interface InvalidPropertyImplementationError_interfacePropertyImplementedWithPrimaryKey {
  type: "interfacePropertyImplementedWithPrimaryKey";
  interfacePropertyImplementedWithPrimaryKey:
    InterfacePropertyImplementedWithPrimaryKeyError;
}

export interface InvalidPropertyImplementationError_interfacePropertyNotImplementedWithPrimaryKey {
  type: "interfacePropertyNotImplementedWithPrimaryKey";
  interfacePropertyNotImplementedWithPrimaryKey:
    InterfacePropertyNotImplementedWithPrimaryKeyError;
}

export interface InvalidPropertyImplementationError_invalidStructFieldTypeImplementation {
  type: "invalidStructFieldTypeImplementation";
  invalidStructFieldTypeImplementation:
    InvalidStructFieldTypeImplementationError;
}

export interface InvalidPropertyImplementationError_invalidInterfacePropertyForStructPropertyMappingImplementation {
  type: "invalidInterfacePropertyForStructPropertyMappingImplementation";
  invalidInterfacePropertyForStructPropertyMappingImplementation:
    InvalidInterfacePropertyForStructPropertyMappingImplementationError;
}

export interface InvalidPropertyImplementationError_invalidStructPropertyMappingImplementation {
  type: "invalidStructPropertyMappingImplementation";
  invalidStructPropertyMappingImplementation:
    InvalidStructPropertyMappingImplementationError;
}

export interface InvalidPropertyImplementationError_invalidStructFieldMapping {
  type: "invalidStructFieldMapping";
  invalidStructFieldMapping: InvalidStructFieldMappingError;
}

export interface InvalidPropertyImplementationError_unmappedInterfaceStructField {
  type: "unmappedInterfaceStructField";
  unmappedInterfaceStructField: UnmappedInterfaceStructFieldError;
}

export interface InvalidPropertyImplementationError_reducedPropertyMissingReducers {
  type: "reducedPropertyMissingReducers";
  reducedPropertyMissingReducers: ReducedPropertyMissingReducersError;
}
export type InvalidPropertyImplementationError =
  | InvalidPropertyImplementationError_invalidPropertyTypeV2
  | InvalidPropertyImplementationError_invalidTypeClassesV2
  | InvalidPropertyImplementationError_invalidDataConstraintsV2
  | InvalidPropertyImplementationError_invalidValueTypeV2
  | InvalidPropertyImplementationError_invalidIsIndexedForSearchV2
  | InvalidPropertyImplementationError_propertyIdNotFoundV2
  | InvalidPropertyImplementationError_interfacePropertyNotFound
  | InvalidPropertyImplementationError_interfacePropertyTypeNotFound
  | InvalidPropertyImplementationError_interfacePropertyImplementedWithPrimaryKey
  | InvalidPropertyImplementationError_interfacePropertyNotImplementedWithPrimaryKey
  | InvalidPropertyImplementationError_invalidStructFieldTypeImplementation
  | InvalidPropertyImplementationError_invalidInterfacePropertyForStructPropertyMappingImplementation
  | InvalidPropertyImplementationError_invalidStructPropertyMappingImplementation
  | InvalidPropertyImplementationError_invalidStructFieldMapping
  | InvalidPropertyImplementationError_unmappedInterfaceStructField
  | InvalidPropertyImplementationError_reducedPropertyMissingReducers;

/**
 * Expected local property implementing interface property to have the same type, but it did not.
 */
export interface InvalidPropertyTypeError {
  interfacePropertyType: _api_InterfacePropertyTypeType;
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectPropertyType: _api_Type;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
  sharedPropertyTypeRidOrIdInRequest?:
    | _api_SharedPropertyTypeRidOrIdInRequest
    | null
    | undefined;
}
/**
 * One or more struct field mappings from interface property to object property have mismatched base types.
 */
export interface InvalidStructFieldMappingError {
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceStructFieldRid: _api_StructFieldRid;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectRid: _api_ObjectTypeRid;
  objectStructFieldRid: _api_StructFieldRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
  sharedPropertyTypeRidOrIdInRequest?:
    | _api_SharedPropertyTypeRidOrIdInRequest
    | null
    | undefined;
}
/**
 * The implementing property type is not a struct or the struct field does not exist in the struct type.
 */
export interface InvalidStructFieldTypeImplementationError {
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
  sharedPropertyTypeRidOrIdInRequest?:
    | _api_SharedPropertyTypeRidOrIdInRequest
    | null
    | undefined;
  structFieldRid: _api_StructFieldRid;
}
/**
 * The implementing property type is not a struct or the object struct field rid cannot be found.
 */
export interface InvalidStructPropertyMappingImplementationError {
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  invalidObjectStructFieldRid?: _api_StructFieldRid | null | undefined;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
  sharedPropertyTypeRidOrIdInRequest?:
    | _api_SharedPropertyTypeRidOrIdInRequest
    | null
    | undefined;
}
export interface InvalidTypeClassesError {
  interfacePropertyTypeClasses: Array<_api_TypeClass>;
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  missingObjectPropertyTypeClasses: Array<_api_TypeClass>;
  objectPropertyTypeClasses: Array<_api_TypeClass>;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
  sharedPropertyTypeRidOrIdInRequest?:
    | _api_SharedPropertyTypeRidOrIdInRequest
    | null
    | undefined;
}
export interface InvalidValueTypeError {
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfacePropertyValueType?: _api_ValueTypeReference | null | undefined;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectPropertyValueType?: _api_ValueTypeReference | null | undefined;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
  sharedPropertyTypeRidOrIdInRequest?:
    | _api_SharedPropertyTypeRidOrIdInRequest
    | null
    | undefined;
}
/**
 * The derived properties definition is referring to link type that does not exist or is deleted.
 */
export interface LinkTypeInDerivedPropertyDefinitionNotFoundOrDeletedError {
  linkTypeId?: _api_LinkTypeId | null | undefined;
  linkTypeRid?: _api_LinkTypeRid | null | undefined;
  objectType: _api_ObjectTypeRid;
  propertyTypeIds: Array<_api_PropertyTypeId>;
  propertyTypeRids: Array<_api_PropertyTypeRid>;
}
/**
 * An error when the properties of a link type reference the same backing column.
 */
export interface LinkTypePropertiesReferenceSameColumnError {
  linkType: _api_LinkTypeRid;
}
/**
 * An error representing when the property of a many-to-many link type has a type that is incompatible with the type of the backing data.
 */
export interface LinkTypePropertyIncompatibleBackingColumnTypeError {
  linkType: _api_LinkTypeRid;
  propertyType: _api_PropertyTypeRid;
  providedColumnType: _api_FoundryFieldType;
  validColumnTypes: Array<_api_FoundryFieldType>;
}
/**
 * An error representing when the foreign key specified by a link type doesn't exist as a property on the specified object type.
 */
export interface LinkTypeReferencesInvalidForeignKeyError {
  foreignKeyObjectType: _api_ObjectTypeRid;
  linkType: _api_LinkTypeRid;
  primaryKeyObjectType: _api_ObjectTypeRid;
}
/**
 * An error representing when the primary key specified by a link type doesn't exist as a property on the specified object type or if the specified primary key is not actually the primary key on the object.
 */
export interface LinkTypeReferencesInvalidPrimaryKeyError {
  foreignKeyObjectType: _api_ObjectTypeRid;
  linkType: _api_LinkTypeRid;
  primaryKeyObjectType: _api_ObjectTypeRid;
}
/**
 * An error representing when a many-to-many link type has more than one datasource.
 */
export interface LinkTypesHaveMultipleDatasourcesError {
  datasources: Array<_api_DatasourceRid>;
  linkType: _api_LinkTypeRid;
}
/**
 * An error representing when a many-to-many link type has no datasources.
 */
export interface LinkTypesHaveNoDatasourcesError {
  linkType: _api_LinkTypeRid;
}
export interface LoadOntologyBranchByVersionRequest {
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface LoadOntologyBranchByVersionResponse {
  ontologyBranch: OntologyBranch;
  versionedBranchDetails: VersionedBranchDetails;
}
export interface LoadOntologyBranchForProposalRequest {
}
export interface LoadOntologyBranchForProposalResponse {
  branch: OntologyBranch;
  ontologyProposalV2: OntologyProposalV2;
}
export interface LoadOntologyBranchMarkingsRequest {
}
export interface LoadOntologyBranchMarkingsResponse {
  markingIds: Array<_api_MarkingId>;
}
export interface LoadOntologyBranchRequest {
  includeEditsHistoryObjectTypes?: boolean | null | undefined;
}
export interface LoadOntologyBranchResponse {
  ontologyBranch: OntologyBranch;
}
/**
 * An error representing when a many-to-many link type datasource has a column referencing a primary key that
 * does not exist on the referenced object type.
 */
export interface ManyToManyLinkTypeDatasourcePrimaryKeyMismatchError {
  datasource: string;
  linkType: _api_LinkTypeRid;
  objectType: _api_ObjectTypeRid;
}
/**
 * A marking property must be backed by a datasource that uses granular permissions, either with property
 * security groups, or using RVs.
 */
export interface MarkingPropertiesMustBeBackedByDatasourceWithGranularPermissionsError {
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid?: _api_PropertyTypeRid | null | undefined;
}
/**
 * A marking property must be referenced by a granular policy in a property security group, or must
 * map to a column that is referenced by an RV granular policy.
 */
export interface MarkingPropertiesMustBeReferencedInGranularPolicyError {
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid?: _api_PropertyTypeRid | null | undefined;
}
/**
 * Marking properties must have a corresponding marking constraint on the datasource.
 */
export interface MarkingPropertiesMustHaveAssociatedMarkingConstraintsError {
  datasourceRid: _api_DatasourceRid;
  markingType: _api_MarkingType;
  objectTypeRid: _api_ObjectTypeRid;
}
/**
 * An error representing when a media set or media set view datasource references properties that do not exist
 * on the object type.
 */
export interface MediaDatasourceDoesNotReferenceExistingPropertiesError {
  backingMediaRids: Array<string>;
  nonExistentPropertyTypeIds: Array<_api_PropertyTypeId>;
  objectType: _api_ObjectTypeRid;
}
/**
 * An error representing when a media set datasource references non-media reference properties.
 */
export interface MediaDatasourceDoesNotReferenceMediaReferencePropertiesError {
  backingMediaRids: Array<string>;
  nonMediaPropertyTypeRids: Array<_api_PropertyTypeRid>;
  objectType: _api_ObjectTypeRid;
}
export interface MediaReferencePropertyTypeConstraintError_mediaReferencePropertyTypeHasNoDatasources {
  type: "mediaReferencePropertyTypeHasNoDatasources";
  mediaReferencePropertyTypeHasNoDatasources:
    MediaReferencePropertyTypeHasNoDatasourcesError;
}

export interface MediaReferencePropertyTypeConstraintError_mediaDatasourceDoesNotReferenceExistingProperties {
  type: "mediaDatasourceDoesNotReferenceExistingProperties";
  mediaDatasourceDoesNotReferenceExistingProperties:
    MediaDatasourceDoesNotReferenceExistingPropertiesError;
}

export interface MediaReferencePropertyTypeConstraintError_mediaDatasourceDoesNotReferenceMediaReferenceProperties {
  type: "mediaDatasourceDoesNotReferenceMediaReferenceProperties";
  mediaDatasourceDoesNotReferenceMediaReferenceProperties:
    MediaDatasourceDoesNotReferenceMediaReferencePropertiesError;
}

export interface MediaReferencePropertyTypeConstraintError_mediaViewDatasourceDoesNotReferenceMediaReferenceProperties {
  type: "mediaViewDatasourceDoesNotReferenceMediaReferenceProperties";
  mediaViewDatasourceDoesNotReferenceMediaReferenceProperties:
    MediaViewDatasourceDoesNotReferenceMediaReferencePropertiesError;
}
/**
 * A type representing validation errors associated with media reference property type validation.
 */
export type MediaReferencePropertyTypeConstraintError =
  | MediaReferencePropertyTypeConstraintError_mediaReferencePropertyTypeHasNoDatasources
  | MediaReferencePropertyTypeConstraintError_mediaDatasourceDoesNotReferenceExistingProperties
  | MediaReferencePropertyTypeConstraintError_mediaDatasourceDoesNotReferenceMediaReferenceProperties
  | MediaReferencePropertyTypeConstraintError_mediaViewDatasourceDoesNotReferenceMediaReferenceProperties;

/**
 * An error representing when a media reference property is not referenced by any media datasources.
 */
export interface MediaReferencePropertyTypeHasNoDatasourcesError {
  objectType: _api_ObjectTypeRid;
  propertyType: _api_PropertyTypeRid;
}
/**
 * An error representing when a media set view datasource references non-media reference properties.
 */
export interface MediaViewDatasourceDoesNotReferenceMediaReferencePropertiesError {
  backingMediaRids: Array<string>;
  nonMediaPropertyTypeRids: Array<_api_PropertyTypeRid>;
  objectType: _api_ObjectTypeRid;
}
export interface MergeableStatus {
}
export interface MergeConstraintError_branchConflictsWithMain {
  type: "branchConflictsWithMain";
  branchConflictsWithMain: BranchConflictsWithMain;
}
export type MergeConstraintError = MergeConstraintError_branchConflictsWithMain;

export interface MergedStatusV2 {
}
export interface MergeOntologyBranchDryRunRequest {
  validateExternalBranchedReferences?: boolean | null | undefined;
}
export interface MergeOntologyBranchDryRunResponse {
  status: OntologyBranchMergeStatus;
}
export interface MergeOntologyServiceBranchRequest {
}
export interface MergeOntologyServiceBranchResponse {
}
/**
 * Note: This error does not block the branch from getting merged.
 *
 * Indicates that a datasource was deleted without the required schema migrations. Currently we only validate
 * for the most common schema migrations. Validation only looks at migrations with
 * `SourceSchemaVersion.latestVersion()`, other migrations will be ignored.
 * There may be some edge cases not covered by this validation.
 *
 * Schema Migrations that are validated for include:
 * - dropAllPatches
 * - dropDatasource, where the source datasource matches the deleted datasource
 * - renameDatasource, where the source matches the deleted datasource
 *
 * Edge cases include:
 * - dropDatasource does not check that the target datasource exists or is valid
 */
export interface MissingDatasourceMigrationError {
  datasourceRid: _api_DatasourceRid;
  objectTypeRid: _api_ObjectTypeRid;
}
/**
 * Note: This error does not block the branch from getting merged.
 *
 * Indicates that a property type was deleted without the required schema migrations. Currently we only
 * validate for the most common schema migrations. Validation only looks at migrations with
 * `SourceSchemaVersion.latestVersion()`, other migrations will be ignored.
 * There may be some edge cases not covered by this validation.
 *
 * Schema Migrations that are validated for include:
 * - dropAllPatches (this is the only allowed migration in case of a primary key type change)
 * - dropProperty where the propertyTypeRid matches the deleted property
 * - renameProperty where the source matches the current propertyTypeRid and the target does not match the current propertyTypeId
 */
export interface MissingDeletedPropertyTypeSchemaMigrationError {
  objectTypeRid: _api_ObjectTypeRid;
  propertyTypeRid: _api_PropertyTypeRid;
  type: _api_Type;
}
/**
 * The object type implementing the interface has a property fulfilling the shared property that does not exist.
 */
export interface MissingImplementingPropertyError {
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  missingPropertyId: _api_PropertyTypeId;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid: _api_ObjectTypeRid;
  sharedPropertyTypeRidOrIdInRequest?:
    | _api_SharedPropertyTypeRidOrIdInRequest
    | null
    | undefined;
}
/**
 * The object implementing the interface does not have all required interface properties.
 */
export interface MissingInterfacePropertyImplementation {
  interfaceRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  missingInterfacePropertyTypeRidOrIdInRequests: Array<
    _api_InterfacePropertyTypeRidOrIdInRequest
  >;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
}
/**
 * Note: This error does not block the branch from getting merged.
 *
 * Indicates that there is a change to the Type of a PropertyType (such as changing from an
 * Integer to a String) that does not have a required schema migration associated with it.
 * Validation only looks at migrations with `SourceSchemaVersion.latestVersion()`, other
 * migrations will be ignored.
 * Currently validation is for the most common schema migrations and there are some edge cases that
 * we do not account for.
 *
 * Schema Migrations that are validated for include:
 * - cast, where propertyTypeRid and target Type match
 * - dropAllPatches
 * - dropProperty, where propertyTypeRid matches
 *
 * Edge cases include:
 * - revert migrations of a previous cast are not currently considered valid as part of this validation
 * - multiple cast migrations for the same property on a branch are not considered valid as part of this validation
 */
export interface MissingPropertyDataTypeSchemaMigrationError {
  objectTypeRid: _api_ObjectTypeRid;
  propertyTypeRid: _api_PropertyTypeRid;
  sourceType: _api_Type;
  targetType: _api_Type;
}
/**
 * Property security groups must be named.
 */
export interface MissingPropertySecurityGroupTypeError {
  objectTypeRid: _api_ObjectTypeRid;
}
/**
 * The object implementing the interface does not have all required shared properties.
 */
export interface MissingSharedPropertyError {
  interfaceRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  missingSharedPropertyTypeRidOrIdInRequests: Array<
    _api_SharedPropertyTypeRidOrIdInRequest
  >;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
}
export interface NonDefaultOntologyBranchDetails {
  attribution: OntologyBranchAttribution;
  branchModificationData: OntologyBranchModificationData;
  createdAtOntologyVersion: _api_OntologyVersion;
  datasourceBranchId?: _api_BranchId | null | undefined;
  globalBranch?: _api_GlobalBranchRid | null | undefined;
  indexingConfig: BranchIndexingConfig;
  latestRebasedOntologyVersion: _api_OntologyVersion;
  ownerIdentifier: OwnerIdentifier;
  parentBranchRid: _api_OntologyBranchRid;
  proposal?: OntologyProposalV2 | null | undefined;
  status: BranchStatus;
}
/**
 * Indicates that no branched indexes should be generated for any entities modified on the branch. All queries
 * for data on the branch will return data from the master branch. This data may be inconsistent with schema
 * changes on the ontology branch.
 */
export interface NonIndexedBranchConfig {
}
/**
 * Property security group names must be unique.
 */
export interface NonUniquePropertySecurityGroupNamesError {
  objectTypeRid: _api_ObjectTypeRid;
}
/**
 * Property security group security policies must be unique within the object type.
 */
export interface NonUniquePropertySecurityGroupSecurityPoliciesError {
  objectTypeRid: _api_ObjectTypeRid;
}
/**
 * All property types in each object type must be mapped to a datasource or explicitly labeled as edit-only (if the object type backing datasource supports edit-only).
 */
export interface NotAllPropertyTypesAreMappedToDatasourceWithinObjectType {
  objectTypeRid: _api_ObjectTypeRid;
  propertyTypesInDatasource: Array<_api_PropertyTypeId>;
  propertyTypesInObjectType: Array<_api_PropertyTypeId>;
}
export interface NumberOfDatasourcesConstraintError_objectTypesHaveNoDatasources {
  type: "objectTypesHaveNoDatasources";
  objectTypesHaveNoDatasources: ObjectTypesHaveNoDatasourcesError;
}

export interface NumberOfDatasourcesConstraintError_objectTypesHaveTooManyDatasources {
  type: "objectTypesHaveTooManyDatasources";
  objectTypesHaveTooManyDatasources: ObjectTypesHaveTooManyDatasourcesError;
}

export interface NumberOfDatasourcesConstraintError_linkTypesHaveNoDatasources {
  type: "linkTypesHaveNoDatasources";
  linkTypesHaveNoDatasources: LinkTypesHaveNoDatasourcesError;
}

export interface NumberOfDatasourcesConstraintError_linkTypesHaveMultipleDatasources {
  type: "linkTypesHaveMultipleDatasources";
  linkTypesHaveMultipleDatasources: LinkTypesHaveMultipleDatasourcesError;
}
/**
 * A type representing the Validation Errors associated with validations on the number of datasources.
 */
export type NumberOfDatasourcesConstraintError =
  | NumberOfDatasourcesConstraintError_objectTypesHaveNoDatasources
  | NumberOfDatasourcesConstraintError_objectTypesHaveTooManyDatasources
  | NumberOfDatasourcesConstraintError_linkTypesHaveNoDatasources
  | NumberOfDatasourcesConstraintError_linkTypesHaveMultipleDatasources;

/**
 * Object type property API name conflicts with interface property API name. Properties may only share an API
 * name if the object property directly implements the interface property (not through reducers, struct fields,
 * or partial struct mappings).
 */
export interface ObjectAndInterfacePropertyTypesConflictingApiNamesError {
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
}
/**
 * Object type datasources cannot have their assumed markings updated. Datasource needs to recreated with
 * new rid, when the set of assumed marking changes.
 */
export interface ObjectTypeDatasourceCannotHaveAssumedMarkingsUpdatedError {
  datasource: string;
  objectType: _api_ObjectTypeRid;
}
/**
 * Object type datasources cannot have their DataSecurity updated on a branch.
 */
export interface ObjectTypeDatasourceCannotHaveDataSecurityUpdatedOnBranchError {
  objectType: _api_ObjectTypeRid;
}
/**
 * An error representing when an object type datasource has columns that do not map to a property on the
 * corresponding object type.
 */
export interface ObjectTypeDatasourceColumnMappingMismatchError {
  existingPropertyTypesMappedOnDatasources: Array<_api_PropertyTypeRid>;
  nonexistentPropertyTypesMappedOnDatasources: Array<_api_PropertyTypeId>;
  objectType: _api_ObjectTypeRid;
  propertyTypesOnObject: Array<_api_PropertyTypeRid>;
}
/**
 * A datasource is using an invalid retention target size. If retention is desired the selected target size must
 * be less than or equal to the retention trigger size. Only applicable for direct datasources.
 */
export interface ObjectTypeDatasourceWithInvalidRetentionTargetSizeError {
  directSourceRid: _api_DatasourceRid;
  objectTypeRid: _api_ObjectTypeRid;
  retentionConfig: _api_RetentionConfig;
}
/**
 * An error representing when an object type datasource does not include the primary key property of the
 * corresponding object type.
 */
export interface ObjectTypeDatasourceWithoutPrimaryKeyColumnError {
  datasource: string;
  datasourceRid: _api_DatasourceRid;
  objectType: _api_ObjectTypeRid;
}
/**
 * An object type implements more than the allowed number of interfaces. The number of interfaces implemented
 * includes both explicit and implicit implementations. If an object type implements InterfaceB which extends
 * InterfaceA, then the number of implementations the object type has is 2.
 */
export interface ObjectTypeImplementsTooManyInterfacesError {
  actualNumberOfImplements: number;
  maximumNumberOfImplements: number;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid: _api_ObjectTypeRid;
}
export interface ObjectTypePropertyConstraintError_baseFormatterReferencedPropertiesDoNotExist {
  type: "baseFormatterReferencedPropertiesDoNotExist";
  baseFormatterReferencedPropertiesDoNotExist:
    BaseFormatterReferencedPropertiesDoNotExistError;
}
/**
 * A type representing the Validation Errors associated with Property Type References.
 */
export type ObjectTypePropertyConstraintError =
  ObjectTypePropertyConstraintError_baseFormatterReferencedPropertiesDoNotExist;

/**
 * An error representing when the property of an object type has a type that is incompatible with the type of the backing data.
 */
export interface ObjectTypePropertyIncompatibleBackingColumnTypeError {
  objectType: _api_ObjectTypeRid;
  propertyType: _api_PropertyTypeRid;
  providedColumnType: _api_FoundryFieldType;
  validColumnTypes: Array<_api_FoundryFieldType>;
}
/**
 * An error representing when the property of an object type has a type that is incompatible with the type of the backing data.
 */
export interface ObjectTypePropertyIncompatibleDecimalColumnTypeError {
  objectType: _api_ObjectTypeRid;
  propertyType: _api_PropertyTypeRid;
  providedColumnType: _api_FoundryFieldType;
  providedPrecision?: number | null | undefined;
  providedScale?: number | null | undefined;
  validColumnTypes: Array<_api_FoundryFieldType>;
  validPrecision?: number | null | undefined;
  validScale?: number | null | undefined;
}
/**
 * An error representing when an object type has no datasources.
 */
export interface ObjectTypesHaveNoDatasourcesError {
  objectType: _api_ObjectTypeRid;
}
/**
 * An error representing when an object type has too many datasources.
 */
export interface ObjectTypesHaveTooManyDatasourcesError {
  maxDatasources: number;
  numberOfDatasources: number;
  objectType: _api_ObjectTypeRid;
}
/**
 * Object types with stream datasources cannot have materializations. If you are switching from a batch to stream datasource, please unlink your materializations first.
 */
export interface ObjectTypeWithStreamDatasourceCannotHaveMaterializationsError {
  objectTypeRid: _api_ObjectTypeRid;
}
/**
 * An error representing when none of an object type's datasources map the title property of the object type.
 */
export interface ObjectTypeWithUnmappedTitlePropertyError {
  objectType: _api_ObjectTypeRid;
}
export interface OntologyBranch {
  branchDetails: OntologyBranchDetails;
  draftOntologyVersion?: _api_OntologyVersion | null | undefined;
  latestOntologyVersion: _api_OntologyVersion;
  ontologyRid: _api_OntologyRid;
  rid: _api_OntologyBranchRid;
}
export interface OntologyBranchAttribution {
  author: _api_UserId;
  createdAt: string;
  lastUpdatedAt: string;
}
/**
 * A string representing the description of the `OntologyBranch` for display purposes. This is not guaranteed to be unique. The maximum size allowed is 500 characters and is not safe to log.
 */
export type OntologyBranchDescription = string;
export interface OntologyBranchDetails_default {
  type: "default";
  default: DefaultOntologyBranchDetails;
}

export interface OntologyBranchDetails_nonDefault {
  type: "nonDefault";
  nonDefault: NonDefaultOntologyBranchDetails;
}
export type OntologyBranchDetails =
  | OntologyBranchDetails_default
  | OntologyBranchDetails_nonDefault;

/**
 * A string representing the name of the `OntologyBranch` for display purposes. This is not guaranteed to be unique. The maximum size allowed is 100 characters and is not safe to log.
 */
export type OntologyBranchDisplayName = string;
export interface OntologyBranchEntityModificationData {
  modificationType: _api_modification_ModificationType;
}
export interface OntologyBranchMergeFailureStatus {
  errors: Array<_api_validation_OntologyValidationError>;
}
export interface OntologyBranchMergeStatus_success {
  type: "success";
  success: OntologyBranchMergeSuccessStatus;
}

export interface OntologyBranchMergeStatus_failure {
  type: "failure";
  failure: OntologyBranchMergeFailureStatus;
}
export type OntologyBranchMergeStatus =
  | OntologyBranchMergeStatus_success
  | OntologyBranchMergeStatus_failure;

export interface OntologyBranchMergeSuccessStatus {
}
/**
 * A type to represent the modified ontology entities and the contributors of an OntologyBranch.
 */
export interface OntologyBranchModificationData {
  affectedActionTypes: Record<
    _api_ActionTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedInterfaceTypes: Record<
    _api_InterfaceTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedLinkTypeEntityMetadatas: Record<
    _api_LinkTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedLinkTypes: Record<
    _api_LinkTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedManyToManyLinkTypeDatasources: Record<
    _api_LinkTypeRid,
    Record<_api_DatasourceRid, OntologyBranchEntityModificationData>
  >;
  affectedObjectTypeDatasources: Record<
    _api_ObjectTypeRid,
    Record<_api_DatasourceRid, OntologyBranchEntityModificationData>
  >;
  affectedObjectTypeEntityMetadatas: Record<
    _api_ObjectTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedObjectTypes: Record<
    _api_ObjectTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedObjectTypeSchemaMigrations: Record<
    _api_ObjectTypeRid,
    OntologyBranchSchemaMigrationModificationMetadata
  >;
  affectedRuleSets: Record<
    _api_RuleSetRid,
    OntologyBranchEntityModificationData
  >;
  affectedSharedPropertyTypes: Record<
    _api_SharedPropertyTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedTypeGroups: Record<
    _api_TypeGroupRid,
    OntologyBranchEntityModificationData
  >;
  affectedWorkflows: Record<
    _workflow_api_WorkflowRid,
    OntologyBranchEntityModificationData
  >;
  contributors: Array<_api_UserId>;
}
export interface OntologyBranchSchemaMigrationModificationMetadata {
  affectedSourceSchemaVersions: Array<_api_SchemaVersion>;
  branchedSchemaVersion: _api_SchemaVersion;
}
/**
 * A set of validation errors related to the ontology that have not been assigned to a specific resource.
 */
export interface OntologyErrors {
  ontologyRid: _api_OntologyRid;
  validationErrors: Array<ValidationError>;
}
/**
 * A type to represent a proposal on an OntologyBranch.
 */
export interface OntologyProposalV2 {
  attribution: ProposalV2Attribution;
  parentBranchRid: _api_OntologyBranchRid;
  rid: _api_OntologyProposalRid;
  status: ProposalStatusV2;
  taskDetails: ProposalTaskDetails;
}
export interface OntologyRidAndVersion {
  rid: _api_OntologyRid;
  version: _api_OntologyVersion;
}
export interface OpenStatusV2 {
}
export interface OwnerIdentifier_builder {
  type: "builder";
  builder: OwnerIdentifierBuilder;
}

export interface OwnerIdentifier_none {
  type: "none";
  none: OwnerIdentifierNone;
}
export type OwnerIdentifier = OwnerIdentifier_builder | OwnerIdentifier_none;

/**
 * Indicates this branch was created by builder/eddie.
 */
export interface OwnerIdentifierBuilder {
  builderPipelineRid: _api_BuilderPipelineRid;
}
/**
 * Indicates this branch was created internally by OMS/OMA.
 */
export interface OwnerIdentifierNone {
}
/**
 * An error representing when the primary key and foreign key properties have different types.
 */
export interface PrimaryAndForeignKeyTypeMismatchError {
  foreignKeyObjectType: _api_ObjectTypeRid;
  foreignKeyPropertyType: _api_BasePropertyType;
  linkType: _api_LinkTypeRid;
  primaryKeyObjectType: _api_ObjectTypeRid;
  primaryKeyPropertyType: _api_BasePropertyType;
}
/**
 * Indicates that there is a primary key change without a DropAllPatchesMigration.
 */
export interface PrimaryKeyChangeMigrationError {
  existingPrimaryKeys: Array<_api_PropertyTypeRid>;
  newPrimaryKeyIds: Array<_api_PropertyTypeId>;
  newPrimaryKeys: Array<_api_PropertyTypeRid>;
  objectTypeRid: _api_ObjectTypeRid;
}
/**
 * The primary key of an object type cannot be backed by a derived properties datasource.
 */
export interface PrimaryKeyIsDerivedError {
  objectType: _api_ObjectTypeRid;
  primaryKeyPropertyTypesThatAreDerived: Array<_api_PropertyTypeId>;
}
/**
 * A property specified in the datasource definition is not mapped to a property security group or is mapped
 * to more than one property security group.
 */
export interface PrimaryKeyReferencesInMultiplePropertySecurityGroupsError {
  objectTypeRid: _api_ObjectTypeRid;
  primaryKeys: Array<_api_PropertyTypeRid>;
}
export interface PropertySecurityGroupsConstraintError_unmappedPropertiesInPropertySecurityGroup {
  type: "unmappedPropertiesInPropertySecurityGroup";
  unmappedPropertiesInPropertySecurityGroup:
    UnmappedPropertiesInPropertySecurityGroupError;
}

export interface PropertySecurityGroupsConstraintError_invalidNumberOfPropertyReferencesInPropertySecurityGroup {
  type: "invalidNumberOfPropertyReferencesInPropertySecurityGroup";
  invalidNumberOfPropertyReferencesInPropertySecurityGroup:
    InvalidNumberOfPropertyReferencesInPropertySecurityGroupError;
}

export interface PropertySecurityGroupsConstraintError_primaryKeyReferencesInMultiplePropertySecurityGroups {
  type: "primaryKeyReferencesInMultiplePropertySecurityGroups";
  primaryKeyReferencesInMultiplePropertySecurityGroups:
    PrimaryKeyReferencesInMultiplePropertySecurityGroupsError;
}

export interface PropertySecurityGroupsConstraintError_missingPropertySecurityGroupType {
  type: "missingPropertySecurityGroupType";
  missingPropertySecurityGroupType: MissingPropertySecurityGroupTypeError;
}

export interface PropertySecurityGroupsConstraintError_nonUniquePropertySecurityGroupNames {
  type: "nonUniquePropertySecurityGroupNames";
  nonUniquePropertySecurityGroupNames: NonUniquePropertySecurityGroupNamesError;
}

export interface PropertySecurityGroupsConstraintError_nonUniquePropertySecurityGroupSecurityPolicies {
  type: "nonUniquePropertySecurityGroupSecurityPolicies";
  nonUniquePropertySecurityGroupSecurityPolicies:
    NonUniquePropertySecurityGroupSecurityPoliciesError;
}

export interface PropertySecurityGroupsConstraintError_unexpectedPropertyTypeReferencedInSecurityGroupGranularPolicyError {
  type: "unexpectedPropertyTypeReferencedInSecurityGroupGranularPolicyError";
  unexpectedPropertyTypeReferencedInSecurityGroupGranularPolicyError:
    UnexpectedPropertyTypeReferencedInSecurityGroupGranularPolicyError;
}
/**
 * Errors related to validation of property security groups.
 */
export type PropertySecurityGroupsConstraintError =
  | PropertySecurityGroupsConstraintError_unmappedPropertiesInPropertySecurityGroup
  | PropertySecurityGroupsConstraintError_invalidNumberOfPropertyReferencesInPropertySecurityGroup
  | PropertySecurityGroupsConstraintError_primaryKeyReferencesInMultiplePropertySecurityGroups
  | PropertySecurityGroupsConstraintError_missingPropertySecurityGroupType
  | PropertySecurityGroupsConstraintError_nonUniquePropertySecurityGroupNames
  | PropertySecurityGroupsConstraintError_nonUniquePropertySecurityGroupSecurityPolicies
  | PropertySecurityGroupsConstraintError_unexpectedPropertyTypeReferencedInSecurityGroupGranularPolicyError;

/**
 * Validation error using a value type with a property type.
 */
export interface PropertyTypeValueTypeUsageError {
  error: BaseValueTypeUsageError;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid?: _api_PropertyTypeRid | null | undefined;
}
export interface ProposalStatusV2_open {
  type: "open";
  open: OpenStatusV2;
}

export interface ProposalStatusV2_merged {
  type: "merged";
  merged: MergedStatusV2;
}

export interface ProposalStatusV2_closed {
  type: "closed";
  closed: ClosedStatusV2;
}
export type ProposalStatusV2 =
  | ProposalStatusV2_open
  | ProposalStatusV2_merged
  | ProposalStatusV2_closed;

export interface ProposalTaskDetails_v1 {
  type: "v1";
  v1: TaskDetailsV1;
}

export interface ProposalTaskDetails_v2 {
  type: "v2";
  v2: TaskDetailsV2;
}
/**
 * Encodes the task details for the Approvals Task associated with this Proposal.
 */
export type ProposalTaskDetails =
  | ProposalTaskDetails_v1
  | ProposalTaskDetails_v2;

export interface ProposalV2Attribution {
  author: _api_UserId;
  createdAt: string;
}
/**
 * The interface property is implemented through a reducer but the implementing property does not have any reducers defined on it.
 */
export interface ReducedPropertyMissingReducersError {
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
  sharedPropertyTypeRidOrIdInRequest?:
    | _api_SharedPropertyTypeRidOrIdInRequest
    | null
    | undefined;
}
/**
 * A required interface link type is missing an implementation.
 */
export interface RequiredInterfaceLinkTypeNotImplementedError {
  interfaceLinkTypeRidOrIdInRequest: _api_InterfaceLinkTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  objectTypeRid?: _api_ObjectTypeRid | null | undefined;
}
/**
 * A collection of maps where each key is a resource identifier and the corresponding value is a set
 * of validation errors specific to that resource. This allows for errors to be tracked
 * on a per-resource basis.
 */
export interface ResourceErrors {
  actionTypes: Record<_api_ActionTypeRid, Array<ValidationError>>;
  interfaces: Record<_api_InterfaceTypeRid, Array<ValidationError>>;
  linkTypes: Record<_api_LinkTypeRid, Array<ValidationError>>;
  objectTypes: Record<_api_ObjectTypeRid, Array<ValidationError>>;
  ruleSets: Record<_api_RuleSetRid, Array<ValidationError>>;
  sharedPropertyTypes: Record<
    _api_SharedPropertyTypeRid,
    Array<ValidationError>
  >;
  typeGroups: Record<_api_TypeGroupRid, Array<ValidationError>>;
  workflows: Record<_workflow_api_WorkflowRid, Array<ValidationError>>;
}
/**
 * An error representing when the schema for a datasource on a link type cannot be found. For most datasources, the datasource identifier on the master branch is used to load the schema. On non-default branches for datasources that are datasets, the datasource BranchId is used (if one is configured for the branch); if the schema cannot be loaded in this case, the master branch of the dataset will be used instead.
 */
export interface SchemaForLinkTypeDatasourceNotFoundError {
  datasource: _api_DatasourceRid;
  linkType: _api_LinkTypeRid;
}
/**
 * An error representing when the schema for a datasource on an object type cannot be found. For most datasources, the datasource identifier on the master branch is used to load the schema. On non-default branches for datasources that are datasets, the datasource BranchId is used (if one is configured for the branch); if the schema cannot be loaded in this case, the master branch of the dataset will be used instead.
 */
export interface SchemaForObjectTypeDatasourceNotFoundError {
  datasource: _api_DatasourceRid;
  objectType: _api_ObjectTypeRid;
}
export interface SchemaMigrationError_propertyDataType {
  type: "propertyDataType";
  propertyDataType: MissingPropertyDataTypeSchemaMigrationError;
}

export interface SchemaMigrationError_deletedPropertyType {
  type: "deletedPropertyType";
  deletedPropertyType: MissingDeletedPropertyTypeSchemaMigrationError;
}

export interface SchemaMigrationError_datasource {
  type: "datasource";
  datasource: MissingDatasourceMigrationError;
}

export interface SchemaMigrationError_primaryKeyChange {
  type: "primaryKeyChange";
  primaryKeyChange: PrimaryKeyChangeMigrationError;
}
export type SchemaMigrationError =
  | SchemaMigrationError_propertyDataType
  | SchemaMigrationError_deletedPropertyType
  | SchemaMigrationError_datasource
  | SchemaMigrationError_primaryKeyChange;

export interface SetOntologyBranchLockRequest {
  isLocked: boolean;
}
export interface SetOntologyBranchLockResponse {
  branchLock: BranchLock;
}
/**
 * Request to associate given set of OrganizationRids with the specified OntologyBranchRid(s).
 * Users should have permissions to modify the specified OntologyBranchRid(s) and also have
 * relevant permissions to apply the specified organizations' markings.
 * An empty set of organizations is not permissible.
 */
export interface SetOntologyBranchOrganizationMarkingsRequest {
  organizationRidByOntologyBranchRid: Record<
    _api_OntologyBranchRid,
    Array<_api_OrganizationRid>
  >;
}
/**
 * left blank for now
 */
export interface SetOntologyBranchOrganizationMarkingsResponse {
}
/**
 * Validation error using a value type with a shared property type.
 */
export interface SharedPropertyTypeValueTypeUsageError {
  error: BaseValueTypeUsageError;
  sharedPropertyTypeRidOrIdInRequest: _api_SharedPropertyTypeRidOrIdInRequest;
}
/**
 * An error representing when a struct property type of an object type is not mapped to a struct column field on the backing datasource.
 */
export interface StructColumnFieldMissingFromBackingDatasourceForObjectTypeError {
  objectType: _api_ObjectTypeRid;
  propertyType: _api_PropertyTypeRid;
  structFieldApiNames: Array<_api_ObjectTypeFieldApiName>;
  structFieldRids: Array<_api_StructFieldRid>;
}
export interface TaskDetailsV1 {
  taskRid: _api_OntologyBranchRid;
}
export interface TaskDetailsV2 {
  taskRid: _api_OntologyProposalRid;
}
export interface TimeDependentPropertyTypeConstraintError_timeDependentPropertyTypeHasNoDatasources {
  type: "timeDependentPropertyTypeHasNoDatasources";
  timeDependentPropertyTypeHasNoDatasources:
    TimeDependentPropertyTypeHasNoDatasourcesError;
}

export interface TimeDependentPropertyTypeConstraintError_timeSeriesDatasourceDoesNotReferenceExistingProperties {
  type: "timeSeriesDatasourceDoesNotReferenceExistingProperties";
  timeSeriesDatasourceDoesNotReferenceExistingProperties:
    TimeSeriesDatasourceDoesNotReferenceExistingPropertiesError;
}

export interface TimeDependentPropertyTypeConstraintError_timeSeriesDatasourceDoesNotReferenceTimeDependentProperties {
  type: "timeSeriesDatasourceDoesNotReferenceTimeDependentProperties";
  timeSeriesDatasourceDoesNotReferenceTimeDependentProperties:
    TimeSeriesDatasourceDoesNotReferenceTimeDependentPropertiesError;
}
/**
 * A type representing validation errors associated with time dependent property type validation.
 */
export type TimeDependentPropertyTypeConstraintError =
  | TimeDependentPropertyTypeConstraintError_timeDependentPropertyTypeHasNoDatasources
  | TimeDependentPropertyTypeConstraintError_timeSeriesDatasourceDoesNotReferenceExistingProperties
  | TimeDependentPropertyTypeConstraintError_timeSeriesDatasourceDoesNotReferenceTimeDependentProperties;

/**
 * An error representing when a time dependent property is not referenced by any datasources.
 */
export interface TimeDependentPropertyTypeHasNoDatasourcesError {
  objectType: _api_ObjectTypeRid;
  propertyType: _api_PropertyTypeRid;
}
/**
 * An error representing when a time series datasource references properties that do not exist on the object type.
 */
export interface TimeSeriesDatasourceDoesNotReferenceExistingPropertiesError {
  nonExistentPropertyTypeIds: Array<_api_PropertyTypeId>;
  objectType: _api_ObjectTypeRid;
  timeSeriesSyncRid: _api_TimeSeriesSyncRid;
}
/**
 * An error representing when a time series datasource references non-time-dependent properties.
 */
export interface TimeSeriesDatasourceDoesNotReferenceTimeDependentPropertiesError {
  nonTimeDependentPropertyRids: Array<_api_PropertyTypeRid>;
  objectType: _api_ObjectTypeRid;
  timeSeriesSyncRid: _api_TimeSeriesSyncRid;
}
/**
 * A property referenced in granular policy security is not of expected type.
 */
export interface UnexpectedPropertyTypeReferencedInSecurityGroupGranularPolicyError {
  actualOntologyType: _api_Type;
  datasourceRid: _api_DatasourceRid;
  expectedPropertyType: string;
  objectTypeRid: _api_ObjectTypeRid;
  propertyTypeId: _api_PropertyTypeId;
}
/**
 * One or more interface struct fields are not mapped to any object property struct field.
 */
export interface UnmappedInterfaceStructFieldError {
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  objectRid: _api_ObjectTypeRid;
  objectTypeId?: _api_ObjectTypeId | null | undefined;
  propertyTypeId?: _api_PropertyTypeId | null | undefined;
  propertyTypeRid: _api_PropertyTypeRid;
  sharedPropertyTypeRidOrIdInRequest?:
    | _api_SharedPropertyTypeRidOrIdInRequest
    | null
    | undefined;
  unmappedInterfaceStructFieldRids: Array<_api_StructFieldRid>;
}
/**
 * A property specified in a property security group does not have a mapping in the datasource definition.
 */
export interface UnmappedPropertiesInPropertySecurityGroupError {
  datasourceRid: _api_DatasourceRid;
  objectTypeRid: _api_ObjectTypeRid;
  unmappedPropertyTypeIds: Array<_api_PropertyTypeId>;
}
export interface ValidateOntologyBranchRequest {
}
export interface ValidateOntologyBranchResponse {
  status: BranchMergeStatus;
}
export interface ValidationError_foreignKeyConstraint {
  type: "foreignKeyConstraint";
  foreignKeyConstraint: ForeignKeyConstraintError;
}

export interface ValidationError_foundrySchemaConstraint {
  type: "foundrySchemaConstraint";
  foundrySchemaConstraint: FoundrySchemaConstraintError;
}

export interface ValidationError_numberOfDatasourcesConstraint {
  type: "numberOfDatasourcesConstraint";
  numberOfDatasourcesConstraint: NumberOfDatasourcesConstraintError;
}

export interface ValidationError_schemaMigration {
  type: "schemaMigration";
  schemaMigration: SchemaMigrationError;
}

export interface ValidationError_mediaReferencePropertyTypeConstraint {
  type: "mediaReferencePropertyTypeConstraint";
  mediaReferencePropertyTypeConstraint:
    MediaReferencePropertyTypeConstraintError;
}

export interface ValidationError_interfaceImplementationConstraint {
  type: "interfaceImplementationConstraint";
  interfaceImplementationConstraint: InterfaceImplementationError;
}

export interface ValidationError_timeDependentPropertyTypeConstraint {
  type: "timeDependentPropertyTypeConstraint";
  timeDependentPropertyTypeConstraint: TimeDependentPropertyTypeConstraintError;
}

export interface ValidationError_geotimeSeriesReferencePropertyTypeConstraint {
  type: "geotimeSeriesReferencePropertyTypeConstraint";
  geotimeSeriesReferencePropertyTypeConstraint:
    GeotimeSeriesReferencePropertyTypeConstraintError;
}

export interface ValidationError_datasourceModificationConstraint {
  type: "datasourceModificationConstraint";
  datasourceModificationConstraint: DatasourceModificationConstraintError;
}

export interface ValidationError_objectTypePropertyConstraint {
  type: "objectTypePropertyConstraint";
  objectTypePropertyConstraint: ObjectTypePropertyConstraintError;
}

export interface ValidationError_propertySecurityGroupsConstraint {
  type: "propertySecurityGroupsConstraint";
  propertySecurityGroupsConstraint: PropertySecurityGroupsConstraintError;
}

export interface ValidationError_mergeConstraint {
  type: "mergeConstraint";
  mergeConstraint: MergeConstraintError;
}

export interface ValidationError_genericOntologyMetadataError {
  type: "genericOntologyMetadataError";
  genericOntologyMetadataError: _api_GenericOntologyMetadataError;
}

export interface ValidationError_ontologyValidationError {
  type: "ontologyValidationError";
  ontologyValidationError: _api_validation_OntologyValidationError;
}
export type ValidationError =
  | ValidationError_foreignKeyConstraint
  | ValidationError_foundrySchemaConstraint
  | ValidationError_numberOfDatasourcesConstraint
  | ValidationError_schemaMigration
  | ValidationError_mediaReferencePropertyTypeConstraint
  | ValidationError_interfaceImplementationConstraint
  | ValidationError_timeDependentPropertyTypeConstraint
  | ValidationError_geotimeSeriesReferencePropertyTypeConstraint
  | ValidationError_datasourceModificationConstraint
  | ValidationError_objectTypePropertyConstraint
  | ValidationError_propertySecurityGroupsConstraint
  | ValidationError_mergeConstraint
  | ValidationError_genericOntologyMetadataError
  | ValidationError_ontologyValidationError;

export interface ValueTypeUsageError_propertyTypeValueTypeUsageError {
  type: "propertyTypeValueTypeUsageError";
  propertyTypeValueTypeUsageError: PropertyTypeValueTypeUsageError;
}

export interface ValueTypeUsageError_sharedPropertyTypeValueTypeUsageError {
  type: "sharedPropertyTypeValueTypeUsageError";
  sharedPropertyTypeValueTypeUsageError: SharedPropertyTypeValueTypeUsageError;
}
/**
 * Validation error using a value type in the ontology.
 */
export type ValueTypeUsageError =
  | ValueTypeUsageError_propertyTypeValueTypeUsageError
  | ValueTypeUsageError_sharedPropertyTypeValueTypeUsageError;

/**
 * The base type of the value type and the type of the property type do not match.
 */
export interface ValueTypeUsageMismatchPropertyTypeError {
}
/**
 * The value type and property type are both decimal, but there is a precision or scale mismatch between them.
 */
export interface ValueTypeUsageMismatchScaleOrPrecisionError {
  propertyPrecision?: number | null | undefined;
  propertyScale?: number | null | undefined;
  valueTypePrecision: number;
  valueTypeScale: number;
}
/**
 * The type of the value type and the type of the struct field do not match.
 */
export interface ValueTypeUsageMismatchStructFieldError {
}
/**
 * The property type is missing one or more struct fields from the value type. The property type should have a
 * superset of the fields on the value type. A struct field's API name must match the value type's field name.
 */
export interface ValueTypeUsageMissingStructFieldError {
  missingStructFields: Array<_api_ObjectTypeFieldApiName>;
}
export interface VersionedBranchDetails_default {
  type: "default";
  default: VersionedDefaultBranchDetails;
}

export interface VersionedBranchDetails_nonDefault {
  type: "nonDefault";
  nonDefault: VersionedNonDefaultBranchDetails;
}
export type VersionedBranchDetails =
  | VersionedBranchDetails_default
  | VersionedBranchDetails_nonDefault;

export interface VersionedDefaultBranchDetails {
}
export interface VersionedNonDefaultBranchDetails {
  branchModificationData: OntologyBranchModificationData;
  latestRebasedOntologyVersion: _api_OntologyVersion;
  version: _api_OntologyVersion;
}
