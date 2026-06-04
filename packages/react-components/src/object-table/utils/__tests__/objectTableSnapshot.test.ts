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
  QueryDefinition,
} from "@osdk/api";
import { describe, expect, it, vi } from "vitest";
import type {
  ColumnDefinition,
  FunctionColumnLocator,
} from "../../ObjectTableApi.js";
import { SELECTION_COLUMN_ID } from "../constants.js";
import type { PagedObjects } from "../functionColumns.js";
import {
  buildSnapshotRow,
  fetchFunctionColumnPage,
  fetchFunctionColumnValues,
  getExportableColumnIds,
  selectSnapshotColumns,
  type SnapshotLeafColumn,
} from "../objectTableSnapshot.js";

type AnyColumnDef = ColumnDefinition<ObjectOrInterfaceDefinition>;

function columnDef(type: string, id: string): AnyColumnDef {
  return { locator: { type, id } } as unknown as AnyColumnDef;
}

describe("getExportableColumnIds", () => {
  it("returns undefined when no column definitions are provided", () => {
    expect(getExportableColumnIds(undefined)).toBeUndefined();
  });

  it("includes property, rdp, and function columns", () => {
    const ids = getExportableColumnIds([
      columnDef("property", "name"),
      columnDef("rdp", "fullName"),
      columnDef("function", "computed"),
    ]);
    expect(ids).toEqual(new Set(["name", "fullName", "computed"]));
  });

  it("excludes custom columns", () => {
    const ids = getExportableColumnIds([
      columnDef("property", "name"),
      columnDef("custom", "actions"),
    ]);
    expect(ids).toEqual(new Set(["name"]));
  });
});

describe("selectSnapshotColumns", () => {
  const property: SnapshotLeafColumn = { id: "name", name: "Name" };
  const asyncColumn: SnapshotLeafColumn = {
    id: "computed",
    name: "Computed",
  };
  const customColumn: SnapshotLeafColumn = { id: "actions", name: "Actions" };
  const selectionColumn: SnapshotLeafColumn = {
    id: SELECTION_COLUMN_ID,
    name: "",
  };

  it("drops the selection column without reporting it", () => {
    const { columns, excludedColumns } = selectSnapshotColumns(
      [selectionColumn, property],
      undefined,
    );
    expect(columns).toEqual([{ id: "name", name: "Name" }]);
    expect(excludedColumns).toEqual([]);
  });

  it("includes function-backed columns when present in the exportable set", () => {
    const { columns, excludedColumns } = selectSnapshotColumns(
      [property, asyncColumn],
      new Set(["name", "computed"]),
    );
    expect(columns).toEqual([
      { id: "name", name: "Name" },
      { id: "computed", name: "Computed" },
    ]);
    expect(excludedColumns).toEqual([]);
  });

  it("excludes custom columns absent from the exportable set", () => {
    const { columns, excludedColumns } = selectSnapshotColumns(
      [property, customColumn],
      new Set(["name"]),
    );
    expect(columns).toEqual([{ id: "name", name: "Name" }]);
    expect(excludedColumns).toEqual(["Actions"]);
  });

  it("treats every column as exportable when no exportable set is given", () => {
    const { columns, excludedColumns } = selectSnapshotColumns(
      [property, customColumn],
      undefined,
    );
    expect(columns).toEqual([
      { id: "name", name: "Name" },
      { id: "actions", name: "Actions" },
    ]);
    expect(excludedColumns).toEqual([]);
  });

  it("preserves the input column order", () => {
    const a: SnapshotLeafColumn = { id: "a", name: "A" };
    const b: SnapshotLeafColumn = { id: "b", name: "B" };
    const { columns } = selectSnapshotColumns([b, a], new Set(["a", "b"]));
    expect(columns.map((c) => c.id)).toEqual(["b", "a"]);
  });
});

describe("buildSnapshotRow", () => {
  it("keys raw cell values by column id", () => {
    const object = { name: "Ada", age: 36, $primaryKey: 1 };
    expect(buildSnapshotRow(object, ["name", "age"])).toEqual({
      name: "Ada",
      age: 36,
    });
  });

  it("yields undefined for columns absent on the object", () => {
    const object = { name: "Ada" };
    expect(buildSnapshotRow(object, ["name", "missing"])).toEqual({
      name: "Ada",
      missing: undefined,
    });
  });

  it("preserves non-primitive values without formatting them", () => {
    const tags = ["x", "y"];
    const object = { tags };
    const row = buildSnapshotRow(object, ["tags"]);
    expect(row.tags).toBe(tags);
  });
});

type AnyFunctionLocator = FunctionColumnLocator<
  ObjectOrInterfaceDefinition,
  Record<string, never>,
  Record<string, QueryDefinition<{}>>
>;
type AnyPagedObjects = PagedObjects<
  ObjectOrInterfaceDefinition,
  Record<string, never>
>;

function makeFunctionLocator(
  id: string,
  overrides: Partial<AnyFunctionLocator> = {},
): AnyFunctionLocator {
  return {
    type: "function",
    id,
    queryDefinition: { apiName: `${id}Query` } as unknown as QueryDefinition<
      {}
    >,
    getFunctionParams: () => ({}),
    getKey: (obj) => String((obj as { $primaryKey: unknown }).$primaryKey),
    getValue: undefined,
    ...overrides,
  } as AnyFunctionLocator;
}

function makePage(primaryKeys: number[]): AnyPagedObjects {
  const objects = primaryKeys.map((pk) => ({
    $primaryKey: pk,
  })) as AnyPagedObjects["objects"];
  return {
    objectSet: {} as ObjectSet<ObjectOrInterfaceDefinition>,
    objects,
  };
}

describe("fetchFunctionColumnPage", () => {
  it("maps each object key to its raw cell value when no getValue is set", async () => {
    const locator = makeFunctionLocator("computed");
    const executeFunction = vi.fn(async () => ({ "1": "alpha", "2": "beta" }));

    const result = await fetchFunctionColumnPage(
      executeFunction,
      locator,
      makePage([1, 2]),
    );

    expect(Array.from(result.entries())).toEqual([
      ["1", "alpha"],
      ["2", "beta"],
    ]);
  });

  it("applies getValue to each raw cell value", async () => {
    const locator = makeFunctionLocator("computed", {
      getValue: (raw) => (raw as { v: number }).v * 2,
    });
    const executeFunction = vi.fn(async () => ({
      "1": { v: 10 },
      "2": { v: 21 },
    }));

    const result = await fetchFunctionColumnPage(
      executeFunction,
      locator,
      makePage([1, 2]),
    );

    expect(result.get("1")).toBe(20);
    expect(result.get("2")).toBe(42);
  });

  it("fills every object's cell with the Error when the query rejects", async () => {
    const failure = new Error("boom");
    const locator = makeFunctionLocator("computed");
    const executeFunction = vi.fn(async () => {
      throw failure;
    });

    const result = await fetchFunctionColumnPage(
      executeFunction,
      locator,
      makePage([1, 2]),
    );

    expect(result.get("1")).toBe(failure);
    expect(result.get("2")).toBe(failure);
  });
});

describe("fetchFunctionColumnValues", () => {
  it("merges per-page maps into one map per column", async () => {
    const locator = makeFunctionLocator("computed");
    const executeFunction = vi.fn(async (
      _q: QueryDefinition<{}>,
      _params: unknown,
    ) => {
      const callIndex = executeFunction.mock.calls.length;
      return callIndex === 1
        ? { "1": "page1-a" }
        : { "2": "page2-a" };
    });

    const values = await fetchFunctionColumnValues(
      [locator],
      [makePage([1]), makePage([2])],
      executeFunction,
    );

    const column = values.get("computed");
    expect(column?.get("1")).toBe("page1-a");
    expect(column?.get("2")).toBe("page2-a");
  });

  it("isolates failures per page so other pages still resolve", async () => {
    const locator = makeFunctionLocator("computed");
    const failure = new Error("page1 failed");
    const executeFunction = vi.fn(async (
      _q: QueryDefinition<{}>,
      _params: unknown,
    ) => {
      const callIndex = executeFunction.mock.calls.length;
      if (callIndex === 1) throw failure;
      return { "2": "ok" };
    });

    const values = await fetchFunctionColumnValues(
      [locator],
      [makePage([1]), makePage([2])],
      executeFunction,
    );

    expect(values.get("computed")?.get("1")).toBe(failure);
    expect(values.get("computed")?.get("2")).toBe("ok");
  });
});
