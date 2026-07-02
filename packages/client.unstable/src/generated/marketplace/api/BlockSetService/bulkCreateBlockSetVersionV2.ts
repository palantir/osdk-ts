/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  BulkCreateBlockSetVersionRequest as _api_BulkCreateBlockSetVersionRequest,
  BulkCreateBlockSetVersionResponse as _api_BulkCreateBlockSetVersionResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Create multiple new block set versions in a single request. Each item in the request list behaves
 * identically to `createBlockSetVersionV2`. All versions are created atomically in a single transaction.
 *
 * Throws `CreateBlockSetInMarketplacePermissionDenied` if the user does not have `marketplace:create-block` on
 * the `marketplaceRid`.
 * Throws `BulkCreateBlockSetVersionRequestTooLarge` if the request contains more than the configured maximum
 * number of items (default 100).
 * Throws the same errors as `createBlockSetVersionV2`, applied per item.
 */
export async function bulkCreateBlockSetVersionV2(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  request: _api_BulkCreateBlockSetVersionRequest
): Promise<_api_BulkCreateBlockSetVersionResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/v2/${marketplaceRid}/versions/bulk`,
    "POST",
    request
  );
}
