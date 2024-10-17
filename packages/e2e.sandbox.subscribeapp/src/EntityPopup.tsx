import React from "react";

interface EntityPopupProps {
  id: string;
  routeId: string;
  nextStopId: string;
}

const EntityPopup: React.FC<EntityPopupProps> = (
  { id, routeId, nextStopId },
) => {
  return (
    <div>
      <h1>{id}</h1>
      <p>Route ID: {routeId}</p>
      <p>Next Stop ID: {nextStopId}</p>
    </div>
  );
};

export default EntityPopup;
