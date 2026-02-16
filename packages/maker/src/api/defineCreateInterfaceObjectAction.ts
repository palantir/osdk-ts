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

import {
  convertInterfacePropertyMappingValue,
  convertMappingValue,
} from "../conversion/toMarketplace/convertMappingValue.js";
import { type ActionType } from "./action/ActionType.js";
import { cloneDefinition } from "./cloneDefinition.js";
import type { InterfaceActionTypeUserDefinition } from "./defineAction.js";
import {
  convertValidationRule,
  CREATE_INTERFACE_OBJECT_PARAMETER,
  createDefaultParameterOrdering,
  createParameters,
  defineAction,
  getInterfaceParameterName,
  getNonNamespacedParameterName,
  isPropertyParameter,
  kebab,
  validateActionParameters,
  validateParameterOrdering,
} from "./defineAction.js";
import { getFlattenedInterfaceProperties } from "./interface/getFlattenedInterfaceProperties.js";
import {
  getInterfacePropertyTypeType,
  isInterfaceSharedPropertyType,
} from "./interface/InterfacePropertyType.js";

export function defineCreateInterfaceObjectAction(
  defInput: InterfaceActionTypeUserDefinition,
): ActionType {
  const def = cloneDefinition(defInput);
  const allProperties = getFlattenedInterfaceProperties(def.interfaceType);
  validateActionParameters(
    def,
    Object.keys(allProperties),
    def.interfaceType.apiName,
  );
  const actionInterfaceProperties = Object.entries(allProperties).filter((
    [apiName, type],
  ) =>
    isPropertyParameter(
      def,
      apiName,
      getInterfacePropertyTypeType(type),
    )
  );
  const sptNames = actionInterfaceProperties
    .filter(([_apiName, type]) => isInterfaceSharedPropertyType(type))
    .map(([apiName]) => apiName);

  const parameterNames = new Set(
    actionInterfaceProperties.map(([apiName, _type]) =>
      getInterfaceParameterName(def, apiName)
    ),
  );
  const propertyMap = Object.fromEntries(
    Object.entries(allProperties).map((
      [id, prop],
    ) => [getInterfaceParameterName(def, id), prop]),
  );

  Object.keys(def.parameterConfiguration ?? {}).forEach(param =>
    parameterNames.add(getInterfaceParameterName(def, param))
  );
  parameterNames.add(CREATE_INTERFACE_OBJECT_PARAMETER);
  const actionApiName = def.apiName ?? `create-${
    kebab(
      def.interfaceType.apiName.split(".").pop() ?? def.interfaceType.apiName,
    )
  }${
    def.objectType === undefined
      ? ""
      : `-${
        kebab(
          def.objectType.apiName.split(".").pop() ?? def.objectType.apiName,
        )
      }`
  }`;
  if (def.parameterOrdering) {
    if (!def.parameterOrdering.includes(CREATE_INTERFACE_OBJECT_PARAMETER)) {
      def.parameterOrdering.unshift(CREATE_INTERFACE_OBJECT_PARAMETER);
    }
    validateParameterOrdering(
      def.parameterOrdering,
      parameterNames,
      actionApiName,
    );
  }
  const parameters = createParameters(
    def,
    propertyMap,
    parameterNames,
    Object.fromEntries(
      Object.entries(allProperties).map((
        [id, prop],
      ) => [id, prop.required ?? true]),
    ),
  );
  let sptMappings = {};
  const mappings = Object.fromEntries(
    Object.entries(def.nonParameterMappings ?? {}).map((
      [id, value],
    ) => {
      if (sptNames.includes(id)) {
        sptMappings = {
          ...sptMappings,
          [id]: convertMappingValue(value),
        };
      }
      return [id, convertInterfacePropertyMappingValue(value)];
    }),
  );

  return defineAction({
    apiName: actionApiName,
    displayName: def.displayName
      ?? `Create ${def.interfaceType.displayMetadata.displayName}`,
    parameters: parameters,
    status: def.status ?? (def.interfaceType.status.type !== "deprecated"
      ? def.interfaceType.status.type
      : def.interfaceType.status),
    entities: {
      affectedInterfaceTypes: [def.interfaceType.apiName],
      affectedObjectTypes: [],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    rules: [
      {
        type: "addInterfaceRule",
        addInterfaceRule: {
          interfaceApiName: def.interfaceType.apiName,
          objectTypeParameter: CREATE_INTERFACE_OBJECT_PARAMETER,
          sharedPropertyValues: {
            ...Object.fromEntries(
              sptNames.map(
                id => [id, {
                  type: "parameterId",
                  parameterId: def.useNonNamespacedParameters
                    ? getNonNamespacedParameterName(def, id)
                    : id,
                }],
              ),
            ),
            ...sptMappings,
          },
          interfacePropertyValues: {
            ...Object.fromEntries(
              actionInterfaceProperties
                .map(([id, _type]) => [
                  id,
                  {
                    type: "logicRuleValue",
                    logicRuleValue: {
                      type: "parameterId",
                      parameterId: def.useNonNamespacedParameters
                        ? getNonNamespacedParameterName(def, id)
                        : id,
                    },
                  },
                ]),
            ),
            ...mappings,
          },
        },
      },
    ],
    parameterOrdering: def.parameterOrdering
      ?? createDefaultParameterOrdering(
        def,
        Array.from(parameterNames),
        parameters,
        CREATE_INTERFACE_OBJECT_PARAMETER,
      ),
    ...(def.actionLevelValidation
      ? {
        validation: convertValidationRule(
          def.actionLevelValidation,
          parameters,
        ),
      }
      : {}),
    ...(def.defaultFormat && { defaultFormat: def.defaultFormat }),
    ...(def.enableLayoutSwitch
      && { enableLayoutSwitch: def.enableLayoutSwitch }),
    ...(def.tableConfiguration && {
      displayAndFormat: {
        table: def.tableConfiguration,
      },
    }),
    ...(def.sections
      && {
        sections: Object.fromEntries(
          def.sections.map(section => [section.id, section]),
        ),
      }),
    ...(def.submissionMetadata
      && { submissionMetadata: def.submissionMetadata }),
    ...(def.icon && { icon: def.icon }),
  });
}
