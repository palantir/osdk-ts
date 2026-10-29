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

import type { OntologyIrStructFieldBaseParameterType } from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";
import type { ActionParameter, ActionParameterType } from "@osdk/maker";

const SIMPLE_PARAM_TYPES: Record<string, ActionParameter["type"]> = {
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

const LIST_VARIANT_MAP: Record<string, ActionParameter["type"]> = {
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

function mapStructFieldType(
  fieldType: Ontologies.OntologyDataType,
): OntologyIrStructFieldBaseParameterType {
  switch (fieldType.type) {
    case "boolean":
      return { type: "boolean", boolean: {} };
    case "integer":
      return { type: "integer", integer: {} };
    case "long":
      return { type: "long", long: {} };
    case "double":
      return { type: "double", double: {} };
    case "string":
      return { type: "string", string: {} };
    case "timestamp":
      return { type: "timestamp", timestamp: {} };
    case "date":
      return { type: "date", date: {} };
    case "object":
      return {
        type: "objectReference",
        objectReference: { objectTypeId: fieldType.objectTypeApiName },
      };
    default:
      throw new Error(
        `Unsupported struct parameter field type "${fieldType.type}"`,
      );
  }
}

function mapGatewayStructFieldsToIr(
  dataType: Ontologies.OntologyStructType,
): Record<string, OntologyIrStructFieldBaseParameterType> {
  const fields = dataType.fields;
  if (!fields) {
    throw new Error("Cannot map struct parameter type with missing fields");
  }
  const structFieldTypes: Record<
    string,
    OntologyIrStructFieldBaseParameterType
  > = {};
  for (const field of fields) {
    structFieldTypes[field.name] = mapStructFieldType(field.fieldType);
  }
  return structFieldTypes;
}

/**
 * Maps a gateway ActionParameterType (discriminated union from OntologyFullMetadata)
 * to a maker ActionParameterType (string primitives or complex objects).
 *
 * Throws for unsupported types or invalid type configurations.
 */
export function mapActionParameterType(
  dataType: Ontologies.ActionParameterType,
): ActionParameterType {
  const simpleType = SIMPLE_PARAM_TYPES[dataType.type];
  if (simpleType !== undefined) {
    return simpleType;
  }

  switch (dataType.type) {
    case "object":
      return {
        type: "objectReference",
        objectReference: { objectTypeId: dataType.objectTypeApiName },
      };
    case "objectSet":
      return {
        type: "objectSetRid",
        objectSetRid: { objectTypeId: dataType.objectTypeApiName ?? "" },
      };
    case "interfaceObject":
      return {
        type: "interfaceReference",
        interfaceReference: {
          interfaceTypeRid: dataType.interfaceTypeApiName ?? "",
        },
      };
    case "array": {
      const subType = dataType.subType;
      if (!subType) {
        throw new Error("Cannot map array parameter type with missing subType");
      }

      const listVariant = LIST_VARIANT_MAP[subType.type];
      if (listVariant !== undefined) {
        return listVariant;
      }

      if (subType.type === "object") {
        return {
          type: "objectReferenceList",
          objectReferenceList: { objectTypeId: subType.objectTypeApiName },
        };
      }

      if (subType.type === "interfaceObject") {
        return {
          type: "interfaceReferenceList",
          interfaceReferenceList: {
            interfaceTypeRid: subType.interfaceTypeApiName ?? "",
          },
        };
      }

      if (subType.type === "struct") {
        const structFields = mapGatewayStructFieldsToIr(subType);
        return {
          type: "structList",
          structList: { structFieldTypes: structFields },
        };
      }

      throw new Error(
        `Cannot map array parameter with unsupported subType: ${subType.type}`,
      );
    }
    case "struct": {
      const structFields = mapGatewayStructFieldsToIr(dataType);
      return {
        type: "struct",
        struct: { structFieldTypes: structFields },
      };
    }
    case "vector":
      throw new Error("Cannot map vector parameter type: no maker equivalent");
    case "objectType":
      return "objectTypeReference";
    default:
      throw new Error(`Unsupported action parameter type "${dataType.type}"`);
  }
}
