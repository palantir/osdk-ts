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

export interface Media {
  /**
   * Fetches metadata for media reference property
   */
  fetchMetadata(): Promise<MediaMetadata>;
  /**
   * Fetches content of a media reference property
   */
  fetchContents(): Promise<Response>;
  /**
   * Returns the media reference
   */
  getMediaReference(): MediaReference;
  /**
   * Submits a transformation job for the media item, polls until completion,
   * and returns the transformed content.
   *
   * @beta
   * @param transformation - The transformation to apply, from `@osdk/foundry.mediasets`
   * @param options - Polling options (interval and timeout)
   * @returns The transformed media content as a Response
   * @throws {@link MediaTransformationTimeoutError} if polling exceeds the timeout
   * @throws {@link MediaTransformationFailedError} if the transformation job fails
   */
  transformAndWait(
    transformation: { type: string },
    options?: TransformOptions,
  ): Promise<Response>;
}

/**
 * Options for polling a media transformation job.
 */
export interface TransformOptions {
  /** Milliseconds between status polls. Defaults to 3000. */
  pollIntervalMs?: number;
  /** Maximum milliseconds to wait before timing out. Defaults to 30000. */
  pollTimeoutMs?: number;
}

/**
 * Unique identifier of a media item in Foundry.
 */
export interface MediaReference {
  mimeType: string;
  reference: {
    type: "mediaSetViewItem";
    mediaSetViewItem: {
      mediaItemRid: string;
      mediaSetRid: string;
      mediaSetViewRid: string;
      token?: string;
      /** @deprecated Use `token` instead */
      readToken?: string;
    };
  };
}

/**
 * Object for uploading Media
 */
export interface MediaUpload {
  readonly fileName: string;
  readonly data: Blob;
}

/**
 * Metadata of a media item
 */
export interface MediaMetadata {
  path?: string;
  sizeBytes: number;
  mediaType: string;
}
