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

import type { Attachment, Media, MediaMetadata } from "@osdk/api";
import type {
  MediaPropertyLocation,
  ObservableClient,
} from "@osdk/client/unstable-do-not-use";

export interface MediaFetchOptions {
  preview?: boolean;
}

/**
 * Fetches media metadata from either a media object or coordinates.
 */
export async function fetchMediaMetadata(
  observableClient: ObservableClient,
  coords: MediaPropertyLocation | undefined,
  mediaObject: Media | Attachment | undefined,
): Promise<MediaMetadata> {
  if (!coords && mediaObject) {
    return await mediaObject.fetchMetadata();
  }

  if (!coords) {
    throw new Error("No media coordinates or media object provided");
  }

  return await observableClient.media.fetchMetadata(coords);
}

/**
 * Fetches media content as a Blob from either a media object or coordinates.
 */
export async function fetchMediaContent(
  observableClient: ObservableClient,
  coords: MediaPropertyLocation | undefined,
  mediaObject: Media | Attachment | undefined,
  options: MediaFetchOptions = {},
): Promise<Blob> {
  const { preview = true } = options;

  if (!coords && mediaObject) {
    const response = await mediaObject.fetchContents();
    return await response.blob();
  }

  if (!coords) {
    throw new Error("No media coordinates or media object provided");
  }

  const cached = observableClient.media.getCachedContent(coords);
  if (cached) {
    return cached;
  }

  return await observableClient.media.fetchContent(coords, { preview });
}
