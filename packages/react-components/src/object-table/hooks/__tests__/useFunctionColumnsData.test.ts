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
import { useOsdkClient } from "@osdk/react";
import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { ColumnDefinition } from "../../ObjectTableApi.js";
import { useFunctionColumnsData } from "../useFunctionColumnsData.js";

vi.mock("@osdk/react", () => ({
  useOsdkClient: vi.fn(),
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
      getParams: ((objectSet: ObjectSet<TestObject>) => ({
        [OBJ_SET_KEY]: objectSet,
      })) as any,
      getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
    },
  },
];

const mockExecuteFunction = vi.fn();

const mockClient = vi.fn(() => ({
  executeFunction: mockExecuteFunction,
})) as any;

describe("useFunctionColumnsData", () => {
  beforeEach(() => {
    vi.mocked(useOsdkClient).mockReturnValue(mockClient);
    mockExecuteFunction.mockClear();
  });

  it("should return empty data when no object set is provided", () => {
    const { result } = renderHook(
      () => useFunctionColumnsData(undefined, mockObjects, undefined),
    );

    expect(result.current).toEqual({});
  });

  it("should return empty data when objects array is empty", () => {
    const { result } = renderHook(
      () => useFunctionColumnsData(mockObjectSet, [], undefined),
    );

    expect(result.current).toEqual({});
  });

  it("should fetch data for function columns", async () => {
    const mockResult = {
      "TestObject:obj1": { value: "result1" },
      "TestObject:obj2": { value: "result2" },
    };

    mockExecuteFunction.mockResolvedValue(mockResult);

    const { result } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, columnDefinitions),
    );

    // Initially shows loading state
    expect(result.current).toEqual({
      testColumn: {
        obj1: { loading: true },
        obj2: { loading: true },
      },
    });

    await waitFor(() => {
      expect(result.current.testColumn.obj1.loading).toBe(false);
    });

    expect(result.current).toEqual({
      testColumn: {
        obj1: { data: { value: "result1" }, loading: false },
        obj2: { data: { value: "result2" }, loading: false },
      },
    });

    expect(mockExecuteFunction).toHaveBeenCalledWith({
      [OBJ_SET_KEY]: mockObjectSet,
    });
  });

  it("should extract propertyKey from result when specified", async () => {
    const mockObjects = [
      {
        $objectType: "TestObject",
        $apiName: "TestObject",
        $primaryKey: "obj1",
      },
    ] as Osdk.Instance<TestObject, "$allBaseProperties", TestObjectKeys, {}>[];

    const mockObjectSet = {} as ObjectSet<TestObject>;

    const mockResult = {
      "TestObject:obj1": {
        status: "active",
        timestamp: "2024-01-01",
      },
    };

    mockExecuteFunction.mockResolvedValue(mockResult);

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
          getParams: ((objectSet: ObjectSet<TestObject>) => ({
            [OBJ_SET_KEY]: objectSet,
          })) as any,
          propertyKey: "status",
          getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
        },
      },
    ];

    const { result } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, columnDefinitions),
    );

    await waitFor(() => {
      expect(result.current.testColumn.obj1.loading).toBe(false);
    });

    expect(result.current).toEqual({
      testColumn: {
        obj1: { data: "active", loading: false },
      },
    });
  });

  it("should group columns by unique query definition", async () => {
    const mockObjects = [
      {
        $objectType: "TestObject",
        $apiName: "TestObject",
        $primaryKey: "obj1",
      },
    ] as Osdk.Instance<TestObject, "$allBaseProperties", TestObjectKeys, {}>[];

    const mockObjectSet = {} as ObjectSet<TestObject>;

    const mockResult = {
      "TestObject:obj1": {
        status: "active",
        timestamp: "2024-01-01",
      },
    };

    mockExecuteFunction.mockResolvedValue(mockResult);

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
          queryDefinition: mockQueryDefinition as any,
          getParams: ((objectSet: ObjectSet<TestObject>) => ({
            [OBJ_SET_KEY]: objectSet,
          })) as any,
          propertyKey: "status",
          getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
        },
      },
      {
        locator: {
          type: "function",
          id: "timestampColumn",
          queryDefinition: mockQueryDefinition as any,
          getParams: ((objectSet: ObjectSet<TestObject>) => ({
            [OBJ_SET_KEY]: objectSet,
          })) as any,
          propertyKey: "timestamp",
          getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
        },
      },
    ];

    const { result } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, columnDefinitions),
    );

    await waitFor(() => {
      expect(result.current.statusColumn.obj1.loading).toBe(false);
    });

    expect(result.current).toEqual({
      statusColumn: {
        obj1: { data: "active", loading: false },
      },
      timestampColumn: {
        obj1: { data: "2024-01-01", loading: false },
      },
    });

    expect(mockExecuteFunction).toHaveBeenCalledTimes(1);
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

    mockExecuteFunction.mockResolvedValueOnce(mockResult1)
      .mockResolvedValueOnce(
        mockResult2,
      );

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
          queryDefinition: mockQueryDefinition as any,
          getParams: ((objectSet: ObjectSet<TestObject>) => ({
            [OBJ_SET_KEY]: objectSet,
          })) as any,
          propertyKey: "status",
          getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
        },
      },
      {
        locator: {
          type: "function",
          id: "timestampColumn",
          queryDefinition: mockQueryDefinition2 as any,
          getParams: ((objectSet: ObjectSet<TestObject>) => ({
            [OBJ_SET_KEY]: objectSet,
          })) as any,
          propertyKey: "timestamp",
          getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
        },
      },
    ];

    const { result } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, columnDefinitions),
    );

    await waitFor(() => {
      expect(result.current.statusColumn.obj1.loading).toBe(false);
    });

    expect(result.current).toEqual({
      statusColumn: {
        obj1: { data: "active", loading: false },
      },
      timestampColumn: {
        obj1: { data: "2024-01-01", loading: false },
      },
    });

    expect(mockExecuteFunction).toHaveBeenCalledTimes(2);
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

    mockExecuteFunction.mockResolvedValue(mockResult);

    const { result } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, columnDefinitions),
    );

    expect(result.current).toEqual({
      testColumn: {
        obj1: { loading: true },
        obj2: { loading: true },
      },
    });

    await waitFor(() => {
      expect(result.current.testColumn.obj1.loading).toBe(false);
    });

    expect(result.current).toEqual({
      testColumn: {
        obj1: { data: { value: "result1" }, loading: false },
        obj2: { data: undefined, loading: false },
      },
    });

    expect(mockExecuteFunction).toHaveBeenCalledWith({
      [OBJ_SET_KEY]: mockObjectSet,
    });
  });

  it("should handle errors gracefully", async () => {
    const mockError = new Error("Query failed");
    mockExecuteFunction.mockRejectedValue(mockError);

    const { result } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, columnDefinitions),
    );

    await waitFor(() => {
      expect(result.current.testColumn.obj1.loading).toBe(false);
    });

    expect(result.current).toEqual({
      testColumn: {
        obj1: { error: mockError, loading: false },
        obj2: { error: mockError, loading: false },
      },
    });
  });

  it("should cleanup on unmount", () => {
    const mockObjects = [
      {
        $objectType: "TestObject",
        $apiName: "TestObject",
        $primaryKey: "obj1",
      },
    ] as Osdk.Instance<TestObject, "$allBaseProperties", TestObjectKeys, {}>[];

    const mockObjectSet = {} as ObjectSet<TestObject>;

    const abortSpy = vi.spyOn(AbortController.prototype, "abort");

    const columnDefinitions: ColumnDefinition<
      TestObject,
      {},
      FunctionColumnDef
    >[] = [
      {
        locator: {
          type: "function",
          id: "testColumn",
          queryDefinition: mockQueryDefinition as any,
          getParams: ((objectSet: ObjectSet<TestObject>) => ({
            [OBJ_SET_KEY]: objectSet,
          })) as any,
          getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
        },
      },
    ];

    const { unmount } = renderHook(
      () =>
        useFunctionColumnsData(mockObjectSet, mockObjects, columnDefinitions),
    );

    unmount();

    expect(abortSpy).toHaveBeenCalled();
  });
});
