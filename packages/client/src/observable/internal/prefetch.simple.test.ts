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

import { describe, expect, it, vi } from "vitest";
import { additionalContext } from "../../Client.js";
import type { Client } from "../../Client.js";
import { ObservableClientImpl } from "./ObservableClientImpl.js";
import { Store } from "./Store.js";

describe("Prefetch functionality", () => {
  function createMockClient(): Client {
    return {
      [additionalContext]: {
        logger: undefined,
      },
    } as any;
  }

  it("should expose prefetchObject method", () => {
    const mockClient = createMockClient();
    const store = new Store(mockClient);
    const observableClient = new ObservableClientImpl(mockClient, store);

    expect(observableClient.prefetchObject).toBeDefined();
    expect(typeof observableClient.prefetchObject).toBe("function");
  });

  it("should expose prefetchList method", () => {
    const mockClient = createMockClient();
    const store = new Store(mockClient);
    const observableClient = new ObservableClientImpl(mockClient, store);

    expect(observableClient.prefetchList).toBeDefined();
    expect(typeof observableClient.prefetchList).toBe("function");
  });

  it("prefetchObject should call query.revalidate", async () => {
    const mockClient = createMockClient();
    const store = new Store(mockClient);
    
    // Mock the getQuery method
    const mockQuery = {
      revalidate: vi.fn().mockResolvedValue(undefined),
    };
    
    vi.spyOn(store.objects, "getQuery").mockReturnValue(mockQuery as any);
    
    const observableClient = new ObservableClientImpl(mockClient, store);

    // Call prefetchObject
    await observableClient.prefetchObject(
      { apiName: "Employee" } as any,
      "emp-123",
      { mode: "offline" },
    );

    // Verify getQuery was called with correct params
    expect(store.objects.getQuery).toHaveBeenCalledWith({
      apiName: { apiName: "Employee" },
      pk: "emp-123",
      mode: "offline",
      select: undefined,
    });

    // Verify revalidate was called
    expect(mockQuery.revalidate).toHaveBeenCalledTimes(1);
  });

  it("prefetchList should call query.revalidate", async () => {
    const mockClient = createMockClient();
    const store = new Store(mockClient);
    
    // Mock the getQuery method
    const mockQuery = {
      revalidate: vi.fn().mockResolvedValue(undefined),
    };
    
    vi.spyOn(store.lists, "getQuery").mockReturnValue(mockQuery as any);
    
    const observableClient = new ObservableClientImpl(mockClient, store);

    // Call prefetchList
    await observableClient.prefetchList({
      type: { apiName: "Employee" } as any,
      where: { department: "Engineering" },
      pageSize: 10,
    });

    // Verify getQuery was called with correct params
    expect(store.lists.getQuery).toHaveBeenCalledWith({
      type: { apiName: "Employee" },
      where: { department: "Engineering" },
      pageSize: 10,
      dedupeInterval: 5000, // Default value
    });

    // Verify revalidate was called
    expect(mockQuery.revalidate).toHaveBeenCalledTimes(1);
  });

  it("prefetchList should use provided dedupeInterval", async () => {
    const mockClient = createMockClient();
    const store = new Store(mockClient);
    
    // Mock the getQuery method
    const mockQuery = {
      revalidate: vi.fn().mockResolvedValue(undefined),
    };
    
    vi.spyOn(store.lists, "getQuery").mockReturnValue(mockQuery as any);
    
    const observableClient = new ObservableClientImpl(mockClient, store);

    // Call prefetchList with custom dedupeInterval
    await observableClient.prefetchList({
      type: { apiName: "Todo" } as any,
      where: {},
      dedupeInterval: 10000,
    });

    // Verify getQuery was called with custom dedupeInterval
    expect(store.lists.getQuery).toHaveBeenCalledWith({
      type: { apiName: "Todo" },
      where: {},
      dedupeInterval: 10000,
    });
  });

  it("prefetchObject should handle errors gracefully", async () => {
    const mockClient = createMockClient();
    const store = new Store(mockClient);
    
    // Mock the getQuery method to throw
    const mockQuery = {
      revalidate: vi.fn().mockRejectedValue(new Error("Network error")),
    };
    
    vi.spyOn(store.objects, "getQuery").mockReturnValue(mockQuery as any);
    
    const observableClient = new ObservableClientImpl(mockClient, store);

    // prefetchObject should not throw, just complete
    await expect(
      observableClient.prefetchObject(
        { apiName: "Employee" } as any,
        "emp-123",
      )
    ).resolves.toBeUndefined();
  });

  it("prefetchList should handle errors gracefully", async () => {
    const mockClient = createMockClient();
    const store = new Store(mockClient);
    
    // Mock the getQuery method to throw
    const mockQuery = {
      revalidate: vi.fn().mockRejectedValue(new Error("Network error")),
    };
    
    vi.spyOn(store.lists, "getQuery").mockReturnValue(mockQuery as any);
    
    const observableClient = new ObservableClientImpl(mockClient, store);

    // prefetchList should not throw, just complete
    await expect(
      observableClient.prefetchList({
        type: { apiName: "Todo" } as any,
        where: {},
      })
    ).resolves.toBeUndefined();
  });
});