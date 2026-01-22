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
  LinkTypeIdentifier as _api_LinkTypeIdentifier,
  LinkTypeRid as _api_LinkTypeRid,
  ObjectTypeFieldApiName as _api_ObjectTypeFieldApiName,
  ObjectTypeIdentifier as _api_ObjectTypeIdentifier,
  ObjectTypeRid as _api_ObjectTypeRid,
  OrganizationRid as _api_OrganizationRid,
  PropertyTypeId as _api_PropertyTypeId,
  PropertyTypeRid as _api_PropertyTypeRid,
  UserId as _api_UserId,
} from "../__components.js";
export interface ActionTypeUsage {
  authenticationFailures: number;
  functionFailures: number;
  invalidParameterFailures: number;
  scaleLimitFailures: number;
  sideEffectFailures: number;
  successes: number;
  unclassifiedFailures: number;
}
/**
 * Reference to the backend service used to query the reported entities.
 */
export type Backend = "PHONOGRAPH" | "OBJECT_SET_SERVICE" | "ACTIONS";
export interface DeprecationOntologyEntityIdentifier_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: _api_ObjectTypeRid;
}

export interface DeprecationOntologyEntityIdentifier_linkTypeRid {
  type: "linkTypeRid";
  linkTypeRid: _api_LinkTypeRid;
}
/**
 * A union to represent identifiers for different types of Ontology entities.
 */
export type DeprecationOntologyEntityIdentifier =
  | DeprecationOntologyEntityIdentifier_objectTypeRid
  | DeprecationOntologyEntityIdentifier_linkTypeRid;

/**
 * Number of interactions with the entity during the requested time window, grouped by endpoint status.
 * If any of the EndpointStatus is missing it means that there were no interations of that type or it was
 * filtered out based on the status types specified in the request.
 */
export type DeprecationUsage = Record<EndpointStatus, number>;

/**
 * Entity deprecation usage by OriginResourceChain.
 */
export interface DeprecationUsageByOriginResourceChain {
  originResourceChain: OriginResourceChain;
  usage: DeprecationUsage;
}
/**
 * This type is used to indicate which endpoint was called and the status of that endpoint.
 */
export interface Endpoint {
  endpointPath: string;
  endpointStatus: EndpointStatus;
}
/**
 * Indicates the deprecation status of the called endpoint.
 */
export type EndpointStatus = "ACTIVE" | "DEPRECATED";
export interface GetActionTypeUsageRequest {
  actionTypeRid: _api_ActionTypeRid;
  endDay?: string | null | undefined;
  owningRid?: OwningRid | null | undefined;
  startDay?: string | null | undefined;
}
export interface GetActionTypeUsageResponse {
  actionTypeUsage: Record<string, ActionTypeUsage>;
}
/**
 * Request to get deprecation usage aggregations. Optionally over a date range specified by startDay and endDay.
 * Can be further filtered down by providing sets of UserAgents, OriginResources, Backends and EndpointStatuses.
 */
export interface GetDeprecationUsageRequest {
  backends: Array<Backend>;
  endDay?: string | null | undefined;
  endpointStatus: Array<EndpointStatus>;
  ontologyEntity: DeprecationOntologyEntityIdentifier;
  originResourceChains: Array<OriginResourceChain>;
  startDay?: string | null | undefined;
  userAgents: Array<UserAgent>;
}
/**
 * Response to GetDeprecatedUsageRequest. Contains the aggregated results bucketed by day, UserAgent, Backend
 * and OriginResourceChain.
 */
export interface GetDeprecationUsageResponse {
  usageByBackend: Record<Backend, DeprecationUsage>;
  usageByDay: Record<string, DeprecationUsage>;
  usageByEndpointStatus: DeprecationUsage;
  usageByOriginResourceChain: Array<DeprecationUsageByOriginResourceChain>;
  usageByUserAgent: Record<UserAgent, DeprecationUsage>;
}
/**
 * Request to get usage aggregations. Optionally over a date range specified by startDay and endDay.
 * Can be further filtered down by providing sets of UserIds and UserAgents.
 */
export interface GetUsageRequest {
  endDay?: string | null | undefined;
  ontologyEntity: OntologyEntityIdentifier;
  startDay?: string | null | undefined;
  usageTypes: Array<UsageType>;
  userAgents: Array<UserAgent>;
  userIds: Array<_api_UserId>;
}
/**
 * Request to get usage aggregations. Optionally over a date range specified by startDay and endDay.
 * Can be further filtered down by providing sets of UserIds, UserAgents and UsageTypes.
 */
export interface GetUsageRequestV2 {
  endDay?: string | null | undefined;
  ontologyEntityIdentifiers: OntologyEntityIdentifiers;
  orgRid?: _api_OrganizationRid | null | undefined;
  startDay?: string | null | undefined;
  usageTypes: Array<UsageType>;
  userAgents: Array<UserAgent>;
  userIds: Array<_api_UserId>;
}
/**
 * Reponse to GetUsageRequest. Contains the aggregated results bucketed by day, UserId and UserAgent.
 */
export interface GetUsageResponse {
  latestUsageEventIndexed?: string | null | undefined;
  topUsageByProperty: Record<_api_PropertyTypeRid, UsagePerProperty>;
  topUsageByUser: Record<_api_UserId, UsagePerUser>;
  topUsageByUserAgent: Record<UserAgent, UsagePerUserAgent>;
  usageOverall: UsageOverall;
  usagePerDay: Record<string, UsagePerDay>;
}
/**
 * Response to GetUsageRequestV2. Contains the aggregated results bucketed by ontology entity.
 */
export interface GetUsageResponseV2 {
  latestUsageEventIndexed?: string | null | undefined;
  topUsageByObjectType: Record<_api_ObjectTypeRid, UsagePerObjectType>;
  usageOverall: UsageOverall;
}
/**
 * Request to load Ontology Usage settings for an organization. Intentionally left empty.
 */
export interface GetUsageSettingsByOrganizationRequest {
}
/**
 * Response to GetUsageSettingByOrganizationRequest.
 */
export interface GetUsageSettingsByOrganizationResponse {
  enabled: boolean;
}
/**
 * Request to load Ontology Usage settings for a user based on their organization membership.
 * Intentionally left empty.
 */
export interface GetUsageSettingsByUserRequest {
}
/**
 * Response to GetUsageSettingByOrganizationRequest.
 */
export interface GetUsageSettingsByUserResponse {
  enabled: boolean;
}
/**
 * An ObjectTypeIdentifier with its PropertyTypeIdentifier(s) to report usage for.
 */
export interface ObjectTypeAndPropertyTypeIdentifiers {
  objectTypeIdentifier: _api_ObjectTypeIdentifier;
  propertyTypeIdentifiers: Array<PropertyTypeIdentifier>;
}
export interface ObjectTypeWithProperties {
  objectTypeRid: _api_ObjectTypeRid;
  propertyTypeRids: Array<_api_PropertyTypeRid>;
}
export interface OntologyEntityIdentifier_objectTypeWithProperties {
  type: "objectTypeWithProperties";
  objectTypeWithProperties: ObjectTypeWithProperties;
}

export interface OntologyEntityIdentifier_linkType {
  type: "linkType";
  linkType: _api_LinkTypeRid;
}
/**
 * A union to represent identifiers for different types of Ontology entities.
 */
export type OntologyEntityIdentifier =
  | OntologyEntityIdentifier_objectTypeWithProperties
  | OntologyEntityIdentifier_linkType;

export interface OntologyEntityIdentifiers_objectTypeRids {
  type: "objectTypeRids";
  objectTypeRids: Array<_api_ObjectTypeRid>;
}
/**
 * A union to represent identifiers for different types of Ontology entities.
 */
export type OntologyEntityIdentifiers =
  OntologyEntityIdentifiers_objectTypeRids;

/**
 * References to the different entities for which usage is reported.
 */
export interface OntologyEntityReferences {
  linkTypeIdentifiers: Array<_api_LinkTypeIdentifier>;
  objectTypeAndPropertyTypeIdentifiers: Array<
    ObjectTypeAndPropertyTypeIdentifiers
  >;
  objectTypesWithAllProperties: Array<_api_ObjectTypeIdentifier>;
}
export interface OriginResource_resourceIdentifier {
  type: "resourceIdentifier";
  resourceIdentifier: string;
}
/**
 * Identifier of a resource. Can be an identifier of a job, transform, workshop app, workshop widget,
 * Slate document, etc.
 */
export type OriginResource = OriginResource_resourceIdentifier;

export interface OriginResourceChain_originResourceHierarchy {
  type: "originResourceHierarchy";
  originResourceHierarchy: Array<OriginResource>;
}
/**
 * Fully identifies an origin of usage. Can be used to represent a parent-child relationship between
 * different resources.
 */
export type OriginResourceChain = OriginResourceChain_originResourceHierarchy;

/**
 * The owning rid that indicates where the action type usage was from.
 */
export type OwningRid = string;
export interface PropertyTypeIdentifier_propertyTypeId {
  type: "propertyTypeId";
  propertyTypeId: _api_PropertyTypeId;
}

export interface PropertyTypeIdentifier_propertyTypeApiName {
  type: "propertyTypeApiName";
  propertyTypeApiName: _api_ObjectTypeFieldApiName;
}

export interface PropertyTypeIdentifier_propertyTypeRid {
  type: "propertyTypeRid";
  propertyTypeRid: _api_PropertyTypeRid;
}
/**
 * Union type to represent the different identifiers for PropertyTypes(s).
 */
export type PropertyTypeIdentifier =
  | PropertyTypeIdentifier_propertyTypeId
  | PropertyTypeIdentifier_propertyTypeApiName
  | PropertyTypeIdentifier_propertyTypeRid;

/**
 * Request to report usage of ontology entities
 */
export interface ReportUsageMetadataRequest {
  backend: Backend;
  endpoint?: Endpoint | null | undefined;
  ontologyEntityReferences: OntologyEntityReferences;
  originResourceChain?: OriginResourceChain | null | undefined;
  usageTypes: Array<UsageType>;
  userAgent?: UserAgent | null | undefined;
}
/**
 * Return type for a ReportUsageMetadataRequest. Intentionally left empty to allow for future extensibility.
 */
export interface ReportUsageMetadataResponse {
}
/**
 * Request to configure Ontology Usage settings for an organization.
 */
export interface SetUsageSettingsByOrganizationRequest {
  enabled: boolean;
}
/**
 * Response to SetUsageSettingsByOrganizationRequest. Intentionally left empty.
 */
export interface SetUsageSettingsByOrganizationResponse {
}
export interface UsageOverall {
  uniqueUsersCount: number;
}
/**
 * Entity usage throughout a time bucket.
 */
export interface UsagePerDay {
  uniqueUsersCount: number;
  usageByType: Record<UsageType, number>;
}
/**
 * Usage by a specific ObjectType.
 */
export interface UsagePerObjectType {
  uniqueUsersCount: number;
  usageByType: Record<UsageType, number>;
}
/**
 * Entity usage by a specific PropertyType.
 */
export interface UsagePerProperty {
  uniqueUsersCount: number;
  usageByType: Record<UsageType, number>;
}
/**
 * Entity usage by a specific UserId.
 */
export interface UsagePerUser {
  usageByType: Record<UsageType, number>;
}
/**
 * Entity usage by a specific UserAgent.
 */
export interface UsagePerUserAgent {
  uniqueUsersCount: number;
  usageByType: Record<UsageType, number>;
}
/**
 * Type to indicate the nature of usage being reported.
 */
export type UsageType = "READ" | "WRITE" | "METADATA" | "REGISTRATION";

/**
 * The user-agent from the user that initiates the request for which usage is reported. This will be used to
 * indicate where usage is originally coming from.
 */
export type UserAgent = string;
