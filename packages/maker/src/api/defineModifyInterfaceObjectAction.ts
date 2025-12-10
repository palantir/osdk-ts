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

import { convertMappingValue } from "../conversion/toMarketplace/convertMappingValue.js";
import { type ActionType } from "./action/ActionType.js";
import type { InterfaceActionTypeUserDefinition } from "./defineAction.js";
import {
  addNamespaceToActionDefinition,
  convertValidationRule,
  createDefaultParameterOrdering,
  createParameters,
  defineAction,
  getInterfaceParameterName,
  getNonNamespacedParameterName,
  isPropertyParameter,
  kebab,
  MODIFY_INTERFACE_OBJECT_PARAMETER,
  validateActionParameters,
  validateParameterOrdering,
} from "./defineAction.js";
import { getFlattenedInterfaceProperties } from "./interface/getFlattenedInterfaceProperties.js";

export function defineModifyInterfaceObjectAction(
  def: InterfaceActionTypeUserDefinition,
): ActionType {
  addNamespaceToActionDefinition(def);
  const allProperties = getFlattenedInterfaceProperties(def.interfaceType);
  validateActionParameters(
    def,
    Object.keys(allProperties),
    def.interfaceType.apiName,
  );
  const sptNames = Object.keys(allProperties).filter(apiName =>
    isPropertyParameter(
      def,
      apiName,
      allProperties[apiName].sharedPropertyType.type,
    )
  );
  const parameterNames = new Set(
    sptNames.map(apiName => getInterfaceParameterName(def, apiName)),
  );
  const propertyMap = Object.fromEntries(
    Object.entries(allProperties).map((
      [id, prop],
    ) => [getInterfaceParameterName(def, id), prop.sharedPropertyType]),
  );

  Object.keys(def.parameterConfiguration ?? {}).forEach(param =>
    parameterNames.add(
      getInterfaceParameterName(def, param),
    )
  );
  parameterNames.add(MODIFY_INTERFACE_OBJECT_PARAMETER);
  const actionApiName = def.apiName ?? `modify-${
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
    if (!def.parameterOrdering.includes(MODIFY_INTERFACE_OBJECT_PARAMETER)) {
      def.parameterOrdering.unshift(MODIFY_INTERFACE_OBJECT_PARAMETER);
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
      Object.entries(allProperties).map(([id, prop]) => [id, prop.required]),
    ),
  );
  const mappings = Object.fromEntries(
    Object.entries(def.nonParameterMappings ?? {}).map((
      [id, value],
    ) => [id, convertMappingValue(value)]),
  );

  return defineAction({
    apiName: actionApiName,
    displayName: def.displayName
      ?? `Modify ${def.interfaceType.displayMetadata.displayName}`,
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
        type: "modifyInterfaceRule",
        modifyInterfaceRule: {
          interfaceObjectToModifyParameter: "interfaceObjectToModifyParameter",
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
        MODIFY_INTERFACE_OBJECT_PARAMETER,
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
  });
}
