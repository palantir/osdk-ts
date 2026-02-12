import type { DerivedProperty, Osdk } from "@osdk/api";
import type { ColumnDefinition } from "@osdk/react-components/experimental";
import {
  ColumnConfigDialog,
  ObjectTable,
} from "@osdk/react-components/experimental";
import { useCallback, useMemo, useState } from "react";
import { Employee } from "../../generatedNoCheck2/index.js";

type RDPs = {
  managerName: "string";
};

const initialColumnDefinitions: Array<
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
    columnName: "Job Title",
  },
  // With renderHeader, renderCell, width prop
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    width: 300,
    columnName: "Start Date",
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
    columnName: "Custom Column",
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
  const [columnDefinitions, setColumnDefinitions] = useState<
    Array<ColumnDefinition<Employee, RDPs, {}>>
  >(initialColumnDefinitions);

  // Build a map for quick lookup once
  const definitionMap = useMemo(() => {
    const map = new Map<string, ColumnDefinition<Employee, RDPs, {}>>();
    initialColumnDefinitions.forEach(colDef => {
      const id = colDef.locator.id;
      map.set(id, colDef);
    });
    return map;
  }, []);

  const handleApplyColumnConfig = useCallback(
    (columns: Array<{ columnId: string; isVisible: boolean }>) => {
      // Transform column states back to column definitions
      const newColumnDefinitions: Array<ColumnDefinition<Employee, RDPs, {}>> =
        [];

      columns.forEach(({ columnId, isVisible }) => {
        if (isVisible) {
          const definition = definitionMap.get(columnId);
          if (definition) {
            newColumnDefinitions.push({ ...definition, isVisible: true });
          }
        }
      });

      setColumnDefinitions(newColumnDefinitions);
      setIsColumnConfigOpen(false);
    },
    [definitionMap],
  );

  const columnOptions = useMemo(() => {
    return initialColumnDefinitions.map((colDef) => {
      const id = colDef.locator.id;
      const name = colDef.columnName
        || colDef.locator.id;
      return { id, name };
    });
  }, []);

  // Memoized column configuration for the dialog
  const columnDialogConfig = useMemo(() => {
    // Build visibility map
    const visibility: Record<string, boolean> = {};

    columnDefinitions.forEach(colDef => {
      visibility[colDef.locator.id] = colDef.isVisible !== false;
    });

    // Mark any columns not in current definitions as hidden
    initialColumnDefinitions.forEach(colDef => {
      const id = colDef.locator.id;
      if (!(id in visibility)) {
        visibility[id] = false;
      }
    });

    // Build column order
    const columnOrder = columnDefinitions.filter(colDef =>
      colDef.isVisible !== false
    ).map(colDef => colDef.locator.id);

    return {
      currentVisibility: visibility,
      currentColumnOrder: columnOrder,
    };
  }, [columnDefinitions]);

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
        columnDefinitions={columnDefinitions}
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
        currentVisibility={columnDialogConfig.currentVisibility}
        currentColumnOrder={columnDialogConfig.currentColumnOrder}
        onApply={handleApplyColumnConfig}
      />
    </div>
  );
}
