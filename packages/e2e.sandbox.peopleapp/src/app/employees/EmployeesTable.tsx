import type { DerivedProperty } from "@osdk/api";
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
import type { getEmployeeDaysSinceStart } from "../../generatedNoCheck2/index.js";
import { Person } from "../../generatedNoCheck2/index.js";
import { DownloadEmployeesButton } from "./DownloadEmployeesButton.js";

type RDPs = {
  leadNumber: "string";
  leadCount: "integer";
};

type FunctionColumns = {
  daysSinceStart: typeof getEmployeeDaysSinceStart;
};

const columnDefinitions: Array<
  ColumnDefinition<Person, RDPs, FunctionColumns>
> = [
  {
    locator: {
      type: "property",
      id: "employeeNumber",
    },
    columnName: "Person Number",
  },
  {
    locator: {
      type: "rdp",
      id: "leadNumber",
      creator: (baseObjectSet: DerivedProperty.Builder<Person, false>) =>
        baseObjectSet.pivotTo("lead").selectProperty("employeeNumber"),
    },
    columnName: "Lead Number",
  },
  {
    locator: {
      type: "rdp",
      id: "leadCount",
      creator: (baseObjectSet: DerivedProperty.Builder<Person, false>) =>
        baseObjectSet.pivotTo("lead").aggregate("$count"),
    },
    columnName: "Lead Count",
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

  const os = client(Person);

  const tableRef = useRef<ObjectTableHandle<Person, RDPs>>(null);

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
          <ObjectTable<Person, RDPs, FunctionColumns>
            objectSet={os}
            objectType={Person}
            columnDefinitions={columnDefinitions}
            selectionMode={"multiple"}
            // defaultOrderBy={[
            //   {
            //     property: "leadStockOptions",
            //     direction: "asc",
            //   },
            // ]}
            onSubmitEdits={handleSubmitEdits}
            tableRef={tableRef}
          />
        </div>
      </div>
    </OsdkThemeProvider>
  );
}
