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

import type * as _Core from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _listObjects: $FoundryPlatformMethod<
  (
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    $queryParams: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      properties: Array<_Core.SelectedPropertyApiName>;
      orderBy?: _Core.OrderBy | undefined;
    },
  ) => Promise<_Core.ListObjectsResponse>
> = [0, "/v1/ontologies/{0}/objects/{1}", 2];

/**
 * Lists the objects for the given Ontology and object type.
 *
 * This endpoint supports filtering objects.
 * See the [Filtering Objects documentation](https://www.palantir.com/docs/foundry/api/ontology-resources/objects/object-basics/#filtering-objects) for details.
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
 * URL: /v1/ontologies/{ontologyRid}/objects/{objectType}
 */
export function listObjects(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,

    $queryParams: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      properties: Array<_Core.SelectedPropertyApiName>;
      orderBy?: _Core.OrderBy | undefined;
    },
  ]
): Promise<_Core.ListObjectsResponse> {
  return $foundryPlatformFetch($ctx, _listObjects, ...args);
}

const _getObject: $FoundryPlatformMethod<
  (
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    primaryKey: _Core.PropertyValueEscapedString,
    $queryParams: { properties: Array<_Core.SelectedPropertyApiName> },
  ) => Promise<_Core.OntologyObject>
> = [0, "/v1/ontologies/{0}/objects/{1}/{2}", 2];

/**
 * Gets a specific object with the given primary key.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/ontologies/{ontologyRid}/objects/{objectType}/{primaryKey}
 */
export function getObject(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    primaryKey: _Core.PropertyValueEscapedString,

    $queryParams: { properties: Array<_Core.SelectedPropertyApiName> },
  ]
): Promise<_Core.OntologyObject> {
  return $foundryPlatformFetch($ctx, _getObject, ...args);
}

const _listLinkedObjects: $FoundryPlatformMethod<
  (
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    primaryKey: _Core.PropertyValueEscapedString,
    linkType: _Core.LinkTypeApiName,
    $queryParams: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      properties: Array<_Core.SelectedPropertyApiName>;
      orderBy?: _Core.OrderBy | undefined;
    },
  ) => Promise<_Core.ListLinkedObjectsResponse>
> = [0, "/v1/ontologies/{0}/objects/{1}/{2}/links/{3}", 2];

/**
 * Lists the linked objects for a specific object and the given link type.
 *
 * This endpoint supports filtering objects.
 * See the [Filtering Objects documentation](https://www.palantir.com/docs/foundry/api/ontology-resources/objects/object-basics/#filtering-objects) for details.
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
 * URL: /v1/ontologies/{ontologyRid}/objects/{objectType}/{primaryKey}/links/{linkType}
 */
export function listLinkedObjects(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    primaryKey: _Core.PropertyValueEscapedString,
    linkType: _Core.LinkTypeApiName,

    $queryParams: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      properties: Array<_Core.SelectedPropertyApiName>;
      orderBy?: _Core.OrderBy | undefined;
    },
  ]
): Promise<_Core.ListLinkedObjectsResponse> {
  return $foundryPlatformFetch($ctx, _listLinkedObjects, ...args);
}

const _getLinkedObject: $FoundryPlatformMethod<
  (
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    primaryKey: _Core.PropertyValueEscapedString,
    linkType: _Core.LinkTypeApiName,
    linkedObjectPrimaryKey: _Core.PropertyValueEscapedString,
    $queryParams: { properties: Array<_Core.SelectedPropertyApiName> },
  ) => Promise<_Core.OntologyObject>
> = [0, "/v1/ontologies/{0}/objects/{1}/{2}/links/{3}/{4}", 2];

/**
 * Get a specific linked object that originates from another object. If there is no link between the two objects,
 * LinkedObjectNotFound is thrown.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/ontologies/{ontologyRid}/objects/{objectType}/{primaryKey}/links/{linkType}/{linkedObjectPrimaryKey}
 */
export function getLinkedObject(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    primaryKey: _Core.PropertyValueEscapedString,
    linkType: _Core.LinkTypeApiName,
    linkedObjectPrimaryKey: _Core.PropertyValueEscapedString,

    $queryParams: { properties: Array<_Core.SelectedPropertyApiName> },
  ]
): Promise<_Core.OntologyObject> {
  return $foundryPlatformFetch($ctx, _getLinkedObject, ...args);
}

const _searchObjects: $FoundryPlatformMethod<
  (
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    $body: _Core.SearchObjectsRequest,
  ) => Promise<_Core.SearchObjectsResponse>
> = [1, "/v1/ontologies/{0}/objects/{1}/search", 1];

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
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/ontologies/{ontologyRid}/objects/{objectType}/search
 */
export function searchObjects(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    $body: _Core.SearchObjectsRequest,
  ]
): Promise<_Core.SearchObjectsResponse> {
  return $foundryPlatformFetch($ctx, _searchObjects, ...args);
}

const _aggregateObjects: $FoundryPlatformMethod<
  (
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    $body: _Core.AggregateObjectsRequest,
  ) => Promise<_Core.AggregateObjectsResponse>
> = [1, "/v1/ontologies/{0}/objects/{1}/aggregate", 1];

/**
 * Perform functions on object fields in the specified ontology and object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/ontologies/{ontologyRid}/objects/{objectType}/aggregate
 */
export function aggregateObjects(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    $body: _Core.AggregateObjectsRequest,
  ]
): Promise<_Core.AggregateObjectsResponse> {
  return $foundryPlatformFetch($ctx, _aggregateObjects, ...args);
}
