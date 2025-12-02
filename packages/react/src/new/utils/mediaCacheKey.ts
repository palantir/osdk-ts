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

import type { MediaPropertyLocation } from "@osdk/client/unstable-do-not-use";

/**
 * Generates a stable cache key for media queries based on coordinates.
 * Returns null if coordinates are not provided or enabled is false.
 */
export function generateMediaCacheKey(
  mediaPropertyLocation: MediaPropertyLocation | undefined,
  enabled: boolean,
): string | null {
  if (!mediaPropertyLocation || !enabled) return null;

  return `media:${mediaPropertyLocation.objectType}:${
    JSON.stringify(mediaPropertyLocation.primaryKey)
  }:${mediaPropertyLocation.propertyName}`;
}
