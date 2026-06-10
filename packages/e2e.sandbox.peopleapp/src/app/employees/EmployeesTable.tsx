import type { DerivedProperty, Osdk } from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import type {
  ColumnDefinition,
  ObjectTableHandle,
} from "@osdk/react-components/experimental/object-table";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import {
  type OsdkThemeMode,
  OsdkThemeProvider,
  useOsdkTheme,
} from "@osdk/react-components/experimental/theme";
import React, { useCallback, useRef } from "react";
import {
  Employee,
  getEmployeeDaysSinceStart,
} from "../../generatedNoCheck2/index.js";
import "./EmployeesTable.css";
import { Button } from "../../components/Button.js";
import { DownloadEmployeesButton } from "./DownloadEmployeesButton.js";

type RDPs = {
  managerName: "string";
  leadStockOptions: "long";
};

type FunctionColumns = {
  daysSinceStart: typeof getEmployeeDaysSinceStart;
};

const columnDefinitions: Array<
  ColumnDefinition<Employee, RDPs, FunctionColumns>
> = [
  {
    locator: {
      type: "property",
      id: "fullName",
    },
    columnName: "My Name",
    validateEdit: async (value: unknown) => {
      if (typeof value !== "string" || !value.trim()) {
        return "Name cannot be empty";
      }
      return undefined;
    },
  },
  // Function-backed column
  {
    locator: {
      type: "function",
      id: "daysSinceStart",
      queryDefinition: getEmployeeDaysSinceStart,
      getFunctionParams: (objectSet) => ({ employees: objectSet }),
      getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
      getValue: (data) =>
        (data as { daysSinceStart?: number } | undefined)?.daysSinceStart,
    },
    columnName: "Days Since Start",
    width: 150,
  },
  {
    locator: {
      type: "property",
      id: "employeeNumber",
    },
    columnName: "Employee Number",
  },
  {
    locator: { type: "property", id: "jobTitle" },
  },
  // Base long property — longs arrive as strings; sorting must be numeric.
  {
    locator: { type: "property", id: "stockOptions" },
    columnName: "Stock Options",
  },
  // Derived long property (the reported scenario): the lead's stock options.
  {
    locator: {
      type: "rdp",
      id: "leadStockOptions",
      creator: (baseObjectSet: DerivedProperty.Builder<Employee, false>) =>
        baseObjectSet.pivotTo("lead").selectProperty("stockOptions"),
    },
    columnName: "Lead Stock Options (derived)",
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    width: 300,
    renderHeader: () => "Start Date",
    renderCell: (object: Osdk.Instance<Employee>) => {
      return (
        <div>
          {object.firstFullTimeStartDate
            ? new Date(object.firstFullTimeStartDate).toISOString()
            : "No value"}
        </div>
      );
    },
  },
  // RDP
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet: DerivedProperty.Builder<Employee, false>) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    columnName: "Derived Manager Name",
  },
  // Custom
  {
    locator: {
      type: "custom",
      id: "Custom Column",
    },
    renderHeader: () => "Custom",
    renderCell: (object: Osdk.Instance<Employee>) => {
      return (
        <button onClick={() => alert(`Clicked ${object.$title}`)}>
          Click me
        </button>
      );
    },
    orderable: false,
  },
];

const THEME_MODES: readonly OsdkThemeMode[] = ["light", "dark", "system"];

function ThemeToggle(): React.ReactElement {
  const { theme, resolvedTheme, setTheme } = useOsdkTheme();
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
        marginBottom: 8,
        fontSize: 12,
      }}
    >
      <span style={{ color: "#666" }}>
        Theme: <strong>{theme}</strong>
        {theme === "system" ? ` (resolved: ${resolvedTheme})` : ""}
      </span>
      {THEME_MODES.map((mode) => (
        <Button
          key={mode}
          type="button"
          onClick={() => setTheme(mode)}
          disabled={theme === mode}
        >
          {mode}
        </Button>
      ))}
    </div>
  );
}

export function EmployeesTable(): React.ReactElement {
  const handleSubmitEdits = useCallback(async () => {
    alert(`Submitting edits...`);
    return true;
  }, []);

  const client = useOsdkClient();

  const os = client(Employee);

  const tableRef = useRef<ObjectTableHandle<Employee, RDPs>>(null);

  return (
    <OsdkThemeProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <ThemeToggle />
        <div style={{ marginBottom: 8 }}>
          <DownloadEmployeesButton tableRef={tableRef} />
        </div>
        <div
          style={{
            height: "300px",
            overflow: "hidden",
          }}
        >
          <ObjectTable<Employee, RDPs, FunctionColumns>
            objectSet={os}
            objectType={Employee}
            columnDefinitions={columnDefinitions}
            selectionMode={"multiple"}
            defaultOrderBy={[
              {
                property: "leadStockOptions",
                direction: "asc",
              },
              {
                property: "firstFullTimeStartDate",
                direction: "desc",
              },
            ]}
            onSubmitEdits={handleSubmitEdits}
            tableRef={tableRef}
          />
        </div>
      </div>
    </OsdkThemeProvider>
  );
}
