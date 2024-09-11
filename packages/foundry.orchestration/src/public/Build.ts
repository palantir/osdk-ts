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

import type { PreviewMode } from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type { Build, BuildRid, CreateBuildsRequest } from "../_components.js";

//

const _getBuild: $FoundryPlatformMethod<
  (
    buildRid: BuildRid,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Build>
> = [0, "/v2/orchestration/builds/{0}", 2];

/**
 * Get the Build with the specified rid.
 *
 * @beta
 *
 * Required Scopes: [api:orchestration-read]
 * URL: /v2/orchestration/builds/{buildRid}
 */
export function getBuild(
  $ctx: $Client | $ClientContext,
  ...args: [
    buildRid: BuildRid,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Build> {
  return $foundryPlatformFetch($ctx, _getBuild, ...args);
}

const _createBuilds: $FoundryPlatformMethod<
  (
    $body: CreateBuildsRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Build>
> = [1, "/v2/orchestration/builds/create", 3];

/**
 * @beta
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/builds/create
 */
export function createBuilds(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: CreateBuildsRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Build> {
  return $foundryPlatformFetch($ctx, _createBuilds, ...args);
}
