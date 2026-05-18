import { chargeBaggageFee, createObjectFlight } from "@osdk-local";
import { ActionForm } from "@osdk/react-components/experimental/action-form";
import React from "react";

export function ScheduleFlightPage(): React.ReactElement {
  return (
    <div>
      <div className="page-header">
        <h1>Schedule</h1>
        <span className="page-subtitle">
          Action forms generated from the OaC action definitions. The
          chargeBaggageFee action exercises text-with-regex validation, sections
          (box + minimal), and parameter ordering.
        </span>
      </div>

      <div className="panel">
        <h2>Schedule flight (createObjectFlight)</h2>
        <ActionForm
          actionDefinition={createObjectFlight}
          formTitle="Schedule flight"
        />
      </div>

      <div className="panel">
        <h2>Charge baggage fee (chargeBaggageFee)</h2>
        <ActionForm
          actionDefinition={chargeBaggageFee}
          formTitle="Charge baggage fee"
        />
      </div>
    </div>
  );
}
