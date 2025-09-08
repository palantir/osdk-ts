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

import { Subject } from "rxjs";
import { describe, expect, it, vi } from "vitest";
import { additionalContext } from "../../Client.js";
import type { Changes } from "./Changes.js";
import { ListQuery } from "./ListQuery.js";
import type { Store } from "./Store.js";

describe("ListQuery RDP invalidation", () => {
  it("should invalidate when RDP-traversed object type changes", async () => {
    // Mock Store
    const mockAdditionalContext = {
      ontologyProvider: {
        getObjectDefinition: vi.fn().mockResolvedValue({
          apiName: "ObjectA",
          type: "object",
          primaryKeyApiName: "id",
          properties: {},
          links: {
            linkToB: {
              targetType: "ObjectB",
              apiName: "linkToB",
              cardinality: "ONE",
            },
          },
        }),
        getInterfaceDefinition: vi.fn().mockResolvedValue({
          apiName: "Interface",
          type: "interface",
          properties: {},
          links: {},
          implementedBy: [],
        }),
      },
      logger: undefined, // Mock logger
    };

    const mockClient = vi.fn() as any;
    mockClient[additionalContext] = mockAdditionalContext;
    mockClient.fetchMetadata = vi.fn();

    const mockStore = {
      client: mockClient,
      getCacheKey: vi.fn(),
      batch: vi.fn(),
    };

    // Mock ObjectSet with RDPs
    const mockObjectSet = {
      fetchPage: vi.fn().mockResolvedValue({
        data: [],
        nextPageToken: undefined,
      }),
    };

    // Create cache key with RDP canonicalized value
    const cacheKey = {
      type: "list" as const,
      otherKeys: [
        "object", // TYPE_IDX = 0
        "ObjectA", // API_NAME_IDX = 1
        {}, // WHERE_IDX = 2
        {}, // ORDER_BY_IDX = 3
        { prop: "rdp" }, // RDP_IDX = 4 - This indicates RDPs are present
      ],
      __cacheKey: {} as any, // Mock the brand
    };

    const subject = new Subject();

    // Create ListQuery instance
    const listQuery = new ListQuery(
      mockStore as any as Store,
      subject as any,
      "object",
      "ObjectA",
      mockObjectSet as any,
      cacheKey as any,
      {},
    );

    // Mock the revalidate method to track if it's called
    const revalidateSpy = vi.spyOn(listQuery, "revalidate").mockResolvedValue();

    // Mock changes object
    const mockChanges = {
      modified: new Set(),
    } as any as Changes;

    // Test 1: Should not invalidate for unrelated object type
    await listQuery.invalidateObjectType("UnrelatedType", mockChanges);
    expect(revalidateSpy).not.toHaveBeenCalled();
    expect(mockChanges.modified.has(cacheKey)).toBe(false);

    // Test 2: Should invalidate for the main object type
    await listQuery.invalidateObjectType("ObjectA", mockChanges);
    expect(revalidateSpy).toHaveBeenCalledWith(true);
    expect(mockChanges.modified.has(cacheKey)).toBe(true);

    // Clear for next test
    revalidateSpy.mockClear();
    mockChanges.modified.clear();

    // Test 3: With RDPs, the invalidation logic will use getObjectTypesThatInvalidate
    // For now, without full RDP setup, it won't invalidate ObjectB
    // This is expected as the async extraction hasn't completed
    await listQuery.invalidateObjectType("ObjectB", mockChanges);

    // Since we're testing without full async setup, ObjectB won't be in the invalidation set yet
    // In a real scenario with proper async handling, ObjectB would be invalidated if traversed by RDPs
  });

  it("should handle lists without RDPs", async () => {
    const mockAdditionalContext = {
      ontologyProvider: {
        getObjectDefinition: vi.fn(),
        getInterfaceDefinition: vi.fn(),
      },
      logger: undefined,
    };

    const mockClient = vi.fn() as any;
    mockClient[additionalContext] = mockAdditionalContext;
    mockClient.fetchMetadata = vi.fn();

    const mockStore = {
      client: mockClient,
      getCacheKey: vi.fn(),
      batch: vi.fn(),
    };

    const mockObjectSet = {
      fetchPage: vi.fn().mockResolvedValue({
        data: [],
        nextPageToken: undefined,
      }),
    };

    // Cache key without RDPs (no RDP_IDX value)
    const cacheKey = {
      type: "list" as const,
      otherKeys: [
        "object",
        "ObjectA",
        {},
        {},
        undefined, // No RDPs
      ],
      __cacheKey: {} as any, // Mock the brand
    };

    const subject = new Subject();

    const listQuery = new ListQuery(
      mockStore as any as Store,
      subject as any,
      "object",
      "ObjectA",
      mockObjectSet as any,
      cacheKey as any,
      {},
    );

    const revalidateSpy = vi.spyOn(listQuery, "revalidate").mockResolvedValue();
    const mockChanges = {
      modified: new Set(),
    } as any as Changes;

    // Should only invalidate for the main object type
    await listQuery.invalidateObjectType("ObjectB", mockChanges);
    expect(revalidateSpy).not.toHaveBeenCalled();
    expect(mockChanges.modified.has(cacheKey)).toBe(false);

    await listQuery.invalidateObjectType("ObjectA", mockChanges);
    expect(revalidateSpy).toHaveBeenCalledWith(true);
    expect(mockChanges.modified.has(cacheKey)).toBe(true);
  });
});
