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

import type * as _Core from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _upload: $FoundryPlatformMethod<
  (
    $body: Blob,
    $queryParams: { filename: _Core.Filename },
    $headerParams?: { "Content-Type"?: _Core.ContentType },
  ) => Promise<_Core.AttachmentV2>
> = [1, "/v2/ontologies/attachments/upload", 7, "*/*"];

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
 * URL: /v2/ontologies/attachments/upload
 */
export function upload(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: Blob,
    $queryParams: { filename: _Core.Filename },
    $headerParams?: { "Content-Type"?: _Core.ContentType },
  ]
): Promise<_Core.AttachmentV2> {
  const headerParams = {
    ...args[2],
    "Content-Type": args[2]?.["Content-Type"] ?? args[0].type,
    "Content-Length": args[0].size.toString(),
  };

  return $foundryPlatformFetch($ctx, _upload, args[0], args[1], headerParams);
}

const _read: $FoundryPlatformMethod<
  (attachmentRid: _Core.AttachmentRid) => Promise<Blob>
> = [0, "/v2/ontologies/attachments/{0}/content", , , "*/*"];

/**
 * Get the content of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/attachments/{attachmentRid}/content
 */
export function read(
  $ctx: $Client | $ClientContext,
  ...args: [attachmentRid: _Core.AttachmentRid]
): Promise<Blob> {
  return $foundryPlatformFetch($ctx, _read, ...args);
}

const _get: $FoundryPlatformMethod<
  (attachmentRid: _Core.AttachmentRid) => Promise<_Core.AttachmentV2>
> = [0, "/v2/ontologies/attachments/{0}"];

/**
 * Get the metadata of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/attachments/{attachmentRid}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [attachmentRid: _Core.AttachmentRid]
): Promise<_Core.AttachmentV2> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
