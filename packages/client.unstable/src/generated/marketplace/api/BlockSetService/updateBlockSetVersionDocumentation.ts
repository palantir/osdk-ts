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
  UpdateBlockSetVersionDocumentationRequest
    as _api_UpdateBlockSetVersionDocumentationRequest,
  UpdateBlockSetVersionDocumentationResponse
    as _api_UpdateBlockSetVersionDocumentationResponse,
} from "../__components.js";

/**
 * Update the documentation of a pending block set version.
 *
 * Requires the marketplace:edit-block-set operation on the given marketplaceRid.
 *
 * Throws BlockSetVersionNotPending if the specified block set version is not pending.
 * Throws BlockSetDocumentationSizeLimitExceeded if the size of the free form documentation exceeds 2 MB.
 * Throws AttachmentsNotFound if any of the attachments do not exist.
 *
 * V1 and V2 compatible: Compatible with pending block sets created with `createBlockSetVersion` and
 * `createBlockSetVersionV2`.
 */
export async function updateBlockSetVersionDocumentation(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetVersionId: _api_BlockSetVersionId,
  request: _api_UpdateBlockSetVersionDocumentationRequest,
): Promise<_api_UpdateBlockSetVersionDocumentationResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/${marketplaceRid}/version/${blockSetVersionId}/documentation`,
    "PUT",
    request,
  );
}
