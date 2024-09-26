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
import type * as _Streams from "../_components.js";

//

const _createStreamingDataset: $FoundryPlatformMethod<
  (
    $body: _Streams.CreateStreamingDatasetRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Streams.Dataset>
> = [1, "/v2/streams/datasets/create", 3];

/**
 * Creates a streaming dataset with a stream on the specified branch, or if no branch is specified, on the
 * default branch ('master' for most enrollments). For more information on streaming datasets, refer to the
 * [streams](https://www.palantir.com/docs/foundry/data-integration/streams/) user documentation.
 *
 * @alpha
 *
 * Required Scopes: [api:datasets-write, api:streams-write]
 * URL: /v2/streams/datasets/create
 */
export function createStreamingDataset(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: _Streams.CreateStreamingDatasetRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Streams.Dataset> {
  return $foundryPlatformFetch($ctx, _createStreamingDataset, ...args);
}
