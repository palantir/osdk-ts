/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { Media, MediaMetadata } from "@osdk/api";
import type { Client } from "@osdk/client";
import {
  type MediaMetadataPayload,
  type MediaPropertyLocation,
  type ObservableClient,
  type Observer,
} from "@osdk/client/unstable-do-not-use";
import { act, renderHook, waitFor } from "@testing-library/react";
import * as React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { OsdkProvider2 } from "../src/new/OsdkProvider2.js";
import { useOsdkMediaQuery } from "../src/new/useOsdkMediaQuery.js";

function createMockClient(): Client {
  const mockClient: Partial<Client> = {
    fetchMetadata: vi.fn(),
  };
  return mockClient as Client;
}

function createMockMedia(
  coords: MediaPropertyLocation,
  mockBlob?: Blob,
): Media {
  const blob = mockBlob ?? new Blob(["test content"], { type: "image/jpeg" });
  return {
    fetchMetadata: vi.fn().mockResolvedValue({
      path: "test-image.jpg",
      mediaType: "image/jpeg",
      sizeBytes: 1024,
    }),
    fetchContents: vi.fn().mockResolvedValue(new Response(blob)),
    getMediaReference: vi.fn().mockReturnValue({
      mimeType: "image/jpeg",
      reference: {
        type: "mediaSetViewItem" as const,
        mediaSetViewItem: {
          mediaSetRid: "rid1",
          mediaSetViewRid: "rid2",
          mediaItemRid: "rid3",
        },
      },
    }),
    getMediaSourceLocation: vi.fn().mockReturnValue(coords),
  };
}

function createMockObservableClient(
  overrides: Partial<ObservableClient> = {},
): ObservableClient {
  const mockMetadata: MediaMetadata = {
    path: "test-image.jpg",
    mediaType: "image/jpeg",
    sizeBytes: 1024,
  };

  const mockBlob = new Blob(["test content"], { type: "image/jpeg" });

  const mockClient: Partial<ObservableClient> = {
    media: {
      getCacheKey: vi.fn().mockReturnValue("test-cache-key"),
      fetchMetadata: vi.fn().mockResolvedValue(mockMetadata),
      getCachedMetadata: vi.fn().mockReturnValue(undefined),
      fetchContent: vi.fn().mockResolvedValue(mockBlob),
      getCachedContent: vi.fn().mockReturnValue(undefined),
      createBlobUrl: vi.fn().mockReturnValue("blob:mock-url-123"),
      releaseBlobUrl: vi.fn(),
      clearCache: vi.fn(),
    },
    observeMetadata: vi.fn().mockReturnValue({
      unsubscribe: vi.fn(),
    }),
    ...overrides,
  };

  return mockClient as ObservableClient;
}

describe("useOsdkMediaQuery", () => {
  let mockCreateObjectURL: ReturnType<typeof vi.fn>;
  let mockRevokeObjectURL: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockCreateObjectURL = vi.fn(() => "blob:mock-url-123");
    mockRevokeObjectURL = vi.fn();
    global.URL.createObjectURL = mockCreateObjectURL;
    global.URL.revokeObjectURL = mockRevokeObjectURL;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns initial state when disabled", async () => {
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();

    const coords: MediaPropertyLocation = {
      objectType: "TestObject",
      primaryKey: 123,
      propertyName: "media",
    };

    const wrapper = ({ children }: React.PropsWithChildren) => (
      <OsdkProvider2
        client={mockClient}
        observableClient={mockObservableClient}
      >
        {children}
      </OsdkProvider2>
    );

    const { result } = renderHook(
      () => useOsdkMediaQuery(coords, { enabled: false }),
      { wrapper },
    );

    expect(result.current.metadata).toBeUndefined();
    expect(result.current.content).toBeUndefined();
    expect(result.current.url).toBeUndefined();
    expect(result.current.isLoading).toBe(false);
  });

  it("re-fetches content via actions.refetch() when disabled", async () => {
    const mockBlob = new Blob(["test content"], { type: "image/jpeg" });
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();
    vi.mocked(mockObservableClient.media.fetchContent).mockResolvedValue(
      mockBlob,
    );

    const coords: MediaPropertyLocation = {
      objectType: "TestObject",
      primaryKey: 123,
      propertyName: "media",
    };

    const mockMedia = createMockMedia(coords, mockBlob);

    const wrapper = ({ children }: React.PropsWithChildren) => (
      <OsdkProvider2
        client={mockClient}
        observableClient={mockObservableClient}
      >
        {children}
      </OsdkProvider2>
    );

    const { result } = renderHook(
      () => useOsdkMediaQuery(mockMedia, { enabled: false }),
      { wrapper },
    );

    // Nothing loaded initially when disabled
    expect(result.current.content).toBeUndefined();

    act(() => {
      result.current.actions.refetch();
    });

    await waitFor(() => {
      expect(result.current.content).toBeDefined();
    });

    expect(mockObservableClient.media.fetchContent).toHaveBeenCalledWith(
      mockMedia,
      { preview: true },
    );
  });

  it("handles refetch errors", async () => {
    const mockError = new Error("Fetch failed");
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();
    vi.mocked(mockObservableClient.media.fetchContent).mockRejectedValue(
      mockError,
    );

    const coords: MediaPropertyLocation = {
      objectType: "TestObject",
      primaryKey: 123,
      propertyName: "media",
    };

    const mockMedia = createMockMedia(coords);

    const wrapper = ({ children }: React.PropsWithChildren) => (
      <OsdkProvider2
        client={mockClient}
        observableClient={mockObservableClient}
      >
        {children}
      </OsdkProvider2>
    );

    const { result } = renderHook(
      () => useOsdkMediaQuery(mockMedia, { enabled: false }),
      { wrapper },
    );

    act(() => {
      result.current.actions.refetch();
    });

    await waitFor(() => {
      expect(result.current.error).toEqual(mockError);
    });
  });

  it("auto-loads content when enabled (default behavior)", async () => {
    const mockBlob = new Blob(["auto content"], { type: "image/jpeg" });
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();
    vi.mocked(mockObservableClient.media.fetchContent).mockResolvedValue(
      mockBlob,
    );

    const coords: MediaPropertyLocation = {
      objectType: "TestObject",
      primaryKey: 456,
      propertyName: "media",
    };

    const mockMedia = createMockMedia(coords, mockBlob);

    const wrapper = ({ children }: React.PropsWithChildren) => (
      <OsdkProvider2
        client={mockClient}
        observableClient={mockObservableClient}
      >
        {children}
      </OsdkProvider2>
    );

    const { result } = renderHook(
      () => useOsdkMediaQuery(mockMedia), // enabled defaults to true
      { wrapper },
    );

    await waitFor(() => {
      expect(result.current.content).toBeDefined();
    });

    expect(mockObservableClient.media.fetchContent).toHaveBeenCalledWith(
      mockMedia,
      { preview: true },
    );
  });

  it("cleans up blob URL on unmount", async () => {
    const mockBlob = new Blob(["cleanup test"], { type: "image/jpeg" });
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();
    vi.mocked(mockObservableClient.media.fetchContent).mockResolvedValue(
      mockBlob,
    );

    const coords: MediaPropertyLocation = {
      objectType: "TestObject",
      primaryKey: 789,
      propertyName: "media",
    };

    const mockMedia = createMockMedia(coords, mockBlob);

    const wrapper = ({ children }: React.PropsWithChildren) => (
      <OsdkProvider2
        client={mockClient}
        observableClient={mockObservableClient}
      >
        {children}
      </OsdkProvider2>
    );

    const { result, unmount } = renderHook(
      () => useOsdkMediaQuery(mockMedia), // enabled defaults to true
      { wrapper },
    );

    await waitFor(() => {
      expect(result.current.content).toBeDefined();
    });

    unmount();

    // Blob URL cleanup is done via observableClient.media.releaseBlobUrl
    expect(mockObservableClient.media.releaseBlobUrl).toHaveBeenCalledWith(
      mockMedia,
    );
  });

  it("observes metadata with observeMetadata when enabled", async () => {
    const mockClient = createMockClient();
    let capturedObserver: Observer<MediaMetadataPayload> | undefined;
    const mockObservableClient = createMockObservableClient({
      observeMetadata: vi.fn().mockImplementation((coords, options, obs) => {
        capturedObserver = obs;
        return { unsubscribe: vi.fn() };
      }),
    });

    const coords: MediaPropertyLocation = {
      objectType: "TestObject",
      primaryKey: 555,
      propertyName: "media",
    };

    const wrapper = ({ children }: React.PropsWithChildren) => (
      <OsdkProvider2
        client={mockClient}
        observableClient={mockObservableClient}
      >
        {children}
      </OsdkProvider2>
    );

    const { result } = renderHook(
      () => useOsdkMediaQuery(coords), // enabled defaults to true
      { wrapper },
    );

    expect(mockObservableClient.observeMetadata).toHaveBeenCalled();

    // Simulate metadata update from observable
    act(() => {
      capturedObserver?.next({
        metadata: {
          path: "observed.jpg",
          mediaType: "image/jpeg",
          sizeBytes: 2048,
        },
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      });
    });

    await waitFor(() => {
      expect(result.current.metadata).toEqual({
        path: "observed.jpg",
        mediaType: "image/jpeg",
        sizeBytes: 2048,
      });
    });
  });

  it("invalidates cache when actions.invalidate is called", async () => {
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();

    const coords: MediaPropertyLocation = {
      objectType: "TestObject",
      primaryKey: 111,
      propertyName: "media",
    };

    const wrapper = ({ children }: React.PropsWithChildren) => (
      <OsdkProvider2
        client={mockClient}
        observableClient={mockObservableClient}
      >
        {children}
      </OsdkProvider2>
    );

    const { result } = renderHook(
      () => useOsdkMediaQuery(coords, { enabled: false }),
      { wrapper },
    );

    act(() => {
      result.current.actions.invalidate();
    });

    expect(mockObservableClient.media.clearCache).toHaveBeenCalledWith(coords);
  });

  it("handles disabled state", async () => {
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();

    const coords: MediaPropertyLocation = {
      objectType: "TestObject",
      primaryKey: 222,
      propertyName: "media",
    };

    const wrapper = ({ children }: React.PropsWithChildren) => (
      <OsdkProvider2
        client={mockClient}
        observableClient={mockObservableClient}
      >
        {children}
      </OsdkProvider2>
    );

    renderHook(
      () => useOsdkMediaQuery(coords, { enabled: false }),
      { wrapper },
    );

    // observeMetadata should not be called when disabled
    expect(mockObservableClient.observeMetadata).not.toHaveBeenCalled();
    // fetchContent should not be called when disabled
    expect(mockObservableClient.media.fetchContent).not.toHaveBeenCalled();
  });

  it("handles undefined mediaOrLocation", async () => {
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();

    const wrapper = ({ children }: React.PropsWithChildren) => (
      <OsdkProvider2
        client={mockClient}
        observableClient={mockObservableClient}
      >
        {children}
      </OsdkProvider2>
    );

    const { result } = renderHook(
      () => useOsdkMediaQuery(undefined),
      { wrapper },
    );

    expect(result.current.metadata).toBeUndefined();
    expect(result.current.content).toBeUndefined();
    expect(result.current.isLoading).toBe(false);

    // refetch should be a no-op when no Media object
    act(() => {
      result.current.actions.refetch();
    });
    expect(result.current.content).toBeUndefined();
  });

  it("handles Media object with getMediaSourceLocation", async () => {
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();

    const coords: MediaPropertyLocation = {
      objectType: "Employee",
      primaryKey: 999,
      propertyName: "photo",
    };

    const mockMedia = createMockMedia(coords);

    const wrapper = ({ children }: React.PropsWithChildren) => (
      <OsdkProvider2
        client={mockClient}
        observableClient={mockObservableClient}
      >
        {children}
      </OsdkProvider2>
    );

    renderHook(
      () => useOsdkMediaQuery(mockMedia), // enabled defaults to true
      { wrapper },
    );

    expect(mockObservableClient.observeMetadata).toHaveBeenCalledWith(
      coords,
      expect.any(Object),
      expect.any(Object),
    );
  });

  describe("race conditions", () => {
    it("should handle rapid mediaOrLocation changes", async () => {
      const mockClient = createMockClient();
      const mockObservableClient = createMockObservableClient();

      const coords1: MediaPropertyLocation = {
        objectType: "TestObject",
        primaryKey: 1,
        propertyName: "media",
      };

      const coords2: MediaPropertyLocation = {
        objectType: "TestObject",
        primaryKey: 2,
        propertyName: "media",
      };

      const wrapper = ({ children }: React.PropsWithChildren) => (
        <OsdkProvider2
          client={mockClient}
          observableClient={mockObservableClient}
        >
          {children}
        </OsdkProvider2>
      );

      let coords = coords1;
      const { result, rerender } = renderHook(
        () => useOsdkMediaQuery(coords, { enabled: false }),
        { wrapper },
      );

      // Rapidly change coordinates
      coords = coords2;
      rerender();

      coords = coords1;
      rerender();

      // Hook should still be functional
      expect(result.current.error).toBeUndefined();
    });

    it("should handle multiple rapid refetch calls", async () => {
      const mockBlob = new Blob(["test content"], { type: "image/jpeg" });
      const mockClient = createMockClient();
      const mockObservableClient = createMockObservableClient();

      let contentResolve: ((value: Blob) => void) | undefined;

      vi.mocked(mockObservableClient.media.fetchContent).mockImplementation(
        () =>
          new Promise<Blob>((resolve) => {
            contentResolve = resolve;
          }),
      );

      const coords: MediaPropertyLocation = {
        objectType: "TestObject",
        primaryKey: 1,
        propertyName: "media",
      };

      const mockMedia = createMockMedia(coords, mockBlob);

      const wrapper = ({ children }: React.PropsWithChildren) => (
        <OsdkProvider2
          client={mockClient}
          observableClient={mockObservableClient}
        >
          {children}
        </OsdkProvider2>
      );

      const { result } = renderHook(
        () => useOsdkMediaQuery(mockMedia, { enabled: false }),
        { wrapper },
      );

      // Start refetch
      act(() => {
        result.current.actions.refetch();
      });

      // Resolve
      await act(async () => {
        contentResolve!(mockBlob);
      });

      // Content should complete successfully
      await waitFor(() => {
        expect(result.current.content).toBeDefined();
      });
    });
  });
});
