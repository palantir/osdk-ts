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

import type { ThinClient } from "@osdk/api";
import { getAttachment } from "../../ontologyProvider/calls/getAttachment";
import { getAttachmentMetadata } from "../../ontologyProvider/calls/getAttachmentMetadata";
import type { Attachment } from "./Attachment";

export function isAttachment(obj: any): obj is Attachment {
  return obj?.type === "Attachment";
}

export const AttachmentProperty = (
  thinClient: ThinClient<any>,
  attachmentRid: string,
): Attachment => {
  return {
    attachmentRid: attachmentRid,
    type: "Attachment" as const,
    getMetadata() {
      return getAttachmentMetadata(thinClient, attachmentRid);
    },
    read() {
      return getAttachment(thinClient, attachmentRid);
    },
  };
};
