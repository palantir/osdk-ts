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
  ArtifactRepositoryRid,
  ExecuteQueryRequest,
  ExecuteQueryResponse,
  ListQueryTypesResponseV2,
  OntologyIdentifier,
  PageSize,
  PageToken,
  QueryApiName,
  QueryTypeV2,
  SdkPackageName,
} from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _listQueryTypesV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
    },
  ) => Promise<ListQueryTypesResponseV2>
> = [0, "/v2/ontologies/{0}/queryTypes", 2];

/**
 * Lists the query types for the given Ontology.
 *
 * Each page may be smaller than the requested page size. However, it is guaranteed that if there are more
 * results available, at least one result will be present in the response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/queryTypes
 */
export function listQueryTypesV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,

    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
    },
  ]
): Promise<ListQueryTypesResponseV2> {
  return $foundryPlatformFetch($ctx, _listQueryTypesV2, ...args);
}

const _getQueryTypeV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    queryApiName: QueryApiName,
  ) => Promise<QueryTypeV2>
> = [0, "/v2/ontologies/{0}/queryTypes/{1}"];

/**
 * Gets a specific query type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/queryTypes/{queryApiName}
 */
export function getQueryTypeV2(
  $ctx: $Client | $ClientContext,
  ...args: [ontology: OntologyIdentifier, queryApiName: QueryApiName]
): Promise<QueryTypeV2> {
  return $foundryPlatformFetch($ctx, _getQueryTypeV2, ...args);
}

const _executeQueryV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    queryApiName: QueryApiName,
    $body: ExecuteQueryRequest,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<ExecuteQueryResponse>
> = [1, "/v2/ontologies/{0}/queries/{1}/execute", 3];

/**
 * Executes a Query using the given parameters.
 *
 * Optional parameters do not need to be supplied.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/queries/{queryApiName}/execute
 */
export function executeQueryV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    queryApiName: QueryApiName,
    $body: ExecuteQueryRequest,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<ExecuteQueryResponse> {
  return $foundryPlatformFetch($ctx, _executeQueryV2, ...args);
}
