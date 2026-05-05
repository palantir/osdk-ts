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
import type {
  MediaContentObserveOptions,
  MediaContentPayload,
} from "@osdk/client/unstable-do-not-use";
import React from "react";
import { devToolsMetadata, makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext } from "./OsdkContext.js";

export interface UseOsdkMediaOptions {
  enabled?: boolean;
  preview?: boolean;
  dedupeIntervalMs?: number;
  lazy?: boolean;
  placeholder?: "preview" | "none";
  priority?: "high" | "low";
  staleTime?: number;
}

export interface UseOsdkMediaResult {
  url: string | undefined;
  metadata: MediaMetadata | undefined;
  content: Blob | undefined;
  isLoading: boolean;
  isStale: boolean;
  isPreview: boolean;
  dimensions: { width: number; height: number } | undefined;
  error: Error | undefined;
  refetch: () => void;
  ref: React.RefCallback<Element>;
}

export function useOsdkMedia(
  source?: Media | Attachment,
  options: UseOsdkMediaOptions = {},
): UseOsdkMediaResult {
  const { observableClient } = React.useContext(OsdkContext);
  const {
    enabled = true,
    preview = true,
    dedupeIntervalMs,
    lazy = false,
    placeholder = "none",
    priority,
    staleTime,
  } = options;

  const [isVisible, setIsVisible] = React.useState(
    !lazy || priority === "high",
  );
  const observerRef = React.useRef<IntersectionObserver>();

  const ref: React.RefCallback<Element> = React.useCallback(
    (node: Element | null) => {
      observerRef.current?.disconnect();
      if (!node || !lazy || priority === "high") {
        return;
      }
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current?.disconnect();
          }
        },
        { rootMargin: "200px" },
      );
      observerRef.current.observe(node);
    },
    [lazy, priority],
  );

  const effectiveEnabled = enabled && isVisible;

  const sourceRef = React.useRef(source);
  sourceRef.current = source;

  const sourceKey = React.useMemo(() => {
    if (!source) {
      return undefined;
    }
    if ("rid" in source) {
      return `attachment ${source.rid}`;
    }
    const ref2 = source.getMediaReference();
    const vi = ref2.reference.mediaSetViewItem;
    return `media ${vi.mediaSetRid} ${vi.mediaSetViewRid} ${vi.mediaItemRid}`;
  }, [source]);

  const observeOpts = React.useMemo((): MediaContentObserveOptions => ({
    dedupeInterval: dedupeIntervalMs,
    preview,
    placeholder,
    priority,
    staleTime,
  }), [dedupeIntervalMs, preview, placeholder, priority, staleTime]);

  const { subscribe, getSnapShot } = React.useMemo(() => {
    if (!sourceKey || !effectiveEnabled) {
      return makeExternalStore<MediaContentPayload>(
        () => ({ unsubscribe: () => {} }),
        devToolsMetadata({ hookType: "useOsdkMedia" }),
      );
    }
    const currentSource = sourceRef.current;
    if (!currentSource) {
      return makeExternalStore<MediaContentPayload>(
        () => ({ unsubscribe: () => {} }),
        devToolsMetadata({ hookType: "useOsdkMedia" }),
      );
    }
    return makeExternalStore<MediaContentPayload>(
      (observer) =>
        observableClient.observeMedia(currentSource, observeOpts, observer),
      devToolsMetadata({ hookType: "useOsdkMedia" }),
    );
  }, [observableClient, sourceKey, effectiveEnabled, observeOpts]);

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  const refetch = React.useCallback(() => {
    if (sourceRef.current) {
      observableClient.invalidateMedia(sourceRef.current);
    }
  }, [observableClient]);

  return React.useMemo((): UseOsdkMediaResult => ({
    url: payload?.url,
    metadata: payload?.metadata,
    content: payload?.content,
    isLoading: effectiveEnabled && sourceKey != null
      ? (payload?.status === "loading" || payload?.status === "init"
        || !payload)
      : false,
    isStale: payload?.isStale ?? false,
    isPreview: payload?.isPreview ?? false,
    dimensions: payload?.dimensions,
    error: payload?.error,
    refetch,
    ref,
  }), [payload, effectiveEnabled, sourceKey, refetch, ref]);
}
