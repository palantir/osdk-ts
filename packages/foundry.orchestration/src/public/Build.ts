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
import type * as _Orchestration from "../_components.js";

//

const _get: $FoundryPlatformMethod<
  (
    buildRid: _Orchestration.BuildRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Orchestration.Build>
> = [0, "/v2/orchestration/builds/{0}", 2];

/**
 * Get the Build with the specified rid.
 *
 * @beta
 *
 * Required Scopes: [api:orchestration-read]
 * URL: /v2/orchestration/builds/{buildRid}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [
    buildRid: _Orchestration.BuildRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Orchestration.Build> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _create: $FoundryPlatformMethod<
  (
    $body: _Orchestration.CreateBuildsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Orchestration.Build>
> = [1, "/v2/orchestration/builds/create", 3];

/**
 * @beta
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/builds/create
 */
export function create(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: _Orchestration.CreateBuildsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Orchestration.Build> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}
