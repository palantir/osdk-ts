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
  ExecuteQueryRequest,
  ExecuteQueryResponse,
  ListQueryTypesResponse,
  OntologyRid,
  PageSize,
  PageToken,
  PreviewMode,
  QueryApiName,
  QueryType,
} from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _listQueryTypes: $FoundryPlatformMethod<
  (
    ontologyRid: OntologyRid,
    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ) => Promise<ListQueryTypesResponse>
> = [0, "/v1/ontologies/{0}/queryTypes", 2];

/**
 * Lists the query types for the given Ontology.
 *
 * Each page may be smaller than the requested page size. However, it is guaranteed that if there are more
 * results available, at least one result will be present in the response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v1/ontologies/{ontologyRid}/queryTypes
 */
export function listQueryTypes(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: OntologyRid,

    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<ListQueryTypesResponse> {
  return $foundryPlatformFetch($ctx, _listQueryTypes, ...args);
}

const _getQueryType: $FoundryPlatformMethod<
  (
    ontologyRid: OntologyRid,
    queryApiName: QueryApiName,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<QueryType>
> = [0, "/v1/ontologies/{0}/queryTypes/{1}", 2];

/**
 * Gets a specific query type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v1/ontologies/{ontologyRid}/queryTypes/{queryApiName}
 */
export function getQueryType(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: OntologyRid,
    queryApiName: QueryApiName,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<QueryType> {
  return $foundryPlatformFetch($ctx, _getQueryType, ...args);
}

const _executeQuery: $FoundryPlatformMethod<
  (
    ontologyRid: OntologyRid,
    queryApiName: QueryApiName,
    $body: ExecuteQueryRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<ExecuteQueryResponse>
> = [1, "/v1/ontologies/{0}/queries/{1}/execute", 3];

/**
 * Executes a Query using the given parameters. Optional parameters do not need to be supplied.
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v1/ontologies/{ontologyRid}/queries/{queryApiName}/execute
 */
export function executeQuery(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: OntologyRid,
    queryApiName: QueryApiName,
    $body: ExecuteQueryRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<ExecuteQueryResponse> {
  return $foundryPlatformFetch($ctx, _executeQuery, ...args);
}
