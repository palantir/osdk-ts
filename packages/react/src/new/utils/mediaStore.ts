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
import { ensureError } from "@osdk/client";
import type {
  MediaPropertyLocation,
  ObservableClient,
} from "@osdk/client/unstable-do-not-use";
import { createBlobUrl } from "./blobUrlManager.js";

export interface MediaState {
  metadata: MediaMetadata | undefined;
  content: Blob | undefined;
  url: string | undefined;
  loadingStates: {
    metadata: boolean;
    content: boolean;
  };
  error: Error | undefined;
}

export interface MediaStore {
  subscribe: (listener: () => void) => () => void;
  getSnapshot: () => MediaState;
  updateState: (
    updates:
      | Partial<MediaState>
      | ((prevState: MediaState) => Partial<MediaState>),
  ) => void;
  getState: () => MediaState;
}

export interface CreateMediaStoreOptions {
  observableClient: ObservableClient;
  mediaPropertyLocation: MediaPropertyLocation | undefined;
  autoLoadMetadata: boolean;
  autoLoadContent: boolean;
  urlType: "blob" | "data";
  preview: boolean;
  blobUrlRef: React.MutableRefObject<string | undefined>;
}

/**
 * Creates a store for managing media state (metadata, content, loading, errors).
 * Handles initial cache checks and auto-loading based on options.
 */
export function createMediaStore(
  options: CreateMediaStoreOptions,
): MediaStore {
  const {
    observableClient,
    mediaPropertyLocation,
    autoLoadMetadata,
    autoLoadContent,
    urlType,
    preview,
    blobUrlRef,
  } = options;

  let state: MediaState = {
    metadata: undefined,
    content: undefined,
    url: undefined,
    loadingStates: { metadata: false, content: false },
    error: undefined,
  };

  const listeners = new Set<() => void>();
  const abortControllers = new Set<AbortController>();
  let isCancelled = false;

  const notify = () => {
    listeners.forEach((listener) => listener());
  };

  const updateState = (
    updates:
      | Partial<MediaState>
      | ((prevState: MediaState) => Partial<MediaState>),
  ) => {
    if (isCancelled) return;
    const updatesToApply = typeof updates === "function"
      ? updates(state)
      : updates;
    state = { ...state, ...updatesToApply };
    notify();
  };

  if (mediaPropertyLocation) {
    if (autoLoadMetadata) {
      const cached = observableClient.media.getCachedMetadata(
        mediaPropertyLocation,
      );
      if (cached) {
        state.metadata = cached;
      } else {
        state.loadingStates = { ...state.loadingStates, metadata: true };
      }
    }

    if (autoLoadContent) {
      const cached = observableClient.media.getCachedContent(
        mediaPropertyLocation,
      );
      if (cached) {
        let url: string | undefined;
        if (urlType === "blob") {
          url = createBlobUrl(observableClient, mediaPropertyLocation, cached);
          if (url) {
            blobUrlRef.current = url;
          }
        }
        state.content = cached;
        state.url = url;
      } else {
        state.loadingStates = { ...state.loadingStates, content: true };

        const controller = new AbortController();
        abortControllers.add(controller);

        void (async () => {
          try {
            const blob = await observableClient.media.fetchContent(
              mediaPropertyLocation,
              {
                preview,
              },
            );
            if (isCancelled) return;
            let url: string | undefined;
            if (urlType === "blob") {
              url = createBlobUrl(
                observableClient,
                mediaPropertyLocation,
                blob,
              );
              if (url) {
                blobUrlRef.current = url;
              }
            }
            updateState((prevState) => ({
              content: blob,
              url,
              loadingStates: { ...prevState.loadingStates, content: false },
            }));
          } catch (error) {
            if (isCancelled) return;
            updateState((prevState) => ({
              loadingStates: { ...prevState.loadingStates, content: false },
              error: ensureError(error),
            }));
          } finally {
            abortControllers.delete(controller);
          }
        })();
      }
    }
  }

  return {
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      if (listeners.size > 0) {
        isCancelled = false;
      }
      return () => {
        listeners.delete(listener);
        if (listeners.size === 0) {
          isCancelled = true;
          abortControllers.forEach((controller) => controller.abort());
          abortControllers.clear();
        }
      };
    },
    getSnapshot: () => state,
    updateState,
    getState: () => state,
  };
}
