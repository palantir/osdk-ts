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

import type { Attachment, Media } from "@osdk/api";
import * as OntologiesV2 from "@osdk/foundry.ontologies";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { additionalContext } from "../../../Client.js";
import type { MediaPropertyLocation } from "../../ObservableClient/MediaTypes.js";
import type { CacheKeys } from "../CacheKeys.js";
import type { KnownCacheKey } from "../KnownCacheKey.js";
import type { Store } from "../Store.js";
import { MediaHelper } from "./MediaHelper.js";

vi.mock("@osdk/foundry.ontologies");

// Create a minimal mock store for testing MediaHelper
// NOTE: Store is a complex internal interface with many private properties
// In test code, we accept minimal type assertions to create workable mocks
function createMockStore(): Store {
  const mockStore = {
    client: {
      [additionalContext]: {
        ontologyRid: Promise.resolve("ri.ontology.rid"),
      },
    },
    invalidateObject: vi.fn().mockResolvedValue(undefined),
    queries: {
      delete: vi.fn(),
      get: vi.fn(),
      add: vi.fn(),
      peek: vi.fn(),
      keys: vi.fn().mockReturnValue([]),
    },
    subjects: { get: vi.fn(), delete: vi.fn() },
    layers: { subjects: { get: vi.fn() } },
    whereCanonicalizer: {},
    orderByCanonicalizer: {},
    rdpCanonicalizer: {},
    intersectCanonicalizer: {},
    pivotCanonicalizer: {},
    cacheKeys: { get: vi.fn() },
    objectCacheKeyRegistry: {},
    aggregations: {},
    lists: {},
    objects: {},
    links: {},
    media: {},
    objectSets: {},
    batch: vi.fn(),
  };
  // Single type assertion at the end for complex internal type
  return mockStore as unknown as Store;
}

function createMockCacheKeys(): CacheKeys<KnownCacheKey> {
  const mockCacheKeys = {
    get: vi.fn().mockReturnValue("mock-cache-key"),
    add: vi.fn(),
    delete: vi.fn(),
    clear: vi.fn(),
    entries: vi.fn().mockReturnValue([]),
  };
  // Single type assertion for complex internal type
  return mockCacheKeys as unknown as CacheKeys<KnownCacheKey>;
}

describe("MediaHelper", () => {
  let mockStore: Store;
  let mockCacheKeys: CacheKeys<KnownCacheKey>;
  let mediaHelper: MediaHelper;

  beforeEach(() => {
    vi.clearAllMocks();
    mockStore = createMockStore();
    mockCacheKeys = createMockCacheKeys();
    mediaHelper = new MediaHelper(mockStore, mockCacheKeys);
  });

  it("generates cache keys for different media types", () => {
    const mediaWithRef: Media = {
      getMediaReference: () => ({
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
      fetchMetadata: vi.fn(),
      fetchContents: vi.fn(),
    };

    const attachment: Attachment = {
      rid: "attachment-rid-123",
      fetchMetadata: vi.fn(),
      fetchContents: vi.fn(),
    };

    const mediaKey = mediaHelper.getCacheKey(mediaWithRef);
    expect(mediaKey).toBe("media:ref:rid1:rid2:rid3");

    const attachmentKey = mediaHelper.getCacheKey(attachment);
    expect(attachmentKey).toBe("attachment:attachment-rid-123");
  });

  it("manages cache lifecycle operations", () => {
    const coords: MediaPropertyLocation = {
      objectType: "Employee",
      primaryKey: "789",
      propertyName: "avatar",
    };

    mediaHelper.clearCache(coords);
    expect(mockStore.queries.delete).toHaveBeenCalled();

    mockStore.queries.keys = vi
      .fn()
      .mockReturnValue([
        { type: "mediaMetadata" },
        { type: "otherType" },
        { type: "mediaMetadata" },
      ]);

    mediaHelper.clearAll();
    expect(mockStore.queries.delete).toHaveBeenCalledTimes(3);
  });

  it("creates and releases blob URLs for cached content", () => {
    const coords: MediaPropertyLocation = {
      objectType: "Employee",
      primaryKey: "999",
      propertyName: "image",
    };

    const blobUrl = mediaHelper.createBlobUrl(coords);
    expect(blobUrl).toBeUndefined();

    expect(() => mediaHelper.releaseBlobUrl(coords)).not.toThrow();
  });

  it("handles missing data gracefully", () => {
    const coords: MediaPropertyLocation = {
      objectType: "Employee",
      primaryKey: "000",
      propertyName: "missing",
    };

    expect(mediaHelper.getCachedMetadata(coords)).toBeUndefined();
    expect(mediaHelper.getCachedContent(coords)).toBeUndefined();
    expect(() => mediaHelper.dispose()).not.toThrow();
  });

  describe("getCachedContent preview cache key", () => {
    const coords: MediaPropertyLocation = {
      objectType: "Employee",
      primaryKey: "123",
      propertyName: "avatar",
    };

    function mockFetchResponse(): void {
      const mockGetMediaContent = vi.mocked(
        OntologiesV2.MediaReferenceProperties.getMediaContent,
      );
      mockGetMediaContent.mockResolvedValue(
        new Response("fake-image-data", {
          headers: { "content-type": "image/png" },
        }),
      );
    }

    it("getCachedContent returns blob after fetchContent with preview", async () => {
      mockFetchResponse();
      await mediaHelper.fetchContent(coords, { preview: true });
      const cached = mediaHelper.getCachedContent(coords, { preview: true });
      expect(cached).toBeInstanceOf(Blob);
    });

    it("getCachedContent defaults to preview=true", async () => {
      mockFetchResponse();
      await mediaHelper.fetchContent(coords);
      const cached = mediaHelper.getCachedContent(coords);
      expect(cached).toBeInstanceOf(Blob);
    });

    it("getCachedContent with preview=false returns undefined for preview-cached content", async () => {
      mockFetchResponse();
      await mediaHelper.fetchContent(coords, { preview: true });
      const cached = mediaHelper.getCachedContent(coords, { preview: false });
      expect(cached).toBeUndefined();
    });
  });
});
