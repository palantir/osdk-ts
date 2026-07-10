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

import type { ColumnDefinition } from "@osdk/react-components/experimental/object-table";

import type { Assignment } from "../../generatedNoCheck2/index.js";
import type { AssignmentInstance } from "../../types/table.js";
import { formatDate } from "../../utils/formatDate.js";

/** Display-only derived properties shown as columns (distinct from the latest-status filter RDPs). */
export type AssignmentColumnRdps = {
  readonly employeeName: "string";
  readonly managerName: "string";
  readonly officeName: "string";
  readonly statusCount: "integer";
};

/**
 * Builds the Assignment table column definitions. Every column carries `columnName`, `renderHeader`,
 * `isVisible`, optional `pinned`, and `renderCell` where formatting is needed.
 */
export function createAssignmentColumnDefinitions(): Array<
  ColumnDefinition<Assignment, AssignmentColumnRdps>
> {
  return [
    // ── Identity (pinned left) ───────────────────────────────────────────
    {
      locator: { type: "property", id: "assignmentId" },
      columnName: "Assignment",
      renderHeader: () => "Assignment",
      pinned: "left",
      isVisible: true,
    },
    {
      locator: {
        type: "rdp",
        id: "employeeName",
        creator: (base) => base.pivotTo("employee").selectProperty("fullName"),
      },
      columnName: "Employee",
      renderHeader: () => "Employee",
      pinned: "left",
      isVisible: true,
    },

    // ── Role ─────────────────────────────────────────────────────────────
    {
      locator: { type: "property", id: "title" },
      columnName: "Title",
      renderHeader: () => "Title",
      isVisible: true,
    },
    {
      locator: { type: "property", id: "function" },
      columnName: "Function",
      renderHeader: () => "Function",
      isVisible: true,
    },
    {
      locator: { type: "property", id: "assignmentType" },
      columnName: "Type",
      renderHeader: () => "Type",
      isVisible: true,
    },

    // ── Location & ownership (RDP pivots) ────────────────────────────────
    {
      locator: {
        type: "rdp",
        id: "officeName",
        creator: (base) => base.pivotTo("office").selectProperty("name"),
      },
      columnName: "Office",
      renderHeader: () => "Office",
      isVisible: true,
    },
    {
      locator: {
        type: "rdp",
        id: "managerName",
        creator: (base) => base.pivotTo("manager").selectProperty("fullName"),
      },
      columnName: "Manager",
      renderHeader: () => "Manager",
      isVisible: true,
    },

    // ── Status timeline summary (RDP count) ──────────────────────────────
    {
      locator: {
        type: "rdp",
        id: "statusCount",
        creator: (base) => base.pivotTo("statusUpdate").aggregate("$count"),
      },
      columnName: "Status updates",
      renderHeader: () => "Status updates",
      isVisible: true,
    },

    // ── Tenure ───────────────────────────────────────────────────────────
    {
      locator: { type: "property", id: "startDate" },
      columnName: "Start date",
      renderHeader: () => "Start date",
      isVisible: true,
      renderCell: (assignment: AssignmentInstance) =>
        formatDate(assignment.startDate) || null,
    },
    {
      locator: { type: "property", id: "tenureDays" },
      columnName: "Tenure (days)",
      renderHeader: () => "Tenure (days)",
      isVisible: true,
    },

    // ── Hidden by default (available via column config) ──────────────────
    {
      locator: { type: "property", id: "employeeId" },
      columnName: "Employee ID",
      renderHeader: () => "Employee ID",
      isVisible: false,
    },
    {
      locator: { type: "property", id: "officeId" },
      columnName: "Office ID",
      renderHeader: () => "Office ID",
      isVisible: false,
    },
    {
      locator: { type: "property", id: "floorId" },
      columnName: "Floor ID",
      renderHeader: () => "Floor ID",
      isVisible: false,
    },
    {
      locator: { type: "property", id: "managerId" },
      columnName: "Manager ID",
      renderHeader: () => "Manager ID",
      isVisible: false,
    },
  ];
}
