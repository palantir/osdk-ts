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
  BlockSetId as _api_BlockSetId,
  CountBlockSetInstallationsResponse as _api_CountBlockSetInstallationsResponse,
  MarketplaceRid as _api_MarketplaceRid,
  TrashStatusFilter as _api_TrashStatusFilter,
} from "../__components.js";

/**
 * Count all block set installations that the user has access to in a given marketplace.
 *
 * A user has access to a block set installation if they have `marketplace:view-installation` on its
 * `BlockSetInstallationRid`.
 *
 * Throws `LocalMarketplaceNotFound` if the user does not have `marketplace:read-local-marketplace` on the given
 * `marketplaceRid`.
 */
export async function countBlockSetInstallationsV2(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetId: _api_BlockSetId | null | undefined,
  trashStatusFilter: _api_TrashStatusFilter | null | undefined,
): Promise<_api_CountBlockSetInstallationsResponse> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/block-set-installations/count`,
    "GET",
    undefined,
    { marketplaceRid, blockSetId, trashStatusFilter },
  );
}
