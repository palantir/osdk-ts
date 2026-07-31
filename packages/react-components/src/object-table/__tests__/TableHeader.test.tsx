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

import type { ColumnDef, SortingState } from "@tanstack/react-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import React, { useState } from "react";
import { afterEach, describe, expect, it } from "vitest";

import { TableHeader } from "../TableHeader.js";

interface TestRow {
  name: string;
  age: number;
  hiredAt: string;
}

const COLUMNS: ColumnDef<TestRow>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
    meta: {
      dataType: "string",
    },
  },
  {
    id: "age",
    accessorKey: "age",
    header: "Age",
    meta: { dataType: "integer" },
  },
  {
    id: "hiredAt",
    accessorKey: "hiredAt",
    header: "Hired At",
    meta: { dataType: "timestamp" },
  },
];

const ROWS: TestRow[] = [{ name: "Ada", age: 36, hiredAt: "2024-01-01" }];

function TestTableHeader({
  initialSorting = [],
}: {
  initialSorting?: SortingState;
}): React.ReactElement {
  const [sorting, setSorting] = useState<SortingState>(initialSorting);

  const table = useReactTable<TestRow>({
    data: ROWS,
    columns: COLUMNS,
    state: { sorting },
    onSortingChange: setSorting,
    enableSorting: true,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <TableHeader
        table={table}
        headerMenuFeatureFlags={{ showSortingItems: true }}
      />
    </table>
  );
}

async function openMultiSortDialog(columnId: string): Promise<void> {
  fireEvent.click(
    screen.getByRole("button", {
      name: `Open header menu for column with id=${columnId}`,
    })
  );

  const multiSortItem = await waitFor(() =>
    screen.getByRole("menuitem", { name: "Sort on multiple columns" })
  );

  fireEvent.click(multiSortItem);

  await waitFor(() =>
    expect(screen.getByText("Sort on Multiple Columns")).toBeTruthy()
  );
}

function getSortToggle(columnName: string): HTMLElement {
  return screen.getByRole("button", {
    name: `Toggle sort direction for ${columnName}`,
  });
}

describe(TableHeader, () => {
  afterEach(() => {
    cleanup();
  });

  it("forwards each column's data type to the multi-sort dialog's icons", async () => {
    render(
      <TestTableHeader
        initialSorting={[
          { id: "name", desc: false },
          { id: "age", desc: true },
          { id: "hiredAt", desc: false },
        ]}
      />
    );

    await openMultiSortDialog("name");

    expect(
      getSortToggle("Name").querySelector('svg[data-icon="sort-alphabetical"]')
    ).toBeTruthy();
    expect(
      getSortToggle("Age").querySelector('svg[data-icon="sort-numerical-desc"]')
    ).toBeTruthy();
    expect(
      getSortToggle("Hired At").querySelector('svg[data-icon="sort-asc"]')
    ).toBeTruthy();
  });
});
