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
   * Fetches type-specific metadata for this media item, including fields like page count for
   * documents, dimensions for imagery, duration for audio/video, etc.
   *
   * Returns a `MediaFullMetadata` wrapper around a `MediaItemMetadata` discriminated union. Narrow
   * on `result.itemMetadata.type` (or use the `is*MediaItemMetadata` helpers) to access
   * variant-specific fields. The full per-variant shape matches `MediaItemMetadata` from
   * `@osdk/foundry.mediasets`.
   *
   * Backed by the `@beta` `MediaSets.metadata` platform endpoint — the variant union and
   * per-variant fields may evolve. The endpoint is per-media-item and does not accept a media set
   * view RID, so view-level metadata overrides are not reachable through this method.
   *
   * Optional because not every `Media` implementation can resolve a media set view (e.g.
   * forward-compatible custom implementations). Backed by `MediaSets.metadata` for both
   * ontology-backed and reference-backed media.
   */
  fetchFullMetadata?(): Promise<MediaFullMetadata>;
  /**
   * Fetches content of a media reference property
   */
  fetchContents(): Promise<Response>;
  /**
   * Returns the media reference
   */
  getMediaReference(): MediaReference;
  /**
   * Returns the source location of this media (object type, primary key, property name).
   *
   * Optional because not all media has a source location (e.g., transient/uploaded media).
   */
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

/**
 * Wrapper around the type-specific `MediaItemMetadata` discriminated union returned by
 * `Media.fetchFullMetadata`. The wrapper exists so optional sibling fields (e.g. attribution,
 * source view) can be added later without breaking callers; mirrors the python OSDK shape.
 */
export interface MediaFullMetadata {
  /**
   * Type-specific metadata. Narrow on `itemMetadata.type` (or use the `is*MediaItemMetadata`
   * helpers) to access variant-specific fields.
   */
  itemMetadata: MediaItemMetadata;
}

/**
 * Type-specific metadata for a media item, discriminated by `type`.
 *
 * **Discriminator-trimmed mirror.** This type intentionally surfaces only the `type`
 * discriminator and `sizeBytes` (where it is required on the platform schema). Variant-specific
 * fields — page counts, dimensions, audio specifications, DICOM data elements, email
 * attachments, model3d format, etc. — are NOT mirrored here. To access them, import the
 * per-variant interface from `@osdk/foundry.mediasets` (e.g. `AudioMediaItemMetadata`) and cast
 * the narrowed value:
 *
 * ```ts
 * import type { AudioMediaItemMetadata as PlatformAudio } from "@osdk/foundry.mediasets";
 * const { itemMetadata } = await media.fetchFullMetadata!();
 * if (isAudioMediaItemMetadata(itemMetadata)) {
 *   const audio = itemMetadata as PlatformAudio;
 *   audio.specification.durationSeconds;
 * }
 * ```
 *
 * The trimmed mirror exists so `@osdk/api` doesn't take a direct dependency on
 * `@osdk/foundry.mediasets` (matches the established pattern for `MediaReference` and
 * `ActionResults`). Trimming, rather than full-mirroring, keeps the maintenance burden bounded
 * as the platform schema evolves.
 *
 * Note: mio currently supports a `streamingVideo` variant internally, but it is not yet exposed
 * on the platform API and is therefore absent here. When the platform API adds it, the variant
 * will be appended here as a non-breaking change.
 */
export type MediaItemMetadata =
  | DocumentMediaItemMetadata
  | ImageryMediaItemMetadata
  | AudioMediaItemMetadata
  | VideoMediaItemMetadata
  | DicomMediaItemMetadata
  | EmailMediaItemMetadata
  | Model3dMediaItemMetadata
  | SpreadsheetMediaItemMetadata
  | UntypedMediaItemMetadata;

/**
 * Discriminator-trimmed mirror. Variant-specific fields (e.g. `format`, `pages`, `title`,
 * `author`) live on the corresponding interface in `@osdk/foundry.mediasets`.
 */
export interface DocumentMediaItemMetadata {
  type: "document";
  sizeBytes: number;
}

/**
 * Discriminator-trimmed mirror. Variant-specific fields (e.g. `format`, `dimensions`, `bands`,
 * `attributes`, `geo`) live on the corresponding interface in `@osdk/foundry.mediasets`. Note:
 * the platform schema does not require `sizeBytes` on imagery; the field is absent here.
 */
export interface ImageryMediaItemMetadata {
  type: "imagery";
}

/**
 * Discriminator-trimmed mirror. Variant-specific fields (e.g. `format`, `specification`) live on
 * the corresponding interface in `@osdk/foundry.mediasets`.
 */
export interface AudioMediaItemMetadata {
  type: "audio";
  sizeBytes: number;
}

/**
 * Discriminator-trimmed mirror. Variant-specific fields (e.g. `format`, `specification`) live on
 * the corresponding interface in `@osdk/foundry.mediasets`.
 */
export interface VideoMediaItemMetadata {
  type: "video";
  sizeBytes: number;
}

/**
 * Discriminator-trimmed mirror. Variant-specific fields (e.g. `metaInformation`, `mediaType`,
 * `commonDataElements`, `otherDataElements`) live on the corresponding interface in
 * `@osdk/foundry.mediasets`.
 */
export interface DicomMediaItemMetadata {
  type: "dicom";
  sizeBytes: number;
}

/**
 * Discriminator-trimmed mirror. Variant-specific fields (e.g. `format`, `sender`, `to`, `cc`,
 * `attachments`) live on the corresponding interface in `@osdk/foundry.mediasets`.
 */
export interface EmailMediaItemMetadata {
  type: "email";
  sizeBytes: number;
}

/**
 * Discriminator-trimmed mirror. Variant-specific fields (e.g. `format`, `modelType`) live on the
 * corresponding interface in `@osdk/foundry.mediasets`.
 */
export interface Model3dMediaItemMetadata {
  type: "model3d";
  sizeBytes: number;
}

/**
 * Discriminator-trimmed mirror. Variant-specific fields (e.g. `format`, `sheetNames`, `title`,
 * `author`) live on the corresponding interface in `@osdk/foundry.mediasets`.
 */
export interface SpreadsheetMediaItemMetadata {
  type: "spreadsheet";
  sizeBytes: number;
}

export interface UntypedMediaItemMetadata {
  type: "untyped";
  sizeBytes: number;
}
