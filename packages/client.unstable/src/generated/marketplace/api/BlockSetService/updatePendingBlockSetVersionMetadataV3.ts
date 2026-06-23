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
  BlockSetVersionId as _api_BlockSetVersionId,
  UpdatePendingBlockSetVersionMetadataRequestV3
    as _api_UpdatePendingBlockSetVersionMetadataRequestV3,
  UpdatePendingBlockSetVersionMetadataResponseV3
    as _api_UpdatePendingBlockSetVersionMetadataResponseV3,
} from "../__components.js";

/**
 * Partial (PATCH-style) update of metadata for a pending block set version. Only fields present in the request
 * are updated; absent fields are left unchanged. Documentation, changelog, and output spec updates have
 * dedicated endpoints and are not supported by this endpoint. Can be called for any pending block set version
 * so long as it has not been finalized.
 *
 * Throws `BlockSetVersionNotFound` if the block set does not exist or if the user does not have
 * `marketplace:read-local-marketplace` on the store it is in.
 * Throws `EditBlockSetVersionInMarketplacePermissionDenied` if the user does not have
 * `marketplace:edit-block-set` on the provided `marketplaceRid`.
 * Throws `BlockSetVersionNotPending` if the specified block set version is not pending.
 * Throws `BlockSetVersionNotInEditableState` if the status of the pending block set is not accepting updates
 * (`BlockSetVersionStatusResponse` is not `idle` or `materializing`).
 */
export async function updatePendingBlockSetVersionMetadataV3(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
  request: _api_UpdatePendingBlockSetVersionMetadataRequestV3,
): Promise<_api_UpdatePendingBlockSetVersionMetadataResponseV3> {
  return conjureFetch(
    ctx,
    `/block-sets/v3/pending/version/${blockSetVersionId}/metadata`,
    "PUT",
    request,
  );
}
