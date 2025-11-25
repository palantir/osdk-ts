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
  GetRecommendationsResponse as _api_GetRecommendationsResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Fetch any recommendations that exist between an upstream block set version ID and a target (downstream) block
 * set version ID, i.e., where a recommendation exists between upstream block set and target block set
 * version, and the upstream version satisfies the upstreamVersionCompatability in the recommendation.
 * Only works for finalized block set versions.
 *
 * If no recommendations were found, we return an empty set in the response.
 *
 * Throws `GetBlockSetInMarketplacePermissionDenied` if the user does not have
 * `marketplace:read-local-marketplace` on the provided `marketplaceRid`.
 * Throws `BlockSetVersionNotFound` if the upstream or target versions are pending or do not exist.
 */
export async function getRecommendationsBetweenBlockSets(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  upstreamBlockSetVersionId: _api_BlockSetVersionId,
  targetBlockSetVersionId: _api_BlockSetVersionId,
): Promise<_api_GetRecommendationsResponse> {
  return conjureFetch(
    ctx,
    `/recommendations-v2/${marketplaceRid}/${targetBlockSetVersionId}/fulfilled-by/${upstreamBlockSetVersionId}`,
    "GET",
  );
}
