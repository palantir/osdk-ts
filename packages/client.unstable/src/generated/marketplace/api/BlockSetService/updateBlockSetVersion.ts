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
  MarketplaceRid as _api_MarketplaceRid,
  UpdateBlockSetVersionRequest as _api_UpdateBlockSetVersionRequest,
  UpdateBlockSetVersionResponse as _api_UpdateBlockSetVersionResponse,
} from "../__components.js";

/**
 * Update a pending block set version.
 *
 * Requires the marketplace:edit-block-set operation on the given marketplaceRid.
 *
 * Throws `BlockSetVersionNotPending` if the specified block set version is not pending.
 * Throws `BlockSetVersionNotInEditableState` if the status of the pending block set is not accepting updates
 * (`BlockSetVersionStatusResponse` is not pending).
 *
 * V1 compatible: Compatible with pending block sets created with `createBlockSetVersion`.
 */
export async function updateBlockSetVersion(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetVersionId: _api_BlockSetVersionId,
  request: _api_UpdateBlockSetVersionRequest,
): Promise<_api_UpdateBlockSetVersionResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/${marketplaceRid}/version/${blockSetVersionId}`,
    "POST",
    request,
  );
}
