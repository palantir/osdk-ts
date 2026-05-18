import { Flight } from "@osdk-local";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type { Osdk } from "@osdk/api";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function FlightsPage(): React.ReactElement {
  const navigate = useNavigate();
  const onRowClick = useCallback(
    (row: Osdk.Instance<typeof Flight>) => {
      navigate(`/flights/${encodeURIComponent(row.flightNumber)}`);
    },
    [navigate],
  );

  return (
    <div>
      <div className="page-header">
        <h1>Flights</h1>
        <span className="page-subtitle">
          ObjectTable&lt;Flight&gt; — read path with the dev-mode FauxFoundry.
          Click a row to drill into a single flight.
        </span>
      </div>
      <div className="panel">
        <ObjectTable
          objectType={Flight}
          pageSize={25}
          onRowClick={onRowClick}
        />
      </div>
    </div>
  );
}
