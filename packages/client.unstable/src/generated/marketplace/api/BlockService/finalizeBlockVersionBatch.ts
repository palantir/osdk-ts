/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { MaterializeRecommendationsRequest as _api_MaterializeRecommendationsRequest } from "../__components.js";

/**
 * Finalize a batch of blocks, such that they are committed to the finalized and installables tables. This is
 * a prerequisite to finalizing any block set that references these blocks.
 *
 * Idempotent, skips any already finalized block versions.
 *
 * Throws `BlockVersionNotFound` if the block version could not be found. Throws
 * `BlockVersionCreationErrorStatus` if one of the blocks is in an errored stae.
 *
 * All blocks will be locked from further modifications after this call. Use `getBlockVersionCreationStatus` to
 * monitor for completion.
 *
 * ### Lifecycle
 *
 * Each block goes through two owners: the service & the coordinating client. The create block call is initiated
 * by the service. All necessary data is then moved into the repository. Once done, the service calls
 * `dataCommitBlockVersion`. From this point onwards no service data can be modified anymore. Marketplace
 * metadata (such as documentation) can still be changed. Once done, call `finalizeBlockVersionBatch` with all
 * blocks that are expected to be used in the same block set. This locks them.
 */
export async function finalizeBlockVersionBatch(
  ctx: ConjureContext,
  materializeRecommendationsRequest: _api_MaterializeRecommendationsRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/blocks/versions/finalize`,
    "POST",
    materializeRecommendationsRequest,
  );
}
