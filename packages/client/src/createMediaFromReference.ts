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

import type { Media, MediaMetadata, MediaReference } from "@osdk/api";
import { MediaSets } from "@osdk/foundry.mediasets";
import type { MinimalClient } from "./MinimalClientContext.js";

/**
 * Creates a Media object from a MediaReference for query results.
 * Unlike MediaReferencePropertyImpl, this doesn't require object context
 * and directly accesses the media set APIs.
 */
export function createMediaFromReference(
  client: MinimalClient,
  mediaReference: MediaReference,
): Media {
  const { mediaSetRid, mediaItemRid } =
    mediaReference.reference.mediaSetViewItem;
  const token = mediaReference.reference.mediaSetViewItem.token
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- Support legacy readToken for backwards compatibility
    ?? mediaReference.reference.mediaSetViewItem.readToken;

  return {
    async fetchContents(): Promise<Response> {
      return MediaSets.read(
        client,
        mediaSetRid,
        mediaItemRid,
        { preview: true },
        token ? { ReadToken: token } : undefined,
      );
    },

    async fetchMetadata(): Promise<MediaMetadata> {
      const metadata = await MediaSets.metadata(
        client,
        mediaSetRid,
        mediaItemRid,
        { preview: true },
        token ? { ReadToken: token } : undefined,
      );

      // Extract common info from GetMediaItemInfoResponse
      const info = await MediaSets.info(
        client,
        mediaSetRid,
        mediaItemRid,
        { preview: true },
        token ? { ReadToken: token } : undefined,
      );

      // All MediaItemMetadata subtypes have sizeBytes
      const sizeBytes = "sizeBytes" in metadata ? metadata.sizeBytes : 0;

      return {
        path: info.path,
        sizeBytes,
        mediaType: mediaReference.mimeType,
      };
    },

    getMediaReference(): MediaReference {
      return mediaReference;
    },
  };
}
