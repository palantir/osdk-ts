import type { ObjectOrInterfaceDefinition, SimplePropertyDef } from "@osdk/api";
import type {
  ObjectTableHandle,
  ObjectTableSnapshot,
} from "@osdk/react-components/experimental/object-table";
import type { RefObject } from "react";
import React, { useCallback, useState } from "react";
import { Button } from "../../components/Button.js";

// Guard against pulling a very large object set into the client.
// `getSnapshot` rejects when the total row count exceeds this value;
// otherwise it loads every matching row.
const MAX_DOWNLOAD_ROWS = 10_000;

interface DownloadEmployeesButtonProps<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  tableRef: RefObject<ObjectTableHandle<Q, RDPs> | null>;
}

export function DownloadEmployeesButton<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  { tableRef }: DownloadEmployeesButtonProps<Q, RDPs>,
): React.ReactElement {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = useCallback(async () => {
    setIsDownloading(true);
    try {
      const snapshot = await tableRef.current?.getSnapshot({
        rowLimit: MAX_DOWNLOAD_ROWS,
      });
      if (snapshot == null) {
        return;
      }
      await downloadCsv(snapshotToCsv(snapshot), "employees.csv");
    } finally {
      setIsDownloading(false);
    }
  }, [tableRef]);

  return (
    <Button type="button" onClick={handleDownload} disabled={isDownloading}>
      {isDownloading ? "Downloading…" : "Download"}
    </Button>
  );
}

function snapshotToCsv<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
>(
  snapshot: ObjectTableSnapshot<Q, RDPs>,
): string {
  const { columns, rows } = snapshot;
  return [
    columns.map((column) => escapeCsvCell(column.name)).join(","),
    ...rows.map((row) =>
      columns
        .map((column) =>
          escapeCsvCell(formatCellValue(row.getValue(column.id)))
        )
        .join(",")
    ),
  ].join("\n");
}

function formatCellValue(cell: unknown): string {
  if (cell == null) {
    return "";
  }
  // Function-column failures surface as the thrown Error instance; render a
  // literal marker so users can tell a failure from a legitimately empty cell.
  if (cell instanceof Error) {
    return "Error";
  }
  if (typeof cell === "string") {
    return cell;
  }
  if (typeof cell === "number" || typeof cell === "boolean") {
    return String(cell);
  }
  try {
    return JSON.stringify(cell) ?? "";
  } catch {
    return String(cell);
  }
}

function escapeCsvCell(value: string): string {
  if (!/[",\n\r]/.test(value)) {
    return value;
  }
  return `"${value.replaceAll("\"", "\"\"")}"`;
}

async function downloadCsv(csv: string, fileName: string): Promise<void> {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  // click() only queues the download; the browser reads the blob from the
  // object URL on a later tick. Wait a tick before revoking so the download
  // has started and the awaiting caller keeps its loading state until then.
  await new Promise((resolve) => setTimeout(resolve, 0));
  URL.revokeObjectURL(url);
}
