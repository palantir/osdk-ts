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
import type * as _Filesystem from "../_components.js";

//

const _get: $FoundryPlatformMethod<
  (
    resourceRid: _Filesystem.ResourceRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Filesystem.Resource>
> = [0, "/v2/filesystem/resources/{0}", 2];

/**
 * Get the Resource with the specified rid.
 *
 * @alpha
 *
 * Required Scopes: [api:filesystem-read]
 * URL: /v2/filesystem/resources/{resourceRid}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [
    resourceRid: _Filesystem.ResourceRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Filesystem.Resource> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
