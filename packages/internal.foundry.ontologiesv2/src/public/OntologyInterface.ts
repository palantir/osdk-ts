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

const _list: $FoundryPlatformMethod<
  (
    ontology: _Core.OntologyIdentifier,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Core.ListInterfaceTypesResponse>
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
export function list(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: _Core.OntologyIdentifier,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Core.ListInterfaceTypesResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    ontology: _Core.OntologyIdentifier,
    interfaceType: _Core.InterfaceTypeApiName,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Core.InterfaceType>
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
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: _Core.OntologyIdentifier,
    interfaceType: _Core.InterfaceTypeApiName,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Core.InterfaceType> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _search: $FoundryPlatformMethod<
  (
    ontology: _Core.OntologyIdentifier,
    interfaceType: _Core.InterfaceTypeApiName,
    $body: _Core.SearchObjectsForInterfaceRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Core.SearchObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/interfaces/{1}/search", 3];

/**
 * :::callout{theme=warning title=Warning}
 * This endpoint will be removed once TS OSDK is updated to use `objectSets/loadObjects` with interface object
 * sets.
 * :::
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
export function search(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: _Core.OntologyIdentifier,
    interfaceType: _Core.InterfaceTypeApiName,
    $body: _Core.SearchObjectsForInterfaceRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Core.SearchObjectsResponseV2> {
  return $foundryPlatformFetch($ctx, _search, ...args);
}

const _aggregate: $FoundryPlatformMethod<
  (
    ontology: _Core.OntologyIdentifier,
    interfaceType: _Core.InterfaceTypeApiName,
    $body: _Core.AggregateObjectsRequestV2,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Core.AggregateObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/interfaces/{1}/aggregate", 3];

/**
 * :::callout{theme=warning title=Warning}
 * This endpoint will be removed once TS OSDK is updated to use `objectSets/aggregate` with interface object
 * sets.
 * :::
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
export function aggregate(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: _Core.OntologyIdentifier,
    interfaceType: _Core.InterfaceTypeApiName,
    $body: _Core.AggregateObjectsRequestV2,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Core.AggregateObjectsResponseV2> {
  return $foundryPlatformFetch($ctx, _aggregate, ...args);
}
