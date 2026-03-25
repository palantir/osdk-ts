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

import type { Client } from "@osdk/client";
import type {
  MediaContentPayload,
  MediaPropertyLocation,
  ObservableClient,
  Observer,
} from "@osdk/client/unstable-do-not-use";
import { act, renderHook, waitFor } from "@testing-library/react";
import * as React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { OsdkProvider2 } from "../src/new/OsdkProvider2.js";
import { useOsdkMedia } from "../src/new/useOsdkMedia.js";

const coords: MediaPropertyLocation = {
  objectType: "TestObject",
  primaryKey: 123,
  propertyName: "media",
};

function createMockClient(): Client {
  return { fetchMetadata: vi.fn() } as Partial<Client> as Client;
}

function createMockObservableClient(
  overrides: Partial<ObservableClient> = {},
): ObservableClient {
  const mockClient: Partial<ObservableClient> = {
    media: {
      getCacheKey: vi.fn().mockReturnValue("test-cache-key"),
      fetchMetadata: vi.fn().mockResolvedValue({
        path: "test-image.jpg",
        mediaType: "image/jpeg",
        sizeBytes: 1024,
      }),
      getCachedMetadata: vi.fn().mockReturnValue(undefined),
      fetchContent: vi.fn().mockResolvedValue(
        new Blob(["test content"], { type: "image/jpeg" }),
      ),
      getCachedContent: vi.fn().mockReturnValue(undefined),
      createBlobUrl: vi.fn().mockReturnValue("blob:mock-url-123"),
      releaseBlobUrl: vi.fn(),
      clearCache: vi.fn(),
      uploadMedia: vi.fn().mockResolvedValue({
        mimeType: "image/jpeg",
        reference: {
          type: "mediaSetViewItem",
          mediaSetViewItem: {
            mediaItemRid: "item1",
            mediaSetRid: "set1",
            mediaSetViewRid: "view1",
          },
        },
      }),
      prefetch: vi.fn().mockResolvedValue(undefined),
    },
    observeMetadata: vi.fn().mockReturnValue({ unsubscribe: vi.fn() }),
    observeMedia: vi.fn().mockReturnValue({ unsubscribe: vi.fn() }),
    invalidateMedia: vi.fn(),
    ...overrides,
  };

  return mockClient as ObservableClient;
}

function renderMediaHook(
  mockObservableClient: ObservableClient,
  source?: MediaPropertyLocation,
  options?: Parameters<typeof useOsdkMedia>[1],
) {
  const mockClient = createMockClient();
  const wrapper = ({ children }: React.PropsWithChildren) => (
    <OsdkProvider2
      client={mockClient}
      observableClient={mockObservableClient}
    >
      {children}
    </OsdkProvider2>
  );

  return renderHook(
    () => useOsdkMedia(source, options),
    { wrapper },
  );
}

function createCapturingObservableClient() {
  let capturedObserver: Observer<MediaContentPayload> | undefined;
  const mockObservableClient = createMockObservableClient({
    observeMedia: vi.fn().mockImplementation((_source, _options, obs) => {
      capturedObserver = obs;
      return { unsubscribe: vi.fn() };
    }),
  });
  return {
    mockObservableClient,
    getCapturedObserver: () => capturedObserver,
  };
}

describe("useOsdkMedia", () => {
  beforeEach(() => {
    global.URL.createObjectURL = vi.fn(() => "blob:mock-url-123");
    global.URL.revokeObjectURL = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns empty state when disabled or no source", () => {
    const mockObservableClient = createMockObservableClient();

    const { result: disabledResult } = renderMediaHook(
      mockObservableClient,
      coords,
      { enabled: false },
    );

    expect(disabledResult.current.metadata).toBeUndefined();
    expect(disabledResult.current.content).toBeUndefined();
    expect(disabledResult.current.url).toBeUndefined();
    expect(disabledResult.current.isLoading).toBe(false);

    const { result: noSourceResult } = renderMediaHook(
      mockObservableClient,
      undefined,
    );

    expect(noSourceResult.current.isLoading).toBe(false);
    expect(mockObservableClient.observeMedia).not.toHaveBeenCalled();
  });

  it("subscribes to observeMedia when enabled", () => {
    const mockObservableClient = createMockObservableClient();

    renderMediaHook(mockObservableClient, coords);

    expect(mockObservableClient.observeMedia).toHaveBeenCalledWith(
      coords,
      expect.objectContaining({ preview: true }),
      expect.any(Object),
    );
  });

  it("receives content updates from observable", async () => {
    const { mockObservableClient, getCapturedObserver } =
      createCapturingObservableClient();

    const { result } = renderMediaHook(mockObservableClient, coords);

    const mockBlob = new Blob(["content"], { type: "image/jpeg" });

    act(() => {
      getCapturedObserver()?.next({
        metadata: {
          path: "photo.jpg",
          mediaType: "image/jpeg",
          sizeBytes: 2048,
        },
        content: mockBlob,
        url: "blob:loaded-url",
        previewUrl: undefined,
        dimensions: { width: 800, height: 600 },
        status: "loaded",
        isStale: false,
        isPreview: false,
        lastUpdated: Date.now(),
      });
    });

    await waitFor(() => {
      expect(result.current.url).toBe("blob:loaded-url");
      expect(result.current.content).toBe(mockBlob);
      expect(result.current.metadata?.path).toBe("photo.jpg");
      expect(result.current.dimensions).toEqual({
        width: 800,
        height: 600,
      });
      expect(result.current.isLoading).toBe(false);
    });
  });

  it("shows loading state", async () => {
    const { mockObservableClient, getCapturedObserver } =
      createCapturingObservableClient();

    const { result } = renderMediaHook(mockObservableClient, coords);

    act(() => {
      getCapturedObserver()?.next({
        metadata: undefined,
        content: undefined,
        url: undefined,
        previewUrl: undefined,
        dimensions: undefined,
        status: "loading",
        isStale: false,
        isPreview: false,
        lastUpdated: 0,
      });
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(true);
    });
  });

  it("handles error from observable", async () => {
    const { mockObservableClient, getCapturedObserver } =
      createCapturingObservableClient();

    const { result } = renderMediaHook(mockObservableClient, coords);

    act(() => {
      getCapturedObserver()?.next({
        metadata: undefined,
        content: undefined,
        url: undefined,
        previewUrl: undefined,
        dimensions: undefined,
        status: "error",
        isStale: false,
        isPreview: false,
        lastUpdated: Date.now(),
        error: new Error("Failed to load"),
      });
    });

    await waitFor(() => {
      expect(result.current.error?.message).toBe("Failed to load");
    });
  });

  it("calls invalidateMedia on refetch", () => {
    const mockObservableClient = createMockObservableClient();

    const { result } = renderMediaHook(mockObservableClient, coords);

    act(() => {
      result.current.refetch();
    });

    expect(mockObservableClient.invalidateMedia).toHaveBeenCalledWith(coords);
  });

  it("unsubscribes on unmount", () => {
    const unsubscribeFn = vi.fn();
    const mockObservableClient = createMockObservableClient({
      observeMedia: vi.fn().mockReturnValue({
        unsubscribe: unsubscribeFn,
      }),
    });

    const { unmount } = renderMediaHook(mockObservableClient, coords);

    unmount();

    expect(unsubscribeFn).toHaveBeenCalled();
  });
});
