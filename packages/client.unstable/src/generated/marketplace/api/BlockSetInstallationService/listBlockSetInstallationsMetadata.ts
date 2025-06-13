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
  ListBlockSetInstallationsMetadataPageToken
    as _api_ListBlockSetInstallationsMetadataPageToken,
  ListBlockSetInstallationsMetadataResponse
    as _api_ListBlockSetInstallationsMetadataResponse,
  MarketplaceRid as _api_MarketplaceRid,
  PageSizeLimitHint as _api_PageSizeLimitHint,
} from "../__components.js";

/**
 * Returns installation metadata for installations that exist in compass and the user has
 * `marketplace:view-installation` operation on.
 *
 * Throws `Marketplace:LocalMarketplaceNotFound`
 * if the user does not have `marketplace:read-local-marketplace` on the marketplaceRid.
 */
export async function listBlockSetInstallationsMetadata(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetId: _api_BlockSetId | null | undefined,
  lastConsistentBlockSetVersionId: _api_BlockSetVersionId | null | undefined,
  pageToken: _api_ListBlockSetInstallationsMetadataPageToken | null | undefined,
  limit: _api_PageSizeLimitHint | null | undefined,
): Promise<_api_ListBlockSetInstallationsMetadataResponse> {
  return conjureFetch(
    ctx,
    `/block-set-installation/metadata`,
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
