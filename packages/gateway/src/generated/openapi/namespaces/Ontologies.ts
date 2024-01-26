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

import type { ActionRid } from "../components/ActionRid";
import type { ActionType } from "../components/ActionType";
import type { ActionTypeApiName } from "../components/ActionTypeApiName";
import type { AggregateObjectsRequest } from "../components/AggregateObjectsRequest";
import type { AggregateObjectsResponse } from "../components/AggregateObjectsResponse";
import type { ApplyActionRequest } from "../components/ApplyActionRequest";
import type { ApplyActionResponse } from "../components/ApplyActionResponse";
import type { AsyncActionOperation } from "../components/AsyncActionOperation";
import type { AsyncApplyActionRequest } from "../components/AsyncApplyActionRequest";
import type { Attachment } from "../components/Attachment";
import type { AttachmentRid } from "../components/AttachmentRid";
import type { BatchApplyActionRequest } from "../components/BatchApplyActionRequest";
import type { BatchApplyActionResponse } from "../components/BatchApplyActionResponse";
import type { ContentLength } from "../components/ContentLength";
import type { ContentType } from "../components/ContentType";
import type { ExecuteQueryRequest } from "../components/ExecuteQueryRequest";
import type { ExecuteQueryResponse } from "../components/ExecuteQueryResponse";
import type { Filename } from "../components/Filename";
import type { LinkTypeApiName } from "../components/LinkTypeApiName";
import type { LinkTypeSide } from "../components/LinkTypeSide";
import type { ListActionTypesResponse } from "../components/ListActionTypesResponse";
import type { ListLinkedObjectsResponse } from "../components/ListLinkedObjectsResponse";
import type { ListObjectsResponse } from "../components/ListObjectsResponse";
import type { ListObjectTypesResponse } from "../components/ListObjectTypesResponse";
import type { ListOntologiesResponse } from "../components/ListOntologiesResponse";
import type { ListOutgoingLinkTypesResponse } from "../components/ListOutgoingLinkTypesResponse";
import type { ListQueryTypesResponse } from "../components/ListQueryTypesResponse";
import type { ObjectType } from "../components/ObjectType";
import type { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import type { Ontology } from "../components/Ontology";
import type { OntologyObject } from "../components/OntologyObject";
import type { OntologyRid } from "../components/OntologyRid";
import type { OrderBy } from "../components/OrderBy";
import type { PageSize } from "../components/PageSize";
import type { PageToken } from "../components/PageToken";
import type { PreviewMode } from "../components/PreviewMode";
import type { PropertyValueEscapedString } from "../components/PropertyValueEscapedString";
import type { QueryApiName } from "../components/QueryApiName";
import type { QueryType } from "../components/QueryType";
import type { SearchObjectsRequest } from "../components/SearchObjectsRequest";
import type { SearchObjectsResponse } from "../components/SearchObjectsResponse";
import type { SelectedPropertyApiName } from "../components/SelectedPropertyApiName";
import type { ValidateActionRequest } from "../components/ValidateActionRequest";
import type { ValidateActionResponse } from "../components/ValidateActionResponse";
import type { OpenApiRequest } from "../request";

/**
 * Lists the Ontologies visible to the current user.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function listOntologies<TResponse>(
  _request: OpenApiRequest<ListOntologiesResponse, TResponse>,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies`,
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
export function getOntology<TResponse>(
  _request: OpenApiRequest<Ontology, TResponse>,
  ontologyRid: OntologyRid,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}`,
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
export function listObjectTypes<TResponse>(
  _request: OpenApiRequest<ListObjectTypesResponse, TResponse>,
  ontologyRid: OntologyRid,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/objectTypes`,
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
export function getObjectType<TResponse>(
  _request: OpenApiRequest<ObjectType, TResponse>,
  ontologyRid: OntologyRid,
  objectType: ObjectTypeApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/objectTypes/${objectType}`,
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
export function listOutgoingLinkTypes<TResponse>(
  _request: OpenApiRequest<ListOutgoingLinkTypesResponse, TResponse>,
  ontologyRid: OntologyRid,
  objectType: ObjectTypeApiName,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/objectTypes/${objectType}/outgoingLinkTypes`,
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
export function getOutgoingLinkType<TResponse>(
  _request: OpenApiRequest<LinkTypeSide, TResponse>,
  ontologyRid: OntologyRid,
  objectType: ObjectTypeApiName,
  linkType: LinkTypeApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/objectTypes/${objectType}/outgoingLinkTypes/${linkType}`,
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
export function listActionTypes<TResponse>(
  _request: OpenApiRequest<ListActionTypesResponse, TResponse>,
  ontologyRid: OntologyRid,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/actionTypes`,
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
export function getActionType<TResponse>(
  _request: OpenApiRequest<ActionType, TResponse>,
  ontologyRid: OntologyRid,
  actionTypeApiName: ActionTypeApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/actionTypes/${actionTypeApiName}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Applies an action using the given parameters. Changes to the Ontology are eventually consistent and may take
 * some time to be visible.
 *
 * Note that [parameter default values](/docs/foundry/action-types/parameters-default-value/) are not currently supported by
 * this endpoint.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data api:write-data`.
 */
export function applyAction<TResponse>(
  _request: OpenApiRequest<ApplyActionResponse, TResponse>,
  ontologyRid: OntologyRid,
  actionType: ActionTypeApiName,
  request: ApplyActionRequest,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/ontologies/${ontologyRid}/actions/${actionType}/apply`,
    request,
    __undefined,
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
 * Note that [parameter default values](/docs/foundry/action-types/parameters-default-value/) are not currently supported by
 * this endpoint.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data api:write-data`.
 */
export function applyActionBatch<TResponse>(
  _request: OpenApiRequest<BatchApplyActionResponse, TResponse>,
  ontologyRid: OntologyRid,
  actionType: ActionTypeApiName,
  request: BatchApplyActionRequest,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/ontologies/${ontologyRid}/actions/${actionType}/applyBatch`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Applies an action asynchronously using the given parameters. Changes to the Ontology are eventually consistent
 * and may take some time to be visible.
 *
 * Note that [parameter default values](/docs/foundry/action-types/parameters-default-value/) are not currently
 * supported by this endpoint.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data api:write-data`.
 */
export function applyActionAsync<TResponse>(
  _request: OpenApiRequest<AsyncActionOperation, TResponse>,
  ontologyRid: OntologyRid,
  actionType: ActionTypeApiName,
  request: AsyncApplyActionRequest,
  queryParameters?: {
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/ontologies/${ontologyRid}/actions/${actionType}/applyAsync`,
    request,
    queryParameters,
    __undefined,
    __applicationJson,
    __anyMediaType,
  );
}

export function getAsyncActionStatus<TResponse>(
  _request: OpenApiRequest<AsyncActionOperation, TResponse>,
  ontologyRid: OntologyRid,
  actionType: ActionTypeApiName,
  actionRid: ActionRid,
  queryParameters?: {
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/actions/${actionType}/applyAsync/${actionRid}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Validates if an action can be run with the given set of parameters.
 * The response contains the evaluation of parameters and **submission criteria**
 * that determine if the request is `VALID` or `INVALID`.
 * For performance reasons, validations will not consider existing objects or other data in Foundry.
 * For example, the uniqueness of a primary key or the existence of a user ID will not be checked.
 * Note that [parameter default values](/docs/foundry/action-types/parameters-default-value/) are not currently supported by
 * this endpoint. Unspecified parameters will be given a default value of `null`.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function validateAction<TResponse>(
  _request: OpenApiRequest<ValidateActionResponse, TResponse>,
  ontologyRid: OntologyRid,
  actionType: ActionTypeApiName,
  request: ValidateActionRequest,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/ontologies/${ontologyRid}/actions/${actionType}/validate`,
    request,
    __undefined,
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
export function listQueryTypes<TResponse>(
  _request: OpenApiRequest<ListQueryTypesResponse, TResponse>,
  ontologyRid: OntologyRid,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/queryTypes`,
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
export function getQueryType<TResponse>(
  _request: OpenApiRequest<QueryType, TResponse>,
  ontologyRid: OntologyRid,
  queryApiName: QueryApiName,
  queryParameters?: {
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/queryTypes/${queryApiName}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Executes a Query using the given parameters. Optional parameters do not need to be supplied.
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function executeQuery<TResponse>(
  _request: OpenApiRequest<ExecuteQueryResponse, TResponse>,
  ontologyRid: OntologyRid,
  queryApiName: QueryApiName,
  request: ExecuteQueryRequest,
  queryParameters?: {
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/ontologies/${ontologyRid}/queries/${queryApiName}/execute`,
    request,
    queryParameters,
    __undefined,
  );
}

/**
 * Lists the objects for the given Ontology and object type.
 *
 * This endpoint supports filtering objects.
 * See the [Filtering Objects documentation](/docs/foundry/api/ontology-resources/objects/object-basics/#filtering-objects) for details.
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
export function listObjects<TResponse>(
  _request: OpenApiRequest<ListObjectsResponse, TResponse>,
  ontologyRid: OntologyRid,
  objectType: ObjectTypeApiName,
  queryParameters: {
    pageSize?: PageSize;
    pageToken?: PageToken;
    properties: Array<SelectedPropertyApiName>;
    orderBy?: OrderBy;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/objects/${objectType}`,
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
export function getObject<TResponse>(
  _request: OpenApiRequest<OntologyObject, TResponse>,
  ontologyRid: OntologyRid,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  queryParameters: {
    properties: Array<SelectedPropertyApiName>;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/objects/${objectType}/${primaryKey}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Lists the linked objects for a specific object and the given link type.
 *
 * This endpoint supports filtering objects.
 * See the [Filtering Objects documentation](/docs/foundry/api/ontology-resources/objects/object-basics/#filtering-objects) for details.
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
export function listLinkedObjects<TResponse>(
  _request: OpenApiRequest<ListLinkedObjectsResponse, TResponse>,
  ontologyRid: OntologyRid,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  linkType: LinkTypeApiName,
  queryParameters: {
    pageSize?: PageSize;
    pageToken?: PageToken;
    properties: Array<SelectedPropertyApiName>;
    orderBy?: OrderBy;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/objects/${objectType}/${primaryKey}/links/${linkType}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Get a specific linked object that originates from another object. If there is no link between the two objects,
 * LinkedObjectNotFound is thrown.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getLinkedObject<TResponse>(
  _request: OpenApiRequest<OntologyObject, TResponse>,
  ontologyRid: OntologyRid,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  linkType: LinkTypeApiName,
  linkedObjectPrimaryKey: PropertyValueEscapedString,
  queryParameters: {
    properties: Array<SelectedPropertyApiName>;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/ontologies/${ontologyRid}/objects/${objectType}/${primaryKey}/links/${linkType}/${linkedObjectPrimaryKey}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Search for objects in the specified ontology and object type. The request body is used
 * to filter objects based on the specified query. The supported queries are:
 *
 * | Query type            | Description                                                                       | Supported Types                 |
 * |----------|-----------------------------------------------------------------------------------|---------------------------------|
 * | lt       | The provided property is less than the provided value.                            | number, string, date, timestamp |
 * | gt       | The provided property is greater than the provided value.                         | number, string, date, timestamp |
 * | lte      | The provided property is less than or equal to the provided value.                | number, string, date, timestamp |
 * | gte      | The provided property is greater than or equal to the provided value.             | number, string, date, timestamp |
 * | eq       | The provided property is exactly equal to the provided value.                     | number, string, date, timestamp |
 * | isNull   | The provided property is (or is not) null.                                        | all                             |
 * | contains | The provided property contains the provided value.                                | array                           |
 * | not      | The sub-query does not match.                                                     | N/A (applied on a query)        |
 * | and      | All the sub-queries match.                                                        | N/A (applied on queries)        |
 * | or       | At least one of the sub-queries match.                                            | N/A (applied on queries)        |
 * | prefix   | The provided property starts with the provided value.                             | string                          |
 * | phrase   | The provided property contains the provided value as a substring.                 | string                          |
 * | anyTerm  | The provided property contains at least one of the terms separated by whitespace. | string                          |
 * | allTerms | The provided property contains all the terms separated by whitespace.             | string                          |                                                                            |
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function searchObjects<TResponse>(
  _request: OpenApiRequest<SearchObjectsResponse, TResponse>,
  ontologyRid: OntologyRid,
  objectType: ObjectTypeApiName,
  request: SearchObjectsRequest,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/ontologies/${ontologyRid}/objects/${objectType}/search`,
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
export function aggregateObjects<TResponse>(
  _request: OpenApiRequest<AggregateObjectsResponse, TResponse>,
  ontologyRid: OntologyRid,
  objectType: ObjectTypeApiName,
  request: AggregateObjectsRequest,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/ontologies/${ontologyRid}/objects/${objectType}/aggregate`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Upload an attachment to use in an action. Any attachment which has not been linked to an object via
 * an action within one hour after upload will be removed.
 * Previously mapped attachments which are not connected to any object anymore are also removed on
 * a biweekly basis.
 * The body of the request must contain the binary content of the file and the `Content-Type` header must be `application/octet-stream`.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:write-data`.
 */
export function uploadAttachment<TResponse>(
  _request: OpenApiRequest<Attachment, TResponse>,
  request: ReadableStream<Uint8Array> | Blob,
  queryParameters: {
    filename: Filename;
  },
  additionalHeaders: {
    "Content-Length": ContentLength;
    "Content-Type": ContentType;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/attachments/upload`,
    request,
    queryParameters,
    additionalHeaders,
    __anyMediaType,
  );
}

/**
 * Get the content of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getAttachmentContent<TResponse>(
  _request: OpenApiRequest<ReadableStream<Uint8Array> | Blob, TResponse>,
  attachmentRid: AttachmentRid,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/attachments/${attachmentRid}/content`,
    __undefined,
    __undefined,
    __undefined,
    __undefined,
    __anyMediaType,
  );
}

/**
 * Get the metadata of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getAttachment<TResponse>(
  _request: OpenApiRequest<Attachment, TResponse>,
  attachmentRid: AttachmentRid,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/attachments/${attachmentRid}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

const __anyMediaType: string = "*/*";
const __applicationJson: string = "application/json";
/** Constant reference to `undefined` that we expect to get minified and therefore reduce total code size */
const __undefined: undefined = undefined;
