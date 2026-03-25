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

import type { MediaMetadata } from "@osdk/api";
import * as OntologiesV2 from "@osdk/foundry.ontologies";
import { additionalContext } from "../../../Client.js";
import type {
  CommonObserveOptions,
  Observer,
} from "../../ObservableClient/common.js";
import type {
  MediaContentObserveOptions,
  MediaContentPayload,
} from "../../ObservableClient/MediaObservableTypes.js";
import type { MediaPropertyLocation } from "../../ObservableClient/MediaTypes.js";
import { AbstractHelper } from "../AbstractHelper.js";
import type { KnownCacheKey } from "../KnownCacheKey.js";
import type { Query } from "../Query.js";
import type { UnsubscribableWrapper } from "../UnsubscribableWrapper.js";
import { createBlobMemoryManager } from "./BlobMemoryManager.js";
import {
  isMediaPropertyLocation,
  type MediaSource,
} from "./fetchMediaContent.js";
import { getMediaCacheKey } from "./getMediaCacheKey.js";
import type { MediaContentCacheKey } from "./MediaContentCacheKey.js";
import { MediaContentQuery } from "./MediaContentQuery.js";
import type { MediaMetadataCacheKey } from "./MediaMetadataCacheKey.js";
import type {
  MediaMetadataObserveOptions,
  MediaMetadataPayload,
} from "./MediaMetadataQuery.js";
import { MediaMetadataQuery } from "./MediaMetadataQuery.js";

export class MediaHelper extends AbstractHelper<
  Query<KnownCacheKey, unknown, CommonObserveOptions>,
  CommonObserveOptions
> {
  private blobManager = createBlobMemoryManager();

  getQuery(): never {
    throw new Error("Use observeMedia or observeMediaMetadata");
  }

  getCacheKey(mediaOrLocation: MediaSource): string {
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

  private getContentCacheKey(source: MediaSource): MediaContentCacheKey {
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
    const cacheKey = this.getMetadataCacheKey(coords);

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

    return this._subscribe(query, options, observer);
  }

  observeMedia(
    source: MediaSource,
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

    return this._subscribe(query, options, observer);
  }

  invalidateMedia(source: MediaSource): void {
    const typedCacheKey = this.getContentCacheKey(source);
    const query = this.store.queries.peek(typedCacheKey) as
      | MediaContentQuery
      | undefined;
    if (query) {
      query.invalidate().catch((e: unknown) => {
        if (process.env.NODE_ENV !== "production") {
          this.store.logger?.error("Error invalidating media", e);
        }
      });
    }
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
    mediaOrLocation: MediaSource,
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

  getCachedContent(mediaOrLocation: MediaSource): Blob | undefined {
    const cacheKey = this.getCacheKey(mediaOrLocation);
    return this.blobManager.get(cacheKey);
  }

  getCachedMetadata(coords: MediaPropertyLocation): MediaMetadata | undefined {
    const typedCacheKey = this.getMetadataCacheKey(coords);
    const query = this.store.queries.peek(typedCacheKey);
    if (query) {
      const entry = this.store.getValue(typedCacheKey);
      return entry?.value;
    }
    return undefined;
  }

  createBlobUrl(
    mediaOrLocation: MediaSource,
    options?: { preview?: boolean },
  ): string | undefined {
    const preview = options?.preview ?? true;
    const baseCacheKey = this.getCacheKey(mediaOrLocation);
    const cacheKey = preview ? `${baseCacheKey}:preview` : baseCacheKey;
    return this.blobManager.createBlobUrl(cacheKey);
  }

  releaseBlobUrl(
    mediaOrLocation: MediaSource,
    options?: { preview?: boolean },
  ): void {
    const preview = options?.preview ?? true;
    const baseCacheKey = this.getCacheKey(mediaOrLocation);
    const cacheKey = preview ? `${baseCacheKey}:preview` : baseCacheKey;
    this.blobManager.releaseBlobUrl(cacheKey);
  }

  private async fetchMetadataForSource(
    source: MediaSource,
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

  clearCache(mediaOrLocation: MediaSource): void {
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
