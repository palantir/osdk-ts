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

import type { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import type { VirtualItem } from "@tanstack/react-virtual";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { afterEach, describe, expect, it } from "vitest";

import { SelectionCell } from "../SelectionCells.js";
import { TableRow } from "../TableRow.js";
import { SELECTION_COLUMN_ID } from "../utils/constants.js";

interface TestRow {
  id: string;
  name: string;
}

const DATA: TestRow[] = [
  { id: "row-1", name: "Alice" },
  { id: "row-2", name: "Bob" },
];

const virtualRow = (index: number): VirtualItem => ({
  index,
  key: index,
  start: index * 40,
  end: (index + 1) * 40,
  size: 40,
  lane: 0,
});

function useTestColumns(
  onToggleRow: (rowId: string) => void
): ColumnDef<TestRow>[] {
  // Ref-held handler keeps the column defs stable; recreating them would remount
  // the checkbox between clicks.
  const onToggleRowRef = useRef(onToggleRow);

  onToggleRowRef.current = onToggleRow;

  return useMemo(
    () => [
      {
        id: SELECTION_COLUMN_ID,
        cell: ({ row }) => (
          <SelectionCell row={row} onToggleRow={onToggleRowRef.current} />
        ),
      },
      { id: "name", accessorKey: "name" },
    ],
    []
  );
}

function TestTable(): React.ReactElement {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [focusedRowId, setFocusedRowId] = useState<string | null>(null);

  // Toggling off the render snapshot rather than `prev` keeps this idempotent,
  // as `useRowSelection` is: base-ui's checkbox dispatches two clicks per
  // interaction (the visible element plus the hidden input it forwards to).
  const onToggleRow = useCallback(
    (rowId: string) => {
      setRowSelection(rowSelection[rowId] ? {} : { [rowId]: true });
    },
    [rowSelection]
  );

  const columns = useTestColumns(onToggleRow);

  const table = useReactTable<TestRow>({
    data: DATA,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { rowSelection },
    enableRowSelection: true,
    getRowId: (row) => row.id,
  });

  return (
    <table>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            row={row}
            virtualRow={virtualRow(row.index)}
            isFocused={focusedRowId === row.id}
            setFocusedRowId={setFocusedRowId}
          />
        ))}
      </tbody>
    </table>
  );
}

const firstRow = () => screen.getByText("Alice").closest("tr")!;

describe("TableRow", () => {
  afterEach(cleanup);

  describe("selection highlight", () => {
    it("clears the highlight when a row is unselected via its checkbox", () => {
      render(<TestTable />);
      const checkbox = () => screen.getByLabelText("Select row 1");

      fireEvent.click(checkbox());
      expect(firstRow().getAttribute("data-selected")).toBe("true");

      fireEvent.click(checkbox());
      expect(firstRow().getAttribute("data-selected")).toBe("false");
      expect(firstRow().getAttribute("data-focused")).toBe("false");
    });

    it("still focuses the row when the row body is clicked", () => {
      render(<TestTable />);

      fireEvent.click(screen.getByText("Alice"));

      expect(firstRow().getAttribute("data-focused")).toBe("true");
    });
  });
});
