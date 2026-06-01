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
