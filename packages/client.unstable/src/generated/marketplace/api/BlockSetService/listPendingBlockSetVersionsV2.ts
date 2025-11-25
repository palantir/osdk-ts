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
  ListPendingBlockSetVersionsPageToken
    as _api_ListPendingBlockSetVersionsPageToken,
  ListPendingBlockSetVersionsResponseV2
    as _api_ListPendingBlockSetVersionsResponseV2,
  MarketplaceRid as _api_MarketplaceRid,
  PageSizeLimitHint as _api_PageSizeLimitHint,
} from "../__components.js";

/**
 * Lists versions of pending block sets, ordered by creation timestamp descending.
 * Requires the `marketplace:read-local-marketplace` operation on the given marketplaceRid.
 *
 * Only returns versions where `isListable` was set to true on CreateBlockSetVersionRequestV2.
 */
export async function listPendingBlockSetVersionsV2(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetId: _api_BlockSetId | null | undefined,
  pageToken: _api_ListPendingBlockSetVersionsPageToken | null | undefined,
  limit: _api_PageSizeLimitHint | null | undefined,
  createdByCurrentUser: boolean,
): Promise<_api_ListPendingBlockSetVersionsResponseV2> {
  return conjureFetch(ctx, `/block-sets/v2/pending/list`, "GET", undefined, {
    marketplaceRid,
    blockSetId,
    pageToken,
    limit,
    createdByCurrentUser,
  });
}
