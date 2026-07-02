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
  BatchUpdatePendingBlockSetVersionMetadataRequestV3 as _api_BatchUpdatePendingBlockSetVersionMetadataRequestV3,
  BatchUpdatePendingBlockSetVersionMetadataResponseV3 as _api_BatchUpdatePendingBlockSetVersionMetadataResponseV3,
} from "../__components.js";

/**
 * Update metadata for multiple pending block set versions in a single request.
 * Each item behaves identically to `updatePendingBlockSetVersionMetadataV2`.
 * All updates are applied atomically in a single transaction.
 *
 * Throws `EditBlockSetVersionInMarketplacePermissionDenied` if the user does not have
 * `marketplace:edit-block-set` on the `marketplaceRid`.
 * Throws `BatchUpdatePendingBlockSetVersionMetadataRequestTooLarge` if the request
 * contains more than the configured maximum number of items.
 * Throws the same errors as `updatePendingBlockSetVersionMetadataV2`, applied per item.
 */
export async function batchUpdatePendingBlockSetVersionMetadataV3(
  ctx: ConjureContext,
  request: _api_BatchUpdatePendingBlockSetVersionMetadataRequestV3
): Promise<_api_BatchUpdatePendingBlockSetVersionMetadataResponseV3> {
  return conjureFetch(
    ctx,
    `/block-sets/v3/pending/versions/metadata/batchUpdate`,
    "POST",
    request
  );
}
