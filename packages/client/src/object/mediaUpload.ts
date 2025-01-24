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

import type { MediaUpload } from "@osdk/api";
import type { MediaReference } from "@osdk/internal.foundry.core";

export function isMediaUpload(o: any): o is MediaUpload {
  return typeof o === `object`
    && "data" in o
    && "fileName" in o
    && "objectTypeApiName" in o
    && "propertyApiName" in o
    && o.data instanceof Blob;
}

export function isMediaReference(o: any): o is MediaReference {
  return typeof o === `object`
    && typeof o.mimeType === "string"
    && "reference" in o
    && typeof o.reference === "object"
    && o.reference.type === "mediaSetViewItem";
}
