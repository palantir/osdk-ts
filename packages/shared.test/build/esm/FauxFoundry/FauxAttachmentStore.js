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

import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";
export class FauxAttachmentStore {
  #attachments = new Map();
  registerAttachment(attachment) {
    this.#attachments.set(attachment.rid, attachment);
    return this.getAttachmentMetadataByRid(attachment.rid);
  }
  getAttachmentMetadataByRid(attachmentRid) {
    const attachment = this.#attachments.get(attachmentRid);
    if (!attachment) {
      throw new OpenApiCallError(404, {
        errorCode: "NOT_FOUND",
        errorName: "AttachmentNotFound",
        errorInstanceId: "internal",
        parameters: {
          attachmentRid
        }
      });
    }
    const {
      buffer,
      ...metadata
    } = attachment;
    return {
      ...metadata,
      sizeBytes: String(buffer.byteLength)
    };
  }
  getAttachmentBuffer(attachmentRid) {
    const attachment = this.#attachments.get(attachmentRid);
    if (!attachment) {
      throw new OpenApiCallError(404, {
        errorCode: "NOT_FOUND",
        errorName: "AttachmentNotFound",
        errorInstanceId: "internal",
        parameters: {
          attachmentRid
        }
      });
    }
    return attachment.buffer;
  }
}
//# sourceMappingURL=FauxAttachmentStore.js.map