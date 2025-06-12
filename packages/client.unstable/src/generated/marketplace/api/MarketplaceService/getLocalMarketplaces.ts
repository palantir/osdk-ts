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
  MarketplaceBulkResult as _api_MarketplaceBulkResult,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Get metadata on multiple marketplacse.
 * User should have the "marketplace:read-local-marketplace" permission on each MarketplaceRid we return.
 * This operation is typically granted to users with the Viewer role.
 */
export async function getLocalMarketplaces(
  ctx: ConjureContext,
  marketplaceBulkRequest: Array<_api_MarketplaceRid>,
): Promise<_api_MarketplaceBulkResult> {
  return conjureFetch(ctx, `/marketplaces/bulk`, "GET", undefined, {
    marketplaceBulkRequest,
  });
}
