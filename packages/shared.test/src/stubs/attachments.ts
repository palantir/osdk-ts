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

import type { AttachmentV2 } from "@osdk/gateway/types";

export const attachmentMetadata: AttachmentV2 = {
  filename: "file1.txt",
  mediaType: "application/json",
  sizeBytes: 18,
  rid: "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
};

export const localAttachment1 = {
  filename: "file1.txt",
};

export const localAttachment2 = {
  filename: "",
};

export const attachmentPropertyName1: string = "attachment";
export const attachmentPropertyName2: string = "attachment2";

export const attachmentUploadRequest = {
  [localAttachment1.filename]: attachmentMetadata,
  [localAttachment2.filename]: undefined,
};

export const attachmentUploadRequestBody = {
  [localAttachment1.filename]: new Blob([
    JSON.stringify({ name: "Hello World" }, null, 2),
  ], {
    type: "application/json",
  }),
};

export const attachmentMetadataRequest = {
  [attachmentPropertyName1]: attachmentMetadata,
  [attachmentPropertyName2]: undefined,
  [attachmentMetadata.rid]: attachmentMetadata,
};

export const attachmentContentRequest = {
  [attachmentPropertyName1]: "Hello World",
  [attachmentPropertyName2]: undefined,
  [attachmentMetadata.rid]: { name: "Hello World 2" },
};
