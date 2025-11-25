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
  Filename as _api_Filename,
  MarketplaceRid as _api_MarketplaceRid,
  MimeType as _api_MimeType,
  UploadAttachmentResponse as _api_UploadAttachmentResponse,
} from "../__components.js";

/**
 * Upload an attachment to a pending block set version. If the attachment is not a thumbnail, it will be
 * appended to the list of attachments returned by `BlockSetService::getBlockSetVersionDocumentation`.
 * If it is a thumbnail, it will be added to the thumbnail field returned by
 * `BlockSetService::getBlockSetVersionDocumentation`.
 *
 * Returns a unique ID that identifies the attachment.
 *
 * Requires the marketplace:edit-block-set and the marketplace:upload-attachment operations on the given
 * marketplaceRid.
 *
 * Throws BlockSetVersionNotPending if the specified block set version is not pending.
 * Throws UnsupportedAttachmentType if mimeType is not supported. In the case of an attachment, the
 * supported mimeTypes are image/jpeg, image/png, image/gif, application/pdf, video/mp4, or video/quicktime.
 * In the case of a thumbnail, the supported mimeTypes are image/jpeg, image/png, or image/gif.
 * Throws TooManyAttachments if the block set already has 10 attachments.
 * Throws FileSizeLimitExceeded if the file is larger than 5 MB.
 */
export async function uploadAttachment(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetVersionId: _api_BlockSetVersionId,
  filename: _api_Filename,
  mimeType: _api_MimeType,
  isThumbnail: boolean | null | undefined,
  content: string,
): Promise<_api_UploadAttachmentResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/${marketplaceRid}/version/${blockSetVersionId}/attachments`,
    "POST",
    content,
    { filename, mimeType, isThumbnail },
    "application/octet-stream",
  );
}
