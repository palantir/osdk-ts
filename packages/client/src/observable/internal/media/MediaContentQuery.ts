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
  Attachment,
  Media,
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
import type { MediaPropertyLocation } from "../../ObservableClient/MediaTypes.js";
import type { BatchContext } from "../BatchContext.js";
import type { Changes } from "../Changes.js";
import type { Entry } from "../Layer.js";
import type { OptimisticId } from "../OptimisticId.js";
import { Query } from "../Query.js";
import type { Store } from "../Store.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import type { BlobMemoryManager } from "./BlobMemoryManager.js";
import type {
  MediaContentCacheKey,
  MediaContentStoreValue,
} from "./MediaContentCacheKey.js";
import { extractImageDimensions } from "./MediaContentObservable.js";

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

type MediaSource = Media | Attachment | MediaPropertyLocation;

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
  #objectType: string;
  #primaryKey: PrimaryKeyType<ObjectTypeDefinition>;
  #propertyName: string;
  #source: MediaPropertyLocation;
  #blobManager: BlobMemoryManager;
  #blobCacheKey: string;
  #fetchContent: MediaContentQueryDeps["fetchContent"];
  #fetchMetadata: MediaContentQueryDeps["fetchMetadata"];
  #preview: boolean;
  #placeholder: "preview" | "none";
  #staleTime: number;

  // Track active blob URL keys for cleanup in _dispose
  #activeUrlKey: string | undefined;
  #activePreviewUrlKey: string | undefined;

  constructor(
    store: Store,
    subject: Subject<SubjectPayload<MediaContentCacheKey>>,
    source: MediaPropertyLocation,
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
          msgPrefix: `MediaContentQuery<${source.objectType}, ${
            JSON.stringify(source.primaryKey)
          }, ${source.propertyName}>`,
        })
        : undefined,
    );

    this.#objectType = source.objectType;
    this.#primaryKey = source.primaryKey;
    this.#propertyName = source.propertyName;
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

    // Check blob cache first
    const cachedBlob = this.#blobManager.get(this.#blobCacheKey);
    if (cachedBlob) {
      const url = this.#blobManager.createBlobUrl(this.#blobCacheKey);
      this.#activeUrlKey = this.#blobCacheKey;

      const dims = await extractImageDimensions(cachedBlob);
      if (signal?.aborted) {
        return;
      }

      // If within staleTime, use cache and skip network
      const currentEntry = this.store.batch(
        {},
        (batch) => batch.read(this.cacheKey),
      );
      const lastUpdated = currentEntry.retVal?.value?.lastUpdated ?? 0;
      if (
        this.#staleTime > 0 && lastUpdated > 0
        && (Date.now() - lastUpdated) < this.#staleTime
      ) {
        this.store.batch({}, (batch) => {
          this.writeToStore(
            {
              url,
              previewUrl: undefined,
              metadata: currentEntry.retVal?.value?.metadata,
              content: cachedBlob,
              dimensions: dims ?? currentEntry.retVal?.value?.dimensions,
              isStale: false,
              isPreview: false,
              lastUpdated,
              error: undefined,
            },
            "loaded",
            batch,
          );
        });
        return;
      }

      // Cache hit but stale — show cached data, continue to network fetch
      this.store.batch({}, (batch) => {
        this.writeToStore(
          {
            url,
            previewUrl: undefined,
            metadata: currentEntry.retVal?.value?.metadata,
            content: cachedBlob,
            dimensions: dims ?? currentEntry.retVal?.value?.dimensions,
            isStale: false,
            isPreview: false,
            lastUpdated: Date.now(),
            error: undefined,
          },
          "loaded",
          batch,
        );
      });
      return;
    }

    // No cache — fetch from network
    try {
      if (this.#placeholder === "preview") {
        await this.#loadWithPreview(signal);
      } else {
        await this.#loadDirect(signal);
      }
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

  async #loadWithPreview(signal: AbortSignal | undefined): Promise<void> {
    // Phase 1: preview
    const previewBlob = await this.#fetchContent(
      this.#source,
      { preview: true },
    );
    if (signal?.aborted) {
      return;
    }

    const previewBlobKey = `${this.#blobCacheKey}:preview`;
    this.#blobManager.add(previewBlobKey, previewBlob);
    const previewUrl = this.#blobManager.createBlobUrl(previewBlobKey);
    this.#activePreviewUrlKey = previewBlobKey;

    const previewDims = await extractImageDimensions(previewBlob);
    if (signal?.aborted) {
      if (previewUrl) {
        this.#blobManager.releaseBlobUrl(previewBlobKey);
        this.#activePreviewUrlKey = undefined;
      }
      return;
    }

    const previewMeta = await this.#fetchMetadata(this.#source).catch(
      () => undefined,
    );
    if (signal?.aborted) {
      if (previewUrl) {
        this.#blobManager.releaseBlobUrl(previewBlobKey);
        this.#activePreviewUrlKey = undefined;
      }
      return;
    }

    // Write preview state
    this.store.batch({}, (batch) => {
      this.writeToStore(
        {
          url: previewUrl,
          previewUrl,
          metadata: previewMeta,
          content: previewBlob,
          dimensions: previewDims,
          isStale: false,
          isPreview: true,
          lastUpdated: Date.now(),
          error: undefined,
        },
        "loaded",
        batch,
      );
    });

    // Remove base cache entry so full-res fetch hits network
    this.#blobManager.remove(this.#blobCacheKey);

    // Phase 2: full resolution
    const fullBlob = await this.#fetchContent(
      this.#source,
      { preview: false },
    );
    if (signal?.aborted) {
      return;
    }

    this.#blobManager.add(this.#blobCacheKey, fullBlob);
    const fullUrl = this.#blobManager.createBlobUrl(this.#blobCacheKey);
    this.#activeUrlKey = this.#blobCacheKey;

    const fullDims = await extractImageDimensions(fullBlob);
    if (signal?.aborted) {
      if (fullUrl) {
        this.#blobManager.releaseBlobUrl(this.#blobCacheKey);
        this.#activeUrlKey = undefined;
      }
      return;
    }

    // Release preview blob URL
    this.#blobManager.releaseBlobUrl(previewBlobKey);
    this.#activePreviewUrlKey = undefined;

    // Write full-res state
    this.store.batch({}, (batch) => {
      this.writeToStore(
        {
          url: fullUrl,
          previewUrl: undefined,
          metadata: previewMeta,
          content: fullBlob,
          dimensions: fullDims ?? previewDims,
          isStale: false,
          isPreview: false,
          lastUpdated: Date.now(),
          error: undefined,
        },
        "loaded",
        batch,
      );
    });
  }

  async #loadDirect(signal: AbortSignal | undefined): Promise<void> {
    const [blob, metadata] = await Promise.all([
      this.#fetchContent(this.#source, { preview: this.#preview }),
      this.#fetchMetadata(this.#source).catch(() => undefined),
    ]);
    if (signal?.aborted) {
      return;
    }

    this.#blobManager.add(this.#blobCacheKey, blob);
    const url = this.#blobManager.createBlobUrl(this.#blobCacheKey);
    this.#activeUrlKey = this.#blobCacheKey;

    const dims = await extractImageDimensions(blob);
    if (signal?.aborted) {
      if (url) {
        this.#blobManager.releaseBlobUrl(this.#blobCacheKey);
        this.#activeUrlKey = undefined;
      }
      return;
    }

    this.store.batch({}, (batch) => {
      this.writeToStore(
        {
          url,
          previewUrl: undefined,
          metadata,
          content: blob,
          dimensions: dims,
          isStale: false,
          isPreview: false,
          lastUpdated: Date.now(),
          error: undefined,
        },
        "loaded",
        batch,
      );
    });
  }

  writeToStore(
    data: MediaContentStoreValue | undefined,
    status: Status,
    batch: BatchContext,
  ): Entry<MediaContentCacheKey> {
    const entry = batch.read(this.cacheKey);
    if (entry && entry.status === status && entry.value === data) {
      return entry;
    }
    return batch.write(this.cacheKey, data, status);
  }

  maybeUpdateAndRevalidate = (
    changes: Changes,
    _optimisticId: OptimisticId | undefined,
  ): Promise<void> | undefined => {
    const modifiedObjectsOfType = changes.modifiedObjects.get(this.#objectType);
    const addedObjectsOfType = changes.addedObjects.get(this.#objectType);

    for (const obj of modifiedObjectsOfType ?? []) {
      if (obj.$primaryKey === this.#primaryKey) {
        return this.#invalidateAndRevalidate();
      }
    }

    for (const obj of addedObjectsOfType ?? []) {
      if (obj.$primaryKey === this.#primaryKey) {
        return this.#invalidateAndRevalidate();
      }
    }

    for (const cacheKey of changes.deleted) {
      if (
        cacheKey.type === "object"
        && cacheKey.otherKeys[0] === this.#objectType
        && cacheKey.otherKeys[1] === this.#primaryKey
      ) {
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
    if (objectType === this.#objectType) {
      return this.#invalidateAndRevalidate();
    }
    return Promise.resolve();
  };

  #invalidateAndRevalidate(): Promise<void> {
    // SWR: mark current entry as stale
    this.store.batch({}, (batch) => {
      const entry = batch.read(this.cacheKey);
      if (entry?.value) {
        batch.write(
          this.cacheKey,
          { ...entry.value, isStale: true },
          entry.status,
        );
      }
    });

    // Clear cached blobs so refetch hits network
    this.#blobManager.remove(this.#blobCacheKey);
    this.#blobManager.remove(`${this.#blobCacheKey}:preview`);

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
