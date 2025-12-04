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

import type { Media, MediaMetadata, MediaPropertyLocation } from "@osdk/api";
import type { MediaMetadataPayload } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

function isMediaPropertyLocation(
  input: Media | MediaPropertyLocation | undefined,
): input is MediaPropertyLocation {
  return input != null
    && typeof input === "object"
    && "objectType" in input
    && "primaryKey" in input
    && "propertyName" in input;
}

function isMedia(
  input: Media | MediaPropertyLocation | undefined,
): input is Media {
  return input != null
    && typeof input === "object"
    && "fetchContents" in input;
}

export interface UseOsdkMediaQueryOptions {
  /** Enable/disable the hook (default: true) */
  enabled?: boolean;
  /** Fetch preview (default: true) or full resolution (false) */
  preview?: boolean;
  /** Dedupe identical requests within this interval in ms */
  dedupeIntervalMs?: number;
}

export interface UseOsdkMediaQueryActions {
  /** Invalidate cache and refetch */
  refetch: () => void;
  /** Clear from cache */
  invalidate: () => void;
}

export interface UseOsdkMediaQueryResult {
  /** Blob URL for <img>, <video>, <a> tags */
  url: string | undefined;
  /** Media metadata: size, mime type, path */
  metadata: MediaMetadata | undefined;
  /** Raw Blob content */
  content: Blob | undefined;
  /** True if any operation is loading */
  isLoading: boolean;
  /** Error from any operation */
  error: Error | undefined;
  /** Actions for manual control */
  actions: UseOsdkMediaQueryActions;
}

/**
 * Hook for reading media data from objects.
 *
 * @remarks
 * SSR Note: This hook uses `useSyncExternalStore` for state management.
 * During server-side rendering, the store will be initialized with empty state.
 * Content loading happens client-side only.
 *
 * @param mediaOrLocation - Media instance or location to a media property
 * @param options - Configuration options for loading behavior and caching
 * @returns Media data, loading states, and actions
 *
 * @example
 * // Simple read with Media object - auto-loads everything
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
 * // Disabled until needed
 * const { url, actions } = useOsdkMediaQuery(media, { enabled: false });
 * return <button onClick={actions.refetch}>Load</button>;
 */
export function useOsdkMediaQuery(
  mediaOrLocation?: Media | MediaPropertyLocation,
  options: UseOsdkMediaQueryOptions = {},
): UseOsdkMediaQueryResult {
  const { observableClient } = React.useContext(OsdkContext2);

  const {
    enabled = true,
    preview = true,
    dedupeIntervalMs,
  } = options;

  // Track mounted state for async cancellation
  const mountedRef = React.useRef(true);
  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Counter for race condition prevention in refetch
  const refetchCounterRef = React.useRef(0);

  // Extract MediaPropertyLocation from input
  const coords = React.useMemo((): MediaPropertyLocation | undefined => {
    if (!mediaOrLocation) return undefined;

    if (isMediaPropertyLocation(mediaOrLocation)) {
      return mediaOrLocation;
    }

    if (isMedia(mediaOrLocation)) {
      return mediaOrLocation.getMediaSourceLocation?.();
    }

    return undefined;
  }, [mediaOrLocation]);

  // Stable cache key for dependencies
  const cacheKey = React.useMemo(() => {
    if (!mediaOrLocation) return undefined;
    return observableClient.media.getCacheKey(mediaOrLocation);
  }, [observableClient, mediaOrLocation]);

  // Observe metadata using makeExternalStore (same pattern as useOsdkObject)
  const { subscribe, getSnapShot } = React.useMemo(() => {
    if (!coords || !enabled) {
      return makeExternalStore<MediaMetadataPayload>(
        () => ({ unsubscribe: () => {} }),
        `media [DISABLED]`,
      );
    }
    return makeExternalStore<MediaMetadataPayload>(
      (observer) =>
        observableClient.observeMetadata(
          coords,
          { dedupeInterval: dedupeIntervalMs, preview },
          observer,
        ),
      `media ${cacheKey}`,
    );
  }, [observableClient, coords, cacheKey, enabled, dedupeIntervalMs, preview]);

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  // Content state
  const [content, setContent] = React.useState<Blob>();
  const [isLoadingContent, setIsLoadingContent] = React.useState(false);
  const [contentError, setContentError] = React.useState<Error>();

  // Blob URL state
  const [blobUrl, setBlobUrl] = React.useState<string>();

  // Clear content state when media changes
  React.useEffect(() => {
    setContent(undefined);
    setContentError(undefined);
  }, [cacheKey]);

  // Auto-load content on mount if enabled - with cancellation
  React.useEffect(() => {
    if (!enabled || !mediaOrLocation) return;

    // Check cache first
    const cachedBlob = observableClient.media.getCachedContent(mediaOrLocation);
    if (cachedBlob) {
      setContent(cachedBlob);
      return;
    }

    let cancelled = false;
    setIsLoadingContent(true);
    setContentError(undefined);

    observableClient.media.fetchContent(mediaOrLocation, { preview })
      .then(blob => {
        if (!cancelled && mountedRef.current) {
          setContent(blob);
        }
      })
      .catch(err => {
        if (!cancelled && mountedRef.current) {
          const error = err instanceof Error ? err : new Error(String(err));
          setContentError(error);
        }
      })
      .finally(() => {
        if (!cancelled && mountedRef.current) {
          setIsLoadingContent(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [enabled, cacheKey, mediaOrLocation, observableClient, preview]);

  // Create blob URL when content is available, cleanup on unmount or content change
  React.useEffect(() => {
    if (content && mediaOrLocation) {
      const url = observableClient.media.createBlobUrl(mediaOrLocation);
      if (url) {
        setBlobUrl(url);
        return () => {
          observableClient.media.releaseBlobUrl(mediaOrLocation);
        };
      }
    }
    setBlobUrl(undefined);
  }, [content, mediaOrLocation, observableClient]);

  // Refetch callback - clears cache and re-fetches (works even when enabled: false)
  const refetch = React.useCallback(() => {
    if (!mediaOrLocation) return;

    const currentRefetch = ++refetchCounterRef.current;

    observableClient.media.clearCache(mediaOrLocation);
    setContent(undefined);
    setContentError(undefined);
    setIsLoadingContent(true);

    observableClient.media.fetchContent(mediaOrLocation, { preview })
      .then(blob => {
        if (
          mountedRef.current && refetchCounterRef.current === currentRefetch
        ) {
          setContent(blob);
        }
      })
      .catch(err => {
        if (
          mountedRef.current && refetchCounterRef.current === currentRefetch
        ) {
          const error = err instanceof Error ? err : new Error(String(err));
          setContentError(error);
        }
      })
      .finally(() => {
        if (
          mountedRef.current && refetchCounterRef.current === currentRefetch
        ) {
          setIsLoadingContent(false);
        }
      });
  }, [observableClient, mediaOrLocation, preview]);

  // Invalidate callback - clears cache only
  const invalidate = React.useCallback(() => {
    if (!mediaOrLocation) return;
    observableClient.media.clearCache(mediaOrLocation);
    setContent(undefined);
  }, [observableClient, mediaOrLocation]);

  // Determine error from payload or content error
  let error: Error | undefined;
  if (payload && "error" in payload && payload.error) {
    error = payload.error;
  } else if (payload?.status === "error") {
    error = new Error("Failed to load media metadata");
  } else if (contentError) {
    error = contentError;
  }

  // Memoize actions object to maintain stable reference
  const actions = React.useMemo((): UseOsdkMediaQueryActions => ({
    refetch,
    invalidate,
  }), [refetch, invalidate]);

  return {
    url: blobUrl,
    metadata: payload?.metadata,
    content,
    isLoading: payload?.status === "loading" || isLoadingContent,
    error,
    actions,
  };
}
