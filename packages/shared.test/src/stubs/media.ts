/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  MediaMetadata,
  MediaReference,
} from "@osdk/internal.foundry.core";

export const mediaMetadata: MediaMetadata = {
  path: "file1.txt",
  mediaType: "application/json",
  sizeBytes: "20",
};

export const mediaReference: MediaReference = {
  mimeType: "application/json",
  reference: {
    type: "mediaSetViewItem",
    mediaItemRid: "media-item-rid",
    mediaSetRid: "media-set-rid",
    mediaSetViewRid: "media-set-view-rid",
  },
};

export const localMedia1 = {
  filename: "file1.txt",
};

export const mediaReferenceObjectTypeApi = "mediaObjectType";
export const mediaPropertyName1: string = "mediaReference";
export const mediaPropertyName2: string = "mediaReference1";

export const mediaMetadataRequestHandler: Record<
  string,
  MediaMetadata | undefined
> = {
  [mediaPropertyName1]: mediaMetadata,
  [mediaPropertyName2]: undefined,
};

export const mediaContentRequestHandler: Record<
  string,
  string | {
    content: string;
  } | undefined
> = {
  [mediaPropertyName1]: { content: "Hello World" },
  [mediaPropertyName2]: undefined,
};

export const mediaUploadRequest: Record<string, MediaReference> = {
  [localMedia1.filename]: mediaReference,
};

export const mediaUploadRequestBody: Record<string, Blob> = {
  [localMedia1.filename]: new Blob([
    JSON.stringify({ name: "Hello World" }, null, 2),
  ], {
    type: "application/json",
  }),
};
