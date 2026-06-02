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

import type { MediaItemMetadata } from "./Media.js";

/**
 * Type-guard helpers for narrowing `MediaItemMetadata`. Mirrors the tsv1 `is*` guards
 * (`isDocumentMetadata`, `isImageryMetadata`, etc.) from the functions-typescript-runtime
 * `MediaReference` family. After narrowing, all variant-specific fields are accessible with
 * full IntelliSense (no cast required).
 */

export function isDocumentMediaItemMetadata(
  metadata: MediaItemMetadata,
): metadata is Extract<MediaItemMetadata, { type: "document" }> {
  return metadata.type === "document";
}

export function isImageryMediaItemMetadata(
  metadata: MediaItemMetadata,
): metadata is Extract<MediaItemMetadata, { type: "imagery" }> {
  return metadata.type === "imagery";
}

export function isAudioMediaItemMetadata(
  metadata: MediaItemMetadata,
): metadata is Extract<MediaItemMetadata, { type: "audio" }> {
  return metadata.type === "audio";
}

export function isVideoMediaItemMetadata(
  metadata: MediaItemMetadata,
): metadata is Extract<MediaItemMetadata, { type: "video" }> {
  return metadata.type === "video";
}

export function isDicomMediaItemMetadata(
  metadata: MediaItemMetadata,
): metadata is Extract<MediaItemMetadata, { type: "dicom" }> {
  return metadata.type === "dicom";
}

export function isEmailMediaItemMetadata(
  metadata: MediaItemMetadata,
): metadata is Extract<MediaItemMetadata, { type: "email" }> {
  return metadata.type === "email";
}

export function isModel3dMediaItemMetadata(
  metadata: MediaItemMetadata,
): metadata is Extract<MediaItemMetadata, { type: "model3d" }> {
  return metadata.type === "model3d";
}

export function isSpreadsheetMediaItemMetadata(
  metadata: MediaItemMetadata,
): metadata is Extract<MediaItemMetadata, { type: "spreadsheet" }> {
  return metadata.type === "spreadsheet";
}

export function isUntypedMediaItemMetadata(
  metadata: MediaItemMetadata,
): metadata is Extract<MediaItemMetadata, { type: "untyped" }> {
  return metadata.type === "untyped";
}
