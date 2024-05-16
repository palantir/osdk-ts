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

import type { OntologyDefinition } from "@osdk/api";
import { getAttachmentContent } from "@osdk/gateway/requests";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import type { AttachmentsError } from "../errors/index.js";
import {
  AttachmentsErrorHandler,
  handleAttachmentsError,
} from "../errors/index.js";
import type { Result } from "../Result.js";
import { wrapResult } from "./util/wrapResult.js";

export async function getAttachment(
  client: ClientContext<OntologyDefinition<any>>,
  attachmentRid: string,
): Promise<Result<Blob, AttachmentsError>> {
  return wrapResult(
    async () => {
      const response = await getAttachmentContent(
        createOpenApiRequest(client.stack, client.fetch),
        attachmentRid,
      );

      return response as globalThis.Blob;
    },
    e => handleAttachmentsError(new AttachmentsErrorHandler(), e, e.parameters),
  );
}
