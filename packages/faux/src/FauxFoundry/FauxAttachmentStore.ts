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

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";

export interface FauxAttachmentInfo
  extends Omit<OntologiesV2.AttachmentV2, "sizeBytes">
{
  buffer: ArrayBuffer;
}

export class FauxAttachmentStore {
  #attachments = new Map<string, FauxAttachmentInfo>();

  registerAttachment(
    attachment: FauxAttachmentInfo,
  ): OntologiesV2.AttachmentV2 {
    this.#attachments.set(attachment.rid, attachment);
    return this.getAttachmentMetadataByRid(attachment.rid);
  }

  getAttachmentMetadataByRid(attachmentRid: string): OntologiesV2.AttachmentV2 {
    const attachment = this.#attachments.get(attachmentRid);
    if (!attachment) {
      throw new OpenApiCallError(
        404,
        {
          errorCode: "NOT_FOUND",
          errorName: "AttachmentNotFound",
          errorInstanceId: "internal",
          parameters: { attachmentRid },
          errorDescription:
            "The requested attachment is not found, or the client token does not have access to it. Attachments that are not attached to any objects are deleted after two weeks. Attachments that have not been attached to an object can only be viewed by the user who uploaded them. Attachments that have been attached to an object can be viewed by users who can view the object.",
        } satisfies OntologiesV2.AttachmentNotFound,
      );
    }

    const { buffer, ...metadata } = attachment;

    return {
      ...metadata,
      sizeBytes: String(buffer.byteLength),
    };
  }

  getAttachmentBuffer(attachmentRid: string): ArrayBuffer {
    const attachment = this.#attachments.get(attachmentRid);
    if (!attachment) {
      throw new OpenApiCallError(
        404,
        {
          errorCode: "NOT_FOUND",
          errorName: "AttachmentNotFound",
          errorInstanceId: "internal",
          parameters: { attachmentRid },
          errorDescription:
            "The requested attachment is not found, or the client token does not have access to it. Attachments that are not attached to any objects are deleted after two weeks. Attachments that have not been attached to an object can only be viewed by the user who uploaded them. Attachments that have been attached to an object can be viewed by users who can view the object.",
        } satisfies OntologiesV2.AttachmentNotFound,
      );
    }
    return attachment.buffer;
  }
}
