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
import type { CacheKey } from "./MockCacheKeyGenerator.js";
import { MockCacheKeyGenerator } from "./MockCacheKeyGenerator.js";

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

export interface InjectedObject {
  objectType: string;
  primaryKey: string | number;
  mockId: string;
}

interface MockLayer {
  invalidateMock(mockId: string): void;
}

interface MockStore {
  invalidateObjectType(objectType: string): void;
  invalidateCacheKey(cacheKey: CacheKey): void;
}

export class MockManager {
  private mocks = new Map<string, MockResponse>();
  private requestLog: RequestLogEntry[] = [];
  private maxLogSize = 1000;
  private mockLayer?: MockLayer;
  private store?: MockStore;
  private injectedObjects = new Map<string, InjectedObject[]>();

  setStore(store: MockStore): void {
    this.store = store;
  }

  setMockLayer(layer: MockLayer): void {
    this.mockLayer = layer;
  }

  injectMockedObjectToCache(
    mockId: string,
    objectType: string,
    primaryKey: string | number,
    objectData: Record<string, unknown>,
  ): void {
    const objectMockId = `${mockId}-object-${primaryKey}`;
    this.mocks.set(objectMockId, {
      id: objectMockId,
      type: "object",
      matcher: {
        objectType,
        primaryKey: String(primaryKey),
      },
      response: {
        type: "object",
        object: objectData,
      },
      usedCount: 0,
      enabled: true,
      cacheKey: {
        type: "object",
        apiName: objectType,
        primaryKey,
        otherKeys: [objectType, primaryKey],
      },
    });

    let injectedList = this.injectedObjects.get(mockId);
    if (!injectedList) {
      injectedList = [];
      this.injectedObjects.set(mockId, injectedList);
    }
    injectedList.push({ objectType, primaryKey, mockId: objectMockId });

    if (this.mockLayer) {
      this.mockLayer.invalidateMock(objectMockId);
    }
    if (this.store) {
      this.store.invalidateObjectType(objectType);
    }
  }

  cleanupInjectedObjects(mockId: string): void {
    const injected = this.injectedObjects.get(mockId);
    if (!injected || injected.length === 0) {
      return;
    }

    const affectedTypes = new Set<string>();

    for (const obj of injected) {
      this.mocks.delete(obj.mockId);
      if (this.mockLayer) {
        this.mockLayer.invalidateMock(obj.mockId);
      }
      affectedTypes.add(obj.objectType);
    }

    if (this.store) {
      for (const type of affectedTypes) {
        this.store.invalidateObjectType(type);
      }
    }

    this.injectedObjects.delete(mockId);
  }

  registerMock(mock: MockResponse): string {
    const id = mock.id
      || `mock-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;

    if (mock.primitive) {
      const cacheKey = MockCacheKeyGenerator.generateCacheKey(mock.primitive);
      if (cacheKey) {
        mock.cacheKey = cacheKey;
      }
    }

    this.mocks.set(id, { ...mock, id });

    if (this.mockLayer) {
      this.mockLayer.invalidateMock(id);
    }

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
    if (!mock) {
      return false;
    }

    if (mock.enabled && updates.enabled === false) {
      this.cleanupInjectedObjects(id);
    }

    this.mocks.set(id, { ...mock, ...updates, id });
    return true;
  }

  removeMock(id: string): boolean {
    const mock = this.mocks.get(id);
    if (!mock) {
      return false;
    }

    this.cleanupInjectedObjects(id);
    this.mocks.delete(id);

    if (this.mockLayer) {
      this.mockLayer.invalidateMock(id);
    }
    if (this.store && mock.cacheKey) {
      this.store.invalidateCacheKey(mock.cacheKey);
    }

    return true;
  }

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
        let response: unknown;

        if (mock.response.type === "object") {
          response = mock.response.object;
        } else if (mock.response.type === "list") {
          response = mock.response.list;
        } else if (mock.response.type === "action") {
          response = mock.response.result;
        } else {
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
