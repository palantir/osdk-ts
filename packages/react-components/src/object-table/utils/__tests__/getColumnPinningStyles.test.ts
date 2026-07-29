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
  Column,
  ColumnDef,
  ColumnSizingState,
  Table,
} from "@tanstack/react-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SELECTION_COLUMN_ID } from "../constants.js";
import { getColumnPinningStyles } from "../getColumnPinningStyles.js";

interface TestRow {
  name: string;
  email: string;
  age: number;
  notes: string;
}

// Mirrors the column defs useColumnDefs produces: `size` is only set when the
// caller supplied an explicit `width` in columnDefinitions.
const TEST_COLUMNS: Array<ColumnDef<TestRow>> = [
  { id: SELECTION_COLUMN_ID, size: 50, minSize: 50, maxSize: 50 },
  { id: "name", accessorKey: "name", size: undefined },
  { id: "email", accessorKey: "email", size: undefined },
  { id: "age", accessorKey: "age", size: 200 },
  { id: "notes", accessorKey: "notes", size: undefined, maxSize: 220 },
];

function renderTestTable(columnSizing: ColumnSizingState = {}): Table<TestRow> {
  const { result } = renderHook(() =>
    // Same shape as the table ObjectTable builds.
    useReactTable<TestRow>({
      data: [],
      columns: TEST_COLUMNS,
      getCoreRowModel: getCoreRowModel(),
      state: {
        columnSizing,
        columnPinning: { left: [SELECTION_COLUMN_ID], right: ["notes"] },
      },
      columnResizeMode: "onChange",
      defaultColumn: { minSize: 80 },
    })
  );

  return result.current;
}

function getColumn(
  table: Table<TestRow>,
  id: string
): Column<TestRow, unknown> {
  const column = table.getColumn(id);
  if (column == null) {
    throw new Error(`Test column ${id} not found`);
  }
  return column;
}

describe(getColumnPinningStyles, () => {
  describe("filling the parent container width", () => {
    it("lets a column with no explicit width grow, in proportion to its width", () => {
      const table = renderTestTable();

      const { columnStyles } = getColumnPinningStyles(
        getColumn(table, "name"),
        table.getState().columnSizing
      );

      // Leftover container width is shared out via flex-grow, weighted by the
      // width the column already has.
      expect(columnStyles.width).toBe(150);
      expect(columnStyles.flexGrow).toBe(150);
    });

    it("keeps a column at the explicit width supplied in columnDefinitions", () => {
      const table = renderTestTable();

      const { columnStyles } = getColumnPinningStyles(
        getColumn(table, "age"),
        table.getState().columnSizing
      );

      expect(columnStyles.width).toBe(200);
      expect(columnStyles.flexGrow).toBe(0);
    });

    it("keeps a column the user has resized at its resized width", () => {
      const table = renderTestTable({ email: 300 });

      const { columnStyles } = getColumnPinningStyles(
        getColumn(table, "email"),
        table.getState().columnSizing
      );

      expect(columnStyles.width).toBe(300);
      expect(columnStyles.flexGrow).toBe(0);
    });

    it("keeps pinned columns fixed so their sticky offsets stay aligned", () => {
      const table = renderTestTable();
      const columnSizing = table.getState().columnSizing;

      // getStart("left") / getAfter("right") derive sticky offsets from
      // getSize(), so a pinned column that grew past getSize() would push the
      // columns pinned beside it out of alignment.
      expect(
        getColumnPinningStyles(
          getColumn(table, SELECTION_COLUMN_ID),
          columnSizing
        ).columnStyles.flexGrow
      ).toBe(0);
      expect(
        getColumnPinningStyles(getColumn(table, "notes"), columnSizing)
          .columnStyles.flexGrow
      ).toBe(0);
    });

    it("caps growth at the column's maxWidth", () => {
      const table = renderTestTable();

      const { columnStyles } = getColumnPinningStyles(
        getColumn(table, "notes"),
        table.getState().columnSizing
      );

      expect(columnStyles.maxWidth).toBe(220);
    });

    it("leaves maxWidth unset for columns with no maxWidth", () => {
      const table = renderTestTable();

      const { columnStyles } = getColumnPinningStyles(
        getColumn(table, "name"),
        table.getState().columnSizing
      );

      // tanstack defaults maxSize to Number.MAX_SAFE_INTEGER; that must not
      // reach the DOM as a max-width.
      expect(columnStyles.maxWidth).toBeUndefined();
    });
  });

  describe("pinning offsets", () => {
    it("still positions pinned columns", () => {
      const table = renderTestTable();
      const columnSizing = table.getState().columnSizing;

      expect(
        getColumnPinningStyles(
          getColumn(table, SELECTION_COLUMN_ID),
          columnSizing
        ).columnStyles.left
      ).toBe("0px");
      expect(
        getColumnPinningStyles(getColumn(table, "notes"), columnSizing)
          .columnStyles.right
      ).toBe("0px");
      expect(
        getColumnPinningStyles(getColumn(table, "name"), columnSizing)
          .columnStyles.left
      ).toBeUndefined();
    });
  });
});
