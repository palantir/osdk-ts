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
import type {
  MediaContentObserveOptions,
  MediaContentPayload,
} from "../../ObservableClient/MediaObservableTypes.js";
import type { MediaPropertyLocation } from "../../ObservableClient/MediaTypes.js";
import type { CacheKeys } from "../CacheKeys.js";
import type { KnownCacheKey } from "../KnownCacheKey.js";
import { QuerySubscription } from "../QuerySubscription.js";
import type { Store } from "../Store.js";
import type { UnsubscribableWrapper } from "../UnsubscribableWrapper.js";
import type { BlobMemoryManager } from "./BlobMemoryManager.js";
import { createBlobMemoryManager } from "./BlobMemoryManager.js";
import { getMediaCacheKey } from "./getMediaCacheKey.js";
import type { MediaContentObservable } from "./MediaContentObservable.js";
import { createMediaContentObservable } from "./MediaContentObservable.js";
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
  private contentObservables = new Map<string, MediaContentObservable>();

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
  observeMediaMetadata(
    coords: MediaPropertyLocation,
    options: MediaMetadataObserveOptions,
    observer: Observer<MediaMetadataPayload>,
  ): UnsubscribableWrapper {
    const cacheKey = this.cacheKeys.get(
      "mediaMetadata",
      coords.objectType,
      coords.primaryKey,
      coords.propertyName,
    ) as MediaMetadataCacheKey;

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

    // Reference counting: cancel pending cleanup or retain
    const pendingCleanupCount = this.store.pendingCleanup.get(cacheKey) ?? 0;
    if (pendingCleanupCount > 0) {
      if (pendingCleanupCount === 1) {
        this.store.pendingCleanup.delete(cacheKey);
      } else {
        this.store.pendingCleanup.set(cacheKey, pendingCleanupCount - 1);
      }
    } else {
      this.store.cacheKeys.retain(cacheKey);
    }

    if (options.mode !== "offline") {
      query.revalidate(options.mode === "force").catch((e: unknown) => {
        observer.error(e);
      });
    }

    const subscription = query.subscribe(observer);
    const querySub = new QuerySubscription(query, subscription);

    query.registerSubscriptionDedupeInterval(
      querySub.subscriptionId,
      options.dedupeInterval,
    );

    // Deferred release on unsubscribe (handles React unmount-remount cycles)
    subscription.add(() => {
      query.unregisterSubscriptionDedupeInterval(querySub.subscriptionId);

      this.store.pendingCleanup.set(
        cacheKey,
        (this.store.pendingCleanup.get(cacheKey) ?? 0) + 1,
      );
      queueMicrotask(() => {
        const currentPending = this.store.pendingCleanup.get(cacheKey) ?? 0;
        if (currentPending > 0) {
          if (currentPending === 1) {
            this.store.pendingCleanup.delete(cacheKey);
          } else {
            this.store.pendingCleanup.set(cacheKey, currentPending - 1);
          }
          this.store.cacheKeys.release(cacheKey);
        }
      });
    });

    return querySub;
  }

  /**
   * Fetch media metadata from the server.
   */
  async fetchMetadata(coords: MediaPropertyLocation): Promise<MediaMetadata> {
    const ontologyRid = await this.store.client[additionalContext].ontologyRid;
    const response = await OntologiesV2.MediaReferenceProperties
      .getMediaMetadata(
        this.store.client[additionalContext],
        ontologyRid,
        coords.objectType,
        String(coords.primaryKey),
        coords.propertyName,
        { preview: true },
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
    const cacheKey = this.getCacheKey(mediaOrLocation);

    const cached = this.blobManager.get(cacheKey);
    if (cached) {
      return cached;
    }

    let response: Response;

    if ("fetchContents" in mediaOrLocation) {
      response = await mediaOrLocation.fetchContents();
    } else if ("rid" in mediaOrLocation) {
      response = await OntologiesV2.Attachments.read(
        this.store.client[additionalContext],
        String(mediaOrLocation.rid),
      );
    } else {
      const ontologyRid = await this.store.client[additionalContext]
        .ontologyRid;
      response = await OntologiesV2.MediaReferenceProperties.getMediaContent(
        this.store.client[additionalContext],
        ontologyRid,
        mediaOrLocation.objectType,
        String(mediaOrLocation.primaryKey),
        mediaOrLocation.propertyName,
        { preview: options?.preview ?? true },
      );
    }

    const arrayBuffer = await response.arrayBuffer();
    const contentType = response.headers.get("content-type")
      || "application/octet-stream";
    const blob = new Blob([arrayBuffer], { type: contentType });

    this.blobManager.add(cacheKey, blob);

    return blob;
  }

  /**
   * Get cached media content without network request.
   */
  getCachedContent(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
  ): Blob | undefined {
    const cacheKey = this.getCacheKey(mediaOrLocation);
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
   * Observe media content with unified lifecycle management.
   * Deduplicates observables by cache key.
   */
  observeMedia(
    source: Media | Attachment | MediaPropertyLocation,
    options: MediaContentObserveOptions,
    observer: Observer<MediaContentPayload>,
  ): { unsubscribe: () => void } {
    const cacheKey = this.getCacheKey(source);

    let observable = this.contentObservables.get(cacheKey);
    if (!observable) {
      observable = createMediaContentObservable(
        {
          fetchContent: (s, opts) => this.fetchContent(s, opts),
          fetchMetadata: (s) => this.fetchMetadataForSource(s),
          blobManager: this.blobManager,
          getCacheKey: (s) => this.getCacheKey(s),
        },
        source,
        options,
      );
      this.contentObservables.set(cacheKey, observable);
    }

    const sub = observable.subscribe(observer);

    return {
      unsubscribe: () => {
        sub.unsubscribe();
        if (observable.subscriberCount() === 0) {
          observable.dispose();
          this.contentObservables.delete(cacheKey);
        }
      },
    };
  }

  /**
   * Invalidate media content, triggering SWR refetch.
   */
  invalidateMedia(
    source: Media | Attachment | MediaPropertyLocation,
  ): void {
    const cacheKey = this.getCacheKey(source);
    const observable = this.contentObservables.get(cacheKey);
    if (observable) {
      observable.invalidate();
    }
  }

  private async fetchMetadataForSource(
    source: Media | Attachment | MediaPropertyLocation,
  ): Promise<MediaMetadata> {
    if (
      "objectType" in source && "primaryKey" in source
      && "propertyName" in source
    ) {
      return this.fetchMetadata(source);
    }
    if ("rid" in source) {
      const meta = await source.fetchMetadata();
      return {
        path: meta.filename,
        sizeBytes: meta.sizeBytes,
        mediaType: meta.mediaType,
      };
    }
    return source.fetchMetadata();
  }

  /**
   * Clear cached media (both metadata and content).
   */
  clearCache(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
  ): void {
    const cacheKey = this.getCacheKey(mediaOrLocation);

    this.blobManager.remove(cacheKey);

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
    for (const observable of this.contentObservables.values()) {
      observable.dispose();
    }
    this.contentObservables.clear();

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
