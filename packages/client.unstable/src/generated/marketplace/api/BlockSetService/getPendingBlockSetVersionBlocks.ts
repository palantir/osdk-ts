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
  GetPendingBlockSetVersionBlocksResponse
    as _api_GetPendingBlockSetVersionBlocksResponse,
} from "../__components.js";

/**
 * Get the blocks of a pending block set version. These blocks may be in a finalized or pending state.
 *
 * Used to render block shape validation errors. This will not be needed when validation errors are migrated to
 * use block set shapes, after which this endpoint will be deprecated and `getBlockSetShapes` will be sufficient.
 *
 * Throws `BlockSetVersionNotFound` if the block set does not exist or if the user does not have
 * `marketplace:read-local-marketplace` on the store it is in.
 * Throws `BlockSetVersionNotPending` if the specified block set version is not pending.
 * Throws `BlockSetVersionStatusInitializing`  if the status of the pending block set is initializing and the
 * block metadata is not available yet.
 *
 * V2 compatible: Compatible with pending block sets created with `createBlockSetVersionV2`.
 */
export async function getPendingBlockSetVersionBlocks(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
): Promise<_api_GetPendingBlockSetVersionBlocksResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/v2/pending/version/${blockSetVersionId}/blocks`,
    "GET",
  );
}
