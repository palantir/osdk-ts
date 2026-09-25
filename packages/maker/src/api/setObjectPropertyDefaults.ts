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

import type { ActionParameter } from "./action/ActionParameter.js";
import { getProperty } from "./object/objectPropertyHelpers.js";
import type { ObjectType } from "./object/ObjectType.js";
import type { ObjectTypeDefinition } from "./object/ObjectTypeDefinition.js";
import { isStruct } from "./properties/PropertyTypeType.js";

export function setObjectPropertyDefaults(
  parameters: ActionParameter[],
  objectType: ObjectType | ObjectTypeDefinition,
  objectParameterId: string,
): void {
  const objectParameter = parameters.find((p) => p.id === objectParameterId);
  for (const parameter of parameters) {
    const property = getProperty(objectType, parameter.id);
    if (property == null) continue;
    if (!isStruct(property.type)) {
      if (parameter.defaultValue === undefined) {
        parameter.defaultValue = {
          type: "objectParameterPropertyValue",
          objectParameterPropertyValue: {
            parameterId: objectParameterId,
            propertyTypeId: parameter.id,
          },
        };
      }
      continue;
    }
    if (
      typeof parameter.type === "string" ||
      (parameter.type.type !== "struct" &&
        parameter.type.type !== "structList") ||
      typeof objectParameter?.type === "string" ||
      objectParameter?.type.type !== "objectReference"
    ) {
      continue;
    }
    const fields =
      parameter.type.type === "struct"
        ? parameter.type.struct.structFieldTypes
        : parameter.type.structList.structFieldTypes;
    const configurations = {
      ...parameter.validation.structFieldValidations,
    };
    parameter.validation.structFieldValidations = configurations;
    for (const fieldApiName of Object.keys(fields)) {
      const configuration = configurations[fieldApiName] ?? {};
      if (configuration.defaultValue !== undefined) continue;
      const reference = {
        parameterId: objectParameterId,
        propertyTypeId: parameter.id,
        structFieldApiName: fieldApiName,
      };
      configurations[fieldApiName] = {
        ...configuration,
        defaultValue:
          property.array === true
            ? {
                type: "objectParameterStructListFieldValue",
                objectParameterStructListFieldValue: reference,
              }
            : {
                type: "objectParameterStructFieldValue",
                objectParameterStructFieldValue: reference,
              },
      };
    }
  }
}
