/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Geometry, Position } from "geojson";

/** Preserve primary key types when converting them to renderer IDs. */
export function objectMapFeatureId(primaryKey: string | number): string {
  return JSON.stringify([typeof primaryKey, primaryKey]);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}

function isPosition(value: unknown): value is Position {
  return (
    Array.isArray(value) &&
    value.length >= 2 &&
    value.every(
      (coordinate: unknown) =>
        typeof coordinate === "number" && Number.isFinite(coordinate),
    ) &&
    Math.abs(value[0] as number) <= 180 &&
    Math.abs(value[1] as number) <= 90
  );
}

function isPositions(value: unknown, minimum: number): value is Position[] {
  return (
    Array.isArray(value) && value.length >= minimum && value.every(isPosition)
  );
}

function isRing(value: unknown): value is Position[] {
  if (!isPositions(value, 4)) return false;
  const first = value[0];
  const last = value[value.length - 1];
  return (
    first.length === last.length &&
    first.every((coordinate, index) => coordinate === last[index])
  );
}

function isPolygon(value: unknown): value is Position[][] {
  return Array.isArray(value) && value.length > 0 && value.every(isRing);
}

/** Normalize the GeoJSON forms returned by geopoint and geoshape properties. */
export function objectMapGeometry(
  value: unknown,
  depth: number = 0,
): Geometry | undefined {
  if (!isRecord(value) || depth > 32) return undefined;
  const coordinates = value.coordinates;
  switch (value.type) {
    case "Point":
      return isPosition(coordinates)
        ? { type: "Point", coordinates }
        : undefined;
    case "MultiPoint":
      return isPositions(coordinates, 1)
        ? { type: "MultiPoint", coordinates }
        : undefined;
    case "LineString":
      return isPositions(coordinates, 2)
        ? { type: "LineString", coordinates }
        : undefined;
    case "MultiLineString":
      return Array.isArray(coordinates) &&
        coordinates.length > 0 &&
        coordinates.every((line: unknown): line is Position[] =>
          isPositions(line, 2),
        )
        ? { type: "MultiLineString", coordinates }
        : undefined;
    case "Polygon":
      return isPolygon(coordinates)
        ? { type: "Polygon", coordinates }
        : undefined;
    case "MultiPolygon":
      return Array.isArray(coordinates) &&
        coordinates.length > 0 &&
        coordinates.every(isPolygon)
        ? { type: "MultiPolygon", coordinates }
        : undefined;
    case "Feature":
      return objectMapGeometry(value.geometry, depth + 1);
    case "FeatureCollection":
    case "GeometryCollection": {
      const members =
        value.type === "FeatureCollection" ? value.features : value.geometries;
      if (!Array.isArray(members) || members.length === 0) return undefined;
      const geometries: Geometry[] = [];
      for (const member of members) {
        const geometry = objectMapGeometry(member, depth + 1);
        // Avoid silently drawing an incomplete shape when one part is invalid.
        if (geometry == null) return undefined;
        geometries.push(geometry);
      }
      return { type: "GeometryCollection", geometries };
    }
    default:
      return undefined;
  }
}
