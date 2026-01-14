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

import type { ObjectSet, ObjectTypeDefinition, PropertyKeys } from "@osdk/api";
import type { Client } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";
import { renderHook, waitFor } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { AsyncValue } from "../../../types/AsyncValue.js";
import { useAsyncColumnData } from "../useAsyncColumnData.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;
type TestObjectKeys = PropertyKeys<TestObject>;

const mockObjectSet = {
  objectType: TestObjectType,
} as unknown as ObjectSet<TestObject>;

const { mockUseObjectSet } = vi.hoisted(() => ({
  mockUseObjectSet: vi.fn(),
}));
vi.mock("@osdk/react/experimental", () => ({
  useObjectSet: mockUseObjectSet,
}));

describe("useAsyncColumnData", () => {
  const createWrapper = (client: Client) => {
    return ({ children }: React.PropsWithChildren) => {
      return <OsdkProvider client={client}>{children}</OsdkProvider>;
    };
  };

  const fakeClient = {} as unknown as Client;
  const wrapper = createWrapper(fakeClient);

  beforeEach(() => {
    mockUseObjectSet.mockClear();
  });

  it("returns empty array when baseRows is undefined", () => {
    mockUseObjectSet.mockReturnValue({
      data: undefined,
      isLoading: false,
      error: undefined,
    });

    const { result } = renderHook(
      () =>
        useAsyncColumnData({
          objectSet: mockObjectSet,
          baseRows: undefined,
          withProperties: undefined,
          primaryKeyApiName: "id" as TestObjectKeys,
          derivedPropertyKeys: [],
        }),
      { wrapper },
    );

    expect(result.current.rows).toEqual([]);
  });

  it("returns baseRows immediately with loading state for derived properties", () => {
    const baseRows = [
      { $primaryKey: "1", name: "Row 1" },
      { $primaryKey: "2", name: "Row 2" },
    ] as any[];

    mockUseObjectSet.mockReturnValue({
      data: undefined,
      isLoading: true,
      error: undefined,
    });

    const { result } = renderHook(
      () =>
        useAsyncColumnData({
          objectSet: mockObjectSet,
          baseRows: baseRows as any,
          withProperties: {} as any,
          primaryKeyApiName: "id" as TestObjectKeys,
          derivedPropertyKeys: ["derivedProp1", "derivedProp2"],
        }),
      { wrapper },
    );

    expect(result.current.rows).toHaveLength(2);
    expect(result.current.rows[0].name).toBe("Row 1");
    expect(result.current.rows[0].derivedProp1).toEqual({
      type: "loading",
    } as AsyncValue<unknown>);
    expect(result.current.rows[0].derivedProp2).toEqual({
      type: "loading",
    } as AsyncValue<unknown>);
  });

  it("enriches rows with loaded derived properties", async () => {
    const baseRows = [
      { $primaryKey: "1", name: "Row 1" },
      { $primaryKey: "2", name: "Row 2" },
    ] as any[];

    const derivedData = [
      { $primaryKey: "1", derivedProp1: "value1", derivedProp2: "value2" },
      { $primaryKey: "2", derivedProp1: "value3", derivedProp2: "value4" },
    ] as any[];

    mockUseObjectSet.mockReturnValue({
      data: derivedData,
      isLoading: false,
      error: undefined,
    });

    const { result } = renderHook(
      () =>
        useAsyncColumnData({
          objectSet: mockObjectSet,
          baseRows: baseRows as any,
          withProperties: {} as any,
          primaryKeyApiName: "id" as TestObjectKeys,
          derivedPropertyKeys: ["derivedProp1", "derivedProp2"],
        }),
      { wrapper },
    );

    await waitFor(() => {
      expect(result.current.rows[0].derivedProp1).toEqual({
        type: "loaded",
        value: "value1",
      } as AsyncValue<unknown>);
    });

    expect(result.current.rows[0].derivedProp2).toEqual({
      type: "loaded",
      value: "value2",
    } as AsyncValue<unknown>);
    expect(result.current.rows[1].derivedProp1).toEqual({
      type: "loaded",
      value: "value3",
    } as AsyncValue<unknown>);
    expect(result.current.rows[1].derivedProp2).toEqual({
      type: "loaded",
      value: "value4",
    } as AsyncValue<unknown>);
  });

  it("preserves loaded state when new page is fetched", async () => {
    const initialBaseRows = [{ $primaryKey: "1", name: "Row 1" }] as any[];

    const initialDerivedData = [
      { $primaryKey: "1", derivedProp1: "value1", derivedProp2: "value2" },
    ] as any[];

    mockUseObjectSet.mockReturnValue({
      data: initialDerivedData,
      isLoading: false,
      error: undefined,
    });

    const { result, rerender } = renderHook(
      ({ baseRows }) =>
        useAsyncColumnData({
          objectSet: mockObjectSet,
          baseRows: baseRows as any,
          withProperties: {} as any,
          primaryKeyApiName: "id" as TestObjectKeys,
          derivedPropertyKeys: ["derivedProp1", "derivedProp2"],
        }),
      {
        initialProps: { baseRows: initialBaseRows },
        wrapper,
      },
    );

    await waitFor(() => {
      expect(result.current.rows[0].derivedProp1).toEqual({
        type: "loaded",
        value: "value1",
      } as AsyncValue<unknown>);
    });

    // Simulate fetching next page - add new row
    const expandedBaseRows = [
      { $primaryKey: "1", name: "Row 1" },
      { $primaryKey: "2", name: "Row 2" },
    ] as any[];

    // Mock loading state for new page
    mockUseObjectSet.mockReturnValue({
      data: initialDerivedData,
      isLoading: true,
      error: undefined,
    });

    rerender({ baseRows: expandedBaseRows });

    // Row 1 should still be loaded, Row 2 should be loading
    expect(result.current.rows).toHaveLength(2);
    expect(result.current.rows[0].derivedProp1).toEqual({
      type: "loaded",
      value: "value1",
    } as AsyncValue<unknown>);
    expect(result.current.rows[1].derivedProp1).toEqual({
      type: "loading",
    } as AsyncValue<unknown>);
  });

  it("shows error state when derived properties fail to load", () => {
    const baseRows = [{ $primaryKey: "1", name: "Row 1" }] as any[];

    const error = new Error("Failed to load");

    mockUseObjectSet.mockReturnValue({
      data: undefined,
      isLoading: false,
      error,
    });

    const { result } = renderHook(
      () =>
        useAsyncColumnData({
          objectSet: mockObjectSet,
          baseRows: baseRows as any,
          withProperties: {} as any,
          primaryKeyApiName: "id" as TestObjectKeys,
          derivedPropertyKeys: ["derivedProp1"],
        }),
      { wrapper },
    );

    expect(result.current.rows[0].derivedProp1).toEqual({
      type: "failed",
      error,
      value: undefined,
    } as AsyncValue<unknown>);
  });

  it("preserves loaded state even when subsequent fetch errors", async () => {
    const baseRows = [{ $primaryKey: "1", name: "Row 1" }] as any[];

    const derivedData = [{ $primaryKey: "1", derivedProp1: "value1" }] as any[];

    mockUseObjectSet.mockReturnValue({
      data: derivedData,
      isLoading: false,
      error: undefined,
    });

    const { result, rerender } = renderHook(
      ({ baseRows }) =>
        useAsyncColumnData({
          objectSet: mockObjectSet,
          baseRows: baseRows as any,
          withProperties: {} as any,
          primaryKeyApiName: "id" as TestObjectKeys,
          derivedPropertyKeys: ["derivedProp1"],
        }),
      {
        initialProps: { baseRows },
        wrapper,
      },
    );

    await waitFor(() => {
      expect(result.current.rows[0].derivedProp1).toEqual({
        type: "loaded",
        value: "value1",
      } as AsyncValue<unknown>);
    });

    // Add new row and simulate error
    const expandedBaseRows = [
      { $primaryKey: "1", name: "Row 1" },
      { $primaryKey: "2", name: "Row 2" },
    ] as any[];

    const error = new Error("Failed to load page 2");

    mockUseObjectSet.mockReturnValue({
      data: derivedData,
      isLoading: false,
      error,
    });

    rerender({ baseRows: expandedBaseRows });

    // Row 1 should still be loaded (preserving previous state)
    expect(result.current.rows[0].derivedProp1).toEqual({
      type: "loaded",
      value: "value1",
    } as AsyncValue<unknown>);

    // Row 2 should show error
    expect(result.current.rows[1].derivedProp1).toEqual({
      type: "failed",
      error,
      value: undefined,
    } as AsyncValue<unknown>);
  });

  it("builds correct filter for fetching derived properties", () => {
    const baseRows = [
      { $primaryKey: "1", name: "Row 1" },
      { $primaryKey: "2", name: "Row 2" },
    ] as any[];

    mockUseObjectSet.mockReturnValue({
      data: undefined,
      isLoading: true,
      error: undefined,
    });

    renderHook(
      () =>
        useAsyncColumnData({
          objectSet: mockObjectSet,
          baseRows: baseRows as any,
          withProperties: {} as any,
          primaryKeyApiName: "id" as TestObjectKeys,
          derivedPropertyKeys: ["derivedProp1"],
        }),
      { wrapper },
    );

    expect(mockUseObjectSet).toHaveBeenCalledWith(
      mockObjectSet,
      expect.objectContaining({
        where: {
          id: {
            $in: ["1", "2"],
          },
        },
        enabled: true,
      }),
    );
  });

  it("does not fetch when baseRows is empty", () => {
    mockUseObjectSet.mockReturnValue({
      data: undefined,
      isLoading: false,
      error: undefined,
    });

    renderHook(
      () =>
        useAsyncColumnData({
          objectSet: mockObjectSet,
          baseRows: [] as any,
          withProperties: {} as any,
          primaryKeyApiName: "id" as TestObjectKeys,
          derivedPropertyKeys: ["derivedProp1"],
        }),
      { wrapper },
    );

    expect(mockUseObjectSet).toHaveBeenCalledWith(
      mockObjectSet,
      expect.objectContaining({
        enabled: false,
      }),
    );
  });
});
