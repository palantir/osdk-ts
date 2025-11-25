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
  AttachmentId as _api_AttachmentId,
  BlockSetVersionId as _api_BlockSetVersionId,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Downloads an attachment. The list of attachments for a block set version is included in the response of the
 * getBlockSetVersionDocumentation endpoint. This endpoint uses the default "header" auth, if you need to use
 * "cookie" auth, for example to display the attachment inline in a browser, use `downloadAttachmentWithCookieAuth`
 * instead.
 *
 * Requires the `marketplace:read-local-marketplace` operation on the given marketplaceRid.
 *
 * Throws AttachmentsNotFound if the attachment does not exist or if the user does not have access to it.
 */
export async function downloadAttachment(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetVersionId: _api_BlockSetVersionId,
  attachmentId: _api_AttachmentId,
): Promise<string> {
  return conjureFetch(
    ctx,
    `/block-sets/${marketplaceRid}/version/${blockSetVersionId}/attachments/${attachmentId}`,
    "GET",
    undefined,
    undefined,
    undefined,
    "application/octet-stream",
  );
}
