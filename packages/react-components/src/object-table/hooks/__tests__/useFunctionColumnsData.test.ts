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
} from "@osdk/react/experimental";
import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { ColumnDefinition } from "../../ObjectTableApi.js";
import {
  DEFAULT_FUNCTION_COLUMN_DEDUPE_INTERVAL_MS,
  DEFAULT_MAX_CONCURRENT_REQUESTS,
  DEFAULT_PAGE_SIZE,
} from "../../utils/constants.js";
import { useFunctionColumnsData } from "../useFunctionColumnsData.js";

vi.mock("@osdk/react/experimental", () => ({
  useOsdkFunctions: vi.fn(),
  useRegisterUserAgent: vi.fn(),
}));

vi.mock("../../utils/addFilterClauseToObjectSet.js", () => ({
  addFilterClauseToObjectSet: vi.fn(
    (objectSet: unknown, whereClause: unknown) => ({
      __filteredObjectSet: true,
      objectSet,
      whereClause,
    }),
  ),
}));

vi.mock("../../utils/stripDerivedPropertiesFromParams.js", () => ({
  stripDerivedPropertiesFromParams: vi.fn((params: unknown) => params),
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
      () =>
        useFunctionColumnsData({
          objectSet: undefined,
          objects: mockObjects,
        }),
    );

    expect(result.current).toEqual({});
    expect(useOsdkFunctions).toHaveBeenCalledWith({
      queries: [],
      enabled: false,
      maxConcurrent: DEFAULT_MAX_CONCURRENT_REQUESTS,
    });
  });

  it("should return empty data when objects array is empty", () => {
    vi.mocked(useOsdkFunctions).mockReturnValue([]);

    const { result } = renderHook(
      () => useFunctionColumnsData({ objectSet: mockObjectSet, objects: [] }),
    );

    expect(result.current).toEqual({});
    expect(useOsdkFunctions).toHaveBeenCalledWith({
      queries: [],
      enabled: false,
      maxConcurrent: DEFAULT_MAX_CONCURRENT_REQUESTS,
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
        useFunctionColumnsData({
          objectSet: mockObjectSet,
          objects: mockObjects,
          columnDefinitions,
        }),
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
            dedupeIntervalMs: DEFAULT_FUNCTION_COLUMN_DEDUPE_INTERVAL_MS,
            params: { [OBJ_SET_KEY]: mockObjectSet },
          },
        },
      ],
      enabled: true,
      maxConcurrent: DEFAULT_MAX_CONCURRENT_REQUESTS,
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
        useFunctionColumnsData({
          objectSet: mockObjectSet,
          objects: mockOneObject,
          columnDefinitions,
        }),
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
        useFunctionColumnsData({
          objectSet: mockObjectSet,
          objects: mockObjects,
          columnDefinitions,
        }),
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
            dedupeIntervalMs: DEFAULT_FUNCTION_COLUMN_DEDUPE_INTERVAL_MS,
          },
        },
        {
          queryDefinition: mockQueryDefinition2,
          options: {
            params: { [OBJ_SET_KEY]: mockObjectSet },
            dedupeIntervalMs: DEFAULT_FUNCTION_COLUMN_DEDUPE_INTERVAL_MS,
          },
        },
      ],
      enabled: true,
      maxConcurrent: DEFAULT_MAX_CONCURRENT_REQUESTS,
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
        useFunctionColumnsData({
          objectSet: mockObjectSet,
          objects: mockObjects,
          columnDefinitions,
        }),
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
        useFunctionColumnsData({
          objectSet: mockObjectSet,
          objects: mockObjects,
          columnDefinitions,
        }),
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
        useFunctionColumnsData({
          objectSet: mockObjectSet,
          objects: mockObjects,
          columnDefinitions: nonFunctionColumns,
        }),
    );

    expect(useOsdkFunctions).toHaveBeenCalledWith({
      queries: [],
      enabled: false,
      maxConcurrent: DEFAULT_MAX_CONCURRENT_REQUESTS,
    });
  });

  describe("paginated object sets", () => {
    const PRIMARY_KEY_API_NAME = "id";

    function makeObjects(count: number) {
      return Array.from({ length: count }, (_, i) => ({
        $objectType: "TestObject",
        $apiName: "TestObject",
        $primaryKey: `obj${i}`,
      })) as Osdk.Instance<
        TestObject,
        "$allBaseProperties",
        TestObjectKeys,
        {}
      >[];
    }

    it("should pass full object set when primaryKeyApiName is not provided", () => {
      vi.mocked(useOsdkFunctions).mockReturnValue([
        {
          data: {},
          error: undefined,
          isLoading: false,
          lastUpdated: Date.now(),
        },
      ] as unknown as UseOsdkFunctionsResult);

      renderHook(() =>
        useFunctionColumnsData({
          objectSet: mockObjectSet,
          objects: mockObjects,
          columnDefinitions,
        })
      );

      expect(useOsdkFunctions).toHaveBeenCalledWith(
        expect.objectContaining({
          queries: [
            expect.objectContaining({
              queryDefinition: mockQueryDefinition,
              options: expect.objectContaining({
                params: { [OBJ_SET_KEY]: mockObjectSet },
              }),
            }),
          ],
          enabled: true,
        }),
      );
    });

    it("should chunk objects into paginated object sets when primaryKeyApiName is provided", () => {
      const pageSize = 2;
      const objects = makeObjects(5);

      vi.mocked(useOsdkFunctions).mockReturnValue(
        Array.from({ length: 3 }, () => ({
          data: {},
          error: undefined,
          isLoading: false,
          lastUpdated: Date.now(),
        })) as unknown as UseOsdkFunctionsResult,
      );

      renderHook(() =>
        useFunctionColumnsData({
          objectSet: mockObjectSet,
          objects,
          columnDefinitions,
          primaryKeyApiName: PRIMARY_KEY_API_NAME,
          pageSize,
        })
      );

      const call = vi.mocked(useOsdkFunctions).mock.calls[0][0];
      // 5 objects / pageSize 2 = 3 pages, 1 column = 3 queries
      expect(call.queries).toHaveLength(3);
      expect(call.enabled).toBe(true);

      // Each query should have a filtered object set with $in clause
      const page0Params = call.queries[0].options?.params as Record<
        string,
        unknown
      >;
      const page1Params = call.queries[1].options?.params as Record<
        string,
        unknown
      >;
      const page2Params = call.queries[2].options?.params as Record<
        string,
        unknown
      >;

      // Page 0: obj0, obj1
      expect(page0Params[OBJ_SET_KEY]).toEqual(
        expect.objectContaining({
          __filteredObjectSet: true,
          objectSet: mockObjectSet,
          whereClause: {
            [PRIMARY_KEY_API_NAME]: { $in: ["obj0", "obj1"] },
          },
        }),
      );

      // Page 1: obj2, obj3
      expect(page1Params[OBJ_SET_KEY]).toEqual(
        expect.objectContaining({
          __filteredObjectSet: true,
          objectSet: mockObjectSet,
          whereClause: {
            [PRIMARY_KEY_API_NAME]: { $in: ["obj2", "obj3"] },
          },
        }),
      );

      // Page 2: obj4
      expect(page2Params[OBJ_SET_KEY]).toEqual(
        expect.objectContaining({
          __filteredObjectSet: true,
          objectSet: mockObjectSet,
          whereClause: {
            [PRIMARY_KEY_API_NAME]: { $in: ["obj4"] },
          },
        }),
      );
    });

    it("should use DEFAULT_PAGE_SIZE when pageSize is not specified", () => {
      const objects = makeObjects(DEFAULT_PAGE_SIZE + 1);

      vi.mocked(useOsdkFunctions).mockReturnValue(
        Array.from({ length: 2 }, () => ({
          data: {},
          error: undefined,
          isLoading: false,
          lastUpdated: Date.now(),
        })) as unknown as UseOsdkFunctionsResult,
      );

      renderHook(() =>
        useFunctionColumnsData({
          objectSet: mockObjectSet,
          objects,
          columnDefinitions,
          primaryKeyApiName: PRIMARY_KEY_API_NAME,
        })
      );

      const call = vi.mocked(useOsdkFunctions).mock.calls[0][0];
      // DEFAULT_PAGE_SIZE + 1 objects → 2 pages
      expect(call.queries).toHaveLength(2);
    });

    it("should create page × column queries for multiple columns with pagination", () => {
      const pageSize = 2;
      const objects = makeObjects(3);

      type MultiColumnDef = {
        statusColumn: MockQueryDef;
        timestampColumn: MockQueryDef;
      };

      const multiColumnDefs: ColumnDefinition<
        TestObject,
        {},
        MultiColumnDef
      >[] = [
        {
          locator: {
            type: "function",
            id: "statusColumn",
            queryDefinition: mockQueryDefinition,
            getFunctionParams: ((objectSet: ObjectSet<TestObject>) => ({
              [OBJ_SET_KEY]: objectSet,
            })) as any,
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
            getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
          },
        },
      ];

      // 3 objects / pageSize 2 = 2 pages, 2 columns = 4 queries
      vi.mocked(useOsdkFunctions).mockReturnValue(
        Array.from({ length: 4 }, () => ({
          data: {},
          error: undefined,
          isLoading: false,
          lastUpdated: Date.now(),
        })) as unknown as UseOsdkFunctionsResult,
      );

      renderHook(() =>
        useFunctionColumnsData({
          objectSet: mockObjectSet,
          objects,
          columnDefinitions: multiColumnDefs,
          primaryKeyApiName: PRIMARY_KEY_API_NAME,
          pageSize,
        })
      );

      const call = vi.mocked(useOsdkFunctions).mock.calls[0][0];
      expect(call.queries).toHaveLength(4);

      // Layout is page-first: [page0_col0, page0_col1, page1_col0, page1_col1]
      expect(call.queries[0].queryDefinition).toBe(mockQueryDefinition);
      expect(call.queries[1].queryDefinition).toBe(mockQueryDefinition2);
      expect(call.queries[2].queryDefinition).toBe(mockQueryDefinition);
      expect(call.queries[3].queryDefinition).toBe(mockQueryDefinition2);

      // Page 0 queries should filter to obj0, obj1
      const page0Col0Params = call.queries[0].options?.params as Record<
        string,
        unknown
      >;
      expect(page0Col0Params[OBJ_SET_KEY]).toEqual(
        expect.objectContaining({
          whereClause: {
            [PRIMARY_KEY_API_NAME]: { $in: ["obj0", "obj1"] },
          },
        }),
      );

      // Page 1 queries should filter to obj2
      const page1Col0Params = call.queries[2].options?.params as Record<
        string,
        unknown
      >;
      expect(page1Col0Params[OBJ_SET_KEY]).toEqual(
        expect.objectContaining({
          whereClause: {
            [PRIMARY_KEY_API_NAME]: { $in: ["obj2"] },
          },
        }),
      );
    });

    it("should merge paged results back into per-column data", () => {
      const pageSize = 2;
      const objects = makeObjects(3);

      vi.mocked(useOsdkFunctions).mockReturnValue([
        // page0: obj0, obj1
        {
          data: {
            "TestObject:obj0": { value: "r0" },
            "TestObject:obj1": { value: "r1" },
          },
          error: undefined,
          isLoading: false,
          lastUpdated: Date.now(),
        },
        // page1: obj2
        {
          data: {
            "TestObject:obj2": { value: "r2" },
          },
          error: undefined,
          isLoading: false,
          lastUpdated: Date.now(),
        },
      ] as unknown as UseOsdkFunctionsResult);

      const { result } = renderHook(() =>
        useFunctionColumnsData({
          objectSet: mockObjectSet,
          objects,
          columnDefinitions,
          primaryKeyApiName: PRIMARY_KEY_API_NAME,
          pageSize,
        })
      );

      expect(result.current).toEqual({
        testColumn: {
          obj0: {
            __asyncCell: true,
            data: { value: "r0" },
            error: undefined,
            isLoading: false,
          },
          obj1: {
            __asyncCell: true,
            data: { value: "r1" },
            error: undefined,
            isLoading: false,
          },
          obj2: {
            __asyncCell: true,
            data: { value: "r2" },
            error: undefined,
            isLoading: false,
          },
        },
      });
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
        useFunctionColumnsData({
          objectSet: mockObjectSet,
          objects: mockObjects,
          columnDefinitions,
        }),
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
