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
  BlockVersionId as _api_BlockVersionId,
  GetBlockVersionResponse as _api_GetBlockVersionResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Get the data for a version of a block.
 *
 * Throws `BlockVersionNotFound` if the block version could not be found.
 * Throws `ReadLocalMarketplacePermissionDenied` if the user does not have the "marketplace:read-local-marketplace"
 * operation on the owning marketplace.
 */
export async function getBlockVersion(
  ctx: ConjureContext,
  blockVersionId: _api_BlockVersionId,
  blockSetVersionId: _api_BlockSetVersionId,
  marketplaceRid: _api_MarketplaceRid,
): Promise<_api_GetBlockVersionResponse> {
  return conjureFetch(
    ctx,
    `/installation-app-service/${marketplaceRid}/blockSet/${blockSetVersionId}/block/versions/${blockVersionId}`,
    "GET",
  );
}
