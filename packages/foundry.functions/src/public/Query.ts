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

import type * as _Core from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type * as _Functions from "../_components.js";

//

const _getQuery: $FoundryPlatformMethod<
  (
    queryApiName: _Functions.QueryApiName,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Functions.Query>
> = [0, "/v2/functions/queries/{0}", 2];

/**
 * Gets a specific query type with the given API name.
 *
 * @alpha
 *
 * Required Scopes: [api:functions-read]
 * URL: /v2/functions/queries/{queryApiName}
 */
export function getQuery(
  $ctx: $Client | $ClientContext,
  ...args: [
    queryApiName: _Functions.QueryApiName,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Functions.Query> {
  return $foundryPlatformFetch($ctx, _getQuery, ...args);
}

const _getByRidQueries: $FoundryPlatformMethod<
  (
    $body: _Functions.GetByRidQueriesRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Functions.Query>
> = [1, "/v2/functions/queries/getByRid", 3];

/**
 * Gets a specific query type with the given RID.
 *
 * @alpha
 *
 * Required Scopes: [api:functions-read]
 * URL: /v2/functions/queries/getByRid
 */
export function getByRidQueries(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: _Functions.GetByRidQueriesRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Functions.Query> {
  return $foundryPlatformFetch($ctx, _getByRidQueries, ...args);
}

const _executeQuery: $FoundryPlatformMethod<
  (
    queryApiName: _Functions.QueryApiName,
    $body: _Functions.ExecuteQueryRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Functions.ExecuteQueryResponse>
> = [1, "/v2/functions/queries/{0}/execute", 3];

/**
 * Executes a Query using the given parameters.
 *
 * Optional parameters do not need to be supplied.
 *
 * @alpha
 *
 * Required Scopes: [api:functions-read]
 * URL: /v2/functions/queries/{queryApiName}/execute
 */
export function executeQuery(
  $ctx: $Client | $ClientContext,
  ...args: [
    queryApiName: _Functions.QueryApiName,
    $body: _Functions.ExecuteQueryRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Functions.ExecuteQueryResponse> {
  return $foundryPlatformFetch($ctx, _executeQuery, ...args);
}
