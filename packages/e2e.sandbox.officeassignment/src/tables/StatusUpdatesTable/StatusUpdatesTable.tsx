import type { ObjectSet, WhereClause } from "@osdk/api";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import React from "react";
import { StatusUpdate } from "../../generatedNoCheck2/index.js";
import {
  type OrderByEntry,
  useObjectTableState,
} from "../../hooks/useObjectTableState.js";
import {
  createStatusUpdateColumnDefinitions,
  type StatusUpdateColumnRdps,
} from "./StatusUpdateColumnDefinitions.js";
import styles from "./StatusUpdatesTable.module.css";

const DEFAULT_ORDER_BY: Array<
  OrderByEntry<StatusUpdate, StatusUpdateColumnRdps>
> = [
  { property: "timestampEpochMs", direction: "desc" },
];

interface StatusUpdatesTableProps {
  objectSet: ObjectSet<StatusUpdate>;
  filter?: WhereClause<StatusUpdate>;
}

export const StatusUpdatesTable = React.memo<StatusUpdatesTableProps>(
  function StatusUpdatesTableFn({ objectSet, filter }) {
    const baseColumnDefs = React.useMemo(
      () => createStatusUpdateColumnDefinitions(),
      [],
    );

    const {
      orderBy,
      effectiveColumnDefs,
      handleOrderByChanged,
      handleColumnVisibilityChanged,
      handleColumnResize,
      handleColumnsPinnedChanged,
    } = useObjectTableState<StatusUpdate, StatusUpdateColumnRdps>(
      baseColumnDefs,
      DEFAULT_ORDER_BY,
    );

    return (
      <ObjectTable<StatusUpdate, StatusUpdateColumnRdps>
        objectType={StatusUpdate}
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
        selectionMode="none"
      />
    );
  },
);
