import type {
  ObjectTableHandle,
  ObjectTableSnapshot,
} from "@osdk/react-components/experimental/object-table";
import type { RefObject } from "react";
import React, { useCallback, useState } from "react";
import { Button } from "../../components/Button.js";

// Bound the number of rows loaded so a very large object set can't pull
// unbounded pages into the client. `getSnapshot` stops fetching once it has
// this many rows.
const MAX_DOWNLOAD_ROWS = 10_000;

interface DownloadEmployeesButtonProps {
  tableRef: RefObject<ObjectTableHandle | null>;
}

export function DownloadEmployeesButton(
  { tableRef }: DownloadEmployeesButtonProps,
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

function snapshotToCsv(snapshot: ObjectTableSnapshot): string {
  const { columns, rows } = snapshot;
  return [
    columns.map((column) => escapeCsvCell(column.name)).join(","),
    ...rows.map((row) =>
      columns
        .map((column) => escapeCsvCell(formatCellValue(row[column.id])))
        .join(",")
    ),
  ].join("\n");
}

function formatCellValue(value: unknown): string {
  if (value == null) {
    return "";
  }
  // Function-column failures surface as Error instances in the snapshot row;
  // render a literal "error" marker so users can tell a failure from a
  // legitimately empty cell.
  if (value instanceof Error) {
    return "Error";
  }
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  try {
    return JSON.stringify(value) ?? "";
  } catch {
    return String(value);
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
