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
  [
    { property: "assignmentId", direction: "asc" },
  ];

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
    const baseColumnDefs = React.useMemo(
      () => createAssignmentColumnDefinitions(),
      [],
    );

    const {
      orderBy,
      effectiveColumnDefs,
      handleOrderByChanged,
      handleColumnVisibilityChanged,
      handleColumnResize,
      handleColumnsPinnedChanged,
    } = useObjectTableState<Assignment, AssignmentColumnRdps>(
      baseColumnDefs,
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
