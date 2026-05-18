import { Airline } from "@osdk-local";
import type { WhereClause } from "@osdk/api";
import { FilterList } from "@osdk/react-components/experimental/filter-list";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import React, { useCallback, useState } from "react";

const EMPTY_FILTER: WhereClause<typeof Airline> = {};

export function AirlinesPage(): React.ReactElement {
  const [filter, setFilter] = useState<WhereClause<typeof Airline>>(
    EMPTY_FILTER,
  );

  const onFilterClauseChanged = useCallback(
    (newClause: WhereClause<typeof Airline>) => {
      setFilter(newClause);
    },
    [],
  );

  return (
    <div>
      <div className="page-header">
        <h1>Airlines</h1>
        <span className="page-subtitle">
          M:M link: Airline ↔ Airport (`airports` / `airlines`). FilterList drives
          the ObjectTable&apos;s where-clause.
        </span>
      </div>

      <div className="airlines-layout">
        <aside className="panel airlines-filters">
          <FilterList
            objectType={Airline}
            onFilterClauseChanged={onFilterClauseChanged}
            title="Filter airlines"
          />
        </aside>
        <div className="panel airlines-table">
          <ObjectTable objectType={Airline} pageSize={25} filter={filter} />
        </div>
      </div>
    </div>
  );
}
