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

import type { ObjectSet, WhereClause } from "@osdk/api";
import type { ObjectTableProps } from "@osdk/react-components/experimental/object-table";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import React from "react";

import { Assignment } from "../../generatedNoCheck2/index.js";
import {
  type OrderByEntry,
  useObjectTableState,
} from "../../hooks/useObjectTableState.js";
import type { AssignmentInstance } from "../../types/table.js";
import {
  type AssignmentColumnRdps,
  createAssignmentColumnDefinitions,
} from "./AssignmentColumnDefinitions.js";

import styles from "./AssignmentsTable.module.css";

const DEFAULT_ORDER_BY: Array<OrderByEntry<Assignment, AssignmentColumnRdps>> =
  [{ property: "assignmentId", direction: "asc" }];

// Static column definitions — no runtime inputs, so hoisted out of the component.
const BASE_COLUMN_DEFS = createAssignmentColumnDefinitions();

interface AssignmentsTableProps {
  objectSet: ObjectSet<Assignment>;
  filter?: WhereClause<Assignment>;
  onRowClick?: (assignment: AssignmentInstance) => void;
  selectionMode?: ObjectTableProps<Assignment>["selectionMode"];
  selectedRows?: ObjectTableProps<Assignment>["selectedRows"];
  onRowSelectionChanged?: ObjectTableProps<
    Assignment,
    AssignmentColumnRdps
  >["onRowSelectionChanged"];
}

export const AssignmentsTable = React.memo<AssignmentsTableProps>(
  function AssignmentsTableFn({
    objectSet,
    filter,
    onRowClick,
    selectionMode,
    selectedRows,
    onRowSelectionChanged,
  }) {
    const {
      orderBy,
      effectiveColumnDefs,
      handleOrderByChanged,
      handleColumnVisibilityChanged,
      handleColumnResize,
      handleColumnsPinnedChanged,
    } = useObjectTableState<Assignment, AssignmentColumnRdps>(
      BASE_COLUMN_DEFS,
      DEFAULT_ORDER_BY,
    );

    return (
      <ObjectTable<Assignment, AssignmentColumnRdps>
        objectType={Assignment}
        objectSet={objectSet}
        filter={filter}
        columnDefinitions={effectiveColumnDefs}
        className={styles.tableRoot}
        editMode="manual"
        orderBy={orderBy}
        onOrderByChanged={handleOrderByChanged}
        onColumnVisibilityChanged={handleColumnVisibilityChanged}
        onColumnResize={handleColumnResize}
        onColumnsPinnedChanged={handleColumnsPinnedChanged}
        onRowClick={onRowClick}
        selectionMode={selectionMode}
        selectedRows={selectedRows}
        onRowSelectionChanged={onRowSelectionChanged}
      />
    );
  },
);
