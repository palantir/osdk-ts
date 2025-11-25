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
  BlockId as _api_BlockId,
  CreateBlockVersionRequest as _api_CreateBlockVersionRequest,
  CreateBlockVersionResponse as _api_CreateBlockVersionResponse,
} from "../__components.js";

/**
 * Create a new version of the block specified by `blockId`.
 * Since creating this block and storing the required data may take some time, this creation is asynchronous.
 * Creation status can be polled via `getBlockVersionCreationStatus`.
 *
 * Read through the documentation of `finalizeBlockVersion` to understand the full lifecycle required to create
 * a block version.
 *
 * The `createBlockVersionRequest` will be validated synchronously to ensure it satisfies invariants before the
 * asynchronous block creation starts, else we throw an error. See `createBlockVersionRequest` for details on the
 * block validation errors.
 *
 * ### Block internal identifiers
 *
 * All `id.BlockInternalId`'s MUST be kept constant throughout different versions to be matched up during
 * upgrades, particularly the ones identifying block shapes. Use the `BlockService.getLatestOwnedBlockVersion`
 * endpoint and the `BlockV1.knownIdentifiers` field to get the previous version's mappings, and write any
 * changes to this versions known identifiers map.
 *
 * Note that this known identifier map purely exists to help services implement their logic. Services requiring
 * larger/more complex maps can use the data repository attached to the block version to retrieve/store the
 * mapping per version.
 *
 * User should have the "marketplace:create-block" permission on the MarketplaceRid. This operation
 * is typically granted to users with the Editor role.
 */
export async function createBlockVersion(
  ctx: ConjureContext,
  blockId: _api_BlockId,
  createBlockVersionRequest: _api_CreateBlockVersionRequest,
): Promise<_api_CreateBlockVersionResponse> {
  return conjureFetch(
    ctx,
    `/blocks/${blockId}`,
    "POST",
    createBlockVersionRequest,
  );
}
