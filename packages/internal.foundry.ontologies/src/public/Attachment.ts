/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type {
  Attachment,
  AttachmentRid,
  Filename,
} from "@osdk/internal.foundry.core";
import { ContentLength, ContentType } from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _uploadAttachment: $FoundryPlatformMethod<
  ($body: Blob, $queryParams: { filename: Filename }) => Promise<Attachment>
> = [1, "/v1/attachments/upload", 7, "*/*"];

/**
 * Upload an attachment to use in an action. Any attachment which has not been linked to an object via
 * an action within one hour after upload will be removed.
 * Previously mapped attachments which are not connected to any object anymore are also removed on
 * a biweekly basis.
 * The body of the request must contain the binary content of the file and the `Content-Type` header must be `application/octet-stream`.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-write`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-write]
 * URL: /v1/attachments/upload
 */
export function uploadAttachment(
  $ctx: $Client | $ClientContext,
  ...args: [$body: Blob, $queryParams: { filename: Filename }]
): Promise<Attachment> {
  return $foundryPlatformFetch($ctx, _uploadAttachment, ...args);
}

const _getAttachmentContent: $FoundryPlatformMethod<
  (attachmentRid: AttachmentRid) => Promise<Blob>
> = [0, "/v1/attachments/{0}/content", , , "*/*"];

/**
 * Get the content of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/attachments/{attachmentRid}/content
 */
export function getAttachmentContent(
  $ctx: $Client | $ClientContext,
  ...args: [attachmentRid: AttachmentRid]
): Promise<Blob> {
  return $foundryPlatformFetch($ctx, _getAttachmentContent, ...args);
}

const _getAttachment: $FoundryPlatformMethod<
  (attachmentRid: AttachmentRid) => Promise<Attachment>
> = [0, "/v1/attachments/{0}"];

/**
 * Get the metadata of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/attachments/{attachmentRid}
 */
export function getAttachment(
  $ctx: $Client | $ClientContext,
  ...args: [attachmentRid: AttachmentRid]
): Promise<Attachment> {
  return $foundryPlatformFetch($ctx, _getAttachment, ...args);
}
