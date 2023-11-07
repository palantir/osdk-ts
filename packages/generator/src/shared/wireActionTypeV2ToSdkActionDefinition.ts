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
  ActionParameterDefinition,
  ValidActionParameterTypes,
} from "@osdk/api";
import type {
  ActionParameterType,
  ActionParameterV2,
  ActionTypeV2,
} from "@osdk/gateway/types";

export function wireActionTypeV2ToSdkActionDefinition(
  input: ActionTypeV2,
): ActionDefinition<any, any> {
  return {
    apiName: input.apiName,
    parameters: Object.fromEntries(
      Object.entries(input.parameters).map((
        [key, value],
      ) => [key, wireActionParameterV2ToSdkParameterDefinition(value)]),
    ),
    displayName: input.displayName,
    description: input.description,
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
      };
    case "array":
      return {
        multiplicity: true,
        type: actionPropertyToSdkPropertyDefinition(value.dataType),
        nullable: value.required ? false : true,
      };
  }
}

function actionPropertyToSdkPropertyDefinition(
  parameterType: ActionParameterType,
): keyof ValidActionParameterTypes | { objectSet: any } | { object: any } {
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
      return { objectSet: parameterType.objectTypeApiName };
    case "object":
      return { object: parameterType.objectTypeApiName };
    case "array":
      return actionPropertyToSdkPropertyDefinition(parameterType.subType);
  }
}
