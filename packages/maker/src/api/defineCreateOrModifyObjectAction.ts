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
  CREATE_OR_MODIFY_OBJECT_PARAMETER,
  createDefaultParameterOrdering,
  createParameters,
  defineAction,
  kebab,
  validateActionParameters,
  validateParameterOrdering,
} from "./defineAction.js";
import { isStruct } from "./properties/PropertyTypeType.js";

export function defineCreateOrModifyObjectAction(
  def: ActionTypeUserDefinition,
): ActionType {
  validateActionParameters(
    def,
    Object.keys(def.objectType.properties ?? {}),
    def.objectType.apiName,
  );
  const propertiesWithDerivedDatasources = (def.objectType.datasources ?? [])
    .filter(ds => ds.type === "derived").flatMap(ds =>
      Object.keys(ds.propertyMapping)
    );
  const propertyParameters = Object.keys(def.objectType.properties ?? {})
    .filter(
      id =>
        !Object.keys(def.nonParameterMappings ?? {}).includes(id)
        && !def.excludedProperties?.includes(id)
        && !isStruct(def.objectType.properties?.[id].type!)
        && id !== def.objectType.primaryKeyPropertyApiName
        && !propertiesWithDerivedDatasources.includes(id),
    );
  const parameterNames = new Set(propertyParameters);
  Object.keys(def.parameterConfiguration ?? {}).forEach(param =>
    parameterNames.add(param)
  );
  parameterNames.add(CREATE_OR_MODIFY_OBJECT_PARAMETER);
  const actionApiName = def.apiName
    ?? `create-or-modify-${
      kebab(def.objectType.apiName.split(".").pop() ?? def.objectType.apiName)
    }`;
  if (def.parameterOrdering) {
    if (!def.parameterOrdering.includes(CREATE_OR_MODIFY_OBJECT_PARAMETER)) {
      def.parameterOrdering.unshift(CREATE_OR_MODIFY_OBJECT_PARAMETER);
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
            parameterId: CREATE_OR_MODIFY_OBJECT_PARAMETER,
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
    displayName: def.displayName
      ?? `Create or Modify ${def.objectType.displayName}`,
    parameters: parameters,
    status: def.status ?? "active",
    rules: [{
      type: "addOrModifyObjectRuleV2",
      addOrModifyObjectRuleV2: {
        objectToModify: CREATE_OR_MODIFY_OBJECT_PARAMETER,
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
        CREATE_OR_MODIFY_OBJECT_PARAMETER,
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
