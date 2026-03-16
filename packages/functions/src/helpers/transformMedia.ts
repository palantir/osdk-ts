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

import type { Client, MediaReference, TransformOptions } from "@osdk/client";
import {
  MediaTransformationFailedError,
  MediaTransformationTimeoutError,
} from "@osdk/client";
import { MediaSets } from "@osdk/foundry.mediasets";
import type { Transformation } from "@osdk/foundry.mediasets";

/**
 * Submits a transformation job for a media item, polls until completion,
 * and returns the transformed content.
 *
 * @beta
 * @param client - The OSDK client
 * @param mediaReference - A reference to the media item to transform
 * @param transformation - The transformation to apply
 * @param options - Polling options (interval and timeout)
 * @returns The transformed media content as a Response
 * @throws {@link MediaTransformationTimeoutError} if polling exceeds the timeout
 * @throws {@link MediaTransformationFailedError} if the transformation job fails
 */
export async function transformAndWait(
  client: Client,
  mediaReference: MediaReference,
  transformation: Transformation,
  options?: TransformOptions,
): Promise<Response> {
  const pollIntervalMs = options?.pollIntervalMs ?? 3000;
  const pollTimeoutMs = options?.pollTimeoutMs ?? 30000;

  const { mediaSetRid, mediaItemRid } =
    mediaReference.reference.mediaSetViewItem;
  const token = mediaReference.reference.mediaSetViewItem.token;

  const job = await MediaSets.transform(
    client,
    mediaSetRid,
    mediaItemRid,
    { transformation },
    { preview: true },
    token ? { Token: token } : undefined,
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
      token ? { Token: token } : undefined,
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
    token ? { Token: token } : undefined,
  );
}
