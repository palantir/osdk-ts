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
import type * as _Datasets from "@osdk/foundry.datasets";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type * as _Streams from "../_components.js";

//

const _get: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    streamBranchName: _Datasets.BranchName,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Streams.Stream>
> = [0, "/v2/streams/datasets/{0}/streams/{1}", 2];

/**
 * Get a stream by its branch name. If the branch does not exist, there is no stream on that branch, or the
 * user does not have permission to access the stream, a 404 error will be returned.
 *
 * @alpha
 *
 * Required Scopes: [api:datasets-read, api:streams-read]
 * URL: /v2/streams/datasets/{datasetRid}/streams/{streamBranchName}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    streamBranchName: _Datasets.BranchName,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Streams.Stream> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
