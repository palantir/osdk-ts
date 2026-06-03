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

import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type {
  ColumnDefinition,
  ObjectTableDataCell,
  ObjectTableDataColumn,
  ObjectTableDataRow,
  ObjectTableHandle,
  ObjectTableProps,
} from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useRef, useState } from "react";
import { fauxFoundry } from "../../../mocks/fauxFoundry.js";
import { Employee } from "../../../types/Employee.js";

type EmployeeTableProps = ObjectTableProps<typeof Employee>;

type EmployeeRow = ObjectTableDataRow<typeof Employee>;

const MAX_DOWNLOAD_ROWS = 500;
const PAGE_SIZE = 5;

const employeeColumns: Array<ColumnDefinition<Employee>> = [
  {
    locator: { type: "property", id: "fullName" },
    columnName: "Full name",
    renderCell: (employee) => <strong>{employee.fullName}</strong>,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    columnName: "Email",
  },
  { locator: { type: "property", id: "jobTitle" }, columnName: "Job title" },
  { locator: { type: "property", id: "department" }, columnName: "Department" },
  { locator: { type: "property", id: "locationCity" }, columnName: "City" },
];

const meta: Meta<EmployeeTableProps> = {
  title: "Components/ObjectTable/Recipes",
  component: ObjectTable,
  tags: ["beta"],
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLoadedDataDownload: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Uses `tableRef.current.getSnapshot()` to build and download a CSV from visible ObjectTable data. Passing a `rowLimit` explicitly fetches more rows before creating the CSV; it is a pagination threshold, so the snapshot can contain more rows when a full page crosses the threshold. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element.",
      },
      source: {
        code:
          `const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const MAX_DOWNLOAD_ROWS = ${MAX_DOWNLOAD_ROWS};
const PAGE_SIZE = ${PAGE_SIZE};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees-loaded-rows.csv");
};

const handleDownloadUpToLimit = async () => {
  const snapshot = await tableRef.current?.getSnapshot({
    rowLimit: ${MAX_DOWNLOAD_ROWS},
  });
  if (!snapshot) {
    return;
  }

  const csv = toCsv(
    snapshot.columns,
    snapshot.rows.slice(0, ${MAX_DOWNLOAD_ROWS}),
  );
  downloadCsv(csv, "employees-loaded-rows-capped.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download loaded rows as CSV</button>
    <button onClick={handleDownloadUpToLimit}>
      Download up to ${MAX_DOWNLOAD_ROWS} rows as CSV
    </button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);`,
      },
    },
  },
  render: () => <LoadedDataDownloadExample />,
};

function LoadedDataDownloadExample(): React.ReactElement {
  const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = useCallback(async () => {
    setIsDownloading(true);
    try {
      const snapshot = await tableRef.current?.getSnapshot();
      if (!snapshot) {
        return;
      }

      await downloadCsv(
        toCsv(snapshot.columns, snapshot.rows),
        "employees-loaded-rows.csv",
      );
    } finally {
      setIsDownloading(false);
    }
  }, []);

  const handleDownloadUpToLimit = useCallback(async () => {
    setIsDownloading(true);
    try {
      const snapshot = await tableRef.current?.getSnapshot({
        rowLimit: MAX_DOWNLOAD_ROWS,
      });
      if (!snapshot) {
        return;
      }

      await downloadCsv(
        toCsv(snapshot.columns, snapshot.rows),
        "employees-loaded-rows-capped.csv",
      );
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return (
    <div
      className="object-table-container"
      style={{ height: "600px", display: "flex", flexDirection: "column" }}
    >
      <div style={{ padding: "8px 0", marginBottom: 8 }}>
        <button
          disabled={isDownloading}
          onClick={handleDownload}
          type="button"
        >
          Download loaded rows as CSV
        </button>{" "}
        <button
          disabled={isDownloading}
          onClick={handleDownloadUpToLimit}
          type="button"
        >
          {isDownloading
            ? "Downloading…"
            : `Download up to ${MAX_DOWNLOAD_ROWS} rows as CSV`}
        </button>
      </div>
      <ObjectTable
        objectType={Employee}
        columnDefinitions={employeeColumns}
        pageSize={PAGE_SIZE}
        tableRef={tableRef}
      />
    </div>
  );
}

function toCsv(columns: ObjectTableDataColumn[], rows: EmployeeRow[]): string {
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

function formatCellValue(cell: ObjectTableDataCell | undefined): string {
  if (cell == null) {
    return "";
  }

  if (cell.status === "error" && cell.value == null) {
    return "";
  }

  return formatUnknownValue(cell.value);
}

function formatUnknownValue(value: unknown): string {
  if (value == null) {
    return "";
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
  // Appending the link keeps the download path compatible with browsers that
  // require click targets to be connected to the document.
  document.body.append(link);
  link.click();
  link.remove();
  // click() only queues the download; the browser reads the blob from the
  // object URL on a later tick. Wait a tick before revoking so the download has
  // started — and so awaiting callers keep their loading state until the
  // browser has taken over the blob.
  await new Promise((resolve) => setTimeout(resolve, 0));
  URL.revokeObjectURL(url);
}
