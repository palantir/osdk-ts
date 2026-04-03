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

import { consola } from "consola";

// ActionParameterType from maker is not exported, so we use structural typing.
// The generated JSON will have the correct shape at runtime.
type ActionParameterType = string | { type: string; [key: string]: unknown };

const SIMPLE_PARAM_TYPES: Record<string, ActionParameterType> = {
  string: "string",
  integer: "integer",
  boolean: "boolean",
  double: "double",
  long: "long",
  date: "date",
  timestamp: "timestamp",
  attachment: "attachment",
  marking: "marking",
  geohash: "geohash",
  geoshape: "geoshape",
  mediaReference: "mediaReference",
  decimal: "decimal",
};

const LIST_VARIANT_MAP: Record<string, ActionParameterType> = {
  string: "stringList",
  integer: "integerList",
  boolean: "booleanList",
  double: "doubleList",
  long: "longList",
  date: "dateList",
  timestamp: "timestampList",
  attachment: "attachmentList",
  marking: "markingList",
  geohash: "geohashList",
  geoshape: "geoshapeList",
  mediaReference: "mediaReferenceList",
  decimal: "decimalList",
};

/**
 * Maps a gateway ActionParameterType (discriminated union from OntologyFullMetadata)
 * to a maker ActionParameterType (string primitives or complex objects).
 *
 * Returns undefined for unsupported types (with a warning).
 */
export function mapActionParameterType(
  dataType: { type: string; [key: string]: unknown },
): ActionParameterType | undefined {
  const simpleType = SIMPLE_PARAM_TYPES[dataType.type];
  if (simpleType !== undefined) {
    return simpleType;
  }

  switch (dataType.type) {
    case "object": {
      const objectTypeApiName =
        (dataType as { objectTypeApiName?: string }).objectTypeApiName ?? "";
      return {
        type: "objectReference",
        objectReference: { objectTypeId: objectTypeApiName },
      };
    }
    case "objectSet": {
      const objectTypeApiName =
        (dataType as { objectTypeApiName?: string }).objectTypeApiName ?? "";
      return {
        type: "objectSetRid",
        objectSetRid: { objectTypeId: objectTypeApiName },
      };
    }
    case "interfaceObject": {
      const interfaceApiName =
        (dataType as { interfaceApiName?: string }).interfaceApiName ?? "";
      return {
        type: "interfaceReference",
        interfaceReference: { interfaceTypeRid: interfaceApiName },
      };
    }
    case "array": {
      const subType = (dataType as { subType?: { type: string } }).subType;
      if (!subType) {
        consola.warn("Array parameter type missing subType, skipping");
        return undefined;
      }

      // For simple types, use the list variant
      const listVariant = LIST_VARIANT_MAP[subType.type];
      if (listVariant !== undefined) {
        return listVariant;
      }

      // For object references, use objectReferenceList
      if (subType.type === "object") {
        const objectTypeApiName =
          (subType as { objectTypeApiName?: string }).objectTypeApiName ?? "";
        return {
          type: "objectReferenceList",
          objectReferenceList: { objectTypeId: objectTypeApiName },
        };
      }

      // For interface references, use interfaceReferenceList
      if (subType.type === "interfaceObject") {
        const interfaceApiName =
          (subType as { interfaceApiName?: string }).interfaceApiName ?? "";
        return {
          type: "interfaceReferenceList",
          interfaceReferenceList: { interfaceTypeRid: interfaceApiName },
        };
      }

      consola.warn(
        `Skipping array parameter with unsupported subType: ${subType.type}`,
      );
      return undefined;
    }
    case "struct":
      consola.warn(
        "Skipping struct parameter type: complex mapping not supported",
      );
      return undefined;
    case "vector":
      consola.warn("Skipping vector parameter type: no maker equivalent");
      return undefined;
    case "objectType":
      consola.warn("Skipping objectType parameter type");
      return undefined;
    default:
      consola.warn(`Skipping unknown parameter type: ${dataType.type}`);
      return undefined;
  }
}
