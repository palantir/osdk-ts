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

import type { ObjectTypeDefinition, Osdk, PropertyKeys } from "@osdk/api";
import type { AccessorColumnDef } from "@tanstack/react-table";
import { render } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useColumnDefs } from "../../../object-table/hooks/useColumnDefs.js";
import { useObjectTableData } from "../../../object-table/hooks/useObjectTableData.js";
import type { ObjectTableHandle } from "../../../object-table/ObjectTableApi.js";
import { ObjectTable } from "../object-table.js";

vi.mock("@osdk/react", () => ({
  useRegisterUserAgent: vi.fn(),
}));

vi.mock("../../../object-table/hooks/useObjectTableData.js", () => ({
  useObjectTableData: vi.fn(),
}));

vi.mock("../../../object-table/hooks/useColumnDefs.js", () => ({
  useColumnDefs: vi.fn(),
}));

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
  primaryKeyApiName: "id",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;
type TestObjectKeys = PropertyKeys<TestObject>;
type TestRDPs = Record<string, never>;
type TestRow = Osdk.Instance<
  TestObject,
  "$allBaseProperties",
  TestObjectKeys,
  TestRDPs
>;
type TestFunctionColumns = Record<string, never>;

const mockedUseObjectTableData = vi.mocked(
  useObjectTableData<TestObject, TestRDPs, TestFunctionColumns>,
);
const mockedUseColumnDefs = vi.mocked(
  useColumnDefs<TestObject, TestRDPs, TestFunctionColumns>,
);

describe("public experimental ObjectTable", () => {
  beforeEach(() => {
    mockedUseObjectTableData.mockReset();
    mockedUseColumnDefs.mockReset();

    mockedUseColumnDefs.mockReturnValue({
      columns: [createColumn("name", "Name")],
      loading: false,
      error: undefined,
    });
    mockedUseObjectTableData.mockReturnValue({
      data: [createRow({ id: "1", name: "Ada" })],
      fetchMore: undefined,
      hasMore: false,
      isLoading: false,
      error: undefined,
      objectSet: undefined,
      refetch: vi.fn(),
      totalCount: undefined,
    });
  });

  it("passes tableRef to the ObjectTable data handle", () => {
    const ref = React.createRef<ObjectTableHandle<TestObject>>();

    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    expect(ref.current?.getSnapshot().rows[0].getValue("name")).toEqual({
      status: "ready",
      value: "Ada",
    });
  });
});

function createColumn(
  id: string,
  name: string,
): AccessorColumnDef<TestRow> {
  return {
    id,
    accessorKey: id as keyof TestRow & string,
    header: name,
    meta: { columnName: name },
  };
}

function createRow({ id, name }: { id: string; name: string }): TestRow {
  return {
    $apiName: TestObjectType.apiName,
    $objectType: TestObjectType,
    $primaryKey: id,
    id,
    name,
  } as unknown as TestRow;
}
