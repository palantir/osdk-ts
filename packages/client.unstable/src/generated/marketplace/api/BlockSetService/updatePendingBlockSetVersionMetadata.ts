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
  UpdatePendingBlockSetVersionMetadataRequest
    as _api_UpdatePendingBlockSetVersionMetadataRequest,
  UpdatePendingBlockSetVersionMetadataResponse
    as _api_UpdatePendingBlockSetVersionMetadataResponse,
} from "../__components.js";

/**
 * Synchronous update of metadata for the pending block set version. Note documentation, changelog and output
 * specs are updated separately. Accepts updates in all statuses as long as the block set verison is pending and
 * not finalized.
 *
 * Throws `BlockSetVersionNotFound` if the block set does not exist or if the user does not have
 * `marketplace:read-local-marketplace` on the store it is in.
 * Throws `EditBlockSetVersionInMarketplacePermissionDenied` if the user does not have
 * `marketplace:edit-block-set` on the provided `marketplaceRid`.
 * Throws `BlockSetVersionNotPending` if the specified block set version is not pending.
 * Throws `BlockSetVersionNotInEditableState` if the status of the pending block set is not accepting updates
 * (`BlockSetVersionStatusResponseV2` is not `idle` or `materializing`).
 *
 * V2 compatible: Compatible with pending block sets created with `createBlockSetVersionV2`.
 */
export async function updatePendingBlockSetVersionMetadata(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
  request: _api_UpdatePendingBlockSetVersionMetadataRequest,
): Promise<_api_UpdatePendingBlockSetVersionMetadataResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/v2/pending/version/${blockSetVersionId}/metadata`,
    "PUT",
    request,
  );
}
