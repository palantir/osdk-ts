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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import { act, renderHook } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { useObjectSet } from "../src/new/useObjectSet.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

const MockObjectType2 = {
  apiName: "DifferentObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

const createMockObjectSet = (type: ObjectTypeDefinition) =>
  ({
    $__EXPERIMENTAL_objectSet: true,
    type,
    $objectSetInternals: { def: type },
  }) as unknown as ObjectSet<typeof type>;

const mockObjectSet = createMockObjectSet(MockObjectType);

describe(useObjectSet, () => {
  let capturedObserver: {
    next: (value: any) => void;
    error: (err: any) => void;
  } | null = null;
  const mockObserveObjectSet = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeObjectSet: mockObserveObjectSet,
      canonicalizeWhereClause: vitest.fn((w) => w),
    } as any;

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider value={{ observableClient }}>
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    capturedObserver = null;
    mockObserveObjectSet.mockClear();
    mockObserveObjectSet.mockImplementation((_os, _opts, observer) => {
      capturedObserver = observer;
      return { unsubscribe: vitest.fn() };
    });
  });

  describe("enabled option", () => {
    it("should NOT call observeObjectSet when enabled is false", () => {
      const wrapper = createWrapper();

      renderHook(
        () => useObjectSet(mockObjectSet, { enabled: false }),
        { wrapper },
      );

      expect(mockObserveObjectSet).not.toHaveBeenCalled();
    });

    it("should start observing when enabled changes from false to true", () => {
      const wrapper = createWrapper();

      const { rerender } = renderHook(
        ({ enabled }) => useObjectSet(mockObjectSet, { enabled }),
        {
          wrapper,
          initialProps: { enabled: false },
        },
      );

      expect(mockObserveObjectSet).not.toHaveBeenCalled();

      rerender({ enabled: true });

      expect(mockObserveObjectSet).toHaveBeenCalledTimes(1);
    });
  });

  describe("data preservation", () => {
    it("should preserve data when object set changes but object type stays the same", () => {
      const wrapper = createWrapper();
      const objectSet1 = createMockObjectSet(MockObjectType);
      const objectSet2 = createMockObjectSet(MockObjectType);

      const { result, rerender } = renderHook(
        ({ objectSet }) => useObjectSet(objectSet),
        {
          wrapper,
          initialProps: { objectSet: objectSet1 },
        },
      );

      expect(result.current.data).toBeUndefined();

      const mockData = {
        resolvedList: [{ $primaryKey: "1", name: "Test" }],
        status: "loaded",
      };

      act(() => {
        capturedObserver?.next(mockData);
      });

      expect(result.current.data).toEqual(mockData.resolvedList);

      rerender({ objectSet: objectSet2 });

      expect(result.current.data).toEqual(mockData.resolvedList);
    });

    it("should clear data when switching to a different object type", () => {
      const wrapper = createWrapper();
      const objectSet1 = createMockObjectSet(MockObjectType);
      const objectSet2 = createMockObjectSet(MockObjectType2);

      const { result, rerender } = renderHook(
        ({ objectSet }) => useObjectSet(objectSet),
        {
          wrapper,
          initialProps: { objectSet: objectSet1 },
        },
      );

      const mockData = {
        resolvedList: [{ $primaryKey: "1", name: "Test" }],
        status: "loaded",
      };

      act(() => {
        capturedObserver?.next(mockData);
      });

      expect(result.current.data).toEqual(mockData.resolvedList);

      rerender({ objectSet: objectSet2 });

      expect(result.current.data).toBeUndefined();
    });
  });

  describe("data flow", () => {
    it("should return loading state initially", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSet(mockObjectSet),
        { wrapper },
      );

      expect(result.current.data).toBeUndefined();
      expect(result.current.isLoading).toBe(true);
      expect(result.current.error).toBeUndefined();
    });

    it("should return data when loaded", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSet(mockObjectSet),
        { wrapper },
      );

      const mockData = {
        resolvedList: [{ $primaryKey: "1", name: "Test" }],
        status: "loaded",
      };

      act(() => {
        capturedObserver?.next(mockData);
      });

      expect(result.current.data).toEqual(mockData.resolvedList);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeUndefined();
    });

    it("should return fetchMore when available", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSet(mockObjectSet),
        { wrapper },
      );

      const mockFetchMore = vitest.fn();
      const mockData = {
        resolvedList: [{ $primaryKey: "1", name: "Test" }],
        status: "loaded",
        fetchMore: mockFetchMore,
        hasMore: true,
      };

      act(() => {
        capturedObserver?.next(mockData);
      });

      expect(result.current.fetchMore).toBe(mockFetchMore);
    });

    it("should not return fetchMore when hasMore is false", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSet(mockObjectSet),
        { wrapper },
      );

      const mockFetchMore = vitest.fn();
      const mockData = {
        resolvedList: [{ $primaryKey: "1", name: "Test" }],
        status: "loaded",
        fetchMore: mockFetchMore,
        hasMore: false,
      };

      act(() => {
        capturedObserver?.next(mockData);
      });

      expect(result.current.fetchMore).toBeUndefined();
    });
  });

  describe("error handling", () => {
    it("should return error when observer.error is called", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSet(mockObjectSet),
        { wrapper },
      );

      const testError = new Error("test error");

      act(() => {
        capturedObserver?.error(testError);
      });

      expect(result.current.error).toBe(testError);
    });

    it("should set isLoading to false on error", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSet(mockObjectSet),
        { wrapper },
      );

      expect(result.current.isLoading).toBe(true);

      act(() => {
        capturedObserver?.error(new Error("test error"));
      });

      expect(result.current.isLoading).toBe(false);
    });
  });
});
