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
  ActionApplyClientPreferences as _api_ActionApplyClientPreferences,
  ActionLogConfiguration as _api_ActionLogConfiguration,
  ActionNotificationSettings as _api_ActionNotificationSettings,
  ActionSubmissionConfiguration as _api_ActionSubmissionConfiguration,
  ActionTypeApiName as _api_ActionTypeApiName,
  ActionTypeBranchSettings as _api_ActionTypeBranchSettings,
  ActionTypeDisplayMetadataConfiguration
    as _api_ActionTypeDisplayMetadataConfiguration,
  ActionTypeEntities as _api_ActionTypeEntities,
  ActionTypeLogic as _api_ActionTypeLogic,
  ActionTypeRichTextComponent as _api_ActionTypeRichTextComponent,
  ActionTypeRid as _api_ActionTypeRid,
  ActionTypeStatus as _api_ActionTypeStatus,
  ActionTypeVersion as _api_ActionTypeVersion,
  BaseFormatter as _api_BaseFormatter,
  ButtonDisplayMetadata as _api_ButtonDisplayMetadata,
  ColumnName as _api_ColumnName,
  DataNullability as _api_DataNullability,
  DataNullabilityV2 as _api_DataNullabilityV2,
  DatasourceRid as _api_DatasourceRid,
  FormContent as _api_FormContent,
  FunctionRid as _api_FunctionRid,
  FunctionVersion as _api_FunctionVersion,
  GeotimeSeriesIntegrationRid as _api_GeotimeSeriesIntegrationRid,
  GroupId as _api_GroupId,
  Icon as _api_Icon,
  InterfaceLinkTypeApiName as _api_InterfaceLinkTypeApiName,
  InterfaceLinkTypeRid as _api_InterfaceLinkTypeRid,
  InterfacePropertyTypeApiName as _api_InterfacePropertyTypeApiName,
  InterfacePropertyTypeDisplayMetadata
    as _api_InterfacePropertyTypeDisplayMetadata,
  InterfacePropertyTypeRid as _api_InterfacePropertyTypeRid,
  InterfacePropertyTypeType as _api_InterfacePropertyTypeType,
  InterfaceSharedPropertyType as _api_InterfaceSharedPropertyType,
  InterfaceTypeApiName as _api_InterfaceTypeApiName,
  InterfaceTypeRid as _api_InterfaceTypeRid,
  LinkedEntityTypeId as _api_LinkedEntityTypeId,
  LinkType as _api_LinkType,
  LinkTypeId as _api_LinkTypeId,
  LinkTypeRid as _api_LinkTypeRid,
  ManyToManyLinkTypeDatasource as _api_ManyToManyLinkTypeDatasource,
  MarkingId as _api_MarkingId,
  MediaSetRid as _api_MediaSetRid,
  ModuleRid as _api_ModuleRid,
  ObjectType as _api_ObjectType,
  ObjectTypeApiName as _api_ObjectTypeApiName,
  ObjectTypeDatasource as _api_ObjectTypeDatasource,
  ObjectTypeFieldApiName as _api_ObjectTypeFieldApiName,
  ObjectTypeId as _api_ObjectTypeId,
  ObjectTypeRid as _api_ObjectTypeRid,
  OntologyIrActionTypeEntities as _api_OntologyIrActionTypeEntities,
  OntologyIrActionTypeLogic as _api_OntologyIrActionTypeLogic,
  OntologyIrActionTypeRichTextComponent
    as _api_OntologyIrActionTypeRichTextComponent,
  OntologyIrActionTypeStatus as _api_OntologyIrActionTypeStatus,
  OntologyIrBaseFormatter as _api_OntologyIrBaseFormatter,
  OntologyIrFormContent as _api_OntologyIrFormContent,
  OntologyIrInterfacePropertyTypeType
    as _api_OntologyIrInterfacePropertyTypeType,
  OntologyIrInterfaceSharedPropertyType
    as _api_OntologyIrInterfaceSharedPropertyType,
  OntologyIrLinkedEntityTypeId as _api_OntologyIrLinkedEntityTypeId,
  OntologyIrLinkType as _api_OntologyIrLinkType,
  OntologyIrManyToManyLinkTypeDatasource
    as _api_OntologyIrManyToManyLinkTypeDatasource,
  OntologyIrObjectType as _api_OntologyIrObjectType,
  OntologyIrObjectTypeDatasource as _api_OntologyIrObjectTypeDatasource,
  OntologyIrParameter as _api_OntologyIrParameter,
  OntologyIrSection as _api_OntologyIrSection,
  OntologyIrSharedPropertyType as _api_OntologyIrSharedPropertyType,
  OntologyPackageRid as _api_OntologyPackageRid,
  Parameter as _api_Parameter,
  ParameterId as _api_ParameterId,
  ParameterRid as _api_ParameterRid,
  PrimaryKeyConstraint as _api_PrimaryKeyConstraint,
  PropertyId as _api_PropertyId,
  PropertyTypeId as _api_PropertyTypeId,
  PropertyTypeRid as _api_PropertyTypeRid,
  RuleSetRid as _api_RuleSetRid,
  SchemaVersion as _api_SchemaVersion,
  Section as _api_Section,
  SectionId as _api_SectionId,
  SharedPropertyType as _api_SharedPropertyType,
  SharedPropertyTypeRid as _api_SharedPropertyTypeRid,
  TimeSeriesSyncRid as _api_TimeSeriesSyncRid,
  TypeClass as _api_TypeClass,
  ValueTypeReference as _api_ValueTypeReference,
  ValueTypeRid as _api_ValueTypeRid,
  ValueTypeVersionId as _api_ValueTypeVersionId,
  WebhookRid as _api_WebhookRid,
} from "../__components.js";
import type {
  ActionLogRequirednessMetadata
    as _api_entitymetadata_ActionLogRequirednessMetadata,
  EditsHistory as _api_entitymetadata_EditsHistory,
  EditsResolutionStrategies as _api_entitymetadata_EditsResolutionStrategies,
  EntityConfig as _api_entitymetadata_EntityConfig,
  LinkTypeEntityMetadata as _api_entitymetadata_LinkTypeEntityMetadata,
  ObjectTypeAlias as _api_entitymetadata_ObjectTypeAlias,
  OntologyIrLinkTypeEntityMetadata
    as _api_entitymetadata_OntologyIrLinkTypeEntityMetadata,
  PatchApplicationStrategy as _api_entitymetadata_PatchApplicationStrategy,
  StorageBackend as _api_entitymetadata_StorageBackend,
} from "../entitymetadata/__components.js";
import type {
  ActionTypeProvenance as _api_entitymetadata_provenance_ActionTypeProvenance,
  EntityProvenance as _api_entitymetadata_provenance_EntityProvenance,
} from "../entitymetadata/provenance/__components.js";
import type { RuleSet as _api_formatting_RuleSet } from "../formatting/__components.js";
import type {
  OntologyIrSchemaTransition
    as _api_schemamigrations_OntologyIrSchemaTransition,
  SchemaTransition as _api_schemamigrations_SchemaTransition,
} from "../schemamigrations/__components.js";
import type { ObjectTypeGothamMapping as _api_typemapping_ObjectTypeGothamMapping } from "../typemapping/__components.js";
export type ActionParameterShapeId = string;
export interface ActionTypeBlockDataV2 {
  actionType: MarketplaceActionType;
  parameterIds: Record<ActionParameterShapeId, _api_ParameterId>;
}
export interface ActionTypePermissionInformation {
  restrictionStatus: ActionTypeRestrictionStatus;
}
export interface ActionTypeRestrictionStatus {
  hasRolesApplied: boolean;
  ontologyPackageRid?: _api_OntologyPackageRid | null | undefined;
}
export type BlockInternalId = string;
export interface BlockPermissionInformation {
  actionTypes: Record<_api_ActionTypeRid, ActionTypePermissionInformation>;
  linkTypes: Record<_api_LinkTypeRid, LinkTypePermissionInformation>;
  objectTypes: Record<_api_ObjectTypeRid, ObjectTypePermissionInformation>;
}
export type BlockShapeId = BlockInternalId;

/**
 * API_NAME_FORMATTED is the recommended option for most use cases. API_NAME_FORMATTED uses the snake case format
 * of property api names while API_NAME uses the default camel case format. DATASOURCE_COLUMN_NAME uses the
 * column names of the backing datasource. However, it will use API_NAME_FORMATTED for columns that do not have
 * a backing column name (eg. edit-only properties). DATASOURCE_COLUMN_NAME should generally only be used for
 * migration of writeback datasets from V1 backend. PROPERTY_ID is deprecated.
 */
export type ColumnNameType =
  | "PROPERTY_RID"
  | "PROPERTY_ID"
  | "API_NAME"
  | "API_NAME_FORMATTED"
  | "DATASOURCE_COLUMN_NAME";
export interface DataFilter {
  datasourceFilter: DatasourcePredicate;
  propertyFilter: PropertyPredicate;
}
/**
 * Ontology as code uses this as a stable ID for the datasource input
 */
export type DataSetName = string;

/**
 * Ontology as code uses this as a stable ID for datasource rids
 */
export type DatasourceName = string;
export interface DatasourcePredicate_or {
  type: "or";
  or: Array<DatasourcePredicate>;
}

export interface DatasourcePredicate_hasRid {
  type: "hasRid";
  hasRid: _api_DatasourceRid;
}

export interface DatasourcePredicate_isOnlyDatasource {
  type: "isOnlyDatasource";
  isOnlyDatasource: IsOnlyDatasource;
}
export type DatasourcePredicate =
  | DatasourcePredicate_or
  | DatasourcePredicate_hasRid
  | DatasourcePredicate_isOnlyDatasource;

/**
 * Ontology as code uses this as a stable ID for GeotimeSeriesIntegration inputs
 */
export type GeotimeSeriesIntegrationName = string;
export type InstallLocationBlockShapeId = BlockShapeId;
export interface InterfaceTypeBlockDataV2 {
  interfaceType: MarketplaceInterfaceType;
}
/**
 * Will only match if there is a single datasource that matches the output type (e.g. a dataset datasource
 * with an export dataset, or a restricted view datasource with an export restricted view). In the case of exporting
 * an RV datasource as a dataset, use DatasourcePredicate#hasRid instead.
 */
export interface IsOnlyDatasource {
}
export interface KnownMarketplaceIdentifiers {
  actionParameterIds: Record<
    _api_ActionTypeRid,
    Record<_api_ParameterId, BlockInternalId>
  >;
  actionParameters: Record<_api_ParameterRid, BlockInternalId>;
  actionTypes: Record<_api_ActionTypeRid, BlockInternalId>;
  datasourceColumns: Record<BlockInternalId, any>;
  datasources: Record<BlockInternalId, any>;
  filesDatasources: Record<BlockInternalId, any>;
  functions: Record<
    _api_FunctionRid,
    Record<_api_FunctionVersion, BlockInternalId>
  >;
  geotimeSeriesSyncs: Record<_api_GeotimeSeriesIntegrationRid, BlockInternalId>;
  groupIds: Record<_api_GroupId, BlockInternalId>;
  interfaceLinkTypes: Record<_api_InterfaceLinkTypeRid, BlockInternalId>;
  interfacePropertyTypes: Record<
    _api_InterfacePropertyTypeRid,
    BlockInternalId
  >;
  interfaceTypes: Record<_api_InterfaceTypeRid, BlockInternalId>;
  linkTypeIds: Record<_api_LinkTypeId, BlockInternalId>;
  linkTypes: Record<_api_LinkTypeRid, BlockInternalId>;
  markings: Record<BlockInternalId, Array<_api_MarkingId>>;
  objectTypeIds: Record<_api_ObjectTypeId, BlockInternalId>;
  objectTypes: Record<_api_ObjectTypeRid, BlockInternalId>;
  propertyTypeIds: Record<
    _api_ObjectTypeId,
    Record<_api_PropertyTypeId, BlockInternalId>
  >;
  propertyTypes: Record<_api_PropertyTypeRid, BlockInternalId>;
  shapeIdForInstallPrefix?: BlockShapeId | null | undefined;
  shapeIdForOntologyAllowSchemaMigrations?: BlockShapeId | null | undefined;
  sharedPropertyTypes: Record<_api_SharedPropertyTypeRid, BlockInternalId>;
  timeSeriesSyncs: Record<_api_TimeSeriesSyncRid, BlockInternalId>;
  valueTypes: Record<
    _api_ValueTypeRid,
    Record<_api_ValueTypeVersionId, BlockInternalId>
  >;
  webhooks: Record<_api_WebhookRid, BlockInternalId>;
  workshopModules: Record<_api_ModuleRid, BlockInternalId>;
}
export interface LinkTypeBlockDataV2 {
  datasources: Array<_api_ManyToManyLinkTypeDatasource>;
  entityMetadata?:
    | _api_entitymetadata_LinkTypeEntityMetadata
    | null
    | undefined;
  linkType: _api_LinkType;
}
export interface LinkTypePermissionInformation {
  restrictionStatus: LinkTypeRestrictionStatus;
}
export interface LinkTypeRestrictionStatus {
  editRestrictedByDatasources: boolean;
  ontologyPackageRid?: _api_OntologyPackageRid | null | undefined;
  restrictedByDatasources: boolean;
}
export interface MarketplaceActionType {
  actionTypeLogic: _api_ActionTypeLogic;
  metadata: MarketplaceActionTypeMetadata;
}
export interface MarketplaceActionTypeDisplayMetadata {
  configuration?:
    | _api_ActionTypeDisplayMetadataConfiguration
    | null
    | undefined;
  description: string;
  displayName: string;
  icon?: _api_Icon | null | undefined;
  submitButtonDisplayMetadata?: _api_ButtonDisplayMetadata | null | undefined;
  successMessage: Array<_api_ActionTypeRichTextComponent>;
  toolDescription?: string | null | undefined;
  typeClasses: Array<_api_TypeClass>;
  undoButtonConfiguration?: boolean | null | undefined;
}
/**
 * Local overridden alias of OMS public API representation of ActionTypeMetadata. In OMS API we model
 * action notificationSettings and ActionTypeDisplayMetadataConfiguration field as non-optional, but Marketplace
 * ontology block data uploaded to artifacts faces similar constraints as our internal StorageActionTypeMetadata
 * and we need to provide runtime conversion with default value.
 */
export interface MarketplaceActionTypeMetadata {
  actionApplyClientSettings?:
    | _api_ActionApplyClientPreferences
    | null
    | undefined;
  actionLogConfiguration?: _api_ActionLogConfiguration | null | undefined;
  apiName: _api_ActionTypeApiName;
  branchSettings?: _api_ActionTypeBranchSettings | null | undefined;
  displayMetadata: MarketplaceActionTypeDisplayMetadata;
  entities?: _api_ActionTypeEntities | null | undefined;
  formContentOrdering: Array<_api_FormContent>;
  notificationSettings?: _api_ActionNotificationSettings | null | undefined;
  parameterOrdering: Array<_api_ParameterId>;
  parameters: Record<_api_ParameterId, _api_Parameter>;
  provenance?:
    | _api_entitymetadata_provenance_ActionTypeProvenance
    | null
    | undefined;
  rid: _api_ActionTypeRid;
  sections: Record<_api_SectionId, _api_Section>;
  stagingMediaSetRid?: _api_MediaSetRid | null | undefined;
  status: _api_ActionTypeStatus;
  submissionConfiguration?:
    | _api_ActionSubmissionConfiguration
    | null
    | undefined;
  version: _api_ActionTypeVersion;
}
export interface MarketplaceActiveInterfaceTypeStatus {
}
export interface MarketplaceDataConstraints {
  nullability?: _api_DataNullability | null | undefined;
  nullabilityV2?: _api_DataNullabilityV2 | null | undefined;
}
export interface MarketplaceDeprecatedInterfaceTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: _api_InterfaceTypeRid | null | undefined;
}
export interface MarketplaceExampleInterfaceTypeStatus {
}
export interface MarketplaceExperimentalInterfaceTypeStatus {
}
export interface MarketplaceInterfaceDefinedPropertyType {
  apiName: _api_InterfacePropertyTypeApiName;
  baseFormatter?: _api_BaseFormatter | null | undefined;
  constraints: MarketplaceInterfaceDefinedPropertyTypeConstraints;
  displayMetadata: _api_InterfacePropertyTypeDisplayMetadata;
  rid: _api_InterfacePropertyTypeRid;
  type: _api_InterfacePropertyTypeType;
}
export interface MarketplaceInterfaceDefinedPropertyTypeConstraints {
  dataConstraints?: MarketplaceDataConstraints | null | undefined;
  indexedForSearch: boolean;
  primaryKeyConstraint: _api_PrimaryKeyConstraint;
  requireImplementation: boolean;
  typeClasses: Array<_api_TypeClass>;
  valueType?: _api_ValueTypeReference | null | undefined;
}
export interface MarketplaceInterfaceLinkType {
  cardinality: MarketplaceInterfaceLinkTypeCardinality;
  linkedEntityTypeId: _api_LinkedEntityTypeId;
  metadata: MarketplaceInterfaceLinkTypeMetadata;
  required: boolean;
  rid: _api_InterfaceLinkTypeRid;
}
export type MarketplaceInterfaceLinkTypeCardinality = "SINGLE" | "MANY";
export interface MarketplaceInterfaceLinkTypeMetadata {
  apiName: _api_InterfaceLinkTypeApiName;
  description: string;
  displayName: string;
}
export interface MarketplaceInterfacePropertyType_sharedPropertyBasedPropertyType {
  type: "sharedPropertyBasedPropertyType";
  sharedPropertyBasedPropertyType: MarketplaceSharedPropertyBasedPropertyType;
}

export interface MarketplaceInterfacePropertyType_interfaceDefinedPropertyType {
  type: "interfaceDefinedPropertyType";
  interfaceDefinedPropertyType: MarketplaceInterfaceDefinedPropertyType;
}
export type MarketplaceInterfacePropertyType =
  | MarketplaceInterfacePropertyType_sharedPropertyBasedPropertyType
  | MarketplaceInterfacePropertyType_interfaceDefinedPropertyType;

export interface MarketplaceInterfaceType {
  apiName: _api_InterfaceTypeApiName;
  displayMetadata: MarketplaceInterfaceTypeDisplayMetadata;
  extendsInterfaces: Array<_api_InterfaceTypeRid>;
  links: Array<MarketplaceInterfaceLinkType>;
  properties: Array<_api_SharedPropertyType>;
  propertiesV2: Record<
    _api_SharedPropertyTypeRid,
    _api_InterfaceSharedPropertyType
  >;
  propertiesV3: Record<
    _api_InterfacePropertyTypeRid,
    MarketplaceInterfacePropertyType
  >;
  rid: _api_InterfaceTypeRid;
  searchable?: boolean | null | undefined;
  status: MarketplaceInterfaceTypeStatus;
}
export interface MarketplaceInterfaceTypeDisplayMetadata {
  description?: string | null | undefined;
  displayName: string;
  icon?: _api_Icon | null | undefined;
}
export interface MarketplaceInterfaceTypeStatus_experimental {
  type: "experimental";
  experimental: MarketplaceExperimentalInterfaceTypeStatus;
}

export interface MarketplaceInterfaceTypeStatus_active {
  type: "active";
  active: MarketplaceActiveInterfaceTypeStatus;
}

export interface MarketplaceInterfaceTypeStatus_deprecated {
  type: "deprecated";
  deprecated: MarketplaceDeprecatedInterfaceTypeStatus;
}

export interface MarketplaceInterfaceTypeStatus_example {
  type: "example";
  example: MarketplaceExampleInterfaceTypeStatus;
}
export type MarketplaceInterfaceTypeStatus =
  | MarketplaceInterfaceTypeStatus_experimental
  | MarketplaceInterfaceTypeStatus_active
  | MarketplaceInterfaceTypeStatus_deprecated
  | MarketplaceInterfaceTypeStatus_example;

/**
 * Local overridden alias of OMS public API representation of ObjectTypeEntityMetadata. In OMS API we model
 * editsResolutionStrategies field as non-optional, but Marketplace ontology block data uploaded to
 * artifacts faces similar constraints as our internal StorageObjectTypeEntityMetadata and we need to provide
 * runtime conversion with default value.
 */
export interface MarketplaceObjectTypeEntityMetadata {
  actionLogRequirednessMetadata?:
    | _api_entitymetadata_ActionLogRequirednessMetadata
    | null
    | undefined;
  aliases: Array<_api_entitymetadata_ObjectTypeAlias>;
  arePatchesEnabled: boolean;
  diffEdits: boolean;
  editsHistory?: _api_entitymetadata_EditsHistory | null | undefined;
  editsResolutionStrategies?:
    | _api_entitymetadata_EditsResolutionStrategies
    | null
    | undefined;
  entityConfig: _api_entitymetadata_EntityConfig;
  gothamMapping?: _api_typemapping_ObjectTypeGothamMapping | null | undefined;
  patchApplicationStrategy?:
    | _api_entitymetadata_PatchApplicationStrategy
    | null
    | undefined;
  provenance?:
    | _api_entitymetadata_provenance_EntityProvenance
    | null
    | undefined;
  redacted?: boolean | null | undefined;
  targetStorageBackend: _api_entitymetadata_StorageBackend;
  usesOnlyOsv2ObjectRids?: boolean | null | undefined;
}
export interface MarketplaceSharedPropertyBasedPropertyType {
  requireImplementation: boolean;
  sharedPropertyType: _api_SharedPropertyType;
}
/**
 * Instead of a real marking, OAC objects use a "markingGroupName" to represent a marking set which is 1:1 to with a marking input
 */
export type MarkingGroupName = string;

/**
 * Ontology as code uses this as a stable ID for MediaSetView inputs
 */
export type MediaSetViewName = string;
export interface ObjectsWritebackDataset {
  columnMapping: Record<_api_PropertyTypeRid, _api_ColumnName>;
  objectTypeRid: _api_ObjectTypeRid;
  outputMode: OutputMode;
  rid: WritebackDatasetRid;
  spec: WritebackDatasetSpec;
}
export interface ObjectTypeBlockDataV2 {
  datasources: Array<_api_ObjectTypeDatasource>;
  entityMetadata?: MarketplaceObjectTypeEntityMetadata | null | undefined;
  objectType: _api_ObjectType;
  propertySecurityGroupPackagingVersion?:
    | PropertySecurityGroupPackagingVersion
    | null
    | undefined;
  schemaMigrations?: SchemaMigrationBlockData | null | undefined;
  writebackDatasets: Array<ObjectsWritebackDataset>;
}
export interface ObjectTypePermissionInformation {
  restrictionStatus: ObjectTypeRestrictionStatus;
}
export interface ObjectTypeRestrictionStatus {
  editRestrictedByDatasources: boolean;
  ontologyPackageRid?: _api_OntologyPackageRid | null | undefined;
  restrictedByDatasources: boolean;
}
export interface OntologyBlockDataV2 {
  actionTypes: Record<_api_ActionTypeRid, ActionTypeBlockDataV2>;
  blockOutputCompassLocations: Record<
    BlockShapeId,
    InstallLocationBlockShapeId
  >;
  blockPermissionInformation?: BlockPermissionInformation | null | undefined;
  interfaceTypes: Record<_api_InterfaceTypeRid, InterfaceTypeBlockDataV2>;
  knownIdentifiers: KnownMarketplaceIdentifiers;
  linkTypes: Record<_api_LinkTypeRid, LinkTypeBlockDataV2>;
  objectTypes: Record<_api_ObjectTypeRid, ObjectTypeBlockDataV2>;
  ruleSets: Record<_api_RuleSetRid, _api_formatting_RuleSet>;
  sharedPropertyTypes: Record<
    _api_SharedPropertyTypeRid,
    SharedPropertyTypeBlockDataV2
  >;
}
export interface OntologyIrActionTypeBlockDataV2 {
  actionType: OntologyIrMarketplaceActionType;
}
export interface OntologyIrBlockPermissionInformation {
  actionTypes: Record<_api_ActionTypeApiName, ActionTypePermissionInformation>;
  linkTypes: Record<_api_LinkTypeId, LinkTypePermissionInformation>;
  objectTypes: Record<_api_ObjectTypeApiName, ObjectTypePermissionInformation>;
}
export interface OntologyIrInterfaceTypeBlockDataV2 {
  interfaceType: OntologyIrMarketplaceInterfaceType;
}
export interface OntologyIrKnownMarketplaceIdentifiers {
  actionParameterIds: Record<
    _api_ActionTypeApiName,
    Record<_api_ParameterId, BlockInternalId>
  >;
  actionParameters: Record<_api_ParameterRid, BlockInternalId>;
  actionTypes: Record<_api_ActionTypeApiName, BlockInternalId>;
  datasourceColumns: Record<BlockInternalId, any>;
  datasources: Record<BlockInternalId, any>;
  filesDatasources: Record<BlockInternalId, any>;
  functions: Record<
    _api_FunctionRid,
    Record<_api_FunctionVersion, BlockInternalId>
  >;
  geotimeSeriesSyncs: Record<GeotimeSeriesIntegrationName, BlockInternalId>;
  groupIds: Record<_api_GroupId, BlockInternalId>;
  interfaceLinkTypes: Record<_api_InterfaceLinkTypeApiName, BlockInternalId>;
  interfacePropertyTypes: Record<
    _api_InterfacePropertyTypeApiName,
    BlockInternalId
  >;
  interfaceTypes: Record<_api_InterfaceTypeApiName, BlockInternalId>;
  linkTypeIds: Record<_api_LinkTypeId, BlockInternalId>;
  linkTypes: Record<_api_LinkTypeId, BlockInternalId>;
  markings: Record<BlockInternalId, Array<_api_MarkingId>>;
  objectTypeIds: Record<_api_ObjectTypeApiName, BlockInternalId>;
  objectTypes: Record<_api_ObjectTypeApiName, BlockInternalId>;
  propertyTypeIds: Record<
    _api_ObjectTypeApiName,
    Record<_api_ObjectTypeFieldApiName, BlockInternalId>
  >;
  propertyTypes: Record<_api_ObjectTypeFieldApiName, BlockInternalId>;
  shapeIdForInstallPrefix?: BlockShapeId | null | undefined;
  shapeIdForOntologyAllowSchemaMigrations?: BlockShapeId | null | undefined;
  sharedPropertyTypes: Record<_api_ObjectTypeFieldApiName, BlockInternalId>;
  timeSeriesSyncs: Record<TimeSeriesSyncName, BlockInternalId>;
  valueTypes: Record<
    _api_ValueTypeRid,
    Record<_api_ValueTypeVersionId, BlockInternalId>
  >;
  webhooks: Record<_api_WebhookRid, BlockInternalId>;
  workshopModules: Record<_api_ModuleRid, BlockInternalId>;
}
export interface OntologyIrLinkTypeBlockDataV2 {
  datasources: Array<_api_OntologyIrManyToManyLinkTypeDatasource>;
  entityMetadata?:
    | _api_entitymetadata_OntologyIrLinkTypeEntityMetadata
    | null
    | undefined;
  linkType: _api_OntologyIrLinkType;
}
export interface OntologyIrMarketplaceActionType {
  actionTypeLogic: _api_OntologyIrActionTypeLogic;
  metadata: OntologyIrMarketplaceActionTypeMetadata;
}
export interface OntologyIrMarketplaceActionTypeDisplayMetadata {
  configuration?:
    | _api_ActionTypeDisplayMetadataConfiguration
    | null
    | undefined;
  description: string;
  displayName: string;
  icon?: _api_Icon | null | undefined;
  submitButtonDisplayMetadata?: _api_ButtonDisplayMetadata | null | undefined;
  successMessage: Array<_api_OntologyIrActionTypeRichTextComponent>;
  toolDescription?: string | null | undefined;
  typeClasses: Array<_api_TypeClass>;
  undoButtonConfiguration?: boolean | null | undefined;
}
/**
 * Local overridden alias of OMS public API representation of ActionTypeMetadata. In OMS API we model
 * action notificationSettings and ActionTypeDisplayMetadataConfiguration field as non-optional, but Marketplace
 * ontology block data uploaded to artifacts faces similar constraints as our internal StorageActionTypeMetadata
 * and we need to provide runtime conversion with default value.
 */
export interface OntologyIrMarketplaceActionTypeMetadata {
  apiName: _api_ActionTypeApiName;
  branchSettings?: _api_ActionTypeBranchSettings | null | undefined;
  displayMetadata: OntologyIrMarketplaceActionTypeDisplayMetadata;
  entities?: _api_OntologyIrActionTypeEntities | null | undefined;
  formContentOrdering: Array<_api_OntologyIrFormContent>;
  parameterOrdering: Array<_api_ParameterId>;
  parameters: Record<_api_ParameterId, _api_OntologyIrParameter>;
  sections: Record<_api_SectionId, _api_OntologyIrSection>;
  stagingMediaSetRid?: _api_MediaSetRid | null | undefined;
  status: _api_OntologyIrActionTypeStatus;
}
export interface OntologyIrMarketplaceDeprecatedInterfaceTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: _api_InterfaceTypeApiName | null | undefined;
}
export interface OntologyIrMarketplaceInterfaceDefinedPropertyType {
  apiName: _api_InterfacePropertyTypeApiName;
  baseFormatter?: _api_OntologyIrBaseFormatter | null | undefined;
  constraints: OntologyIrMarketplaceInterfaceDefinedPropertyTypeConstraints;
  displayMetadata: _api_InterfacePropertyTypeDisplayMetadata;
  type: _api_OntologyIrInterfacePropertyTypeType;
}
export interface OntologyIrMarketplaceInterfaceDefinedPropertyTypeConstraints {
  dataConstraints?: MarketplaceDataConstraints | null | undefined;
  indexedForSearch: boolean;
  primaryKeyConstraint: _api_PrimaryKeyConstraint;
  requireImplementation: boolean;
  typeClasses: Array<_api_TypeClass>;
  valueType?: OntologyIrValueTypeReferenceWithMetadata | null | undefined;
}
export interface OntologyIrMarketplaceInterfaceLinkType {
  cardinality: MarketplaceInterfaceLinkTypeCardinality;
  linkedEntityTypeId: _api_OntologyIrLinkedEntityTypeId;
  metadata: MarketplaceInterfaceLinkTypeMetadata;
  required: boolean;
}
export interface OntologyIrMarketplaceInterfacePropertyType_sharedPropertyBasedPropertyType {
  type: "sharedPropertyBasedPropertyType";
  sharedPropertyBasedPropertyType:
    OntologyIrMarketplaceSharedPropertyBasedPropertyType;
}

export interface OntologyIrMarketplaceInterfacePropertyType_interfaceDefinedPropertyType {
  type: "interfaceDefinedPropertyType";
  interfaceDefinedPropertyType:
    OntologyIrMarketplaceInterfaceDefinedPropertyType;
}
export type OntologyIrMarketplaceInterfacePropertyType =
  | OntologyIrMarketplaceInterfacePropertyType_sharedPropertyBasedPropertyType
  | OntologyIrMarketplaceInterfacePropertyType_interfaceDefinedPropertyType;

export interface OntologyIrMarketplaceInterfaceType {
  apiName: _api_InterfaceTypeApiName;
  displayMetadata: MarketplaceInterfaceTypeDisplayMetadata;
  extendsInterfaces: Array<_api_InterfaceTypeApiName>;
  links: Array<OntologyIrMarketplaceInterfaceLinkType>;
  properties: Array<_api_OntologyIrSharedPropertyType>;
  propertiesV2: Record<
    _api_ObjectTypeFieldApiName,
    _api_OntologyIrInterfaceSharedPropertyType
  >;
  propertiesV3: Record<
    _api_InterfacePropertyTypeApiName,
    OntologyIrMarketplaceInterfacePropertyType
  >;
  searchable?: boolean | null | undefined;
  status: OntologyIrMarketplaceInterfaceTypeStatus;
}
export interface OntologyIrMarketplaceInterfaceTypeStatus_experimental {
  type: "experimental";
  experimental: MarketplaceExperimentalInterfaceTypeStatus;
}

export interface OntologyIrMarketplaceInterfaceTypeStatus_active {
  type: "active";
  active: MarketplaceActiveInterfaceTypeStatus;
}

export interface OntologyIrMarketplaceInterfaceTypeStatus_deprecated {
  type: "deprecated";
  deprecated: OntologyIrMarketplaceDeprecatedInterfaceTypeStatus;
}

export interface OntologyIrMarketplaceInterfaceTypeStatus_example {
  type: "example";
  example: MarketplaceExampleInterfaceTypeStatus;
}
export type OntologyIrMarketplaceInterfaceTypeStatus =
  | OntologyIrMarketplaceInterfaceTypeStatus_experimental
  | OntologyIrMarketplaceInterfaceTypeStatus_active
  | OntologyIrMarketplaceInterfaceTypeStatus_deprecated
  | OntologyIrMarketplaceInterfaceTypeStatus_example;

/**
 * Local overridden alias of OMS public API representation of ObjectTypeEntityMetadata. In OMS API we model
 * editsResolutionStrategies field as non-optional, but Marketplace ontology block data uploaded to
 * artifacts faces similar constraints as our internal StorageObjectTypeEntityMetadata and we need to provide
 * runtime conversion with default value.
 */
export interface OntologyIrMarketplaceObjectTypeEntityMetadata {
  aliases: Array<_api_entitymetadata_ObjectTypeAlias>;
  arePatchesEnabled: boolean;
}
export interface OntologyIrMarketplaceSharedPropertyBasedPropertyType {
  requireImplementation: boolean;
  sharedPropertyType: _api_OntologyIrSharedPropertyType;
}
/**
 * Property reference containing the api name of the object
 */
export interface OntologyIrObjectPropertyReference {
  apiName: _api_ObjectTypeFieldApiName;
  object: _api_ObjectTypeApiName;
}
export interface OntologyIrObjectsWritebackDataset {
  columnMapping: Record<_api_ObjectTypeFieldApiName, _api_ColumnName>;
  objectTypeRid: _api_ObjectTypeApiName;
  outputMode: OutputMode;
  rid: WritebackDatasetRid;
  spec: WritebackDatasetSpec;
}
export interface OntologyIrObjectTypeBlockDataV2 {
  datasources: Array<_api_OntologyIrObjectTypeDatasource>;
  entityMetadata?:
    | OntologyIrMarketplaceObjectTypeEntityMetadata
    | null
    | undefined;
  objectType: _api_OntologyIrObjectType;
  propertySecurityGroupPackagingVersion?:
    | PropertySecurityGroupPackagingVersion
    | null
    | undefined;
}
export interface OntologyIrOntologyBlockDataV2 {
  actionTypes: Record<_api_ActionTypeApiName, OntologyIrActionTypeBlockDataV2>;
  blockPermissionInformation?:
    | OntologyIrBlockPermissionInformation
    | null
    | undefined;
  interfaceTypes: Record<
    _api_InterfaceTypeApiName,
    OntologyIrInterfaceTypeBlockDataV2
  >;
  linkTypes: Record<_api_LinkTypeId, OntologyIrLinkTypeBlockDataV2>;
  objectTypes: Record<_api_ObjectTypeApiName, OntologyIrObjectTypeBlockDataV2>;
  sharedPropertyTypes: Record<
    _api_ObjectTypeFieldApiName,
    OntologyIrSharedPropertyTypeBlockDataV2
  >;
}
/**
 * Because complex objects can't be used as map keys over the wire, this is used in many to many link dataset datasource
 */
export interface OntologyIrPropertyToColumnMapping {
  column: _api_ColumnName;
  property: OntologyIrObjectPropertyReference;
}
/**
 * Because complex objects can't be used as map keys over the wire, this is used in link definitions
 */
export interface OntologyIrPropertyToPropertyMapping {
  from: OntologyIrObjectPropertyReference;
  to: OntologyIrObjectPropertyReference;
}
export interface OntologyIrSchemaMigrationBlockData {
  propertyTypeRidsToIds: Record<
    _api_ObjectTypeFieldApiName,
    _api_ObjectTypeFieldApiName
  >;
  schemaMigrations: OntologyIrSchemaTransitionsWithSchemaVersion;
}
export interface OntologyIrSchemaTransitionsWithSchemaVersion {
  schemaTransitions: Array<_api_schemamigrations_OntologyIrSchemaTransition>;
  schemaVersion: _api_SchemaVersion;
}
export interface OntologyIrSharedPropertyTypeBlockDataV2 {
  sharedPropertyType: _api_OntologyIrSharedPropertyType;
}
export interface OntologyIrValueTypeReferenceWithMetadata {
  apiName: string;
  displayMetadata: any;
  packageNamespace: string;
  version: string;
}
export type OutputMode = "RESTRICTED_VIEW" | "DATASET";
export interface PatchesConfiguration {
  lowLatencyUpdatesEnabled: boolean;
}
export interface PostOntologyBlockDataRequest {
  ontologyBlockDataV2: OntologyBlockDataV2;
}
export interface PostOntologyBlockDataResponse {
}
export interface PropertyPredicate_and {
  type: "and";
  and: Array<PropertyPredicate>;
}

export interface PropertyPredicate_or {
  type: "or";
  or: Array<PropertyPredicate>;
}

export interface PropertyPredicate_not {
  type: "not";
  not: PropertyPredicate;
}

export interface PropertyPredicate_hasId {
  type: "hasId";
  hasId: _api_PropertyId;
}

export interface PropertyPredicate_hasRid {
  type: "hasRid";
  hasRid: PropertyRid;
}
export type PropertyPredicate =
  | PropertyPredicate_and
  | PropertyPredicate_or
  | PropertyPredicate_not
  | PropertyPredicate_hasId
  | PropertyPredicate_hasRid;

export type PropertyRid = string;

/**
 * This is the old approach to PSG packaging. It will still be kept around for existing installations.
 */
export interface PropertySecurityGroupPackagingV1 {
}
/**
 * This is the new approach to PSG packaging. See this quip for more details - https://palantir.quip.com/Ros7ABfTeLSH
 */
export interface PropertySecurityGroupPackagingV2 {
}
export interface PropertySecurityGroupPackagingVersion_v1 {
  type: "v1";
  v1: PropertySecurityGroupPackagingV1;
}

export interface PropertySecurityGroupPackagingVersion_v2 {
  type: "v2";
  v2: PropertySecurityGroupPackagingV2;
}
export type PropertySecurityGroupPackagingVersion =
  | PropertySecurityGroupPackagingVersion_v1
  | PropertySecurityGroupPackagingVersion_v2;

/**
 * Ontology as code uses this as a stable ID for the restricted view input
 */
export type RestrictedViewName = string;
export interface SchemaConfiguration {
  columnNameType: ColumnNameType;
}
export interface SchemaMigrationBlockData {
  propertyTypeRidsToIds: Record<_api_PropertyTypeRid, _api_PropertyTypeId>;
  schemaMigrations: SchemaTransitionsWithSchemaVersion;
}
export interface SchemaTransitionsWithSchemaVersion {
  schemaTransitions: Array<_api_schemamigrations_SchemaTransition>;
  schemaVersion: _api_SchemaVersion;
}
export interface SharedPropertyTypeBlockDataV2 {
  sharedPropertyType: _api_SharedPropertyType;
}
/**
 * Ontology as code uses this as a stable ID for the stream input
 */
export type StreamName = string;

/**
 * Ontology as code uses this as a stable ID for TimeSeriesSync inputs
 */
export type TimeSeriesSyncName = string;

/**
 * The index of the validation rule within an action. This is used both for identification and ordering.
 */
export type ValidationRuleIndex = number;
export type WritebackDatasetRid = string;
export interface WritebackDatasetSpec {
  filter: DataFilter;
  patchesConfiguration?: PatchesConfiguration | null | undefined;
  schemaConfiguration: SchemaConfiguration;
}
