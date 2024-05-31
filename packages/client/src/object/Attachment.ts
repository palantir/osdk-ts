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

import type {
  Attachment as IAttachment,
  AttachmentUpload as IAttachmentUpload,
} from "@osdk/client.api";

export class Attachment implements IAttachment {
  constructor(public rid: string) {}
}

export class AttachmentUpload implements IAttachmentUpload {
  constructor(public data: ReadableStream, public fileName: string) {}
}

export function isAttachment(o: any): o is Attachment {
  return o instanceof Attachment;
}

export function isAttachmentUpload(o: any): o is AttachmentUpload {
  return o instanceof AttachmentUpload;
}
