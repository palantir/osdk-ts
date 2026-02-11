import type { DerivedProperty, Osdk } from "@osdk/api";
import type { ColumnDefinition } from "@osdk/react-components/experimental";
import {
  ColumnConfigDialog,
  ObjectTable,
} from "@osdk/react-components/experimental";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Employee } from "../../generatedNoCheck2/index.js";

type RDPs = {
  managerName: "string";
};

const baseColumnDefinitions: Array<
  ColumnDefinition<
    Employee,
    RDPs,
    {}
  >
> = [
  // With renderHeader prop
  {
    locator: {
      type: "property",
      id: "fullName",
    },
    // pinned: "left",
    columnName: "My Name",
    renderHeader: () => <div style={{ color: "red" }}>My Name</div>,
  },
  // With isVisible prop
  {
    locator: { type: "property", id: "jobTitle" },
    isVisible: false,
  },
  // With renderHeader, renderCell, width prop
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    width: 300,
    renderHeader: () => "Start Date",
    renderCell: (object: Osdk.Instance<Employee>) => {
      return (
        <div>
          {object["firstFullTimeStartDate"]
            ? new Date(object["firstFullTimeStartDate"]).toISOString()
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
    renderCell: (object: Osdk.Instance<Employee>) => {
      if ("managerName" in object) {
        return object["managerName"] as string;
      }
      return "No Value";
    },
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
        <button onClick={() => alert(`Clicked ${object["$title"]}`)}>
          Click me
        </button>
      );
    },
    orderable: false,
  },
];

export function EmployeesTable() {
  const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
  const [columnStates, setColumnStates] = useState<
    Array<{ columnId: string; isVisible: boolean }>
  >([]);

  // Initialize column states from column definitions
  useEffect(() => {
    const initialStates = baseColumnDefinitions.map((colDef) => {
      const id = typeof colDef.locator === "object"
        ? colDef.locator.id
        : colDef.locator;
      return {
        columnId: id,
        isVisible: colDef.isVisible !== false, // Default to true if not specified
      };
    });
    setColumnStates(initialStates);
  }, []);

  const handleApplyColumnConfig = useCallback(
    (columns: Array<{ columnId: string; isVisible: boolean }>) => {
      // Update the column states which will trigger a re-render
      setColumnStates(columns);
      setIsColumnConfigOpen(false);
    },
    [],
  );

  // Create modified column definitions based on visibility and order state
  const visibleColumnDefinitions: Array<ColumnDefinition<Employee, RDPs, {}>> =
    useMemo(() => {
      // First, create a map of column definitions by ID for easy lookup
      const columnDefMap = new Map<
        string,
        ColumnDefinition<Employee, RDPs, {}>
      >();
      baseColumnDefinitions.forEach((colDef) => {
        const id = typeof colDef.locator === "object"
          ? colDef.locator.id
          : colDef.locator;
        columnDefMap.set(id, colDef);
      });

      // Then, create the reordered array based on columnStates order
      const orderedDefinitions: Array<ColumnDefinition<Employee, RDPs, {}>> =
        [];

      // Add columns in the order specified by columnStates
      columnStates.forEach((state) => {
        const colDef = columnDefMap.get(state.columnId);
        if (colDef) {
          orderedDefinitions.push({
            ...colDef,
            isVisible: state.isVisible,
          });
          columnDefMap.delete(state.columnId); // Remove to track what's been added
        }
      });

      // Add any remaining columns that weren't in columnStates (shouldn't happen, but just in case)
      columnDefMap.forEach((colDef) => {
        orderedDefinitions.push({
          ...colDef,
          isVisible: colDef.isVisible !== false,
        });
      });

      return orderedDefinitions;
    }, [columnStates]);

  const columnOptions = useMemo(() => {
    return baseColumnDefinitions.map((colDef) => {
      const id = typeof colDef.locator === "object"
        ? colDef.locator.id
        : colDef.locator;
      const name = colDef.columnName
        || (colDef.locator.type === "property"
          ? colDef.locator.id
          : colDef.locator.type === "rdp"
          ? colDef.locator.id
          : colDef.locator.id);
      return { id, name };
    });
  }, []);

  const renderCellContextMenu = useCallback(
    (_: Osdk.Instance<Employee>, cellValue: unknown) => {
      return (
        <div
          style={{
            background: "white",
            padding: 8,
            border: "1px solid #d1d5db",
            boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
            fontSize: 13,
          }}
        >
          {cellValue ? cellValue.toString() : "No Value"}
        </div>
      );
    },
    [],
  );

  return (
    <div
      style={{
        height: "500px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "8px 0", marginBottom: 8 }}>
        <button
          onClick={() => setIsColumnConfigOpen(true)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Configure Columns
        </button>
      </div>
      <ObjectTable<Employee, RDPs>
        objectType={Employee}
        columnDefinitions={visibleColumnDefinitions}
        selectionMode={"multiple"}
        renderCellContextMenu={renderCellContextMenu}
        defaultOrderBy={[{
          property: "firstFullTimeStartDate",
          direction: "desc",
        }]}
        enableColumnConfig={false} // We are providing our own column config dialog
        enableColumnPinning={false} // Disable pinning for simplicity
      />
      <ColumnConfigDialog
        isOpen={isColumnConfigOpen}
        onClose={() => setIsColumnConfigOpen(false)}
        columnOptions={columnOptions}
        currentVisibility={columnStates.reduce<Record<string, boolean>>((acc, state) => {
          acc[state.columnId] = state.isVisible;
          return acc;
        }, {})}
        currentColumnOrder={columnStates.map(s => s.columnId)}
        onApply={handleApplyColumnConfig}
      />
    </div>
  );
}
