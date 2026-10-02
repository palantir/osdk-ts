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

import type { ParameterId as _api_ParameterId } from "../__components.js";
import type { OntologyPackageRid as _api_OntologyPackageRid } from "../__components.js";
import type { ActionTypeRid as _api_ActionTypeRid } from "../__components.js";
import type { InterfaceTypeRid as _api_InterfaceTypeRid } from "../__components.js";
import type { LinkTypeRid as _api_LinkTypeRid } from "../__components.js";
import type { ObjectTypeRid as _api_ObjectTypeRid } from "../__components.js";
import type { SharedPropertyTypeRid as _api_SharedPropertyTypeRid } from "../__components.js";
import type { DatasourceRid as _api_DatasourceRid } from "../__components.js";
import type { InterfacePropertyTypeRid as _api_InterfacePropertyTypeRid } from "../__components.js";
import type { InterfacePropertyTypeApiName as _api_InterfacePropertyTypeApiName } from "../__components.js";
import type { InterfaceTypeSchemaTransitionRid as _api_InterfaceTypeSchemaTransitionRid } from "../__components.js";
import type { ParameterRid as _api_ParameterRid } from "../__components.js";
import type { FunctionRid as _api_FunctionRid } from "../__components.js";
import type { FunctionVersion as _api_FunctionVersion } from "../__components.js";
import type { GeotimeSeriesIntegrationRid as _api_GeotimeSeriesIntegrationRid } from "../__components.js";
import type { GroupId as _api_GroupId } from "../__components.js";
import type { InterfaceActionTypeConstraintRid as _api_InterfaceActionTypeConstraintRid } from "../__components.js";
import type { InterfaceLinkTypeRid as _api_InterfaceLinkTypeRid } from "../__components.js";
import type { InterfaceParameterConstraintRid as _api_InterfaceParameterConstraintRid } from "../__components.js";
import type { LinkTypeId as _api_LinkTypeId } from "../__components.js";
import type { MarkingId as _api_MarkingId } from "../__components.js";
import type { ObjectTypeId as _api_ObjectTypeId } from "../__components.js";
import type { PropertyTypeId as _api_PropertyTypeId } from "../__components.js";
import type { PropertyTypeRid as _api_PropertyTypeRid } from "../__components.js";
import type { TimeSeriesSyncRid as _api_TimeSeriesSyncRid } from "../__components.js";
import type { ValueTypeRid as _api_ValueTypeRid } from "../__components.js";
import type { ValueTypeVersionId as _api_ValueTypeVersionId } from "../__components.js";
import type { WebhookRid as _api_WebhookRid } from "../__components.js";
import type { ModuleRid as _api_ModuleRid } from "../__components.js";
import type { ManyToManyLinkTypeDatasource as _api_ManyToManyLinkTypeDatasource } from "../__components.js";
import type { LinkType as _api_LinkType } from "../__components.js";
import type { ActionTypeLogic as _api_ActionTypeLogic } from "../__components.js";
import type { ActionTypeRichTextComponent as _api_ActionTypeRichTextComponent } from "../__components.js";
import type { ActionTypeDisplayMetadataConfiguration as _api_ActionTypeDisplayMetadataConfiguration } from "../__components.js";
import type { Icon as _api_Icon } from "../__components.js";
import type { ButtonDisplayMetadata as _api_ButtonDisplayMetadata } from "../__components.js";
import type { TypeClass as _api_TypeClass } from "../__components.js";
import type { ActionApplyClientPreferences as _api_ActionApplyClientPreferences } from "../__components.js";
import type { ActionLogConfiguration as _api_ActionLogConfiguration } from "../__components.js";
import type { ActionTypeApiName as _api_ActionTypeApiName } from "../__components.js";
import type { ActionTypeBranchSettings as _api_ActionTypeBranchSettings } from "../__components.js";
import type { ActionTypeEntities as _api_ActionTypeEntities } from "../__components.js";
import type { FormContent as _api_FormContent } from "../__components.js";
import type { ActionTypeIsolationSettings as _api_ActionTypeIsolationSettings } from "../__components.js";
import type { ActionNotificationSettings as _api_ActionNotificationSettings } from "../__components.js";
import type { Parameter as _api_Parameter } from "../__components.js";
import type { ActionTypeScenarioSettings as _api_ActionTypeScenarioSettings } from "../__components.js";
import type { SectionId as _api_SectionId } from "../__components.js";
import type { Section as _api_Section } from "../__components.js";
import type { MediaSetRid as _api_MediaSetRid } from "../__components.js";
import type { ActionTypeStatus as _api_ActionTypeStatus } from "../__components.js";
import type { ActionSubmissionConfiguration as _api_ActionSubmissionConfiguration } from "../__components.js";
import type { ActionTypeVersion as _api_ActionTypeVersion } from "../__components.js";
import type { DataNullability as _api_DataNullability } from "../__components.js";
import type { DataNullabilityV2 as _api_DataNullabilityV2 } from "../__components.js";
import type { ClassificationConstraint as _api_ClassificationConstraint } from "../__components.js";
import type { MandatoryMarkingConstraint as _api_MandatoryMarkingConstraint } from "../__components.js";
import type { BaseFormatter as _api_BaseFormatter } from "../__components.js";
import type { InterfacePropertyTypeDisplayMetadata as _api_InterfacePropertyTypeDisplayMetadata } from "../__components.js";
import type { InterfacePropertyTypeType as _api_InterfacePropertyTypeType } from "../__components.js";
import type { PrimaryKeyConstraint as _api_PrimaryKeyConstraint } from "../__components.js";
import type { ValueTypeReference as _api_ValueTypeReference } from "../__components.js";
import type { LinkedEntityTypeId as _api_LinkedEntityTypeId } from "../__components.js";
import type { InterfaceLinkTypeApiName as _api_InterfaceLinkTypeApiName } from "../__components.js";
import type { InterfaceActionTypeConstraint as _api_InterfaceActionTypeConstraint } from "../__components.js";
import type { InterfaceTypeApiName as _api_InterfaceTypeApiName } from "../__components.js";
import type { SharedPropertyType as _api_SharedPropertyType } from "../__components.js";
import type { InterfaceSharedPropertyType as _api_InterfaceSharedPropertyType } from "../__components.js";
import type { ObjectTypeDatasourceDefinition as _api_ObjectTypeDatasourceDefinition } from "../__components.js";
import type { EditsConfiguration as _api_EditsConfiguration } from "../__components.js";
import type { ColumnName as _api_ColumnName } from "../__components.js";
import type { ObjectType as _api_ObjectType } from "../__components.js";
import type { RuleSetRid as _api_RuleSetRid } from "../__components.js";
import type { ObjectTypeApiName as _api_ObjectTypeApiName } from "../__components.js";
import type { ObjectTypeFieldApiName as _api_ObjectTypeFieldApiName } from "../__components.js";
import type { InterfaceActionTypeConstraintApiName as _api_InterfaceActionTypeConstraintApiName } from "../__components.js";
import type { InterfaceParameterConstraintApiName as _api_InterfaceParameterConstraintApiName } from "../__components.js";
import type { OntologyIrManyToManyLinkTypeDatasource as _api_OntologyIrManyToManyLinkTypeDatasource } from "../__components.js";
import type { OntologyIrLinkType as _api_OntologyIrLinkType } from "../__components.js";
import type { OntologyIrActionTypeLogic as _api_OntologyIrActionTypeLogic } from "../__components.js";
import type { OntologyIrActionTypeRichTextComponent as _api_OntologyIrActionTypeRichTextComponent } from "../__components.js";
import type { OntologyIrActionTypeEntities as _api_OntologyIrActionTypeEntities } from "../__components.js";
import type { OntologyIrFormContent as _api_OntologyIrFormContent } from "../__components.js";
import type { OntologyIrParameter as _api_OntologyIrParameter } from "../__components.js";
import type { OntologyIrSection as _api_OntologyIrSection } from "../__components.js";
import type { OntologyIrActionTypeStatus as _api_OntologyIrActionTypeStatus } from "../__components.js";
import type { OntologyIrClassificationConstraint as _api_OntologyIrClassificationConstraint } from "../__components.js";
import type { OntologyIrMandatoryMarkingConstraint as _api_OntologyIrMandatoryMarkingConstraint } from "../__components.js";
import type { OntologyIrBaseFormatter as _api_OntologyIrBaseFormatter } from "../__components.js";
import type { OntologyIrInterfacePropertyTypeType as _api_OntologyIrInterfacePropertyTypeType } from "../__components.js";
import type { OntologyIrLinkedEntityTypeId as _api_OntologyIrLinkedEntityTypeId } from "../__components.js";
import type { OntologyIrInterfaceActionTypeConstraint as _api_OntologyIrInterfaceActionTypeConstraint } from "../__components.js";
import type { OntologyIrSharedPropertyType as _api_OntologyIrSharedPropertyType } from "../__components.js";
import type { OntologyIrInterfaceSharedPropertyType as _api_OntologyIrInterfaceSharedPropertyType } from "../__components.js";
import type { OntologyIrObjectTypeDatasourceDefinition as _api_OntologyIrObjectTypeDatasourceDefinition } from "../__components.js";
import type { OntologyIrObjectType as _api_OntologyIrObjectType } from "../__components.js";
import type { SchemaVersion as _api_SchemaVersion } from "../__components.js";
import type { PropertyId as _api_PropertyId } from "../__components.js";
import type { LinkTypeEntityMetadata as _api_entitymetadata_LinkTypeEntityMetadata } from "../entitymetadata/__components.js";
import type { ActionLogRequirednessMetadata as _api_entitymetadata_ActionLogRequirednessMetadata } from "../entitymetadata/__components.js";
import type { ObjectTypeAlias as _api_entitymetadata_ObjectTypeAlias } from "../entitymetadata/__components.js";
import type { EditsHistory as _api_entitymetadata_EditsHistory } from "../entitymetadata/__components.js";
import type { EditsResolutionStrategies as _api_entitymetadata_EditsResolutionStrategies } from "../entitymetadata/__components.js";
import type { EntityConfig as _api_entitymetadata_EntityConfig } from "../entitymetadata/__components.js";
import type { InterfaceSettings as _api_entitymetadata_InterfaceSettings } from "../entitymetadata/__components.js";
import type { PatchApplicationStrategy as _api_entitymetadata_PatchApplicationStrategy } from "../entitymetadata/__components.js";
import type { StorageBackend as _api_entitymetadata_StorageBackend } from "../entitymetadata/__components.js";
import type { OntologyIrLinkTypeEntityMetadata as _api_entitymetadata_OntologyIrLinkTypeEntityMetadata } from "../entitymetadata/__components.js";
import type { OntologyIrEditsHistory as _api_entitymetadata_OntologyIrEditsHistory } from "../entitymetadata/__components.js";
import type { ActionTypeOwningResource as _api_entitymetadata_provenance_ActionTypeOwningResource } from "../entitymetadata/provenance/__components.js";
import type { ActionTypeProvenance as _api_entitymetadata_provenance_ActionTypeProvenance } from "../entitymetadata/provenance/__components.js";
import type { EntityProvenance as _api_entitymetadata_provenance_EntityProvenance } from "../entitymetadata/provenance/__components.js";
import type { RuleSet as _api_formatting_RuleSet } from "../formatting/__components.js";
import type { InterfaceTypeSchemaTransition as _api_schemamigrations_InterfaceTypeSchemaTransition } from "../schemamigrations/__components.js";
import type { InterfaceTypeSchemaTransitionId as _api_schemamigrations_InterfaceTypeSchemaTransitionId } from "../schemamigrations/__components.js";
import type { OntologyIrInterfaceTypeSchemaTransition as _api_schemamigrations_OntologyIrInterfaceTypeSchemaTransition } from "../schemamigrations/__components.js";
import type { OntologyIrSchemaTransition as _api_schemamigrations_OntologyIrSchemaTransition } from "../schemamigrations/__components.js";
import type { SchemaTransition as _api_schemamigrations_SchemaTransition } from "../schemamigrations/__components.js";
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
  publicProject?: boolean | null | undefined;
}
export type BlockInternalId = string;
export interface BlockPermissionInformation {
  actionTypes: Record<_api_ActionTypeRid, ActionTypePermissionInformation>;
  interfaceTypes: Record<
    _api_InterfaceTypeRid,
    InterfaceTypePermissionInformation
  >;
  linkTypes: Record<_api_LinkTypeRid, LinkTypePermissionInformation>;
  objectTypes: Record<_api_ObjectTypeRid, ObjectTypePermissionInformation>;
  sharedPropertyTypes: Record<
    _api_SharedPropertyTypeRid,
    SharedPropertyTypePermissionInformation
  >;
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
  schemaMigrations?: InterfaceTypeSchemaMigrationBlockData | null | undefined;
}
export interface InterfaceTypePermissionInformation {
  restrictionStatus: InterfaceTypeRestrictionStatus;
}
export interface InterfaceTypeRestrictionStatus {
  ontologyPackageRid?: _api_OntologyPackageRid | null | undefined;
  publicProject?: boolean | null | undefined;
}
export interface InterfaceTypeSchemaMigrationBlockData {
  interfacePropertyTypeRidsToApiNames: Record<
    _api_InterfacePropertyTypeRid,
    _api_InterfacePropertyTypeApiName
  >;
  schemaTransitions: Record<
    _api_InterfaceTypeSchemaTransitionRid,
    _api_schemamigrations_InterfaceTypeSchemaTransition
  >;
}
/**
 * Will only match if there is a single datasource that matches the output type (e.g. a dataset datasource
 * with an export dataset, or a restricted view datasource with an export restricted view). In the case of exporting
 * an RV datasource as a dataset, use DatasourcePredicate#hasRid instead.
 */
export interface IsOnlyDatasource {}
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
  interfaceActionTypeConstraints: Record<
    _api_InterfaceActionTypeConstraintRid,
    BlockInternalId
  >;
  interfaceLinkTypes: Record<_api_InterfaceLinkTypeRid, BlockInternalId>;
  interfaceParameterConstraints: Record<
    _api_InterfaceParameterConstraintRid,
    BlockInternalId
  >;
  interfacePropertyTypes: Record<
    _api_InterfacePropertyTypeRid,
    BlockInternalId
  >;
  interfaceTypes: Record<_api_InterfaceTypeRid, BlockInternalId>;
  interfaceTypeSchemaTransitions: Record<
    _api_InterfaceTypeSchemaTransitionRid,
    BlockInternalId
  >;
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
  shapeIdForOntologySchemaMigrationInputs?: BlockShapeId | null | undefined;
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
  publicProject?: boolean | null | undefined;
  restrictedByDatasources: boolean;
}
export interface MarketplaceActionType {
  actionTypeLogic: _api_ActionTypeLogic;
  metadata: MarketplaceActionTypeMetadata;
}
export interface MarketplaceActionTypeDisplayMetadata {
  applyingMessage: Array<_api_ActionTypeRichTextComponent>;
  applyingMessageEnabled?: boolean | null | undefined;
  configuration?:
    | _api_ActionTypeDisplayMetadataConfiguration
    | null
    | undefined;
  description: string;
  displayName: string;
  icon?: _api_Icon | null | undefined;
  submitButtonDisplayMetadata?: _api_ButtonDisplayMetadata | null | undefined;
  successMessage: Array<_api_ActionTypeRichTextComponent>;
  successMessageEnabled?: boolean | null | undefined;
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
  isolationSettings?: _api_ActionTypeIsolationSettings | null | undefined;
  notificationSettings?: _api_ActionNotificationSettings | null | undefined;
  owningResource?:
    | _api_entitymetadata_provenance_ActionTypeOwningResource
    | null
    | undefined;
  parameterOrdering: Array<_api_ParameterId>;
  parameters: Record<_api_ParameterId, _api_Parameter>;
  provenance?:
    | _api_entitymetadata_provenance_ActionTypeProvenance
    | null
    | undefined;
  rid: _api_ActionTypeRid;
  scenarioSettings?: _api_ActionTypeScenarioSettings | null | undefined;
  sections: Record<_api_SectionId, _api_Section>;
  stagingMediaSetRid?: _api_MediaSetRid | null | undefined;
  status: _api_ActionTypeStatus;
  submissionConfiguration?:
    | _api_ActionSubmissionConfiguration
    | null
    | undefined;
  version: _api_ActionTypeVersion;
}
export interface MarketplaceActiveInterfaceTypeStatus {}
export interface MarketplaceDataConstraints {
  nullability?: _api_DataNullability | null | undefined;
  nullabilityV2?: _api_DataNullabilityV2 | null | undefined;
}
/**
 * Marketplace shape of DataSecurity used in packaged block data. Mirrors DataSecurity but omits the
 * server-derived constantPolicyMarkings field, which the destination stack derives from the
 * installed PSGs on read.
 */
export interface MarketplaceDataSecurity {
  classificationConstraint?: _api_ClassificationConstraint | null | undefined;
  markingConstraint?: _api_MandatoryMarkingConstraint | null | undefined;
}
export interface MarketplaceDeprecatedInterfaceTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: _api_InterfaceTypeRid | null | undefined;
}
export interface MarketplaceExampleInterfaceTypeStatus {}
export interface MarketplaceExperimentalInterfaceTypeStatus {}
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
  actionTypeConstraints: Array<_api_InterfaceActionTypeConstraint>;
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
  schemaMigrationsEnabled?: boolean | null | undefined;
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
 * Marketplace shape of an ObjectTypeDatasource used in packaged block data. References MarketplaceDataSecurity
 * so that the server-derived constantPolicyMarkings field is not packaged.
 */
export interface MarketplaceObjectTypeDatasource {
  dataSecurity?: MarketplaceDataSecurity | null | undefined;
  datasource: _api_ObjectTypeDatasourceDefinition;
  editsConfiguration?: _api_EditsConfiguration | null | undefined;
  redacted?: boolean | null | undefined;
  rid: _api_DatasourceRid;
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
  interfaceSettings?: _api_entitymetadata_InterfaceSettings | null | undefined;
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
  datasources: Array<MarketplaceObjectTypeDatasource>;
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
  publicProject?: boolean | null | undefined;
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
  interfaceTypes: Record<
    _api_InterfaceTypeApiName,
    InterfaceTypePermissionInformation
  >;
  linkTypes: Record<_api_LinkTypeId, LinkTypePermissionInformation>;
  objectTypes: Record<_api_ObjectTypeApiName, ObjectTypePermissionInformation>;
  sharedPropertyTypes: Record<
    _api_ObjectTypeFieldApiName,
    SharedPropertyTypePermissionInformation
  >;
}
export interface OntologyIrInterfaceTypeBlockDataV2 {
  interfaceType: OntologyIrMarketplaceInterfaceType;
  schemaMigrations?:
    | OntologyIrInterfaceTypeSchemaMigrationBlockData
    | null
    | undefined;
}
export interface OntologyIrInterfaceTypeSchemaMigrationBlockData {
  schemaTransitions: Record<
    _api_schemamigrations_InterfaceTypeSchemaTransitionId,
    _api_schemamigrations_OntologyIrInterfaceTypeSchemaTransition
  >;
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
  interfaceActionTypeConstraints: Record<
    _api_InterfaceActionTypeConstraintApiName,
    BlockInternalId
  >;
  interfaceLinkTypes: Record<_api_InterfaceLinkTypeApiName, BlockInternalId>;
  interfaceParameterConstraints: Record<
    _api_InterfaceParameterConstraintApiName,
    BlockInternalId
  >;
  interfacePropertyTypes: Record<
    _api_InterfacePropertyTypeApiName,
    BlockInternalId
  >;
  interfaceTypes: Record<_api_InterfaceTypeApiName, BlockInternalId>;
  interfaceTypeSchemaTransitions: Record<
    _api_schemamigrations_InterfaceTypeSchemaTransitionId,
    BlockInternalId
  >;
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
  shapeIdForOntologySchemaMigrationInputs?: BlockShapeId | null | undefined;
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
  applyingMessage: Array<_api_OntologyIrActionTypeRichTextComponent>;
  applyingMessageEnabled?: boolean | null | undefined;
  configuration?:
    | _api_ActionTypeDisplayMetadataConfiguration
    | null
    | undefined;
  description: string;
  displayName: string;
  icon?: _api_Icon | null | undefined;
  submitButtonDisplayMetadata?: _api_ButtonDisplayMetadata | null | undefined;
  successMessage: Array<_api_OntologyIrActionTypeRichTextComponent>;
  successMessageEnabled?: boolean | null | undefined;
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
  isolationSettings?: _api_ActionTypeIsolationSettings | null | undefined;
  owningResource?:
    | _api_entitymetadata_provenance_ActionTypeOwningResource
    | null
    | undefined;
  parameterOrdering: Array<_api_ParameterId>;
  parameters: Record<_api_ParameterId, _api_OntologyIrParameter>;
  scenarioSettings?: _api_ActionTypeScenarioSettings | null | undefined;
  sections: Record<_api_SectionId, _api_OntologyIrSection>;
  stagingMediaSetRid?: _api_MediaSetRid | null | undefined;
  status: _api_OntologyIrActionTypeStatus;
}
/**
 * Marketplace shape of DataSecurity used in packaged block data. Mirrors DataSecurity but omits the
 * server-derived constantPolicyMarkings field, which the destination stack derives from the
 * installed PSGs on read.
 */
export interface OntologyIrMarketplaceDataSecurity {
  classificationConstraint?:
    | _api_OntologyIrClassificationConstraint
    | null
    | undefined;
  markingConstraint?:
    | _api_OntologyIrMandatoryMarkingConstraint
    | null
    | undefined;
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
  sharedPropertyBasedPropertyType: OntologyIrMarketplaceSharedPropertyBasedPropertyType;
}

export interface OntologyIrMarketplaceInterfacePropertyType_interfaceDefinedPropertyType {
  type: "interfaceDefinedPropertyType";
  interfaceDefinedPropertyType: OntologyIrMarketplaceInterfaceDefinedPropertyType;
}
export type OntologyIrMarketplaceInterfacePropertyType =
  | OntologyIrMarketplaceInterfacePropertyType_sharedPropertyBasedPropertyType
  | OntologyIrMarketplaceInterfacePropertyType_interfaceDefinedPropertyType;

export interface OntologyIrMarketplaceInterfaceType {
  actionTypeConstraints: Array<_api_OntologyIrInterfaceActionTypeConstraint>;
  apiName: _api_InterfaceTypeApiName;
  displayMetadata: MarketplaceInterfaceTypeDisplayMetadata;
  extendsInterfaces: Array<_api_InterfaceTypeApiName>;
  extendsInterfacesMetadata: Array<OntologyIrMarketplaceInterfaceType>;
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
  schemaMigrationsEnabled?: boolean | null | undefined;
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
 * Marketplace shape of an ObjectTypeDatasource used in packaged block data. References MarketplaceDataSecurity
 * so that the server-derived constantPolicyMarkings field is not packaged.
 */
export interface OntologyIrMarketplaceObjectTypeDatasource {
  dataSecurity?: OntologyIrMarketplaceDataSecurity | null | undefined;
  datasource: _api_OntologyIrObjectTypeDatasourceDefinition;
  datasourceName: DatasourceName;
  editsConfiguration?: _api_EditsConfiguration | null | undefined;
  redacted?: boolean | null | undefined;
}
/**
 * Local overridden alias of OMS public API representation of ObjectTypeEntityMetadata. In OMS API we model
 * editsResolutionStrategies field as non-optional, but Marketplace ontology block data uploaded to
 * artifacts faces similar constraints as our internal StorageObjectTypeEntityMetadata and we need to provide
 * runtime conversion with default value.
 */
export interface OntologyIrMarketplaceObjectTypeEntityMetadata {
  aliases: Array<_api_entitymetadata_ObjectTypeAlias>;
  arePatchesEnabled: boolean;
  editsHistory?: _api_entitymetadata_OntologyIrEditsHistory | null | undefined;
  interfaceSettings?: _api_entitymetadata_InterfaceSettings | null | undefined;
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
  datasources: Array<OntologyIrMarketplaceObjectTypeDatasource>;
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
export interface PostOntologyBlockDataResponse {}
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
export interface PropertySecurityGroupPackagingV1 {}
/**
 * This is the new approach to PSG packaging. See this quip for more details - https://palantir.quip.com/Ros7ABfTeLSH
 */
export interface PropertySecurityGroupPackagingV2 {}
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
export interface SharedPropertyTypePermissionInformation {
  restrictionStatus: SharedPropertyTypeRestrictionStatus;
}
export interface SharedPropertyTypeRestrictionStatus {
  ontologyPackageRid?: _api_OntologyPackageRid | null | undefined;
  publicProject?: boolean | null | undefined;
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
