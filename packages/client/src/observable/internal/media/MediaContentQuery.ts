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
  MediaMetadata,
  ObjectTypeDefinition,
  PrimaryKeyType,
} from "@osdk/api";
import {
  BehaviorSubject,
  type Connectable,
  connectable,
  map,
  type Observable,
  type Subject,
} from "rxjs";
import { additionalContext } from "../../../Client.js";
import type { Status } from "../../ObservableClient/common.js";
import type {
  MediaContentObserveOptions,
  MediaContentPayload,
} from "../../ObservableClient/MediaObservableTypes.js";
import type { BatchContext } from "../BatchContext.js";
import type { Changes } from "../Changes.js";
import type { Entry } from "../Layer.js";
import type { OptimisticId } from "../OptimisticId.js";
import { Query } from "../Query.js";
import type { Store } from "../Store.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import type { BlobMemoryManager } from "./BlobMemoryManager.js";
import {
  extractImageDimensions,
  fetchMediaContent,
  isMediaPropertyLocation,
  type MediaSource,
} from "./fetchMediaContent.js";
import type {
  MediaContentCacheKey,
  MediaContentStoreValue,
} from "./MediaContentCacheKey.js";

const INIT_PAYLOAD: MediaContentPayload = {
  metadata: undefined,
  content: undefined,
  url: undefined,
  previewUrl: undefined,
  dimensions: undefined,
  status: "init",
  isStale: false,
  isPreview: false,
  lastUpdated: 0,
  error: undefined,
};

export interface MediaContentQueryDeps {
  fetchContent: (
    source: MediaSource,
    options?: { preview?: boolean },
  ) => Promise<Blob>;
  fetchMetadata: (
    source: MediaSource,
  ) => Promise<MediaMetadata>;
  blobManager: BlobMemoryManager;
  getCacheKey: (source: MediaSource) => string;
}

export class MediaContentQuery extends Query<
  MediaContentCacheKey,
  MediaContentPayload,
  MediaContentObserveOptions
> {
  #objectType: string | undefined;
  #primaryKey: PrimaryKeyType<ObjectTypeDefinition> | undefined;
  #source: MediaSource;
  #blobManager: BlobMemoryManager;
  #blobCacheKey: string;
  #fetchContent: MediaContentQueryDeps["fetchContent"];
  #fetchMetadata: MediaContentQueryDeps["fetchMetadata"];
  #preview: boolean;
  #placeholder: "preview" | "none";
  #staleTime: number;

  #activeUrlKey: string | undefined;
  #activePreviewUrlKey: string | undefined;

  constructor(
    store: Store,
    subject: Subject<SubjectPayload<MediaContentCacheKey>>,
    source: MediaSource,
    cacheKey: MediaContentCacheKey,
    opts: MediaContentObserveOptions,
    deps: MediaContentQueryDeps,
  ) {
    super(
      store,
      subject,
      opts,
      cacheKey,
      process.env.NODE_ENV !== "production"
        ? store.client[additionalContext].logger?.child({}, {
          msgPrefix: `MediaContentQuery<${deps.getCacheKey(source)}>`,
        })
        : undefined,
    );

    if (isMediaPropertyLocation(source)) {
      this.#objectType = source.objectType;
      this.#primaryKey = source.primaryKey;
    }
    this.#source = source;
    this.#blobManager = deps.blobManager;
    this.#blobCacheKey = deps.getCacheKey(source);
    this.#fetchContent = deps.fetchContent;
    this.#fetchMetadata = deps.fetchMetadata;
    this.#preview = opts.preview ?? true;
    this.#placeholder = opts.placeholder ?? "none";
    this.#staleTime = opts.staleTime ?? 0;
  }

  protected _createConnectable(
    subject: Observable<SubjectPayload<MediaContentCacheKey>>,
  ): Connectable<MediaContentPayload> {
    return connectable<MediaContentPayload>(
      subject.pipe(
        map((x) => ({
          url: x.value?.url,
          previewUrl: x.value?.previewUrl,
          metadata: x.value?.metadata,
          content: x.value?.content,
          dimensions: x.value?.dimensions,
          isStale: x.value?.isStale ?? false,
          isPreview: x.value?.isPreview ?? false,
          lastUpdated: x.value?.lastUpdated ?? 0,
          error: x.value?.error,
          status: x.status,
        })),
      ),
      {
        connector: () => new BehaviorSubject<MediaContentPayload>(INIT_PAYLOAD),
      },
    );
  }

  protected _preFetch(): void {
    this.abortController = new AbortController();
  }

  async _fetchAndStore(): Promise<void> {
    const signal = this.abortController?.signal;

    const cachedBlob = this.#blobManager.get(this.#blobCacheKey);
    if (cachedBlob) {
      if (this.#activeUrlKey) {
        this.#blobManager.releaseBlobUrl(this.#activeUrlKey);
      }
      const url = this.#blobManager.createBlobUrl(this.#blobCacheKey);
      if (url) {
        this.#activeUrlKey = this.#blobCacheKey;
      }

      const currentEntry = this.store.getValue(this.cacheKey);
      const existingDims = currentEntry?.value?.dimensions;
      const dims = existingDims ?? await extractImageDimensions(cachedBlob);
      if (signal?.aborted) {
        return;
      }
      const now = Date.now();
      const prevLastUpdated = currentEntry?.value?.lastUpdated ?? 0;
      const withinStaleTime = this.#staleTime > 0 && prevLastUpdated > 0
        && (now - prevLastUpdated) < this.#staleTime;

      this.store.batch({}, (batch) => {
        this.writeToStore(
          {
            url,
            previewUrl: undefined,
            metadata: currentEntry?.value?.metadata,
            content: cachedBlob,
            dimensions: dims,
            isStale: false,
            isPreview: false,
            lastUpdated: withinStaleTime ? prevLastUpdated : now,
            error: undefined,
          },
          "loaded",
          batch,
        );
      });
      return;
    }

    try {
      await fetchMediaContent({
        source: this.#source,
        fetchContent: this.#fetchContent,
        fetchMetadata: this.#fetchMetadata,
        blobManager: this.#blobManager,
        blobCacheKey: this.#blobCacheKey,
        usePreview: this.#preview,
        placeholder: this.#placeholder,
        isCancelled: () => signal?.aborted ?? false,
        onResult: (result) => {
          if (result.isPreview) {
            if (this.#activePreviewUrlKey) {
              this.#blobManager.releaseBlobUrl(this.#activePreviewUrlKey);
            }
            this.#activePreviewUrlKey = result.blobKey;
          } else {
            if (this.#activeUrlKey) {
              this.#blobManager.releaseBlobUrl(this.#activeUrlKey);
            }
            if (this.#activePreviewUrlKey) {
              this.#blobManager.releaseBlobUrl(this.#activePreviewUrlKey);
            }
            this.#activeUrlKey = result.blobKey;
            this.#activePreviewUrlKey = undefined;
          }
          this.store.batch({}, (batch) => {
            this.writeToStore(
              {
                url: result.url,
                previewUrl: result.previewUrl,
                metadata: result.metadata,
                content: result.blob,
                dimensions: result.dimensions,
                isStale: false,
                isPreview: result.isPreview,
                lastUpdated: Date.now(),
                error: undefined,
              },
              "loaded",
              batch,
            );
          });
        },
      });
    } catch (err) {
      if (signal?.aborted) {
        return;
      }
      const error = err instanceof Error ? err : new Error(String(err));
      this.store.batch({}, (batch) => {
        this.writeToStore(
          {
            url: undefined,
            previewUrl: undefined,
            metadata: undefined,
            content: undefined,
            dimensions: undefined,
            isStale: false,
            isPreview: false,
            lastUpdated: 0,
            error,
          },
          "error",
          batch,
        );
      });
    }
  }

  writeToStore(
    data: MediaContentStoreValue | undefined,
    status: Status,
    batch: BatchContext,
  ): Entry<MediaContentCacheKey> {
    const entry = batch.read(this.cacheKey);
    if (
      entry && entry.status === status && entry.value?.url === data?.url
      && entry.value?.isStale === data?.isStale
      && entry.value?.isPreview === data?.isPreview
      && entry.value?.metadata === data?.metadata
      && entry.value?.dimensions?.width === data?.dimensions?.width
      && entry.value?.dimensions?.height === data?.dimensions?.height
    ) {
      return entry;
    }
    return batch.write(this.cacheKey, data, status);
  }

  maybeUpdateAndRevalidate = (
    changes: Changes,
    _optimisticId: OptimisticId | undefined,
  ): Promise<void> | undefined => {
    if (!this.#objectType || this.#primaryKey == null) {
      return undefined;
    }

    for (
      const objects of [
        changes.modifiedObjects.get(this.#objectType),
        changes.addedObjects.get(this.#objectType),
      ]
    ) {
      for (const obj of objects ?? []) {
        if (obj.$primaryKey === this.#primaryKey) {
          return this.invalidate();
        }
      }
    }

    for (const cacheKey of changes.deleted) {
      if (
        cacheKey.type === "object"
        && cacheKey.otherKeys[0] === this.#objectType
        && cacheKey.otherKeys[1] === this.#primaryKey
      ) {
        this.#blobManager.remove(this.#blobCacheKey);
        this.#blobManager.remove(`${this.#blobCacheKey}:preview`);
        this.store.batch({}, (batch) => {
          this.writeToStore(undefined, "error", batch);
        });
        return Promise.resolve();
      }
    }

    return undefined;
  };

  invalidateObjectType = (
    objectType: string,
    _changes: Changes | undefined,
  ): Promise<void> => {
    if (this.#objectType && objectType === this.#objectType) {
      return this.invalidate();
    }
    return Promise.resolve();
  };

  invalidate(): Promise<void> {
    this.#blobManager.remove(this.#blobCacheKey);
    this.#blobManager.remove(`${this.#blobCacheKey}:preview`);

    this.store.batch({}, (batch) => {
      const entry = batch.read(this.cacheKey);
      if (entry?.value) {
        this.writeToStore(
          {
            ...entry.value,
            isStale: true,
            url: undefined,
            previewUrl: undefined,
          },
          entry.status,
          batch,
        );
      }
    });

    return this.revalidate(true);
  }

  protected _dispose(): void {
    if (this.#activeUrlKey) {
      this.#blobManager.releaseBlobUrl(this.#activeUrlKey);
      this.#activeUrlKey = undefined;
    }
    if (this.#activePreviewUrlKey) {
      this.#blobManager.releaseBlobUrl(this.#activePreviewUrlKey);
      this.#activePreviewUrlKey = undefined;
    }
  }
}
