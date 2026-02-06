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
  validateActionParameters,
  validateParameterOrdering,
} from "./defineAction.js";
import { isStruct } from "./properties/PropertyTypeType.js";

export function defineCreateObjectAction(
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
        isPropertyParameter(def, id, def.objectType.properties?.[id].type!)
        && !isStruct(def.objectType.properties?.[id].type!)
        && !propertiesWithDerivedDatasources.includes(id),
    );
  const parameterNames = new Set(propertyParameters);
  Object.keys(def.parameterConfiguration ?? {}).forEach(param =>
    parameterNames.add(param)
  );
  const actionApiName = def.apiName
    ?? `create-object-${
      kebab(def.objectType.apiName.split(".").pop() ?? def.objectType.apiName)
    }`;
  if (def.parameterOrdering) {
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
  const mappings = Object.fromEntries(
    Object.entries(def.nonParameterMappings ?? {}).map((
      [id, value],
    ) => [id, convertMappingValue(value)]),
  );

  return defineAction({
    apiName: actionApiName,
    displayName: def.displayName ?? `Create ${def.objectType.displayName}`,
    parameters: parameters,
    status: def.status ?? "active",
    entities: {
      affectedInterfaceTypes: [],
      affectedObjectTypes: [def.objectType.apiName],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    rules: [{
      type: "addObjectRule",
      addObjectRule: {
        objectTypeId: def.objectType.apiName,
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
    parameterOrdering: def.parameterOrdering
      ?? createDefaultParameterOrdering(
        def,
        Object.keys(def.objectType.properties ?? {}),
        parameters,
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
