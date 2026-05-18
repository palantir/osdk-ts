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

import {
  ColumnConfigDialog,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";
import type {
  ColumnDefinition,
  ObjectTableProps,
} from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useMemo, useState } from "react";
import { fauxFoundry } from "../../../mocks/fauxFoundry.js";
import { Employee } from "../../../types/Employee.js";

type EmployeeTableProps = ObjectTableProps<typeof Employee>;

const meta: Meta<EmployeeTableProps> = {
  title: "Experimental/ObjectTable/Recipes",
  component: ObjectTable,
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithConfigureColumnsButton: Story = {
  parameters: {
    docs: {
      source: {
        code:
          `const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
const [columnDefinitions, setColumnDefinitions] = useState(initialColumnDefinitions);

const handleApplyColumnConfig = useCallback(
  (columns: Array<{ columnId: string; isVisible: boolean }>) => {
    const newColumnDefinitions = [];
    columns.forEach(({ columnId, isVisible }) => {
      if (isVisible) {
        const colDef = initialColumnDefinitions.find(def => def.locator.id === columnId);
        if (colDef) {
          newColumnDefinitions.push(colDef);
        }
      }
    });
    setColumnDefinitions(newColumnDefinitions);
    setIsColumnConfigOpen(false);
  },
  [],
);

return (
  <>
    <button onClick={() => setIsColumnConfigOpen(true)}>
      Configure Columns
    </button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
      enableColumnConfig={false}
    />
    <ColumnConfigDialog
      isOpen={isColumnConfigOpen}
      onClose={() => setIsColumnConfigOpen(false)}
      columnOptions={columnOptions}
      currentVisibility={currentVisibility}
      currentColumnOrder={currentColumnOrder}
      onApply={handleApplyColumnConfig}
    />
  </>
);`,
      },
    },
  },
  render: () => {
    const initialColumnDefinitions: Array<ColumnDefinition<Employee, {}, {}>> =
      [
        {
          locator: { type: "property", id: "fullName" },
          columnName: "Full Name",
        },
        {
          locator: { type: "property", id: "emailPrimaryWork" },
          columnName: "Email",
        },
        {
          locator: { type: "property", id: "jobTitle" },
          columnName: "Job Title",
        },
        {
          locator: { type: "property", id: "department" },
          columnName: "Department",
        },
      ];

    const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
    const [columnDefinitions, setColumnDefinitions] = useState<
      Array<ColumnDefinition<Employee, {}, {}>>
    >(initialColumnDefinitions);

    const columnOptions = useMemo(
      () =>
        initialColumnDefinitions.map((colDef) => ({
          id: colDef.locator.id,
          name: colDef.columnName || colDef.locator.id,
        })),
      [],
    );

    const currentVisibility = useMemo(() => {
      const visibility: Record<string, boolean> = {};
      initialColumnDefinitions.forEach(colDef => {
        visibility[colDef.locator.id] = columnDefinitions.some(
          def => def.locator.id === colDef.locator.id,
        );
      });
      return visibility;
    }, [columnDefinitions]);

    const currentColumnOrder = useMemo(
      () => columnDefinitions.map(colDef => colDef.locator.id),
      [columnDefinitions],
    );

    const handleApplyColumnConfig = useCallback(
      (columns: Array<{ columnId: string; isVisible: boolean }>) => {
        const newColumnDefinitions: Array<ColumnDefinition<Employee, {}, {}>> =
          [];
        columns.forEach(({ columnId, isVisible }) => {
          if (isVisible) {
            const colDef = initialColumnDefinitions.find(def =>
              def.locator.id === columnId
            );
            if (colDef) {
              newColumnDefinitions.push(colDef);
            }
          }
        });
        setColumnDefinitions(newColumnDefinitions);
        setIsColumnConfigOpen(false);
      },
      [],
    );

    return (
      <div
        style={{ height: "600px", display: "flex", flexDirection: "column" }}
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
        <ObjectTable
          objectType={Employee}
          columnDefinitions={columnDefinitions}
          enableColumnConfig={false}
        />
        <ColumnConfigDialog
          isOpen={isColumnConfigOpen}
          onClose={() => setIsColumnConfigOpen(false)}
          columnOptions={columnOptions}
          currentVisibility={currentVisibility}
          currentColumnOrder={currentColumnOrder}
          onApply={handleApplyColumnConfig}
        />
      </div>
    );
  },
};
