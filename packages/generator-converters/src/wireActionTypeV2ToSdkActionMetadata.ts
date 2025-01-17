/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionMetadata, ValidBaseActionParameterTypes } from "@osdk/api";
import type {
  ActionParameterType,
  ActionParameterV2,
  ActionTypeV2,
} from "@osdk/internal.foundry.core";
import { getModifiedEntityTypes } from "./getEditedEntities.js";

export function wireActionTypeV2ToSdkActionMetadata(
  input: ActionTypeV2,
): ActionMetadata {
  const modifiedEntityTypes = getModifiedEntityTypes(input);
  return {
    type: "action",
    apiName: input.apiName,
    parameters: Object.fromEntries(
      Object.entries(input.parameters).map((
        [key, value],
      ) => [key, wireActionParameterV2ToSdkParameterDefinition(value)]),
    ),
    displayName: input.displayName,
    description: input.description,
    modifiedEntities: createModifiedEntities(
      modifiedEntityTypes.addedObjects,
      modifiedEntityTypes.modifiedObjects,
    ),
    rid: input.rid,
    status: input.status,
  };
}

function wireActionParameterV2ToSdkParameterDefinition(
  value: ActionParameterV2,
): ActionMetadata.Parameter<any> {
  return {
    multiplicity: value.dataType.type === "array",
    type: actionPropertyToSdkPropertyDefinition(
      value.dataType.type === "array" ? value.dataType.subType : value.dataType,
    ),
    nullable: !value.required,
    description: value.description,
  };
}

function actionPropertyToSdkPropertyDefinition(
  parameterType: ActionParameterType,
): ActionMetadata.Parameter["type"] {
  switch (parameterType.type) {
    case "string":
    case "boolean":
    case "attachment":
    case "double":
    case "integer":
    case "long":
    case "timestamp":
    case "marking":
      return parameterType.type;
    case "date":
      return "datetime";
    case "objectSet":
      return { type: "objectSet", objectSet: parameterType.objectTypeApiName! };
    case "object":
      return { type: "object", object: parameterType.objectTypeApiName };
    case "array":
      return actionPropertyToSdkPropertyDefinition(parameterType.subType);
    case "struct":
      return {
        type: "struct",
        struct: parameterType.fields.reduce(
          (
            structMap: Record<string, ValidBaseActionParameterTypes>,
            structField,
          ) => {
            structMap[structField.name] = actionPropertyToSdkPropertyDefinition(
              structField.fieldType as ActionParameterType,
            ) as ValidBaseActionParameterTypes;
            return structMap;
          },
          {},
        ),
      };
    default:
      throw new Error(
        `Unsupported action parameter type: ${parameterType.type}`,
      );
  }
}

function createModifiedEntities<K extends string>(
  addedObjects: Set<K>,
  modifiedObjects: Set<K>,
): ActionMetadata["modifiedEntities"] {
  const entities = {} as Record<
    K,
    {
      created: boolean;
      modified: boolean;
    }
  >;

  for (const key of addedObjects) {
    entities[key] = { created: true, modified: false };
  }

  for (const key of modifiedObjects) {
    if (entities[key]) {
      entities[key].modified = true;
    } else {
      entities[key] = { created: false, modified: true };
    }
  }

  return entities;
}
