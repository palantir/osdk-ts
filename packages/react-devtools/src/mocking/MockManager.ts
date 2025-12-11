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

import type { SelectedPrimitive } from "../components/PrimitiveSelectionPanel.js";
import type { CacheKey } from "../utils/MockCacheKeyGenerator.js";
import { MockCacheKeyGenerator } from "../utils/MockCacheKeyGenerator.js";

export interface MockMatcher {
  objectType?: string;
  primaryKey?: string | RegExp;
  actionName?: string;
  whereClause?: Record<string, unknown>;
  linkName?: string;
}

export type MockResponseData =
  | { type: "object"; object: unknown }
  | { type: "list"; list: unknown[]; hasMore: boolean }
  | { type: "action"; result: unknown }
  | { type: "error"; error: string }
  | { type: "passthrough" };

export interface MockResponse {
  id: string;
  type: "object" | "list" | "action" | "links";
  matcher: MockMatcher;
  response: MockResponseData;
  delay?: number;
  failureRate?: number;
  maxUses?: number;
  usedCount: number;
  enabled: boolean;
  cacheKey?: CacheKey;
  primitive?: SelectedPrimitive;
  usePayload?: boolean;
  payload?: string;
}

export interface MockRequest {
  type: "object" | "list" | "action" | "links";
  objectType?: string;
  primaryKey?: string;
  actionName?: string;
  whereClause?: Record<string, unknown>;
  linkName?: string;
}

export interface RequestLogEntry {
  request: MockRequest;
  matchedMock?: string;
  timestamp: number;
}

export class MockManager {
  private mocks = new Map<string, MockResponse>();
  private requestLog: RequestLogEntry[] = [];
  private maxLogSize = 1000;
  private mockLayer?: any; // MockLayer from @osdk/client
  private store?: any; // Store from @osdk/client

  /**
   * Set the store reference for cache integration
   */
  setStore(store: any): void {
    this.store = store;
  }

  /**
   * Set the mock layer for direct updates
   */
  setMockLayer(layer: any): void {
    this.mockLayer = layer;
  }

  registerMock(mock: MockResponse): string {
    const id = mock.id
      || `mock-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;

    // Generate cache key if primitive is provided
    if (mock.primitive) {
      const cacheKey = MockCacheKeyGenerator.generateCacheKey(mock.primitive);
      if (cacheKey) {
        mock.cacheKey = cacheKey;
      }
    }

    this.mocks.set(id, { ...mock, id });

    // Notify mock layer to clear cached version
    if (this.mockLayer) {
      this.mockLayer.invalidateMock(id);
    }

    // Trigger cache invalidation for affected queries
    if (this.store && mock.cacheKey) {
      this.store.invalidateCacheKey(mock.cacheKey);
    }

    return id;
  }

  findMock(request: MockRequest): MockResponse | null {
    for (const mock of this.mocks.values()) {
      if (!mock.enabled) {
        continue;
      }
      if (mock.type !== request.type) {
        continue;
      }

      if (mock.maxUses && mock.usedCount >= mock.maxUses) {
        continue;
      }

      const isMatch = this.matches(mock.matcher, request);

      if (isMatch) {
        this.logRequest(request, mock.id);

        mock.usedCount++;

        if (mock.failureRate && Math.random() < mock.failureRate) {
          return {
            ...mock,
            response: {
              type: "error",
              error: "Simulated failure: MOCK_FAILURE",
            },
          };
        }

        return mock;
      }
    }

    this.logRequest(request);
    return null;
  }

  private matches(matcher: MockMatcher, request: MockRequest): boolean {
    if (matcher.objectType && matcher.objectType !== request.objectType) {
      return false;
    }

    if (matcher.primaryKey) {
      if (matcher.primaryKey instanceof RegExp) {
        if (
          !request.primaryKey || !matcher.primaryKey.test(request.primaryKey)
        ) {
          return false;
        }
      } else if (matcher.primaryKey !== request.primaryKey) {
        return false;
      }
    }

    if (matcher.actionName && matcher.actionName !== request.actionName) {
      return false;
    }

    if (matcher.whereClause) {
      if (
        JSON.stringify(matcher.whereClause)
          !== JSON.stringify(request.whereClause)
      ) {
        return false;
      }
    }

    if (matcher.linkName && matcher.linkName !== request.linkName) {
      return false;
    }

    return true;
  }

  private logRequest(request: MockRequest, matchedMock?: string): void {
    this.requestLog.push({
      request,
      matchedMock,
      timestamp: Date.now(),
    });

    if (this.requestLog.length > this.maxLogSize) {
      this.requestLog.shift();
    }
  }

  getMocks(): MockResponse[] {
    return Array.from(this.mocks.values());
  }

  getMock(id: string): MockResponse | undefined {
    return this.mocks.get(id);
  }

  updateMock(id: string, updates: Partial<MockResponse>): boolean {
    const mock = this.mocks.get(id);
    if (!mock) return false;

    this.mocks.set(id, { ...mock, ...updates, id });
    return true;
  }

  removeMock(id: string): boolean {
    const mock = this.mocks.get(id);
    if (mock) {
      this.mocks.delete(id);

      // Clear from mock layer
      if (this.mockLayer) {
        this.mockLayer.invalidateMock(id);
      }

      // Trigger re-fetch for affected queries
      if (this.store && mock.cacheKey) {
        this.store.invalidateCacheKey(mock.cacheKey);
      }

      return true;
    }
    return false;
  }

  /**
   * Find mock by cache key instead of query params
   * This is used by the MockLayer to find mocks efficiently
   */
  findMockByCacheKey(
    cacheKey: CacheKey,
  ):
    | { id: string; response: unknown; metadata?: Record<string, unknown> }
    | null
  {
    for (const mock of this.mocks.values()) {
      if (
        mock.enabled && mock.cacheKey
        && MockCacheKeyGenerator.cacheKeysMatch(mock.cacheKey, cacheKey)
      ) {
        // Convert mock response to the format expected by MockLayer
        let response: unknown;

        if (mock.response.type === "object") {
          response = mock.response.object;
        } else if (mock.response.type === "list") {
          response = mock.response.list;
        } else if (mock.response.type === "action") {
          response = mock.response.result;
        } else {
          // Error response
          response = null;
        }

        return {
          id: mock.id,
          response,
          metadata: {
            mockType: mock.type,
            usedCount: mock.usedCount,
          },
        };
      }
    }
    return null;
  }

  getRequestLog(): RequestLogEntry[] {
    return [...this.requestLog];
  }

  clear(): void {
    this.mocks.clear();
    this.requestLog = [];
  }

  exportMocks(): string {
    return JSON.stringify(Array.from(this.mocks.values()), null, 2);
  }

  importMocks(json: string): number {
    try {
      const imported = JSON.parse(json) as MockResponse[];
      for (const mock of imported) {
        this.registerMock(mock);
      }
      return imported.length;
    } catch {
      // Failed to parse JSON - return 0 imported
      return 0;
    }
  }

  getStats(): {
    totalMocks: number;
    enabledMocks: number;
    disabledMocks: number;
    exhaustedMocks: number;
    totalRequests: number;
    matchedRequests: number;
  } {
    let enabledMocks = 0;
    let disabledMocks = 0;
    let exhaustedMocks = 0;

    for (const mock of this.mocks.values()) {
      if (mock.enabled) {
        enabledMocks++;
      } else {
        disabledMocks++;
      }

      if (mock.maxUses && mock.usedCount >= mock.maxUses) {
        exhaustedMocks++;
      }
    }

    const matchedRequests =
      this.requestLog.filter((entry) => entry.matchedMock).length;

    return {
      totalMocks: this.mocks.size,
      enabledMocks,
      disabledMocks,
      exhaustedMocks,
      totalRequests: this.requestLog.length,
      matchedRequests,
    };
  }
}
