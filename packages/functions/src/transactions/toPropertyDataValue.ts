/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { DataValue } from "@osdk/foundry.ontologies";

export function toPropertyDataValue(
  value: unknown,
): DataValue {
  if (value == null) {
    return null; // This differs from how actions handles null, which expects a specific enum value.
  }

  if (Array.isArray(value)) {
    return value.map((item) => toPropertyDataValue(item));
  }

  if (isPoint(value)) {
    return toPropertyDataValue(
      `${value.coordinates[1]},${value.coordinates[0]}`,
    );
  }

  if (typeof value === "object") {
    const result: Record<string, DataValue> = {};
    for (const key in value) {
      result[key] = toPropertyDataValue(
        (value as Record<string, unknown>)[key],
      );
    }
    return result;
  }

  // expected to pass through - boolean, byte, date, decimal, float, double, integer, long, short, string, timestamp, object type reference
  return value;
}

function isPoint(o: any): o is GeoJSON.Point {
  return o && typeof o === "object" && "type" in o && o.type === "Point"
    && "coordinates" in o && o.coordinates.length === 2;
}
