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
  GetDownstreamRecommendationsResponse
    as _api_GetDownstreamRecommendationsResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Fetch downstream recommendations for products in the store whose latest versions state this block set version
 * fulfills its inputs, i.e., the recommendation version compatibilty range is satisfied by the version
 * associated with this `BlockSetVersionId`.
 * The `BlockSetVersionId` can reference a pending, complete or imported block set. For a pending version, we use
 * the version calculated in the latest update to the pending block set to check for compatibility.
 *
 * Throws `BlockSetVersionNotFound` if the `BlockSetVersionId` does not exist.
 * Throws `GetBlockSetInMarketplacePermissionDenied` if the user does not have
 * `marketplace:read-local-marketplace` on the provided `marketplaceRid`.
 */
export async function getDownstreamRecommendations(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetVersionId: _api_BlockSetVersionId,
): Promise<_api_GetDownstreamRecommendationsResponse> {
  return conjureFetch(
    ctx,
    `/recommendations-v2/downstream/${marketplaceRid}/${blockSetVersionId}`,
    "GET",
  );
}
