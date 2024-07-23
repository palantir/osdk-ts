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
  AttachmentRid,
  AttachmentV2,
  ContentLength,
  ContentType,
  Filename,
} from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _uploadAttachmentV2: $FoundryPlatformMethod<
  (
    $body: Blob,
    $queryParams: { filename: Filename },
    $headerParams: {
      "Content-Length": ContentLength;
      "Content-Type": ContentType;
    },
  ) => Promise<AttachmentV2>
> = [1, "/v2/ontologies/attachments/upload", 7, "*/*"];

/**
 * Upload an attachment to use in an action. Any attachment which has not been linked to an object via
 * an action within one hour after upload will be removed.
 * Previously mapped attachments which are not connected to any object anymore are also removed on
 * a biweekly basis.
 * The body of the request must contain the binary content of the file and the `Content-Type` header must be `application/octet-stream`.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:write-data`.
 *
 * Required Scopes: [api:write-data]
 * URL: /v2/ontologies/attachments/upload
 */
export function uploadAttachmentV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: Blob,
    $queryParams: { filename: Filename },
    $headerParams: {
      "Content-Length": ContentLength;
      "Content-Type": ContentType;
    },
  ]
): Promise<AttachmentV2> {
  return $foundryPlatformFetch($ctx, _uploadAttachmentV2, ...args);
}

const _getAttachmentContentV2: $FoundryPlatformMethod<
  (attachmentRid: AttachmentRid) => Promise<Blob>
> = [0, "/v2/ontologies/attachments/{0}/content", , , "*/*"];

/**
 * Get the content of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/attachments/{attachmentRid}/content
 */
export function getAttachmentContentV2(
  $ctx: $Client | $ClientContext,
  ...args: [attachmentRid: AttachmentRid]
): Promise<Blob> {
  return $foundryPlatformFetch($ctx, _getAttachmentContentV2, ...args);
}

const _getAttachmentV2: $FoundryPlatformMethod<
  (attachmentRid: AttachmentRid) => Promise<AttachmentV2>
> = [0, "/v2/ontologies/attachments/{0}"];

/**
 * Get the metadata of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/attachments/{attachmentRid}
 */
export function getAttachmentV2(
  $ctx: $Client | $ClientContext,
  ...args: [attachmentRid: AttachmentRid]
): Promise<AttachmentV2> {
  return $foundryPlatformFetch($ctx, _getAttachmentV2, ...args);
}
