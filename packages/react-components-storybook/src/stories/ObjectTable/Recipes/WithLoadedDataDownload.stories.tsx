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
  ObjectTableSnapshot,
} from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { RefObject } from "react";
import { useCallback, useRef, useState } from "react";
import { fauxFoundry } from "../../../mocks/fauxFoundry.js";
import { Employee } from "../../../types/Employee.js";

type EmployeeTableProps = ObjectTableProps<typeof Employee>;

type EmployeeRow = ObjectTableDataRow<typeof Employee>;

const employeeColumns: Array<ColumnDefinition<Employee>> = [
  { locator: { type: "property", id: "fullName" }, columnName: "Full name" },
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
          "Uses `tableRef.current.getSnapshot()` to build and download a CSV from the currently loaded visible ObjectTable data.",
      },
      source: {
        code:
          `const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);

const handleDownload = () => {
  const snapshot = tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees-loaded-rows.csv");
};

const handleLoadNextPage = async () => {
  const snapshot = tableRef.current?.getSnapshot();
  if (!snapshot?.hasNextPage) {
    return;
  }

  await snapshot.fetchNextPage();
};

const handleDownloadAll = async () => {
  let snapshot = tableRef.current?.getSnapshot();
  while (snapshot?.hasNextPage) {
    await snapshot.fetchNextPage();
    snapshot = tableRef.current?.getSnapshot();
  }

  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees-all-loaded-rows.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download loaded rows as CSV</button>
    <button onClick={handleLoadNextPage}>Load next page</button>
    <button onClick={handleDownloadAll}>Download all rows as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={5}
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
  const [isDownloadingAll, setIsDownloadingAll] = useState(false);
  const [message, setMessage] = useState(
    "Download reads the rows currently loaded in ObjectTable.",
  );

  const handleLoadNextPage = useCallback(async () => {
    const snapshot = tableRef.current?.getSnapshot();
    if (!snapshot?.hasNextPage) {
      setMessage("No next page to load.");
      return;
    }

    await snapshot.fetchNextPage();
    setMessage("Loaded next page. Download again to include it.");
  }, []);

  const handleDownload = useCallback(() => {
    const snapshot = tableRef.current?.getSnapshot();
    if (!snapshot) {
      setMessage("The table is not ready yet.");
      return;
    }

    downloadCsv(
      toCsv(snapshot.columns, snapshot.rows),
      "employees-loaded-rows.csv",
    );
    setMessage("Downloaded currently loaded rows.");
  }, []);

  const handleDownloadAll = useCallback(async () => {
    setIsDownloadingAll(true);
    try {
      const snapshot = await loadAllPages(tableRef);
      if (!snapshot) {
        setMessage("The table is not ready yet.");
        return;
      }

      downloadCsv(
        toCsv(snapshot.columns, snapshot.rows),
        "employees-all-loaded-rows.csv",
      );
      setMessage("Loaded every page and downloaded all rows.");
    } finally {
      setIsDownloadingAll(false);
    }
  }, []);

  return (
    <div
      className="object-table-container"
      style={{ height: "600px", display: "flex", flexDirection: "column" }}
    >
      <div style={{ padding: "8px 0", marginBottom: 8 }}>
        <button onClick={handleDownload} type="button">
          Download loaded rows as CSV
        </button>{" "}
        <button onClick={handleLoadNextPage} type="button">
          Load next page
        </button>{" "}
        <button
          disabled={isDownloadingAll}
          onClick={handleDownloadAll}
          type="button"
        >
          {isDownloadingAll
            ? "Loading all rows…"
            : "Download all rows as CSV"}
        </button>
        <div
          aria-live="polite"
          style={{ marginTop: 8 }}
        >
          {message}
        </div>
      </div>
      <ObjectTable
        objectType={Employee}
        columnDefinitions={employeeColumns}
        pageSize={5}
        tableRef={tableRef}
      />
    </div>
  );
}

async function loadAllPages(
  tableRef: RefObject<ObjectTableHandle<typeof Employee>>,
): Promise<ObjectTableSnapshot<typeof Employee> | undefined> {
  let snapshot = tableRef.current?.getSnapshot();
  while (snapshot?.hasNextPage) {
    await snapshot.fetchNextPage();
    snapshot = tableRef.current?.getSnapshot();
  }

  return snapshot;
}

function toCsv(
  columns: readonly ObjectTableDataColumn[],
  rows: readonly EmployeeRow[],
): string {
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

function downloadCsv(csv: string, fileName: string): void {
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
  URL.revokeObjectURL(url);
}
