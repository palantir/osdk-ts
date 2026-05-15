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

import type {
  OntologyIrLogicRule,
  OntologyIrLogicRuleValue,
} from "@osdk/client.unstable";
import type { ActionParameter } from "../action/ActionParameter.js";
import type { ActionParameterAllowedValues } from "../action/ActionParameterAllowedValues.js";
import type { ActionParameterType } from "../action/ActionParameterType.js";
import { defineAction, kebab } from "../defineAction.js";
import { addNamespaceIfNone } from "../defineOntology.js";
import type {
  ActionLevelValidationV2Config,
  ParameterValidationV2Config,
  SectionV2Config,
} from "./actionValidation.js";
import type { ObjectV2Def } from "./defineObjectV2.js";

export type ActionPrimitiveType =
  | "boolean"
  | "string"
  | "integer"
  | "long"
  | "double"
  | "datetime"
  | "timestamp"
  | "attachment"
  | "marking";

/**
 * Simplified action parameter config for V2 APIs. Optional `validation`
 * field accepts the v1-shaped allowedValues / required / conditional
 * overrides for per-parameter validation rules.
 */
export type ActionParameterV2Config =
  | ActionPrimitiveType
  | {
    type: ActionPrimitiveType | "object" | "objectSet";
    objectType?: ObjectV2Def;
    nullable?: boolean;
    multiplicity?: boolean;
    description?: string;
    validation?: ParameterValidationV2Config;
  };

/**
 * Input configuration for defineActionV2.
 */
export interface ActionV2Config {
  apiName: string;
  displayName?: string;
  description?: string;
  parameters: Record<string, ActionParameterV2Config>;
  modifiedEntities?: Record<
    string,
    { created: boolean; modified: boolean; deleted?: boolean }
  >;
  /** Cross-parameter validation rules (action-level). */
  validation?: ActionLevelValidationV2Config;
  /** Form sections grouping parameters in the UI. */
  sections?: Array<SectionV2Config>;
  /** Explicit ordering of parameters in the form (default: declaration order). */
  parameterOrdering?: Array<string>;
}

/**
 * Branded intermediate type returned by defineActionV2.
 * Carries the full config as a type parameter for later use by finalizeTypes.
 */
export type ActionV2Def<T extends ActionV2Config = ActionV2Config> = T & {
  readonly __brand: "ActionV2Def";
};

function primitiveToV1(p: ActionPrimitiveType): ActionParameterType {
  if (p === "datetime") {
    return "date";
  }
  return p;
}

function toV1ParamType(param: ActionParameterV2Config): ActionParameterType {
  if (typeof param === "string") {
    return primitiveToV1(param);
  }
  if (param.type === "object") {
    if (!param.objectType) {
      throw new Error(`Action parameter type "object" requires objectType`);
    }
    return {
      type: "objectReference",
      objectReference: {
        objectTypeId: param.objectType.__v1Def.apiName,
      },
    };
  }
  if (param.type === "objectSet") {
    if (!param.objectType) {
      throw new Error(`Action parameter type "objectSet" requires objectType`);
    }
    return {
      type: "objectSetRid",
      objectSetRid: {
        objectTypeId: param.objectType.__v1Def.apiName,
      },
    };
  }
  return primitiveToV1(param.type);
}

function getAllowedValues(
  primType: string,
): ActionParameterAllowedValues {
  switch (primType) {
    case "boolean":
      return { type: "boolean" };
    case "string":
      return { type: "text" };
    case "integer":
    case "long":
    case "double":
      return { type: "range" };
    case "datetime":
    case "date":
    case "timestamp":
      return { type: "datetime" };
    case "attachment":
      return { type: "attachment" };
    case "marking":
      return { type: "mandatoryMarking" };
    default:
      return { type: "text" };
  }
}

function buildV1Parameters(
  params: Record<string, ActionParameterV2Config>,
): ActionParameter[] {
  return Object.entries(params).map(([id, param]) => {
    const isNullable = typeof param === "object" && param.nullable === true;
    const primType = typeof param === "string" ? param : param.type;
    const isObjectParam = typeof param === "object"
      && (param.type === "object" || param.type === "objectSet");
    const userValidation = typeof param === "object"
      ? param.validation
      : undefined;
    const defaultRequired = !isNullable;
    const defaultAllowedValues = isObjectParam
      ? { type: "objectQuery" as const }
      : getAllowedValues(primType);
    return {
      id,
      displayName: (typeof param === "object" && param.description) || id,
      type: toV1ParamType(param),
      validation: {
        required: userValidation?.required ?? defaultRequired,
        allowedValues: userValidation?.allowedValues ?? defaultAllowedValues,
        ...(userValidation?.defaultVisibility !== undefined
          && { defaultVisibility: userValidation.defaultVisibility }),
        ...(userValidation?.conditionalOverrides !== undefined
          && { conditionalOverrides: userValidation.conditionalOverrides }),
      },
    } as ActionParameter;
  });
}

function findObjectParamId(
  parameters: Record<string, ActionParameterV2Config>,
  entityName: string,
): string | undefined {
  return Object.entries(parameters).find(
    ([_, p]) =>
      typeof p === "object" && p.type === "object"
      && p.objectType?.apiName === entityName,
  )?.[0];
}

function buildPropertyValues(
  parameters: Record<string, ActionParameterV2Config>,
): Record<string, OntologyIrLogicRuleValue> {
  const propertyValues: Record<string, OntologyIrLogicRuleValue> = {};
  for (const [paramId, param] of Object.entries(parameters)) {
    const isObjectParam = typeof param === "object"
      && (param.type === "object" || param.type === "objectSet");
    if (!isObjectParam) {
      propertyValues[paramId] = {
        type: "parameterId",
        parameterId: paramId,
      };
    }
  }
  return propertyValues;
}

function buildV1Rules(config: ActionV2Config): OntologyIrLogicRule[] {
  const rules: OntologyIrLogicRule[] = [];
  if (!config.modifiedEntities) {
    throw new Error(
      `Action "${config.apiName}" must declare modifiedEntities so the IR `
        + `knows what to do with its parameters`,
    );
  }

  for (
    const [entityName, { created, modified, deleted }] of Object.entries(
      config.modifiedEntities,
    )
  ) {
    const objectParamId = findObjectParamId(config.parameters, entityName);
    const namespacedEntityName = addNamespaceIfNone(entityName);

    if (deleted && objectParamId) {
      rules.push({
        type: "deleteObjectRule",
        deleteObjectRule: { objectToDelete: objectParamId },
      });
    } else if (created && modified && objectParamId) {
      rules.push({
        type: "addOrModifyObjectRuleV2",
        addOrModifyObjectRuleV2: {
          objectToModify: objectParamId,
          propertyValues: buildPropertyValues(config.parameters),
          structFieldValues: {},
        },
      });
    } else if (created) {
      rules.push({
        type: "addObjectRule",
        addObjectRule: {
          objectTypeId: namespacedEntityName,
          propertyValues: buildPropertyValues(config.parameters),
          structFieldValues: {},
        },
      });
    } else if (modified && objectParamId) {
      rules.push({
        type: "modifyObjectRule",
        modifyObjectRule: {
          objectToModify: objectParamId,
          propertyValues: buildPropertyValues(config.parameters),
          structFieldValues: {},
        },
      });
    }
  }

  if (rules.length === 0) {
    throw new Error(
      `Action "${config.apiName}" produced no logic rules. Check that `
        + `modifiedEntities flags map to a valid create/modify/delete shape, `
        + `and that modify/delete rules have a matching object parameter.`,
    );
  }

  return rules;
}

/**
 * Define an action type that produces types compatible with the OSDK client.
 *
 * Delegates to the existing defineAction() for maker state registration,
 * then returns a branded config for use with finalizeTypes().
 */
export function defineActionV2<const T extends ActionV2Config>(
  config: T,
): ActionV2Def<T> {
  const v1ApiName = kebab(config.apiName);

  const affectedObjectTypes = config.modifiedEntities
    ? Object.keys(config.modifiedEntities).map(addNamespaceIfNone)
    : [];

  defineAction({
    apiName: v1ApiName,
    displayName: config.displayName ?? config.apiName,
    description: config.description,
    status: "active",
    parameters: buildV1Parameters(config.parameters),
    rules: buildV1Rules(config),
    entities: {
      affectedObjectTypes,
      affectedInterfaceTypes: [],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    ...(config.validation !== undefined
      && { actionLevelValidation: config.validation }),
    ...(config.sections !== undefined && {
      sections: Object.fromEntries(
        config.sections.map(section => [section.id, section]),
      ),
    }),
    ...(config.parameterOrdering !== undefined
      && { parameterOrdering: config.parameterOrdering }),
  });

  return config as ActionV2Def<T>;
}
