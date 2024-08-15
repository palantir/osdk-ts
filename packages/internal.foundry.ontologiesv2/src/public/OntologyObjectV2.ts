/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  AggregateObjectsRequestV2,
  AggregateObjectsResponseV2,
  ArtifactRepositoryRid,
  AttachmentMetadataResponse,
  AttachmentRid,
  AttachmentV2,
  CountObjectsResponseV2,
  InterfaceType,
  InterfaceTypeApiName,
  LinkTypeApiName,
  ListInterfaceTypesResponse,
  ListLinkedObjectsResponseV2,
  ListObjectsResponseV2,
  ObjectTypeApiName,
  ObjectTypeFullMetadata,
  OntologyIdentifier,
  OntologyObjectV2,
  OrderBy,
  PageSize,
  PageToken,
  PreviewMode,
  PropertyApiName,
  PropertyValueEscapedString,
  SdkPackageName,
  SearchObjectsForInterfaceRequest,
  SearchObjectsRequestV2,
  SearchObjectsResponseV2,
  SelectedPropertyApiName,
  StreamTimeSeriesPointsRequest,
  TimeSeriesPoint,
} from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _listObjectsV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    $queryParams: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      select: Array<SelectedPropertyApiName>;
      orderBy?: OrderBy | undefined;
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
      excludeRid?: boolean | undefined;
    },
  ) => Promise<ListObjectsResponseV2>
> = [0, "/v2/ontologies/{0}/objects/{1}", 2];

/**
 * Lists the objects for the given Ontology and object type.
 *
 * Note that this endpoint does not guarantee consistency. Changes to the data could result in missing or
 * repeated objects in the response pages.
 *
 * For Object Storage V1 backed objects, this endpoint returns a maximum of 10,000 objects. After 10,000 objects have been returned and if more objects
 * are available, attempting to load another page will result in an `ObjectsExceededLimit` error being returned. There is no limit on Object Storage V2 backed objects.
 *
 * Each page may be smaller or larger than the requested page size. However, it
 * is guaranteed that if there are more results available, at least one result will be present
 * in the response.
 *
 * Note that null value properties will not be returned.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}
 */
export function listObjectsV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,

    $queryParams: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      select: Array<SelectedPropertyApiName>;
      orderBy?: OrderBy | undefined;
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
      excludeRid?: boolean | undefined;
    },
  ]
): Promise<ListObjectsResponseV2> {
  return $foundryPlatformFetch($ctx, _listObjectsV2, ...args);
}

const _getObjectV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    $queryParams: {
      select: Array<SelectedPropertyApiName>;
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
      excludeRid?: boolean | undefined;
    },
  ) => Promise<OntologyObjectV2>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}", 2];

/**
 * Gets a specific object with the given primary key.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}
 */
export function getObjectV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,

    $queryParams: {
      select: Array<SelectedPropertyApiName>;
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
      excludeRid?: boolean | undefined;
    },
  ]
): Promise<OntologyObjectV2> {
  return $foundryPlatformFetch($ctx, _getObjectV2, ...args);
}

const _countObjects: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<CountObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/objects/{1}/count", 2];

/**
 * Returns a count of the objects of the given object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/count
 */
export function countObjects(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,

    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<CountObjectsResponseV2> {
  return $foundryPlatformFetch($ctx, _countObjects, ...args);
}

const _searchObjectsV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    $body: SearchObjectsRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<SearchObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/objects/{1}/search", 3];

/**
 * Search for objects in the specified ontology and object type. The request body is used
 * to filter objects based on the specified query. The supported queries are:
 *
 * | Query type                              | Description                                                                                                       | Supported Types                 |
 * |-----------------------------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------|
 * | lt                                      | The provided property is less than the provided value.                                                            | number, string, date, timestamp |
 * | gt                                      | The provided property is greater than the provided value.                                                         | number, string, date, timestamp |
 * | lte                                     | The provided property is less than or equal to the provided value.                                                | number, string, date, timestamp |
 * | gte                                     | The provided property is greater than or equal to the provided value.                                             | number, string, date, timestamp |
 * | eq                                      | The provided property is exactly equal to the provided value.                                                     | number, string, date, timestamp |
 * | isNull                                  | The provided property is (or is not) null.                                                                        | all                             |
 * | contains                                | The provided property contains the provided value.                                                                | array                           |
 * | not                                     | The sub-query does not match.                                                                                     | N/A (applied on a query)        |
 * | and                                     | All the sub-queries match.                                                                                        | N/A (applied on queries)        |
 * | or                                      | At least one of the sub-queries match.                                                                            | N/A (applied on queries)        |
 * | startsWith                              | The provided property starts with the provided value.                                                             | string                          |
 * | containsAllTermsInOrderPrefixLastTerm   | The provided property contains all the terms provided in order. The last term can be a partial prefix match.      | string                          |
 * | containsAllTermsInOrder                 | The provided property contains the provided value as a substring.                                                 | string                          |
 * | containsAnyTerm                         | The provided property contains at least one of the terms separated by whitespace.                                 | string                          |
 * | containsAllTerms                        | The provided property contains all the terms separated by whitespace.                                             | string                          |
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/search
 */
export function searchObjectsV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    $body: SearchObjectsRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<SearchObjectsResponseV2> {
  return $foundryPlatformFetch($ctx, _searchObjectsV2, ...args);
}

const _aggregateObjectsV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    $body: AggregateObjectsRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<AggregateObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/objects/{1}/aggregate", 3];

/**
 * Perform functions on object fields in the specified ontology and object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/aggregate
 */
export function aggregateObjectsV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    $body: AggregateObjectsRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<AggregateObjectsResponseV2> {
  return $foundryPlatformFetch($ctx, _aggregateObjectsV2, ...args);
}

const _listInterfaceTypes: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ) => Promise<ListInterfaceTypesResponse>
> = [0, "/v2/ontologies/{0}/interfaceTypes", 2];

/**
 * :::callout{theme=warning title=Warning}
 * This endpoint is in preview and may be modified or removed at any time.
 * To use this endpoint, add `preview=true` to the request query parameters.
 * :::
 *
 * Lists the interface types for the given Ontology.
 *
 * Each page may be smaller than the requested page size. However, it is guaranteed that if there are more
 * results available, at least one result will be present in the response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/interfaceTypes
 */
export function listInterfaceTypes(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,

    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<ListInterfaceTypesResponse> {
  return $foundryPlatformFetch($ctx, _listInterfaceTypes, ...args);
}

const _getInterfaceType: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    interfaceType: InterfaceTypeApiName,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<InterfaceType>
> = [0, "/v2/ontologies/{0}/interfaceTypes/{1}", 2];

/**
 * :::callout{theme=warning title=Warning}
 * This endpoint is in preview and may be modified or removed at any time.
 * To use this endpoint, add `preview=true` to the request query parameters.
 * :::
 *
 * Gets a specific object type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/interfaceTypes/{interfaceType}
 */
export function getInterfaceType(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    interfaceType: InterfaceTypeApiName,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<InterfaceType> {
  return $foundryPlatformFetch($ctx, _getInterfaceType, ...args);
}

const _searchObjectsForInterface: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    interfaceType: InterfaceTypeApiName,
    $body: SearchObjectsForInterfaceRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<SearchObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/interfaces/{1}/search", 3];

/**
 * :::callout{theme=warning title=Warning}
 * This endpoint is in preview and may be modified or removed at any time.
 * To use this endpoint, add `preview=true` to the request query parameters.
 * :::
 *
 * Search for objects in the specified ontology and interface type. Any properties specified in the "where" or
 * "orderBy" parameters must be shared property type API names defined on the interface. The following search
 * queries are supported:
 *
 * | Query type                              | Description                                                                                                       | Supported Types                 |
 * |-----------------------------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------|
 * | lt                                      | The provided property is less than the provided value.                                                            | number, string, date, timestamp |
 * | gt                                      | The provided property is greater than the provided value.                                                         | number, string, date, timestamp |
 * | lte                                     | The provided property is less than or equal to the provided value.                                                | number, string, date, timestamp |
 * | gte                                     | The provided property is greater than or equal to the provided value.                                             | number, string, date, timestamp |
 * | eq                                      | The provided property is exactly equal to the provided value.                                                     | number, string, date, timestamp |
 * | isNull                                  | The provided property is (or is not) null.                                                                        | all                             |
 * | contains                                | The provided property contains the provided value.                                                                | array                           |
 * | not                                     | The sub-query does not match.                                                                                     | N/A (applied on a query)        |
 * | and                                     | All the sub-queries match.                                                                                        | N/A (applied on queries)        |
 * | or                                      | At least one of the sub-queries match.                                                                            | N/A (applied on queries)        |
 * | startsWith                              | The provided property starts with the provided value.                                                             | string                          |
 * | containsAllTermsInOrderPrefixLastTerm   | The provided property contains all the terms provided in order. The last term can be a partial prefix match.      | string                          |
 * | containsAllTermsInOrder                 | The provided property contains the provided value as a substring.                                                 | string                          |
 * | containsAnyTerm                         | The provided property contains at least one of the terms separated by whitespace.                                 | string                          |
 * | containsAllTerms                        | The provided property contains all the terms separated by whitespace.                                             | string                          |
 *
 * Attempting to use an unsupported query will result in a validation error. Third-party applications using this
 * endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/interfaces/{interfaceType}/search
 */
export function searchObjectsForInterface(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    interfaceType: InterfaceTypeApiName,
    $body: SearchObjectsForInterfaceRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<SearchObjectsResponseV2> {
  return $foundryPlatformFetch($ctx, _searchObjectsForInterface, ...args);
}

const _aggregateObjectsForInterface: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    interfaceType: InterfaceTypeApiName,
    $body: AggregateObjectsRequestV2,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<AggregateObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/interfaces/{1}/aggregate", 3];

/**
 * :::callout{theme=warning title=Warning}
 * This endpoint is in preview and may be modified or removed at any time.
 * To use this endpoint, add `preview=true` to the request query parameters.
 * :::
 *
 * Perform functions on object fields in the specified ontology and of the specified interface type. Any
 * properties specified in the query must be shared property type API names defined on the interface.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/interfaces/{interfaceType}/aggregate
 */
export function aggregateObjectsForInterface(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    interfaceType: InterfaceTypeApiName,
    $body: AggregateObjectsRequestV2,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<AggregateObjectsResponseV2> {
  return $foundryPlatformFetch($ctx, _aggregateObjectsForInterface, ...args);
}

const _listLinkedObjectsV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    linkType: LinkTypeApiName,
    $queryParams: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      select: Array<SelectedPropertyApiName>;
      orderBy?: OrderBy | undefined;
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
      excludeRid?: boolean | undefined;
    },
  ) => Promise<ListLinkedObjectsResponseV2>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/links/{3}", 2];

/**
 * Lists the linked objects for a specific object and the given link type.
 *
 * Note that this endpoint does not guarantee consistency. Changes to the data could result in missing or
 * repeated objects in the response pages.
 *
 * For Object Storage V1 backed objects, this endpoint returns a maximum of 10,000 objects. After 10,000 objects have been returned and if more objects
 * are available, attempting to load another page will result in an `ObjectsExceededLimit` error being returned. There is no limit on Object Storage V2 backed objects.
 *
 * Each page may be smaller or larger than the requested page size. However, it
 * is guaranteed that if there are more results available, at least one result will be present
 * in the response.
 *
 * Note that null value properties will not be returned.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/links/{linkType}
 */
export function listLinkedObjectsV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    linkType: LinkTypeApiName,

    $queryParams: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      select: Array<SelectedPropertyApiName>;
      orderBy?: OrderBy | undefined;
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
      excludeRid?: boolean | undefined;
    },
  ]
): Promise<ListLinkedObjectsResponseV2> {
  return $foundryPlatformFetch($ctx, _listLinkedObjectsV2, ...args);
}

const _getLinkedObjectV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    linkType: LinkTypeApiName,
    linkedObjectPrimaryKey: PropertyValueEscapedString,
    $queryParams: {
      select: Array<SelectedPropertyApiName>;
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
      excludeRid?: boolean | undefined;
    },
  ) => Promise<OntologyObjectV2>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/links/{3}/{4}", 2];

/**
 * Get a specific linked object that originates from another object.
 *
 * If there is no link between the two objects, `LinkedObjectNotFound` is thrown.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/links/{linkType}/{linkedObjectPrimaryKey}
 */
export function getLinkedObjectV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    linkType: LinkTypeApiName,
    linkedObjectPrimaryKey: PropertyValueEscapedString,

    $queryParams: {
      select: Array<SelectedPropertyApiName>;
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
      excludeRid?: boolean | undefined;
    },
  ]
): Promise<OntologyObjectV2> {
  return $foundryPlatformFetch($ctx, _getLinkedObjectV2, ...args);
}

const _listPropertyAttachments: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<AttachmentMetadataResponse>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}", 2];

/**
 * Get the metadata of attachments parented to the given object.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}
 */
export function listPropertyAttachments(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,

    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<AttachmentMetadataResponse> {
  return $foundryPlatformFetch($ctx, _listPropertyAttachments, ...args);
}

const _getAttachmentPropertyByRidV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    attachmentRid: AttachmentRid,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<AttachmentV2>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}/{4}", 2];

/**
 * Get the metadata of a particular attachment in an attachment list.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}/{attachmentRid}
 */
export function getAttachmentPropertyByRidV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    attachmentRid: AttachmentRid,

    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<AttachmentV2> {
  return $foundryPlatformFetch($ctx, _getAttachmentPropertyByRidV2, ...args);
}

const _getAttachmentPropertyContentV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<Blob>
> = [
  0,
  "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}/content",
  2,
  ,
  "*/*",
];

/**
 * Get the content of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}/content
 */
export function getAttachmentPropertyContentV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,

    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<Blob> {
  return $foundryPlatformFetch($ctx, _getAttachmentPropertyContentV2, ...args);
}

const _getAttachmentPropertyContentByRidV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    attachmentRid: AttachmentRid,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<Blob>
> = [
  0,
  "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}/{4}/content",
  2,
  ,
  "*/*",
];

/**
 * Get the content of an attachment by its RID.
 *
 * The RID must exist in the attachment array of the property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}/{attachmentRid}/content
 */
export function getAttachmentPropertyContentByRidV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    attachmentRid: AttachmentRid,

    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<Blob> {
  return $foundryPlatformFetch(
    $ctx,
    _getAttachmentPropertyContentByRidV2,
    ...args,
  );
}

const _getFirstPoint: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<TimeSeriesPoint | undefined>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/timeseries/{3}/firstPoint", 2];

/**
 * Get the first point of a time series property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/timeseries/{property}/firstPoint
 */
export function getFirstPoint(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,

    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<TimeSeriesPoint | undefined> {
  return $foundryPlatformFetch($ctx, _getFirstPoint, ...args);
}

const _getLastPoint: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<TimeSeriesPoint | undefined>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/timeseries/{3}/lastPoint", 2];

/**
 * Get the last point of a time series property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/timeseries/{property}/lastPoint
 */
export function getLastPoint(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,

    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<TimeSeriesPoint | undefined> {
  return $foundryPlatformFetch($ctx, _getLastPoint, ...args);
}

const _streamPoints: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    $body: StreamTimeSeriesPointsRequest,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<Blob>
> = [
  1,
  "/v2/ontologies/{0}/objects/{1}/{2}/timeseries/{3}/streamPoints",
  3,
  ,
  "*/*",
];

/**
 * Stream all of the points of a time series property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/timeseries/{property}/streamPoints
 */
export function streamPoints(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    $body: StreamTimeSeriesPointsRequest,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<Blob> {
  return $foundryPlatformFetch($ctx, _streamPoints, ...args);
}

const _getObjectTypeFullMetadata: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<ObjectTypeFullMetadata>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}/fullMetadata", 2];

/**
 * Gets the full metadata for a specific object type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/fullMetadata
 */
export function getObjectTypeFullMetadata(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<ObjectTypeFullMetadata> {
  return $foundryPlatformFetch($ctx, _getObjectTypeFullMetadata, ...args);
}
