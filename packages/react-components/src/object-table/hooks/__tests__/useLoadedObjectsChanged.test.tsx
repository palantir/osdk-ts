/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectTypeDefinition, Osdk, PrimaryKeyType } from "@osdk/api";
import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { useLoadedObjectsChanged } from "../useLoadedObjectsChanged.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;

type TestInstance = Osdk.Instance<
  TestObject,
  "$allBaseProperties",
  never,
  Record<string, never>
>;

function createMockData(count: number): TestInstance[] {
  return Array.from(
    { length: count },
    (_, i) =>
      ({
        $primaryKey: `item-${i}` as PrimaryKeyType<TestObject>,
        $objectType: "TestObject",
        $apiName: "TestObject",
        $title: `Item ${i}`,
      }) as TestInstance,
  );
}

describe("useLoadedObjectsChanged", () => {
  it("does not fire while the first page is still loading", () => {
    const onLoadedObjectsChanged = vi.fn();

    renderHook(() =>
      useLoadedObjectsChanged<TestObject, Record<string, never>>({
        loadedObjects: undefined,
        totalCount: undefined,
        isLoading: true,
        onLoadedObjectsChanged,
      }),
    );

    expect(onLoadedObjectsChanged).not.toHaveBeenCalled();
  });

  it("fires with the rows and total count once the first page loads", () => {
    const onLoadedObjectsChanged = vi.fn();
    const firstPage = createMockData(2);

    const { rerender } = renderHook(
      ({ loadedObjects, totalCount, isLoading }) =>
        useLoadedObjectsChanged<TestObject, Record<string, never>>({
          loadedObjects,
          totalCount,
          isLoading,
          onLoadedObjectsChanged,
        }),
      {
        initialProps: {
          loadedObjects: undefined as TestInstance[] | undefined,
          totalCount: undefined as string | undefined,
          isLoading: true,
        },
      },
    );

    rerender({ loadedObjects: firstPage, totalCount: "10", isLoading: false });

    expect(onLoadedObjectsChanged).toHaveBeenCalledTimes(1);
    expect(onLoadedObjectsChanged).toHaveBeenCalledWith({
      loadedObjects: firstPage,
      totalCount: "10",
    });
  });

  it("fires again as further pages load", () => {
    const onLoadedObjectsChanged = vi.fn();
    const firstPage = createMockData(2);
    const bothPages = createMockData(4);

    const { rerender } = renderHook(
      ({ loadedObjects }) =>
        useLoadedObjectsChanged<TestObject, Record<string, never>>({
          loadedObjects,
          totalCount: "10",
          isLoading: false,
          onLoadedObjectsChanged,
        }),
      { initialProps: { loadedObjects: firstPage } },
    );

    rerender({ loadedObjects: bothPages });

    expect(onLoadedObjectsChanged).toHaveBeenCalledTimes(2);
    expect(onLoadedObjectsChanged).toHaveBeenLastCalledWith({
      loadedObjects: bothPages,
      totalCount: "10",
    });
  });

  it("fires when the total count arrives after the rows", () => {
    const onLoadedObjectsChanged = vi.fn();
    const loadedObjects = createMockData(2);

    const { rerender } = renderHook(
      ({ totalCount }) =>
        useLoadedObjectsChanged<TestObject, Record<string, never>>({
          loadedObjects,
          totalCount,
          isLoading: false,
          onLoadedObjectsChanged,
        }),
      { initialProps: { totalCount: undefined as string | undefined } },
    );

    rerender({ totalCount: "10" });

    expect(onLoadedObjectsChanged).toHaveBeenCalledTimes(2);
    expect(onLoadedObjectsChanged).toHaveBeenLastCalledWith({
      loadedObjects,
      totalCount: "10",
    });
  });

  it("does not refire when neither the rows nor the count changed", () => {
    const onLoadedObjectsChanged = vi.fn();
    const loadedObjects = createMockData(2);

    const { rerender } = renderHook(() =>
      useLoadedObjectsChanged<TestObject, Record<string, never>>({
        loadedObjects,
        totalCount: "10",
        isLoading: false,
        onLoadedObjectsChanged,
      }),
    );

    rerender();
    rerender();

    expect(onLoadedObjectsChanged).toHaveBeenCalledTimes(1);
  });

  it("does not refire when the caller passes a new callback identity each render", () => {
    const spy = vi.fn();
    const loadedObjects = createMockData(2);

    const { rerender } = renderHook(() =>
      useLoadedObjectsChanged<TestObject, Record<string, never>>({
        loadedObjects,
        totalCount: "10",
        isLoading: false,
        // Deliberately not memoized, mimicking an inline arrow at the call site.
        onLoadedObjectsChanged: (change) => spy(change),
      }),
    );

    rerender();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("fires with an empty array for an object set with no matches", () => {
    const onLoadedObjectsChanged = vi.fn();

    renderHook(() =>
      useLoadedObjectsChanged<TestObject, Record<string, never>>({
        loadedObjects: [],
        totalCount: "0",
        isLoading: false,
        onLoadedObjectsChanged,
      }),
    );

    expect(onLoadedObjectsChanged).toHaveBeenCalledWith({
      loadedObjects: [],
      totalCount: "0",
    });
  });

  it("is inert when no callback is supplied", () => {
    expect(() =>
      renderHook(() =>
        useLoadedObjectsChanged<TestObject, Record<string, never>>({
          loadedObjects: createMockData(2),
          totalCount: "10",
          isLoading: false,
        }),
      ),
    ).not.toThrow();
  });

  it("does not fire for the empty count-less payload emitted before the first page resolves", () => {
    const onLoadedObjectsChanged = vi.fn();

    renderHook(() =>
      useLoadedObjectsChanged<TestObject, Record<string, never>>({
        loadedObjects: [],
        totalCount: undefined,
        isLoading: true,
        onLoadedObjectsChanged,
      }),
    );

    expect(onLoadedObjectsChanged).not.toHaveBeenCalled();
  });

  it("fires once with the settled rows and count, not with the pre-load payload", () => {
    const onLoadedObjectsChanged = vi.fn();
    const firstPage = createMockData(2);

    const { rerender } = renderHook(
      ({ loadedObjects, totalCount, isLoading }) =>
        useLoadedObjectsChanged<TestObject, Record<string, never>>({
          loadedObjects,
          totalCount,
          isLoading,
          onLoadedObjectsChanged,
        }),
      {
        initialProps: {
          loadedObjects: [] as TestInstance[],
          totalCount: undefined as string | undefined,
          isLoading: true,
        },
      },
    );

    rerender({ loadedObjects: firstPage, totalCount: "10", isLoading: false });

    expect(onLoadedObjectsChanged).toHaveBeenCalledTimes(1);
    expect(onLoadedObjectsChanged).toHaveBeenCalledWith({
      loadedObjects: firstPage,
      totalCount: "10",
    });
  });

  it("keeps reporting once settled, even while a later page is in flight", () => {
    const onLoadedObjectsChanged = vi.fn();
    const firstPage = createMockData(2);
    const bothPages = createMockData(4);

    const { rerender } = renderHook(
      ({ loadedObjects, isLoading }) =>
        useLoadedObjectsChanged<TestObject, Record<string, never>>({
          loadedObjects,
          totalCount: "10",
          isLoading,
          onLoadedObjectsChanged,
        }),
      { initialProps: { loadedObjects: firstPage, isLoading: false } },
    );

    rerender({ loadedObjects: bothPages, isLoading: true });

    expect(onLoadedObjectsChanged).toHaveBeenCalledTimes(2);
    expect(onLoadedObjectsChanged).toHaveBeenLastCalledWith({
      loadedObjects: bothPages,
      totalCount: "10",
    });
  });
});
