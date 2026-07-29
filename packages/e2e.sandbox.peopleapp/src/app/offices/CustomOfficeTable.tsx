import type { Osdk, PropertyKeys } from "@osdk/api";
import {
  useColumnDefs,
  useObjectTableData,
  useRowSelection,
  useSelectionColumn,
  useTableSorting,
} from "@osdk/react-components/experimental/object-table";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

import { Office } from "../../generatedNoCheck2/index.js";

type OfficeRow = Osdk.Instance<
  Office,
  "$allBaseProperties",
  PropertyKeys<Office>,
  Record<string, never>
>;

const EMPTY_ROWS: OfficeRow[] = [];

interface CustomOfficeTableProps {
  /** Fired when a row is clicked, with the clicked office. */
  onOfficeClick?: (office: OfficeRow) => void;
}

/*
 * Example of a fully custom (headless) table built from the ObjectTable
 * building-block hooks exported by
 * `@osdk/react-components/experimental/object-table`.
 */
export function CustomOfficeTable({
  onOfficeClick,
}: CustomOfficeTableProps): React.ReactElement {
  const { sorting, onSortingChange } = useTableSorting<Office>({});

  const { data, isLoading, error } = useObjectTableData<Office>({
    objectOrInterfaceType: Office,
    sorting,
  });

  const { columns } = useColumnDefs<Office>(Office);

  const {
    rowSelection,
    isAllSelected,
    hasSelection,
    enableRowSelection,
    onToggleAll,
    onToggleRow,
  } = useRowSelection<Office>({ selectionMode: "single", data });

  const selectionColumn = useSelectionColumn<Office>({
    selectionMode: "single",
    isAllSelected,
    hasSelection,
    onToggleAll,
    onToggleRow,
  });

  const allColumns = useMemo<Array<ColumnDef<OfficeRow>>>(
    () => (selectionColumn != null ? [selectionColumn, ...columns] : columns),
    [selectionColumn, columns]
  );

  const table = useReactTable<OfficeRow>({
    data: data ?? EMPTY_ROWS,
    columns: allColumns,
    state: { sorting, rowSelection },
    onSortingChange,
    enableRowSelection,
    manualSorting: true,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.$primaryKey,
  });

  return (
    <div className="w-full">
      {error != null && (
        <div className="text-sm text-red-600 mb-2">
          Failed to load offices: {error.message}
        </div>
      )}
      {isLoading && (
        <div className="text-sm italic text-gray-500 mb-2">Loading…</div>
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-gray-300">
              {headerGroup.headers.map((header) => {
                const canSort = header.column.getCanSort();
                const sortDir = header.column.getIsSorted();
                return (
                  <th
                    key={header.id}
                    className={`py-2 px-3 font-semibold ${
                      canSort ? "cursor-pointer select-none" : ""
                    }`}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {sortDir === "asc" && " ▲"}
                    {sortDir === "desc" && " ▼"}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={`border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                row.getIsSelected() ? "bg-blue-50 hover:bg-blue-50" : ""
              }`}
              onClick={() => onOfficeClick?.(row.original)}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-2 px-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!isLoading && data?.length === 0 && (
        <div className="text-sm italic text-gray-500 mt-2">
          No offices found
        </div>
      )}
    </div>
  );
}
