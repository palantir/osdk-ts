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

import type { Feature, FeatureCollection, Geometry, Position } from "geojson";

import type { MapFeature } from "../BaseObjectMapApi.js";

export interface MapFeatureProperties {
  objectId: string;
  label: string;
  selected: boolean;
}

export type MapBounds = [[number, number], [number, number]];

// Web Mercator cannot project either geographic pole. Its finite square extent
// stops at atan(sinh(PI)); clamp camera bounds while preserving source geometry.
const MAX_MERCATOR_LATITUDE = 85.0511287798066;

/** Split collections into independently rendered parts with a shared selection identity. */
export function toMapFeatureCollection(
  features: readonly MapFeature[],
  selectedIds: readonly string[],
): FeatureCollection<Geometry, MapFeatureProperties> {
  const selected = new Set(selectedIds);
  const result: Feature<Geometry, MapFeatureProperties>[] = [];
  for (const feature of features) {
    let part = 0;
    const addGeometry = (geometry: Geometry): void => {
      if (geometry.type === "GeometryCollection") {
        geometry.geometries.forEach(addGeometry);
      } else {
        result.push({
          type: "Feature",
          id: JSON.stringify([feature.id, part++]),
          geometry,
          properties: {
            objectId: feature.id,
            label: feature.label,
            selected: selected.has(feature.id),
          },
        });
      }
    };
    addGeometry(feature.geometry);
  }
  return { type: "FeatureCollection", features: result };
}

function visitPositions(
  geometry: Geometry,
  visit: (position: Position) => void,
): void {
  switch (geometry.type) {
    case "Point":
      visit(geometry.coordinates);
      break;
    case "MultiPoint":
    case "LineString":
      geometry.coordinates.forEach(visit);
      break;
    case "MultiLineString":
    case "Polygon":
      geometry.coordinates.forEach((line) => line.forEach(visit));
      break;
    case "MultiPolygon":
      geometry.coordinates.forEach((polygon) => {
        polygon.forEach((line) => line.forEach(visit));
      });
      break;
    case "GeometryCollection":
      geometry.geometries.forEach((child) => visitPositions(child, visit));
      break;
  }
}

function isPointGeometry(geometry: Geometry): boolean {
  return (
    geometry.type === "Point" ||
    geometry.type === "MultiPoint" ||
    (geometry.type === "GeometryCollection" &&
      geometry.geometries.every(isPointGeometry))
  );
}

/** Keep dateline-adjacent points together without cropping lines or filled shapes. */
export function getMapBounds(
  features: readonly MapFeature[],
): MapBounds | undefined {
  const pointOnly = features.every((feature) =>
    isPointGeometry(feature.geometry),
  );
  const longitudes: number[] = [];
  let south = Infinity;
  let north = -Infinity;
  const extendBounds = ([longitude, latitude]: Position): void => {
    if (!Number.isFinite(longitude) || !Number.isFinite(latitude)) return;
    const projectedLatitude = Math.max(
      -MAX_MERCATOR_LATITUDE,
      Math.min(MAX_MERCATOR_LATITUDE, latitude),
    );
    longitudes.push(
      pointOnly ? ((((longitude + 180) % 360) + 360) % 360) - 180 : longitude,
    );
    south = Math.min(south, projectedLatitude);
    north = Math.max(north, projectedLatitude);
  };
  for (const feature of features) {
    visitPositions(feature.geometry, extendBounds);
  }
  if (longitudes.length === 0) return undefined;
  longitudes.sort((a, b) => a - b);
  if (!pointOnly) {
    // A line from -170 to 170 is rendered across that whole extent. Choosing
    // its shortest circular interval would crop most of the visible geometry.
    return [
      [longitudes[0], south],
      [longitudes[longitudes.length - 1], north],
    ];
  }
  let gap = -Infinity;
  let first = 0;
  for (let i = 0; i < longitudes.length; i++) {
    const next = (i + 1) % longitudes.length;
    const distance = longitudes[next] + (next === 0 ? 360 : 0) - longitudes[i];
    if (distance > gap) {
      gap = distance;
      first = next;
    }
  }
  const west = longitudes[first];
  const last = (first + longitudes.length - 1) % longitudes.length;
  const east = longitudes[last] + (last < first ? 360 : 0);
  return [
    [west, south],
    [east, north],
  ];
}

export function toggleMapSelection(
  selectedIds: readonly string[],
  id: string,
  additive: boolean,
): readonly string[] {
  if (additive) {
    return selectedIds.includes(id)
      ? selectedIds.filter((selectedId) => selectedId !== id)
      : [...selectedIds, id];
  }
  return selectedIds.length === 1 && selectedIds[0] === id ? [] : [id];
}
