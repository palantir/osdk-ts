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
  FinalizeBlockSetVersionRequest as _api_FinalizeBlockSetVersionRequest,
  FinalizeBlockSetVersionResponseV2 as _api_FinalizeBlockSetVersionResponseV2,
} from "../__components.js";

/**
 * Sends a synchronous request to begin finalization of a pending block set version. This also finalizes all the
 * individual blocks in the block set, and eny external recommendations. This locks e.g. any documentation
 * changes and marks the block set version as ready to ship.
 *
 * Use `getBlockSetVersionStatusV2` to track the status during finalization.
 *
 * Throws `BlockSetVersionNotFound` if the block set does not exist or if the user does not have
 * `marketplace:read-local-marketplace` on the store it is in.
 * Throws `EditBlockSetVersionInMarketplacePermissionDenied` if the user does not have
 * `marketplace:edit-block-set` on the store that the block set version is in..
 *
 * Throws `BlockSetVersionNotPending` if the specified block set version is not pending.
 * Throws `BlockSetVersionStatusNotCompatibleWithFinalize` if the status of the pending block set is not able
 * to process a finalize request (`BlockSetVersionStatusResponseV2` is not `idle`).
 * Throws `BlockSetFinalizedWithErroredOutputSpecs` if the pending block set has any output specs that did not
 * successfully materialize.
 * Throws `BlockSetFinalizedWithEmptySpecs` if the block set version has no output specs.
 * Throws `BlockSetVersionConflict` if the finalized semver already exists for the block set and marketplace.
 */
export async function finalizeBlockSetVersionV2(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
  request: _api_FinalizeBlockSetVersionRequest,
): Promise<_api_FinalizeBlockSetVersionResponseV2> {
  return conjureFetch(
    ctx,
    `/block-sets/v2/pending/version/${blockSetVersionId}/finalize`,
    "POST",
    request,
  );
}
