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

import type { Parameter, ParameterId } from "@osdk/client.unstable";
import type { ActionType } from "@osdk/maker";
import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { BaseParameterType } from "@osdk/client.unstable/api";

export function convertActionParameters(
  action: ActionType,
  ridGenerator: OntologyRidGenerator,
): Record<ParameterId, Parameter> {
  return Object.fromEntries((action.parameters ?? []).map(parameter => {
    let convertedType: BaseParameterType;

    if (typeof parameter.type === "string") {
      // Simple string types like "string", "integer", etc.
      convertedType = { type: parameter.type, [parameter.type]: {} } as any;
    } else {
      // Complex types that need ObjectTypeId conversion
      switch (parameter.type.type) {
        case "objectReference":
          convertedType = {
            type: "objectReference",
            objectReference: {
              ...parameter.type.objectReference,
              objectTypeId: ridGenerator.generateObjectTypeId(
                parameter.type.objectReference.objectTypeId,
              ),
            },
          };
          break;

        case "objectReferenceList":
          convertedType = {
            type: "objectReferenceList",
            objectReferenceList: {
              ...parameter.type.objectReferenceList,
              objectTypeId: ridGenerator.generateObjectTypeId(
                parameter.type.objectReferenceList.objectTypeId,
              ),
            },
          };
          break;

        case "interfaceReference":
          convertedType = {
            type: "interfaceReference",
            interfaceReference: {
              interfaceTypeRid: ridGenerator.generateRidForInterface(parameter.type.interfaceReference.interfaceTypeRid)
            }
          }
          break;
        case "interfaceReferenceList":
          convertedType = {
            type: "interfaceReferenceList",
            interfaceReferenceList: {
              interfaceTypeRid: ridGenerator.generateRidForInterface(parameter.type.interfaceReferenceList.interfaceTypeRid)
            }
          }

        default:
          // Pass through other types unchanged
          convertedType = parameter.type;
      }
    }

    return [parameter.id, {
      id: parameter.id,
      rid: ridGenerator.generateRidForParameter(action.apiName, parameter.id),
      type: convertedType,
      displayMetadata: {
        displayName: parameter.displayName,
        description: parameter.description ?? "",
        typeClasses: [],
        structFields: {},
        structFieldsV2: [],
      },
    }];
  }));
}
