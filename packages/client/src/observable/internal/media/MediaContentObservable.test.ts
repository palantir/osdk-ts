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
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Observer } from "../../ObservableClient/common.js";
import type { MediaContentPayload } from "../../ObservableClient/MediaObservableTypes.js";
import type { MediaPropertyLocation } from "../../ObservableClient/MediaTypes.js";
import type { BlobMemoryManager } from "./BlobMemoryManager.js";
import { createBlobMemoryManager } from "./BlobMemoryManager.js";
import { createMediaContentObservable } from "./MediaContentObservable.js";

function createMockDeps(blobManager: BlobMemoryManager) {
  const mockMetadata: MediaMetadata = {
    path: "test.jpg",
    sizeBytes: 1024,
    mediaType: "image/jpeg",
  };

  return {
    fetchContent: vi.fn().mockResolvedValue(
      new Blob(["test content"], { type: "text/plain" }),
    ),
    fetchMetadata: vi.fn().mockResolvedValue(mockMetadata),
    blobManager,
    getCacheKey: vi.fn().mockReturnValue("test-cache-key"),
  };
}

function createMockObserver(): Observer<MediaContentPayload> & {
  payloads: MediaContentPayload[];
} {
  const payloads: MediaContentPayload[] = [];
  return {
    payloads,
    next: vi.fn((payload: MediaContentPayload) => {
      payloads.push(payload);
    }),
    error: vi.fn(),
    complete: vi.fn(),
  };
}

describe("MediaContentObservable", () => {
  let blobManager: BlobMemoryManager;
  const coords: MediaPropertyLocation = {
    objectType: "TestObject",
    primaryKey: 123,
    propertyName: "media",
  };

  beforeEach(() => {
    blobManager = createBlobMemoryManager();
  });

  afterEach(() => {
    blobManager.dispose();
  });

  it("fetches content on first subscribe and emits loaded state", async () => {
    const mockBlob = new Blob(["test content"], { type: "text/plain" });
    const deps = createMockDeps(blobManager);
    deps.fetchContent.mockResolvedValue(mockBlob);

    const observable = createMediaContentObservable(deps, coords, {});
    const observer = createMockObserver();

    observable.subscribe(observer);

    // First emission is init state
    expect(observer.payloads[0].status).toBe("init");

    await vi.waitFor(() => {
      const lastPayload = observer.payloads[observer.payloads.length - 1];
      expect(lastPayload.status).toBe("loaded");
    });

    const loadedPayload = observer.payloads.find(p => p.status === "loaded");
    expect(loadedPayload?.content).toBe(mockBlob);
    expect(loadedPayload?.url).toMatch(/^blob:/);
    expect(loadedPayload?.isStale).toBe(false);

    observable.dispose();
  });

  it("emits error state on fetch failure", async () => {
    const deps = createMockDeps(blobManager);
    deps.fetchContent.mockRejectedValue(new Error("Network error"));

    const observable = createMediaContentObservable(deps, coords, {});
    const observer = createMockObserver();

    observable.subscribe(observer);

    await vi.waitFor(() => {
      const lastPayload = observer.payloads[observer.payloads.length - 1];
      expect(lastPayload.status).toBe("error");
    });

    const errorPayload = observer.payloads.find(p => p.status === "error");
    expect(errorPayload?.error?.message).toBe("Network error");

    observable.dispose();
  });

  it("supports SWR on invalidation", async () => {
    const blob1 = new Blob(["content v1"], { type: "text/plain" });
    const blob2 = new Blob(["content v2"], { type: "text/plain" });
    const deps = createMockDeps(blobManager);

    let fetchCount = 0;
    deps.fetchContent.mockImplementation(() => {
      fetchCount++;
      return Promise.resolve(fetchCount === 1 ? blob1 : blob2);
    });

    const observable = createMediaContentObservable(deps, coords, {});
    const observer = createMockObserver();

    observable.subscribe(observer);

    await vi.waitFor(() => {
      const lastPayload = observer.payloads[observer.payloads.length - 1];
      expect(lastPayload.status).toBe("loaded");
    });

    observable.invalidate();

    const stalePayload = observer.payloads.find(p => p.isStale);
    expect(stalePayload).toBeDefined();

    await vi.waitFor(() => {
      const lastPayload = observer.payloads[observer.payloads.length - 1];
      expect(lastPayload.content).toBe(blob2);
      expect(lastPayload.isStale).toBe(false);
    });

    observable.dispose();
  });

  it("shares state across multiple subscribers", async () => {
    const deps = createMockDeps(blobManager);
    const observable = createMediaContentObservable(deps, coords, {});

    const observer1 = createMockObserver();
    const observer2 = createMockObserver();

    observable.subscribe(observer1);

    await vi.waitFor(() => {
      const lastPayload = observer1.payloads[observer1.payloads.length - 1];
      expect(lastPayload.status).toBe("loaded");
    });

    observable.subscribe(observer2);

    const lastPayload2 = observer2.payloads[observer2.payloads.length - 1];
    expect(lastPayload2.status).toBe("loaded");
    expect(deps.fetchContent).toHaveBeenCalledTimes(1);

    observable.dispose();
  });

  it("loadWithPreview fetches both preview and full content", async () => {
    const previewBlob = new Blob(["preview"], { type: "image/jpeg" });
    const fullBlob = new Blob(["full resolution"], { type: "image/jpeg" });
    const deps = createMockDeps(blobManager);
    deps.fetchContent.mockImplementation(
      (_source: unknown, opts?: { preview?: boolean }) => {
        if (opts?.preview === false) {
          return Promise.resolve(fullBlob);
        }
        return Promise.resolve(previewBlob);
      },
    );

    const observable = createMediaContentObservable(deps, coords, {
      placeholder: "preview",
    });
    const observer = createMockObserver();

    observable.subscribe(observer);

    // Wait for preview phase
    await vi.waitFor(() => {
      const p = observer.payloads.find(
        p => p.status === "loaded" && p.isPreview,
      );
      expect(p).toBeDefined();
    });

    // Wait for full phase
    await vi.waitFor(() => {
      const p = observer.payloads.find(
        p => p.status === "loaded" && !p.isPreview,
      );
      expect(p).toBeDefined();
    });

    const fullPayload = observer.payloads.findLast(
      p => p.status === "loaded" && !p.isPreview,
    );
    expect(fullPayload?.content).toBe(fullBlob);
    expect(deps.fetchContent).toHaveBeenCalledTimes(2);

    observable.dispose();
  });

  it("dispose releases correct blob URL in preview state", async () => {
    const previewBlob = new Blob(["preview"], { type: "image/jpeg" });
    const deps = createMockDeps(blobManager);

    // Make full fetch hang so we can dispose during preview state
    let resolveFullFetch: (blob: Blob) => void;
    deps.fetchContent.mockImplementation(
      (_source: unknown, opts?: { preview?: boolean }) => {
        if (opts?.preview === false) {
          return new Promise<Blob>((resolve) => {
            resolveFullFetch = resolve;
          });
        }
        return Promise.resolve(previewBlob);
      },
    );

    const releaseSpy = vi.spyOn(blobManager, "releaseBlobUrl");

    const observable = createMediaContentObservable(deps, coords, {
      placeholder: "preview",
    });
    const observer = createMockObserver();

    observable.subscribe(observer);

    // Wait for preview state
    await vi.waitFor(() => {
      const p = observer.payloads.find(
        p => p.status === "loaded" && p.isPreview,
      );
      expect(p).toBeDefined();
    });

    // Dispose while in preview state (full fetch still pending)
    observable.dispose();

    // Should release the preview key, not the base key
    expect(releaseSpy).toHaveBeenCalledWith("test-cache-key:preview");

    releaseSpy.mockRestore();
  });

  it("uses cached content from blobManager", async () => {
    const cachedBlob = new Blob(["cached"], { type: "text/plain" });
    blobManager.add("test-cache-key", cachedBlob);

    const deps = createMockDeps(blobManager);
    const observable = createMediaContentObservable(deps, coords, {});
    const observer = createMockObserver();

    observable.subscribe(observer);

    await vi.waitFor(() => {
      const lastPayload = observer.payloads[observer.payloads.length - 1];
      expect(lastPayload.status).toBe("loaded");
    });

    expect(deps.fetchContent).not.toHaveBeenCalled();

    const loadedPayload = observer.payloads.find(p => p.status === "loaded");
    expect(loadedPayload?.content).toBe(cachedBlob);

    observable.dispose();
  });
});
