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
import type { MediaContentCacheKey } from "./MediaContentCacheKey.js";
import { MediaContentQuery } from "./MediaContentQuery.js";
import type { MediaMetadataCacheKey } from "./MediaMetadataCacheKey.js";
import type {
  MediaMetadataObserveOptions,
  MediaMetadataPayload,
} from "./MediaMetadataQuery.js";
import { MediaMetadataQuery } from "./MediaMetadataQuery.js";

function isMediaPropertyLocation(
  source: Media | Attachment | MediaPropertyLocation,
): source is MediaPropertyLocation {
  return "objectType" in source && "primaryKey" in source
    && "propertyName" in source;
}

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

  getCacheKey(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
  ): string {
    return getMediaCacheKey(mediaOrLocation);
  }

  private getMetadataCacheKey(
    coords: MediaPropertyLocation,
  ): MediaMetadataCacheKey {
    return this.cacheKeys.get(
      "mediaMetadata",
      coords.objectType,
      coords.primaryKey,
      coords.propertyName,
    );
  }

  private getContentCacheKey(
    source: Media | Attachment | MediaPropertyLocation,
  ): MediaContentCacheKey {
    const objectType = isMediaPropertyLocation(source)
      ? source.objectType
      : "";
    return this.cacheKeys.get(
      "mediaContent",
      objectType,
      this.getCacheKey(source),
    ) as MediaContentCacheKey;
  }

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

  getCachedContent(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
  ): Blob | undefined {
    const cacheKey = this.getCacheKey(mediaOrLocation);
    return this.blobManager.get(cacheKey);
  }

  getCachedMetadata(coords: MediaPropertyLocation): MediaMetadata | undefined {
    const typedCacheKey = this.getMetadataCacheKey(coords);
    const query = this.store.queries.peek(typedCacheKey);
    if (query) {
      const result = this.store.batch({}, (batch) => batch.read(typedCacheKey));
      return result.retVal?.value;
    }
    return undefined;
  }

  createBlobUrl(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
    options?: { preview?: boolean },
  ): string | undefined {
    const preview = options?.preview ?? true;
    const baseCacheKey = this.getCacheKey(mediaOrLocation);
    const cacheKey = preview ? `${baseCacheKey}:preview` : baseCacheKey;
    return this.blobManager.createBlobUrl(cacheKey);
  }

  releaseBlobUrl(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
    options?: { preview?: boolean },
  ): void {
    const preview = options?.preview ?? true;
    const baseCacheKey = this.getCacheKey(mediaOrLocation);
    const cacheKey = preview ? `${baseCacheKey}:preview` : baseCacheKey;
    this.blobManager.releaseBlobUrl(cacheKey);
  }

  observeMedia(
    source: Media | Attachment | MediaPropertyLocation,
    options: MediaContentObserveOptions,
    observer: Observer<MediaContentPayload>,
  ): { unsubscribe: () => void } {
    const cacheKey = this.getContentCacheKey(source);

    const query = this.store.queries.get(cacheKey, () => {
      const subject = this.store.subjects.get(cacheKey);
      return new MediaContentQuery(
        this.store,
        subject,
        source,
        cacheKey,
        options,
        {
          fetchContent: (s, opts) => this.fetchContent(s, opts),
          fetchMetadata: (s) => this.fetchMetadataForSource(s),
          blobManager: this.blobManager,
          getCacheKey: (s) => this.getCacheKey(s),
        },
      );
    });

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

    query.revalidate().catch((e: unknown) => {
      observer.error(e);
    });

    const subscription = query.subscribe(observer);
    const querySub = new QuerySubscription(query, subscription);

    query.registerSubscriptionDedupeInterval(
      querySub.subscriptionId,
      options.dedupeInterval,
    );

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

  invalidateMedia(
    source: Media | Attachment | MediaPropertyLocation,
  ): void {
    const typedCacheKey = this.getContentCacheKey(source);
    const query = this.store.queries.peek(typedCacheKey);
    if (query) {
      this.store.batch({}, (batch) => {
        const entry = batch.read(typedCacheKey);
        if (entry?.value) {
          batch.write(
            typedCacheKey,
            { ...entry.value, isStale: true },
            entry.status,
          );
        }
      });

      const blobKey = this.getCacheKey(source);
      this.blobManager.remove(blobKey);
      this.blobManager.remove(`${blobKey}:preview`);

      query.revalidate(true).catch(() => {});
    }
  }

  private async fetchMetadataForSource(
    source: Media | Attachment | MediaPropertyLocation,
  ): Promise<MediaMetadata> {
    if (isMediaPropertyLocation(source)) {
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

  clearCache(
    mediaOrLocation: Media | Attachment | MediaPropertyLocation,
  ): void {
    const cacheKey = this.getCacheKey(mediaOrLocation);
    this.blobManager.remove(cacheKey);

    if (isMediaPropertyLocation(mediaOrLocation)) {
      const metadataCacheKey = this.getMetadataCacheKey(mediaOrLocation);
      this.store.queries.delete(metadataCacheKey);
    }

    const contentCacheKey = this.getContentCacheKey(mediaOrLocation);
    this.store.queries.delete(contentCacheKey);
  }

  clearAll(): void {
    this.blobManager.clear();

    for (const cacheKey of this.store.queries.keys()) {
      if (
        cacheKey.type === "mediaMetadata" || cacheKey.type === "mediaContent"
      ) {
        this.store.queries.delete(cacheKey);
      }
    }
  }

  dispose(): void {
    this.blobManager.dispose();

    for (const cacheKey of this.store.queries.keys()) {
      if (
        cacheKey.type === "mediaMetadata" || cacheKey.type === "mediaContent"
      ) {
        const query = this.store.queries.peek(cacheKey);
        if (query) {
          query.dispose?.();
        }
      }
    }
  }
}
