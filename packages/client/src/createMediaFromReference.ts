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
  Media,
  MediaMetadata,
  MediaReference,
  TransformOptions,
} from "@osdk/api";
import { MediaSets } from "@osdk/foundry.mediasets";
import type { MinimalClient } from "./MinimalClientContext.js";
import { transformAndWaitInternal } from "./util/transformAndWaitInternal.js";

/**
 * @internal
 * Creates a Media object from a MediaReference for query results.
 * Unlike MediaReferencePropertyImpl, this doesn't require object context
 * and directly accesses the media set APIs. This is intended for MediaReferences returned
 * from query results or to be used by the functions runtime,
 */
export function createMediaFromReference(
  client: MinimalClient,
  mediaReference: MediaReference,
): Media {
  const { mediaSetRid, mediaItemRid } =
    mediaReference.reference.mediaSetViewItem;
  const token = mediaReference.reference.mediaSetViewItem.token;
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

      const info = await MediaSets.info(
        client,
        mediaSetRid,
        mediaItemRid,
        { preview: true },
        token ? { ReadToken: token } : undefined,
      );

      return {
        path: info.path,
        sizeBytes: metadata.sizeBytes,
        mediaType: undefined as any, // Media type is not currently returned by the API, so we return undefined here. This can be updated when the API returns media type.
      };
    },

    getMediaReference(): MediaReference {
      return mediaReference;
    },

    async transformAndWait(
      transformation: { type: string },
      options?: TransformOptions,
    ): Promise<Response> {
      return transformAndWaitInternal(
        client,
        mediaSetRid,
        mediaItemRid,
        transformation,
        token,
        options,
      );
    },
  };
}
