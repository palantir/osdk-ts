/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { Osdk } from "@osdk/api";
import { ObjectTable } from "@osdk/react-components/experimental";
import type { ColumnDefinition } from "@osdk/react-components/experimental";
import { Employee } from "../../generatedNoCheck/index.js";

export function CustomCellRenderingExample() {
  const columnDefinitions: Array<ColumnDefinition<Employee>> = [
    {
      locator: { type: "property", id: "fullName" },
      pinned: "left",
      renderHeader: () => (
        <div style={{ color: "#1e40af", fontWeight: 600 }}>
          👤 Employee Name
        </div>
      ),
    },
    {
      locator: { type: "property", id: "startDate" },
      width: 200,
      renderHeader: () => "📅 Start Date",
      renderCell: (object: Osdk.Instance<Employee>) => {
        if (!object.startDate) {
          return <span style={{ color: "#9ca3af", fontStyle: "italic" }}>Not available</span>;
        }
        const date = new Date(object.startDate);
        return (
          <span style={{ color: "#059669" }}>
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        );
      },
    },
    {
      locator: { type: "property", id: "class" },
      renderHeader: () => "⭐ Class",
      renderCell: (object: Osdk.Instance<Employee>) => {
        const employeeClass = object.class;
        const colors = new Map<string, string>([
          ["1", "#dc2626"],
          ["2", "#ea580c"],
          ["3", "#ca8a04"],
          ["4", "#65a30d"],
          ["5", "#059669"],
        ]);
        const color = employeeClass ? colors.get(String(employeeClass)) ?? "#6b7280" : "#6b7280";
        return (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "2px 8px",
              borderRadius: "4px",
              backgroundColor: `${color}20`,
              color: color,
              fontWeight: 500,
              fontSize: "12px",
            }}
          >
            Class {employeeClass || "N/A"}
          </span>
        );
      },
    },
  ];

  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
    />
  );
}
