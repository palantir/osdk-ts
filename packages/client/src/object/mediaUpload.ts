/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { MediaReference } from "@osdk/api";

export function isMediaReference(o: any): o is MediaReference {
  return typeof o === `object`
    && typeof o.mimeType === "string"
    && "reference" in o
    && typeof o.reference === "object"
    && o.reference.type === "mediaSetViewItem"
    && "mediaSetViewItem" in o.reference
    && typeof o.reference.mediaSetViewItem === "object"
    && typeof o.reference.mediaSetViewItem.mediaSetRid === "string"
    && typeof o.reference.mediaSetViewItem.mediaSetViewRid === "string"
    && typeof o.reference.mediaSetViewItem.mediaItemRid === "string";
}
