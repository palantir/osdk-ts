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

import type {
  MediaPropertyLocation,
  ObservableClient,
} from "@osdk/client/unstable-do-not-use";

/**
 * Creates a blob URL for the given content.
 * First checks if the ObservableClient already has a cached URL,
 * otherwise creates a new one.
 */
export function createBlobUrl(
  observableClient: ObservableClient,
  mediaPropertyLocation: MediaPropertyLocation | undefined,
  blob: Blob,
): string {
  if (mediaPropertyLocation) {
    const cached = observableClient.media.createBlobUrl(mediaPropertyLocation);
    if (cached) return cached;
  }

  return URL.createObjectURL(blob);
}

/**
 * Releases a blob URL, using the ObservableClient if coordinates are available,
 * otherwise using URL.revokeObjectURL directly.
 */
export function releaseBlobUrl(
  observableClient: ObservableClient,
  mediaPropertyLocation: MediaPropertyLocation | undefined,
  blobUrl: string | undefined,
): void {
  if (!blobUrl) return;

  if (mediaPropertyLocation) {
    observableClient.media.releaseBlobUrl(mediaPropertyLocation);
  } else {
    URL.revokeObjectURL(blobUrl);
  }
}
