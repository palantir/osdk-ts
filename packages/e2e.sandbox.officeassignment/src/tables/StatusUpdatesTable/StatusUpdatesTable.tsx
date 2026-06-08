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

// Static column definitions — no runtime inputs, so hoisted out of the component.
const BASE_COLUMN_DEFS = createStatusUpdateColumnDefinitions();

interface StatusUpdatesTableProps {
  objectSet: ObjectSet<StatusUpdate>;
  filter?: WhereClause<StatusUpdate>;
}

export const StatusUpdatesTable = React.memo<StatusUpdatesTableProps>(
  function StatusUpdatesTableFn({ objectSet, filter }) {
    const {
      orderBy,
      effectiveColumnDefs,
      handleOrderByChanged,
      handleColumnVisibilityChanged,
      handleColumnResize,
      handleColumnsPinnedChanged,
    } = useObjectTableState<StatusUpdate, StatusUpdateColumnRdps>(
      BASE_COLUMN_DEFS,
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
