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

import type { Osdk } from "@osdk/api";
import type { ColumnDefinition } from "@osdk/react-components/experimental/object-table";
import React from "react";
import { ToggleExclusionButton } from "../../components/actions/ToggleExclusionButton.js";
import type { StatusUpdate } from "../../generatedNoCheck2/index.js";
import { formatTimestamp } from "../../utils/formatDate.js";
import styles from "./StatusUpdatesTable.module.css";

/** Display-only derived property: the employee name two hops away (assignment -> employee). */
export type StatusUpdateColumnRdps = {
  readonly employeeName: "string";
};

type StatusUpdateInstance = Osdk.Instance<
  StatusUpdate,
  "$allBaseProperties",
  never,
  StatusUpdateColumnRdps
>;

/**
 * Builds the StatusUpdate table column definitions: every column carries
 * `columnName`, `renderHeader`, `isVisible`, optional `pinned`, and `renderCell` where needed.
 */
export function createStatusUpdateColumnDefinitions(): Array<
  ColumnDefinition<StatusUpdate, StatusUpdateColumnRdps>
> {
  return [
    {
      locator: {
        type: "rdp",
        id: "employeeName",
        creator: (base) =>
          base.pivotTo("assignment").pivotTo("employee").selectProperty(
            "fullName",
          ),
      },
      columnName: "Employee",
      renderHeader: () => "Employee",
      pinned: "left",
      isVisible: true,
    },
    {
      locator: { type: "property", id: "assignmentId" },
      columnName: "Assignment",
      renderHeader: () => "Assignment",
      pinned: "left",
      isVisible: true,
    },
    {
      locator: { type: "property", id: "type" },
      columnName: "Type",
      renderHeader: () => "Type",
      isVisible: true,
    },
    {
      locator: { type: "property", id: "value" },
      columnName: "Value",
      renderHeader: () => "Value",
      isVisible: true,
      renderCell: (row: StatusUpdateInstance) =>
        row.isExcluded === true
          ? <s className={styles.excludedValue}>{row.value}</s>
          : <span>{row.value}</span>,
    },
    {
      locator: { type: "property", id: "timestamp" },
      columnName: "Recorded",
      renderHeader: () => "Recorded",
      isVisible: true,
      renderCell: (row: StatusUpdateInstance) => (
        <span>{formatTimestamp(row.timestamp)}</span>
      ),
    },
    {
      locator: { type: "property", id: "recordedBy" },
      columnName: "By",
      renderHeader: () => "By",
      isVisible: true,
    },
    {
      locator: { type: "property", id: "isExcluded" },
      columnName: "Excluded",
      renderHeader: () => "Excluded",
      isVisible: false,
    },
    {
      locator: { type: "custom", id: "exclusionAction" },
      columnName: "Exclusion",
      renderHeader: () => "Exclusion",
      isVisible: true,
      renderCell: (row: StatusUpdateInstance) => (
        <ToggleExclusionButton statusUpdate={row} />
      ),
    },
  ];
}
