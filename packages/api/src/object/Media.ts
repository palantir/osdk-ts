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
   * @example
   * ```ts
   * const equipment = await client(Equipment).fetchOne(12345);
   * const mediaMetadata = await equipment.trainingMaterial?.fetchMetadata();
   * console.log(mediaMetadata?.mediaType, mediaMetadata?.sizeBytes, mediaMetadata?.path);
   * ```
   * @returns the media metadata, including media type, size, and (when available) path
   */
  fetchMetadata(): Promise<MediaMetadata>;
  /**
   * Fetches content of a media reference property
   * @example
   * ```ts
   * const equipment = await client(Equipment).fetchOne(12345);
   * const mediaContent = await equipment.trainingMaterial?.fetchContents();
   * if (mediaContent?.ok) {
   *   const data = await mediaContent.blob();
   * }
   * ```
   * @returns a `Response` whose body contains the media item's binary contents
   */
  fetchContents(): Promise<Response>;
  /**
   * Returns the media reference
   * @example
   * ```ts
   * const equipment = await client(Equipment).fetchOne(12345);
   * const mediaReference = equipment.trainingMaterial?.getMediaReference();
   * ```
   * @returns the underlying `MediaReference` identifying this media item in Foundry
   */
  getMediaReference(): MediaReference;
  getMediaSourceLocation?(): MediaPropertyLocation;
}

/**
 * Location of a media property on an object.
 */
export interface MediaPropertyLocation {
  objectType: string;
  primaryKey: string | number;
  propertyName: string;
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
