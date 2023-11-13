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

import type { OntologyDefinition, ThinClient } from "@osdk/api";
import { uploadAttachment } from "../../ontologyProvider/calls/uploadAttachment";
import type { AttachmentsError } from "../../ontologyProvider/Errors";
import type { Result } from "../../ontologyProvider/Result";
import type { Attachment } from "./Attachment";

export interface Attachments {
  upload(
    fileName: string,
    data: Blob,
  ): Promise<Result<Attachment, AttachmentsError>>;
}

export const Attachments = (
  thinClient: ThinClient<OntologyDefinition<any>>,
) => {
  return {
    upload(fileName: string, data: Blob) {
      return uploadAttachment(thinClient, fileName, data);
    },
  };
};
