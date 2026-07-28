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
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import type { Client } from "@osdk/client";
import type { Column, Table } from "@tanstack/react-table";
import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { ColumnDefinition } from "../../ObjectTableApi.js";
import { SELECTION_COLUMN_ID } from "../../utils/constants.js";
import { DEFAULT_SNAPSHOT_ROW_LIMIT } from "../../utils/objectTableSnapshot.js";
import type { OrderBy } from "../../utils/types.js";
import { useObjectTableSnapshot } from "../useObjectTableSnapshot.js";

// The client `useObjectTableSnapshot` reads via `useOsdkClient`. Tests swap it
// out per case via `setMockClient` to drive the function-column code path.
let mockClient: Client;

vi.mock("@osdk/react", () => ({
  useOsdkClient: (): Client => mockClient,
}));

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;
type TestObjectKeys = PropertyKeys<TestObject>;

// Match the hook's generic constraint defaults so mock types and the inferred
// generics agree (Table / ObjectSet are invariant in their RDP parameter).
type TestRDPs = Record<string, SimplePropertyDef>;
type TestFunctionColumns = Record<string, QueryDefinition<{}>>;
type TestColumnDefinition = ColumnDefinition<
  TestObject,
  TestRDPs,
  TestFunctionColumns
>;

type TestInstance = Osdk.Instance<
  TestObject,
  "$allBaseProperties",
  TestObjectKeys,
  TestRDPs
>;

/** Builds a fake tanstack-table leaf column with the fields the hook reads. */
function makeColumn(
  id: string,
  columnDef: { header?: unknown; meta?: { columnName?: string } } = {}
): Column<TestInstance> {
  return {
    id,
    columnDef: {
      header: columnDef.header,
      meta: columnDef.meta,
    },
  } as unknown as Column<TestInstance>;
}

/** Builds a fake table exposing only `getVisibleLeafColumns`. */
function makeTable(columns: Array<Column<TestInstance>>): Table<TestInstance> {
  return {
    getVisibleLeafColumns: () => columns,
  } as unknown as Table<TestInstance>;
}

/**
 * Builds a fake object set whose `asyncIter` yields the provided objects. The
 * returned spy lets tests assert the options (e.g. `$orderBy`) the hook passes.
 */
function makeObjectSet(objects: ReadonlyArray<Record<string, unknown>>): {
  objectSet: ObjectSet<TestObject, TestRDPs>;
  asyncIter: ReturnType<typeof vi.fn>;
} {
  const asyncIter = vi.fn((_options?: unknown) =>
    (async function* () {
      for (const object of objects) {
        yield object;
      }
    })()
  );
  return {
    objectSet: { asyncIter } as unknown as ObjectSet<TestObject, TestRDPs>,
    asyncIter,
  };
}

const fakeClient = {} as unknown as Client;

function renderGetSnapshot<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
  FC extends Record<string, QueryDefinition<{}>>,
>(
  args: Omit<
    Parameters<typeof useObjectTableSnapshot<Q, RDPs, FC>>[0],
    "orderBy"
  > & { orderBy?: OrderBy<Q> },
  client: Client = fakeClient
) {
  mockClient = client;
  // `orderBy` is a required field on the hook args; default it to undefined so
  // tests that don't exercise ordering can omit it.
  const { result } = renderHook(() =>
    useObjectTableSnapshot({ orderBy: undefined, ...args })
  );
  return result.current.getSnapshot;
}

const OBJECTS = [
  { $primaryKey: "1", $apiName: "TestObject", name: "Alice", age: 30 },
  { $primaryKey: "2", $apiName: "TestObject", name: "Bob", age: 40 },
];

describe(useObjectTableSnapshot, () => {
  beforeEach(() => {
    mockClient = fakeClient;
  });

  describe("rowLimit guard", () => {
    it("rejects when totalCount exceeds the default rowLimit", async () => {
      const { objectSet, asyncIter } = makeObjectSet(OBJECTS);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([makeColumn("name")]),
        objectSet,
        totalCount: String(DEFAULT_SNAPSHOT_ROW_LIMIT + 1),
      });

      await expect(getSnapshot()).rejects.toContain(
        "total row count exceeds row limit"
      );
      // It should fail fast without paginating the object set.
      expect(asyncIter).not.toHaveBeenCalled();
    });

    it("rejects when totalCount exceeds an explicit rowLimit", async () => {
      const { objectSet } = makeObjectSet(OBJECTS);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([makeColumn("name")]),
        objectSet,
        totalCount: "11",
      });

      await expect(getSnapshot({ rowLimit: 10 })).rejects.toContain(
        "total row count exceeds row limit"
      );
    });

    it("resolves when totalCount is within rowLimit", async () => {
      const { objectSet } = makeObjectSet(OBJECTS);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([makeColumn("name")]),
        objectSet,
        totalCount: "2",
      });

      await expect(getSnapshot({ rowLimit: 10 })).resolves.toMatchObject({
        totalCount: "2",
      });
    });

    it("skips the up-front guard when totalCount is undefined", async () => {
      const { objectSet, asyncIter } = makeObjectSet(OBJECTS);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([makeColumn("name")]),
        objectSet,
        totalCount: undefined,
      });

      await expect(getSnapshot({ rowLimit: 10 })).resolves.toMatchObject({
        rows: [{ id: "1" }, { id: "2" }],
        totalCount: undefined,
      });
      expect(asyncIter).toHaveBeenCalledOnce();
    });

    it("skips the up-front guard when totalCount is not a finite number", async () => {
      const { objectSet } = makeObjectSet(OBJECTS);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([makeColumn("name")]),
        objectSet,
        totalCount: "not-a-number",
      });

      await expect(getSnapshot({ rowLimit: 10 })).resolves.toMatchObject({
        rows: [{ id: "1" }, { id: "2" }],
      });
    });

    it("rejects mid-load when loaded rows exceed rowLimit and totalCount is unknown", async () => {
      // No up-front count, so the load is bounded by the in-loop guard: the
      // 2 yielded rows exceed rowLimit 1, so the snapshot rejects rather than
      // draining the whole set.
      const { objectSet } = makeObjectSet(OBJECTS);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([makeColumn("name")]),
        objectSet,
        totalCount: undefined,
      });

      await expect(getSnapshot({ rowLimit: 1 })).rejects.toContain(
        "total row count exceeds row limit"
      );
    });

    it("loads exactly rowLimit rows without rejecting", async () => {
      const { objectSet } = makeObjectSet(OBJECTS);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([makeColumn("name")]),
        objectSet,
        totalCount: undefined,
      });

      await expect(getSnapshot({ rowLimit: 2 })).resolves.toMatchObject({
        rows: [{ id: "1" }, { id: "2" }],
      });
    });
  });

  describe("column extraction", () => {
    it("maps visible leaf columns to { id, name }", async () => {
      const { objectSet } = makeObjectSet([]);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([
          makeColumn("name", { header: "Name" }),
          makeColumn("age", { header: "Age" }),
        ]),
        objectSet,
        totalCount: "0",
      });

      const snapshot = await getSnapshot();
      expect(snapshot.columns).toEqual([
        { id: "name", name: "Name" },
        { id: "age", name: "Age" },
      ]);
    });

    it("excludes the selection column", async () => {
      const { objectSet } = makeObjectSet([]);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([
          makeColumn(SELECTION_COLUMN_ID),
          makeColumn("name", { header: "Name" }),
        ]),
        objectSet,
        totalCount: "0",
      });

      const snapshot = await getSnapshot();
      expect(snapshot.columns).toEqual([{ id: "name", name: "Name" }]);
    });

    it("excludes columns whose definition has a custom locator", async () => {
      const { objectSet } = makeObjectSet([]);
      const columnDefinitions: Array<TestColumnDefinition> = [
        { locator: { type: "property", id: "name" as TestObjectKeys } },
        { locator: { type: "custom", id: "actions" } },
      ];
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([
          makeColumn("name", { header: "Name" }),
          makeColumn("actions", { header: "Actions" }),
        ]),
        columnDefinitions,
        objectSet,
        totalCount: "0",
      });

      const snapshot = await getSnapshot();
      expect(snapshot.columns).toEqual([{ id: "name", name: "Name" }]);
    });

    it("falls back to meta.columnName when header is not a string", async () => {
      const { objectSet } = makeObjectSet([]);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([
          makeColumn("name", {
            header: () => "ignored node",
            meta: { columnName: "Full Name" },
          }),
        ]),
        objectSet,
        totalCount: "0",
      });

      const snapshot = await getSnapshot();
      expect(snapshot.columns).toEqual([{ id: "name", name: "Full Name" }]);
    });

    it("falls back to the column id when no header or columnName exists", async () => {
      const { objectSet } = makeObjectSet([]);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([makeColumn("age", { header: () => "node" })]),
        objectSet,
        totalCount: "0",
      });

      const snapshot = await getSnapshot();
      expect(snapshot.columns).toEqual([{ id: "age", name: "age" }]);
    });
  });

  describe("row loading", () => {
    it("paginates the object set and builds one row per object", async () => {
      const { objectSet } = makeObjectSet(OBJECTS);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([
          makeColumn("name", { header: "Name" }),
          makeColumn("age", { header: "Age" }),
        ]),
        objectSet,
        totalCount: "2",
      });

      const snapshot = await getSnapshot();
      expect(snapshot.rows).toHaveLength(2);
      expect(snapshot.rows[0].id).toBe("1");
      expect(snapshot.rows[0].getValue("name")).toBe("Alice");
      expect(snapshot.rows[0].getValue("age")).toBe(30);
      expect(snapshot.rows[1].getValue("name")).toBe("Bob");
    });

    it("passes orderBy to asyncIter", async () => {
      const { objectSet, asyncIter } = makeObjectSet(OBJECTS);
      const orderBy: OrderBy<TestObject> = { name: "asc" };
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([makeColumn("name", { header: "Name" })]),
        objectSet,
        totalCount: "2",
        orderBy,
      });

      await getSnapshot();
      expect(asyncIter).toHaveBeenCalledWith({ $orderBy: orderBy });
    });

    it("returns no rows and skips iteration when objectSet is undefined", async () => {
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([makeColumn("name", { header: "Name" })]),
        objectSet: undefined,
        totalCount: "2",
      });

      const snapshot = await getSnapshot();
      expect(snapshot.rows).toEqual([]);
      expect(snapshot.columns).toEqual([{ id: "name", name: "Name" }]);
    });

    it("skips iteration when there are no visible data columns", async () => {
      const { objectSet, asyncIter } = makeObjectSet(OBJECTS);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([makeColumn(SELECTION_COLUMN_ID)]),
        objectSet,
        totalCount: "2",
      });

      const snapshot = await getSnapshot();
      expect(snapshot.columns).toEqual([]);
      expect(snapshot.rows).toEqual([]);
      expect(asyncIter).not.toHaveBeenCalled();
    });
  });

  describe("totalCount passthrough", () => {
    it("returns the totalCount in the snapshot", async () => {
      const { objectSet } = makeObjectSet(OBJECTS);
      const getSnapshot = renderGetSnapshot({
        objectOrInterfaceType: TestObjectType,
        table: makeTable([makeColumn("name", { header: "Name" })]),
        objectSet,
        totalCount: "2",
      });

      const snapshot = await getSnapshot();
      expect(snapshot.totalCount).toBe("2");
    });
  });

  describe("function columns", () => {
    /**
     * Builds a client that returns a base object set (for paging by primary
     * key) when called with the object type, and a query handle exposing
     * `executeFunction` when called with a query definition.
     */
    function makeFunctionClient(executeResult: Record<string, unknown>) {
      const executeFunction = vi.fn(() => executeResult);
      const pageObjectSet = {};
      const baseObjectSet = { where: vi.fn(() => pageObjectSet) };
      const client = vi.fn((arg: { type?: string }) =>
        arg?.type === "object" ? baseObjectSet : { executeFunction }
      ) as unknown as Client;
      return { client, executeFunction, baseObjectSet };
    }

    const functionColumnDefinitions: Array<TestColumnDefinition> = [
      { locator: { type: "property", id: "name" as TestObjectKeys } },
      {
        locator: {
          type: "function",
          id: "greeting",
          queryDefinition: {
            apiName: "greeting",
            type: "query",
          } as unknown as QueryDefinition<{}>,
          getFunctionParams: () => ({}),
          getKey: (object) => String(object.$primaryKey),
        },
      },
    ];

    it("resolves visible function-column values onto rows", async () => {
      const { client, executeFunction } = makeFunctionClient({
        "1": "Hi Alice",
        "2": "Hi Bob",
      });
      const { objectSet } = makeObjectSet(OBJECTS);

      const getSnapshot = renderGetSnapshot(
        {
          objectOrInterfaceType: TestObjectType,
          table: makeTable([
            makeColumn("name", { header: "Name" }),
            makeColumn("greeting", { header: "Greeting" }),
          ]),
          columnDefinitions: functionColumnDefinitions,
          objectSet,
          totalCount: "2",
        },
        client
      );

      const snapshot = await getSnapshot();
      expect(executeFunction).toHaveBeenCalledOnce();
      expect(snapshot.rows[0].getValue("greeting")).toBe("Hi Alice");
      expect(snapshot.rows[1].getValue("greeting")).toBe("Hi Bob");
    });

    it("does not fetch function values when the function column is hidden", async () => {
      const { client, executeFunction } = makeFunctionClient({ "1": "Hi" });
      const { objectSet } = makeObjectSet(OBJECTS);

      const getSnapshot = renderGetSnapshot(
        {
          objectOrInterfaceType: TestObjectType,
          // Only the property column is visible; "greeting" is not.
          table: makeTable([makeColumn("name", { header: "Name" })]),
          columnDefinitions: functionColumnDefinitions,
          objectSet,
          totalCount: "2",
        },
        client
      );

      const snapshot = await getSnapshot();
      expect(executeFunction).not.toHaveBeenCalled();
      expect(snapshot.rows[0].getValue("greeting")).toBeUndefined();
    });
  });
});
