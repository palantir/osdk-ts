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
import { useStatusUpdateFilters } from "../../hooks/useStatusUpdateFilters.js";
import { StatusUpdatesFilters } from "../../tables/StatusUpdatesTable/StatusUpdatesFilters.js";
import { StatusUpdatesTable } from "../../tables/StatusUpdatesTable/StatusUpdatesTable.js";
import styles from "./StatusUpdatesTab.module.css";

/**
 * A flat table of every StatusUpdate, with a two-hop pivot to the employee name, facet filters, and
 * a per-row exclusion toggle. Uses the same FilterList + ObjectTable config as the Assignments tab.
 */
export function StatusUpdatesTab(): React.JSX.Element {
  const {
    objectSet,
    filterClause,
    setFilterClause,
    initialFilterStates,
    orderedFilterDefs,
    handleFilterStateChanged,
    handleFilterVisibilityChange,
    resetKey,
    handleReset,
  } = useStatusUpdateFilters();

  return (
    <div className={styles.content}>
      <aside className={styles.sidebar}>
        <StatusUpdatesFilters
          key={resetKey}
          objectSet={objectSet}
          filterDefinitions={orderedFilterDefs}
          filterClause={filterClause}
          onFilterClauseChanged={setFilterClause}
          onFilterStateChanged={handleFilterStateChanged}
          onFilterVisibilityChange={handleFilterVisibilityChange}
          onReset={handleReset}
          initialFilterStates={initialFilterStates}
        />
      </aside>
      <div className={styles.main}>
        <div className={styles.tableWrap}>
          <StatusUpdatesTable objectSet={objectSet} filter={filterClause} />
        </div>
      </div>
    </div>
  );
}
