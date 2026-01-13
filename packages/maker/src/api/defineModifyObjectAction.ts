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
import type { ActionTypeUserDefinition } from "./defineAction.js";
import {
  convertValidationRule,
  createDefaultParameterOrdering,
  createParameters,
  defineAction,
  isPropertyParameter,
  kebab,
  MODIFY_OBJECT_PARAMETER,
  validateActionParameters,
  validateParameterOrdering,
} from "./defineAction.js";

export function defineModifyObjectAction(
  def: ActionTypeUserDefinition,
): ActionType {
  validateActionParameters(
    def,
    Object.keys(def.objectType.properties ?? {}),
    def.objectType.apiName,
  );
  const propertyParameters = Object.keys(def.objectType.properties ?? {})
    .filter(
      id =>
        isPropertyParameter(def, id, def.objectType.properties?.[id].type!)
        && id !== def.objectType.primaryKeyPropertyApiName,
    );
  const parameterNames = new Set(propertyParameters);
  Object.keys(def.parameterConfiguration ?? {}).forEach(param =>
    parameterNames.add(param)
  );
  parameterNames.add(MODIFY_OBJECT_PARAMETER);
  const actionApiName = def.apiName
    ?? `modify-object-${
      kebab(def.objectType.apiName.split(".").pop() ?? def.objectType.apiName)
    }`;
  if (def.parameterOrdering) {
    if (!def.parameterOrdering.includes(MODIFY_OBJECT_PARAMETER)) {
      def.parameterOrdering.unshift(MODIFY_OBJECT_PARAMETER);
    }
    validateParameterOrdering(
      def.parameterOrdering,
      parameterNames,
      actionApiName,
    );
  }
  const parameters = createParameters(
    def,
    def.objectType.properties ?? {},
    parameterNames,
  );
  parameters.forEach(
    p => {
      // create prefilled parameters for object type properties unless overridden
      if (def.objectType.properties?.[p.id] && p.defaultValue === undefined) {
        p.defaultValue = {
          type: "objectParameterPropertyValue",
          objectParameterPropertyValue: {
            parameterId: MODIFY_OBJECT_PARAMETER,
            propertyTypeId: p.id,
          },
        };
      }
    },
  );

  const mappings = Object.fromEntries(
    Object.entries(def.nonParameterMappings ?? {}).map((
      [id, value],
    ) => [id, convertMappingValue(value)]),
  );

  return defineAction({
    apiName: actionApiName,
    displayName: def.displayName ?? `Modify ${def.objectType.displayName}`,
    parameters: parameters,
    status: def.status ?? "active",
    rules: [{
      type: "modifyObjectRule",
      modifyObjectRule: {
        objectToModify: MODIFY_OBJECT_PARAMETER,
        propertyValues: {
          ...Object.fromEntries(
            propertyParameters.map(
              p => [p, { type: "parameterId", parameterId: p }],
            ),
          ),
          ...mappings,
        },
        structFieldValues: {},
      },
    }],
    entities: {
      affectedInterfaceTypes: [],
      affectedObjectTypes: [def.objectType.apiName],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    parameterOrdering: def.parameterOrdering
      ?? createDefaultParameterOrdering(
        def,
        Object.keys(def.objectType.properties ?? {}),
        parameters,
        MODIFY_OBJECT_PARAMETER,
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
