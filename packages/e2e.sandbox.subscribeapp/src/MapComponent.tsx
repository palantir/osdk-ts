import L from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { isOk } from "@osdk/api";
import { __EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe } from "@osdk/api/unstable";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";
import { foundryClient } from "./client.js";
import EntityPopup from "./EntityPopup.js";
import { $Objects } from "./generatedNoCheck2/index.js";

const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
});

L.Marker.prototype.options.icon = defaultIcon;

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface EntityInformation {
  id: string;
  routeId: string;
  nextStopId: string;
}

interface EntityInformationMap {
  [key: string]: EntityInformation;
}
interface ObjectCoordinatesMap {
  [key: string]: Coordinates;
}

const MapComponent: React.FC = () => {
  const center: Coordinates = { lat: 40.7128, lng: -74.0060 };

  const [entityInfo, setEntityInfo] = React.useState<EntityInformationMap>({});

  const [objectCoordinates, setObjectCoordinates] = React.useState<
    ObjectCoordinatesMap
  >({});

  const initializeEntity = (info: EntityInformation) => {
    setEntityInfo((prev) => ({
      ...prev,
      [info.id]: info,
    }));
  };

  const deleteEntity = (info: EntityInformation) => {
    setEntityInfo((prev) => {
      const newEntityInfo = { ...prev };
      delete newEntityInfo[info.id];
      return newEntityInfo;
    });
  };

  const updateCoordinates = (primaryKey: string, coordinates: Coordinates) => {
    if (!(primaryKey in entityInfo)) {
      return;
    }
    setObjectCoordinates((prev) => ({
      ...prev,
      [primaryKey]: coordinates,
    }));
  };

  const fetchInitialPoints = async () => {
    const page = await foundryClient($Objects.MtaBus).fetchPageWithErrors({
      $pageSize: 50,
    });
    if (isOk(page)) {
      const objects = page.value.data;

      for (const object of objects) {
        const primaryKey = object.$primaryKey;
        initializeEntity({
          id: primaryKey,
          routeId: object.routeId
            ?? "",
          nextStopId: object.nextStopId ?? "",
        });
      }
      for (const object of objects) {
        const primaryKey = object.$primaryKey;
        object.positionId?.getLatestValue().then(
          (latestPosition) => {
            console.log("Latest position is", latestPosition);
            if (latestPosition != null) {
              const newCoordinates = {
                lat: latestPosition?.value.coordinates[1]!,
                lng: latestPosition?.value.coordinates[0]!,
              };
              updateCoordinates(primaryKey, newCoordinates);
            }
          },
        );
      }
    }
  };

  React.useEffect(() => {
    fetchInitialPoints();
  }, []);

  foundryClient($Objects.MtaBus)[__EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe](
    ["nextStopId", "positionId", "routeId", "vehicleId"],
    {
      onChange: (object) => {
        const primaryKey = object.object.$primaryKey;

        if (!(primaryKey in entityInfo)) {
          return;
        }

        console.log(
          "Received update for",
          primaryKey,
          ". Length of map is ",
          Object.keys(entityInfo).length,
        );

        if (object.state === "REMOVED") {
          deleteEntity(entityInfo[primaryKey]);
        }

        if (object.object.positionId != null) {
          const newCoordinates = {
            lat: object.object.positionId?.lastFetchedValue?.value
              .coordinates[1]!,
            lng: object.object.positionId?.lastFetchedValue?.value
              .coordinates[0]!,
          };

          updateCoordinates(primaryKey, newCoordinates);
        }

        initializeEntity({
          id: primaryKey,
          routeId: object.object.routeId ?? entityInfo[primaryKey].routeId,
          nextStopId: object.object.nextStopId
            ?? entityInfo[primaryKey].nextStopId,
        });
      },
    },
  );

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {Object.entries(objectCoordinates).map(([key, position]) => (
        <Marker key={key} position={[position.lat, position.lng]}>
          <Popup>
            <EntityPopup
              id={entityInfo[key].id}
              routeId={entityInfo[key].routeId}
              nextStopId={entityInfo[key].nextStopId}
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
