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
  FunctionReference as _api_FunctionReference,
  FunctionRid as _api_FunctionRid,
  GlobalBranchRid as _api_GlobalBranchRid,
  LinkTypeId as _api_LinkTypeId,
  LinkTypeIdentifier as _api_LinkTypeIdentifier,
  LinkTypeRid as _api_LinkTypeRid,
  NotepadReference as _api_NotepadReference,
  NotepadRid as _api_NotepadRid,
  ObjectTypeId as _api_ObjectTypeId,
  ObjectTypeRid as _api_ObjectTypeRid,
  PropertyTypeId as _api_PropertyTypeId,
  PropertyTypeRid as _api_PropertyTypeRid,
  QuiverDashboardReference as _api_QuiverDashboardReference,
  QuiverDashboardRid as _api_QuiverDashboardRid,
  ValueTypeReference as _api_ValueTypeReference,
  ValueTypeRid as _api_ValueTypeRid,
  WorkshopModuleRid as _api_WorkshopModuleRid,
  WorkshopReference as _api_WorkshopReference,
} from "../__components.js";

/**
 * Represents all properties available on the corresponding ObjectType.
 */
export interface AllPropertiesPropertySet {
}
/**
 * Batch endpoint for GetTaggedDependentsForOntologyEntityIdentifier. Loads all versions for each entity and does not page.
 */
export interface BatchGetTaggedDependentsForOntologyEntityIdentifierRequest {
  dependencyAndTags: Array<DependencyIdentifierAndTag>;
}
/**
 * Batch endpoint for GetTaggedDependentsForOntologyEntityIdentifier. Loads all versions for each entity and does not page.
 */
export interface BatchGetTaggedDependentsForOntologyEntityIdentifierResponse {
  taggedDependencyAndDependents: Array<TaggedDependencyAndDependent>;
}
/**
 * Represents a Dependency Identifier (without version) + Tag
 */
export interface DependencyIdentifierAndTag {
  ontologyEntityIdentifier: ProvenanceOntologyEntityIdentifier;
  tag: Tag;
}
export interface Dependent_versionedResource {
  type: "versionedResource";
  versionedResource: VersionedResource;
}
/**
 * The entity which depends on the given OntologyEntities.
 */
export type Dependent = Dependent_versionedResource;

/**
 * Request to get the OntologyEntities which have the requested Dependent.
 */
export interface GetDependenciesForTaggedDependentRequest {
  pageToken?: GetDependenciesPagingToken | null | undefined;
  resource: string;
  tag: Tag;
}
/**
 * Request to get the OntologyEntities which have the requested Dependent.
 */
export interface GetDependenciesForTaggedDependentRequestV2 {
  entityTypes: Array<ProvenanceOntologyEntityRidType>;
  includeEntitiesWithoutAccess: boolean;
  pageSize?: number | null | undefined;
  pageToken?: GetDependenciesV2PagingToken | null | undefined;
  resource: string;
  tag: Tag;
}
/**
 * Response type of GetDependenciesForTaggedDependentRequest. Contains a page of OntologyEntites that are
 * depended on by the requested resource at the tagged version..
 */
export interface GetDependenciesForTaggedDependentResponse {
  nextPageToken?: GetDependenciesPagingToken | null | undefined;
  ontologyEntityPageItems: Array<ProvenanceOntologyEntityRidOrReference>;
  version?: Version | null | undefined;
}
export interface GetDependenciesForTaggedDependentResponseV2_success {
  type: "success";
  success: GetDependenciesForTaggedDependentResponseV2Success;
}

export interface GetDependenciesForTaggedDependentResponseV2_tagNotFound {
  type: "tagNotFound";
  tagNotFound: GetDependenciesForTaggedDependentResponseV2TagNotFound;
}
export type GetDependenciesForTaggedDependentResponseV2 =
  | GetDependenciesForTaggedDependentResponseV2_success
  | GetDependenciesForTaggedDependentResponseV2_tagNotFound;

/**
 * Contains a page of OntologyEntities that are depended on by the requested resource at the tagged version.
 */
export interface GetDependenciesForTaggedDependentResponseV2Success {
  nextPageToken?: GetDependenciesV2PagingToken | null | undefined;
  ontologyEntityPageItems: Array<ProvenanceOntologyEntityRidOrReference>;
  totalEntitiesCount: number;
  version?: Version | null | undefined;
}
export interface GetDependenciesForTaggedDependentResponseV2TagNotFound {
}
/**
 * A paging token to be passed back to get the next page of results. Clients shouldn't make any assumptions
 * about the content of the paging token and it should not be parsed/modified.
 */
export type GetDependenciesPagingToken = string;

/**
 * A paging token to be passed back to get the next page of results. Clients shouldn't make any assumptions
 * about the content of the paging token and it should not be parsed/modified.
 */
export type GetDependenciesV2PagingToken = string;

/**
 * Request to obtain the stored offset of the AtlasEventLog for the FDS topic that is stored in the Internal Metadata Store
 */
export interface GetEventOffsetForFirstNonProxiedFdsEventRequest {
  dependentType: OmsOpsDependentType;
}
/**
 * Returns - the stored offset of the AtlasEventLog for the FDS topic that is stored in the Internal Metadata Store.
 *
 * Empty - if no value has been stored.
 */
export interface GetEventOffsetForFirstNonProxiedFdsEventResponse {
  latestOffset?: number | null | undefined;
}
export type GetTaggedDependentsForOntologyEntityIdentifierPagingToken = string;

/**
 * Request to get the tagged dependents on the given an OntologyEntity Identifier.
 */
export interface GetTaggedDependentsForOntologyEntityIdentifierRequest {
  ontologyEntityIdentifier: ProvenanceOntologyEntityIdentifier;
  pageToken?:
    | GetTaggedDependentsForOntologyEntityIdentifierPagingToken
    | null
    | undefined;
  tag: Tag;
}
/**
 * Contains a page of the Dependents of the requested OntologyEntity's Identifier.
 */
export interface GetTaggedDependentsForOntologyEntityIdentifierResponse {
  nextPageToken?:
    | GetTaggedDependentsForOntologyEntityIdentifierPagingToken
    | null
    | undefined;
  taggedDependencyAndDependents: Array<TaggedDependencyAndDependent>;
}
/**
 * Request to get the tagged dependents on the given OntologyEntity.
 */
export interface GetTaggedDependentsForOntologyEntityRequest {
  ontologyEntity: ProvenanceOntologyEntityRidOrReference;
  pageToken?: GetTaggedDependentsPagingToken | null | undefined;
  tag: Tag;
}
/**
 * Response type of GetTaggedDependenciesForOntologyEntityRequest. Contains a page of the Dependents of the
 * requested OntologyEntity.
 */
export interface GetTaggedDependentsForOntologyEntityResponse {
  nextPageToken?: GetTaggedDependentsPagingToken | null | undefined;
  taggedDependentPageItems: Array<Dependent>;
}
/**
 * A paging token to be passed back to get the next page of results. Clients shouldn't make any assumptions
 * about the content of the paging token and it should not be parsed/modified.
 */
export type GetTaggedDependentsPagingToken = string;

/**
 * An ObjectTypeId together with a set of properties referred to by id.
 */
export interface ObjectTypeIdWithPropertyTypeIds {
  objectTypeId: _api_ObjectTypeId;
  propertyTypeIds: PropertyTypeIdSet;
}
/**
 * An ObjectTypeRid together with a set of properties referred to by rid.
 */
export interface ObjectTypeRidWithPropertyTypeRids {
  objectTypeRid: _api_ObjectTypeRid;
  propertyTypeRids: PropertyTypeRidSet;
}
export interface ObjectTypeWithProperties_objectTypeIdWithPropertyTypeIds {
  type: "objectTypeIdWithPropertyTypeIds";
  objectTypeIdWithPropertyTypeIds: ObjectTypeIdWithPropertyTypeIds;
}

export interface ObjectTypeWithProperties_objectTypeRidWithPropertyTypeRids {
  type: "objectTypeRidWithPropertyTypeRids";
  objectTypeRidWithPropertyTypeRids: ObjectTypeRidWithPropertyTypeRids;
}
/**
 * Represents an ObjectType with a selected set of properties.
 */
export type ObjectTypeWithProperties =
  | ObjectTypeWithProperties_objectTypeIdWithPropertyTypeIds
  | ObjectTypeWithProperties_objectTypeRidWithPropertyTypeRids;

/**
 * Dependent Types of OMS-OPS
 */
export type OmsOpsDependentType =
  | "OBJECT_TYPE"
  | "FUNCTION_TYPE"
  | "SHARED_PROPERTY_TYPE"
  | "MODELING_OBJECTIVE"
  | "MONITOR"
  | "MACHINERY"
  | "OPUS"
  | "QUIVER"
  | "SLATE"
  | "WORKSHOP"
  | "THIRD_PARTY_APPLICATION";
export interface OntologyEntityId_propertyType {
  type: "propertyType";
  propertyType: PropertyTypeIdWithObjectTypeId;
}

export interface OntologyEntityId_objectType {
  type: "objectType";
  objectType: _api_ObjectTypeId;
}

export interface OntologyEntityId_linkType {
  type: "linkType";
  linkType: _api_LinkTypeId;
}
/**
 * The id representation of an entity.
 */
export type OntologyEntityId =
  | OntologyEntityId_propertyType
  | OntologyEntityId_objectType
  | OntologyEntityId_linkType;

export interface PropertyTypeIdSet_allProperties {
  type: "allProperties";
  allProperties: AllPropertiesPropertySet;
}

export interface PropertyTypeIdSet_specificProperties {
  type: "specificProperties";
  specificProperties: Array<_api_PropertyTypeId>;
}
/**
 * Set of properties to either represent all available properties on the object type or a specific subset.
 */
export type PropertyTypeIdSet =
  | PropertyTypeIdSet_allProperties
  | PropertyTypeIdSet_specificProperties;

/**
 * The id representation of a PropertyTypeId including its parent ObjectType ObjectTypeId.
 */
export interface PropertyTypeIdWithObjectTypeId {
  objectTypeId: _api_ObjectTypeId;
  propertyTypeId: _api_PropertyTypeId;
}
export interface PropertyTypeRidSet_allProperties {
  type: "allProperties";
  allProperties: AllPropertiesPropertySet;
}

export interface PropertyTypeRidSet_specificProperties {
  type: "specificProperties";
  specificProperties: Array<_api_PropertyTypeRid>;
}
/**
 * Set of properties to either represent all available properties on the object type or a specific subset.
 */
export type PropertyTypeRidSet =
  | PropertyTypeRidSet_allProperties
  | PropertyTypeRidSet_specificProperties;

/**
 * The PropertyTypeRid with its parent ObjectTypeRid.
 */
export interface PropertyTypeRidWithObjectTypeRid {
  objectType: _api_ObjectTypeRid;
  propertyType: _api_PropertyTypeRid;
}
/**
 * All entities that the given Dependent depends on.
 */
export interface ProvenanceDependentOntologyEntities {
  actionTypes: Array<_api_ActionTypeRid>;
  functions: Array<_api_FunctionReference>;
  linkTypes: Array<_api_LinkTypeIdentifier>;
  notepads: Array<_api_NotepadReference>;
  objectTypes: Array<ObjectTypeWithProperties>;
  quiverDashboards: Array<_api_QuiverDashboardReference>;
  valueTypes: Array<_api_ValueTypeReference>;
  workshops: Array<_api_WorkshopReference>;
}
export interface ProvenanceOntologyEntityIdentifier_propertyType {
  type: "propertyType";
  propertyType: PropertyTypeRidWithObjectTypeRid;
}

export interface ProvenanceOntologyEntityIdentifier_objectType {
  type: "objectType";
  objectType: _api_ObjectTypeRid;
}

export interface ProvenanceOntologyEntityIdentifier_linkType {
  type: "linkType";
  linkType: _api_LinkTypeRid;
}

export interface ProvenanceOntologyEntityIdentifier_actionType {
  type: "actionType";
  actionType: _api_ActionTypeRid;
}

export interface ProvenanceOntologyEntityIdentifier_valueType {
  type: "valueType";
  valueType: _api_ValueTypeRid;
}

export interface ProvenanceOntologyEntityIdentifier_function {
  type: "function";
  function: _api_FunctionRid;
}

export interface ProvenanceOntologyEntityIdentifier_workshop {
  type: "workshop";
  workshop: _api_WorkshopModuleRid;
}

export interface ProvenanceOntologyEntityIdentifier_notepad {
  type: "notepad";
  notepad: _api_NotepadRid;
}

export interface ProvenanceOntologyEntityIdentifier_quiverDashboard {
  type: "quiverDashboard";
  quiverDashboard: _api_QuiverDashboardRid;
}
/**
 * The resource identifier of an Ontology entity.
 */
export type ProvenanceOntologyEntityIdentifier =
  | ProvenanceOntologyEntityIdentifier_propertyType
  | ProvenanceOntologyEntityIdentifier_objectType
  | ProvenanceOntologyEntityIdentifier_linkType
  | ProvenanceOntologyEntityIdentifier_actionType
  | ProvenanceOntologyEntityIdentifier_valueType
  | ProvenanceOntologyEntityIdentifier_function
  | ProvenanceOntologyEntityIdentifier_workshop
  | ProvenanceOntologyEntityIdentifier_notepad
  | ProvenanceOntologyEntityIdentifier_quiverDashboard;

export interface ProvenanceOntologyEntityRidOrReference_propertyType {
  type: "propertyType";
  propertyType: PropertyTypeRidWithObjectTypeRid;
}

export interface ProvenanceOntologyEntityRidOrReference_objectType {
  type: "objectType";
  objectType: _api_ObjectTypeRid;
}

export interface ProvenanceOntologyEntityRidOrReference_linkType {
  type: "linkType";
  linkType: _api_LinkTypeRid;
}

export interface ProvenanceOntologyEntityRidOrReference_actionType {
  type: "actionType";
  actionType: _api_ActionTypeRid;
}

export interface ProvenanceOntologyEntityRidOrReference_versionedValueType {
  type: "versionedValueType";
  versionedValueType: _api_ValueTypeReference;
}

export interface ProvenanceOntologyEntityRidOrReference_versionedFunction {
  type: "versionedFunction";
  versionedFunction: _api_FunctionReference;
}

export interface ProvenanceOntologyEntityRidOrReference_workshop {
  type: "workshop";
  workshop: _api_WorkshopReference;
}

export interface ProvenanceOntologyEntityRidOrReference_notepad {
  type: "notepad";
  notepad: _api_NotepadReference;
}

export interface ProvenanceOntologyEntityRidOrReference_quiverDashboard {
  type: "quiverDashboard";
  quiverDashboard: _api_QuiverDashboardReference;
}
/**
 * The resource identifier of an Ontology entity.
 */
export type ProvenanceOntologyEntityRidOrReference =
  | ProvenanceOntologyEntityRidOrReference_propertyType
  | ProvenanceOntologyEntityRidOrReference_objectType
  | ProvenanceOntologyEntityRidOrReference_linkType
  | ProvenanceOntologyEntityRidOrReference_actionType
  | ProvenanceOntologyEntityRidOrReference_versionedValueType
  | ProvenanceOntologyEntityRidOrReference_versionedFunction
  | ProvenanceOntologyEntityRidOrReference_workshop
  | ProvenanceOntologyEntityRidOrReference_notepad
  | ProvenanceOntologyEntityRidOrReference_quiverDashboard;

/**
 * Type of Ontology entity which can be a Dependency of a Dependent.
 */
export type ProvenanceOntologyEntityRidType =
  | "PROPERTY_TYPE"
  | "OBJECT_TYPE"
  | "LINK_TYPE"
  | "ACTION_TYPE"
  | "VALUE_TYPE"
  | "FUNCTION"
  | "QUIVER"
  | "WORKSHOP"
  | "NOTEPAD";

/**
 * Request to register a dependency between the given Dependent and the given OntologyEntities.
 */
export interface RegisterDependencyRequest {
  dependent: Dependent;
  globalBranchRid?: _api_GlobalBranchRid | null | undefined;
  ontologyEntities: ProvenanceDependentOntologyEntities;
  shouldForwardToFds?: boolean | null | undefined;
  tags: Array<Tag>;
}
/**
 * Return type of RegisterDependencyRequest. Intentionally left empty for future extensibility.
 */
export interface RegisterDependencyResponse {
}
/**
 * A tag indicating a particular relevance of a Dependent. Each tag can only be assigned to one version.
 */
export type Tag = "LATEST_SAVED" | "LATEST_PUBLISHED";

/**
 * Request to assign tags to a dependent entity. This will move the tag from an existing tagged Dependent with
 * the same rid.
 */
export interface TagDependentRequest {
  dependent: Dependent;
  globalBranchRid?: _api_GlobalBranchRid | null | undefined;
  shouldForwardToFds?: boolean | null | undefined;
  tags: Array<Tag>;
}
/**
 * Return type for TagResourceRequest. Intentionally left empty for future extensibility.
 */
export interface TagDependentResponse {
}
/**
 * Represents a Dependency -> Dependent at a specific Tag
 */
export interface TaggedDependencyAndDependent {
  dependent: Dependent;
  ontologyEntity: ProvenanceOntologyEntityRidOrReference;
  tag: Tag;
}
/**
 * The version of a resource. Limited to 50 characters.
 */
export type Version = string;

/**
 * An identifier of a Compass entity with a version.
 */
export interface VersionedResource {
  rid: string;
  version: Version;
}
