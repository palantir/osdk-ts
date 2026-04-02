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
import * as OntologiesV2 from "@osdk/foundry.ontologies";
import { additionalContext } from "../../../Client.js";
import type { Observer } from "../../ObservableClient/common.js";
import type { MediaPropertyLocation } from "../../ObservableClient/MediaTypes.js";
import type { CacheKeys } from "../CacheKeys.js";
import type { KnownCacheKey } from "../KnownCacheKey.js";
import type { Store } from "../Store.js";
import { UnsubscribableWrapper } from "../UnsubscribableWrapper.js";
import type { BlobMemoryManager } from "./BlobMemoryManager.js";
import { createBlobMemoryManager } from "./BlobMemoryManager.js";
import { getMediaCacheKey } from "./getMediaCacheKey.js";
import type { MediaMetadataCacheKey } from "./MediaMetadataCacheKey.js";
import type {
  MediaMetadataObserveOptions,
  MediaMetadataPayload,
} from "./MediaMetadataQuery.js";
import { MediaMetadataQuery } from "./MediaMetadataQuery.js";

/**
 * Facade for media operations: metadata, content, and caching.
 * Delegates to specialized helpers for focused responsibilities.
 */
export class MediaHelper {
  private store: Store;
  private cacheKeys: CacheKeys<KnownCacheKey>;
  private blobManager: BlobMemoryManager;

  constructor(
    store: Store,
    cacheKeys: CacheKeys<KnownCacheKey>,
  ) {
    this.store = store;
    this.cacheKeys = cacheKeys;
    this.blobManager = createBlobMemoryManager();
  }

  /**
   * Get a cache key for media, useful for identity and deduplication.
   */
  getCacheKey(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
  ): string {
    return getMediaCacheKey(mediaOrLocation);
  }

  private getTypedCacheKey(
    coords: MediaPropertyLocation,
  ): MediaMetadataCacheKey {
    return this.cacheKeys.get(
      "mediaMetadata",
      coords.objectType,
      coords.primaryKey,
      coords.propertyName,
    );
  }

  /**
   * Observe media metadata with automatic updates.
   */
  observeMetadata(
    coords: MediaPropertyLocation,
    options: MediaMetadataObserveOptions,
    observer: Observer<MediaMetadataPayload>,
  ): UnsubscribableWrapper {
    const cacheKey = this.getTypedCacheKey(coords);

    const query = this.store.queries.get(cacheKey, () => {
      const subject = this.store.subjects.get(cacheKey);
      return new MediaMetadataQuery(
        this.store,
        subject,
        coords.objectType,
        coords.primaryKey,
        coords.propertyName,
        cacheKey,
        options,
      );
    });

    const subscription = query.subscribe(observer);

    // Wrap subscription to also clean up query cache on unsubscribe
    return new UnsubscribableWrapper(subscription);
  }

  /**
   * Fetch media metadata from the server.
   */
  async fetchMetadata(
    coords: MediaPropertyLocation,
    options?: { preview?: boolean },
  ): Promise<MediaMetadata> {
    const ontologyRid = await this.store.client[additionalContext].ontologyRid;
    const response = await OntologiesV2.MediaReferenceProperties
      .getMediaMetadata(
        this.store.client[additionalContext],
        ontologyRid,
        coords.objectType,
        String(coords.primaryKey),
        coords.propertyName,
        { preview: options?.preview ?? true },
      );

    return {
      path: String(response.path),
      sizeBytes: Number(response.sizeBytes),
      mediaType: response.mediaType,
    };
  }

  /**
   * Fetch media content from the server.
   */
  async fetchContent(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
    options?: { preview?: boolean },
  ): Promise<Blob> {
    const preview = options?.preview ?? true;
    const baseCacheKey = this.getCacheKey(mediaOrLocation);
    const cacheKey = preview ? `${baseCacheKey}:preview` : baseCacheKey;

    const cached = this.blobManager.get(cacheKey);
    if (cached) {
      return cached;
    }

    let response: Response;

    const coords = this.resolveToCoords(mediaOrLocation);
    if (coords) {
      const ontologyRid = await this.store.client[additionalContext]
        .ontologyRid;
      response = await OntologiesV2.MediaReferenceProperties.getMediaContent(
        this.store.client[additionalContext],
        ontologyRid,
        coords.objectType,
        String(coords.primaryKey),
        coords.propertyName,
        { preview },
      );
    } else if ("fetchContents" in mediaOrLocation) {
      // fetchContents() doesn't support preview, cache under base key
      response = await mediaOrLocation.fetchContents();
      const arrayBuffer = await response.arrayBuffer();
      const contentType = response.headers.get("content-type")
        || "application/octet-stream";
      const blob = new Blob([arrayBuffer], { type: contentType });
      this.blobManager.add(baseCacheKey, blob);
      return blob;
    } else {
      throw new Error(
        "Cannot fetch media content: no coordinates or fetchContents",
      );
    }

    const arrayBuffer = await response.arrayBuffer();
    const contentType = response.headers.get("content-type")
      || "application/octet-stream";
    const blob = new Blob([arrayBuffer], { type: contentType });

    this.blobManager.add(cacheKey, blob);

    return blob;
  }

  private resolveToCoords(
    source: Media | Attachment | MediaPropertyLocation,
  ): MediaPropertyLocation | undefined {
    if (
      "objectType" in source && "primaryKey" in source
      && "propertyName" in source
    ) {
      return source;
    }
    if ("getMediaSourceLocation" in source) {
      return source.getMediaSourceLocation?.();
    }
    return undefined;
  }

  /**
   * Get cached media content without network request.
   */
  getCachedContent(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
    options?: { preview?: boolean },
  ): Blob | undefined {
    const preview = options?.preview ?? true;
    const baseCacheKey = this.getCacheKey(mediaOrLocation);
    const cacheKey = preview ? `${baseCacheKey}:preview` : baseCacheKey;
    return this.blobManager.get(cacheKey);
  }

  /**
   * Get cached media metadata without network request.
   */
  getCachedMetadata(coords: MediaPropertyLocation): MediaMetadata | undefined {
    const typedCacheKey = this.getTypedCacheKey(coords);
    const query = this.store.queries.peek(typedCacheKey);
    if (query) {
      const result = this.store.batch({}, (batch) => batch.read(typedCacheKey));
      return result.retVal?.value;
    }
    return undefined;
  }

  /**
   * Create a blob URL for media content.
   */
  createBlobUrl(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
    options?: { preview?: boolean },
  ): string | undefined {
    const preview = options?.preview ?? true;
    const baseCacheKey = this.getCacheKey(mediaOrLocation);
    const cacheKey = preview ? `${baseCacheKey}:preview` : baseCacheKey;
    return this.blobManager.createBlobUrl(cacheKey);
  }

  /**
   * Release a blob URL to free memory.
   */
  releaseBlobUrl(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
    options?: { preview?: boolean },
  ): void {
    const preview = options?.preview ?? true;
    const baseCacheKey = this.getCacheKey(mediaOrLocation);
    const cacheKey = preview ? `${baseCacheKey}:preview` : baseCacheKey;
    this.blobManager.releaseBlobUrl(cacheKey);
  }

  /**
   * Clear cached media (both metadata and content).
   */
  clearCache(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
  ): void {
    const cacheKey = this.getCacheKey(mediaOrLocation);

    this.blobManager.remove(cacheKey);
    this.blobManager.remove(`${cacheKey}:preview`);

    if ("objectType" in mediaOrLocation) {
      const typedCacheKey = this.getTypedCacheKey(mediaOrLocation);
      this.store.queries.delete(typedCacheKey);
    }
  }

  /**
   * Clear all media from cache.
   */
  clearAll(): void {
    this.blobManager.clear();

    for (const cacheKey of this.store.queries.keys()) {
      if (cacheKey.type === "mediaMetadata") {
        this.store.queries.delete(cacheKey);
      }
    }
  }

  /**
   * Clean up all resources.
   */
  dispose(): void {
    this.blobManager.dispose();

    for (const cacheKey of this.store.queries.keys()) {
      if (cacheKey.type === "mediaMetadata") {
        const query = this.store.queries.peek(cacheKey);
        if (query) {
          query.dispose?.();
        }
      }
    }
  }
}
