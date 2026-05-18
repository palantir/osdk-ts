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
import { consola } from "consola";

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
): OntologyIrStructFieldBaseParameterType | undefined {
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
      return undefined;
  }
}

function mapGatewayStructFieldsToIr(
  dataType: Ontologies.OntologyStructType,
): Record<string, OntologyIrStructFieldBaseParameterType> | undefined {
  const fields = dataType.fields;
  if (!fields) {
    consola.warn("Struct parameter type missing structFieldTypes, skipping");
    return undefined;
  }
  const structFieldTypes: Record<
    string,
    OntologyIrStructFieldBaseParameterType
  > = {};
  for (const field of fields) {
    const irType = mapStructFieldType(field.fieldType);
    if (irType) {
      structFieldTypes[field.name] = irType;
    } else {
      consola.warn(
        `Skipping struct param field "${field.name}": unsupported type "${field.fieldType.type}"`,
      );
    }
  }
  return structFieldTypes;
}

/**
 * Maps a gateway ActionParameterType (discriminated union from OntologyFullMetadata)
 * to a maker ActionParameterType (string primitives or complex objects).
 *
 * Returns undefined for unsupported types (with a warning).
 */
export function mapActionParameterType(
  dataType: Ontologies.ActionParameterType,
): ActionParameterType | undefined {
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
        consola.warn("Array parameter type missing subType, skipping");
        return undefined;
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
        if (!structFields) return undefined;
        return {
          type: "structList",
          structList: { structFieldTypes: structFields },
        };
      }

      consola.warn(
        `Skipping array parameter with unsupported subType: ${subType.type}`,
      );
      return undefined;
    }
    case "struct": {
      const structFields = mapGatewayStructFieldsToIr(dataType);
      if (!structFields) return undefined;
      return {
        type: "struct",
        struct: { structFieldTypes: structFields },
      };
    }
    case "vector":
      consola.warn("Skipping vector parameter type: no maker equivalent");
      return undefined;
    case "objectType":
      return "objectTypeReference";
    default:
      consola.warn(`Skipping unknown parameter type: ${dataType.type}`);
      return undefined;
  }
}
