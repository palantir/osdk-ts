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
  DatasourceIdentifier as _api_DatasourceIdentifier,
  ObjectTypeFieldApiName as _api_ObjectTypeFieldApiName,
  OntologyRid as _api_OntologyRid,
  OntologyVersion as _api_OntologyVersion,
  PropertyTypeRid as _api_PropertyTypeRid,
  SharedPropertyTypeRid as _api_SharedPropertyTypeRid,
  StructFieldRid as _api_StructFieldRid,
  TypeClass as _api_TypeClass,
  ValueTypeIdInRequest as _api_ValueTypeIdInRequest,
} from "../__components.js";
import type { SharedPropertyTypeModification as _api_modification_SharedPropertyTypeModification } from "../modification/__components.js";

/**
 * This type exists because Conjure does not support using an alias of an external type as a key to a map
 * (see LoadGothamTypeInstallationStatusesResponse). The values of this type should always be lowercased in
 * responses, but clients should convert to an internal case-insensitive type where possible.
 */
export type CaseSensitiveGothamObjectTypeUri = string;

/**
 * This type exists because Conjure does not support using an alias of an external type as a key to a map
 * (see LoadGothamTypeInstallationStatusesResponse). Values of this type should always be lowercased in
 * responses, but clients should convert to an internal case-insensitive type where possible.
 */
export type CaseSensitiveGothamPropertyTypeUri = string;

/**
 * Check if the following Datasource rids can be translated through the specified workflows.
 */
export interface CheckTranslationEligibilityRequest {
  delegates: Record<GothamDatasourceDelegateId, _api_DatasourceIdentifier>;
  ontologyRid?: _api_OntologyRid | null | undefined;
}
/**
 * Returns the security translation eligibility of the requested Delegates.
 */
export interface CheckTranslationEligibilityResponse {
  clientTranslationEligibility: Array<ClientTranslationEligibilityResult>;
}
/**
 * Per client eligibility result.
 */
export interface ClientTranslationEligibilityResult {
  clientType: IntegrationClientType;
  translationEligibility: Record<
    GothamDatasourceDelegateId,
    TranslationEligibility
  >;
}
/**
 * This expected base type for a property type that represents a Gotham Lat+Long Intrinsic.
 */
export interface ExpectedGeoHashBaseType {
}
/**
 * This expected base type for a property type that represents a Gotham MGRS Intrinsic.
 */
export interface ExpectedStringBaseType {
}
/**
 * This expected base type for a property type that represents a Gotham Start Date Intrinsic.
 */
export interface ExpectedTimestampBaseType {
}
export interface ExternalMappingConfiguration_gotham {
  type: "gotham";
  gotham: GothamMappingConfiguration;
}
/**
 * Configuration for external type systems that Foundry ontology entities can be mapped to.
 */
export type ExternalMappingConfiguration = ExternalMappingConfiguration_gotham;

export type ExternalMappingConfigurationFilter = "ALL" | "GOTHAM";

/**
 * Contains Gotham object types available and unavailable to be imported as Foundry ObjectTypes.
 */
export interface GetGothamObjectTypesResponse {
  gothamObjectTypesAvailable: Array<GothamObjectTypeAvailable>;
  gothamObjectTypesUnavailable: Array<GothamObjectTypeUnavailable>;
}
/**
 * Contains Gotham property types available and unavailable to be imported as SharedPropertyTypes.
 */
export interface GetGothamPropertyTypesResponse {
  gothamPropertyTypesAvailable: Array<
    _api_modification_SharedPropertyTypeModification
  >;
  gothamPropertyTypesAvailable2: Array<GothamPropertyTypeAvailable>;
  gothamPropertyTypesUnavailableForImport: Array<GothamPropertyTypeUnavailable>;
}
/**
 * An identifier to represent a Foundry object that GSS will use to delegate security to. This is only to
 * map requested delegates to their corresponding translation eligibility response and is not persisted.
 */
export type GothamDatasourceDelegateId = string;
export type GothamDatasourceMetadata =
  | "GOTHAM_DSR_DATASOURCE_NAME"
  | "GOTHAM_DSR_OBJECT_GID"
  | "GOTHAM_DSR_CREATED_BY"
  | "GOTHAM_DSR_LAST_UPDATED_BY"
  | "GOTHAM_DSR_CREATED_AT"
  | "GOTHAM_DSR_LAST_UPDATED_AT"
  | "GOTHAM_DSR_CUSTOM_METADATA";
export interface GothamIntrinsic_startDate {
  type: "startDate";
  startDate: GothamIntrinsicStartDate;
}

export interface GothamIntrinsic_endDate {
  type: "endDate";
  endDate: GothamIntrinsicEndDate;
}

export interface GothamIntrinsic_latLong {
  type: "latLong";
  latLong: GothamIntrinsicLatLong;
}

export interface GothamIntrinsic_mgrs {
  type: "mgrs";
  mgrs: GothamIntrinsicMgrs;
}
export type GothamIntrinsic =
  | GothamIntrinsic_startDate
  | GothamIntrinsic_endDate
  | GothamIntrinsic_latLong
  | GothamIntrinsic_mgrs;

/**
 * This property represents a Gotham End Date Intrinsic. This should be mapped from a Timestamp property.
 */
export interface GothamIntrinsicEndDate {
}
export interface GothamIntrinsicExpectedBaseType_timestamp {
  type: "timestamp";
  timestamp: ExpectedTimestampBaseType;
}

export interface GothamIntrinsicExpectedBaseType_geoHash {
  type: "geoHash";
  geoHash: ExpectedGeoHashBaseType;
}

export interface GothamIntrinsicExpectedBaseType_string {
  type: "string";
  string: ExpectedStringBaseType;
}
export type GothamIntrinsicExpectedBaseType =
  | GothamIntrinsicExpectedBaseType_timestamp
  | GothamIntrinsicExpectedBaseType_geoHash
  | GothamIntrinsicExpectedBaseType_string;

/**
 * This property represents a Gotham Lat/Long Intrinsic. This should be mapped from a GeoHash property.
 */
export interface GothamIntrinsicLatLong {
}
/**
 * This property represents a Gotham MGRS Intrinsic. This should be mapped from a String property.
 */
export interface GothamIntrinsicMgrs {
}
/**
 * This property represents a Gotham Start Date Intrinsic. This should be mapped from a Timestamp property.
 */
export interface GothamIntrinsicStartDate {
}
export type GothamIntrinsicV2 =
  | "GOTHAM_INTRINSIC_START_DATE"
  | "GOTHAM_INTRINSIC_END_DATE"
  | "GOTHAM_INTRINSIC_LAT_LONG"
  | "GOTHAM_INTRINSIC_MGRS";
export interface GothamMappingConfiguration {
  shouldUseFoundryObjectViewsInGotham: boolean;
}
/**
 * A foundry property that represents an object level intrinsic in Gotham. These are read from TypeClasses.
 */
export interface GothamObjectIntrinsicMapping {
  gothamIntrinsicType: GothamIntrinsic;
}
/**
 * Represents a Gotham object type that is available to be imported.
 */
export interface GothamObjectTypeAvailable {
  aliases: Array<string>;
  description: string;
  displayName: string;
  gothamMapping: ObjectTypeGothamMappingModification;
  representativePropertyTypes: Array<GothamRepresentativePropertyType>;
  typeClasses: Array<_api_TypeClass>;
}
/**
 * The URI of a Gotham object type that is currently unavailable to be imported, along with the causes
 * of unavailability.
 */
export interface GothamObjectTypeUnavailable {
  description: string;
  displayName: string;
  unavailableGothamObjectTypeUri: GothamObjectTypeUri;
  unavailableObjectTypeCauses: Array<UnavailableGothamObjectTypeCause>;
}
/**
 * Gotham Object types unavailable because they have non label property title generators.
 */
export interface GothamObjectTypeUnavailableHasNonLabelPropertyTitleGenerators {
}
/**
 * Gotham Object types unavailable because they belong to type groups, which are not supported yet in Foundry.
 */
export interface GothamObjectTypeUnavailableHasTypeGroups {
}
/**
 * Gotham Object Type currently in the middle of a transfer between fragments cannot be imported into Foundry.
 * To import this type, the transfer needs to be completed by removing the type from its original fragment.
 */
export interface GothamObjectTypeUnavailableInTransfer {
}
/**
 * Gotham Object Type unavailable because they are core ontology types.
 */
export interface GothamObjectTypeUnavailableIsCoreType {
}
/**
 * Gotham Object types unavailable because their usage restriction isn't set to unrestricted.
 */
export interface GothamObjectTypeUnavailableIsNotUnrestricted {
}
/**
 * Gotham Object Type unavailable because their label Property cannot be imported
 */
export interface GothamObjectTypeUnavailableLabelPropertyCannotBeImported {
  unavailableLabelPropertyCause: GothamPropertyTypeUnavailable;
}
/**
 * Gotham Object types with Foundry-owned property types for which we were unable to find a
 * Shared Property Type with a matching URI. This can happen if the Shared Property Type gets
 * deleted by the time we look for it in Foundry, or if the SPT shares a Gotham URI with another SPT.
 */
export interface GothamObjectTypeUnavailableMissingSharedPropertyType {
  propertyTypeUris: Array<GothamPropertyTypeUri>;
}
/**
 * Gotham Object types unavailable because their label property type URI does not correspond to an existing
 * property type on the ontology.
 */
export interface GothamObjectTypeUnavailableSpecifiedLabelPropertyTypeNotFound {
}
export type GothamObjectTypeUri = string;

/**
 * These values represent the 3 base object types from Gotham ontology.
 */
export type GothamOntologyParentType = "ENTITY" | "DOCUMENT" | "EVENT";
export type GothamOntologyParentTypeUri = string;
export type GothamPropertyComponentUri = string;
export interface GothamPropertyDatasourceMapping_property {
  type: "property";
  property: GothamPropertyDatasourceMappingProperty;
}

export interface GothamPropertyDatasourceMapping_struct {
  type: "struct";
  struct: GothamPropertyDatasourceMappingStruct;
}
export type GothamPropertyDatasourceMapping =
  | GothamPropertyDatasourceMapping_property
  | GothamPropertyDatasourceMapping_struct;

export interface GothamPropertyDatasourceMappingProperty {
  propertyMappings: Record<GothamDatasourceMetadata, _api_PropertyTypeRid>;
}
export interface GothamPropertyDatasourceMappingStruct {
  propertyMappings: Record<GothamDatasourceMetadata, _api_StructFieldRid>;
}
/**
 * A foundry property that represents a property level intrinsic in Gotham. These are read from TypeClasses.
 * The propertyMappings field stores which other properties this intrinsic should be set for in Gotham.
 */
export interface GothamPropertyIntrinsicMapping {
  gothamIntrinsicType: GothamIntrinsic;
  propertyMappings: Array<_api_PropertyTypeRid>;
}
/**
 * The propertyMappings field stores which properties populate the intrinsic values for specific Gotham
 * intrinsics.
 *
 * A foundry property that represents a property level intrinsic in Gotham. These are read from TypeClasses.
 */
export interface GothamPropertyIntrinsicMappingV2 {
  propertyMappings: Record<GothamIntrinsicV2, _api_PropertyTypeRid>;
}
/**
 * The propertyMappings field stores which struct fields populate the Gotham intrinsic values for this property.
 * Struct fields that are marked as intrinsics here will be ignored during type mapping. This means if you had a
 * struct like {age: int, startDate: timestamp (intrinsic), location: geohash (intrinsic)}, Gotham would ignore
 * the latter 2 fields and map this as an integer property type, not a struct property type.
 */
export interface GothamPropertyIntrinsicMappingV3 {
  propertyMappings: Record<GothamIntrinsicV2, _api_StructFieldRid>;
}
/**
 * Represents a Gotham property type that is available to be imported.
 */
export interface GothamPropertyTypeAvailable {
  sharedPropertyTypeModification:
    _api_modification_SharedPropertyTypeModification;
  valueTypesToCreate?: GothamPropertyValueTypesToCreate | null | undefined;
  valueTypeToCreate?: any | null | undefined;
}
/**
 * A Gotham property type that is currently unavailable to be imported along with all the reasons why
 * it cannot be imported.
 */
export interface GothamPropertyTypeUnavailable {
  unavailableGothamPropertyTypeCauses: Array<
    UnavailableGothamPropertyTypeCause
  >;
  unavailableGothamPropertyTypeDescription: string;
  unavailableGothamPropertyTypeDisplayName: string;
  unavailableGothamPropertyTypeUri: GothamPropertyTypeUri;
}
/**
 * Gotham property type cannot be imported into Foundry because the type could not be converted in Gotham.
 */
export interface GothamPropertyTypeUnavailableConverterError {
}
/**
 * Deprecated Gotham property types cannot be imported into Foundry.
 */
export interface GothamPropertyTypeUnavailableDeprecated {
}
/**
 * Gotham property types with custom makers (parsers) cannot currently be imported into Foundry.
 */
export interface GothamPropertyTypeUnavailableHasCustomMakers {
}
/**
 * Gotham Property Types currently in the middle of a transfer between fragments cannot be imported into Foundry.
 * To import this type, the transfer needs to be completed by removing the type from its original fragment.
 */
export interface GothamPropertyTypeUnavailableInTransfer {
}
/**
 * Gotham Composite types cannot currently be imported into Foundry.
 */
export interface GothamPropertyTypeUnavailableIsComposite {
}
/**
 * Non-indexed Gotham property types cannot currently be imported into Foundry.
 */
export interface GothamPropertyTypeUnavailableNonIndexedProperty {
}
/**
 * Gotham system property types cannot currently be imported into Foundry.
 */
export interface GothamPropertyTypeUnavailableSystemProperty {
}
/**
 * Gotham property type cannot be imported into Foundry because of an unknown reason, most likely because of a
 * conversion error to a fragment property type.
 */
export interface GothamPropertyTypeUnavailableUnknown {
}
/**
 * Gotham property types with empty or non-default approxes cannot currently be imported into Foundry.
 */
export interface GothamPropertyTypeUnavailableUnsupportedBaseValidators {
}
/**
 * Gotham property types with a non-default Max Value Length cannot currently be imported into Foundry.
 */
export interface GothamPropertyTypeUnavailableUnsupportedMaxValueLength {
}
export type GothamPropertyTypeUri = string;
export interface GothamPropertyValueTypesToCreate {
  additionalValueTypesToCreate: Record<_api_ValueTypeIdInRequest, any>;
  valueTypeToCreate: any;
}
export interface GothamRepresentativePropertyType_sharedPropertyTypeToCreate {
  type: "sharedPropertyTypeToCreate";
  sharedPropertyTypeToCreate: GothamPropertyTypeAvailable;
}

export interface GothamRepresentativePropertyType_existingSharedPropertyType {
  type: "existingSharedPropertyType";
  existingSharedPropertyType: _api_SharedPropertyTypeRid;
}
/**
 * A SharedPropertyTypeModification if the Gotham property type doesn't already exist in the requested
 * Foundry ontology. Otherwise, the SharedPropertyTypeRid of the corresponding SharedPropertyType in the
 * requested ontology.
 */
export type GothamRepresentativePropertyType =
  | GothamRepresentativePropertyType_sharedPropertyTypeToCreate
  | GothamRepresentativePropertyType_existingSharedPropertyType;

/**
 * The type has failed installation at least once. The installation will be retried later.
 * The latest error message for the failure and the current failure count are returned.
 */
export interface GothamTypeInstallFailedStatus {
  failureCount: number;
  lastFailureMessage: string;
}
/**
 * The type has been successfully installed to the runtime ontology.
 */
export interface GothamTypeInstallInstalledStatus {
}
/**
 * The type is currently being installed by Gotham.
 */
export interface GothamTypeInstallInstallingStatus {
}
/**
 * The type has not been received by Gotham. It may or may not get received later.
 */
export interface GothamTypeInstallNotFoundStatus {
}
/**
 * The type has been received by Gotham and is awaiting installation.
 */
export interface GothamTypeInstallQueuedStatus {
}
/**
 * The type has been successfully staged and will be promoted to runtime after the next ontology reindex.
 */
export interface GothamTypeInstallStagedStatus {
}
export interface GothamTypeInstallStatus_notFound {
  type: "notFound";
  notFound: GothamTypeInstallNotFoundStatus;
}

export interface GothamTypeInstallStatus_queued {
  type: "queued";
  queued: GothamTypeInstallQueuedStatus;
}

export interface GothamTypeInstallStatus_installing {
  type: "installing";
  installing: GothamTypeInstallInstallingStatus;
}

export interface GothamTypeInstallStatus_failed {
  type: "failed";
  failed: GothamTypeInstallFailedStatus;
}

export interface GothamTypeInstallStatus_staged {
  type: "staged";
  staged: GothamTypeInstallStagedStatus;
}

export interface GothamTypeInstallStatus_installed {
  type: "installed";
  installed: GothamTypeInstallInstalledStatus;
}
export type GothamTypeInstallStatus =
  | GothamTypeInstallStatus_notFound
  | GothamTypeInstallStatus_queued
  | GothamTypeInstallStatus_installing
  | GothamTypeInstallStatus_failed
  | GothamTypeInstallStatus_staged
  | GothamTypeInstallStatus_installed;

export interface GothamTypeInstallStatusWithVersion {
  foundryVersion?: _api_OntologyVersion | null | undefined;
  status: GothamTypeInstallStatus;
  usageRestriction?: GothamUsageRestriction | null | undefined;
}
/**
 * UNRESTRICTED means the type is fully indexed, and changing aspects of it such as the parent type requires reindex.
 * FEDERATED_ONLY means the type does not contain any stored data in Gotham, and can be changed freely without reindex.
 * DEPRECATED_* indicates that the type was previously UNRESTRICTED/FEDERATED_ONLY, but is now DEPRECATED (hidden from most UIs in Gotham).
 */
export type GothamUsageRestriction =
  | "UNRESTRICTED"
  | "FEDERATED_ONLY"
  | "DEPRECATED_UNRESTRICTED"
  | "DEPRECATED_FEDERATED_ONLY";

/**
 * The types of clients that can be used to integrate data into Gotham
 */
export type IntegrationClientType = "OSS_DIRECT";

/**
 * Contains the URIs of the types that the caller wants to query the installation status on.
 */
export interface LoadGothamTypeInstallationStatusesRequest {
  objectTypeUris: Array<GothamObjectTypeUri>;
  propertyTypeUris: Array<GothamPropertyTypeUri>;
}
/**
 * The installation statuses along with the versions of the types queried, indexed by the type URI.
 */
export interface LoadGothamTypeInstallationStatusesResponse {
  objectTypeStatuses: Record<
    CaseSensitiveGothamObjectTypeUri,
    GothamTypeInstallStatusWithVersion
  >;
  propertyTypeStatuses: Record<
    CaseSensitiveGothamPropertyTypeUri,
    GothamTypeInstallStatusWithVersion
  >;
}
export interface ObjectTypeGothamMapping {
  dataSource?: _api_PropertyTypeRid | null | undefined;
  gothamMappingEnabled?: boolean | null | undefined;
  gothamTitleProperty?: _api_PropertyTypeRid | null | undefined;
  objectLevelIntrinsics: Record<
    _api_PropertyTypeRid,
    GothamObjectIntrinsicMapping
  >;
  objectLevelIntrinsicsV2: Record<GothamIntrinsicV2, _api_PropertyTypeRid>;
  parentType: GothamOntologyParentType;
  parentTypeUri?: GothamOntologyParentTypeUri | null | undefined;
  propertyLevelDatasources: Record<
    _api_PropertyTypeRid,
    GothamPropertyDatasourceMapping
  >;
  propertyLevelIntrinsics: Record<
    _api_PropertyTypeRid,
    GothamPropertyIntrinsicMapping
  >;
  propertyLevelIntrinsicsV2: Record<
    _api_PropertyTypeRid,
    GothamPropertyIntrinsicMappingV2
  >;
  propertyLevelIntrinsicsV3: Record<
    _api_PropertyTypeRid,
    GothamPropertyIntrinsicMappingV3
  >;
  propertyMapping: Record<_api_PropertyTypeRid, PropertyTypeGothamMapping>;
  revDbIntegrationState: RevDbIntegrationState;
  uri: GothamObjectTypeUri;
}
/**
 * An ObjectTypeGothamMappingModification included in a client request can include all three fields, although
 * the value of the included fields have not been modified. Thus, to determine whether the URI or propertyMapping
 * is being modified, we compare the filed values with those obtained from the StorageObjectTypeGothamMapping.
 * Only the Marketplace service user is allowed to modify the URI and propertyMapping.
 */
export interface ObjectTypeGothamMappingModification {
  clearGothamMapping?: boolean | null | undefined;
  gothamMappingEnabled?: boolean | null | undefined;
  parentType?: GothamOntologyParentType | null | undefined;
  parentTypeUri?: GothamObjectTypeUri | null | undefined;
  propertyMapping: Record<
    _api_PropertyTypeRid,
    PropertyTypeGothamMappingModification
  >;
  revDbIntegrationState?: RevDbIntegrationState | null | undefined;
  uri?: GothamObjectTypeUri | null | undefined;
}
/**
 * Gotham Object Type unavailable for import because at least one of their representative property types are
 * unavailable for import.
 */
export interface ObjectTypeHasUnavailableRepresentativePropertyTypes {
  unavailablePropertyTypes: Array<GothamPropertyTypeUnavailable>;
}
export interface OntologyIrGothamPropertyDatasourceMapping_property {
  type: "property";
  property: OntologyIrGothamPropertyDatasourceMappingProperty;
}

export interface OntologyIrGothamPropertyDatasourceMapping_struct {
  type: "struct";
  struct: OntologyIrGothamPropertyDatasourceMappingStruct;
}
export type OntologyIrGothamPropertyDatasourceMapping =
  | OntologyIrGothamPropertyDatasourceMapping_property
  | OntologyIrGothamPropertyDatasourceMapping_struct;

export interface OntologyIrGothamPropertyDatasourceMappingProperty {
  propertyMappings: Record<
    GothamDatasourceMetadata,
    _api_ObjectTypeFieldApiName
  >;
}
export interface OntologyIrGothamPropertyDatasourceMappingStruct {
  propertyMappings: Record<GothamDatasourceMetadata, _api_StructFieldRid>;
}
/**
 * A foundry property that represents a property level intrinsic in Gotham. These are read from TypeClasses.
 * The propertyMappings field stores which other properties this intrinsic should be set for in Gotham.
 */
export interface OntologyIrGothamPropertyIntrinsicMapping {
  gothamIntrinsicType: GothamIntrinsic;
  propertyMappings: Array<_api_ObjectTypeFieldApiName>;
}
/**
 * The propertyMappings field stores which properties populate the intrinsic values for specific Gotham
 * intrinsics.
 *
 * A foundry property that represents a property level intrinsic in Gotham. These are read from TypeClasses.
 */
export interface OntologyIrGothamPropertyIntrinsicMappingV2 {
  propertyMappings: Record<GothamIntrinsicV2, _api_ObjectTypeFieldApiName>;
}
/**
 * The propertyMappings field stores which struct fields populate the Gotham intrinsic values for this property.
 * Struct fields that are marked as intrinsics here will be ignored during type mapping. This means if you had a
 * struct like {age: int, startDate: timestamp (intrinsic), location: geohash (intrinsic)}, Gotham would ignore
 * the latter 2 fields and map this as an integer property type, not a struct property type.
 */
export interface OntologyIrGothamPropertyIntrinsicMappingV3 {
  propertyMappings: Record<GothamIntrinsicV2, _api_StructFieldRid>;
}
export interface OntologyIrObjectTypeGothamMapping {
  dataSource?: _api_ObjectTypeFieldApiName | null | undefined;
  gothamMappingEnabled?: boolean | null | undefined;
  gothamTitleProperty?: _api_ObjectTypeFieldApiName | null | undefined;
  objectLevelIntrinsics: Record<
    _api_ObjectTypeFieldApiName,
    GothamObjectIntrinsicMapping
  >;
  objectLevelIntrinsicsV2: Record<
    GothamIntrinsicV2,
    _api_ObjectTypeFieldApiName
  >;
  parentType: GothamOntologyParentType;
  parentTypeUri?: GothamOntologyParentTypeUri | null | undefined;
  propertyLevelDatasources: Record<
    _api_ObjectTypeFieldApiName,
    OntologyIrGothamPropertyDatasourceMapping
  >;
  propertyLevelIntrinsics: Record<
    _api_ObjectTypeFieldApiName,
    OntologyIrGothamPropertyIntrinsicMapping
  >;
  propertyLevelIntrinsicsV2: Record<
    _api_ObjectTypeFieldApiName,
    OntologyIrGothamPropertyIntrinsicMappingV2
  >;
  propertyLevelIntrinsicsV3: Record<
    _api_ObjectTypeFieldApiName,
    OntologyIrGothamPropertyIntrinsicMappingV3
  >;
  propertyMapping: Record<
    _api_ObjectTypeFieldApiName,
    PropertyTypeGothamMapping
  >;
  revDbIntegrationState: RevDbIntegrationState;
  uri: GothamObjectTypeUri;
}
export interface PropertyTypeGothamMapping {
  isSharedPropertyType?: boolean | null | undefined;
  structApiNameToComponentUriMapping: Record<
    _api_ObjectTypeFieldApiName,
    GothamPropertyComponentUri
  >;
  uri: GothamPropertyTypeUri;
}
export interface PropertyTypeGothamMappingModification {
  structApiNameToComponentUriMapping: Record<
    _api_ObjectTypeFieldApiName,
    GothamPropertyComponentUri
  >;
  uri: GothamPropertyTypeUri;
}
export type RevDbIntegrationState =
  | "ENABLED"
  | "PAUSED"
  | "DISABLED"
  | "DISABLED_ALLOW_WRITES";
export interface SharedPropertyTypeGothamMapping {
  structApiNameToComponentUriMapping: Record<
    _api_ObjectTypeFieldApiName,
    GothamPropertyComponentUri
  >;
  uri: GothamPropertyTypeUri;
}
export interface SharedPropertyTypeGothamMappingModification {
  structApiNameToComponentUriMapping: Record<
    _api_ObjectTypeFieldApiName,
    GothamPropertyComponentUri
  >;
  uri?: GothamPropertyTypeUri | null | undefined;
}
/**
 * The requested Delegate can be translated to a simple policy
 */
export interface TranslatableDatasource {
}
export interface TranslationEligibility_translatableDatasource {
  type: "translatableDatasource";
  translatableDatasource: TranslatableDatasource;
}

export interface TranslationEligibility_untranslatableSecurity {
  type: "untranslatableSecurity";
  untranslatableSecurity: UntranslatableSecurity;
}
export type TranslationEligibility =
  | TranslationEligibility_translatableDatasource
  | TranslationEligibility_untranslatableSecurity;

export interface UnavailableGothamObjectTypeCause_objectTypeHasUnavailableRepresentativePropertyTypes {
  type: "objectTypeHasUnavailableRepresentativePropertyTypes";
  objectTypeHasUnavailableRepresentativePropertyTypes:
    ObjectTypeHasUnavailableRepresentativePropertyTypes;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableInTransfer {
  type: "objectTypeUnavailableInTransfer";
  objectTypeUnavailableInTransfer: GothamObjectTypeUnavailableInTransfer;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableIsCoreType {
  type: "objectTypeUnavailableIsCoreType";
  objectTypeUnavailableIsCoreType: GothamObjectTypeUnavailableIsCoreType;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableLabelPropertyCannotBeImported {
  type: "objectTypeUnavailableLabelPropertyCannotBeImported";
  objectTypeUnavailableLabelPropertyCannotBeImported:
    GothamObjectTypeUnavailableLabelPropertyCannotBeImported;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableSpecifiedLabelPropertyTypeNotFound {
  type: "objectTypeUnavailableSpecifiedLabelPropertyTypeNotFound";
  objectTypeUnavailableSpecifiedLabelPropertyTypeNotFound:
    GothamObjectTypeUnavailableSpecifiedLabelPropertyTypeNotFound;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableHasNonLabelPropertyTitleGenerators {
  type: "objectTypeUnavailableHasNonLabelPropertyTitleGenerators";
  objectTypeUnavailableHasNonLabelPropertyTitleGenerators:
    GothamObjectTypeUnavailableHasNonLabelPropertyTitleGenerators;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableHasTypeGroups {
  type: "objectTypeUnavailableHasTypeGroups";
  objectTypeUnavailableHasTypeGroups: GothamObjectTypeUnavailableHasTypeGroups;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableIsNotUnrestricted {
  type: "objectTypeUnavailableIsNotUnrestricted";
  objectTypeUnavailableIsNotUnrestricted:
    GothamObjectTypeUnavailableIsNotUnrestricted;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableMissingSharedPropertyType {
  type: "objectTypeUnavailableMissingSharedPropertyType";
  objectTypeUnavailableMissingSharedPropertyType:
    GothamObjectTypeUnavailableMissingSharedPropertyType;
}
export type UnavailableGothamObjectTypeCause =
  | UnavailableGothamObjectTypeCause_objectTypeHasUnavailableRepresentativePropertyTypes
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableInTransfer
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableIsCoreType
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableLabelPropertyCannotBeImported
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableSpecifiedLabelPropertyTypeNotFound
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableHasNonLabelPropertyTitleGenerators
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableHasTypeGroups
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableIsNotUnrestricted
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableMissingSharedPropertyType;

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableIsComposite {
  type: "gothamPropertyTypeUnavailableIsComposite";
  gothamPropertyTypeUnavailableIsComposite:
    GothamPropertyTypeUnavailableIsComposite;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableInTransfer {
  type: "gothamPropertyTypeUnavailableInTransfer";
  gothamPropertyTypeUnavailableInTransfer:
    GothamPropertyTypeUnavailableInTransfer;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableConverterError {
  type: "gothamPropertyTypeUnavailableConverterError";
  gothamPropertyTypeUnavailableConverterError:
    GothamPropertyTypeUnavailableConverterError;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableDeprecated {
  type: "gothamPropertyTypeUnavailableDeprecated";
  gothamPropertyTypeUnavailableDeprecated:
    GothamPropertyTypeUnavailableDeprecated;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableSystemProperty {
  type: "gothamPropertyTypeUnavailableSystemProperty";
  gothamPropertyTypeUnavailableSystemProperty:
    GothamPropertyTypeUnavailableSystemProperty;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableNonIndexedProperty {
  type: "gothamPropertyTypeUnavailableNonIndexedProperty";
  gothamPropertyTypeUnavailableNonIndexedProperty:
    GothamPropertyTypeUnavailableNonIndexedProperty;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableUnsupportedBaseValidators {
  type: "gothamPropertyTypeUnavailableUnsupportedBaseValidators";
  gothamPropertyTypeUnavailableUnsupportedBaseValidators:
    GothamPropertyTypeUnavailableUnsupportedBaseValidators;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableUnsupportedMaxValueLength {
  type: "gothamPropertyTypeUnavailableUnsupportedMaxValueLength";
  gothamPropertyTypeUnavailableUnsupportedMaxValueLength:
    GothamPropertyTypeUnavailableUnsupportedMaxValueLength;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableHasCustomMakers {
  type: "gothamPropertyTypeUnavailableHasCustomMakers";
  gothamPropertyTypeUnavailableHasCustomMakers:
    GothamPropertyTypeUnavailableHasCustomMakers;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableUnknown {
  type: "gothamPropertyTypeUnavailableUnknown";
  gothamPropertyTypeUnavailableUnknown: GothamPropertyTypeUnavailableUnknown;
}
export type UnavailableGothamPropertyTypeCause =
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableIsComposite
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableInTransfer
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableConverterError
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableDeprecated
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableSystemProperty
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableNonIndexedProperty
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableUnsupportedBaseValidators
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableUnsupportedMaxValueLength
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableHasCustomMakers
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableUnknown;

/**
 * The requested Delegate cannot be integrated into Gotham.
 */
export interface UntranslatableSecurity {
  causes: Array<UntranslatableSecurityFailureType>;
}
export type UntranslatableSecurityFailureType =
  | "INVALID_MARKINGS_SUMMARY"
  | "FAILED_DATASOURCE_MARKING_LOAD"
  | "INACCESSIBLE_DELEGATE"
  | "UNSUPPORTED_GPS_POLICY"
  | "UNSUPPORTED_DATASOURCE_IDENTIFIER_TYPE"
  | "UNHANDLED_TRANSLATION_FAILURE";
