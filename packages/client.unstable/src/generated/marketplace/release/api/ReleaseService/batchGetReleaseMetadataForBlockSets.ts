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
import type {
  BatchGetReleaseMetadataForBlockSetsRequest
    as _release_api_BatchGetReleaseMetadataForBlockSetsRequest,
  BatchGetReleaseMetadataForBlockSetsResponse
    as _release_api_BatchGetReleaseMetadataForBlockSetsResponse,
} from "../__components.js";

/**
 * Gets the release metadata for blockSets published through compass release
 * Drops any block set ids not published by release service.
 *
 * Throws:
 * `BatchLimitExceeded` if more than 100 items are requested.
 * `GetBlockSetInMarketplacePermissionDenied` if the user does not have `marketplace:read-local-marketplace`
 * on the provided `marketplaceRid`.
 * `BlockSetOwningMarketplaceNotFound` if the owning marketplace for the block set could not be found.
 */
export async function batchGetReleaseMetadataForBlockSets(
  ctx: ConjureContext,
  request: _release_api_BatchGetReleaseMetadataForBlockSetsRequest,
): Promise<_release_api_BatchGetReleaseMetadataForBlockSetsResponse> {
  return conjureFetch(
    ctx,
    `/releases/batchGetReleaseMetadataForBlockSets`,
    "POST",
    request,
  );
}
