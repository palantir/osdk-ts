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

import type { Attachment, Media } from "@osdk/api";
import type { MediaPropertyLocation } from "@osdk/client/unstable-do-not-use";

export type MediaInput = Media | Attachment | MediaPropertyLocation;

export interface ExtractedMediaInfo {
  mediaPropertyLocation: MediaPropertyLocation | undefined;
  mediaObject: Media | Attachment | undefined;
  isTransient: boolean;
}

/**
 * Type predicate to check if input is a Media or Attachment object.
 * Validates both property existence and function types to avoid duck-typing issues.
 */
function isMediaOrAttachment(input: unknown): input is Media | Attachment {
  if (input == null || typeof input !== "object") {
    return false;
  }

  const obj = input as Record<string, unknown>;

  // For Media objects: must have getMediaReference function
  const isMedia = typeof obj.getMediaReference === "function"
    && typeof obj.fetchMetadata === "function";

  // For Attachment objects: must have fetchContents function and rid property
  const isAttachment = typeof obj.fetchContents === "function"
    && typeof obj.rid === "string";

  return isMedia || isAttachment;
}

/**
 * Type predicate to check if input is a MediaPropertyLocation.
 */
function isMediaPropertyLocation(
  input: unknown,
): input is MediaPropertyLocation {
  return input != null
    && typeof input === "object"
    && "objectType" in input
    && "primaryKey" in input
    && "propertyName" in input;
}

/**
 * Extracts coordinates and metadata from various media input types.
 * Handles Media objects, Attachment objects, and direct MediaPropertyLocation.
 */
export function extractMediaCoordinates(
  mediaOrLocation?: MediaInput,
): ExtractedMediaInfo {
  if (!mediaOrLocation) {
    return {
      mediaPropertyLocation: undefined,
      mediaObject: undefined,
      isTransient: false,
    };
  }

  let location: MediaPropertyLocation | undefined;

  if (
    "getMediaSourceLocation" in mediaOrLocation
    && typeof mediaOrLocation.getMediaSourceLocation === "function"
  ) {
    location = mediaOrLocation.getMediaSourceLocation();
  } else if (
    "getAttachmentSourceLocation" in mediaOrLocation
    && typeof mediaOrLocation.getAttachmentSourceLocation === "function"
  ) {
    location = mediaOrLocation.getAttachmentSourceLocation();
  }

  if (location !== undefined) {
    const hasMediaObject = isMediaOrAttachment(mediaOrLocation);
    const isTransient = !location && hasMediaObject;

    return {
      mediaPropertyLocation: location,
      mediaObject: hasMediaObject ? mediaOrLocation : undefined,
      isTransient,
    };
  }

  if (isMediaPropertyLocation(mediaOrLocation)) {
    return {
      mediaPropertyLocation: mediaOrLocation,
      mediaObject: undefined,
      isTransient: false,
    };
  }

  // Handle Media/Attachment objects without a source location (transient)
  // These can still be used directly via fetchMetadata/fetchContents
  if (isMediaOrAttachment(mediaOrLocation)) {
    return {
      mediaPropertyLocation: undefined,
      mediaObject: mediaOrLocation,
      isTransient: true,
    };
  }

  return {
    mediaPropertyLocation: undefined,
    mediaObject: undefined,
    isTransient: false,
  };
}
