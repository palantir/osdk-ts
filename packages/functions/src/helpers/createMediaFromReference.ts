/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  Client,
  Media,
  MediaMetadata,
  MediaReference,
  TransformOptions,
} from "@osdk/client";
import {
  MediaTransformationFailedError,
  MediaTransformationTimeoutError,
} from "@osdk/client";
import { MediaSets } from "@osdk/foundry.mediasets";
import type { TransformMediaItemRequest as FoundryTransformRequest } from "@osdk/foundry.mediasets";

/**
 * Creates a `Media` object from a `MediaReference`.
 *
 * @beta
 * @param client - The OSDK client
 * @param mediaReference - A reference to the media item
 * @returns A Media object with methods for fetching content, metadata, and transformations
 */
export function createMediaFromReference(
  client: Client,
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
        mediaType: undefined as any, // Media type is not currently returned by the API
      };
    },

    getMediaReference(): MediaReference {
      return mediaReference;
    },

    async transformAndWait(
      transformation: { type: string },
      options?: TransformOptions,
    ): Promise<Response> {
      const pollIntervalMs = options?.pollIntervalMs ?? 3000;
      const pollTimeoutMs = options?.pollTimeoutMs ?? 30000;

      const headerParams = token ? { Token: token } : undefined;

      const job = await MediaSets.transform(
        client,
        mediaSetRid,
        mediaItemRid,
        { transformation } as unknown as FoundryTransformRequest,
        { preview: true },
        headerParams,
      );

      let status = job.status;
      const jobId = job.jobId;

      const deadline = Date.now() + pollTimeoutMs;
      while (status !== "SUCCESSFUL") {
        if (Date.now() >= deadline) {
          throw new MediaTransformationTimeoutError(jobId);
        }
        const statusResponse = await MediaSets.getStatus(
          client,
          mediaSetRid,
          mediaItemRid,
          jobId,
          { preview: true },
          headerParams,
        );
        status = statusResponse.status;
        if (status === "FAILED") {
          throw new MediaTransformationFailedError(jobId);
        }
        if (status !== "SUCCESSFUL") {
          await new Promise(resolve => setTimeout(resolve, pollIntervalMs));
        }
      }

      return MediaSets.getResult(
        client,
        mediaSetRid,
        mediaItemRid,
        jobId,
        { preview: true },
        headerParams,
      );
    },
  };
}
