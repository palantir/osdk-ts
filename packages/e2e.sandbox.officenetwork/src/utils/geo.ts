import type { GeoJsonProperties, Geometry, Point } from "geojson";

export function isPoint(
  value: Geometry | GeoJsonProperties | null | undefined,
): value is Point {
  return (
    typeof value === "object"
    && value != null
    && "type" in value
    && value.type === "Point"
    && "coordinates" in value
    && Array.isArray(value.coordinates)
    && value.coordinates.length >= 2
    && typeof value.coordinates[0] === "number"
    && typeof value.coordinates[1] === "number"
  );
}

export function getPointCoords(
  value: Geometry | GeoJsonProperties | null | undefined,
): [number, number] | null {
  if (!isPoint(value)) return null;
  return [value.coordinates[0], value.coordinates[1]];
}
