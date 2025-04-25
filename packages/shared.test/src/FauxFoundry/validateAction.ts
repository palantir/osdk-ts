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

import type { MediaReference } from "@osdk/foundry.core";
import type {
  ActionParameterType,
  ActionParameterV2,
  ActionTypeV2,
  ApplyActionRequestV2,
  BatchApplyActionRequestItem,
  OntologyDataType,
  ParameterEvaluationResult,
  ValidateActionResponseV2,
} from "@osdk/foundry.ontologies";
import type { FauxDataStore } from "./FauxDataStore.js";

export function validateAction(
  payload: ApplyActionRequestV2 | BatchApplyActionRequestItem,
  def: ActionTypeV2,
  dataStore: FauxDataStore,
): ValidateActionResponseV2 {
  const ret: ValidateActionResponseV2 = {
    parameters: {},
    submissionCriteria: [],
    result: "VALID",
  };
  for (const [k, v] of Object.entries(def.parameters)) {
    const value = payload.parameters[k];
    validateActionParameterType(v.dataType, v, value, ret, k, dataStore);
  }

  return ret;
}

// So far these all basically return the same thing
// and can likely be rewritten as a function that return boolean
function validateActionParameterType(
  dataType: ActionParameterType,
  paramDef: ActionParameterV2,
  value: unknown,
  ret: ValidateActionResponseV2,
  paramKey: string,
  dataStore: FauxDataStore,
) {
  if (paramDef.required && value == null) {
    ret.result = "INVALID";
    ret.parameters[paramKey] = {
      result: "INVALID",
      evaluatedConstraints: [],
      required: true,
    };
    return;
  }
  if (!paramDef.required && value == null) {
    return;
  }

  const baseParam: ParameterEvaluationResult = {
    result: "INVALID",
    evaluatedConstraints: [],
    required: paramDef.required,
  };

  switch (dataType.type) {
    case "array": {
      if (!Array.isArray(value)) {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          ...baseParam,
        };
        return;
      }
      for (const item of value) {
        validateActionParameterType(
          dataType.subType,
          paramDef,
          item,
          ret,
          paramKey,
          dataStore,
        );
      }
      return;
    }

    case "attachment": {
      if (typeof value !== "string") {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          ...baseParam,
        };
      }
      return;
    }

    case "boolean":
    case "date":
    case "long":
    case "double":
    case "integer":
    case "marking":
    case "objectSet":
    case "timestamp":
    case "object":
    case "string":
      if (!matchesOntologyDataType(dataType, value)) {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          ...baseParam,
        };
      }
      return;
    case "geohash":
      if (!(typeof value === "string")) {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          ...baseParam,
        };
      }
      return;

    case "geoshape":
      if (
        !(typeof value === "object"
          && ("coordinates" in value! || "geometries" in value!
            || "features" in value!))
      ) {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          ...baseParam,
        };
      }
      return;
    case "interfaceObject": {
      if (!isInterfaceActionParam(value)) {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          ...baseParam,
        };
      } else if (
        dataStore.getObject(
          value.objectTypeApiName,
          value.primaryKeyValue,
        ) == null
      ) {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          ...baseParam,
          evaluatedConstraints: [{
            type: "objectPropertyValue",
          }],
        };
      }
      return;
    }

    case "mediaReference": {
      if (!isMediaReference(value)) {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          ...baseParam,
        };
      }
      return;
    }

    case "vector": {
      ret.result = "INVALID";
      ret.parameters[paramKey] = {
        ...baseParam,
      };
      return;
    }

    case "struct": {
      if (!value || typeof value !== "object" || Array.isArray(value)) {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          ...baseParam,
        };
        return;
      }

      for (const { name, fieldType, required } of dataType.fields) {
        const fieldValue = (value as Record<string, unknown>)[name];
        if (
          (required && fieldValue == null)
          || !matchesOntologyDataType(fieldType, fieldValue)
        ) {
          ret.result = "INVALID";
          ret.parameters[paramKey] = {
            ...baseParam,
          };

          return;
        }
      }

      return;
    }

    case "objectType": {
      if (
        typeof value !== "string"
        || !dataStore.ontology.getObjectTypeFullMetadata(value)
      ) {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          ...baseParam,
        };
        return;
      }

      return;
    }

    default: {
      const _assertNever: never = dataType;
      throw new Error(
        `validateDataType: unknown type`,
      );
    }
  }
}

function matchesOntologyDataType(
  odt: OntologyDataType,
  value: unknown,
): boolean {
  switch (odt.type) {
    case "any":
      return true;
    case "array":
      return Array.isArray(value)
        && value.every((v) => matchesOntologyDataType(odt.itemType, v));
    case "binary":
      throw new Error(`validateDataType: ${odt.type} not implemented yet.`);
    case "boolean":
      return typeof value === "boolean";
    case "byte":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "cipherText":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "date":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "decimal":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "double":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "float":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "integer":
      return (typeof value === "number" && Number.isInteger(value));

    case "long":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "map":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "marking":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "object":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "objectSet":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "set":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "short":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "string":
      return (typeof value === "string");

    case "struct":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "timestamp":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    case "unsupported":
      throw new Error(
        `matchesOntologyDataType: ${odt.type} not implemented yet.`,
      );
    default:
      const _assertNever = odt;
      throw new Error(
        `matchesOntologyDataType: ${(odt as any).type} not implemented yet.`,
      );
  }
}

export function isMediaReference(o: any): o is MediaReference {
  return typeof o === `object`
    && typeof o.mimeType === "string"
    && "reference" in o
    && typeof o.reference === "object"
    && o.reference.type === "mediaSetViewItem"
    && "mediaSetViewItem" in o.reference
    && typeof o.reference.mediaSetViewItem === "object"
    && typeof o.reference.mediaSetViewItem.mediaSetRid === "string"
    && typeof o.reference.mediaSetViewItem.mediaSetViewRid === "string"
    && typeof o.reference.mediaSetViewItem.mediaItemRid === "string";
}

export function isInterfaceActionParam(value: any): value is {
  objectTypeApiName: string;
  primaryKeyValue: string | number | boolean;
} {
  return (
    typeof value === "object"
    && "objectTypeApiName" in value
    && typeof value.objectTypeApiName === "string"
    && "primaryKeyValue" in value
    && (typeof value.primaryKeyValue === "string"
      || typeof value.primaryKeyValue === "number"
      || typeof value.primaryKeyValue === "boolean")
  );
}

function isPoint(obj: any): obj is GeoJSON.Point {
  return obj.type === "Point"
    && Array.isArray(obj.coordinates)
    && obj.coordinates.length === 2
    && typeof obj.coordinates[0] === "number"
    && typeof obj.coordinates[1] === "number";
}
