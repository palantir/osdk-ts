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

import type { Result } from "../../../client/Result.js";
import type { AttachmentsError } from "../../errors/index.js";

export interface Attachment {
  type: "Attachment";
  attachmentRid: string | undefined;
  /**
   * Get the metadata of an attachment.
   * @deprecated
   */
  getMetadata(): Promise<Result<AttachmentMetadata, AttachmentsError>>;
  /**
   * Read the content of an attachment.
   * @deprecated
   */
  read(): Promise<Result<Blob, AttachmentsError>>;
}

export interface AttachmentMetadata {
  rid: string;
  filename: string;
  sizeBytes: number;
  mediaType: string;
}
