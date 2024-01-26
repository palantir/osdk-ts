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
import type { ClientContext } from "@osdk/shared.net";
import { uploadAttachment } from "../../../client/net/uploadAttachment";
import type { Result } from "../../../client/Result";
import type { AttachmentsError } from "../../errors";
import type { Attachment } from "./Attachment";

export interface Attachments {
  upload(
    fileName: string,
    data: Blob,
  ): Promise<Result<Attachment, AttachmentsError>>;
}

export const Attachments = (
  clientCtx: ClientContext<OntologyDefinition<any>>,
) => {
  return {
    upload(fileName: string, data: Blob) {
      return uploadAttachment(clientCtx, fileName, data);
    },
  };
};
