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
  BlockSetVersionId as _api_BlockSetVersionId,
  ListBlockSetInstallationsResponseV2
    as _api_ListBlockSetInstallationsResponseV2,
  ListBlockSetInstallationsV2PageToken
    as _api_ListBlockSetInstallationsV2PageToken,
  MarketplaceRid as _api_MarketplaceRid,
  PageSizeLimitHint as _api_PageSizeLimitHint,
} from "../__components.js";

/**
 * Lists all block set installations that the user has access to in a given marketplace, ordered by descending
 * `updatedAtTimestamp`.
 *
 * A user has access to a block set installation if they have `marketplace:view-installation` on its
 * `BlockSetInstallationRid`.
 *
 * Throws `LocalMarketplaceNotFound` if the user does not have `marketplace:read-local-marketplace` on the given
 * `marketplaceRid`.
 */
export async function listBlockSetInstallationsV2(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetId: _api_BlockSetId | null | undefined,
  lastConsistentBlockSetVersionId: _api_BlockSetVersionId | null | undefined,
  pageToken: _api_ListBlockSetInstallationsV2PageToken | null | undefined,
  limit: _api_PageSizeLimitHint | null | undefined,
): Promise<_api_ListBlockSetInstallationsResponseV2> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/block-set-installations`,
    "GET",
    undefined,
    {
      marketplaceRid,
      blockSetId,
      lastConsistentBlockSetVersionId,
      pageToken,
      limit,
    },
  );
}
