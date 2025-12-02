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
import type { MediaMetadataPayload } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { OsdkContext2 } from "./OsdkContext2.js";
import { createBlobUrl, releaseBlobUrl } from "./utils/blobUrlManager.js";
import { generateMediaCacheKey } from "./utils/mediaCacheKey.js";
import {
  extractMediaCoordinates,
  type MediaInput,
} from "./utils/mediaCoordinates.js";
import {
  fetchMediaContent,
  fetchMediaMetadata,
} from "./utils/mediaFetchers.js";
import { createMediaStore } from "./utils/mediaStore.js";

export interface UseOsdkMediaQueryOptions {
  // === Core Loading Behavior ===
  /** Auto-fetch metadata on mount (default: true) */
  autoLoadMetadata?: boolean;

  /** Auto-fetch content on mount (default: false - expensive!) */
  autoLoadContent?: boolean;

  /** Enable/disable the hook (default: true, React Query pattern) */
  enabled?: boolean;

  // === URL Generation ===
  /** Type of URL to generate (default: "blob") */
  urlType?: "blob" | "data";

  // === Media Options ===
  /** Fetch preview (default: true) or full resolution (false) */
  preview?: boolean;

  // === Advanced Caching ===
  /** Time in ms before data is stale (default: 0) */
  staleTime?: number;

  /** Max content size to cache in bytes */
  maxContentSize?: number;

  /** Dedupe identical requests within this interval (default: 0) */
  dedupeIntervalMs?: number;
}

export interface UseOsdkMediaQueryResult {
  // ============ Tier 1: Primary (90% usage) ============
  /** Blob URL for <img>, <video>, <a> tags */
  url: string | undefined;

  /** True if any operation is loading */
  isLoading: boolean;

  /** Error from any operation */
  error: Error | undefined;

  // ============ Tier 2: Common (50% usage) ============
  /** Media metadata: size, mime type, path */
  metadata: MediaMetadata | undefined;

  /** True if metadata is loading */
  isLoadingMetadata: boolean;

  // ============ Tier 3: Advanced (20% usage) ============
  /** Raw Blob content */
  content: Blob | undefined;

  /** True if content is loading */
  isLoadingContent: boolean;

  /** Manually fetch content (useful with autoLoadContent: false) */
  fetchContent: () => Promise<Blob>;

  /** Manually fetch metadata */
  fetchMetadata: () => Promise<MediaMetadata>;

  /** Invalidate cache and refetch */
  refresh: () => void;

  /** Clear from cache */
  clearCache: () => void;
}

/**
 * Hook for reading media data from objects.
 *
 * For uploading media, use `useOsdkMediaUpload`.
 *
 * @param mediaOrLocation - Media instance, Attachment, or location to a media property
 * @param options - Configuration options for loading behavior and caching
 * @returns Media data, loading states, and fetch operations
 *
 * @example
 * // Simple read with Media object (90% of cases)
 * const { url, isLoading } = useOsdkMediaQuery(employee.profilePhoto);
 * return <img src={url} alt="Profile" />;
 *
 * @example
 * // With metadata
 * const { url, metadata } = useOsdkMediaQuery(document.file);
 * return <a href={url} download={metadata?.path}>Download</a>;
 *
 * @example
 * // Using coordinates directly
 * const { url } = useOsdkMediaQuery({ objectType: "Employee", primaryKey: 123, propertyName: "photo" });
 *
 * @example
 * // Lazy loading (performance)
 * const { url, fetchContent } = useOsdkMediaQuery(video, { autoLoadContent: false });
 * return url ? <video src={url} /> : <button onClick={() => fetchContent()}>Load</button>;
 */
export function useOsdkMediaQuery(
  mediaOrLocation?: MediaInput,
  options: UseOsdkMediaQueryOptions = {},
): UseOsdkMediaQueryResult {
  const { observableClient } = React.useContext(OsdkContext2);

  const { mediaPropertyLocation, mediaObject, isTransient } = React.useMemo(
    () => extractMediaCoordinates(mediaOrLocation),
    [mediaOrLocation],
  );

  const {
    autoLoadContent = false,
    autoLoadMetadata = true,
    enabled = true,
    urlType = "blob",
    preview = true,
  } = options;

  const mediaPropertyLocationRef = React.useRef(mediaPropertyLocation);
  const mediaObjectRef = React.useRef(mediaObject);
  const blobUrlRef = React.useRef<string>();
  const refreshInProgressRef = React.useRef(false);

  mediaPropertyLocationRef.current = mediaPropertyLocation;
  mediaObjectRef.current = mediaObject;

  const cacheKey = React.useMemo(
    () => generateMediaCacheKey(mediaPropertyLocation, enabled),
    [
      mediaPropertyLocation?.objectType,
      mediaPropertyLocation?.primaryKey,
      mediaPropertyLocation?.propertyName,
      enabled,
    ],
  );

  const store = React.useMemo(
    () =>
      createMediaStore({
        observableClient,
        mediaPropertyLocation: mediaPropertyLocationRef.current,
        autoLoadMetadata,
        autoLoadContent,
        urlType,
        preview,
        blobUrlRef,
      }),
    [
      observableClient,
      cacheKey,
      autoLoadMetadata,
      autoLoadContent,
      urlType,
      preview,
    ],
  );

  // Subscribe to store
  const storeState = React.useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
  );

  React.useEffect(() => {
    if (
      !enabled
      || !autoLoadMetadata
      || !mediaPropertyLocationRef.current
    ) {
      return;
    }

    const subscription = observableClient.observeMetadata(
      mediaPropertyLocationRef.current,
      {
        dedupeInterval: options.dedupeIntervalMs,
      },
      {
        next: (payload: MediaMetadataPayload) => {
          store.updateState((prevState) => ({
            metadata: payload.metadata,
            loadingStates: {
              ...prevState.loadingStates,
              metadata: payload.status === "loading",
            },
            // Don't override error here - it comes through the error callback
            error: payload.status === "error" ? prevState.error : undefined,
          }));
        },
        error: (err: unknown) => {
          store.updateState((prevState) => ({
            loadingStates: { ...prevState.loadingStates, metadata: false },
            error: err instanceof Error ? err : new Error(String(err)),
          }));
        },
        complete: () => {},
      },
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [
    observableClient,
    cacheKey,
    enabled,
    autoLoadMetadata,
    options.dedupeIntervalMs,
  ]);

  const fetchMetadataCallback = React.useCallback(async () => {
    store.updateState((prevState) => ({
      loadingStates: { ...prevState.loadingStates, metadata: true },
      error: undefined,
    }));

    try {
      const meta = await fetchMediaMetadata(
        observableClient,
        mediaPropertyLocationRef.current,
        mediaObjectRef.current,
      );
      store.updateState((prevState) => ({
        metadata: meta,
        loadingStates: { ...prevState.loadingStates, metadata: false },
      }));
      return meta;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      store.updateState((prevState) => ({
        loadingStates: { ...prevState.loadingStates, metadata: false },
        error: err,
      }));
      throw err;
    }
  }, [store, observableClient]);

  const fetchContentCallback = React.useCallback(async () => {
    store.updateState((prevState) => ({
      loadingStates: { ...prevState.loadingStates, content: true },
      error: undefined,
    }));

    try {
      const blob = await fetchMediaContent(
        observableClient,
        mediaPropertyLocationRef.current,
        mediaObjectRef.current,
        { preview },
      );

      let url: string | undefined;
      if (urlType === "blob") {
        url = createBlobUrl(
          observableClient,
          mediaPropertyLocationRef.current,
          blob,
        );
        blobUrlRef.current = url;
      }

      store.updateState((prevState) => ({
        content: blob,
        url,
        loadingStates: { ...prevState.loadingStates, content: false },
      }));
      return blob;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      store.updateState((prevState) => ({
        loadingStates: { ...prevState.loadingStates, content: false },
        error: err,
      }));
      throw err;
    }
  }, [urlType, store, preview, observableClient]);

  const releaseBlobUrlCallback = React.useCallback(() => {
    releaseBlobUrl(
      observableClient,
      mediaPropertyLocationRef.current,
      blobUrlRef.current,
    );
    blobUrlRef.current = undefined;
  }, [observableClient]);

  const refresh = React.useCallback(async () => {
    if (refreshInProgressRef.current) {
      return;
    }

    refreshInProgressRef.current = true;

    try {
      releaseBlobUrlCallback();

      store.updateState({
        metadata: undefined,
        content: undefined,
        url: undefined,
      });

      if (mediaPropertyLocationRef.current && cacheKey) {
        if (autoLoadMetadata) {
          await fetchMetadataCallback().catch(() => {});
        }
        if (autoLoadContent) {
          await fetchContentCallback().catch(() => {});
        }
      }
    } finally {
      refreshInProgressRef.current = false;
    }
  }, [
    store,
    cacheKey,
    autoLoadMetadata,
    autoLoadContent,
    fetchMetadataCallback,
    fetchContentCallback,
    releaseBlobUrlCallback,
  ]);

  const clearCache = React.useCallback(() => {
    if (mediaPropertyLocationRef.current) {
      observableClient.media.clearCache(mediaPropertyLocationRef.current);
    }
    releaseBlobUrlCallback();
    store.updateState({
      metadata: undefined,
      content: undefined,
      url: undefined,
    });
  }, [store, releaseBlobUrlCallback, observableClient]);

  // Clean up blob URL when mediaOrLocation changes or on unmount
  React.useEffect(() => {
    // When mediaOrLocation changes, we need to clean up the old blob URL
    return () => {
      releaseBlobUrlCallback();
    };
  }, [mediaOrLocation, releaseBlobUrlCallback]);

  return {
    url: storeState.url,
    isLoading: storeState.loadingStates.metadata
      || storeState.loadingStates.content,
    error: storeState.error,
    metadata: storeState.metadata,
    isLoadingMetadata: storeState.loadingStates.metadata,
    content: storeState.content,
    isLoadingContent: storeState.loadingStates.content,
    fetchContent: fetchContentCallback,
    fetchMetadata: fetchMetadataCallback,
    refresh,
    clearCache,
  };
}
