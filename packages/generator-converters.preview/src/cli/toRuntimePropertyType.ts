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

import type { ObjectPropertyType } from "@osdk/foundry.ontologies";

// Wire shape consumed by functions-typescript-runtime's PropertyTypeConverter.
// This is the subset of its PropertyType contract that platform property types
// can represent; the runtime schema is not a dependency of this public package.
type RuntimeScalarPropertyType =
  | "attachment"
  | "boolean"
  | "byte"
  | "cipherText"
  | "date"
  | "decimal"
  | "double"
  | "float"
  | "geohash"
  | "geoshape"
  | "geotimeSeriesReference"
  | "integer"
  | "long"
  | "marking"
  | "mediaReference"
  | "short"
  | "string"
  | "timeDependent"
  | "timestamp"
  | "vector";

export type RuntimePropertyType =
  | {
    [K in RuntimeScalarPropertyType]:
      & { type: K }
      & Record<K, Record<string, never>>;
  }[RuntimeScalarPropertyType]
  | { type: "array"; array: { itemType: RuntimePropertyType } }
  | {
    type: "struct";
    struct: {
      structFields: Array<{
        apiName: string;
        rid: string;
        fieldType: RuntimePropertyType;
      }>;
    };
  };

/** Convert platform API property metadata into the functions runtime wire format. */
export function toRuntimePropertyType(
  propertyType: ObjectPropertyType,
): RuntimePropertyType {
  switch (propertyType.type) {
    case "array":
      return {
        type: "array",
        array: { itemType: toRuntimePropertyType(propertyType.subType) },
      };
    case "struct":
      return {
        type: "struct",
        struct: {
          structFields: propertyType.structFieldTypes.map(field => ({
            apiName: field.apiName,
            rid: field.rid,
            fieldType: toRuntimePropertyType(field.dataType),
          })),
        },
      };
    case "geopoint":
      return { type: "geohash", geohash: {} };
    case "attachment":
      return { type: "attachment", attachment: {} };
    case "boolean":
      return { type: "boolean", boolean: {} };
    case "byte":
      return { type: "byte", byte: {} };
    case "cipherText":
      return { type: "cipherText", cipherText: {} };
    case "date":
      return { type: "date", date: {} };
    case "decimal":
      return { type: "decimal", decimal: {} };
    case "double":
      return { type: "double", double: {} };
    case "float":
      return { type: "float", float: {} };
    case "geoshape":
      return { type: "geoshape", geoshape: {} };
    case "geotimeSeriesReference":
      return { type: "geotimeSeriesReference", geotimeSeriesReference: {} };
    case "integer":
      return { type: "integer", integer: {} };
    case "long":
      return { type: "long", long: {} };
    case "marking":
      return { type: "marking", marking: {} };
    case "mediaReference":
      return { type: "mediaReference", mediaReference: {} };
    case "short":
      return { type: "short", short: {} };
    case "string":
      return { type: "string", string: {} };
    case "timestamp":
      return { type: "timestamp", timestamp: {} };
    case "vector":
      return { type: "vector", vector: {} };
    case "timeseries":
      return { type: "timeDependent", timeDependent: {} };
    default: {
      const exhaustiveCheck: never = propertyType;
      throw new Error(
        `Unknown property type in TypeScript function runtime metadata: ${
          JSON.stringify(exhaustiveCheck)
        }`,
      );
    }
  }
}
