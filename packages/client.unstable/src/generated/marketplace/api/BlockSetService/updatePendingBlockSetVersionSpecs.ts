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
  UpdatePendingBlockSetVersionSpecsRequest
    as _api_UpdatePendingBlockSetVersionSpecsRequest,
  UpdatePendingBlockSetVersionSpecsResponse
    as _api_UpdatePendingBlockSetVersionSpecsResponse,
} from "../__components.js";

/**
 * Updates the specs in the pending block set version, overwrites the existing specs in the request.
 * The specs will be used to generate shapes for the block set, this materialization happens
 * asynchronously. Query `getBlockSetVersionStatusV2` to get the status of the materialization.
 *
 * Throws `BlockSetVersionNotFound` if the block set does not exist or if the user does not have
 * `marketplace:read-local-marketplace` on the store it is in.
 * Throws `EditBlockSetVersionInMarketplacePermissionDenied` if the user does not have
 * `marketplace:edit-block-set` on the store that the block set version is in.
 * Throws `BlockSetVersionNotPending` if the specified block set version is not pending.
 * Throws `BlockSetVersionNotInEditableState`  if the status of the pending block set is not accepting updates
 * (`BlockSetVersionStatusResponseV2` is not idle or materializing).
 */
export async function updatePendingBlockSetVersionSpecs(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
  request: _api_UpdatePendingBlockSetVersionSpecsRequest,
): Promise<_api_UpdatePendingBlockSetVersionSpecsResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/v2/pending/version/${blockSetVersionId}/specs`,
    "PUT",
    request,
  );
}
