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

import { RefCounts } from "../RefCounts.js";

interface CacheEntry {
  blob: Blob;
  blobUrl?: string;
  lastAccessed: number;
}

export interface BlobMemoryManager {
  add(key: string, blob: Blob): void;
  get(key: string): Blob | undefined;
  createBlobUrl(key: string): string | undefined;
  releaseBlobUrl(key: string): void;
  remove(key: string): void;
  clear(): void;
  dispose(): void;
}

export function createBlobMemoryManager(): BlobMemoryManager {
  const cache = new Map<string, CacheEntry>();
  // Matches the 60s keepAlive used by CacheKeys for RefCounts — blobs stay
  // cached 60s after last access so quick navigation between views reuses them
  const EVICTION_THRESHOLD_MS = 60_000;

  const urlRefCounts = new RefCounts<string>(EVICTION_THRESHOLD_MS, (key) => {
    const entry = cache.get(key);
    if (entry?.blobUrl) {
      URL.revokeObjectURL(entry.blobUrl);
      entry.blobUrl = undefined;
    }
  });

  let gcIntervalId: ReturnType<typeof setInterval> | undefined;

  function startGcInterval(): void {
    if (gcIntervalId === undefined) {
      gcIntervalId = setInterval(() => {
        urlRefCounts.gc();

        const now = Date.now();
        for (const [key, entry] of cache.entries()) {
          if (urlRefCounts.has(key)) {
            continue;
          }

          if (now - entry.lastAccessed > EVICTION_THRESHOLD_MS) {
            cache.delete(key);
          }
        }

        if (cache.size === 0) {
          clearInterval(gcIntervalId);
          gcIntervalId = undefined;
        }
      }, 10_000); // GC poll interval for evicting stale entries
    }
  }

  function add(key: string, blob: Blob): void {
    const existingEntry = cache.get(key);

    if (existingEntry?.blobUrl && !urlRefCounts.has(key)) {
      URL.revokeObjectURL(existingEntry.blobUrl);
    }

    cache.set(key, {
      blob,
      blobUrl: urlRefCounts.has(key) ? existingEntry?.blobUrl : undefined,
      lastAccessed: Date.now(),
    });

    startGcInterval();
  }

  function get(key: string): Blob | undefined {
    const entry = cache.get(key);
    if (entry) {
      entry.lastAccessed = Date.now();
      return entry.blob;
    }
    return undefined;
  }

  function createBlobUrl(key: string): string | undefined {
    const entry = cache.get(key);
    if (!entry) {
      return undefined;
    }

    if (!entry.blobUrl) {
      entry.blobUrl = URL.createObjectURL(entry.blob);
      urlRefCounts.register(key);
    }

    urlRefCounts.retain(key);
    entry.lastAccessed = Date.now();

    return entry.blobUrl;
  }

  function releaseBlobUrl(key: string): void {
    urlRefCounts.release(key);
  }

  function remove(key: string): void {
    const entry = cache.get(key);
    if (entry) {
      if (entry.blobUrl) {
        URL.revokeObjectURL(entry.blobUrl);
      }
      cache.delete(key);
    }
  }

  function clear(): void {
    for (const entry of cache.values()) {
      if (entry.blobUrl) {
        URL.revokeObjectURL(entry.blobUrl);
      }
    }

    cache.clear();
  }

  function dispose(): void {
    clear();
    if (gcIntervalId !== undefined) {
      clearInterval(gcIntervalId);
      gcIntervalId = undefined;
    }
  }

  return {
    add,
    get,
    createBlobUrl,
    releaseBlobUrl,
    remove,
    clear,
    dispose,
  };
}
