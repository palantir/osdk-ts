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
import { useObjectSetAggregation } from "../src/new/useObjectSetAggregation.js";

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

const defaultAggregate = {
  $select: { $count: "unordered" as const },
};

function createStableCanonicalizeOptions() {
  const cache = new Map<string, unknown>();
  return vitest.fn((opts: Record<string, unknown>) => {
    const result: Record<string, unknown> = {};
    for (const key of Object.keys(opts)) {
      const value = opts[key];
      if (value === undefined) {
        result[key] = undefined;
        continue;
      }
      const cacheKey = `${key}:${JSON.stringify(value)}`;
      if (!cache.has(cacheKey)) {
        cache.set(cacheKey, value);
      }
      result[key] = cache.get(cacheKey);
    }
    return result;
  });
}

describe(useObjectSetAggregation, () => {
  let capturedObserver: {
    next: (value: unknown) => void;
    error: (err: unknown) => void;
  } | null = null;
  let mockObserveAggregation: ReturnType<typeof vitest.fn>;
  let mockInvalidateObjectType: ReturnType<typeof vitest.fn>;

  const stableCanonicalizeOptions = createStableCanonicalizeOptions();

  const createWrapper = () => {
    const observableClient = {
      observeAggregation: mockObserveAggregation,
      canonicalizeOptions: stableCanonicalizeOptions,
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
    mockObserveAggregation = vitest.fn()
      .mockImplementation(
        (_opts: unknown, observer: typeof capturedObserver) => {
          capturedObserver = observer;
          return Promise.resolve({ unsubscribe: vitest.fn() });
        },
      );
    mockInvalidateObjectType = vitest.fn().mockResolvedValue(undefined);
  });

  describe("data flow", () => {
    it("should return loading state initially", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () =>
          useObjectSetAggregation(mockObjectSet, {
            aggregate: defaultAggregate,
          }),
        { wrapper },
      );

      expect(result.current.data).toBeUndefined();
      expect(result.current.isLoading).toBe(true);
      expect(result.current.error).toBeUndefined();
    });

    it("should return aggregation data when loaded", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () =>
          useObjectSetAggregation(mockObjectSet, {
            aggregate: defaultAggregate,
          }),
        { wrapper },
      );

      act(() => {
        capturedObserver?.next({
          result: { $count: 5 },
          status: "loaded",
        });
      });

      expect(result.current.data).toEqual({ $count: 5 });
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeUndefined();
    });
  });

  describe("undefined object set", () => {
    it("should not crash when objectSet is undefined", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () =>
          useObjectSetAggregation(undefined as any, {
            aggregate: defaultAggregate,
          }),
        { wrapper },
      );

      expect(result.current.data).toBeUndefined();
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeUndefined();
      expect(mockObserveAggregation).not.toHaveBeenCalled();
    });

    it("should start loading when objectSet becomes defined", () => {
      const wrapper = createWrapper();

      const { result, rerender } = renderHook(
        ({ objectSet }) =>
          useObjectSetAggregation(objectSet, {
            aggregate: defaultAggregate,
          }),
        {
          wrapper,
          initialProps: { objectSet: undefined as any },
        },
      );

      expect(result.current.isLoading).toBe(false);
      expect(mockObserveAggregation).not.toHaveBeenCalled();

      rerender({ objectSet: mockObjectSet });

      expect(result.current.isLoading).toBe(true);
      expect(mockObserveAggregation).toHaveBeenCalledTimes(1);
    });
  });

  describe("error handling", () => {
    it("should return error from observer.error", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () =>
          useObjectSetAggregation(mockObjectSet, {
            aggregate: defaultAggregate,
          }),
        { wrapper },
      );

      const testError = new Error("aggregation failed");

      act(() => {
        capturedObserver?.error(testError);
      });

      expect(result.current.error).toBe(testError);
    });

    it("should return synthetic error for status 'error'", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () =>
          useObjectSetAggregation(mockObjectSet, {
            aggregate: defaultAggregate,
          }),
        { wrapper },
      );

      act(() => {
        capturedObserver?.next({ status: "error" });
      });

      expect(result.current.error).toBeInstanceOf(Error);
      expect(result.current.error?.message).toBe(
        "Failed to execute aggregation",
      );
    });
  });

  describe("refetch", () => {
    it("should call invalidateObjectType on refetch", async () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () =>
          useObjectSetAggregation(mockObjectSet, {
            aggregate: defaultAggregate,
          }),
        { wrapper },
      );

      await act(async () => {
        result.current.refetch();
      });

      expect(mockInvalidateObjectType).toHaveBeenCalledWith("MockObject");
    });
  });

  describe("options", () => {
    it("should NOT call observeAggregation when enabled is false", () => {
      const wrapper = createWrapper();

      renderHook(
        () =>
          useObjectSetAggregation(mockObjectSet, {
            aggregate: defaultAggregate,
            enabled: false,
          }),
        { wrapper },
      );

      expect(mockObserveAggregation).not.toHaveBeenCalled();
    });

    it("should return isLoading false when enabled is false", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () =>
          useObjectSetAggregation(mockObjectSet, {
            aggregate: defaultAggregate,
            enabled: false,
          }),
        { wrapper },
      );

      expect(result.current.isLoading).toBe(false);
    });
  });
});
