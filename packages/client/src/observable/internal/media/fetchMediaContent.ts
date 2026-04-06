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
import type { MediaPropertyLocation } from "../../ObservableClient/MediaTypes.js";
import type { BlobMemoryManager } from "./BlobMemoryManager.js";

export type MediaSource = Media | Attachment | MediaPropertyLocation;

export async function extractImageDimensions(
  blob: Blob,
): Promise<{ width: number; height: number } | undefined> {
  if (!blob.type.startsWith("image/")) {
    return undefined;
  }

  try {
    const bitmap = await createImageBitmap(blob);
    const dims = { width: bitmap.width, height: bitmap.height };
    bitmap.close();
    return dims;
  } catch {
    return undefined;
  }
}

export interface MediaFetchResult {
  blob: Blob;
  url: string | undefined;
  blobKey: string;
  previewUrl: string | undefined;
  metadata: MediaMetadata | undefined;
  dimensions: { width: number; height: number } | undefined;
  isPreview: boolean;
}

export interface FetchMediaContentOpts {
  source: MediaSource;
  fetchContent: (
    source: MediaSource,
    opts?: { preview?: boolean },
  ) => Promise<Blob>;
  fetchMetadata: (source: MediaSource) => Promise<MediaMetadata>;
  blobManager: BlobMemoryManager;
  blobCacheKey: string;
  usePreview: boolean;
  placeholder: "preview" | "none";
  isCancelled: () => boolean;
  onResult: (result: MediaFetchResult) => void;
}

export async function fetchMediaContent(
  opts: FetchMediaContentOpts,
): Promise<void> {
  if (opts.placeholder === "preview") {
    await loadWithPreview(opts);
  } else {
    await loadDirect(opts);
  }
}

async function loadWithPreview(opts: FetchMediaContentOpts): Promise<void> {
  const {
    source,
    fetchContent,
    fetchMetadata,
    blobManager,
    blobCacheKey,
    isCancelled,
    onResult,
  } = opts;

  // Phase 1: preview
  const previewBlob = await fetchContent(source, { preview: true });
  if (isCancelled()) {
    return;
  }

  const previewBlobKey = `${blobCacheKey}:preview`;
  blobManager.add(previewBlobKey, previewBlob);
  const previewUrl = blobManager.createBlobUrl(previewBlobKey);

  const [previewDims, previewMeta] = await Promise.all([
    extractImageDimensions(previewBlob),
    fetchMetadata(source).catch(() => undefined),
  ]);
  if (isCancelled()) {
    if (previewUrl) {
      blobManager.releaseBlobUrl(previewBlobKey);
    }
    return;
  }

  onResult({
    blob: previewBlob,
    url: previewUrl,
    blobKey: previewBlobKey,
    previewUrl,
    metadata: previewMeta,
    dimensions: previewDims,
    isPreview: true,
  });

  // Remove base cache so full-res fetch hits network
  blobManager.remove(blobCacheKey);

  // Phase 2: full resolution
  const fullBlob = await fetchContent(source, { preview: false });
  if (isCancelled()) {
    if (previewUrl) {
      blobManager.releaseBlobUrl(previewBlobKey);
    }
    return;
  }

  blobManager.add(blobCacheKey, fullBlob);
  const fullUrl = blobManager.createBlobUrl(blobCacheKey);

  const fullDims = await extractImageDimensions(fullBlob);
  if (isCancelled()) {
    if (fullUrl) {
      blobManager.releaseBlobUrl(blobCacheKey);
    }
    return;
  }

  // Release preview blob URL
  blobManager.releaseBlobUrl(previewBlobKey);

  onResult({
    blob: fullBlob,
    url: fullUrl,
    blobKey: blobCacheKey,
    previewUrl: undefined,
    metadata: previewMeta,
    dimensions: fullDims ?? previewDims,
    isPreview: false,
  });
}

async function loadDirect(opts: FetchMediaContentOpts): Promise<void> {
  const {
    source,
    fetchContent,
    fetchMetadata,
    blobManager,
    blobCacheKey,
    usePreview,
    isCancelled,
    onResult,
  } = opts;

  const [blob, metadata] = await Promise.all([
    fetchContent(source, { preview: usePreview }),
    fetchMetadata(source).catch(() => undefined),
  ]);
  if (isCancelled()) {
    return;
  }

  blobManager.add(blobCacheKey, blob);
  const url = blobManager.createBlobUrl(blobCacheKey);

  const dims = await extractImageDimensions(blob);
  if (isCancelled()) {
    if (url) {
      blobManager.releaseBlobUrl(blobCacheKey);
    }
    return;
  }

  onResult({
    blob,
    url,
    blobKey: blobCacheKey,
    previewUrl: undefined,
    metadata,
    dimensions: dims,
    isPreview: false,
  });
}
