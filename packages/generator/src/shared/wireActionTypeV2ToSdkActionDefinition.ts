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

import type {
  ActionDefinition,
  ActionModifiedEntity,
  ActionParameterDefinition,
} from "@osdk/api";
import type {
  ActionParameterType,
  ActionParameterV2,
  ActionTypeV2,
} from "@osdk/gateway/types";
import { getModifiedEntityTypes } from "./getEditedEntities";

export function wireActionTypeV2ToSdkActionDefinition(
  input: ActionTypeV2,
): ActionDefinition<any, any> {
  const modifiedEntityTypes = getModifiedEntityTypes(input);
  return {
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
  };
}

function wireActionParameterV2ToSdkParameterDefinition(
  value: ActionParameterV2,
): ActionParameterDefinition<any> {
  switch (value.dataType.type) {
    case "string":
    case "boolean":
    case "object":
    case "attachment":
    case "date":
    case "double":
    case "integer":
    case "long":
    case "objectSet":
    case "timestamp":
      return {
        multiplicity: false,
        type: actionPropertyToSdkPropertyDefinition(value.dataType),
        nullable: value.required ? false : true,
        description: value.description,
      };
    case "array":
      return {
        multiplicity: true,
        type: actionPropertyToSdkPropertyDefinition(value.dataType),
        nullable: value.required ? false : true,
        description: value.description,
      };
  }
}

function actionPropertyToSdkPropertyDefinition(
  parameterType: ActionParameterType,
): ActionParameterDefinition<string>["type"] {
  switch (parameterType.type) {
    case "string":
    case "boolean":
    case "attachment":
    case "double":
    case "integer":
    case "long":
    case "timestamp":
      return parameterType.type;
    case "date":
      return "datetime";
    case "objectSet":
      return { type: "objectSet", objectSet: parameterType.objectTypeApiName! };
    case "object":
      return { type: "object", object: parameterType.objectTypeApiName };
    case "array":
      return actionPropertyToSdkPropertyDefinition(parameterType.subType);
  }
}

function createModifiedEntities<K extends string>(
  addedObjects: Set<K>,
  modifiedObjects: Set<K>,
): Record<K, ActionModifiedEntity> {
  let entities: Record<K, ActionModifiedEntity> = {} as Record<
    K,
    ActionModifiedEntity
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
