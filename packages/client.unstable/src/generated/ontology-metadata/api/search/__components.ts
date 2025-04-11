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
  ActionTypeRid as _api_ActionTypeRid,
  DataType as _api_DataType,
  FunctionRid as _api_FunctionRid,
  InterfaceType as _api_InterfaceType,
  InterfaceTypeRid as _api_InterfaceTypeRid,
  ObjectType as _api_ObjectType,
  ObjectTypeRid as _api_ObjectTypeRid,
  OntologyBranchRid as _api_OntologyBranchRid,
  OntologyRid as _api_OntologyRid,
  OntologyVersion as _api_OntologyVersion,
  PropertyTypeRid as _api_PropertyTypeRid,
  SharedPropertyType as _api_SharedPropertyType,
  SharedPropertyTypeRid as _api_SharedPropertyTypeRid,
  TypeGroupRid as _api_TypeGroupRid,
  Visibility as _api_Visibility,
  WebhookRid as _api_WebhookRid,
} from "../__components.js";
export interface ActionTypeClause_and {
  type: "and";
  and: Array<ActionTypeClause>;
}

export interface ActionTypeClause_or {
  type: "or";
  or: Array<ActionTypeClause>;
}

export interface ActionTypeClause_affectedObjectTypeRid {
  type: "affectedObjectTypeRid";
  affectedObjectTypeRid: _api_ObjectTypeRid;
}

export interface ActionTypeClause_inputObjectTypeRid {
  type: "inputObjectTypeRid";
  inputObjectTypeRid: _api_ObjectTypeRid;
}

export interface ActionTypeClause_webhookRid {
  type: "webhookRid";
  webhookRid: _api_WebhookRid;
}

export interface ActionTypeClause_actionTypeApiName {
  type: "actionTypeApiName";
  actionTypeApiName: FullTextStringPredicate;
}

export interface ActionTypeClause_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: _api_ActionTypeRid;
}

export interface ActionTypeClause_actionTypeDisplayName {
  type: "actionTypeDisplayName";
  actionTypeDisplayName: FullTextStringPredicate;
}

export interface ActionTypeClause_typeClasses {
  type: "typeClasses";
  typeClasses: TypeClassPredicate;
}

export interface ActionTypeClause_actionTypeDescription {
  type: "actionTypeDescription";
  actionTypeDescription: FullTextStringPredicate;
}

export interface ActionTypeClause_status {
  type: "status";
  status: ActionTypeStatusFilter;
}

export interface ActionTypeClause_logicRule {
  type: "logicRule";
  logicRule: LogicRuleTypeFilter;
}

export interface ActionTypeClause_hasActionLog {
  type: "hasActionLog";
  hasActionLog: boolean;
}

export interface ActionTypeClause_hasWebhook {
  type: "hasWebhook";
  hasWebhook: boolean;
}

export interface ActionTypeClause_hasNotification {
  type: "hasNotification";
  hasNotification: boolean;
}

export interface ActionTypeClause_permissionModel {
  type: "permissionModel";
  permissionModel: ActionTypePermissionModelFilter;
}

export interface ActionTypeClause_functionRid {
  type: "functionRid";
  functionRid: _api_FunctionRid;
}
/**
 * Data structure to represent search query for ActionTypes. Supports filters for various ActionType features.
 */
export type ActionTypeClause =
  | ActionTypeClause_and
  | ActionTypeClause_or
  | ActionTypeClause_affectedObjectTypeRid
  | ActionTypeClause_inputObjectTypeRid
  | ActionTypeClause_webhookRid
  | ActionTypeClause_actionTypeApiName
  | ActionTypeClause_actionTypeRid
  | ActionTypeClause_actionTypeDisplayName
  | ActionTypeClause_typeClasses
  | ActionTypeClause_actionTypeDescription
  | ActionTypeClause_status
  | ActionTypeClause_logicRule
  | ActionTypeClause_hasActionLog
  | ActionTypeClause_hasWebhook
  | ActionTypeClause_hasNotification
  | ActionTypeClause_permissionModel
  | ActionTypeClause_functionRid;

export interface ActionTypeFuzziness_off {
  type: "off";
  off: FuzzinessOff;
}

export interface ActionTypeFuzziness_auto {
  type: "auto";
  auto: FuzzinessAuto;
}
/**
 * Fuzziness setting for `contains` FullTextStringPredicates.
 */
export type ActionTypeFuzziness =
  | ActionTypeFuzziness_off
  | ActionTypeFuzziness_auto;

/**
 * Filter by action type permission model
 */
export type ActionTypePermissionModelFilter =
  | "DATASOURCE_DERIVED_PERMISSIONS"
  | "ONTOLOGY_ROLES";

/**
 * Wrapper around single ActionType contained in ActionTypeSearchResponse.
 */
export interface ActionTypeSearchHit {
  actionType: _api_ActionType;
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
}
/**
 * A paging token used to retrieve further pages of an ActionType search by including it in the
 * ActionTypeSearchRequest. Clients shouldn't make any assumptions about the content of the token and it
 * should not be parsed/modified.
 */
export type ActionTypeSearchPageToken = string;

/**
 * Request to search for ActionTypes based on the given clause. ActionTypes are searched across all Ontologies
 * the user has access to.
 */
export interface ActionTypeSearchRequest {
  clause: ActionTypeClause;
  excludedActionTypeRids: Array<string>;
  fuzziness?: ActionTypeFuzziness | null | undefined;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
  ontologyRids: Array<_api_OntologyRid>;
  pageSizeLimit: number;
  pageToken?: ActionTypeSearchPageToken | null | undefined;
  sort?: ActionTypeSort | null | undefined;
}
/**
 * Page response to ActionTypeSearchRequest containing ActionTypes matching the search query.
 */
export interface ActionTypeSearchResponse {
  actionTypes: Array<ActionTypeSearchHit>;
  nextPageToken?: ActionTypeSearchPageToken | null | undefined;
  totalResults: number;
}
/**
 * Sort order for ActionTypes.
 */
export interface ActionTypeSort {
  order: ActionTypeSortOrder;
  sortBy: ActionTypeSortBy;
}
/**
 * Specifies value to be used to sort ActionTypes.
 */
export type ActionTypeSortBy = "ACTION_TYPE_DISPLAY_NAME";

/**
 * Specifies sort order for ActionTypes
 */
export type ActionTypeSortOrder = "ASCENDING" | "DESCENDING";

/**
 * Filter by ActionTypeStatus
 */
export type ActionTypeStatusFilter =
  | "EXPERIMENTAL"
  | "ACTIVE"
  | "DEPRECATED"
  | "EXAMPLE";
export interface FullTextStringPredicate_exact {
  type: "exact";
  exact: string;
}

export interface FullTextStringPredicate_contains {
  type: "contains";
  contains: string;
}
/**
 * Predicate for matching Strings.
 */
export type FullTextStringPredicate =
  | FullTextStringPredicate_exact
  | FullTextStringPredicate_contains;

/**
 * Fuzzy search is activated which can sometimes help to discover additional search results based on small
 * differences in spelling but some additional search results may be less relevant.
 */
export interface FuzzinessAuto {
}
/**
 * Fuzzy search is turned off. Matches generated by modifying one or more characters
 * of the search query are not returned.
 */
export interface FuzzinessOff {
}
export interface InterfaceTypeClause_and {
  type: "and";
  and: Array<InterfaceTypeClause>;
}

export interface InterfaceTypeClause_or {
  type: "or";
  or: Array<InterfaceTypeClause>;
}

export interface InterfaceTypeClause_interfaceTypeRid {
  type: "interfaceTypeRid";
  interfaceTypeRid: _api_InterfaceTypeRid;
}

export interface InterfaceTypeClause_apiName {
  type: "apiName";
  apiName: FullTextStringPredicate;
}

export interface InterfaceTypeClause_displayName {
  type: "displayName";
  displayName: FullTextStringPredicate;
}

export interface InterfaceTypeClause_description {
  type: "description";
  description: FullTextStringPredicate;
}

export interface InterfaceTypeClause_status {
  type: "status";
  status: InterfaceTypeStatusFilter;
}

export interface InterfaceTypeClause_property {
  type: "property";
  property: _api_SharedPropertyTypeRid;
}

export interface InterfaceTypeClause_allProperty {
  type: "allProperty";
  allProperty: _api_SharedPropertyTypeRid;
}

export interface InterfaceTypeClause_extendsInterface {
  type: "extendsInterface";
  extendsInterface: _api_InterfaceTypeRid;
}

export interface InterfaceTypeClause_allExtendsInterface {
  type: "allExtendsInterface";
  allExtendsInterface: _api_InterfaceTypeRid;
}

export interface InterfaceTypeClause_externalMapping {
  type: "externalMapping";
  externalMapping: InterfaceTypeExternalMappingFilter;
}
/**
 * Data structure to represent a search query for InterfaceTypes. Supports filters for various
 * InterfaceType features.
 */
export type InterfaceTypeClause =
  | InterfaceTypeClause_and
  | InterfaceTypeClause_or
  | InterfaceTypeClause_interfaceTypeRid
  | InterfaceTypeClause_apiName
  | InterfaceTypeClause_displayName
  | InterfaceTypeClause_description
  | InterfaceTypeClause_status
  | InterfaceTypeClause_property
  | InterfaceTypeClause_allProperty
  | InterfaceTypeClause_extendsInterface
  | InterfaceTypeClause_allExtendsInterface
  | InterfaceTypeClause_externalMapping;

/**
 * Filter by external mapping type
 */
export type InterfaceTypeExternalMappingFilter = "GOTHAM";
export interface InterfaceTypeFuzziness_off {
  type: "off";
  off: FuzzinessOff;
}

export interface InterfaceTypeFuzziness_auto {
  type: "auto";
  auto: FuzzinessAuto;
}
/**
 * Fuzziness setting for `contains` FullTextStringPredicates.
 */
export type InterfaceTypeFuzziness =
  | InterfaceTypeFuzziness_off
  | InterfaceTypeFuzziness_auto;

/**
 * Wrapper around single InterfaceType contained in InterfaceTypeSearchResponse.
 */
export interface InterfaceTypeSearchHit {
  interfaceType: _api_InterfaceType;
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
}
/**
 * A paging token used to retrieve further pages of an InterfaceType search by including it in the
 * InterfaceTypeSearchRequest. Clients shouldn't make any assumptions about the content of the token and it
 * should not be parsed/modified.
 */
export type InterfaceTypeSearchPageToken = string;

/**
 * Request to search for InterfaceTypes based on the given clause. InterfaceTypes are searched across
 * all ontologies the user has access to.
 */
export interface InterfaceTypeSearchRequest {
  clause: InterfaceTypeClause;
  excludedInterfaceTypeRids: Array<string>;
  fuzziness?: InterfaceTypeFuzziness | null | undefined;
  ontologyRids: Array<_api_OntologyRid>;
  pageSizeLimit: number;
  pageToken?: InterfaceTypeSearchPageToken | null | undefined;
  sort?: InterfaceTypeSort | null | undefined;
}
/**
 * Page response to InterfaceTypeSearchRequest containing InterfaceTypes matching the search query.
 */
export interface InterfaceTypeSearchResponse {
  interfaceTypes: Array<InterfaceTypeSearchHit>;
  nextPageToken?: InterfaceTypeSearchPageToken | null | undefined;
  totalResults: number;
}
/**
 * Sort order for InterfaceTypes.
 */
export interface InterfaceTypeSort {
  order: InterfaceTypeSortOrder;
  sortBy: InterfaceTypeSortBy;
}
/**
 * Specifies value to be used to sort InterfaceTypes.
 */
export type InterfaceTypeSortBy = "INTERFACE_TYPE_DISPLAY_NAME";

/**
 * Specifies sort order for InterfaceTypes
 */
export type InterfaceTypeSortOrder = "ASCENDING" | "DESCENDING";

/**
 * Filter by InterfaceTypeStatus
 */
export type InterfaceTypeStatusFilter =
  | "EXPERIMENTAL"
  | "ACTIVE"
  | "DEPRECATED"
  | "EXAMPLE";

/**
 * Filter by LogicRuleTypes
 */
export type LogicRuleTypeFilter =
  | "ADD_OBJECT"
  | "MODIFY_OBJECT"
  | "DELETE_OBJECT"
  | "ADD_LINK"
  | "DELETE_LINK"
  | "FUNCTION"
  | "BATCHED_FUNCTION"
  | "ADD_OR_MODIFY_OBJECT"
  | "ADD_OR_MODIFY_OBJECT_V2";
export interface ObjectTypeClause_and {
  type: "and";
  and: Array<ObjectTypeClause>;
}

export interface ObjectTypeClause_or {
  type: "or";
  or: Array<ObjectTypeClause>;
}

export interface ObjectTypeClause_propertyTypeTypeClasses {
  type: "propertyTypeTypeClasses";
  propertyTypeTypeClasses: TypeClassPredicate;
}

export interface ObjectTypeClause_propertyTypeType {
  type: "propertyTypeType";
  propertyTypeType: _api_DataType;
}

export interface ObjectTypeClause_hasEventMetadata {
  type: "hasEventMetadata";
  hasEventMetadata: boolean;
}

export interface ObjectTypeClause_hasEditsEnabled {
  type: "hasEditsEnabled";
  hasEditsEnabled: boolean;
}

export interface ObjectTypeClause_hasTimeSeriesMetadata {
  type: "hasTimeSeriesMetadata";
  hasTimeSeriesMetadata: boolean;
}

export interface ObjectTypeClause_propertyTypeRid {
  type: "propertyTypeRid";
  propertyTypeRid: _api_PropertyTypeRid;
}

export interface ObjectTypeClause_propertyTypeId {
  type: "propertyTypeId";
  propertyTypeId: FullTextStringPredicate;
}

export interface ObjectTypeClause_propertyTypeApiName {
  type: "propertyTypeApiName";
  propertyTypeApiName: FullTextStringPredicate;
}

export interface ObjectTypeClause_propertyTypeDescription {
  type: "propertyTypeDescription";
  propertyTypeDescription: FullTextStringPredicate;
}

export interface ObjectTypeClause_propertyTypeDisplayName {
  type: "propertyTypeDisplayName";
  propertyTypeDisplayName: FullTextStringPredicate;
}

export interface ObjectTypeClause_propertyTypeAlias {
  type: "propertyTypeAlias";
  propertyTypeAlias: FullTextStringPredicate;
}

export interface ObjectTypeClause_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: _api_ObjectTypeRid;
}

export interface ObjectTypeClause_objectTypeId {
  type: "objectTypeId";
  objectTypeId: FullTextStringPredicate;
}

export interface ObjectTypeClause_objectTypeDisplayName {
  type: "objectTypeDisplayName";
  objectTypeDisplayName: FullTextStringPredicate;
}

export interface ObjectTypeClause_objectTypeAlias {
  type: "objectTypeAlias";
  objectTypeAlias: FullTextStringPredicate;
}

export interface ObjectTypeClause_objectTypePluralDisplayName {
  type: "objectTypePluralDisplayName";
  objectTypePluralDisplayName: FullTextStringPredicate;
}

export interface ObjectTypeClause_objectTypeDescription {
  type: "objectTypeDescription";
  objectTypeDescription: FullTextStringPredicate;
}

export interface ObjectTypeClause_visibility {
  type: "visibility";
  visibility: _api_Visibility;
}

export interface ObjectTypeClause_status {
  type: "status";
  status: ObjectTypeStatusFilter;
}

export interface ObjectTypeClause_objectTypeExternalMapping {
  type: "objectTypeExternalMapping";
  objectTypeExternalMapping: ObjectTypeExternalMappingFilter;
}

export interface ObjectTypeClause_targetStorageBackend {
  type: "targetStorageBackend";
  targetStorageBackend: ObjectTypeTargetStorageBackendFilter;
}

export interface ObjectTypeClause_objectDbType {
  type: "objectDbType";
  objectDbType: string;
}

export interface ObjectTypeClause_entityProvenanceSource {
  type: "entityProvenanceSource";
  entityProvenanceSource: ObjectTypeEntityProvenanceSourceFilter;
}

export interface ObjectTypeClause_permissionModel {
  type: "permissionModel";
  permissionModel: ObjectTypePermissionModelFilter;
}

export interface ObjectTypeClause_objectTypeTypeGroupRids {
  type: "objectTypeTypeGroupRids";
  objectTypeTypeGroupRids: Array<_api_TypeGroupRid>;
}

export interface ObjectTypeClause_objectTypeApiName {
  type: "objectTypeApiName";
  objectTypeApiName: FullTextStringPredicate;
}
/**
 * Data structure to represent search query for ObjectTypes. Supports filters for various ObjectType features.
 */
export type ObjectTypeClause =
  | ObjectTypeClause_and
  | ObjectTypeClause_or
  | ObjectTypeClause_propertyTypeTypeClasses
  | ObjectTypeClause_propertyTypeType
  | ObjectTypeClause_hasEventMetadata
  | ObjectTypeClause_hasEditsEnabled
  | ObjectTypeClause_hasTimeSeriesMetadata
  | ObjectTypeClause_propertyTypeRid
  | ObjectTypeClause_propertyTypeId
  | ObjectTypeClause_propertyTypeApiName
  | ObjectTypeClause_propertyTypeDescription
  | ObjectTypeClause_propertyTypeDisplayName
  | ObjectTypeClause_propertyTypeAlias
  | ObjectTypeClause_objectTypeRid
  | ObjectTypeClause_objectTypeId
  | ObjectTypeClause_objectTypeDisplayName
  | ObjectTypeClause_objectTypeAlias
  | ObjectTypeClause_objectTypePluralDisplayName
  | ObjectTypeClause_objectTypeDescription
  | ObjectTypeClause_visibility
  | ObjectTypeClause_status
  | ObjectTypeClause_objectTypeExternalMapping
  | ObjectTypeClause_targetStorageBackend
  | ObjectTypeClause_objectDbType
  | ObjectTypeClause_entityProvenanceSource
  | ObjectTypeClause_permissionModel
  | ObjectTypeClause_objectTypeTypeGroupRids
  | ObjectTypeClause_objectTypeApiName;

/**
 * Filter by object type entity provenance source
 */
export type ObjectTypeEntityProvenanceSourceFilter =
  | "BUILDER"
  | "MARKETPLACE"
  | "OTHER";

/**
 * Filter by external mapping type
 */
export type ObjectTypeExternalMappingFilter = "GOTHAM";
export interface ObjectTypeFuzziness_off {
  type: "off";
  off: FuzzinessOff;
}

export interface ObjectTypeFuzziness_auto {
  type: "auto";
  auto: FuzzinessAuto;
}
/**
 * Fuzziness setting for `contains` FullTextStringPredicates.
 */
export type ObjectTypeFuzziness =
  | ObjectTypeFuzziness_off
  | ObjectTypeFuzziness_auto;

/**
 * Filter by object type permission model
 */
export type ObjectTypePermissionModelFilter =
  | "DATASOURCE_DERIVED_PERMISSIONS"
  | "ONTOLOGY_ROLES";

/**
 * Wrapper around single ObjectType contained in ObjectTypeSearchResponse.
 */
export interface ObjectTypeSearchHit {
  objectType: _api_ObjectType;
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
  score: number | "NaN" | "Infinity" | "-Infinity";
}
/**
 * A paging token used to retrieve further pages of an ObjectType search by including it in the
 * ObjectTypeSearchRequest. Clients shouldn't make any assumptions about the content of the token and it
 * should not be parsed/modified.
 */
export type ObjectTypeSearchPageToken = string;

/**
 * A paging token used to retrieve further pages of an ObjectType search by including it in the
 * ObjectTypeSearchRequestV2. Clients shouldn't make any assumptions about the content of the token and it
 * should not be parsed/modified.
 */
export type ObjectTypeSearchPageTokenV2 = string;

/**
 * Request to search for ObjectTypes based on the given clause. ObjectTypes are searched across all Ontologies
 * the user has access to.
 */
export interface ObjectTypeSearchRequest {
  clause: ObjectTypeClause;
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  loadRedacted?: boolean | null | undefined;
  pageSizeLimit: number;
  pageToken?: ObjectTypeSearchPageToken | null | undefined;
  sort?: ObjectTypeSort | null | undefined;
}
/**
 * Request to search for ObjectTypes based on the given clause. ObjectTypes are searched across all Ontologies
 * the user has access to.
 */
export interface ObjectTypeSearchRequestV2 {
  clause: ObjectTypeClause;
  excludedObjectTypeRids: Array<_api_ObjectTypeRid>;
  fuzziness?: ObjectTypeFuzziness | null | undefined;
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  loadRedacted?: boolean | null | undefined;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
  ontologyRids: Array<_api_OntologyRid>;
  pageSizeLimit: number;
  pageToken?: ObjectTypeSearchPageTokenV2 | null | undefined;
  semanticSearchQuery?: string | null | undefined;
  sort?: ObjectTypeSort | null | undefined;
}
/**
 * Response to ObjectTypeSearchRequest containing ObjectTypes returned based on ObjectTypeSearchRequest.
 */
export interface ObjectTypeSearchResponse {
  nextPageToken?: ObjectTypeSearchPageToken | null | undefined;
  objectTypes: Array<ObjectTypeSearchHit>;
  totalResults: number;
}
/**
 * Page response to ObjectTypeSearchRequestV2 containing ObjectTypes matching the search query.
 */
export interface ObjectTypeSearchResponseV2 {
  nextPageToken?: ObjectTypeSearchPageTokenV2 | null | undefined;
  objectTypes: Array<ObjectTypeSearchHit>;
  totalResults: number;
}
/**
 * Sort order for ObjectTypes.
 */
export interface ObjectTypeSort {
  order: ObjectTypeSortOrder;
  sortBy: ObjectTypeSortBy;
}
/**
 * Specifies value to be used to sort ObjectTypes.
 */
export type ObjectTypeSortBy =
  | "OBJECT_TYPE_ID"
  | "OBJECT_TYPE_API_NAME"
  | "OBJECT_TYPE_DISPLAY_NAME"
  | "OBJECT_TYPE_PLURAL_DISPLAY_NAME"
  | "OBJECT_TYPE_UNIQUE_USERS_COUNT";

/**
 * Specifies sort order for ObjectTypes
 */
export type ObjectTypeSortOrder = "ASCENDING" | "DESCENDING";

/**
 * Filter by ObjectTypeStatus
 */
export type ObjectTypeStatusFilter =
  | "EXPERIMENTAL"
  | "ACTIVE"
  | "DEPRECATED"
  | "EXAMPLE"
  | "ENDORSED";

/**
 * Filter by object type target storage backend
 */
export type ObjectTypeTargetStorageBackendFilter =
  | "OBJECT_STORAGE_V1"
  | "OBJECT_STORAGE_V2";
export interface SharedPropertyTypeClause_and {
  type: "and";
  and: Array<SharedPropertyTypeClause>;
}

export interface SharedPropertyTypeClause_or {
  type: "or";
  or: Array<SharedPropertyTypeClause>;
}

export interface SharedPropertyTypeClause_sharedPropertyTypeRid {
  type: "sharedPropertyTypeRid";
  sharedPropertyTypeRid: _api_SharedPropertyTypeRid;
}

export interface SharedPropertyTypeClause_apiName {
  type: "apiName";
  apiName: FullTextStringPredicate;
}

export interface SharedPropertyTypeClause_displayName {
  type: "displayName";
  displayName: FullTextStringPredicate;
}

export interface SharedPropertyTypeClause_alias {
  type: "alias";
  alias: FullTextStringPredicate;
}

export interface SharedPropertyTypeClause_description {
  type: "description";
  description: FullTextStringPredicate;
}

export interface SharedPropertyTypeClause_visibility {
  type: "visibility";
  visibility: SharedPropertyTypeVisibilityFilter;
}

export interface SharedPropertyTypeClause_isIndexedForSearch {
  type: "isIndexedForSearch";
  isIndexedForSearch: boolean;
}

export interface SharedPropertyTypeClause_propertyType {
  type: "propertyType";
  propertyType: _api_DataType;
}

export interface SharedPropertyTypeClause_typeClasses {
  type: "typeClasses";
  typeClasses: TypeClassPredicate;
}

export interface SharedPropertyTypeClause_externalMapping {
  type: "externalMapping";
  externalMapping: SharedPropertyTypeExternalMappingFilter;
}
/**
 * Data structure to represent a search query for SharedPropertyTypes. Supports filters for various
 * SharedPropertyType features.
 */
export type SharedPropertyTypeClause =
  | SharedPropertyTypeClause_and
  | SharedPropertyTypeClause_or
  | SharedPropertyTypeClause_sharedPropertyTypeRid
  | SharedPropertyTypeClause_apiName
  | SharedPropertyTypeClause_displayName
  | SharedPropertyTypeClause_alias
  | SharedPropertyTypeClause_description
  | SharedPropertyTypeClause_visibility
  | SharedPropertyTypeClause_isIndexedForSearch
  | SharedPropertyTypeClause_propertyType
  | SharedPropertyTypeClause_typeClasses
  | SharedPropertyTypeClause_externalMapping;

/**
 * Filter by external mapping type
 */
export type SharedPropertyTypeExternalMappingFilter = "GOTHAM";
export interface SharedPropertyTypeFuzziness_off {
  type: "off";
  off: FuzzinessOff;
}

export interface SharedPropertyTypeFuzziness_auto {
  type: "auto";
  auto: FuzzinessAuto;
}
/**
 * Fuzziness setting for `contains` FullTextStringPredicates.
 */
export type SharedPropertyTypeFuzziness =
  | SharedPropertyTypeFuzziness_off
  | SharedPropertyTypeFuzziness_auto;

/**
 * Wrapper around single SharedPropertyType contained in SharedPropertyTypeSearchResponse.
 */
export interface SharedPropertyTypeSearchHit {
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
  sharedPropertyType: _api_SharedPropertyType;
}
/**
 * A paging token used to retrieve further pages of an SharedPropertyType search by including it in the
 * SharedPropertyTypeSearchRequest. Clients shouldn't make any assumptions about the content of the token and it
 * should not be parsed/modified.
 */
export type SharedPropertyTypeSearchPageToken = string;

/**
 * Request to search for SharedPropertyTypes based on the given clause. SharedPropertyTypes are searched across
 * all ontologies the user has access to.
 */
export interface SharedPropertyTypeSearchRequest {
  clause: SharedPropertyTypeClause;
  excludedSharedPropertyTypeRids: Array<string>;
  fuzziness?: SharedPropertyTypeFuzziness | null | undefined;
  ontologyRids: Array<_api_OntologyRid>;
  pageSizeLimit: number;
  pageToken?: SharedPropertyTypeSearchPageToken | null | undefined;
  sort?: SharedPropertyTypeSort | null | undefined;
}
/**
 * Page response to SharedPropertyTypeSearchRequest containing SharedPropertyTypes matching the search query.
 */
export interface SharedPropertyTypeSearchResponse {
  nextPageToken?: SharedPropertyTypeSearchPageToken | null | undefined;
  sharedPropertyTypes: Array<SharedPropertyTypeSearchHit>;
  totalResults: number;
}
/**
 * Sort order for SharedPropertyTypes.
 */
export interface SharedPropertyTypeSort {
  order: SharedPropertyTypeSortOrder;
  sortBy: SharedPropertyTypeSortBy;
}
/**
 * Specifies value to be used to sort SharedPropertyTypes.
 */
export type SharedPropertyTypeSortBy = "SHARED_PROPERTY_TYPE_DISPLAY_NAME";

/**
 * Specifies sort order for SharedPropertyTypes
 */
export type SharedPropertyTypeSortOrder = "ASCENDING" | "DESCENDING";

/**
 * Filter by Visibility
 */
export type SharedPropertyTypeVisibilityFilter =
  | "PROMINENT"
  | "NORMAL"
  | "HIDDEN";
export interface StringPredicate_exact {
  type: "exact";
  exact: string;
}
/**
 * Predicate for matching Strings.
 */
export type StringPredicate = StringPredicate_exact;

/**
 * Predicate for matching TypeClasses. Matches TypeClass when `kind` and `name` match the corresponding
 * attribute of TypeClass. If `name` is empty, only `kind` is required to match.
 */
export interface TypeClassPredicate {
  kind: StringPredicate;
  name?: StringPredicate | null | undefined;
}
export interface TypeGroupClause_and {
  type: "and";
  and: Array<TypeGroupClause>;
}

export interface TypeGroupClause_or {
  type: "or";
  or: Array<TypeGroupClause>;
}

export interface TypeGroupClause_displayName {
  type: "displayName";
  displayName: FullTextStringPredicate;
}

export interface TypeGroupClause_description {
  type: "description";
  description: FullTextStringPredicate;
}
/**
 * Data structure to represent a search query for InterfaceTypes. Supports filters for various
 * InterfaceType features.
 */
export type TypeGroupClause =
  | TypeGroupClause_and
  | TypeGroupClause_or
  | TypeGroupClause_displayName
  | TypeGroupClause_description;

export interface TypeGroupFuzziness_off {
  type: "off";
  off: FuzzinessOff;
}

export interface TypeGroupFuzziness_auto {
  type: "auto";
  auto: FuzzinessAuto;
}
/**
 * Fuzziness setting for `contains` FullTextStringPredicates.
 */
export type TypeGroupFuzziness =
  | TypeGroupFuzziness_off
  | TypeGroupFuzziness_auto;

/**
 * Wrapper around single TypeGroupRid contained in TypeGroupSearchResponse.
 */
export interface TypeGroupSearchHit {
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
  typeGroupRid: _api_TypeGroupRid;
}
/**
 * A paging token used to retrieve further pages of an TypeGroups search by including it in the
 * TypeGroupSearchRequest. Clients shouldn't make any assumptions about the content of the token and it
 * should not be parsed/modified.
 */
export type TypeGroupSearchPageToken = string;

/**
 * Request to search for TypeGroups based on the given clause. TypeGroups are searched across
 * all ontologies the user has access to.
 */
export interface TypeGroupSearchRequest {
  clause: TypeGroupClause;
  excludedTypeGroupRids: Array<_api_TypeGroupRid>;
  fuzziness?: TypeGroupFuzziness | null | undefined;
  ontologyRids: Array<_api_OntologyRid>;
  pageSizeLimit: number;
  pageToken?: TypeGroupSearchPageToken | null | undefined;
  sort?: TypeGroupSort | null | undefined;
}
/**
 * Page response to TypeGroupSearchRequest containing TypeGroups matching the search query.
 */
export interface TypeGroupSearchResponse {
  nextPageToken?: TypeGroupSearchPageToken | null | undefined;
  totalResults: number;
  typeGroups: Array<TypeGroupSearchHit>;
}
/**
 * Sort order for TypeGroups.
 */
export interface TypeGroupSort {
  order: TypeGroupSortOrder;
  sortBy: TypeGroupSortBy;
}
/**
 * Specifies value to be used to sort TypeGroups.
 */
export type TypeGroupSortBy = "TYPE_GROUP_DISPLAY_NAME";

/**
 * Specifies sort order for TypeGroups
 */
export type TypeGroupSortOrder = "ASCENDING" | "DESCENDING";
