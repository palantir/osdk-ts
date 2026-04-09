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

import type { Client, MediaReference, MediaUpload } from "@osdk/client";
import { MediaSets } from "@osdk/foundry.mediasets";

export async function uploadMedia(
  client: Client,
  mediaUpload: MediaUpload,
): Promise<MediaReference> {
  const gatewayMediaRef = await MediaSets.uploadMedia(
    client,
    mediaUpload.data,
    {
      filename: mediaUpload.fileName,
      preview: true,
    },
  );

  return {
    mimeType: gatewayMediaRef.mimeType,
    reference: {
      type: "mediaSetViewItem",
      mediaSetViewItem: {
        mediaItemRid: gatewayMediaRef.reference.mediaSetViewItem.mediaItemRid,
        mediaSetRid: gatewayMediaRef.reference.mediaSetViewItem.mediaSetRid,
        mediaSetViewRid:
          gatewayMediaRef.reference.mediaSetViewItem.mediaSetViewRid,
        token: gatewayMediaRef.reference.mediaSetViewItem.token,
        readToken: gatewayMediaRef.reference.mediaSetViewItem.token,
      },
    },
  };
}
