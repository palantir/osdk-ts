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

const _listQueryTypesV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    $queryParams?: { pageSize?: $C.PageSize; pageToken?: $C.PageToken },
  ) => Promise<$C.ListQueryTypesResponseV2>
> = [0, "/v2/ontologies/{0}/queryTypes"];

/**
 * Lists the query types for the given Ontology.
 *
 * Each page may be smaller than the requested page size. However, it is guaranteed that if there are more
 * results available, at least one result will be present in the response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/queryTypes
 */
export function listQueryTypesV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,

    $queryParams?: { pageSize?: $C.PageSize; pageToken?: $C.PageToken },
  ]
): Promise<$C.ListQueryTypesResponseV2> {
  return $omniFetch($ctx, _listQueryTypesV2, ...args);
}

const _getQueryTypeV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    queryApiName: $C.QueryApiName,
  ) => Promise<$C.QueryTypeV2>
> = [0, "/v2/ontologies/{0}/queryTypes/{1}"];

/**
 * Gets a specific query type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/queryTypes/{queryApiName}
 */
export function getQueryTypeV2(
  $ctx: $ClientContext<any>,
  ...args: [ontology: $C.OntologyIdentifier, queryApiName: $C.QueryApiName]
): Promise<$C.QueryTypeV2> {
  return $omniFetch($ctx, _getQueryTypeV2, ...args);
}

const _executeQueryV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    queryApiName: $C.QueryApiName,
    $body: $C.ExecuteQueryRequest,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<$C.ExecuteQueryResponse>
> = [1, "/v2/ontologies/{0}/queries/{1}/execute", 1];

/**
 * Executes a Query using the given parameters.
 *
 * Optional parameters do not need to be supplied.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/queries/{queryApiName}/execute
 */
export function executeQueryV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    queryApiName: $C.QueryApiName,
    $body: $C.ExecuteQueryRequest,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<$C.ExecuteQueryResponse> {
  return $omniFetch($ctx, _executeQueryV2, ...args);
}
