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

import type {
  ActionParameterType,
  ActionParameterV2,
  ActionTypeV2,
  ApplyActionRequestV2,
  BatchApplyActionRequestItem,
  ValidateActionResponseV2,
} from "@osdk/foundry.ontologies";

// TODO: just call this from `FauxDataStore` instead of embedding in function
// (must migrate all actions first)
export function validateAction(
  payload: ApplyActionRequestV2 | BatchApplyActionRequestItem,
  def: ActionTypeV2,
): ValidateActionResponseV2 {
  const ret: ValidateActionResponseV2 = {
    parameters: {},
    submissionCriteria: [],
    result: "VALID",
  };
  for (const [k, v] of Object.entries(def.parameters)) {
    const value = payload.parameters[k];
    validateDataType(v.dataType, v, value, ret, k);
  }

  return ret;
}
function validateDataType(
  dataType: ActionParameterType,
  paramDef: ActionParameterV2,
  value: unknown,
  ret: ValidateActionResponseV2,
  paramKey: string,
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

  switch (dataType.type) {
    case "array": {
      if (!Array.isArray(value)) {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          result: "INVALID",
          evaluatedConstraints: [],
          required: paramDef.required,
        };
        return;
      }
      for (const item of value) {
        validateDataType(dataType.subType, paramDef, item, ret, paramKey);
      }
      break;
    }

    case "attachment": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    case "boolean": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    case "date": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    case "double": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    case "integer": {
      if (typeof value !== "number" || !Number.isInteger(value)) {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          result: "INVALID",
          evaluatedConstraints: [],
          required: paramDef.required,
        };
      }
      break;
    }

    case "interfaceObject": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    case "long": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    case "marking": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    case "mediaReference": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    case "objectSet": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    case "struct": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    case "timestamp": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    case "object": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    case "string": {
      if (typeof value !== "string") {
        ret.result = "INVALID";
        ret.parameters[paramKey] = {
          result: "INVALID",
          evaluatedConstraints: [],
          required: paramDef.required,
        };
      }
      break;
    }

    case "objectType": {
      throw new Error(
        `validateAction: ${paramDef.dataType.type} not implemented yet.`,
      );
    }

    default: {
      throw new Error(
        `validateAction: unknown type`,
      );
    }
  }
}
