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

import type {
  ActionType as _api_ActionType,
  ActionTypeApiName as _api_ActionTypeApiName,
  ActionTypeRid as _api_ActionTypeRid,
  ColumnName as _api_ColumnName,
  DatasourceRid as _api_DatasourceRid,
  FunctionRid as _api_FunctionRid,
  FunctionVersion as _api_FunctionVersion,
  GeotimeSeriesIntegrationRid as _api_GeotimeSeriesIntegrationRid,
  GroupId as _api_GroupId,
  InterfaceLinkTypeApiName as _api_InterfaceLinkTypeApiName,
  InterfaceLinkTypeRid as _api_InterfaceLinkTypeRid,
  InterfaceType as _api_InterfaceType,
  InterfaceTypeApiName as _api_InterfaceTypeApiName,
  InterfaceTypeRid as _api_InterfaceTypeRid,
  LinkType as _api_LinkType,
  LinkTypeId as _api_LinkTypeId,
  LinkTypeRid as _api_LinkTypeRid,
  ManyToManyLinkTypeDatasource as _api_ManyToManyLinkTypeDatasource,
  ModuleRid as _api_ModuleRid,
  ObjectType as _api_ObjectType,
  ObjectTypeApiName as _api_ObjectTypeApiName,
  ObjectTypeDatasource as _api_ObjectTypeDatasource,
  ObjectTypeFieldApiName as _api_ObjectTypeFieldApiName,
  ObjectTypeId as _api_ObjectTypeId,
  ObjectTypeRid as _api_ObjectTypeRid,
  OntologyIrActionType as _api_OntologyIrActionType,
  OntologyIrInterfaceType as _api_OntologyIrInterfaceType,
  OntologyIrLinkType as _api_OntologyIrLinkType,
  OntologyIrManyToManyLinkTypeDatasource
    as _api_OntologyIrManyToManyLinkTypeDatasource,
  OntologyIrObjectType as _api_OntologyIrObjectType,
  OntologyIrObjectTypeDatasource as _api_OntologyIrObjectTypeDatasource,
  OntologyIrSharedPropertyType as _api_OntologyIrSharedPropertyType,
  OntologyPackageRid as _api_OntologyPackageRid,
  ParameterId as _api_ParameterId,
  ParameterRid as _api_ParameterRid,
  PropertyId as _api_PropertyId,
  PropertyTypeId as _api_PropertyTypeId,
  PropertyTypeRid as _api_PropertyTypeRid,
  RuleSetRid as _api_RuleSetRid,
  SchemaVersion as _api_SchemaVersion,
  SharedPropertyType as _api_SharedPropertyType,
  SharedPropertyTypeRid as _api_SharedPropertyTypeRid,
  TimeSeriesSyncRid as _api_TimeSeriesSyncRid,
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
import type { EntityProvenance as _api_entitymetadata_provenance_EntityProvenance } from "../entitymetadata/provenance/__components.js";
import type { RuleSet as _api_formatting_RuleSet } from "../formatting/__components.js";
import type {
  OntologyIrSchemaTransition
    as _api_schemamigrations_OntologyIrSchemaTransition,
  SchemaTransition as _api_schemamigrations_SchemaTransition,
} from "../schemamigrations/__components.js";
import type { ObjectTypeGothamMapping as _api_typemapping_ObjectTypeGothamMapping } from "../typemapping/__components.js";
export type ActionParameterShapeId = string;
export interface ActionTypeBlockDataV2 {
  actionType: _api_ActionType;
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
  interfaceType: _api_InterfaceType;
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
  interfaceTypes: Record<_api_InterfaceTypeRid, BlockInternalId>;
  linkTypeIds: Record<_api_LinkTypeId, BlockInternalId>;
  linkTypes: Record<_api_LinkTypeRid, BlockInternalId>;
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
}
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
  actionType: _api_OntologyIrActionType;
}
export interface OntologyIrBlockPermissionInformation {
  actionTypes: Record<_api_ActionTypeApiName, ActionTypePermissionInformation>;
  linkTypes: Record<_api_LinkTypeId, LinkTypePermissionInformation>;
  objectTypes: Record<_api_ObjectTypeApiName, ObjectTypePermissionInformation>;
}
export interface OntologyIrInterfaceTypeBlockDataV2 {
  interfaceType: _api_OntologyIrInterfaceType;
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
  interfaceTypes: Record<_api_InterfaceTypeApiName, BlockInternalId>;
  linkTypeIds: Record<_api_LinkTypeId, BlockInternalId>;
  linkTypes: Record<_api_LinkTypeId, BlockInternalId>;
  objectTypeIds: Record<_api_ObjectTypeId, BlockInternalId>;
  objectTypes: Record<_api_ObjectTypeApiName, BlockInternalId>;
  propertyTypeIds: Record<
    _api_ObjectTypeId,
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
/**
 * Local overridden alias of OMS public API representation of ObjectTypeEntityMetadata. In OMS API we model
 * editsResolutionStrategies field as non-optional, but Marketplace ontology block data uploaded to
 * artifacts faces similar constraints as our internal StorageObjectTypeEntityMetadata and we need to provide
 * runtime conversion with default value.
 */
export interface OntologyIrMarketplaceObjectTypeEntityMetadata {
  arePatchesEnabled: boolean;
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
export type OutputMode = "RESTRICTED_VIEW" | "DATASET";
export interface PatchesConfiguration {
  lowLatencyUpdatesEnabled: boolean;
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
