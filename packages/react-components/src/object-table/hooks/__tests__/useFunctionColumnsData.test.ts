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

import type {
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  QueryDefinition,
} from "@osdk/api";
import {
  useOsdkFunctions,
  type UseOsdkFunctionsResult,
} from "@osdk/react/unstable-do-not-use";
import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { ColumnDefinition } from "../../ObjectTableApi.js";
import { useFunctionColumnsData } from "../useFunctionColumnsData.js";

vi.mock("@osdk/react/unstable-do-not-use", () => ({
  useOsdkFunctions: vi.fn(),
}));

const TestObjectType: ObjectTypeDefinition = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;
type TestObjectKeys = PropertyKeys<TestObject>;

interface MockQueryDef extends QueryDefinition<TestObject> {}

const OBJ_SET_KEY = "objectSetKey";
export const mockQueryDefinition: MockQueryDef = {
  apiName: "queryPathwayLatestActionLogComments",
  type: "query",
  version: "3.13.0",
  osdkMetadata: {} as any,
} as MockQueryDef;

export const mockQueryDefinition2: MockQueryDef = {
  apiName: "queryAnotherFunction",
  type: "query",
  version: "3.13.0",
  osdkMetadata: {} as any,
} as MockQueryDef;

type FunctionColumnDef = {
  testColumn: MockQueryDef;
  statusColumn?: MockQueryDef;
  timestampColumn?: MockQueryDef;
};

const mockObjectSet = {} as ObjectSet<TestObject>;

const mockObject1 = {
  $objectType: "TestObject",
  $apiName: "TestObject",
  $primaryKey: "obj1",
};

const mockObject2 = {
  $objectType: "TestObject",
  $apiName: "TestObject",
  $primaryKey: "obj2",
};

const mockObjects = [
  mockObject1,
  mockObject2,
] as Osdk.Instance<TestObject, "$allBaseProperties", TestObjectKeys, {}>[];

const columnDefinitions: ColumnDefinition<
  TestObject,
  {},
  FunctionColumnDef
>[] = [
  {
    locator: {
      type: "function",
      id: "testColumn",
      queryDefinition: mockQueryDefinition,
      getFunctionParams: ((objectSet: ObjectSet<TestObject>) => ({
        [OBJ_SET_KEY]: objectSet,
      })) as any,
      getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
    },
  },
];

describe("useFunctionColumnsData", () => {
  beforeEach(() => {
    vi.mocked(useOsdkFunctions).mockClear();
  });

  it("should return empty data when no object set is provided", () => {
    vi.mocked(useOsdkFunctions).mockReturnValue([]);

    const { result } = renderHook(
      () => useFunctionColumnsData(undefined, mockObjects, undefined),
    );

    expect(result.current).toEqual({});
    expect(useOsdkFunctions).toHaveBeenCalledWith({
      queries: [],
      enabled: false,
    });
  });

  it("should return empty data when objects array is empty", () => {
    vi.mocked(useOsdkFunctions).mockReturnValue([]);

    const { result } = renderHook(
      () => useFunctionColumnsData(mockObjectSet, [], undefined),
    );

    expect(result.current).toEqual({});
    expect(useOsdkFunctions).toHaveBeenCalledWith({
      queries: [],
      enabled: false,
    });
  });

  it("should fetch data for function columns", async () => {
    const mockResult = {
      "TestObject:obj1": { value: "result1" },
      "TestObject:obj2": { value: "result2" },
    };

    // Mock initial loading state
    vi.mocked(useOsdkFunctions).mockReturnValue([
      {
        data: undefined,
        error: undefined,
        isLoading: true,
        lastUpdated: 0,
      },
    ] as unknown as UseOsdkFunctionsResult);

    const { result, rerender } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, columnDefinitions),
    );

    // Initially shows isLoading state
    expect(result.current).toEqual({
      testColumn: {
        obj1: {
          __asyncCell: true,
          data: undefined,
          error: undefined,
          isLoading: true,
        },
        obj2: {
          __asyncCell: true,
          data: undefined,
          error: undefined,
          isLoading: true,
        },
      },
    });

    // Mock successful data response
    vi.mocked(useOsdkFunctions).mockReturnValue([
      {
        data: mockResult,
        error: undefined,
        isLoading: false,
        lastUpdated: Date.now(),
      },
    ] as unknown as UseOsdkFunctionsResult);

    rerender();

    expect(result.current).toEqual({
      testColumn: {
        obj1: {
          __asyncCell: true,
          data: { value: "result1" },
          error: undefined,
          isLoading: false,
        },
        obj2: {
          __asyncCell: true,
          data: { value: "result2" },
          error: undefined,
          isLoading: false,
        },
      },
    });

    expect(useOsdkFunctions).toHaveBeenCalledWith({
      queries: [
        {
          queryDefinition: mockQueryDefinition,
          options: {
            params: { [OBJ_SET_KEY]: mockObjectSet },
          },
        },
      ],
      enabled: true,
    });
  });

  it("should extract value using getValue function when specified", async () => {
    const mockResult = {
      "TestObject:obj1": {
        status: "active",
        timestamp: "2024-01-01",
      },
    };
    const mockOneObject = [
      mockObject1,
    ] as Osdk.Instance<TestObject, "$allBaseProperties", TestObjectKeys, {}>[];

    const columnDefinitions: ColumnDefinition<
      TestObject,
      {},
      FunctionColumnDef
    >[] = [
      {
        locator: {
          type: "function",
          id: "testColumn",
          queryDefinition: mockQueryDefinition,
          getFunctionParams: ((objectSet: ObjectSet<TestObject>) => ({
            [OBJ_SET_KEY]: objectSet,
          })) as any,
          getValue: (cellData) => (cellData as { status: string })?.status,
          getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
        },
      },
    ];

    vi.mocked(useOsdkFunctions).mockReturnValue([
      {
        data: mockResult,
        error: undefined,
        isLoading: false,
        lastUpdated: Date.now(),
      },
    ] as unknown as UseOsdkFunctionsResult);

    const { result } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockOneObject, columnDefinitions),
    );

    expect(result.current).toEqual({
      testColumn: {
        obj1: {
          __asyncCell: true,
          data: "active",
          error: undefined,
          isLoading: false,
        },
      },
    });
  });

  it("should group columns by unique query definition", async () => {
    const mockOneObject = [
      mockObject1,
    ] as Osdk.Instance<TestObject, "$allBaseProperties", TestObjectKeys, {}>[];

    const mockResult = {
      "TestObject:obj1": {
        status: "active",
        timestamp: "2024-01-01",
      },
    };

    type FunctionColumnDef = {
      statusColumn: MockQueryDef;
      timestampColumn: MockQueryDef;
    };

    const columnDefinitions: ColumnDefinition<
      TestObject,
      {},
      FunctionColumnDef
    >[] = [
      {
        locator: {
          type: "function",
          id: "statusColumn",
          queryDefinition: mockQueryDefinition,
          getFunctionParams: ((objectSet: ObjectSet<TestObject>) => ({
            [OBJ_SET_KEY]: objectSet,
          })) as any,
          getValue: (cellData) => (cellData as { status: string })?.status,
          getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
        },
      },
      {
        locator: {
          type: "function",
          id: "timestampColumn",
          queryDefinition: mockQueryDefinition,
          getFunctionParams: ((objectSet: ObjectSet<TestObject>) => ({
            [OBJ_SET_KEY]: objectSet,
          })) as any,
          getValue: (cellData) =>
            (cellData as { timestamp: string })?.timestamp,
          getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
        },
      },
    ];

    vi.mocked(useOsdkFunctions).mockReturnValue([
      {
        data: mockResult,
        error: undefined,
        isLoading: false,
        lastUpdated: Date.now(),
      },
    ] as unknown as UseOsdkFunctionsResult);

    const { result } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockOneObject, columnDefinitions),
    );

    expect(result.current).toEqual({
      statusColumn: {
        obj1: {
          __asyncCell: true,
          data: "active",
          error: undefined,
          isLoading: false,
        },
      },
      timestampColumn: {
        obj1: {
          __asyncCell: true,
          data: "2024-01-01",
          error: undefined,
          isLoading: false,
        },
      },
    });

    // Should only make one query since both columns use the same query definition
    expect(useOsdkFunctions).toHaveBeenCalledWith({
      queries: [
        {
          queryDefinition: mockQueryDefinition,
          options: {
            params: { [OBJ_SET_KEY]: mockObjectSet },
          },
        },
      ],
      enabled: true,
    });
  });

  it("should handle multiple queries", async () => {
    const mockObjects = [
      {
        $objectType: "TestObject",
        $apiName: "TestObject",
        $primaryKey: "obj1",
      },
    ] as Osdk.Instance<TestObject, "$allBaseProperties", TestObjectKeys, {}>[];

    const mockObjectSet = {} as ObjectSet<TestObject>;

    const mockResult1 = {
      "TestObject:obj1": {
        status: "active",
      },
    };
    const mockResult2 = {
      "TestObject:obj1": {
        timestamp: "2024-01-01",
      },
    };

    type FunctionColumnDef = {
      statusColumn: MockQueryDef;
      timestampColumn: MockQueryDef;
    };

    const columnDefinitions: ColumnDefinition<
      TestObject,
      {},
      FunctionColumnDef
    >[] = [
      {
        locator: {
          type: "function",
          id: "statusColumn",
          queryDefinition: mockQueryDefinition,
          getFunctionParams: ((objectSet: ObjectSet<TestObject>) => ({
            [OBJ_SET_KEY]: objectSet,
          })) as any,
          getValue: (cellData) => (cellData as { status: string })?.status,
          getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
        },
      },
      {
        locator: {
          type: "function",
          id: "timestampColumn",
          queryDefinition: mockQueryDefinition2,
          getFunctionParams: ((objectSet: ObjectSet<TestObject>) => ({
            [OBJ_SET_KEY]: objectSet,
          })) as any,
          getValue: (cellData) =>
            (cellData as { timestamp: string })?.timestamp,
          getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
        },
      },
    ];

    vi.mocked(useOsdkFunctions).mockReturnValue([
      {
        data: mockResult1,
        error: undefined,
        isLoading: false,
        lastUpdated: Date.now(),
      },
      {
        data: mockResult2,
        error: undefined,
        isLoading: false,
        lastUpdated: Date.now(),
      },
    ] as unknown as UseOsdkFunctionsResult);

    const { result } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, columnDefinitions),
    );

    expect(result.current).toEqual({
      statusColumn: {
        obj1: {
          __asyncCell: true,
          data: "active",
          error: undefined,
          isLoading: false,
        },
      },
      timestampColumn: {
        obj1: {
          __asyncCell: true,
          data: "2024-01-01",
          error: undefined,
          isLoading: false,
        },
      },
    });

    // Should make two queries since columns use different query definitions
    expect(useOsdkFunctions).toHaveBeenCalledWith({
      queries: [
        {
          queryDefinition: mockQueryDefinition,
          options: {
            params: { [OBJ_SET_KEY]: mockObjectSet },
          },
        },
        {
          queryDefinition: mockQueryDefinition2,
          options: {
            params: { [OBJ_SET_KEY]: mockObjectSet },
          },
        },
      ],
      enabled: true,
    });
  });

  it("should handle missing object in the result", async () => {
    // 2 objects
    const mockObjects = [
      {
        $objectType: "TestObject",
        $apiName: "TestObject",
        $primaryKey: "obj1",
      },
      {
        $objectType: "TestObject",
        $apiName: "TestObject",
        $primaryKey: "obj2",
      },
    ] as Osdk.Instance<TestObject, "$allBaseProperties", TestObjectKeys, {}>[];

    // result only contains data for obj1
    const mockResult = {
      "TestObject:obj1": { value: "result1" },
    };

    // Mock the response with data only for obj1
    vi.mocked(useOsdkFunctions).mockReturnValue([
      {
        data: mockResult,
        error: undefined,
        isLoading: false,
        lastUpdated: Date.now(),
      },
    ] as unknown as UseOsdkFunctionsResult);

    const { result } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, columnDefinitions),
    );

    expect(result.current).toEqual({
      testColumn: {
        obj1: {
          __asyncCell: true,
          data: { value: "result1" },
          error: undefined,
          isLoading: false,
        },
        obj2: {
          __asyncCell: true,
          data: undefined,
          error: undefined,
          isLoading: false,
        },
      },
    });
  });

  it("should handle errors gracefully", async () => {
    const mockError = new Error("Query failed");

    vi.mocked(useOsdkFunctions).mockReturnValue([
      {
        data: undefined,
        error: mockError,
        isLoading: false,
        lastUpdated: Date.now(),
      },
    ] as unknown as UseOsdkFunctionsResult);

    const { result } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, columnDefinitions),
    );

    expect(result.current).toEqual({
      testColumn: {
        obj1: {
          __asyncCell: true,
          data: undefined,
          error: mockError,
          isLoading: false,
        },
        obj2: {
          __asyncCell: true,
          data: undefined,
          error: mockError,
          isLoading: false,
        },
      },
    });
  });

  it("should not create queries when no function columns are defined", () => {
    const nonFunctionColumns: ColumnDefinition<TestObject, {}, {}>[] = [
      {
        locator: { type: "property", id: "name" as TestObjectKeys },
      },
      {
        locator: { type: "property", id: "email" as TestObjectKeys },
      },
    ];

    vi.mocked(useOsdkFunctions).mockReturnValue([]);

    renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, nonFunctionColumns),
    );

    expect(useOsdkFunctions).toHaveBeenCalledWith({
      queries: [],
      enabled: false,
    });
  });

  it("should handle loading state transitions correctly", () => {
    // Initial loading state
    vi.mocked(useOsdkFunctions).mockReturnValue([
      {
        data: undefined,
        error: undefined,
        isLoading: true,
        lastUpdated: 0,
      },
    ] as unknown as UseOsdkFunctionsResult);

    const { result, rerender } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, columnDefinitions),
    );

    // Check initial loading state
    expect(result.current.testColumn.obj1.isLoading).toBe(true);
    expect(result.current.testColumn.obj2.isLoading).toBe(true);

    // Simulate data arrival
    const mockResult = {
      "TestObject:obj1": { value: "result1" },
      "TestObject:obj2": { value: "result2" },
    };

    vi.mocked(useOsdkFunctions).mockReturnValue([
      {
        data: mockResult,
        error: undefined,
        isLoading: false,
        lastUpdated: Date.now(),
      },
    ] as unknown as UseOsdkFunctionsResult);

    rerender();

    // Check data is properly mapped
    expect(result.current.testColumn.obj1.isLoading).toBe(false);
    expect(result.current.testColumn.obj1.data).toEqual({ value: "result1" });
    expect(result.current.testColumn.obj2.isLoading).toBe(false);
    expect(result.current.testColumn.obj2.data).toEqual({ value: "result2" });
  });
});
