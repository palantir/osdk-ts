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

import type { AttachmentUpload } from "@osdk/api";

export function isAttachmentUpload(o: any): o is AttachmentUpload {
  return typeof o === "object"
    && o != null
    && "name" in o
    && typeof o.name === "string"
    && "data" in o
    && o.data instanceof Blob
    && !("fileName" in o);
}

export function isAttachmentFile(
  o: any,
): o is Blob & { readonly name: string } {
  return typeof o === "object" && o instanceof Blob && "name" in o;
}

export function createAttachmentUpload(
  data: Blob,
  name: string,
): AttachmentUpload {
  return { data, name };
}
