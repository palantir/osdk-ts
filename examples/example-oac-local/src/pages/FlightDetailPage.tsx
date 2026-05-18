import { Airplane, Flight, modifyObjectFlight } from "@osdk-local";
import type { Osdk } from "@osdk/api";
import { useLinks, useOsdkObject } from "@osdk/react";
import { ActionForm } from "@osdk/react-components/experimental/action-form";
import React from "react";
import { Link, useParams } from "react-router-dom";

export function FlightDetailPage(): React.ReactElement {
  const { flightNumber } = useParams<{ flightNumber: string }>();
  const { object: flight, isLoading, error } = useOsdkObject(
    Flight,
    flightNumber ?? "",
    flightNumber != null,
  );

  const { links: airplanes } = useLinks(flight, "airplane");
  const airplane: Osdk.Instance<typeof Airplane> | undefined = airplanes?.[0];

  return (
    <div>
      <div className="page-header">
        <h1>
          <Link to="/">Flights</Link> / {flightNumber}
        </h1>
        <span className="page-subtitle">
          useOsdkObject + useLinks + ActionForm&lt;modifyObjectFlight&gt;.
        </span>
      </div>

      {error && (
        <div className="panel">
          <h2>Error</h2>
          <pre>{error.message}</pre>
        </div>
      )}

      <div className="panel">
        <h2>Flight</h2>
        {isLoading && !flight && <div>Loading…</div>}
        {flight && (
          <dl>
            <dt>Flight number</dt>
            <dd>{flight.flightNumber}</dd>
            <dt>Scheduled departure</dt>
            <dd>{String(flight.scheduledDeparture)}</dd>
            <dt>Scheduled arrival</dt>
            <dd>{String(flight.scheduledArrival)}</dd>
            <dt>Actual arrival</dt>
            <dd>{flight.actualArrival ? String(flight.actualArrival) : "—"}</dd>
            <dt>Departure airport</dt>
            <dd>{flight.departureCode}</dd>
            <dt>Arrival airport</dt>
            <dd>{flight.arrivalCode}</dd>
          </dl>
        )}
      </div>

      <div className="panel">
        <h2>Airplane (1:M link)</h2>
        {airplane && (
          <dl>
            <dt>Tail number</dt>
            <dd>{airplane.tailNumber}</dd>
            <dt>Model</dt>
            <dd>{airplane.model}</dd>
            <dt>Manufacturer</dt>
            <dd>{airplane.manufacturer}</dd>
          </dl>
        )}
      </div>

      <div className="panel">
        <h2>Record landing</h2>
        {flight && (
          <ActionForm
            actionDefinition={modifyObjectFlight}
            formTitle="Modify Flight"
          />
        )}
      </div>
    </div>
  );
}
