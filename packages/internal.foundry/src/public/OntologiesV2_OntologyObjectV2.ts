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
  ClientContext as $ClientContext,
  OmniMethod as $OmniMethod,
} from "@osdk/shared.net";
import { omniFetch as $omniFetch } from "@osdk/shared.net";
import type * as $C from "../generated/components.js";

const _listObjectsV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    $queryParams: {
      pageSize?: $C.PageSize;
      pageToken?: $C.PageToken;
      select: Array<$C.SelectedPropertyApiName>;
      orderBy?: $C.OrderBy;
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
      excludeRid?: boolean;
    },
  ) => Promise<$C.ListObjectsResponseV2>
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
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}
 */
export function listObjectsV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,

    $queryParams: {
      pageSize?: $C.PageSize;
      pageToken?: $C.PageToken;
      select: Array<$C.SelectedPropertyApiName>;
      orderBy?: $C.OrderBy;
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
      excludeRid?: boolean;
    },
  ]
): Promise<$C.ListObjectsResponseV2> {
  return $omniFetch($ctx, _listObjectsV2, ...args);
}

const _getObjectV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    $queryParams: {
      select: Array<$C.SelectedPropertyApiName>;
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
      excludeRid?: boolean;
    },
  ) => Promise<$C.OntologyObjectV2>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}", 2];

/**
 * Gets a specific object with the given primary key.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}
 */
export function getObjectV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,

    $queryParams: {
      select: Array<$C.SelectedPropertyApiName>;
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
      excludeRid?: boolean;
    },
  ]
): Promise<$C.OntologyObjectV2> {
  return $omniFetch($ctx, _getObjectV2, ...args);
}

const _countObjects: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<$C.CountObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/objects/{1}/count", 2];

/**
 * Returns a count of the objects of the given object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/count
 */
export function countObjects(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,

    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<$C.CountObjectsResponseV2> {
  return $omniFetch($ctx, _countObjects, ...args);
}

const _searchObjectsV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    $body: $C.SearchObjectsRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<$C.SearchObjectsResponseV2>
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
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/search
 */
export function searchObjectsV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    $body: $C.SearchObjectsRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<$C.SearchObjectsResponseV2> {
  return $omniFetch($ctx, _searchObjectsV2, ...args);
}

const _aggregateObjectsV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    $body: $C.AggregateObjectsRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<$C.AggregateObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/objects/{1}/aggregate", 3];

/**
 * Perform functions on object fields in the specified ontology and object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/aggregate
 */
export function aggregateObjectsV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    $body: $C.AggregateObjectsRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<$C.AggregateObjectsResponseV2> {
  return $omniFetch($ctx, _aggregateObjectsV2, ...args);
}

const _listInterfaceTypes: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    $queryParams?: {
      pageSize?: $C.PageSize;
      pageToken?: $C.PageToken;
      preview?: $C.PreviewMode;
    },
  ) => Promise<$C.ListInterfaceTypesResponse>
> = [0, "/v2/ontologies/{0}/interfaceTypes", 2];

/**
 * :::callout{theme=warning title=Warning}
 *   This endpoint is in preview and may be modified or removed at any time.
 *   To use this endpoint, add `preview=true` to the request query parameters.
 * :::
 *
 * Lists the interface types for the given Ontology.
 *
 * Each page may be smaller than the requested page size. However, it is guaranteed that if there are more
 * results available, at least one result will be present in the response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/interfaceTypes
 */
export function listInterfaceTypes(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,

    $queryParams?: {
      pageSize?: $C.PageSize;
      pageToken?: $C.PageToken;
      preview?: $C.PreviewMode;
    },
  ]
): Promise<$C.ListInterfaceTypesResponse> {
  return $omniFetch($ctx, _listInterfaceTypes, ...args);
}

const _getInterfaceType: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    interfaceType: $C.InterfaceTypeApiName,
    $queryParams?: { preview?: $C.PreviewMode },
  ) => Promise<$C.InterfaceType>
> = [0, "/v2/ontologies/{0}/interfaceTypes/{1}", 2];

/**
 * :::callout{theme=warning title=Warning}
 *   This endpoint is in preview and may be modified or removed at any time.
 *   To use this endpoint, add `preview=true` to the request query parameters.
 * :::
 *
 * Gets a specific object type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/interfaceTypes/{interfaceType}
 */
export function getInterfaceType(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    interfaceType: $C.InterfaceTypeApiName,

    $queryParams?: { preview?: $C.PreviewMode },
  ]
): Promise<$C.InterfaceType> {
  return $omniFetch($ctx, _getInterfaceType, ...args);
}

const _searchObjectsForInterface: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    interfaceType: $C.InterfaceTypeApiName,
    $body: $C.SearchObjectsForInterfaceRequest,
    $queryParams?: { preview?: $C.PreviewMode },
  ) => Promise<$C.SearchObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/interfaces/{1}/search", 3];

/**
 * :::callout{theme=warning title=Warning}
 *   This endpoint is in preview and may be modified or removed at any time.
 *   To use this endpoint, add `preview=true` to the request query parameters.
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
 * endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/interfaces/{interfaceType}/search
 */
export function searchObjectsForInterface(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    interfaceType: $C.InterfaceTypeApiName,
    $body: $C.SearchObjectsForInterfaceRequest,
    $queryParams?: { preview?: $C.PreviewMode },
  ]
): Promise<$C.SearchObjectsResponseV2> {
  return $omniFetch($ctx, _searchObjectsForInterface, ...args);
}

const _aggregateObjectsForInterface: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    interfaceType: $C.InterfaceTypeApiName,
    $body: $C.AggregateObjectsRequestV2,
    $queryParams?: { preview?: $C.PreviewMode },
  ) => Promise<$C.AggregateObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/interfaces/{1}/aggregate", 3];

/**
 * :::callout{theme=warning title=Warning}
 *   This endpoint is in preview and may be modified or removed at any time.
 *   To use this endpoint, add `preview=true` to the request query parameters.
 * :::
 *
 * Perform functions on object fields in the specified ontology and of the specified interface type. Any
 * properties specified in the query must be shared property type API names defined on the interface.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/interfaces/{interfaceType}/aggregate
 */
export function aggregateObjectsForInterface(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    interfaceType: $C.InterfaceTypeApiName,
    $body: $C.AggregateObjectsRequestV2,
    $queryParams?: { preview?: $C.PreviewMode },
  ]
): Promise<$C.AggregateObjectsResponseV2> {
  return $omniFetch($ctx, _aggregateObjectsForInterface, ...args);
}

const _listLinkedObjectsV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    linkType: $C.LinkTypeApiName,
    $queryParams: {
      pageSize?: $C.PageSize;
      pageToken?: $C.PageToken;
      select: Array<$C.SelectedPropertyApiName>;
      orderBy?: $C.OrderBy;
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
      excludeRid?: boolean;
    },
  ) => Promise<$C.ListLinkedObjectsResponseV2>
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
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/links/{linkType}
 */
export function listLinkedObjectsV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    linkType: $C.LinkTypeApiName,

    $queryParams: {
      pageSize?: $C.PageSize;
      pageToken?: $C.PageToken;
      select: Array<$C.SelectedPropertyApiName>;
      orderBy?: $C.OrderBy;
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
      excludeRid?: boolean;
    },
  ]
): Promise<$C.ListLinkedObjectsResponseV2> {
  return $omniFetch($ctx, _listLinkedObjectsV2, ...args);
}

const _getLinkedObjectV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    linkType: $C.LinkTypeApiName,
    linkedObjectPrimaryKey: $C.PropertyValueEscapedString,
    $queryParams: {
      select: Array<$C.SelectedPropertyApiName>;
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
      excludeRid?: boolean;
    },
  ) => Promise<$C.OntologyObjectV2>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/links/{3}/{4}", 2];

/**
 * Get a specific linked object that originates from another object.
 *
 * If there is no link between the two objects, `LinkedObjectNotFound` is thrown.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/links/{linkType}/{linkedObjectPrimaryKey}
 */
export function getLinkedObjectV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    linkType: $C.LinkTypeApiName,
    linkedObjectPrimaryKey: $C.PropertyValueEscapedString,

    $queryParams: {
      select: Array<$C.SelectedPropertyApiName>;
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
      excludeRid?: boolean;
    },
  ]
): Promise<$C.OntologyObjectV2> {
  return $omniFetch($ctx, _getLinkedObjectV2, ...args);
}

const _getAttachmentsV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<$C.AttachmentMetadataResponse>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}", 2];

/**
 * Get the metadata of attachments parented to the given object.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}
 */
export function getAttachmentsV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,

    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<$C.AttachmentMetadataResponse> {
  return $omniFetch($ctx, _getAttachmentsV2, ...args);
}

const _getAttachmentByRidV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,
    attachmentRid: $C.AttachmentRid,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<$C.AttachmentV2>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}/{4}", 2];

/**
 * Get the metadata of a particular attachment in an attachment list.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}/{attachmentRid}
 */
export function getAttachmentByRidV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,
    attachmentRid: $C.AttachmentRid,

    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<$C.AttachmentV2> {
  return $omniFetch($ctx, _getAttachmentByRidV2, ...args);
}

const _getAttachmentContentV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<unknown>
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
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}/content
 */
export function getAttachmentContentV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,

    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<unknown> {
  return $omniFetch($ctx, _getAttachmentContentV2, ...args);
}

const _getAttachmentContentByRidV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,
    attachmentRid: $C.AttachmentRid,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<unknown>
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
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}/{attachmentRid}/content
 */
export function getAttachmentContentByRidV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,
    attachmentRid: $C.AttachmentRid,

    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<unknown> {
  return $omniFetch($ctx, _getAttachmentContentByRidV2, ...args);
}

const _getFirstPoint: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<$C.TimeSeriesPoint | undefined>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/timeseries/{3}/firstPoint", 2];

/**
 * Get the first point of a time series property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/timeseries/{property}/firstPoint
 */
export function getFirstPoint(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,

    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<$C.TimeSeriesPoint | undefined> {
  return $omniFetch($ctx, _getFirstPoint, ...args);
}

const _getLastPoint: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<$C.TimeSeriesPoint | undefined>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/timeseries/{3}/lastPoint", 2];

/**
 * Get the last point of a time series property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/timeseries/{property}/lastPoint
 */
export function getLastPoint(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,

    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<$C.TimeSeriesPoint | undefined> {
  return $omniFetch($ctx, _getLastPoint, ...args);
}

const _streamPoints: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,
    $body: $C.StreamTimeSeriesPointsRequest,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<unknown>
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
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/timeseries/{property}/streamPoints
 */
export function streamPoints(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    primaryKey: $C.PropertyValueEscapedString,
    property: $C.PropertyApiName,
    $body: $C.StreamTimeSeriesPointsRequest,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<unknown> {
  return $omniFetch($ctx, _streamPoints, ...args);
}
