import { Airplane, GroundVehicle, Vehicle } from "@osdk-local";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import React from "react";

export function InterfacesPage(): React.ReactElement {
  return (
    <div>
      <div className="page-header">
        <h1>Interfaces</h1>
        <span className="page-subtitle">
          Asset → Vehicle extends chain. Airplane implements Vehicle directly;
          GroundVehicle implements via explicit propertyMapping (manufacturer →
          brand, assetTag → fleetTag).
        </span>
      </div>

      <div className="panel">
        <h2>Vehicle interface registered in metadata</h2>
        <dl>
          <dt>API name</dt>
          <dd>{Vehicle.apiName}</dd>
          <dt>Type</dt>
          <dd>interface</dd>
          <dt>Note</dt>
          <dd>
            FauxFoundry does not yet serve interface-typed queries against
            implementing objects. We render the implementing types directly
            below.
          </dd>
        </dl>
      </div>

      <div className="panel">
        <h2>Airplane — implements Vehicle</h2>
        <ObjectTable objectType={Airplane} pageSize={25} />
      </div>

      <div className="panel">
        <h2>Ground Vehicle — implements Vehicle via explicit propertyMapping</h2>
        <ObjectTable objectType={GroundVehicle} pageSize={25} />
      </div>
    </div>
  );
}
