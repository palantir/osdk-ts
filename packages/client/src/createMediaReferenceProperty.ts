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
  TransformMediaItemRequest,
  TransformOptions,
} from "@osdk/api";
import {
  MediaTransformationFailedError,
  MediaTransformationTimeoutError,
} from "@osdk/api";
import type { MediaReference as CoreMediaReference } from "@osdk/foundry.core";
import { MediaSets } from "@osdk/foundry.mediasets";
import type { TransformMediaItemRequest as FoundryTransformRequest } from "@osdk/foundry.mediasets";
import * as MediaReferenceProperties from "@osdk/foundry.ontologies/MediaReferenceProperty";
import type { MinimalClient } from "./MinimalClientContext.js";

export class MediaReferencePropertyImpl implements Media {
  #mediaReference: MediaReference;
  #triplet: [string, any, string];
  #client: MinimalClient;

  constructor(args: {
    client: MinimalClient;
    objectApiName: string;
    primaryKey: any;
    propertyName: string;
    mediaReference: CoreMediaReference;
  }) {
    const {
      client,
      objectApiName,
      primaryKey,
      propertyName,
      mediaReference,
    } = args;
    this.#client = client;
    this.#triplet = [objectApiName, primaryKey, propertyName];
    this.#mediaReference = mediaReference;
  }

  public async fetchContents(): Promise<Response> {
    return MediaReferenceProperties.getMediaContent(
      this.#client,
      await this.#client.ontologyRid,
      ...this.#triplet,
      {
        preview: true, // TODO: Can turn this back off when backend is no longer in beta.
      },
    );
  }

  public async fetchMetadata(): Promise<MediaMetadata> {
    const r = await MediaReferenceProperties.getMediaMetadata(
      this.#client,
      await this.#client.ontologyRid,
      ...this.#triplet,
      {
        preview: true, // TODO: Can turn this back off when backend is no longer in beta.
      },
    );
    return {
      path: r.path as string,
      sizeBytes: Number(r.sizeBytes),
      mediaType: r.mediaType,
    };
  }

  public getMediaReference(): MediaReference {
    return this.#mediaReference;
  }

  public async transformAndWait(
    transformation: TransformMediaItemRequest,
    options?: TransformOptions,
  ): Promise<Response> {
    const pollIntervalMs = options?.pollIntervalMs ?? 3000;
    const pollTimeoutMs = options?.pollTimeoutMs ?? 30000;

    const { mediaSetRid, mediaItemRid } =
      this.#mediaReference.reference.mediaSetViewItem;
    const token = this.#mediaReference.reference.mediaSetViewItem.token;

    const job = await MediaSets.transform(
      this.#client,
      mediaSetRid,
      mediaItemRid,
      transformation as FoundryTransformRequest,
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
        this.#client,
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
      this.#client,
      mediaSetRid,
      mediaItemRid,
      jobId,
      { preview: true },
      token ? { Token: token } : undefined,
    );
  }
}
