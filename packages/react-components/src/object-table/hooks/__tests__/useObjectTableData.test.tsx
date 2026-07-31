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

import type {
  DerivedProperty,
  InterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { Client } from "@osdk/client";
import { useObjectSet, useOsdkObjects } from "@osdk/react";
import { fakeObservableClient, TestOsdkProvider } from "@osdk/react/testing";
import type { SortingState } from "@tanstack/react-table";
import { renderHook } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { ColumnDefinition } from "../../ObjectTableApi.js";
import { useFunctionColumnsData } from "../useFunctionColumnsData.js";
import { useObjectTableData } from "../useObjectTableData.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;
type TestObjectKeys = PropertyKeys<TestObject>;

vi.mock("@osdk/react", async (importOriginal) => {
  const actual = await importOriginal<{
    useObjectSet: typeof useObjectSet;
    useOsdkObjects: typeof useOsdkObjects;
  }>();
  return {
    ...actual,
    useRegisterUserAgent: vi.fn(),
    useOsdkObjects: vi.fn(() => ({
      data: [],
      isLoading: false,
      error: undefined,
      fetchMore: undefined,
      isOptimistic: false,
      hasMore: false,
      objectSet: undefined,
      refetch: vi.fn(),
    })),
    useObjectSet: vi.fn(() => ({
      data: [],
      isLoading: false,
      error: undefined,
      fetchMore: vi.fn(),
      totalCount: undefined,
      isOptimistic: false,
      hasMore: false,
      objectSet: undefined,
      refetch: vi.fn(),
    })),
  };
});

vi.mock("../useFunctionColumnsData.js", () => ({
  useFunctionColumnsData: vi.fn(() => ({})),
}));

const TestInterfaceType = {
  type: "interface",
  apiName: "TestInterface",
} as const satisfies InterfaceDefinition;

function lastObjectSetOptions() {
  const calls = vi.mocked(useObjectSet).mock.calls;
  return calls[calls.length - 1]?.[1];
}

describe(useObjectTableData, () => {
  beforeEach(() => {
    // mockReset (not mockClear) so per-test mockReturnValue overrides don't
    // leak into later tests; it restores the vi.mock factory implementations.
    vi.mocked(useOsdkObjects).mockReset();
    vi.mocked(useObjectSet).mockReset();
    vi.mocked(useFunctionColumnsData).mockReset();
  });
  const createWrapper = (client: Client) => {
    return ({ children }: React.PropsWithChildren) => {
      return (
        <TestOsdkProvider
          client={client}
          observableClient={fakeObservableClient}
        >
          {children}
        </TestOsdkProvider>
      );
    };
  };

  /**
   * The object set `useObjectTableData` derives from the type via `client()`
   * when no `objectSet` prop is supplied. The marker keeps it distinguishable
   * from `mockObjectSet` under the deep equality `toHaveBeenCalledWith` uses.
   */
  const derivedObjectSet = {
    $objectSetInternals: {
      def: TestObjectType,
    },
    __source: "derived-from-client",
  } as unknown as ObjectSet<TestObject>;

  const clientFn = vi.fn(() => derivedObjectSet);
  const fakeClient = clientFn as unknown as Client;
  const wrapper = createWrapper(fakeClient);

  const mockObjectSet = {
    $objectSetInternals: {
      def: TestObjectType,
    },
    __source: "provided-prop",
  } as unknown as ObjectSet<TestObject>;

  it("calls useObjectSet with filter clause and orderBy provided", () => {
    const filterClause = {
      name: "John",
    } as unknown as WhereClause<TestObject>;
    const orderBy: SortingState = [
      {
        id: "name",
        desc: false,
      },
    ];
    renderHook(
      () =>
        useObjectTableData({
          objectOrInterfaceType: TestObjectType,
          filter: filterClause,
          sorting: orderBy,
        }),
      { wrapper },
    );

    expect(useObjectSet).toHaveBeenLastCalledWith(
      derivedObjectSet,
      expect.objectContaining({
        where: filterClause,
        orderBy: { name: "asc" },
      }),
    );
  });

  it("calls useObjectSet without withProperties when no columnDefinitions provided", () => {
    renderHook(
      () => useObjectTableData({ objectOrInterfaceType: TestObjectType }),
      {
        wrapper,
      },
    );

    expect(useObjectSet).toHaveBeenLastCalledWith(
      derivedObjectSet,
      expect.objectContaining({
        withProperties: undefined,
        pageSize: 50,
      }),
    );
  });

  it("calls useObjectSet without withProperties when columnDefinitions have no RDP columns", () => {
    const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
      {
        locator: { type: "property", id: "name" as TestObjectKeys },
      },
      {
        locator: { type: "property", id: "email" as TestObjectKeys },
      },
    ];

    renderHook(
      () =>
        useObjectTableData({
          objectOrInterfaceType: TestObjectType,
          columnDefinitions,
        }),
      {
        wrapper,
      },
    );

    expect(useObjectSet).toHaveBeenLastCalledWith(
      derivedObjectSet,
      expect.objectContaining({
        withProperties: undefined,
        pageSize: 50,
      }),
    );
  });

  it("extracts RDP creators and passes them to useObjectSet", () => {
    const mockRdpCreator1 = vi.fn() as unknown as DerivedProperty.Creator<
      TestObject,
      SimplePropertyDef
    >;
    const mockRdpCreator2 = vi.fn() as unknown as DerivedProperty.Creator<
      TestObject,
      SimplePropertyDef
    >;

    const columnDefinitions: Array<
      ColumnDefinition<
        TestObject,
        { rdp1: any; rdp2: any },
        { myFunction: any }
      >
    > = [
      {
        locator: { type: "property", id: "name" as TestObjectKeys },
      },
      {
        locator: { type: "rdp", id: "rdp1", creator: mockRdpCreator1 },
      },
      {
        locator: { type: "rdp", id: "rdp2", creator: mockRdpCreator2 },
      },
      {
        locator: {
          type: "function",
          id: "myFunction",
          queryDefinition: {} as any,
          getFunctionParams: () => ({}),
          getKey: (object) => String(object.$primaryKey),
        },
      },
    ];

    renderHook(
      () =>
        useObjectTableData({
          objectOrInterfaceType: TestObjectType,
          columnDefinitions,
        }),
      {
        wrapper,
      },
    );

    expect(useObjectSet).toHaveBeenLastCalledWith(
      derivedObjectSet,
      expect.objectContaining({
        withProperties: { rdp1: mockRdpCreator1, rdp2: mockRdpCreator2 },
      }),
    );
  });

  it("memoizes withProperties based on columnDefinitions", () => {
    const mockRdpCreator = vi.fn() as unknown as DerivedProperty.Creator<
      TestObject,
      SimplePropertyDef
    >;

    const columnDefinitions: Array<
      ColumnDefinition<TestObject, { myRdp: any }, {}>
    > = [
      {
        locator: { type: "rdp", id: "myRdp", creator: mockRdpCreator },
      },
    ];

    const { rerender } = renderHook(
      ({ colDefs }) =>
        useObjectTableData({
          objectOrInterfaceType: TestObjectType,
          columnDefinitions: colDefs,
        }),
      {
        initialProps: { colDefs: columnDefinitions },
        wrapper,
      },
    );

    const firstWithProperties = lastObjectSetOptions()?.withProperties;

    rerender({ colDefs: columnDefinitions });

    expect(lastObjectSetOptions()?.withProperties).toBe(firstWithProperties);
  });

  it("updates withProperties when columnDefinitions change", () => {
    const mockRdpCreator1 = vi.fn() as unknown as DerivedProperty.Creator<
      TestObject,
      SimplePropertyDef
    >;
    const mockRdpCreator2 = vi.fn() as unknown as DerivedProperty.Creator<
      TestObject,
      SimplePropertyDef
    >;

    const initialColumnDefinitions: Array<
      ColumnDefinition<TestObject, { rdp1: any }, {}>
    > = [
      {
        locator: { type: "rdp", id: "rdp1", creator: mockRdpCreator1 },
      },
    ];

    type ColDefs =
      | Array<
          ColumnDefinition<TestObject, Record<string, SimplePropertyDef>, {}>
        >
      | undefined;

    const { rerender } = renderHook(
      ({ colDefs }: { colDefs: ColDefs }) =>
        useObjectTableData({
          objectOrInterfaceType: TestObjectType,
          columnDefinitions: colDefs,
        }),
      {
        initialProps: { colDefs: initialColumnDefinitions as ColDefs },
        wrapper,
      },
    );

    expect(lastObjectSetOptions()?.withProperties).toEqual({
      rdp1: mockRdpCreator1,
    });

    const updatedColumnDefinitions: Array<
      ColumnDefinition<TestObject, { rdp2: SimplePropertyDef }, {}>
    > = [
      {
        locator: { type: "rdp", id: "rdp2", creator: mockRdpCreator2 },
      },
    ];

    rerender({ colDefs: updatedColumnDefinitions as ColDefs });

    expect(lastObjectSetOptions()?.withProperties).toEqual({
      rdp2: mockRdpCreator2,
    });
  });

  it("returns useObjectSet result structure", () => {
    const { result } = renderHook(
      () => useObjectTableData({ objectOrInterfaceType: TestObjectType }),
      {
        wrapper,
      },
    );

    expect(result.current).toHaveProperty("data");
    expect(result.current).toHaveProperty("isLoading");
    expect(result.current).toHaveProperty("error");
    expect(result.current).toHaveProperty("fetchMore");
  });

  it("when no objectSet provided, derives one from the type and only enables useObjectSet", () => {
    renderHook(
      () => useObjectTableData({ objectOrInterfaceType: TestObjectType }),
      { wrapper },
    );

    expect(clientFn).toHaveBeenCalledWith(TestObjectType);

    expect(useObjectSet).toHaveBeenCalledWith(
      derivedObjectSet,
      expect.objectContaining({
        enabled: true,
        pageSize: 50,
      }),
    );

    expect(useOsdkObjects).toHaveBeenCalledWith(
      TestObjectType,
      expect.objectContaining({
        enabled: false,
        pageSize: 50,
      }),
    );
  });

  it(" when objectSet is provided, only enables useObjectSet", () => {
    renderHook(
      () =>
        useObjectTableData({
          objectOrInterfaceType: TestObjectType,
          objectSet: mockObjectSet,
        }),
      { wrapper },
    );

    expect(useOsdkObjects).toHaveBeenCalledWith(
      TestObjectType,
      expect.objectContaining({
        enabled: false,
        pageSize: 50,
      }),
    );

    expect(useObjectSet).toHaveBeenCalledWith(
      mockObjectSet,
      expect.objectContaining({
        enabled: true,
        pageSize: 50,
      }),
    );
  });

  it("when objectSet is provided for an interface, enables useObjectSet (not useOsdkObjects)", () => {
    renderHook(
      () =>
        useObjectTableData({
          objectOrInterfaceType: TestInterfaceType,
          objectSet: mockObjectSet as any,
        }),
      { wrapper },
    );

    expect(useObjectSet).toHaveBeenCalledWith(
      mockObjectSet,
      expect.objectContaining({
        enabled: true,
        pageSize: 50,
      }),
    );

    expect(useOsdkObjects).toHaveBeenCalledWith(
      TestInterfaceType,
      expect.objectContaining({
        enabled: false,
        pageSize: 50,
      }),
    );
  });

  it("passes filter, orderBy and objectSetOptions to useObjectSet", () => {
    const filterClause = {
      name: "John",
    } as unknown as WhereClause<TestObject>;
    const sorting: SortingState = [
      {
        id: "name",
        desc: false,
      },
    ];
    const objectSetOptions = {
      union: [mockObjectSet],
      intersect: [],
      subtract: [],
    };

    renderHook(
      () =>
        useObjectTableData({
          objectOrInterfaceType: TestObjectType,
          filter: filterClause,
          sorting,
          objectSet: mockObjectSet,
          objectSetOptions,
        }),
      { wrapper },
    );

    expect(useObjectSet).toHaveBeenCalledWith(
      mockObjectSet,
      expect.objectContaining({
        enabled: true,
        pageSize: 50,
        where: filterClause,
        orderBy: { name: "asc" },
        union: objectSetOptions.union,
        intersect: objectSetOptions.intersect,
        subtract: objectSetOptions.subtract,
      }),
    );
  });

  it("when function columns are defined without objectSet, should call useFunctionColumnsData with the objectType", () => {
    const mockBaseData = [
      { $primaryKey: "1", $apiName: "TestObject", name: "Object 1" },
      { $primaryKey: "2", $apiName: "TestObject", name: "Object 2" },
    ];

    vi.mocked(useObjectSet).mockReturnValue({
      data: mockBaseData,
      isLoading: false,
      error: undefined,
      fetchMore: vi.fn(),
      isOptimistic: false,
    } as any);

    const columnDefinitions: Array<
      ColumnDefinition<TestObject, {}, { fn1: any; fn2: any }>
    > = [
      {
        locator: { type: "property", id: "name" as TestObjectKeys },
      },
      {
        locator: {
          type: "function",
          id: "fn1",
          queryDefinition: { apiName: "fn1" } as any,
          getFunctionParams: () => ({}),
          getKey: (obj) => String(obj.$primaryKey),
        },
      },
      {
        locator: {
          type: "function",
          id: "fn2",
          queryDefinition: { apiName: "fn2" } as any,
          getFunctionParams: () => ({}),
          getKey: (obj) => String(obj.$primaryKey),
        },
      },
    ];

    const { result } = renderHook(
      () =>
        useObjectTableData({
          objectOrInterfaceType: TestObjectType,
          columnDefinitions,
        }),
      { wrapper },
    );

    expect(useFunctionColumnsData).toHaveBeenCalledWith({
      objectOrInterfaceType: TestObjectType,
      objects: mockBaseData,
      columnDefinitions,
      pageSize: 50,
    });
    expect(result.current.data).toEqual([
      {
        $primaryKey: "1",
        $apiName: "TestObject",
        name: "Object 1",
      },
      {
        $primaryKey: "2",
        $apiName: "TestObject",
        name: "Object 2",
      },
    ]);
  });

  it("when function columns are defined with objectSet, should call useFunctionColumnsData and returns the merged data", () => {
    const mockBaseData = [
      { $primaryKey: "1", $apiName: "TestObject", name: "Object 1" },
      { $primaryKey: "2", $apiName: "TestObject", name: "Object 2" },
    ];

    const mockFunctionColumnData = {
      fn1: {
        "1": {
          __asyncCell: true as const,
          data: "Function result A",
          isLoading: false,
        },
        "2": {
          __asyncCell: true as const,
          data: "Function result B",
          isLoading: false,
        },
      },
      fn2: {
        "1": { __asyncCell: true as const, data: 100, isLoading: false },
        "2": { __asyncCell: true as const, data: 200, isLoading: false },
      },
    };

    vi.mocked(useObjectSet).mockReturnValue({
      data: mockBaseData,
      isLoading: false,
      error: undefined,
      fetchMore: vi.fn(),
      isOptimistic: false,
      objectSet: mockObjectSet,
    } as any);

    vi.mocked(useFunctionColumnsData).mockReturnValue(mockFunctionColumnData);

    const columnDefinitions: Array<
      ColumnDefinition<TestObject, {}, { fn1: any; fn2: any }>
    > = [
      {
        locator: { type: "property", id: "name" as TestObjectKeys },
      },
      {
        locator: {
          type: "function",
          id: "fn1",
          queryDefinition: { apiName: "fn1" } as any,
          getFunctionParams: () => ({}),
          getKey: (obj) => String(obj.$primaryKey),
        },
      },
      {
        locator: {
          type: "function",
          id: "fn2",
          queryDefinition: { apiName: "fn2" } as any,
          getFunctionParams: () => ({}),
          getKey: (obj) => String(obj.$primaryKey),
        },
      },
    ];

    const { result } = renderHook(
      () =>
        useObjectTableData({
          objectOrInterfaceType: TestObjectType,
          columnDefinitions,
          objectSet: mockObjectSet,
        }),
      { wrapper },
    );

    expect(useFunctionColumnsData).toHaveBeenCalledWith({
      objectOrInterfaceType: TestObjectType,
      objects: mockBaseData,
      columnDefinitions,
      pageSize: 50,
    });

    expect(result.current.data).toEqual([
      {
        $primaryKey: "1",
        $apiName: "TestObject",
        name: "Object 1",
        fn1: {
          __asyncCell: true as const,
          data: "Function result A",
          isLoading: false,
        },
        fn2: { __asyncCell: true as const, data: 100, isLoading: false },
      },
      {
        $primaryKey: "2",
        $apiName: "TestObject",
        name: "Object 2",
        fn1: {
          __asyncCell: true as const,
          data: "Function result B",
          isLoading: false,
        },
        fn2: { __asyncCell: true as const, data: 200, isLoading: false },
      },
    ]);
  });

  describe("streamUpdates", () => {
    it("forwards streamUpdates to useObjectSet when no objectSet is provided", () => {
      renderHook(
        () =>
          useObjectTableData({
            objectOrInterfaceType: TestObjectType,
            streamUpdates: true,
          }),
        { wrapper },
      );

      expect(useObjectSet).toHaveBeenCalledWith(
        derivedObjectSet,
        expect.objectContaining({ streamUpdates: true }),
      );
    });

    it("forwards streamUpdates to useObjectSet when an objectSet is provided", () => {
      renderHook(
        () =>
          useObjectTableData({
            objectOrInterfaceType: TestObjectType,
            objectSet: mockObjectSet,
            streamUpdates: true,
          }),
        { wrapper },
      );

      expect(useObjectSet).toHaveBeenCalledWith(
        mockObjectSet,
        expect.objectContaining({ streamUpdates: true }),
      );
    });

    it("passes streamUpdates=undefined to both hooks when not provided", () => {
      renderHook(
        () => useObjectTableData({ objectOrInterfaceType: TestObjectType }),
        { wrapper },
      );

      expect(useOsdkObjects).toHaveBeenCalledWith(
        TestObjectType,
        expect.objectContaining({ streamUpdates: undefined }),
      );
      expect(useObjectSet).toHaveBeenCalledWith(
        derivedObjectSet,
        expect.objectContaining({ streamUpdates: undefined }),
      );
    });
  });
});
