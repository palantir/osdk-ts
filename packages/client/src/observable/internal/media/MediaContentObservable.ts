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
import type { Observer } from "../../ObservableClient/common.js";
import type {
  MediaContentObserveOptions,
  MediaContentPayload,
} from "../../ObservableClient/MediaObservableTypes.js";
import type { MediaPropertyLocation } from "../../ObservableClient/MediaTypes.js";
import type { BlobMemoryManager } from "./BlobMemoryManager.js";
import {
  extractImageDimensions,
  fetchMediaContent,
} from "./fetchMediaContent.js";

type MediaSource = Media | Attachment | MediaPropertyLocation;

export interface MediaContentObservableDeps {
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

export interface MediaContentObservable {
  subscribe(
    observer: Observer<MediaContentPayload>,
  ): { unsubscribe: () => void };
  invalidate(): void;
  dispose(): void;
  subscriberCount(): number;
}

export function createMediaContentObservable(
  deps: MediaContentObservableDeps,
  source: MediaSource,
  options: MediaContentObserveOptions,
): MediaContentObservable {
  const observers = new Set<Observer<MediaContentPayload>>();
  const cacheKey = deps.getCacheKey(source);
  const preview = options.preview ?? true;
  const placeholder = options.placeholder ?? "none";
  const staleTime = options.staleTime ?? 0;

  let state: MediaContentPayload = {
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

  let fetchGeneration = 0;
  let disposed = false;
  let urlCacheKey: string | undefined;

  function emit(): void {
    const snapshot = { ...state };
    for (const obs of observers) {
      obs.next(snapshot);
    }
  }

  function updateState(patch: Partial<MediaContentPayload>): void {
    state = { ...state, ...patch };
    emit();
  }

  async function loadContent(
    gen: number,
    isRevalidation: boolean,
  ): Promise<void> {
    if (disposed) {
      return;
    }

    if (!isRevalidation) {
      updateState({
        status: "loading",
        error: undefined,
      });
    }

    try {
      await fetchMediaContent({
        source,
        fetchContent: deps.fetchContent,
        fetchMetadata: deps.fetchMetadata,
        blobManager: deps.blobManager,
        blobCacheKey: cacheKey,
        usePreview: preview,
        placeholder: isRevalidation ? "none" : placeholder,
        isCancelled: () => gen !== fetchGeneration || disposed,
        onResult: (result) => {
          urlCacheKey = result.blobKey;
          updateState({
            content: result.blob,
            url: result.url,
            previewUrl: result.previewUrl,
            metadata: result.metadata ?? state.metadata,
            dimensions: result.dimensions ?? state.dimensions,
            status: "loaded",
            isPreview: result.isPreview,
            lastUpdated: Date.now(),
            error: undefined,
          });
        },
      });
    } catch (err) {
      if (gen !== fetchGeneration || disposed) {
        return;
      }

      const error = err instanceof Error ? err : new Error(String(err));
      updateState({
        status: "error",
        error,
        isStale: false,
      });
    }
  }

  function startFetching(): void {
    fetchGeneration++;
    const gen = fetchGeneration;

    // Check cache
    const cachedBlob = deps.blobManager.get(cacheKey);
    if (cachedBlob) {
      const url = deps.blobManager.createBlobUrl(cacheKey);
      urlCacheKey = cacheKey;

      if (
        staleTime > 0 && state.lastUpdated > 0
        && (Date.now() - state.lastUpdated) < staleTime
      ) {
        updateState({
          content: cachedBlob,
          url,
          status: "loaded",
          isStale: false,
        });
        return;
      }

      updateState({
        content: cachedBlob,
        url,
        status: "loaded",
      });

      void extractImageDimensions(cachedBlob).then(dims => {
        if (gen === fetchGeneration && dims && !disposed) {
          updateState({ dimensions: dims });
        }
      });

      return;
    }

    void loadContent(gen, false);
  }

  function invalidate(): void {
    if (disposed) {
      return;
    }

    fetchGeneration++;
    const gen = fetchGeneration;

    // SWR: keep current url, mark as stale
    updateState({
      isStale: true,
    });

    // Remove cached blobs so refetch hits network
    deps.blobManager.remove(cacheKey);
    deps.blobManager.remove(`${cacheKey}:preview`);

    // Background refetch
    void loadContent(gen, true);
  }

  function subscribe(
    observer: Observer<MediaContentPayload>,
  ): { unsubscribe: () => void } {
    observers.add(observer);
    observer.next({ ...state });

    if (observers.size === 1 && state.status === "init") {
      startFetching();
    }

    return {
      unsubscribe: () => {
        observers.delete(observer);
      },
    };
  }

  function dispose(): void {
    disposed = true;
    fetchGeneration++;
    observers.clear();

    if (state.url && urlCacheKey) {
      deps.blobManager.releaseBlobUrl(urlCacheKey);
    }
    if (state.previewUrl && state.previewUrl !== state.url) {
      deps.blobManager.releaseBlobUrl(`${cacheKey}:preview`);
    }

    state = {
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
  }

  function subscriberCount(): number {
    return observers.size;
  }

  return {
    subscribe,
    invalidate,
    dispose,
    subscriberCount,
  };
}
