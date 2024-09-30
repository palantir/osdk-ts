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

const _execute: $FoundryPlatformMethod<
  (
    ontologyRid: _Core.OntologyRid,
    queryApiName: _Core.QueryApiName,
    $body: _Core.ExecuteQueryRequest,
  ) => Promise<_Core.ExecuteQueryResponse>
> = [1, "/v1/ontologies/{0}/queries/{1}/execute", 1];

/**
 * Executes a Query using the given parameters. Optional parameters do not need to be supplied.
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/ontologies/{ontologyRid}/queries/{queryApiName}/execute
 */
export function execute(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: _Core.OntologyRid,
    queryApiName: _Core.QueryApiName,
    $body: _Core.ExecuteQueryRequest,
  ]
): Promise<_Core.ExecuteQueryResponse> {
  return $foundryPlatformFetch($ctx, _execute, ...args);
}
