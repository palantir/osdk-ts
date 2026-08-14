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

import { Button } from "../../components/Button.js";

import "./EmployeesTable.css";
import {
  Employee,
  getEmployeeDaysSinceStart,
} from "../../generatedNoCheck2/index.js";
import { DownloadEmployeesButton } from "./DownloadEmployeesButton.js";

type RDPs = {
  managerName: "string";
  // Derived `long` via a `get` selection -- the reported scenario.
  leadStockOptions: "long";
  // Derived `long` via a `max` aggregation -- min/max preserve the source type,
  // so this also arrives as a string and must sort numerically.
  maxPeepStockOptions: "long";
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
    // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
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
  // Base long property -- longs arrive as strings; sorting must be numeric.
  {
    locator: { type: "property", id: "stockOptions" },
    columnName: "Stock Options",
  },
  // Derived long via `get` selection (the reported scenario): the lead's stock
  // options.
  {
    locator: {
      type: "rdp",
      id: "leadStockOptions",
      creator: (baseObjectSet: DerivedProperty.Builder<Employee, false>) =>
        baseObjectSet.pivotTo("lead").selectProperty("stockOptions"),
    },
    columnName: "Lead Stock Options (derived get)",
  },
  // Derived long via `max` aggregation: the highest stock options among the
  // employee's reports. min/max preserve the aggregated property's type, so
  // this is captured as `long` and sorts numerically.
  {
    locator: {
      type: "rdp",
      id: "maxPeepStockOptions",
      creator: (baseObjectSet: DerivedProperty.Builder<Employee, false>) =>
        baseObjectSet.pivotTo("peeps").aggregate("stockOptions:max"),
    },
    columnName: "Max Report Stock Options (derived max)",
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
  // Custom + editable: no ontology property backs this column, so `getCellValue`
  // supplies the value and `cellValueType` picks the editor. Without it the
  // cell would get a text input and commit "12345" instead of 12345.
  {
    locator: {
      type: "custom",
      id: "reportsTo",
    },
    columnName: "Reports To (#)",
    getCellValue: (object: Osdk.Instance<Employee>) =>
      object.leadEmployeeNumber ?? object.mentorEmployeeNumber,
    cellValueType: "integer",
    editable: true,
    orderable: false,
  },
  // Custom + editable, string-typed, and `renderCell` reusing the value the
  // table already derived rather than recomputing it.
  {
    locator: {
      type: "custom",
      id: "contact",
    },
    columnName: "Contact",
    getCellValue: (object: Osdk.Instance<Employee>) =>
      [object.emailPrimaryWork, object.jobTitle]
        .filter((part) => part != null)
        .join(" · "),
    cellValueType: "string",
    editable: true,
    orderable: false,
    renderCell: (
      _object: Osdk.Instance<Employee>,
      _locator: unknown,
      value: unknown,
    ) => <em>{(value as string) || "No value"}</em>,
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
  // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
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
            ]}
            onSubmitEdits={handleSubmitEdits}
            tableRef={tableRef}
          />
        </div>
      </div>
    </OsdkThemeProvider>
  );
}
