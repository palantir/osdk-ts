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
  BlockSetVersionId as _api_BlockSetVersionId,
  GetRecommendationsResponseV2 as _api_GetRecommendationsResponseV2,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Fetch any recommendations for inputs to a finalized block set computed during packaging.
 * If no recommendations were found for the BlockSetVersionId, we return an empty set in the response.
 * Filters to recommendations where the upstream BlockSetId is present on the stack, which may not be the case
 * for recommendations that were shipped cross-stack. Does not guarantee that the upstream BlockSetId has a
 * compatible version on this stack.
 *
 * Throws `GetBlockSetInMarketplacePermissionDenied` if the user does not have
 * `marketplace:read-local-marketplace` on the provided `marketplaceRid`.
 * Throws `BlockSetVersionNotFound` if the `BlockSetVersionId` does not exist, or if not in the finalized state.
 */
export async function getRecommendationsForBlockSetV2(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetVersionId: _api_BlockSetVersionId,
): Promise<_api_GetRecommendationsResponseV2> {
  return conjureFetch(
    ctx,
    `/recommendations-v2/${marketplaceRid}/${blockSetVersionId}`,
    "GET",
  );
}
