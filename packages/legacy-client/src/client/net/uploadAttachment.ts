/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { uploadAttachment as gatewayUploadAttachment } from "@osdk/gateway/requests";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import type { Attachment } from "../baseTypes/index.js";
import { AttachmentProperty } from "../baseTypes/index.js";
import { handleAttachmentsError } from "../errors/handlers/ErrorHandlers.js";
import type { AttachmentsError } from "../errors/index.js";
import { AttachmentsErrorHandler } from "../errors/index.js";
import type { Result } from "../Result.js";
import { wrapResult } from "./util/wrapResult.js";

export function uploadAttachment(
  client: ClientContext<any>,
  filename: string,
  data: Blob,
): Promise<Result<Attachment, AttachmentsError>> {
  return wrapResult(
    async () => {
      const response = await gatewayUploadAttachment(
        createOpenApiRequest(client.stack, client.fetch, undefined),
        data,
        {
          filename,
        },
        {
          "Content-Length": data.size,
          "Content-Type": data.type,
        },
      );
      return AttachmentProperty(client, response.rid);
    },
    e => handleAttachmentsError(new AttachmentsErrorHandler(), e, e.parameters),
  );
}
