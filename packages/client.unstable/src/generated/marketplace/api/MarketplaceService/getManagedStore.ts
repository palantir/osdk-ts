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
  ManagedMarketplaceId as _api_ManagedMarketplaceId,
  ManagedStoreResponseEntry as _api_ManagedStoreResponseEntry,
} from "../__components.js";

/**
 * Get metadata on a remote marketplace using the managedMarketplaceId.
 *
 * User should have the "marketplace:read-local-marketplace" permission on the MarketplaceRid we return.
 * This operation is typically granted to users with the Viewer role.
 */
export async function getManagedStore(
  ctx: ConjureContext,
  managedMarketplaceId: _api_ManagedMarketplaceId,
): Promise<_api_ManagedStoreResponseEntry> {
  return conjureFetch(
    ctx,
    `/marketplaces/managedStores/${managedMarketplaceId}`,
    "GET",
  );
}
