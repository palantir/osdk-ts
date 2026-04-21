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

import type { PropertyTypeType } from "@osdk/maker";
import { consola } from "consola";

/**
 * Result of mapping a gateway ObjectPropertyType to a maker PropertyTypeType.
 * `array` is true when the gateway type was {type: "array", subType: X}.
 */
export interface MappedPropertyType {
  type: PropertyTypeType;
  array?: boolean;
}

/**
 * Maps a gateway ObjectPropertyType (discriminated union with {type: string})
 * to a maker PropertyTypeType.
 *
 * Returns undefined for unsupported types (with a warning).
 */
export function mapPropertyType(
  dataType: { type: string; [key: string]: unknown },
): MappedPropertyType | undefined {
  switch (dataType.type) {
    case "string":
      return { type: "string" };
    case "integer":
      return { type: "integer" };
    case "boolean":
      return { type: "boolean" };
    case "double":
      return { type: "double" };
    case "float":
      return { type: "float" };
    case "long":
      return { type: "long" };
    case "short":
      return { type: "short" };
    case "byte":
      return { type: "byte" };
    case "date":
      return { type: "date" };
    case "timestamp":
      return { type: "timestamp" };
    case "decimal":
      return { type: "decimal" };
    case "attachment":
      return { type: "attachment" };
    case "geopoint":
      return { type: "geopoint" };
    case "geoshape":
      return { type: "geoshape" };
    case "mediaReference":
      return { type: "mediaReference" };
    case "geotimeSeriesReference":
      return { type: "geotimeSeries" };
    case "array": {
      const subType = (dataType as { subType?: { type: string } }).subType;
      if (!subType) {
        consola.warn("Array type missing subType, skipping");
        return undefined;
      }
      const inner = mapPropertyType(subType);
      if (!inner) {
        return undefined;
      }
      return { type: inner.type, array: true };
    }
    // We don't support structs or markings here. It should have no influence on importing functionality
    default:
      return undefined;
  }
}
