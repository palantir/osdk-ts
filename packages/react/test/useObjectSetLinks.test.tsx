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
import { useObjectSetLinks } from "../src/new/useObjectSetLinks.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

const createMockObjectSet = (type: ObjectTypeDefinition) =>
  ({
    $__EXPERIMENTAL_objectSet: true,
    type,
    $objectSetInternals: { def: type },
  }) as unknown as ObjectSet<typeof type>;

const mockObjectSet = createMockObjectSet(MockObjectType);

describe(useObjectSetLinks, () => {
  let capturedObserver: {
    next: (value: unknown) => void;
    error: (err: unknown) => void;
  } | null = null;
  let mockObserveObjectSet: ReturnType<typeof vitest.fn>;
  let mockInvalidateObjectType: ReturnType<typeof vitest.fn>;

  const createWrapper = () => {
    const observableClient = {
      observeObjectSet: mockObserveObjectSet,
      canonicalizeOptions: vitest.fn((opts: unknown) => opts),
      invalidateObjectType: mockInvalidateObjectType,
    } as any;

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider value={{ observableClient }}>
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    capturedObserver = null;
    mockObserveObjectSet = vitest.fn()
      .mockImplementation(
        (_os: unknown, _opts: unknown, observer: typeof capturedObserver) => {
          capturedObserver = observer;
          return { unsubscribe: vitest.fn() };
        },
      );
    mockInvalidateObjectType = vitest.fn().mockResolvedValue(undefined);
  });

  describe("data flow", () => {
    it("should return loading state initially", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSetLinks(mockObjectSet as any, "testLink" as any),
        { wrapper },
      );

      expect(result.current.data).toBeUndefined();
      expect(result.current.isLoading).toBe(true);
      expect(result.current.error).toBeUndefined();
    });

    it("should return links when loaded", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSetLinks(mockObjectSet as any, "testLink" as any),
        { wrapper },
      );

      const mockLinks = [
        { $primaryKey: "1", name: "Link 1" },
        { $primaryKey: "2", name: "Link 2" },
      ];

      act(() => {
        capturedObserver?.next({
          resolvedList: mockLinks,
          status: "loaded",
          hasMore: false,
          isOptimistic: false,
        });
      });

      expect(result.current.data).toEqual(mockLinks);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeUndefined();
    });

    it("should pass pivotTo to observeObjectSet", () => {
      const wrapper = createWrapper();

      renderHook(
        () => useObjectSetLinks(mockObjectSet as any, "testLink" as any),
        { wrapper },
      );

      expect(mockObserveObjectSet).toHaveBeenCalledTimes(1);
      const opts = mockObserveObjectSet.mock.calls[0][1];
      expect(opts.pivotTo).toBe("testLink");
    });

    it("should return fetchMore when hasMore is true", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSetLinks(mockObjectSet as any, "testLink" as any),
        { wrapper },
      );

      const mockFetchMore = vitest.fn();

      act(() => {
        capturedObserver?.next({
          resolvedList: [{ $primaryKey: "1" }],
          status: "loaded",
          hasMore: true,
          isOptimistic: false,
          fetchMore: mockFetchMore,
        });
      });

      expect(result.current.fetchMore).toBe(mockFetchMore);
      expect(result.current.hasMore).toBe(true);
    });
  });

  describe("refetch", () => {
    it("should call invalidateObjectType on refetch", async () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSetLinks(mockObjectSet as any, "testLink" as any),
        { wrapper },
      );

      await act(async () => {
        result.current.refetch();
      });

      expect(mockInvalidateObjectType).toHaveBeenCalledWith("MockObject");
    });
  });

  describe("enabled option", () => {
    it("should NOT call observeObjectSet when enabled is false", () => {
      const wrapper = createWrapper();

      renderHook(
        () =>
          useObjectSetLinks(mockObjectSet as any, "testLink" as any, {
            enabled: false,
          }),
        { wrapper },
      );

      expect(mockObserveObjectSet).not.toHaveBeenCalled();
    });

    it("should return isLoading false when disabled", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () =>
          useObjectSetLinks(mockObjectSet as any, "testLink" as any, {
            enabled: false,
          }),
        { wrapper },
      );

      expect(result.current.isLoading).toBe(false);
    });
  });

  describe("undefined object set", () => {
    it("should not crash when objectSet is undefined", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSetLinks(undefined as any, "testLink" as any),
        { wrapper },
      );

      expect(result.current.data).toBeUndefined();
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeUndefined();
      expect(mockObserveObjectSet).not.toHaveBeenCalled();
    });

    it("should start loading when objectSet becomes defined", () => {
      const wrapper = createWrapper();

      const { result, rerender } = renderHook(
        ({ objectSet }) =>
          useObjectSetLinks(objectSet as any, "testLink" as any),
        {
          wrapper,
          initialProps: { objectSet: undefined as any },
        },
      );

      expect(result.current.isLoading).toBe(false);
      expect(mockObserveObjectSet).not.toHaveBeenCalled();

      rerender({ objectSet: mockObjectSet });

      expect(result.current.isLoading).toBe(true);
      expect(mockObserveObjectSet).toHaveBeenCalledTimes(1);
    });
  });

  describe("error handling", () => {
    it("should return error from observer.error", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSetLinks(mockObjectSet as any, "testLink" as any),
        { wrapper },
      );

      const testError = new Error("link fetch failed");

      act(() => {
        capturedObserver?.error(testError);
      });

      expect(result.current.error).toBe(testError);
    });

    it("should return synthetic error for status 'error'", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () => useObjectSetLinks(mockObjectSet as any, "testLink" as any),
        { wrapper },
      );

      act(() => {
        capturedObserver?.next({ status: "error" });
      });

      expect(result.current.error).toBeInstanceOf(Error);
      expect(result.current.error?.message).toBe(
        "Failed to fetch linked objects",
      );
    });
  });
});
