import type { FeatureCollection, LineString } from "geojson";
import { Layer, Source } from "react-map-gl/maplibre";

export interface ConnectionProperties {
  type:
    | "manager"
    | "skip-level"
    | "peer"
    | "colleague"
    | "report"
    | "cross-office";
  sourceId: string;
  targetId: string;
  label?: string;
}

export type ConnectionFeature = GeoJSON.Feature<
  LineString,
  ConnectionProperties
>;
export type ConnectionCollection = FeatureCollection<
  LineString,
  ConnectionProperties
>;

const connectionColors: Record<ConnectionProperties["type"], string> = {
  "manager": "#FFD700",
  "skip-level": "#9333EA",
  "peer": "#10B981",
  "colleague": "#10B981",
  "report": "#14B8A6",
  "cross-office": "#F97316",
};

const connectionWidths: Record<ConnectionProperties["type"], number> = {
  "manager": 3,
  "skip-level": 2,
  "peer": 2,
  "colleague": 1.5,
  "report": 2.5,
  "cross-office": 2.5,
};

const connectionDashArrays: Record<ConnectionProperties["type"], number[]> = {
  "manager": [],
  "skip-level": [4, 4],
  "peer": [2, 2],
  "colleague": [2, 2],
  "report": [],
  "cross-office": [6, 3],
};

interface ConnectionLayerProps {
  connections: ConnectionCollection;
  visible?: boolean;
}

const connectionTypes: ConnectionProperties["type"][] = [
  "manager",
  "skip-level",
  "peer",
  "colleague",
  "report",
  "cross-office",
];

export function ConnectionLayer(
  { connections, visible = true }: ConnectionLayerProps,
) {
  if (!visible || connections.features.length === 0) {
    return null;
  }

  const featuresByType = connectionTypes.reduce(
    (acc, type) => {
      acc[type] = {
        type: "FeatureCollection" as const,
        features: connections.features.filter((f) =>
          f.properties.type === type
        ),
      };
      return acc;
    },
    {} as Record<ConnectionProperties["type"], ConnectionCollection>,
  );

  return (
    <>
      {connectionTypes.map((type) => {
        const typeFeatures = featuresByType[type];
        if (typeFeatures.features.length === 0) return null;

        const dashArray = connectionDashArrays[type];
        const hasDash = dashArray.length > 0;

        return (
          <Source
            key={type}
            id={`connections-${type}`}
            type="geojson"
            data={typeFeatures}
          >
            <Layer
              id={`connection-lines-${type}`}
              type="line"
              paint={{
                "line-color": connectionColors[type],
                "line-width": connectionWidths[type],
                "line-opacity": 0.8,
                ...(hasDash ? { "line-dasharray": dashArray } : {}),
              }}
              layout={{
                "line-cap": "round",
                "line-join": "round",
              }}
            />
          </Source>
        );
      })}
    </>
  );
}

export function createConnection(
  sourceCoords: [number, number],
  targetCoords: [number, number],
  type: ConnectionProperties["type"],
  sourceId: string,
  targetId: string,
  label?: string,
): ConnectionFeature {
  return {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [sourceCoords, targetCoords],
    },
    properties: {
      type,
      sourceId,
      targetId,
      label,
    },
  };
}

export function createConnectionCollection(
  features: ConnectionFeature[],
): ConnectionCollection {
  return {
    type: "FeatureCollection",
    features,
  };
}
