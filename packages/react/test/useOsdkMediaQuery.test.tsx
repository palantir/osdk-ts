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

import type { MediaMetadata } from "@osdk/api";
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
      fetchMetadata: vi.fn().mockResolvedValue(mockMetadata),
      fetchContent: vi.fn().mockResolvedValue(mockBlob),
      getCachedMetadata: vi.fn().mockReturnValue(undefined),
      getCachedContent: vi.fn().mockReturnValue(undefined),
      createBlobUrl: vi.fn().mockReturnValue(undefined),
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

  it("works with metadata and content fetch", async () => {
    const mockMetadata: MediaMetadata = {
      path: "test.jpg",
      mediaType: "image/jpeg",
      sizeBytes: 2048,
    };
    const mockBlob = new Blob(["test content"], { type: "image/jpeg" });
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();
    vi.mocked(mockObservableClient.media.fetchMetadata).mockResolvedValue(
      mockMetadata,
    );
    vi.mocked(mockObservableClient.media.fetchContent).mockResolvedValue(
      mockBlob,
    );

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
      () =>
        useOsdkMediaQuery(coords, {
          autoLoadMetadata: false,
          autoLoadContent: false,
        }),
      { wrapper },
    );

    expect(result.current.metadata).toBeUndefined();
    expect(result.current.content).toBeUndefined();
    expect(result.current.isLoading).toBe(false);

    await act(async () => {
      await result.current.fetchMetadata();
    });

    expect(result.current.metadata).toEqual(mockMetadata);
    expect(mockObservableClient.media.fetchMetadata).toHaveBeenCalledWith(
      coords,
    );

    await act(async () => {
      await result.current.fetchContent();
    });

    expect(result.current.content).toEqual(mockBlob);
    expect(result.current.url).toBe("blob:mock-url-123");
    expect(mockCreateObjectURL).toHaveBeenCalledWith(mockBlob);
  });

  it("handles errors appropriately", async () => {
    const mockError = new Error("Fetch failed");
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();
    vi.mocked(mockObservableClient.media.fetchMetadata).mockRejectedValue(
      mockError,
    );
    vi.mocked(mockObservableClient.media.fetchContent).mockRejectedValue(
      mockError,
    );

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
      () => useOsdkMediaQuery(coords, { autoLoadMetadata: false }),
      { wrapper },
    );

    await act(async () => {
      await expect(result.current.fetchMetadata()).rejects.toThrow(
        "Fetch failed",
      );
    });

    await waitFor(() => {
      expect(result.current.error).toEqual(mockError);
    });

    await act(async () => {
      await expect(result.current.fetchContent()).rejects.toThrow(
        "Fetch failed",
      );
    });

    await waitFor(() => {
      expect(result.current.error).toBeDefined();
    });
  });

  it("works with auto-loading and caching", async () => {
    const mockMetadata: MediaMetadata = {
      path: "cached.jpg",
      mediaType: "image/jpeg",
      sizeBytes: 512,
    };
    const mockBlob = new Blob(["cached"], { type: "image/jpeg" });
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();
    vi.mocked(mockObservableClient.media.getCachedMetadata).mockReturnValue(
      mockMetadata,
    );
    vi.mocked(mockObservableClient.media.getCachedContent).mockReturnValue(
      mockBlob,
    );
    vi.mocked(mockObservableClient.media.createBlobUrl).mockReturnValue(
      "blob:cached-url",
    );

    const coords: MediaPropertyLocation = {
      objectType: "TestObject",
      primaryKey: 456,
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
      () =>
        useOsdkMediaQuery(coords, {
          autoLoadMetadata: true,
          autoLoadContent: true,
        }),
      { wrapper },
    );

    await waitFor(() => {
      expect(result.current.metadata).toEqual(mockMetadata);
      expect(result.current.content).toEqual(mockBlob);
      expect(result.current.url).toBe("blob:cached-url");
    });

    expect(mockObservableClient.media.fetchMetadata).not.toHaveBeenCalled();
    expect(mockObservableClient.media.fetchContent).not.toHaveBeenCalled();
  });

  it("cleans up on unmount", async () => {
    const mockClient = createMockClient();
    const mockUnsubscribe = vi.fn();
    const mockObservableClient = createMockObservableClient({
      observeMetadata: vi.fn().mockReturnValue({
        unsubscribe: mockUnsubscribe,
      }),
    });

    const coords: MediaPropertyLocation = {
      objectType: "TestObject",
      primaryKey: 789,
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

    const { unmount } = renderHook(
      () => useOsdkMediaQuery(coords, { autoLoadMetadata: true }),
      { wrapper },
    );

    unmount();

    expect(mockUnsubscribe).toHaveBeenCalled();
  });

  it("prevents concurrent refreshes", async () => {
    const mockClient = createMockClient();
    const mockObservableClient = createMockObservableClient();
    let resolveMetadata: (value: MediaMetadata) => void;
    const metadataPromise = new Promise<MediaMetadata>((resolve) => {
      resolveMetadata = resolve;
    });
    vi.mocked(mockObservableClient.media.fetchMetadata).mockReturnValue(
      metadataPromise,
    );

    const coords: MediaPropertyLocation = {
      objectType: "TestObject",
      primaryKey: 999,
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
      () => useOsdkMediaQuery(coords, { autoLoadMetadata: true }),
      { wrapper },
    );

    act(() => {
      void result.current.refresh();
      void result.current.refresh();
      void result.current.refresh();
    });

    await act(async () => {
      resolveMetadata!({
        path: "test.jpg",
        mediaType: "image/jpeg",
        sizeBytes: 1024,
      });
      await metadataPromise;
    });

    await waitFor(() => {
      expect(result.current.metadata).toBeDefined();
    });

    expect(mockObservableClient.media.fetchMetadata).toHaveBeenCalledTimes(1);
  });

  it("updates from observable changes", async () => {
    const mockClient = createMockClient();
    let observer: Observer<MediaMetadataPayload> | undefined;
    const mockObservableClient = createMockObservableClient({
      observeMetadata: vi.fn().mockImplementation((coords, options, obs) => {
        observer = obs;
        setTimeout(() => {
          observer?.next({
            metadata: {
              path: "updated.jpg",
              mediaType: "image/jpeg",
              sizeBytes: 2048,
            },
            status: "loaded",
          });
        }, 10);
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
      () => useOsdkMediaQuery(coords, { autoLoadMetadata: true }),
      { wrapper },
    );

    await waitFor(() => {
      expect(result.current.metadata).toEqual({
        path: "updated.jpg",
        mediaType: "image/jpeg",
        sizeBytes: 2048,
      });
    });
  });

  describe("race conditions", () => {
    it("should handle rapid mediaOrLocation changes", async () => {
      const mockMetadata: MediaMetadata = {
        path: "test.jpg",
        mediaType: "image/jpeg",
        sizeBytes: 1024,
      };
      const mockClient = createMockClient();
      const mockObservableClient = createMockObservableClient();
      vi.mocked(mockObservableClient.media.fetchMetadata).mockResolvedValue(
        mockMetadata,
      );

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
        () => useOsdkMediaQuery(coords, { autoLoadMetadata: false }),
        { wrapper },
      );

      // Rapidly change coordinates
      act(() => {
        coords = coords2;
      });
      rerender();

      act(() => {
        coords = coords1;
      });
      rerender();

      // Hook should still be functional
      await act(async () => {
        await result.current.fetchMetadata();
      });

      expect(result.current.metadata).toEqual(mockMetadata);
    });

    it("should handle concurrent fetch operations", async () => {
      const mockMetadata: MediaMetadata = {
        path: "test.jpg",
        mediaType: "image/jpeg",
        sizeBytes: 1024,
      };
      const mockBlob = new Blob(["test content"], { type: "image/jpeg" });
      const mockClient = createMockClient();
      const mockObservableClient = createMockObservableClient();

      let metadataResolve: any;
      let contentResolve: any;

      const metadataPromise = new Promise((resolve) => {
        metadataResolve = resolve;
      });
      const contentPromise = new Promise((resolve) => {
        contentResolve = resolve;
      });

      vi.mocked(mockObservableClient.media.fetchMetadata).mockReturnValue(
        metadataPromise.then(() => mockMetadata),
      );
      vi.mocked(mockObservableClient.media.fetchContent).mockReturnValue(
        contentPromise.then(() => mockBlob),
      );

      const coords: MediaPropertyLocation = {
        objectType: "TestObject",
        primaryKey: 1,
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
        () => useOsdkMediaQuery(coords, { autoLoadMetadata: false }),
        { wrapper },
      );

      // Start both fetches concurrently
      const metadataPromiseResult = act(() => result.current.fetchMetadata());
      const contentPromiseResult = act(() => result.current.fetchContent());

      // Resolve them in different orders
      contentResolve();
      metadataResolve();

      await Promise.all([metadataPromiseResult, contentPromiseResult]);

      // Both should complete successfully
      expect(result.current.metadata).toEqual(mockMetadata);
      expect(result.current.content).toEqual(mockBlob);
    });

    it("should handle refresh while fetch is in progress", async () => {
      const mockMetadata: MediaMetadata = {
        path: "test.jpg",
        mediaType: "image/jpeg",
        sizeBytes: 1024,
      };
      const mockClient = createMockClient();
      const mockObservableClient = createMockObservableClient();

      let resolveMetadata: any;
      const metadataPromise = new Promise((resolve) => {
        resolveMetadata = resolve;
      });

      vi.mocked(mockObservableClient.media.fetchMetadata).mockReturnValue(
        metadataPromise.then(() => mockMetadata),
      );

      const coords: MediaPropertyLocation = {
        objectType: "TestObject",
        primaryKey: 1,
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
        () => useOsdkMediaQuery(coords, { autoLoadMetadata: false }),
        { wrapper },
      );

      // Start fetch
      const fetchPromise = act(() => result.current.fetchMetadata());

      // Call refresh while fetch is in progress
      act(() => {
        result.current.refresh();
      });

      // Complete original fetch
      resolveMetadata();
      await fetchPromise;

      // State should be consistent
      expect(result.current.error).toBeUndefined();
    });

    it("should handle simultaneous clearCache and fetch", async () => {
      const mockMetadata: MediaMetadata = {
        path: "test.jpg",
        mediaType: "image/jpeg",
        sizeBytes: 1024,
      };
      const mockClient = createMockClient();
      const mockObservableClient = createMockObservableClient();
      vi.mocked(mockObservableClient.media.fetchMetadata).mockResolvedValue(
        mockMetadata,
      );

      const coords: MediaPropertyLocation = {
        objectType: "TestObject",
        primaryKey: 1,
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
        () => useOsdkMediaQuery(coords, { autoLoadMetadata: false }),
        { wrapper },
      );

      // Clear cache while fetching
      act(() => {
        result.current.clearCache();
        result.current.fetchMetadata();
      });

      await waitFor(() => {
        // Should eventually have metadata despite cache clear
        expect(result.current.metadata).toEqual(mockMetadata);
      });
    });
  });
});
