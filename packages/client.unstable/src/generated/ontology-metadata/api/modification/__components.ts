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
  WorkflowCreate as _workflow_api_WorkflowCreate,
  WorkflowIdInRequest as _workflow_api_WorkflowIdInRequest,
  WorkflowRid as _workflow_api_WorkflowRid,
  WorkflowUpdate as _workflow_api_WorkflowUpdate,
} from "../../workflow/api/__components.js";
import type {
  ActionApplyClientPreferences as _api_ActionApplyClientPreferences,
  ActionLogConfiguration as _api_ActionLogConfiguration,
  ActionLogicModification as _api_ActionLogicModification,
  ActionNotificationModification as _api_ActionNotificationModification,
  ActionNotificationSettings as _api_ActionNotificationSettings,
  ActionRevert as _api_ActionRevert,
  ActionSubmissionConfiguration as _api_ActionSubmissionConfiguration,
  ActionType as _api_ActionType,
  ActionTypeApiName as _api_ActionTypeApiName,
  ActionTypeBranchSettingsModification
    as _api_ActionTypeBranchSettingsModification,
  ActionTypeCreate as _api_ActionTypeCreate,
  ActionTypeDisplayMetadataModification
    as _api_ActionTypeDisplayMetadataModification,
  ActionTypeEntities as _api_ActionTypeEntities,
  ActionTypeIdentifier as _api_ActionTypeIdentifier,
  ActionTypeIdInRequest as _api_ActionTypeIdInRequest,
  ActionTypeProvenanceModification as _api_ActionTypeProvenanceModification,
  ActionTypeRid as _api_ActionTypeRid,
  ActionTypeStatus as _api_ActionTypeStatus,
  ActionTypeUpdate as _api_ActionTypeUpdate,
  ActionWebhooksModification as _api_ActionWebhooksModification,
  ArrayPropertyTypeReducerSortDirection
    as _api_ArrayPropertyTypeReducerSortDirection,
  AttachmentPropertyType as _api_AttachmentPropertyType,
  Attribution as _api_Attribution,
  BaseFormatter as _api_BaseFormatter,
  BooleanPropertyType as _api_BooleanPropertyType,
  BytePropertyType as _api_BytePropertyType,
  ColumnName as _api_ColumnName,
  CompassFolderRid as _api_CompassFolderRid,
  DataNullability as _api_DataNullability,
  DataNullabilityV2 as _api_DataNullabilityV2,
  DataSecurity as _api_DataSecurity,
  DatasetRid as _api_DatasetRid,
  DatasourceRid as _api_DatasourceRid,
  DataType as _api_DataType,
  DatePropertyType as _api_DatePropertyType,
  DecimalPropertyType as _api_DecimalPropertyType,
  DirectSourceRid as _api_DirectSourceRid,
  DoublePropertyType as _api_DoublePropertyType,
  EditParameterRequestModification as _api_EditParameterRequestModification,
  EditsConfiguration as _api_EditsConfiguration,
  EditSectionRequest as _api_EditSectionRequest,
  EditsOnlyRid as _api_EditsOnlyRid,
  ExperimentalTimeDependentPropertyTypeV1
    as _api_ExperimentalTimeDependentPropertyTypeV1,
  FloatPropertyType as _api_FloatPropertyType,
  FormContent as _api_FormContent,
  GeohashPropertyType as _api_GeohashPropertyType,
  GeoshapePropertyType as _api_GeoshapePropertyType,
  GeotimeSeriesIntegrationRid as _api_GeotimeSeriesIntegrationRid,
  GeotimeSeriesReferencePropertyType as _api_GeotimeSeriesReferencePropertyType,
  GroupId as _api_GroupId,
  Icon as _api_Icon,
  InlineActionDisplayOptions as _api_InlineActionDisplayOptions,
  IntegerPropertyType as _api_IntegerPropertyType,
  InterfaceLinkTypeCardinality as _api_InterfaceLinkTypeCardinality,
  InterfaceLinkTypeMetadata as _api_InterfaceLinkTypeMetadata,
  InterfaceLinkTypeRidOrIdInRequest as _api_InterfaceLinkTypeRidOrIdInRequest,
  InterfacePropertyTypeApiName as _api_InterfacePropertyTypeApiName,
  InterfacePropertyTypeDisplayMetadata
    as _api_InterfacePropertyTypeDisplayMetadata,
  InterfacePropertyTypeRidOrIdInRequest
    as _api_InterfacePropertyTypeRidOrIdInRequest,
  InterfaceTypeApiName as _api_InterfaceTypeApiName,
  InterfaceTypeIdInRequest as _api_InterfaceTypeIdInRequest,
  InterfaceTypeRid as _api_InterfaceTypeRid,
  InterfaceTypeRidOrIdInRequest as _api_InterfaceTypeRidOrIdInRequest,
  InterfaceTypeStatus as _api_InterfaceTypeStatus,
  LinkedEntityTypeRidOrIdInRequest as _api_LinkedEntityTypeRidOrIdInRequest,
  LinkTypeId as _api_LinkTypeId,
  LinkTypeMetadata as _api_LinkTypeMetadata,
  LinkTypePeeringMetadataV1 as _api_LinkTypePeeringMetadataV1,
  LinkTypeRid as _api_LinkTypeRid,
  LinkTypeRidOrId as _api_LinkTypeRidOrId,
  LinkTypeStatus as _api_LinkTypeStatus,
  LogicRuleIdInRequest as _api_LogicRuleIdInRequest,
  LogicRuleRid as _api_LogicRuleRid,
  LongPropertyType as _api_LongPropertyType,
  MarkingId as _api_MarkingId,
  MarkingPropertyType as _api_MarkingPropertyType,
  MediaReferencePropertyType as _api_MediaReferencePropertyType,
  MediaSetRid as _api_MediaSetRid,
  MediaSetViewLocator as _api_MediaSetViewLocator,
  MediaSourceRid as _api_MediaSourceRid,
  ObjectTypeApiName as _api_ObjectTypeApiName,
  ObjectTypeDisplayMetadata as _api_ObjectTypeDisplayMetadata,
  ObjectTypeFieldApiName as _api_ObjectTypeFieldApiName,
  ObjectTypeId as _api_ObjectTypeId,
  ObjectTypePeeringMetadataV1 as _api_ObjectTypePeeringMetadataV1,
  ObjectTypeRid as _api_ObjectTypeRid,
  ObjectTypeStatus as _api_ObjectTypeStatus,
  OneToManyLinkCardinalityHint as _api_OneToManyLinkCardinalityHint,
  OntologyApiName as _api_OntologyApiName,
  OntologyBranchRid as _api_OntologyBranchRid,
  OntologyPackageRid as _api_OntologyPackageRid,
  OntologyRid as _api_OntologyRid,
  OntologyVersion as _api_OntologyVersion,
  OrganizationMarkingId as _api_OrganizationMarkingId,
  ParameterId as _api_ParameterId,
  ParameterRid as _api_ParameterRid,
  PolicyVersion as _api_PolicyVersion,
  PrimaryKeyConstraint as _api_PrimaryKeyConstraint,
  PropertySecurityGroupsModification as _api_PropertySecurityGroupsModification,
  PropertyTypeDisplayMetadata as _api_PropertyTypeDisplayMetadata,
  PropertyTypeId as _api_PropertyTypeId,
  PropertyTypeMappingInfo as _api_PropertyTypeMappingInfo,
  PropertyTypeRid as _api_PropertyTypeRid,
  PutParameterRequest as _api_PutParameterRequest,
  PutParameterRequestModification as _api_PutParameterRequestModification,
  PutSectionRequest as _api_PutSectionRequest,
  RestrictedViewRid as _api_RestrictedViewRid,
  RetentionConfig as _api_RetentionConfig,
  RetentionPolicy as _api_RetentionPolicy,
  RuleSetRid as _api_RuleSetRid,
  SectionId as _api_SectionId,
  SectionRid as _api_SectionRid,
  SharedPropertyTypeDisplayMetadata as _api_SharedPropertyTypeDisplayMetadata,
  SharedPropertyTypeIdInRequest as _api_SharedPropertyTypeIdInRequest,
  SharedPropertyTypeRid as _api_SharedPropertyTypeRid,
  SharedPropertyTypeRidOrIdInRequest as _api_SharedPropertyTypeRidOrIdInRequest,
  ShortPropertyType as _api_ShortPropertyType,
  StreamLocator as _api_StreamLocator,
  StringPropertyType as _api_StringPropertyType,
  StructFieldAlias as _api_StructFieldAlias,
  StructFieldApiNameOrRid as _api_StructFieldApiNameOrRid,
  StructFieldDisplayMetadata as _api_StructFieldDisplayMetadata,
  StructFieldRid as _api_StructFieldRid,
  TableRid as _api_TableRid,
  TimeSeriesSyncRid as _api_TimeSeriesSyncRid,
  TimestampPropertyType as _api_TimestampPropertyType,
  TypeClass as _api_TypeClass,
  TypeGroupDisplayMetadata as _api_TypeGroupDisplayMetadata,
  TypeGroupIdInRequest as _api_TypeGroupIdInRequest,
  TypeGroupRid as _api_TypeGroupRid,
  TypeGroupRidOrIdInRequest as _api_TypeGroupRidOrIdInRequest,
  ValidationRuleIdInRequest as _api_ValidationRuleIdInRequest,
  ValidationRuleModification as _api_ValidationRuleModification,
  ValidationRuleRid as _api_ValidationRuleRid,
  ValueReferenceId as _api_ValueReferenceId,
  ValueTypeRid as _api_ValueTypeRid,
  ValueTypeVersionId as _api_ValueTypeVersionId,
  VectorPropertyType as _api_VectorPropertyType,
  WorkflowObjectTypeTraitId as _api_WorkflowObjectTypeTraitId,
  WorkflowObjectTypeTraitPropertyId as _api_WorkflowObjectTypeTraitPropertyId,
  WorkflowObjectTypeTraitReference as _api_WorkflowObjectTypeTraitReference,
  WorkflowObjectTypeTraitVersion as _api_WorkflowObjectTypeTraitVersion,
} from "../__components.js";
import type { DerivedPropertiesDefinitionModification as _api_derivedproperties_DerivedPropertiesDefinitionModification } from "../derivedproperties/__components.js";
import type {
  EditsResolutionStrategy as _api_entitymetadata_EditsResolutionStrategy,
  ObjectDbType as _api_entitymetadata_ObjectDbType,
  ObjectDbTypeConfig as _api_entitymetadata_ObjectDbTypeConfig,
  ObjectTypeAlias as _api_entitymetadata_ObjectTypeAlias,
  PatchApplicationStrategy as _api_entitymetadata_PatchApplicationStrategy,
  SharedPropertyTypeAlias as _api_entitymetadata_SharedPropertyTypeAlias,
  StreamingConsistencyGuarantee
    as _api_entitymetadata_StreamingConsistencyGuarantee,
  StreamingProfileConfig as _api_entitymetadata_StreamingProfileConfig,
  TransformProfileConfig as _api_entitymetadata_TransformProfileConfig,
  TransitionWindows as _api_entitymetadata_TransitionWindows,
} from "../entitymetadata/__components.js";
import type {
  BuilderEntityProvenance
    as _api_entitymetadata_provenance_BuilderEntityProvenance,
  EditsHistoryProvenance
    as _api_entitymetadata_provenance_EditsHistoryProvenance,
  MarketplaceEntityProvenance
    as _api_entitymetadata_provenance_MarketplaceEntityProvenance,
} from "../entitymetadata/provenance/__components.js";
import type {
  RuleChain as _api_formatting_RuleChain,
  RuleSet as _api_formatting_RuleSet,
  RuleSetBindingModification as _api_formatting_RuleSetBindingModification,
  RuleSetCreate as _api_formatting_RuleSetCreate,
  RuleSetIdentifier as _api_formatting_RuleSetIdentifier,
  RuleSetIdInRequest as _api_formatting_RuleSetIdInRequest,
  RuleSetNamedType as _api_formatting_RuleSetNamedType,
  ValueReferenceSourceModification
    as _api_formatting_ValueReferenceSourceModification,
} from "../formatting/__components.js";
import type {
  PermissionModel as _api_permissions_PermissionModel,
  RoleGrant as _api_permissions_RoleGrant,
  RoleGrantPatch as _api_permissions_RoleGrantPatch,
} from "../permissions/__components.js";
import type {
  ResetSchemaMigrationsAndDropEditParameters
    as _api_schemamigrations_ResetSchemaMigrationsAndDropEditParameters,
  SchemaMigrationInitialization
    as _api_schemamigrations_SchemaMigrationInitialization,
  SchemaMigrationModification
    as _api_schemamigrations_SchemaMigrationModification,
} from "../schemamigrations/__components.js";
import type {
  ExternalMappingConfiguration as _api_typemapping_ExternalMappingConfiguration,
  ExternalMappingConfigurationFilter
    as _api_typemapping_ExternalMappingConfigurationFilter,
  GothamMappingConfiguration as _api_typemapping_GothamMappingConfiguration,
  ObjectTypeGothamMappingModification
    as _api_typemapping_ObjectTypeGothamMappingModification,
  SharedPropertyTypeGothamMappingModification
    as _api_typemapping_SharedPropertyTypeGothamMappingModification,
} from "../typemapping/__components.js";
import type { LinkTypeSide as _api_types_LinkTypeSide } from "../types/__components.js";
import type { OntologyValidationError as _api_validation_OntologyValidationError } from "../validation/__components.js";

/**
 * This signals to OMA that the Object Type will be regenerated as the Action Type changes, rather than modified
 * directly by the user. Also, OMA should not validate that the backing dataset has the required columns, as
 * these will instead be generated on save.
 */
export interface ActionLogMetadataModification {
  actionTypeIdentifiers: Array<_api_ActionTypeIdentifier>;
}
/**
 * Action Log is not required for ActionTypes that edit this ObjectType.
 */
export interface ActionLogNotRequiredModification {
}
/**
 * Action Log is required for ActionTypes that edit this ObjectType.
 */
export interface ActionLogRequiredModification {
}
export interface ActionLogRequirednessModification_actionLogNotRequired {
  type: "actionLogNotRequired";
  actionLogNotRequired: ActionLogNotRequiredModification;
}

export interface ActionLogRequirednessModification_actionLogRequired {
  type: "actionLogRequired";
  actionLogRequired: ActionLogRequiredModification;
}
/**
 * The constraints on Action Log requiredness when the ObjectType is being edited. Currently logging is either
 * required or it is not, but further types of constraint may be added in the future.
 */
export type ActionLogRequirednessModification =
  | ActionLogRequirednessModification_actionLogNotRequired
  | ActionLogRequirednessModification_actionLogRequired;

/**
 * Internal request object to edit existing Action Types, useful in certain conversions.
 */
export interface ActionTypeModification {
  actionApplyClientSettings?:
    | _api_ActionApplyClientPreferences
    | null
    | undefined;
  actionLogConfiguration?: _api_ActionLogConfiguration | null | undefined;
  apiName: _api_ActionTypeApiName;
  branchSettings?: _api_ActionTypeBranchSettingsModification | null | undefined;
  displayMetadata: _api_ActionTypeDisplayMetadataModification;
  entities?: _api_ActionTypeEntities | null | undefined;
  formContentOrdering?: Array<_api_FormContent> | null | undefined;
  logic: _api_ActionLogicModification;
  logicRulesToCreate: Record<_api_LogicRuleIdInRequest, _api_LogicRuleRid>;
  notifications: Array<_api_ActionNotificationModification>;
  notificationSettings?: _api_ActionNotificationSettings | null | undefined;
  parameterOrdering: Array<_api_ParameterId>;
  parametersToCreate: Record<
    _api_ParameterRid,
    PutParameterRequestModificationWithId
  >;
  parametersToDelete: Array<_api_ParameterRid>;
  parametersToUpdate: Record<
    _api_ParameterRid,
    _api_EditParameterRequestModification
  >;
  provenance?: _api_ActionTypeProvenanceModification | null | undefined;
  revert?: _api_ActionRevert | null | undefined;
  sectionsToCreate: Record<_api_SectionRid, PutSectionRequestWithId>;
  sectionsToDelete: Array<_api_SectionRid>;
  sectionsToUpdate: Record<_api_SectionRid, _api_EditSectionRequest>;
  stagingMediaSetRid?: _api_MediaSetRid | null | undefined;
  status?: _api_ActionTypeStatus | null | undefined;
  submissionConfiguration?:
    | _api_ActionSubmissionConfiguration
    | null
    | undefined;
  typeGroups: Array<_api_TypeGroupRid>;
  validationsOrdering: Array<_api_ValidationRuleRid>;
  validationsToCreate: Record<
    _api_ValidationRuleRid,
    ValidationRuleModificationWithIdInRequest
  >;
  validationsToDelete: Array<_api_ValidationRuleRid>;
  validationsToUpdate: Record<
    _api_ValidationRuleRid,
    _api_ValidationRuleModification
  >;
  webhooks?: _api_ActionWebhooksModification | null | undefined;
}
/**
 * This status indicates that the PropertyType will not change on short notice and should thus be safe to use in user facing workflows. They will not be removed without first being deprecated.
 */
export interface ActivePropertyTypeStatusModification {
}
/**
 * Indicates the that given object type is archived.
 */
export interface ArchivedStateModification {
}
export interface ArchiveStateModification_archivedState {
  type: "archivedState";
  archivedState: ArchivedStateModification;
}

export interface ArchiveStateModification_pendingRestorationState {
  type: "pendingRestorationState";
  pendingRestorationState: RestorationStateModification;
}
/**
 * Archive state for an OSv2 object type. It can be either Archived, or PendingRestoration. Archived means the
 * object type is archived and cannot be queried by OSS or modified by actions. PendingRestoration means that
 * restoration of the object type was requested, and Funnel is currently in the process of restoring it.
 * In the future, can have different archival modes, such as "light" archiving, where we deindex from Highbury,
 * but keep the pipelines active.
 */
export type ArchiveStateModification =
  | ArchiveStateModification_archivedState
  | ArchiveStateModification_pendingRestorationState;

/**
 * Duplicate of ArrayPropertyType in ontology-metadata-api, with the exception of the case where subtype is a
 * struct.
 */
export interface ArrayPropertyTypeModification {
  reducers: Array<ArrayPropertyTypeReducerModification>;
  subtype: TypeForModification;
}
export interface ArrayPropertyTypeReducerModification {
  direction: _api_ArrayPropertyTypeReducerSortDirection;
  field?: _api_StructFieldApiNameOrRid | null | undefined;
}
export interface BranchEntityIndexingConfigurationModification {
  parentBranchManyToManyLinkTypes: Record<
    _api_LinkTypeRid,
    ManyToManyLinkTypeBranchIndexingConfiguration
  >;
  parentBranchObjectTypes: Record<
    _api_ObjectTypeRid,
    ObjectTypeBranchIndexingConfiguration
  >;
}
/**
 * Request to check existing unique identifiers before making an Ontology modification. A maximum of 500
 * identifiers is allowed. This will also return reused ObjectTypeIds if on a multitenant stack.
 */
export interface CheckExistingUniqueIdentifiersRequest {
  perOntologyUniqueIdentifiers: Array<PerOntologyUniqueIdentifier>;
}
/**
 * Response for checkExistingUniqueIdentifiers.
 */
export interface CheckExistingUniqueIdentifiersResponse {
  existingPerOntologyUniqueIdentifiers: Array<PerOntologyUniqueIdentifier>;
}
/**
 * Duplicate of CipherTextPropertyType in ontology-metadata-api, with the exception that the plainTextType is a
 * TypeForModification.
 */
export interface CipherTextPropertyTypeModification {
  defaultCipherChannelRid?: string | null | undefined;
  plainTextType: TypeForModification;
}
export interface CompassDeletionParameters {
  blockUntilDone: boolean;
  deletionMode: CompassResourceDeletionMode;
}
/**
 * An rid identifying a Compass namespace. This rid is generated randomly and is safe for logging purposes.
 */
export type CompassNamespaceRid = string;
export type CompassResourceDeletionMode = "TRASH" | "PERMANENTLY_DELETE";
export interface CopyEditsFromParentBranchOnInitialIndexingMode {
}
export interface CopyEditsMode_copyEditsFromParentBranchOnInitialIndexing {
  type: "copyEditsFromParentBranchOnInitialIndexing";
  copyEditsFromParentBranchOnInitialIndexing:
    CopyEditsFromParentBranchOnInitialIndexingMode;
}
/**
 * Configuration describing whether/how edits should be copied from parent branch.
 */
export type CopyEditsMode =
  CopyEditsMode_copyEditsFromParentBranchOnInitialIndexing;

/**
 * Constraints that apply to any data in this property. The constraints will be enforced by the storage
 * backends. PropertyType type specific constraints can't be modified directly, since they are currently
 * loaded from value types.
 */
export interface DataConstraintsModification {
  nullability?: _api_DataNullability | null | undefined;
  nullabilityV2?: _api_DataNullabilityV2 | null | undefined;
}
/**
 * This status indicates that the PropertyType is reaching the end of its life and will be removed as per the deadline specified.
 */
export interface DeprecatedPropertyTypeStatusModification {
  deadline: string;
  message: string;
  replacedBy?: _api_PropertyTypeRid | null | undefined;
  replacedById?: _api_PropertyTypeId | null | undefined;
}
export interface DropLinkTypePeeringMetadata {
}
export interface DropObjectTypePeeringMetadata {
}
/**
 * Configuration to enable edits history. In the future specific settings may be added.
 */
export interface EditsHistoryConfigModification {
  storeAllPreviousProperties?: boolean | null | undefined;
}
/**
 * Contains configuration to import edits history from Phonograph to Funnel/Highbury. This should be set in the
 * edits history object, not in the main object.
 */
export interface EditsHistoryImportConfigurationModification {
}
export interface EditsHistoryModification_config {
  type: "config";
  config: EditsHistoryConfigModification;
}

export interface EditsHistoryModification_none {
  type: "none";
  none: NoEditsHistoryModification;
}
export type EditsHistoryModification =
  | EditsHistoryModification_config
  | EditsHistoryModification_none;

/**
 * An updated strategy to use when resolving between user edits and datasource values for this ObjectType.
 * If this modification is present, it will overwrite the existing strategies with everything present in
 * editsResolutionStrategies.
 */
export interface EditsResolutionStrategyModification {
  editsResolutionStrategies: Record<
    _api_DatasourceRid,
    _api_entitymetadata_EditsResolutionStrategy
  >;
}
export type EnabledObjectStoragesStatus =
  | "OSV1_DISABLED"
  | "OSV1_DISABLED_FOR_NEW_ENTITIES"
  | "OSV1_ENABLED";

/**
 * Contains ObjectDb configurations for a particular ObjectType or LinkType. This modification carries out a complete overwrite of the existing `objectDbTypeConfigs` Map with the provided Map in this request.
 */
export interface EntityConfigModification {
  objectDbTypeConfigs: Record<
    _api_entitymetadata_ObjectDbType,
    _api_entitymetadata_ObjectDbTypeConfig
  >;
}
export interface EntityModificationHistoryPageItem {
  attribution: _api_Attribution;
  description?: OntologyModificationDescription | null | undefined;
  modificationType: ModificationType;
  ontologyVersion: _api_OntologyVersion;
}
/**
 * Metadata describing provenance of an entity. Can only be set by the privileged owner.
 */
export interface EntityProvenanceModification {
  source: EntityProvenanceSourceModification;
}
export interface EntityProvenanceSourceModification_builder {
  type: "builder";
  builder: _api_entitymetadata_provenance_BuilderEntityProvenance;
}

export interface EntityProvenanceSourceModification_marketplace {
  type: "marketplace";
  marketplace: _api_entitymetadata_provenance_MarketplaceEntityProvenance;
}

export interface EntityProvenanceSourceModification_editsHistory {
  type: "editsHistory";
  editsHistory: _api_entitymetadata_provenance_EditsHistoryProvenance;
}

export interface EntityProvenanceSourceModification_none {
  type: "none";
  none: NoneEntityProvenance;
}
export type EntityProvenanceSourceModification =
  | EntityProvenanceSourceModification_builder
  | EntityProvenanceSourceModification_marketplace
  | EntityProvenanceSourceModification_editsHistory
  | EntityProvenanceSourceModification_none;

export interface EntityRid_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: _api_ObjectTypeRid;
}

export interface EntityRid_linkTypeRid {
  type: "linkTypeRid";
  linkTypeRid: _api_LinkTypeRid;
}

export interface EntityRid_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: _api_ActionTypeRid;
}

export interface EntityRid_interfaceTypeRid {
  type: "interfaceTypeRid";
  interfaceTypeRid: _api_InterfaceTypeRid;
}

export interface EntityRid_sharedPropertyTypeRid {
  type: "sharedPropertyTypeRid";
  sharedPropertyTypeRid: _api_SharedPropertyTypeRid;
}
/**
 * Resource identifier of the entity which you would like to download the history of
 */
export type EntityRid =
  | EntityRid_objectTypeRid
  | EntityRid_linkTypeRid
  | EntityRid_actionTypeRid
  | EntityRid_interfaceTypeRid
  | EntityRid_sharedPropertyTypeRid;

/**
 * Describes how to treat an object of this type as an event.
 */
export interface EventMetadataModification {
  descriptionPropertyTypeId?: _api_PropertyTypeId | null | undefined;
  endTimePropertyTypeId: _api_PropertyTypeId;
  eventIdPropertyTypeId: _api_PropertyTypeId;
  startTimePropertyTypeId: _api_PropertyTypeId;
}
/**
 * This status indicates that the PropertyType is an example. It is backed by notional data that should not be used for actual workflows, but can be used to test those workflows.
 */
export interface ExamplePropertyTypeStatusModification {
}
/**
 * This status indicates that the PropertyType is in development. Please refrain from using it in critical workflows as it may change/disappear at any time.
 */
export interface ExperimentalPropertyTypeStatusModification {
}
export interface GetEntityModificationHistoryRequest {
  entityRid: EntityRid;
  limit: number;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
  pageToken?: ModificationHistoryPageToken | null | undefined;
}
export interface GetEntityModificationHistoryResponse {
  entityModificationPageItems: Array<EntityModificationHistoryPageItem>;
  nextPageToken?: ModificationHistoryPageToken | null | undefined;
}
export interface GetModificationHistoryRequest {
  limit: number;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
  pageToken?: ModificationHistoryPageToken | null | undefined;
}
export interface GetModificationHistoryResponse {
  modificationPageItems: Array<ModificationHistoryPageItem>;
  nextPageToken?: ModificationHistoryPageToken | null | undefined;
}
/**
 * Request for calculating modified entities between two OntologyVersions.
 */
export interface GetModifiedEntitiesRequest {
  baseOntologyVersion: _api_OntologyVersion;
  newOntologyVersion?: _api_OntologyVersion | null | undefined;
}
/**
 * Response to a GetModifiedEntitiesRequest. Contains information about which entities have been changed
 * between two OntologyVersions.
 */
export interface GetModifiedEntitiesResponse {
  baseOntologyVersion: _api_OntologyVersion;
  diff: OntologyDiff;
  newOntologyVesion: _api_OntologyVersion;
}
export interface ImplementingLinkTypeModification {
  linkTypeRidOrId: _api_LinkTypeRidOrId;
  linkTypeSide?: _api_types_LinkTypeSide | null | undefined;
}
/**
 * A request to import SharedPropertyTypes into another ontology
 */
export interface ImportSharedPropertyTypesRequest {
  sharedPropertyTypes: Array<_api_SharedPropertyTypeRid>;
}
/**
 * A response to ImportSharedPropertyTypesRequest
 */
export interface ImportSharedPropertyTypesResponse {
}
export interface InlineActionTypeModification {
  actionTypeIdentifier: _api_ActionTypeIdentifier;
  displayOptions: _api_InlineActionDisplayOptions;
  parameterId?: _api_ParameterId | null | undefined;
}
export interface InterfaceAndObjectPropertyStructField {
  interfaceStructPropertyTypeField: _api_StructFieldApiNameOrRid;
  objectStructPropertyTypeField: _api_StructFieldApiNameOrRid;
}
export interface InterfaceArrayPropertyTypeModification {
  subtype: InterfacePropertyTypeTypeForModification;
}
export interface InterfaceCipherTextPropertyTypeModification {
  defaultCipherChannelRid?: string | null | undefined;
  plainTextType: InterfacePropertyTypeTypeForModification;
}
export interface InterfaceDefinedPropertyTypeConstraintsModification {
  dataConstraints?: DataConstraintsModification | null | undefined;
  indexedForSearch: boolean;
  primaryKeyConstraint: _api_PrimaryKeyConstraint;
  requireImplementation: boolean;
  typeClasses: Array<_api_TypeClass>;
  valueType?: ValueTypeReferenceModification | null | undefined;
}
export interface InterfaceDefinedPropertyTypeModification {
  apiName: _api_InterfacePropertyTypeApiName;
  baseFormatter?: _api_BaseFormatter | null | undefined;
  constraints: InterfaceDefinedPropertyTypeConstraintsModification;
  displayMetadata: _api_InterfacePropertyTypeDisplayMetadata;
  type: InterfacePropertyTypeTypeForModification;
}
export interface InterfaceLinkTypeImplementationModification {
  interfaceLinkTypeRidOrIdInRequest: _api_InterfaceLinkTypeRidOrIdInRequest;
  linkTypeIds: Array<_api_LinkTypeId>;
}
export interface InterfaceLinkTypeImplementationModificationV2 {
  interfaceLinkTypeRidOrIdInRequest: _api_InterfaceLinkTypeRidOrIdInRequest;
  linkTypes: Array<ImplementingLinkTypeModification>;
}
export interface InterfaceLinkTypeModification {
  cardinality: _api_InterfaceLinkTypeCardinality;
  id: _api_InterfaceLinkTypeRidOrIdInRequest;
  linkedEntityTypeRidOrIdInRequest: _api_LinkedEntityTypeRidOrIdInRequest;
  metadata: _api_InterfaceLinkTypeMetadata;
  required: boolean;
}
export interface InterfacePropertyImplementationModification {
  propertyTypeId: _api_PropertyTypeId;
  sharedPropertyTypeRidOrIdInRequest: _api_SharedPropertyTypeRidOrIdInRequest;
}
export interface InterfacePropertyImplementationModificationV2 {
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
  propertyImplementation: InterfacePropertyTypeImplementationModification;
}
export interface InterfacePropertyTypeImplementationModification_propertyTypeId {
  type: "propertyTypeId";
  propertyTypeId: _api_PropertyTypeId;
}

export interface InterfacePropertyTypeImplementationModification_structPropertyTypeMapping {
  type: "structPropertyTypeMapping";
  structPropertyTypeMapping: StructPropertyTypeImplementationModification;
}

export interface InterfacePropertyTypeImplementationModification_structField {
  type: "structField";
  structField: StructFieldImplementationModification;
}

export interface InterfacePropertyTypeImplementationModification_reducedProperty {
  type: "reducedProperty";
  reducedProperty: ReducedPropertyTypeImplementationModification;
}
export type InterfacePropertyTypeImplementationModification =
  | InterfacePropertyTypeImplementationModification_propertyTypeId
  | InterfacePropertyTypeImplementationModification_structPropertyTypeMapping
  | InterfacePropertyTypeImplementationModification_structField
  | InterfacePropertyTypeImplementationModification_reducedProperty;

export interface InterfacePropertyTypeModification_sharedPropertyBasedPropertyType {
  type: "sharedPropertyBasedPropertyType";
  sharedPropertyBasedPropertyType: SharedPropertyBasedPropertyTypeModification;
}

export interface InterfacePropertyTypeModification_interfaceDefinedPropertyType {
  type: "interfaceDefinedPropertyType";
  interfaceDefinedPropertyType: InterfaceDefinedPropertyTypeModification;
}
export type InterfacePropertyTypeModification =
  | InterfacePropertyTypeModification_sharedPropertyBasedPropertyType
  | InterfacePropertyTypeModification_interfaceDefinedPropertyType;

export interface InterfacePropertyTypeModificationWithRidOrIdInRequest {
  interfacePropertyTypeModification: InterfacePropertyTypeModification;
  interfacePropertyTypeRidOrIdInRequest:
    _api_InterfacePropertyTypeRidOrIdInRequest;
}
export interface InterfacePropertyTypeTypeForModification_array {
  type: "array";
  array: InterfaceArrayPropertyTypeModification;
}

export interface InterfacePropertyTypeTypeForModification_boolean {
  type: "boolean";
  boolean: _api_BooleanPropertyType;
}

export interface InterfacePropertyTypeTypeForModification_byte {
  type: "byte";
  byte: _api_BytePropertyType;
}

export interface InterfacePropertyTypeTypeForModification_date {
  type: "date";
  date: _api_DatePropertyType;
}

export interface InterfacePropertyTypeTypeForModification_decimal {
  type: "decimal";
  decimal: _api_DecimalPropertyType;
}

export interface InterfacePropertyTypeTypeForModification_double {
  type: "double";
  double: _api_DoublePropertyType;
}

export interface InterfacePropertyTypeTypeForModification_float {
  type: "float";
  float: _api_FloatPropertyType;
}

export interface InterfacePropertyTypeTypeForModification_geohash {
  type: "geohash";
  geohash: _api_GeohashPropertyType;
}

export interface InterfacePropertyTypeTypeForModification_geoshape {
  type: "geoshape";
  geoshape: _api_GeoshapePropertyType;
}

export interface InterfacePropertyTypeTypeForModification_integer {
  type: "integer";
  integer: _api_IntegerPropertyType;
}

export interface InterfacePropertyTypeTypeForModification_long {
  type: "long";
  long: _api_LongPropertyType;
}

export interface InterfacePropertyTypeTypeForModification_short {
  type: "short";
  short: _api_ShortPropertyType;
}

export interface InterfacePropertyTypeTypeForModification_string {
  type: "string";
  string: _api_StringPropertyType;
}

export interface InterfacePropertyTypeTypeForModification_experimentalTimeDependentV1 {
  type: "experimentalTimeDependentV1";
  experimentalTimeDependentV1: _api_ExperimentalTimeDependentPropertyTypeV1;
}

export interface InterfacePropertyTypeTypeForModification_timestamp {
  type: "timestamp";
  timestamp: _api_TimestampPropertyType;
}

export interface InterfacePropertyTypeTypeForModification_attachment {
  type: "attachment";
  attachment: _api_AttachmentPropertyType;
}

export interface InterfacePropertyTypeTypeForModification_marking {
  type: "marking";
  marking: _api_MarkingPropertyType;
}

export interface InterfacePropertyTypeTypeForModification_cipherText {
  type: "cipherText";
  cipherText: InterfaceCipherTextPropertyTypeModification;
}

export interface InterfacePropertyTypeTypeForModification_mediaReference {
  type: "mediaReference";
  mediaReference: _api_MediaReferencePropertyType;
}

export interface InterfacePropertyTypeTypeForModification_vector {
  type: "vector";
  vector: _api_VectorPropertyType;
}

export interface InterfacePropertyTypeTypeForModification_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: _api_GeotimeSeriesReferencePropertyType;
}

export interface InterfacePropertyTypeTypeForModification_struct {
  type: "struct";
  struct: InterfaceStructPropertyTypeModification;
}
/**
 * Duplicate of TypeForModification, with the exception of InterfaceStructPropertyTypeModification and
 * InterfaceArrayPropertyTypeModification. InterfaceStructPropertyTypeModification has an added
 * requireImplementation field to allow for optional struct fields on interface property types.
 */
export type InterfacePropertyTypeTypeForModification =
  | InterfacePropertyTypeTypeForModification_array
  | InterfacePropertyTypeTypeForModification_boolean
  | InterfacePropertyTypeTypeForModification_byte
  | InterfacePropertyTypeTypeForModification_date
  | InterfacePropertyTypeTypeForModification_decimal
  | InterfacePropertyTypeTypeForModification_double
  | InterfacePropertyTypeTypeForModification_float
  | InterfacePropertyTypeTypeForModification_geohash
  | InterfacePropertyTypeTypeForModification_geoshape
  | InterfacePropertyTypeTypeForModification_integer
  | InterfacePropertyTypeTypeForModification_long
  | InterfacePropertyTypeTypeForModification_short
  | InterfacePropertyTypeTypeForModification_string
  | InterfacePropertyTypeTypeForModification_experimentalTimeDependentV1
  | InterfacePropertyTypeTypeForModification_timestamp
  | InterfacePropertyTypeTypeForModification_attachment
  | InterfacePropertyTypeTypeForModification_marking
  | InterfacePropertyTypeTypeForModification_cipherText
  | InterfacePropertyTypeTypeForModification_mediaReference
  | InterfacePropertyTypeTypeForModification_vector
  | InterfacePropertyTypeTypeForModification_geotimeSeriesReference
  | InterfacePropertyTypeTypeForModification_struct;

export interface InterfaceSharedPropertyTypeModification {
  required: boolean;
  sharedPropertyTypeRidOrIdInRequest: _api_SharedPropertyTypeRidOrIdInRequest;
}
export interface InterfaceStructFieldTypeModification {
  aliases: Array<_api_StructFieldAlias>;
  apiName: _api_ObjectTypeFieldApiName;
  displayMetadata: _api_StructFieldDisplayMetadata;
  fieldType: InterfacePropertyTypeTypeForModification;
  requireImplementation: boolean;
  rid?: _api_StructFieldRid | null | undefined;
  typeClasses: Array<_api_TypeClass>;
}
export interface InterfaceStructPropertyTypeModification {
  structFields: Array<InterfaceStructFieldTypeModification>;
}
/**
 * This includes metadata which can be used by front-ends when displaying an interface.
 */
export interface InterfaceTypeDisplayMetadataModification {
  description?: string | null | undefined;
  displayName: string;
  icon?: _api_Icon | null | undefined;
}
export interface InterfaceTypeModification {
  apiName: _api_InterfaceTypeApiName;
  displayMetadata: InterfaceTypeDisplayMetadataModification;
  extendsInterfaces: Array<_api_InterfaceTypeRidOrIdInRequest>;
  links: Array<InterfaceLinkTypeModification>;
  properties: Array<_api_SharedPropertyTypeRidOrIdInRequest>;
  propertiesV2: Array<InterfaceSharedPropertyTypeModification>;
  propertiesV3: Array<InterfacePropertyTypeModificationWithRidOrIdInRequest>;
  provenance?: EntityProvenanceModification | null | undefined;
  searchable?: boolean | null | undefined;
  status: _api_InterfaceTypeStatus;
}
/**
 * Represents a link between two ObjectTypes with an intermediary ObjectType acting as a bridge.
 * This LinkType can be used to jump from ObjectType A to B without specifying two separate search-arounds.
 * This LinkType can also be used to simulate a ManyToMany LinkType backed by an RV, or a ManyToMany LinkType
 * with properties.
 */
export interface IntermediaryLinkDefinitionModification {
  aToIntermediaryLinkTypeId: _api_LinkTypeId;
  intermediaryObjectTypeId: _api_ObjectTypeId;
  intermediaryToBLinkTypeId: _api_LinkTypeId;
  objectTypeAToBLinkMetadata: _api_LinkTypeMetadata;
  objectTypeBToALinkMetadata: _api_LinkTypeMetadata;
  objectTypeIdA: _api_ObjectTypeId;
  objectTypeIdB: _api_ObjectTypeId;
}
export interface LinkDefinitionModification_manyToMany {
  type: "manyToMany";
  manyToMany: ManyToManyLinkDefinitionModification;
}

export interface LinkDefinitionModification_oneToMany {
  type: "oneToMany";
  oneToMany: OneToManyLinkDefinitionModification;
}

export interface LinkDefinitionModification_intermediary {
  type: "intermediary";
  intermediary: IntermediaryLinkDefinitionModification;
}
export type LinkDefinitionModification =
  | LinkDefinitionModification_manyToMany
  | LinkDefinitionModification_oneToMany
  | LinkDefinitionModification_intermediary;

export interface LinkTypeCreate {
  linkType: LinkTypeModification;
  packageRid?: _api_OntologyPackageRid | null | undefined;
  projectRid?: _api_CompassFolderRid | null | undefined;
}
export interface LinkTypeDelete {
}
export interface LinkTypeEntityMetadataModifyRequest {
  arePatchesEnabled?: boolean | null | undefined;
  entityConfig?: EntityConfigModification | null | undefined;
  provenance?: EntityProvenanceModification | null | undefined;
  targetStorageBackend?: StorageBackendModification | null | undefined;
}
export interface LinkTypeModification {
  definition: LinkDefinitionModification;
  description?: string | null | undefined;
  linkTypeId: _api_LinkTypeId;
  status?: _api_LinkTypeStatus | null | undefined;
}
export interface LinkTypeModifyRequest_create {
  type: "create";
  create: LinkTypeCreate;
}

export interface LinkTypeModifyRequest_update {
  type: "update";
  update: LinkTypeUpdate;
}

export interface LinkTypeModifyRequest_delete {
  type: "delete";
  delete: LinkTypeDelete;
}
export type LinkTypeModifyRequest =
  | LinkTypeModifyRequest_create
  | LinkTypeModifyRequest_update
  | LinkTypeModifyRequest_delete;

export interface LinkTypePeeringMetadataModification_drop {
  type: "drop";
  drop: DropLinkTypePeeringMetadata;
}

export interface LinkTypePeeringMetadataModification_v1 {
  type: "v1";
  v1: _api_LinkTypePeeringMetadataV1;
}
export type LinkTypePeeringMetadataModification =
  | LinkTypePeeringMetadataModification_drop
  | LinkTypePeeringMetadataModification_v1;

export interface LinkTypeUpdate {
  linkType: LinkTypeModification;
}
/**
 * Request to load all visible Ontologies. This is only expected to be used by Ontology Metadata App.
 */
export interface LoadAllOntologiesInternalRequest {
  externalMappingConfigurationFilters: Array<
    _api_typemapping_ExternalMappingConfigurationFilter
  >;
  includeEmptyDefaultOntology?: boolean | null | undefined;
}
/**
 * Response to LoadAllOntologiesInternalRequest. This includes information
 * about the Ontologies that a user can access. It is expected
 * that only administrative users should have access to multiple
 * Ontologies. This is only expected to be used by Ontology Metadata App.
 */
export interface LoadAllOntologiesInternalResponse {
  ontologies: Record<_api_OntologyRid, OntologyInformationInternal>;
}
export interface ManyToManyLinkDefinitionModification {
  objectTypeAToBLinkMetadata: _api_LinkTypeMetadata;
  objectTypeBToALinkMetadata: _api_LinkTypeMetadata;
  objectTypeIdA: _api_ObjectTypeId;
  objectTypeIdB: _api_ObjectTypeId;
  peeringMetadata?: LinkTypePeeringMetadataModification | null | undefined;
}
export interface ManyToManyLinkTypeBranchIndexingConfiguration {
  copyEditsMode: CopyEditsMode;
}
export interface ManyToManyLinkTypeDatasetDatasourceModification {
  datasetRid: _api_DatasetRid;
  objectTypeAPrimaryKeyMapping: Record<_api_PropertyTypeId, _api_ColumnName>;
  objectTypeBPrimaryKeyMapping: Record<_api_PropertyTypeId, _api_ColumnName>;
  writebackDatasetRid?: _api_DatasetRid | null | undefined;
}
export interface ManyToManyLinkTypeDatasourceCreate {
  editsConfiguration?: _api_EditsConfiguration | null | undefined;
  manyToManyLinkTypeDatasourceDefinition:
    ManyToManyLinkTypeDatasourceModificationDefinition;
}
export interface ManyToManyLinkTypeDatasourceDelete {
  datasourceRid: _api_DatasourceRid;
}
export interface ManyToManyLinkTypeDatasourceModificationDefinition_dataset {
  type: "dataset";
  dataset: ManyToManyLinkTypeDatasetDatasourceModification;
}

export interface ManyToManyLinkTypeDatasourceModificationDefinition_stream {
  type: "stream";
  stream: ManyToManyLinkTypeStreamDatasourceModification;
}
/**
 * Wrapper type for all supported many to many link type datasource types.
 */
export type ManyToManyLinkTypeDatasourceModificationDefinition =
  | ManyToManyLinkTypeDatasourceModificationDefinition_dataset
  | ManyToManyLinkTypeDatasourceModificationDefinition_stream;

export interface ManyToManyLinkTypeDatasourceModifyRequest_create {
  type: "create";
  create: ManyToManyLinkTypeDatasourceCreate;
}

export interface ManyToManyLinkTypeDatasourceModifyRequest_update {
  type: "update";
  update: ManyToManyLinkTypeDatasourceUpdate;
}

export interface ManyToManyLinkTypeDatasourceModifyRequest_delete {
  type: "delete";
  delete: ManyToManyLinkTypeDatasourceDelete;
}
export type ManyToManyLinkTypeDatasourceModifyRequest =
  | ManyToManyLinkTypeDatasourceModifyRequest_create
  | ManyToManyLinkTypeDatasourceModifyRequest_update
  | ManyToManyLinkTypeDatasourceModifyRequest_delete;

export interface ManyToManyLinkTypeDatasourceUpdate {
  editsConfiguration?: _api_EditsConfiguration | null | undefined;
  manyToManyLinkTypeDatasourceDefinition:
    ManyToManyLinkTypeDatasourceModificationDefinition;
  rid: _api_DatasourceRid;
}
export interface ManyToManyLinkTypeStreamDatasourceModification {
  objectTypeAPrimaryKeyMapping: Record<_api_PropertyTypeId, _api_ColumnName>;
  objectTypeBPrimaryKeyMapping: Record<_api_PropertyTypeId, _api_ColumnName>;
  retentionPolicy: _api_RetentionPolicy;
  streamLocator: _api_StreamLocator;
}
/**
 * Request to set the migration configuration for the Phonograph to Highbury migration for an entity.
 */
export interface MigrationConfigurationModification {
  importEditsHistory?: boolean | null | undefined;
  minMigrationDuration: string;
  transitionRetryLimit: number;
  transitionWindows: _api_entitymetadata_TransitionWindows;
}
export interface ModificationHistoryPageItem {
  attribution: _api_Attribution;
  description?: OntologyModificationDescription | null | undefined;
  ontologyVersion: _api_OntologyVersion;
  previousOntologyVersion?: _api_OntologyVersion | null | undefined;
  sourceOntologyBranchRid?: _api_OntologyBranchRid | null | undefined;
  summary: ModificationHistoryPageItemSummary;
}
export interface ModificationHistoryPageItemSummary {
  affectedActionTypes: Record<_api_ActionTypeRid, ModificationType>;
  affectedInterfaceTypes: Record<_api_InterfaceTypeRid, ModificationType>;
  affectedLinkTypeEntityMetadatas: Record<_api_LinkTypeRid, ModificationType>;
  affectedLinkTypes: Record<_api_LinkTypeRid, ModificationType>;
  affectedManyToManyLinkTypeDatasources: Record<
    _api_LinkTypeRid,
    Record<_api_DatasourceRid, ModificationType>
  >;
  affectedObjectTypeDatasources: Record<
    _api_ObjectTypeRid,
    Record<_api_DatasourceRid, ModificationType>
  >;
  affectedObjectTypeEntityMetadatas: Record<
    _api_ObjectTypeRid,
    ModificationType
  >;
  affectedObjectTypes: Record<_api_ObjectTypeRid, ModificationType>;
  affectedObjectTypeSchemaMigrations: Record<
    _api_ObjectTypeRid,
    ModificationType
  >;
  affectedRuleSets: Record<_api_RuleSetRid, ModificationType>;
  affectedSharedPropertyTypes: Record<
    _api_SharedPropertyTypeRid,
    ModificationType
  >;
  affectedTypeGroups: Record<_api_TypeGroupRid, ModificationType>;
}
/**
 * A paging token to be passed back to get the next page of results. Clients shouldn't make any assumptions
 * about the content of the paging token and it should not be parsed/modified.
 */
export type ModificationHistoryPageToken = string;
export type ModificationType = "CREATED" | "DELETED" | "UPDATED";
export interface NestedInterfacePropertyTypeImplementationModification_propertyTypeId {
  type: "propertyTypeId";
  propertyTypeId: _api_PropertyTypeId;
}

export interface NestedInterfacePropertyTypeImplementationModification_structPropertyTypeMapping {
  type: "structPropertyTypeMapping";
  structPropertyTypeMapping: StructPropertyTypeImplementationModification;
}

export interface NestedInterfacePropertyTypeImplementationModification_structField {
  type: "structField";
  structField: StructFieldImplementationModification;
}
export type NestedInterfacePropertyTypeImplementationModification =
  | NestedInterfacePropertyTypeImplementationModification_propertyTypeId
  | NestedInterfacePropertyTypeImplementationModification_structPropertyTypeMapping
  | NestedInterfacePropertyTypeImplementationModification_structField;

/**
 * Configuration for disabled edits history.
 */
export interface NoEditsHistoryModification {
}
export interface NoneEntityProvenance {
}
/**
 * Entity can be stored in Phonograph. Note that it is not guaranteed that the object type or link type is
 * currently registered with Phonograph. There is no guarantee the object type or link type has finished
 * syncing and is queryable via Phonograph.
 */
export interface ObjectStorageV1Modification {
}
/**
 * Entity can be stored in Highbury and other V2 Object DBs. It is not possible to store the entity in Phonograph.
 * Edits can be enabled or disabled using the `arePatchesEnabled` field in ObjectTypeEntityMetadata/LinkTypeEntityMetadata.
 *
 * Note that this field indicates a target state. There is no guarantee that the object type or link type has
 * finished syncing. A migration may currently be in progress and queries may still be served by Phonograph during
 * particular stages of the migration process.
 *
 * In order to determine whether the object type or link type can be queried via OSv2 the Funnel getCurrentView
 * endpoint can be used.
 */
export interface ObjectStorageV2Modification {
  archiveState?: ArchiveStateModification | null | undefined;
  editsHistoryImportConfiguration?:
    | EditsHistoryImportConfigurationModification
    | null
    | undefined;
  migrationConfiguration?:
    | MigrationConfigurationModification
    | null
    | undefined;
}
export interface ObjectTypeBranchIndexingConfiguration {
  copyEditsMode: CopyEditsMode;
}
export interface ObjectTypeCreate {
  objectType: ObjectTypeModification;
  packageRid?: _api_OntologyPackageRid | null | undefined;
  projectRid?: _api_CompassFolderRid | null | undefined;
}
/**
 * Deprecated in favor of ObjectTypeDatasetDatasourceV2Modification
 */
export interface ObjectTypeDatasetDatasourceModification {
  datasetRid: _api_DatasetRid;
  propertyMapping: Record<_api_PropertyTypeId, _api_ColumnName>;
  writebackDatasetRid?: _api_DatasetRid | null | undefined;
}
export interface ObjectTypeDatasetDatasourceV2Modification {
  datasetRid: _api_DatasetRid;
  propertyMapping: Record<_api_PropertyTypeId, _api_PropertyTypeMappingInfo>;
}
export interface ObjectTypeDatasetDatasourceV3Modification {
  datasetRid: _api_DatasetRid;
  propertyMapping: Record<_api_PropertyTypeId, _api_PropertyTypeMappingInfo>;
  propertySecurityGroups?:
    | _api_PropertySecurityGroupsModification
    | null
    | undefined;
}
export interface ObjectTypeDatasourceCreate {
  dataSecurity?: _api_DataSecurity | null | undefined;
  editsConfiguration?: _api_EditsConfiguration | null | undefined;
  objectTypeDatasourceDefinition: ObjectTypeDatasourceModificationDefinition;
}
export interface ObjectTypeDatasourceDelete {
  datasourceRid: _api_DatasourceRid;
}
export interface ObjectTypeDatasourceModificationDefinition_dataset {
  type: "dataset";
  dataset: ObjectTypeDatasetDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_stream {
  type: "stream";
  stream: ObjectTypeStreamDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_streamV2 {
  type: "streamV2";
  streamV2: ObjectTypeStreamDatasourceV2Modification;
}

export interface ObjectTypeDatasourceModificationDefinition_streamV3 {
  type: "streamV3";
  streamV3: ObjectTypeStreamDatasourceV3Modification;
}

export interface ObjectTypeDatasourceModificationDefinition_restrictedStream {
  type: "restrictedStream";
  restrictedStream: ObjectTypeRestrictedStreamDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_restrictedView {
  type: "restrictedView";
  restrictedView: ObjectTypeRestrictedViewDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_timeSeries {
  type: "timeSeries";
  timeSeries: ObjectTypeTimeSeriesDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_datasetV2 {
  type: "datasetV2";
  datasetV2: ObjectTypeDatasetDatasourceV2Modification;
}

export interface ObjectTypeDatasourceModificationDefinition_datasetV3 {
  type: "datasetV3";
  datasetV3: ObjectTypeDatasetDatasourceV3Modification;
}

export interface ObjectTypeDatasourceModificationDefinition_restrictedViewV2 {
  type: "restrictedViewV2";
  restrictedViewV2: ObjectTypeRestrictedViewDatasourceV2Modification;
}

export interface ObjectTypeDatasourceModificationDefinition_media {
  type: "media";
  media: ObjectTypeMediaDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_mediaSetView {
  type: "mediaSetView";
  mediaSetView: ObjectTypeMediaSetViewDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_geotimeSeries {
  type: "geotimeSeries";
  geotimeSeries: ObjectTypeGeotimeSeriesDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_table {
  type: "table";
  table: ObjectTypeTableDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_editsOnly {
  type: "editsOnly";
  editsOnly: ObjectTypeEditsOnlyDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_direct {
  type: "direct";
  direct: ObjectTypeDirectDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_derived {
  type: "derived";
  derived: ObjectTypeDerivedPropertiesDatasourceModification;
}
/**
 * Wrapper type for all supported object type datasource types.
 */
export type ObjectTypeDatasourceModificationDefinition =
  | ObjectTypeDatasourceModificationDefinition_dataset
  | ObjectTypeDatasourceModificationDefinition_stream
  | ObjectTypeDatasourceModificationDefinition_streamV2
  | ObjectTypeDatasourceModificationDefinition_streamV3
  | ObjectTypeDatasourceModificationDefinition_restrictedStream
  | ObjectTypeDatasourceModificationDefinition_restrictedView
  | ObjectTypeDatasourceModificationDefinition_timeSeries
  | ObjectTypeDatasourceModificationDefinition_datasetV2
  | ObjectTypeDatasourceModificationDefinition_datasetV3
  | ObjectTypeDatasourceModificationDefinition_restrictedViewV2
  | ObjectTypeDatasourceModificationDefinition_media
  | ObjectTypeDatasourceModificationDefinition_mediaSetView
  | ObjectTypeDatasourceModificationDefinition_geotimeSeries
  | ObjectTypeDatasourceModificationDefinition_table
  | ObjectTypeDatasourceModificationDefinition_editsOnly
  | ObjectTypeDatasourceModificationDefinition_direct
  | ObjectTypeDatasourceModificationDefinition_derived;

export interface ObjectTypeDatasourceModifyRequest_create {
  type: "create";
  create: ObjectTypeDatasourceCreate;
}

export interface ObjectTypeDatasourceModifyRequest_update {
  type: "update";
  update: ObjectTypeDatasourceUpdate;
}

export interface ObjectTypeDatasourceModifyRequest_delete {
  type: "delete";
  delete: ObjectTypeDatasourceDelete;
}
export type ObjectTypeDatasourceModifyRequest =
  | ObjectTypeDatasourceModifyRequest_create
  | ObjectTypeDatasourceModifyRequest_update
  | ObjectTypeDatasourceModifyRequest_delete;

export interface ObjectTypeDatasourceUpdate {
  dataSecurity?: _api_DataSecurity | null | undefined;
  editsConfiguration?: _api_EditsConfiguration | null | undefined;
  objectTypeDatasourceDefinition: ObjectTypeDatasourceModificationDefinition;
  rid: _api_DatasourceRid;
}
export interface ObjectTypeDelete {
}
export interface ObjectTypeDerivedPropertiesDatasourceModification {
  definition: _api_derivedproperties_DerivedPropertiesDefinitionModification;
}
export interface ObjectTypeDirectDatasourceModification {
  directSourceRid: _api_DirectSourceRid;
  propertyMapping: Record<_api_PropertyTypeId, _api_PropertyTypeMappingInfo>;
  propertySecurityGroups: _api_PropertySecurityGroupsModification;
  retentionConfig?: _api_RetentionConfig | null | undefined;
  retentionConfigV2?: RetentionConfigModification | null | undefined;
}
export interface ObjectTypeEditsOnlyDatasourceModification {
  editsOnlyRid?: _api_EditsOnlyRid | null | undefined;
  properties: Array<_api_PropertyTypeId>;
  propertySecurityGroups: _api_PropertySecurityGroupsModification;
}
export interface ObjectTypeEntityMetadataModifyRequest {
  actionLogRequiredness?: ActionLogRequirednessModification | null | undefined;
  aliases?: Array<_api_entitymetadata_ObjectTypeAlias> | null | undefined;
  arePatchesEnabled?: boolean | null | undefined;
  diffEdits?: boolean | null | undefined;
  editsHistory?: EditsHistoryModification | null | undefined;
  editsResolutionStrategies?:
    | EditsResolutionStrategyModification
    | null
    | undefined;
  entityConfig?: EntityConfigModification | null | undefined;
  gothamMapping?:
    | _api_typemapping_ObjectTypeGothamMappingModification
    | null
    | undefined;
  objectTypeIndexingSettings?:
    | ObjectTypeIndexingSettingsModification
    | null
    | undefined;
  patchApplicationStrategy?:
    | PatchApplicationStrategyModification
    | null
    | undefined;
  provenance?: EntityProvenanceModification | null | undefined;
  targetStorageBackend?: StorageBackendModification | null | undefined;
  usesOnlyOsv2ObjectRids?: boolean | null | undefined;
}
/**
 * Object type datasource that is backed by Geotime, uniquely identified by its rid.
 */
export interface ObjectTypeGeotimeSeriesDatasourceModification {
  geotimeSeriesIntegrationRid: _api_GeotimeSeriesIntegrationRid;
  properties: Array<_api_PropertyTypeId>;
}
export interface ObjectTypeIndexingSettingsModification {
  streamingConsistencyGuarantee?:
    | _api_entitymetadata_StreamingConsistencyGuarantee
    | null
    | undefined;
  streamingProfileConfig?:
    | StreamingProfileConfigModification
    | null
    | undefined;
  transformProfileConfig?:
    | _api_entitymetadata_TransformProfileConfig
    | null
    | undefined;
}
export interface ObjectTypeInterfaceImplementationModification {
  interfaceTypeRidOrIdInRequest: _api_InterfaceTypeRidOrIdInRequest;
  links: Array<InterfaceLinkTypeImplementationModification>;
  linksV2: Array<InterfaceLinkTypeImplementationModificationV2>;
  properties: Array<InterfacePropertyImplementationModification>;
  propertiesV2: Array<InterfacePropertyImplementationModificationV2>;
}
/**
 * Object type datasource that is backed by media.
 */
export interface ObjectTypeMediaDatasourceModification {
  mediaSourceRids: Array<_api_MediaSourceRid>;
  properties: Array<_api_PropertyTypeId>;
}
/**
 * Object type datasource that is backed by a media set view. This datasource differs from
 * ObjectTypeMediaDatasource in that fully controls access to the media items it provides. If a user
 * has access to a property backed by this datasource, they will be able to see the media item it references.
 */
export interface ObjectTypeMediaSetViewDatasourceModification {
  assumedMarkings: Array<_api_MarkingId>;
  mediaSetViewLocator: _api_MediaSetViewLocator;
  properties: Array<_api_PropertyTypeId>;
  uploadProperties: Array<_api_PropertyTypeId>;
}
export interface ObjectTypeModification {
  apiName?: _api_ObjectTypeApiName | null | undefined;
  displayMetadata: _api_ObjectTypeDisplayMetadata;
  id: _api_ObjectTypeId;
  implementsInterfaces: Array<_api_InterfaceTypeRidOrIdInRequest>;
  implementsInterfaces2: Array<ObjectTypeInterfaceImplementationModification>;
  primaryKeys: Array<_api_PropertyTypeId>;
  propertyTypes: Record<_api_PropertyTypeId, PropertyTypeModification>;
  sharedPropertyTypes: Record<
    _api_PropertyTypeId,
    PartialPropertyTypeModification
  >;
  status?: _api_ObjectTypeStatus | null | undefined;
  titlePropertyTypeId: _api_PropertyTypeId;
  traits: ObjectTypeTraitsModification;
  typeGroups: Array<_api_TypeGroupRidOrIdInRequest>;
}
export interface ObjectTypeModifyRequest_create {
  type: "create";
  create: ObjectTypeCreate;
}

export interface ObjectTypeModifyRequest_update {
  type: "update";
  update: ObjectTypeUpdate;
}

export interface ObjectTypeModifyRequest_delete {
  type: "delete";
  delete: ObjectTypeDelete;
}
export type ObjectTypeModifyRequest =
  | ObjectTypeModifyRequest_create
  | ObjectTypeModifyRequest_update
  | ObjectTypeModifyRequest_delete;

export interface ObjectTypePeeringMetadataModification_drop {
  type: "drop";
  drop: DropObjectTypePeeringMetadata;
}

export interface ObjectTypePeeringMetadataModification_v1 {
  type: "v1";
  v1: _api_ObjectTypePeeringMetadataV1;
}
export type ObjectTypePeeringMetadataModification =
  | ObjectTypePeeringMetadataModification_drop
  | ObjectTypePeeringMetadataModification_v1;

export interface ObjectTypeRestrictedStreamDatasourceModification {
  policyVersion: _api_PolicyVersion;
  propertyMapping: Record<_api_PropertyTypeId, _api_ColumnName>;
  restrictedViewRid: _api_RestrictedViewRid;
  retentionPolicy: _api_RetentionPolicy;
  streamLocator: _api_StreamLocator;
}
/**
 * Deprecated in favor of ObjectTypeRestrictedViewDatasourceV2Modification
 */
export interface ObjectTypeRestrictedViewDatasourceModification {
  propertyMapping: Record<_api_PropertyTypeId, _api_ColumnName>;
  restrictedViewRid: _api_RestrictedViewRid;
  writebackDatasetRid?: _api_DatasetRid | null | undefined;
}
export interface ObjectTypeRestrictedViewDatasourceV2Modification {
  propertyMapping: Record<_api_PropertyTypeId, _api_PropertyTypeMappingInfo>;
  restrictedViewRid: _api_RestrictedViewRid;
}
export interface ObjectTypeStreamDatasourceModification {
  propertyMapping: Record<_api_PropertyTypeId, _api_ColumnName>;
  retentionPolicy?: _api_RetentionPolicy | null | undefined;
  streamLocator: _api_StreamLocator;
}
export interface ObjectTypeStreamDatasourceV2Modification {
  propertyMapping: Record<_api_PropertyTypeId, _api_ColumnName>;
  propertySecurityGroups?:
    | _api_PropertySecurityGroupsModification
    | null
    | undefined;
  retentionPolicy?: _api_RetentionPolicy | null | undefined;
  streamLocator: _api_StreamLocator;
}
export interface ObjectTypeStreamDatasourceV3Modification {
  propertyMapping: Record<_api_PropertyTypeId, _api_PropertyTypeMappingInfo>;
  propertySecurityGroups?:
    | _api_PropertySecurityGroupsModification
    | null
    | undefined;
  retentionPolicy?: _api_RetentionPolicy | null | undefined;
  streamLocator: _api_StreamLocator;
}
/**
 * Object type datasource that is backed by a Table, uniquely identified by its rid.
 */
export interface ObjectTypeTableDatasourceModification {
  propertyMapping: Record<_api_PropertyTypeId, _api_PropertyTypeMappingInfo>;
  tableRid: _api_TableRid;
}
export interface ObjectTypeTimeSeriesDatasourceModification {
  assumedMarkings: Array<_api_MarkingId>;
  properties: Array<_api_PropertyTypeId>;
  timeSeriesSyncRid: _api_TimeSeriesSyncRid;
}
export interface ObjectTypeTraitsModification {
  actionLogMetadata?: ActionLogMetadataModification | null | undefined;
  eventMetadata?: EventMetadataModification | null | undefined;
  peeringMetadata?: ObjectTypePeeringMetadataModification | null | undefined;
  sensorTrait?: SensorTraitModification | null | undefined;
  timeSeriesMetadata?: TimeSeriesMetadataModification | null | undefined;
  workflowObjectTypeTraits: Record<
    _api_WorkflowObjectTypeTraitId,
    Record<
      _api_WorkflowObjectTypeTraitVersion,
      WorkflowObjectTypeTraitImplModification
    >
  >;
}
export interface ObjectTypeUpdate {
  objectType: ObjectTypeModification;
  propertyTypeIdMappings?: PropertyTypeIdMappings | null | undefined;
}
export interface OneToManyLinkDefinitionModification {
  cardinalityHint: _api_OneToManyLinkCardinalityHint;
  manyToOneLinkMetadata: _api_LinkTypeMetadata;
  objectTypeIdManySide: _api_ObjectTypeId;
  objectTypeIdOneSide: _api_ObjectTypeId;
  oneSidePrimaryKeyToManySidePropertyMapping: Record<
    _api_PropertyTypeId,
    _api_PropertyTypeId
  >;
  oneToManyLinkMetadata: _api_LinkTypeMetadata;
}
/**
 * Ontology configurations that can be only modifiable by the Users that have `ontology:update-ontology`
 * permission on the Ontology.
 */
export interface OntologyAdminConfig {
  enableUsage: boolean;
  suggestProjectsPermissionModel: boolean;
}
/**
 * Ontology configurations that can be only modifiable by the Users that have `ontology:update-ontology`
 * permission on the Ontology.
 */
export interface OntologyAdminConfigUpdateRequest {
  enableUsage?: boolean | null | undefined;
  suggestProjectsPermissionModel?: boolean | null | undefined;
}
export type OntologyApiNamespaceIdentifier = string;

/**
 * Request to create a new Ontology. This should be a one-time
 * action when a new tenant needs to be onboarded and needs
 * to have a private Ontology. Requires the "ontology:create-ontology"
 * permission on the Ontology Root node.
 */
export interface OntologyCreateRequest {
  apiName: _api_OntologyApiName;
  compassNamespaceRid: CompassNamespaceRid;
  description: string;
  displayName: string;
  ontologyOwnersGroupId: _api_GroupId;
  organizationMarkingIds: Array<_api_OrganizationMarkingId>;
}
/**
 * Response for an OntologyCreateRequest
 */
export interface OntologyCreateResponse {
  ontologyRid: _api_OntologyRid;
}
/**
 * Request to delete an Ontology. The Ontology must be empty in order
 * to delete it unless the `allowNonEmptyOntologyDeletion` flag is set to true.
 * Requires the "ontology:delete-ontology" permission on the OntologyRid.
 */
export interface OntologyDeleteRequest {
  deleteAllExistingEntitiesInOntology?: boolean | null | undefined;
}
/**
 * Response for OntologyDeleteRequest.
 */
export interface OntologyDeleteResponse {
}
export interface OntologyDiff {
  affectedActionTypes: Record<_api_ActionTypeRid, ModificationType>;
  affectedInterfaceTypes: Record<_api_InterfaceTypeRid, ModificationType>;
  affectedLinkTypeEntityMetadatas: Record<_api_LinkTypeRid, ModificationType>;
  affectedLinkTypes: Record<_api_LinkTypeRid, ModificationType>;
  affectedManyToManyLinkTypeDatasources: Record<
    _api_LinkTypeRid,
    Record<_api_DatasourceRid, ModificationType>
  >;
  affectedObjectTypeDatasources: Record<
    _api_ObjectTypeRid,
    Record<_api_DatasourceRid, ModificationType>
  >;
  affectedObjectTypeEntityMetadatas: Record<
    _api_ObjectTypeRid,
    ModificationType
  >;
  affectedObjectTypes: Record<_api_ObjectTypeRid, ModificationType>;
  affectedObjectTypeSchemaMigrations: Record<
    _api_ObjectTypeRid,
    ModificationType
  >;
  affectedRuleSets: Record<_api_RuleSetRid, ModificationType>;
  affectedSharedPropertyTypes: Record<
    _api_SharedPropertyTypeRid,
    ModificationType
  >;
  affectedTypeGroups: Record<_api_TypeGroupRid, ModificationType>;
}
/**
 * Information about an Ontology. This is only expected to be used by Ontology Metadata App.
 */
export interface OntologyInformationInternal {
  apiName: _api_OntologyApiName;
  areOrganizationMarkingsInheritedFromNamespace: boolean;
  areRolesEnabled: boolean;
  compassNamespaceRid: CompassNamespaceRid;
  currentOntologyVersion: _api_OntologyVersion;
  currentSystemOntologyVersion: _api_OntologyVersion;
  defaultBranchRid: _api_OntologyBranchRid;
  description: string;
  displayName: string;
  enabledObjectStoragesStatus: EnabledObjectStoragesStatus;
  externalMappingConfigurations: Array<
    _api_typemapping_ExternalMappingConfiguration
  >;
  governanceBoardGroupId?: _api_GroupId | null | undefined;
  isDefaultOntologyMultiOrg: boolean;
  isShared: boolean;
  namespace: OntologyNamespace;
  ontologyAdminConfig: OntologyAdminConfig;
  ontologyApiNamespaceIdentifier?:
    | OntologyApiNamespaceIdentifier
    | null
    | undefined;
  ontologyOwnersGroupId: _api_GroupId;
  ontologyOwnersGroupIds: Array<_api_GroupId>;
  ontologyProjectRid?: OntologyProjectRid | null | undefined;
  organizationMarkingIds: Array<_api_OrganizationMarkingId>;
  permissionModel: _api_permissions_PermissionModel;
  restrictedRoleGrants: Array<_api_permissions_RoleGrant>;
  roleGrants: Array<_api_permissions_RoleGrant>;
  semanticSearchIndexingStatus: OntologyObjectTypeSemanticSearchStatus;
}
/**
 * A short summary of the changes made, and the reason for those changes. Currently this is only used for modifications
 * made by OMS.
 */
export type OntologyModificationDescription = string;
export interface OntologyModificationDryRunErrorStatus {
  errors: Array<_api_validation_OntologyValidationError>;
}
export interface OntologyModificationDryRunRequest {
  modificationRequest: OntologyModificationRequest;
}
export interface OntologyModificationDryRunResponse_success {
  type: "success";
  success: OntologyModificationDryRunSuccessStatus;
}

export interface OntologyModificationDryRunResponse_error {
  type: "error";
  error: OntologyModificationDryRunErrorStatus;
}
export type OntologyModificationDryRunResponse =
  | OntologyModificationDryRunResponse_success
  | OntologyModificationDryRunResponse_error;

export interface OntologyModificationDryRunSuccessStatus {
}
export interface OntologyModificationRequest {
  actionTypesToCreate: Record<
    _api_ActionTypeIdInRequest,
    _api_ActionTypeCreate
  >;
  actionTypesToDelete: Array<_api_ActionTypeRid>;
  actionTypesToUpdate: Record<_api_ActionTypeRid, _api_ActionTypeUpdate>;
  branchIndexingConfiguration?:
    | BranchEntityIndexingConfigurationModification
    | null
    | undefined;
  checkForNoops?: boolean | null | undefined;
  compassDeletionParameters?: CompassDeletionParameters | null | undefined;
  expectedLastRebasedOntologyVersion?: _api_OntologyVersion | null | undefined;
  expectedOntologyVersion?: _api_OntologyVersion | null | undefined;
  interfaceTypesToCreate: Record<
    _api_InterfaceTypeIdInRequest,
    InterfaceTypeModification
  >;
  interfaceTypesToCreateInPackage: Record<
    _api_InterfaceTypeIdInRequest,
    _api_OntologyPackageRid
  >;
  interfaceTypesToCreateInProject: Record<
    _api_InterfaceTypeIdInRequest,
    _api_CompassFolderRid
  >;
  interfaceTypesToDelete: Array<_api_InterfaceTypeRid>;
  interfaceTypesToUpdate: Record<
    _api_InterfaceTypeRid,
    InterfaceTypeModification
  >;
  linkTypeEntityMetadata: Record<
    _api_LinkTypeId,
    LinkTypeEntityMetadataModifyRequest
  >;
  linkTypes: Record<_api_LinkTypeId, LinkTypeModifyRequest>;
  manyToManyLinkTypeDatasources: Record<
    _api_LinkTypeId,
    Array<ManyToManyLinkTypeDatasourceModifyRequest>
  >;
  objectTypeDatasources: Record<
    _api_ObjectTypeId,
    Array<ObjectTypeDatasourceModifyRequest>
  >;
  objectTypeEntityMetadata: Record<
    _api_ObjectTypeId,
    ObjectTypeEntityMetadataModifyRequest
  >;
  objectTypes: Record<_api_ObjectTypeId, ObjectTypeModifyRequest>;
  objectTypeSchemaMigrationInitializations: Record<
    _api_ObjectTypeId,
    _api_schemamigrations_SchemaMigrationInitialization
  >;
  objectTypeSchemaMigrations: Record<
    _api_ObjectTypeRid,
    _api_schemamigrations_SchemaMigrationModification
  >;
  objectTypesToResetSchemaMigrationsAndDropEdits: Record<
    _api_ObjectTypeRid,
    _api_schemamigrations_ResetSchemaMigrationsAndDropEditParameters
  >;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
  rebasedOntologyVersion?: _api_OntologyVersion | null | undefined;
  ruleSetsToCreate: Record<
    _api_formatting_RuleSetIdInRequest,
    _api_formatting_RuleSetCreate
  >;
  ruleSetsToDelete: Array<_api_RuleSetRid>;
  ruleSetsToUpdate: Record<_api_RuleSetRid, _api_formatting_RuleSet>;
  sharedPropertyTypesToCreate: Record<
    _api_SharedPropertyTypeIdInRequest,
    SharedPropertyTypeModification
  >;
  sharedPropertyTypesToCreateInPackage: Record<
    _api_SharedPropertyTypeIdInRequest,
    _api_OntologyPackageRid
  >;
  sharedPropertyTypesToCreateInProject: Record<
    _api_SharedPropertyTypeIdInRequest,
    _api_CompassFolderRid
  >;
  sharedPropertyTypesToDelete: Array<_api_SharedPropertyTypeRid>;
  sharedPropertyTypesToUpdate: Record<
    _api_SharedPropertyTypeRid,
    SharedPropertyTypeModification
  >;
  shouldDeploy?: boolean | null | undefined;
  typeGroupsToCreate: Record<_api_TypeGroupIdInRequest, TypeGroupModification>;
  typeGroupsToDelete: Array<_api_TypeGroupRid>;
  typeGroupsToUpdate: Record<_api_TypeGroupRid, TypeGroupModification>;
  useRoles?: boolean | null | undefined;
  validateActiveEntityDeletions?: boolean | null | undefined;
  workflowsToCreate: Record<
    _workflow_api_WorkflowIdInRequest,
    _workflow_api_WorkflowCreate
  >;
  workflowsToDelete: Array<_workflow_api_WorkflowRid>;
  workflowsToUpdate: Record<
    _workflow_api_WorkflowRid,
    _workflow_api_WorkflowUpdate
  >;
}
export interface OntologyModificationResponse {
  createdActionTypeRids: Record<_api_ActionTypeIdInRequest, _api_ActionTypeRid>;
  createdActionTypes: Array<_api_ActionType>;
  createdInterfaceTypes: Record<
    _api_InterfaceTypeIdInRequest,
    _api_InterfaceTypeRid
  >;
  createdLinkTypes: Record<_api_LinkTypeId, _api_LinkTypeRid>;
  createdObjectTypes: Record<_api_ObjectTypeId, _api_ObjectTypeRid>;
  createdRuleSets: Record<_api_formatting_RuleSetIdInRequest, _api_RuleSetRid>;
  createdSharedPropertyTypes: Record<
    _api_SharedPropertyTypeIdInRequest,
    _api_SharedPropertyTypeRid
  >;
  createdTypeGroups: Record<_api_TypeGroupIdInRequest, _api_TypeGroupRid>;
  createdWorkflows: Record<
    _workflow_api_WorkflowIdInRequest,
    _workflow_api_WorkflowRid
  >;
  ontologyVersion: _api_OntologyVersion;
  updatedActionTypes: Record<_api_ActionTypeRid, _api_ActionType>;
}
/**
 * A short string which will be used as a prefix for the IDs
 * (ObjectTypeId and LinkTypeId) of all entities that are created
 * in the corresponding Ontology.
 */
export type OntologyNamespace = string;
export type OntologyObjectTypeSemanticSearchStatus =
  | "AVAILABLE"
  | "INDEXING"
  | "AIP_DISABLED"
  | "NOT_READY";

/**
 * The rid for an Ontology project. This rid is generated randomly and is safe for logging purposes.
 */
export type OntologyProjectRid = string;

/**
 * Request to update information about an existing Ontology. Requires the
 * "ontology:update-ontology" permission on the OntologyRid.
 */
export interface OntologyUpdateRequest {
  addUnrestrictedRoles?: boolean | null | undefined;
  apiName?: _api_OntologyApiName | null | undefined;
  description?: string | null | undefined;
  displayName?: string | null | undefined;
  gothamMappingConfiguration?:
    | _api_typemapping_GothamMappingConfiguration
    | null
    | undefined;
  ontologyAdminConfig?: OntologyAdminConfigUpdateRequest | null | undefined;
  organizationMarkingIds: Array<_api_OrganizationMarkingId>;
  roleGrantPatches: Array<_api_permissions_RoleGrantPatch>;
}
/**
 * Response for an OntologyUpdateRequest.
 */
export interface OntologyUpdateResponse {
}
export interface PartialPropertyTypeModification {
  apiName?: _api_ObjectTypeFieldApiName | null | undefined;
  inlineAction?: InlineActionTypeModification | null | undefined;
  propertyTypeId: _api_PropertyTypeId;
  ruleSetBinding?:
    | _api_formatting_RuleSetBindingModification
    | null
    | undefined;
  sharedPropertyTypeId: _api_SharedPropertyTypeRidOrIdInRequest;
  status?: PropertyTypeStatusModification | null | undefined;
  typeClasses: Array<_api_TypeClass>;
}
export interface PatchApplicationStrategyModification {
  patchApplicationStrategy: _api_entitymetadata_PatchApplicationStrategy;
}
export interface PerOntologyUniqueIdentifier_objectTypeId {
  type: "objectTypeId";
  objectTypeId: _api_ObjectTypeId;
}

export interface PerOntologyUniqueIdentifier_objectTypeApiName {
  type: "objectTypeApiName";
  objectTypeApiName: _api_ObjectTypeApiName;
}

export interface PerOntologyUniqueIdentifier_linkTypeId {
  type: "linkTypeId";
  linkTypeId: _api_LinkTypeId;
}
/**
 * A union type representing user-provided identifiers that have some uniqueness constraints at the level of a
 * single Ontology.
 */
export type PerOntologyUniqueIdentifier =
  | PerOntologyUniqueIdentifier_objectTypeId
  | PerOntologyUniqueIdentifier_objectTypeApiName
  | PerOntologyUniqueIdentifier_linkTypeId;

/**
 * Request to change the ids of the given PropertyTypeRid(s) to the given PropertyTypeId(s).
 */
export interface PropertyTypeIdMappings {
  existingPropertyTypeRenames: Record<
    _api_PropertyTypeRid,
    _api_PropertyTypeId
  >;
}
export interface PropertyTypeModification {
  apiName?: _api_ObjectTypeFieldApiName | null | undefined;
  baseFormatter?: _api_BaseFormatter | null | undefined;
  dataConstraints?: DataConstraintsModification | null | undefined;
  displayMetadata: _api_PropertyTypeDisplayMetadata;
  id: _api_PropertyTypeId;
  indexedForSearch: boolean;
  inlineAction?: InlineActionTypeModification | null | undefined;
  ruleSetBinding?:
    | _api_formatting_RuleSetBindingModification
    | null
    | undefined;
  ruleSetModification?: RuleSetAndBindingsModification | null | undefined;
  status?: PropertyTypeStatusModification | null | undefined;
  type: TypeForModification;
  typeClasses: Array<_api_TypeClass>;
  valueType?: ValueTypeReferenceModification | null | undefined;
}
export interface PropertyTypeStatusModification_experimental {
  type: "experimental";
  experimental: ExperimentalPropertyTypeStatusModification;
}

export interface PropertyTypeStatusModification_active {
  type: "active";
  active: ActivePropertyTypeStatusModification;
}

export interface PropertyTypeStatusModification_deprecated {
  type: "deprecated";
  deprecated: DeprecatedPropertyTypeStatusModification;
}

export interface PropertyTypeStatusModification_example {
  type: "example";
  example: ExamplePropertyTypeStatusModification;
}
/**
 * The status to indicate whether the PropertyType is either Experimental, Active, Deprecated, or Example.
 */
export type PropertyTypeStatusModification =
  | PropertyTypeStatusModification_experimental
  | PropertyTypeStatusModification_active
  | PropertyTypeStatusModification_deprecated
  | PropertyTypeStatusModification_example;

/**
 * Internal version of PutParameterRequestModification.
 */
export interface PutParameterRequestModificationWithId {
  id: _api_ParameterId;
  putParameterRequest: _api_PutParameterRequestModification;
}
/**
 * Internal version of PutParameterRequest.
 */
export interface PutParameterRequestWithId {
  id: _api_ParameterId;
  putParameterRequest: _api_PutParameterRequest;
}
/**
 * Internal version of PutSectionRequest.
 */
export interface PutSectionRequestWithId {
  id: _api_SectionId;
  putSectionRequest: _api_PutSectionRequest;
}
/**
 * Entity can be stored in Phonograph and Highbury though the data is read-only. Edits are disabled.
 * This is a legacy state which should not be used anymore. Instead set the ObjectType or LinkType via a
 * `ObjectStorageV2Modification` which includes a `MigrationConfiguration` to start the migration process
 * from Phonograh to Object Storage V2 (Highbury).
 *
 * If a consumer attempts to set an object type or link type to `ReadOnlyV1V2`, OMS will internally
 * remap to an `ObjectStorageV2Modification` instead.
 */
export interface ReadOnlyV1V2Modification {
}
/**
 * Use the reduced value of the implementation to implement the interface property.
 */
export interface ReducedPropertyTypeImplementationModification {
  implementation: NestedInterfacePropertyTypeImplementationModification;
}
/**
 * Indicates that the given object type is in the process of being restored by funnel.
 */
export interface RestorationStateModification {
}
export interface RetentionConfigModification {
  targetSize: number;
  triggerSize: number;
}
/**
 * This is an experimental field. Do not use.
 */
export interface RuleSetAndBindingsModification {
  bindings: Record<
    _api_ValueReferenceId,
    _api_formatting_ValueReferenceSourceModification
  >;
  identifier: _api_formatting_RuleSetIdentifier;
  ruleSet: RuleSetModification;
}
export interface RuleSetModification {
  chains: Array<_api_formatting_RuleChain>;
  description?: string | null | undefined;
  itType?: _api_DataType | null | undefined;
  name: string;
  namedTypes: Record<_api_ValueReferenceId, _api_formatting_RuleSetNamedType>;
}
export interface SensorTraitModification {
  readingPropertyTypeId: _api_PropertyTypeId;
}
export interface SharedPropertyBasedPropertyTypeModification {
  requireImplementation: boolean;
  sharedPropertyTypeRidOrIdInRequest: _api_SharedPropertyTypeRidOrIdInRequest;
}
export interface SharedPropertyTypeModification {
  aliases?:
    | Array<_api_entitymetadata_SharedPropertyTypeAlias>
    | null
    | undefined;
  apiName?: _api_ObjectTypeFieldApiName | null | undefined;
  baseFormatter?: _api_BaseFormatter | null | undefined;
  dataConstraints?: DataConstraintsModification | null | undefined;
  displayMetadata: _api_SharedPropertyTypeDisplayMetadata;
  gothamMapping?:
    | _api_typemapping_SharedPropertyTypeGothamMappingModification
    | null
    | undefined;
  indexedForSearch: boolean;
  provenance?: EntityProvenanceModification | null | undefined;
  type: TypeForModification;
  typeClasses: Array<_api_TypeClass>;
  valueType?: ValueTypeReferenceModification | null | undefined;
}
export interface StorageBackendModification_objectStorageV1 {
  type: "objectStorageV1";
  objectStorageV1: ObjectStorageV1Modification;
}

export interface StorageBackendModification_readOnlyV1V2 {
  type: "readOnlyV1V2";
  readOnlyV1V2: ReadOnlyV1V2Modification;
}

export interface StorageBackendModification_objectStorageV2 {
  type: "objectStorageV2";
  objectStorageV2: ObjectStorageV2Modification;
}
/**
 * Indicates which Objects Storage should be used for storing this entity.
 */
export type StorageBackendModification =
  | StorageBackendModification_objectStorageV1
  | StorageBackendModification_readOnlyV1V2
  | StorageBackendModification_objectStorageV2;

export interface StreamingProfileConfigModification_unset {
  type: "unset";
  unset: UnsetStreamingProfileConfig;
}

export interface StreamingProfileConfigModification_config {
  type: "config";
  config: _api_entitymetadata_StreamingProfileConfig;
}
/**
 * A modification to the streaming profile configuration. This allows the user to specify that the streaming
 * profile configuration be empty.
 */
export type StreamingProfileConfigModification =
  | StreamingProfileConfigModification_unset
  | StreamingProfileConfigModification_config;

/**
 * Implement an interface non-struct property with an object struct property field.
 */
export interface StructFieldImplementationModification {
  propertyTypeId: _api_PropertyTypeId;
  structFieldApiNameOrRid: _api_StructFieldApiNameOrRid;
}
export interface StructFieldTypeModification {
  aliases: Array<_api_StructFieldAlias>;
  apiName: _api_ObjectTypeFieldApiName;
  displayMetadata: _api_StructFieldDisplayMetadata;
  fieldType: TypeForModification;
  rid?: _api_StructFieldRid | null | undefined;
  typeClasses: Array<_api_TypeClass>;
}
export interface StructMainValueModification {
  fields: Array<_api_StructFieldApiNameOrRid>;
}
/**
 * Implement an interface struct property with an object struct property and specify explicit field mappings.
 */
export interface StructPropertyTypeImplementationModification {
  propertyTypeId: _api_PropertyTypeId;
  structFieldMapping: Array<InterfaceAndObjectPropertyStructField>;
}
export interface StructPropertyTypeModification {
  mainValue?: StructMainValueModification | null | undefined;
  structFields: Array<StructFieldTypeModification>;
}
/**
 * Describes how to treat an object of this type as a time series.
 */
export interface TimeSeriesMetadataModification {
  measurePropertyTypeId?: _api_PropertyTypeId | null | undefined;
  timeSeriesIdPropertyTypeId: _api_PropertyTypeId;
  valueUnitsPropertyTypeId?: _api_PropertyTypeId | null | undefined;
}
export interface TypeForModification_array {
  type: "array";
  array: ArrayPropertyTypeModification;
}

export interface TypeForModification_boolean {
  type: "boolean";
  boolean: _api_BooleanPropertyType;
}

export interface TypeForModification_byte {
  type: "byte";
  byte: _api_BytePropertyType;
}

export interface TypeForModification_date {
  type: "date";
  date: _api_DatePropertyType;
}

export interface TypeForModification_decimal {
  type: "decimal";
  decimal: _api_DecimalPropertyType;
}

export interface TypeForModification_double {
  type: "double";
  double: _api_DoublePropertyType;
}

export interface TypeForModification_float {
  type: "float";
  float: _api_FloatPropertyType;
}

export interface TypeForModification_geohash {
  type: "geohash";
  geohash: _api_GeohashPropertyType;
}

export interface TypeForModification_geoshape {
  type: "geoshape";
  geoshape: _api_GeoshapePropertyType;
}

export interface TypeForModification_integer {
  type: "integer";
  integer: _api_IntegerPropertyType;
}

export interface TypeForModification_long {
  type: "long";
  long: _api_LongPropertyType;
}

export interface TypeForModification_short {
  type: "short";
  short: _api_ShortPropertyType;
}

export interface TypeForModification_string {
  type: "string";
  string: _api_StringPropertyType;
}

export interface TypeForModification_experimentalTimeDependentV1 {
  type: "experimentalTimeDependentV1";
  experimentalTimeDependentV1: _api_ExperimentalTimeDependentPropertyTypeV1;
}

export interface TypeForModification_timestamp {
  type: "timestamp";
  timestamp: _api_TimestampPropertyType;
}

export interface TypeForModification_attachment {
  type: "attachment";
  attachment: _api_AttachmentPropertyType;
}

export interface TypeForModification_marking {
  type: "marking";
  marking: _api_MarkingPropertyType;
}

export interface TypeForModification_cipherText {
  type: "cipherText";
  cipherText: CipherTextPropertyTypeModification;
}

export interface TypeForModification_mediaReference {
  type: "mediaReference";
  mediaReference: _api_MediaReferencePropertyType;
}

export interface TypeForModification_vector {
  type: "vector";
  vector: _api_VectorPropertyType;
}

export interface TypeForModification_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: _api_GeotimeSeriesReferencePropertyType;
}

export interface TypeForModification_struct {
  type: "struct";
  struct: StructPropertyTypeModification;
}
/**
 * Duplicate of Type in ontology-metadata-api, with the exception of StructPropertyTypeModification. This is because
 * struct field rids shouldn't be supplied in the modification request by client - they should be generated on
 * the backend.
 */
export type TypeForModification =
  | TypeForModification_array
  | TypeForModification_boolean
  | TypeForModification_byte
  | TypeForModification_date
  | TypeForModification_decimal
  | TypeForModification_double
  | TypeForModification_float
  | TypeForModification_geohash
  | TypeForModification_geoshape
  | TypeForModification_integer
  | TypeForModification_long
  | TypeForModification_short
  | TypeForModification_string
  | TypeForModification_experimentalTimeDependentV1
  | TypeForModification_timestamp
  | TypeForModification_attachment
  | TypeForModification_marking
  | TypeForModification_cipherText
  | TypeForModification_mediaReference
  | TypeForModification_vector
  | TypeForModification_geotimeSeriesReference
  | TypeForModification_struct;

export interface TypeGroupModification {
  displayMetadata: _api_TypeGroupDisplayMetadata;
}
/**
 * Represents an empty streaming profile configuration.
 */
export interface UnsetStreamingProfileConfig {
}
/**
 * Internal version of ValidationRuleModification.
 */
export interface ValidationRuleModificationWithIdInRequest {
  idInRequest: _api_ValidationRuleIdInRequest;
  validationRuleModification: _api_ValidationRuleModification;
}
export interface ValueTypeReferenceModification {
  rid: _api_ValueTypeRid;
  versionId?: _api_ValueTypeVersionId | null | undefined;
}
/**
 * This represents the associated `WorkflowObjectTypeTrait` along with the mapping between the `WorkflowObjectTypeTraitPropertyId` of the `WorkflowObjectTypeTrait` to the `PropertyId` of the `ObjectType` it is to be associated with.
 */
export interface WorkflowObjectTypeTraitImplModification {
  mapping: Record<_api_WorkflowObjectTypeTraitPropertyId, _api_PropertyTypeId>;
  reference: _api_WorkflowObjectTypeTraitReference;
}
