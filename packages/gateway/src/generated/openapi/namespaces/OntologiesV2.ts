/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionTypeApiName } from "../components/ActionTypeApiName.js";
import type { ActionTypeV2 } from "../components/ActionTypeV2.js";
import type { AggregateObjectSetRequestV2 } from "../components/AggregateObjectSetRequestV2.js";
import type { AggregateObjectSetResponseV2 } from "../components/AggregateObjectSetResponseV2.js";
import type { AggregateObjectsRequestV2 } from "../components/AggregateObjectsRequestV2.js";
import type { AggregateObjectsResponseV2 } from "../components/AggregateObjectsResponseV2.js";
import type { ApplyActionRequestV2 } from "../components/ApplyActionRequestV2.js";
import type { ArtifactRepositoryRid } from "../components/ArtifactRepositoryRid.js";
import type { AsyncApplyActionRequestV2 } from "../components/AsyncApplyActionRequestV2.js";
import type { AsyncApplyActionResponseV2 } from "../components/AsyncApplyActionResponseV2.js";
import type { AttachmentMetadataResponse } from "../components/AttachmentMetadataResponse.js";
import type { AttachmentRid } from "../components/AttachmentRid.js";
import type { AttachmentV2 } from "../components/AttachmentV2.js";
import type { BatchApplyActionRequestV2 } from "../components/BatchApplyActionRequestV2.js";
import type { BatchApplyActionResponseV2 } from "../components/BatchApplyActionResponseV2.js";
import type { CountObjectsResponseV2 } from "../components/CountObjectsResponseV2.js";
import type { DeploymentApiName } from "../components/DeploymentApiName.js";
import type { DeploymentMetadata } from "../components/DeploymentMetadata.js";
import type { ExecuteQueryRequest } from "../components/ExecuteQueryRequest.js";
import type { ExecuteQueryResponse } from "../components/ExecuteQueryResponse.js";
import type { InterfaceType } from "../components/InterfaceType.js";
import type { InterfaceTypeApiName } from "../components/InterfaceTypeApiName.js";
import type { LinkTypeApiName } from "../components/LinkTypeApiName.js";
import type { LinkTypeSideV2 } from "../components/LinkTypeSideV2.js";
import type { ListActionTypesResponseV2 } from "../components/ListActionTypesResponseV2.js";
import type { ListDeploymentsResponse } from "../components/ListDeploymentsResponse.js";
import type { ListInterfaceTypesResponse } from "../components/ListInterfaceTypesResponse.js";
import type { ListLinkedObjectsResponseV2 } from "../components/ListLinkedObjectsResponseV2.js";
import type { ListObjectsResponseV2 } from "../components/ListObjectsResponseV2.js";
import type { ListObjectTypesV2Response } from "../components/ListObjectTypesV2Response.js";
import type { ListOntologiesV2Response } from "../components/ListOntologiesV2Response.js";
import type { ListOutgoingLinkTypesResponseV2 } from "../components/ListOutgoingLinkTypesResponseV2.js";
import type { ListQueryTypesResponseV2 } from "../components/ListQueryTypesResponseV2.js";
import type { LoadObjectSetRequestV2 } from "../components/LoadObjectSetRequestV2.js";
import type { LoadObjectSetResponseV2 } from "../components/LoadObjectSetResponseV2.js";
import type { ObjectSet } from "../components/ObjectSet.js";
import type { ObjectSetRid } from "../components/ObjectSetRid.js";
import type { ObjectTypeApiName } from "../components/ObjectTypeApiName.js";
import type { ObjectTypeV2 } from "../components/ObjectTypeV2.js";
import type { OntologyFullMetadata } from "../components/OntologyFullMetadata.js";
import type { OntologyIdentifier } from "../components/OntologyIdentifier.js";
import type { OntologyObjectV2 } from "../components/OntologyObjectV2.js";
import type { OntologyV2 } from "../components/OntologyV2.js";
import type { OrderBy } from "../components/OrderBy.js";
import type { PageSize } from "../components/PageSize.js";
import type { PageToken } from "../components/PageToken.js";
import type { PreviewMode } from "../components/PreviewMode.js";
import type { PropertyApiName } from "../components/PropertyApiName.js";
import type { PropertyValueEscapedString } from "../components/PropertyValueEscapedString.js";
import type { QueryApiName } from "../components/QueryApiName.js";
import type { QueryTypeV2 } from "../components/QueryTypeV2.js";
import type { SdkPackageName } from "../components/SdkPackageName.js";
import type { SearchObjectsForInterfaceRequest } from "../components/SearchObjectsForInterfaceRequest.js";
import type { SearchObjectsRequestV2 } from "../components/SearchObjectsRequestV2.js";
import type { SearchObjectsResponseV2 } from "../components/SearchObjectsResponseV2.js";
import type { SelectedPropertyApiName } from "../components/SelectedPropertyApiName.js";
import type { StreamTimeSeriesPointsRequest } from "../components/StreamTimeSeriesPointsRequest.js";
import type { SyncApplyActionResponseV2 } from "../components/SyncApplyActionResponseV2.js";
import type { TimeSeriesPoint } from "../components/TimeSeriesPoint.js";
import type { TransformDataRequest } from "../components/TransformDataRequest.js";
import type { TransformDataResponse } from "../components/TransformDataResponse.js";
import type { OpenApiRequest } from "../request/index.js";

/**
 * Lists the Ontologies visible to the current user.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function listOntologiesV2<TResponse>(
  _request: OpenApiRequest<ListOntologiesV2Response, TResponse>,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Gets a specific ontology with the given Ontology RID.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getOntologyV2<TResponse>(
  _request: OpenApiRequest<OntologyV2, TResponse>,
  ontology: OntologyIdentifier,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Get the full Ontology metadata. This includes the objects, links, actions, queries, and interfaces.
 */
export function getOntologyFullMetadata<TResponse>(
  _request: OpenApiRequest<OntologyFullMetadata, TResponse>,
  ontology: OntologyIdentifier,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/fullMetadata`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Lists the action types for the given Ontology.
 *
 * Each page may be smaller than the requested page size. However, it is guaranteed that if there are more
 * results available, at least one result will be present in the response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function listActionTypesV2<TResponse>(
  _request: OpenApiRequest<ListActionTypesResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/actionTypes`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Gets a specific action type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getActionTypeV2<TResponse>(
  _request: OpenApiRequest<ActionTypeV2, TResponse>,
  ontology: OntologyIdentifier,
  actionType: ActionTypeApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/actionTypes/${actionType}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Lists the object types for the given Ontology.
 *
 * Each page may be smaller or larger than the requested page size. However, it is guaranteed that if there are
 * more results available, at least one result will be present in the
 * response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function listObjectTypesV2<TResponse>(
  _request: OpenApiRequest<ListObjectTypesV2Response, TResponse>,
  ontology: OntologyIdentifier,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objectTypes`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Gets a specific object type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getObjectTypeV2<TResponse>(
  _request: OpenApiRequest<ObjectTypeV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objectTypes/${objectType}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * List the outgoing links for an object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function listOutgoingLinkTypesV2<TResponse>(
  _request: OpenApiRequest<ListOutgoingLinkTypesResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objectTypes/${objectType}/outgoingLinkTypes`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Get an outgoing link for an object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getOutgoingLinkTypeV2<TResponse>(
  _request: OpenApiRequest<LinkTypeSideV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  linkType: LinkTypeApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objectTypes/${objectType}/outgoingLinkTypes/${linkType}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

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
 */
export function listObjectsV2<TResponse>(
  _request: OpenApiRequest<ListObjectsResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  queryParameters: {
    pageSize?: PageSize;
    pageToken?: PageToken;
    select: Array<SelectedPropertyApiName>;
    orderBy?: OrderBy;
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
    excludeRid?: boolean;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Gets a specific object with the given primary key.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getObjectV2<TResponse>(
  _request: OpenApiRequest<OntologyObjectV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  queryParameters: {
    select: Array<SelectedPropertyApiName>;
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
    excludeRid?: boolean;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Returns a count of the objects of the given object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function countObjects<TResponse>(
  _request: OpenApiRequest<CountObjectsResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objects/${objectType}/count`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

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
 */
export function searchObjectsV2<TResponse>(
  _request: OpenApiRequest<SearchObjectsResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  request: SearchObjectsRequestV2,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objects/${objectType}/search`,
    request,
    queryParameters,
    __undefined,
  );
}

/** Temporary endpoint for search. */
export function deprecatedSearchObjectsV2<TResponse>(
  _request: OpenApiRequest<SearchObjectsResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  request: SearchObjectsRequestV2,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objects/${objectType}/_search`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Perform functions on object fields in the specified ontology and object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function aggregateObjectsV2<TResponse>(
  _request: OpenApiRequest<AggregateObjectsResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  request: AggregateObjectsRequestV2,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objects/${objectType}/aggregate`,
    request,
    queryParameters,
    __undefined,
  );
}

/**
 * Temporary endpoint for aggregations
 */
export function deprecatedAggregateObjectsV2<TResponse>(
  _request: OpenApiRequest<AggregateObjectsResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  request: AggregateObjectsRequestV2,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objects/${objectType}/_aggregate`,
    request,
    __undefined,
    __undefined,
  );
}

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
 */
export function listInterfaceTypes<TResponse>(
  _request: OpenApiRequest<ListInterfaceTypesResponse, TResponse>,
  ontology: OntologyIdentifier,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/interfaceTypes`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * :::callout{theme=warning title=Warning}
 *   This endpoint is in preview and may be modified or removed at any time.
 *   To use this endpoint, add `preview=true` to the request query parameters.
 * :::
 *
 * Gets a specific object type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getInterfaceType<TResponse>(
  _request: OpenApiRequest<InterfaceType, TResponse>,
  ontology: OntologyIdentifier,
  interfaceType: InterfaceTypeApiName,
  queryParameters?: {
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/interfaceTypes/${interfaceType}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * :::callout{theme=warning title=Warning}
 *   This endpoint is in preview and may be modified or removed at any time.
 *   To use this endpoint, add `preview=true` to the request query parameters.
 * :::
 *
 * Search for objects in the specified ontology and interface type. The following search queries are supported:
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
 */
export function searchObjectsForInterface<TResponse>(
  _request: OpenApiRequest<SearchObjectsResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  interfaceType: InterfaceTypeApiName,
  request: SearchObjectsForInterfaceRequest,
  queryParameters?: {
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/interfaces/${interfaceType}/search`,
    request,
    queryParameters,
    __undefined,
  );
}

/**
 * :::callout{theme=warning title=Warning}
 *   This endpoint is in preview and may be modified or removed at any time.
 *   To use this endpoint, add `preview=true` to the request query parameters.
 * :::
 *
 * Perform functions on object fields in the specified ontology and of the specified interface type. Any specified
 * properties must be shared property types defined on the interface.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function aggregateObjectsForInterface<TResponse>(
  _request: OpenApiRequest<AggregateObjectsResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  interfaceType: InterfaceTypeApiName,
  request: AggregateObjectsRequestV2,
  queryParameters?: {
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/interfaces/${interfaceType}/aggregate`,
    request,
    queryParameters,
    __undefined,
  );
}

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
 */
export function listLinkedObjectsV2<TResponse>(
  _request: OpenApiRequest<ListLinkedObjectsResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  linkType: LinkTypeApiName,
  queryParameters: {
    pageSize?: PageSize;
    pageToken?: PageToken;
    select: Array<SelectedPropertyApiName>;
    orderBy?: OrderBy;
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
    excludeRid?: boolean;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/links/${linkType}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Get a specific linked object that originates from another object.
 *
 * If there is no link between the two objects, `LinkedObjectNotFound` is thrown.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getLinkedObjectV2<TResponse>(
  _request: OpenApiRequest<OntologyObjectV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  linkType: LinkTypeApiName,
  linkedObjectPrimaryKey: PropertyValueEscapedString,
  queryParameters: {
    select: Array<SelectedPropertyApiName>;
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
    excludeRid?: boolean;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/links/${linkType}/${linkedObjectPrimaryKey}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Get the metadata of attachments parented to the given object.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getAttachmentsV2<TResponse>(
  _request: OpenApiRequest<AttachmentMetadataResponse, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/attachments/${property}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Get the metadata of a particular attachment in an attachment list.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getAttachmentByRidV2<TResponse>(
  _request: OpenApiRequest<AttachmentV2, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
  attachmentRid: AttachmentRid,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/attachments/${property}/${attachmentRid}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Get the content of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getAttachmentContentV2<TResponse>(
  _request: OpenApiRequest<ReadableStream<Uint8Array> | Blob, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/attachments/${property}/content`,
    __undefined,
    queryParameters,
    __undefined,
    __undefined,
    __anyMediaType,
  );
}

/**
 * Get the content of an attachment by its RID.
 *
 * The RID must exist in the attachment array of the property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getAttachmentContentByRidV2<TResponse>(
  _request: OpenApiRequest<ReadableStream<Uint8Array> | Blob, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
  attachmentRid: AttachmentRid,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/attachments/${property}/${attachmentRid}/content`,
    __undefined,
    queryParameters,
    __undefined,
    __undefined,
    __anyMediaType,
  );
}

/**
 * Get the first point of a time series property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getFirstPoint<TResponse>(
  _request: OpenApiRequest<TimeSeriesPoint, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/timeseries/${property}/firstPoint`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Get the last point of a time series property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getLastPoint<TResponse>(
  _request: OpenApiRequest<TimeSeriesPoint, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/timeseries/${property}/lastPoint`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Stream all of the points of a time series property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function streamPoints<TResponse>(
  _request: OpenApiRequest<ReadableStream<Uint8Array> | Blob, TResponse>,
  ontology: OntologyIdentifier,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
  request: StreamTimeSeriesPointsRequest,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/timeseries/${property}/streamPoints`,
    request,
    queryParameters,
    __undefined,
    __applicationJson,
    __anyMediaType,
  );
}

/**
 * Applies an action using the given parameters.
 *
 * Changes to the Ontology are eventually consistent and may take some time to be visible.
 *
 * Note that [parameter default values](/docs/foundry/action-types/parameters-default-value/) are not currently supported by
 * this endpoint.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data api:write-data`.
 */
export function applyActionV2<TResponse>(
  _request: OpenApiRequest<SyncApplyActionResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  action: ActionTypeApiName,
  request: ApplyActionRequestV2,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/actions/${action}/apply`,
    request,
    queryParameters,
    __undefined,
  );
}

/**
 * Applies multiple actions (of the same Action Type) using the given parameters.
 * Changes to the Ontology are eventually consistent and may take some time to be visible.
 *
 * Up to 20 actions may be applied in one call. Actions that only modify objects in Object Storage v2 and do not
 * call Functions may receive a higher limit.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data api:write-data`.
 */
export function applyActionBatchV2<TResponse>(
  _request: OpenApiRequest<BatchApplyActionResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  action: ActionTypeApiName,
  request: BatchApplyActionRequestV2,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/actions/${action}/applyBatch`,
    request,
    queryParameters,
    __undefined,
  );
}

/**
 * Applies an action using the given parameters.
 *
 * Changes to the Ontology are eventually consistent and may take some time to be visible.
 *
 * Note that [parameter default values](/docs/foundry/action-types/parameters-default-value/) are not currently supported by
 * this endpoint.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data api:write-data`.
 */
export function applyActionAsyncV2<TResponse>(
  _request: OpenApiRequest<AsyncApplyActionResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  action: ActionTypeApiName,
  request: AsyncApplyActionRequestV2,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/actions/${action}/applyAsync`,
    request,
    queryParameters,
    __undefined,
  );
}

/**
 * Lists the query types for the given Ontology.
 *
 * Each page may be smaller than the requested page size. However, it is guaranteed that if there are more
 * results available, at least one result will be present in the response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function listQueryTypesV2<TResponse>(
  _request: OpenApiRequest<ListQueryTypesResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/queryTypes`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Gets a specific query type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getQueryTypeV2<TResponse>(
  _request: OpenApiRequest<QueryTypeV2, TResponse>,
  ontology: OntologyIdentifier,
  queryApiName: QueryApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/queryTypes/${queryApiName}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Executes a Query using the given parameters.
 *
 * Optional parameters do not need to be supplied.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function executeQueryV2<TResponse>(
  _request: OpenApiRequest<ExecuteQueryResponse, TResponse>,
  ontology: OntologyIdentifier,
  queryApiName: QueryApiName,
  request: ExecuteQueryRequest,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/queries/${queryApiName}/execute`,
    request,
    queryParameters,
    __undefined,
  );
}

/**
 * Gets the definition of the `ObjectSet` with the given RID.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getObjectSetV2<TResponse>(
  _request: OpenApiRequest<ObjectSet, TResponse>,
  ontology: OntologyIdentifier,
  objectSetRid: ObjectSetRid,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objectSets/${objectSetRid}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Load the ontology objects present in the `ObjectSet` from the provided object set definition.
 *
 * For Object Storage V1 backed objects, this endpoint returns a maximum of 10,000 objects. After 10,000 objects have been returned and if more objects
 * are available, attempting to load another page will result in an `ObjectsExceededLimit` error being returned. There is no limit on Object Storage V2 backed objects.
 *
 * Note that null value properties will not be returned.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function loadObjectSetV2<TResponse>(
  _request: OpenApiRequest<LoadObjectSetResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  request: LoadObjectSetRequestV2,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objectSets/loadObjects`,
    request,
    queryParameters,
    __undefined,
  );
}

/**
 * Aggregates the ontology objects present in the `ObjectSet` from the provided object set definition.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function aggregateObjectSetV2<TResponse>(
  _request: OpenApiRequest<AggregateObjectSetResponseV2, TResponse>,
  ontology: OntologyIdentifier,
  request: AggregateObjectSetRequestV2,
  queryParameters?: {
    artifactRepository?: ArtifactRepositoryRid;
    packageName?: SdkPackageName;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objectSets/aggregate`,
    request,
    queryParameters,
    __undefined,
  );
}

/**
 * Fetches a list of the available model deployments within a given Ontology.
 */
export function listDeployments<TResponse>(
  _request: OpenApiRequest<ListDeploymentsResponse, TResponse>,
  ontology: OntologyIdentifier,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/models/deployments`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Fetches information about a model deployment within a given Ontology.
 */
export function getDeployment<TResponse>(
  _request: OpenApiRequest<DeploymentMetadata, TResponse>,
  ontology: OntologyIdentifier,
  deployment: DeploymentApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/models/deployments/${deployment}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Use a given model deployment to transform the provided data.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function transformDeployment<TResponse>(
  _request: OpenApiRequest<TransformDataResponse, TResponse>,
  ontology: OntologyIdentifier,
  deployment: DeploymentApiName,
  request: TransformDataRequest,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/models/deployments/${deployment}/transform`,
    request,
    __undefined,
    __undefined,
  );
}

const __anyMediaType: string = "*/*";
const __applicationJson: string = "application/json";
/** Constant reference to `undefined` that we expect to get minified and therefore reduce total code size */
const __undefined: undefined = undefined;
