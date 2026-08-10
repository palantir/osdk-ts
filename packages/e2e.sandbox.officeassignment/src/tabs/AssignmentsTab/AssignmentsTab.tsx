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

import React from "react";

import { AssignmentDrawer } from "../../components/AssignmentDrawer/AssignmentDrawer.js";
import { ErrorBanner } from "../../components/common/index.js";
import { LatestStatusFilter } from "../../components/LatestStatusFilter/LatestStatusFilter.js";
import { MetricsHeader } from "../../components/MetricsHeader/MetricsHeader.js";
import { useAssignmentFilters } from "../../hooks/useAssignmentFilters.js";
import { useAssignmentMetrics } from "../../hooks/useAssignmentMetrics.js";
import { AssignmentsFilters } from "../../tables/AssignmentsTable/AssignmentsFilters.js";
import { AssignmentsTable } from "../../tables/AssignmentsTable/AssignmentsTable.js";
import type { AssignmentInstance } from "../../types/table.js";

import styles from "./AssignmentsTab.module.css";

export function AssignmentsTab(): React.JSX.Element {
  const {
    narrowedObjectSet,
    latestSelections,
    setLatestSelections,
    composeAcrossTypes,
    setComposeAcrossTypes,
    filterClause,
    setFilterClause,
    filterStates,
    orderedFilterDefs,
    handleFilterStateChanged,
    handleFilterVisibilityChange,
    resetKey,
    handleReset,
    tableFilter,
    isMatching,
    matchError,
    hasActiveFilters,
  } = useAssignmentFilters();

  const metrics = useAssignmentMetrics(tableFilter);

  const [selectedAssignmentId, setSelectedAssignmentId] = React.useState<
    string | undefined
  >(undefined);

  const handleRowClick = React.useCallback((assignment: AssignmentInstance) => {
    setSelectedAssignmentId(assignment.$primaryKey);
  }, []);

  const closeDrawer = React.useCallback(
    () => setSelectedAssignmentId(undefined),
    [],
  );

  return (
    <div className={styles.content}>
      <aside className={styles.sidebar}>
        {/* Remount on reset so FilterList internal state clears. */}
        <AssignmentsFilters
          key={resetKey}
          objectSet={narrowedObjectSet}
          filterDefinitions={orderedFilterDefs}
          filterClause={filterClause}
          onFilterClauseChanged={setFilterClause}
          onFilterStateChanged={handleFilterStateChanged}
          onFilterVisibilityChange={handleFilterVisibilityChange}
          onReset={handleReset}
          initialFilterStates={filterStates}
        />
      </aside>
      <div className={styles.main}>
        <LatestStatusFilter
          selections={latestSelections}
          onChange={setLatestSelections}
          composeAcrossTypes={composeAcrossTypes}
          onComposeChange={setComposeAcrossTypes}
        />
        <ErrorBanner
          message={matchError?.message}
          context="Latest-status filter"
        />
        <MetricsHeader
          title="Assignments"
          shownCount={metrics.shown ?? 0}
          totalCount={metrics.total}
          isFiltered={hasActiveFilters}
        />
        <div className={styles.tableWrap}>
          <AssignmentsTable
            objectSet={narrowedObjectSet}
            filter={filterClause}
            selectionMode="none"
            onRowClick={handleRowClick}
          />
        </div>
      </div>
      <AssignmentDrawer
        assignmentId={selectedAssignmentId}
        onClose={closeDrawer}
      />
      {isMatching ? <span className={styles.srOnly}>Filtering…</span> : null}
    </div>
  );
}
