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

import type { ActionParameter } from "../action/ActionParameter.js";
import type { ActionParameterType } from "../action/ActionParameterType.js";
import { defineAction, kebab } from "../defineAction.js";
import { addNamespaceIfNone } from "../defineOntology.js";
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
 * Simplified action parameter config for V2 APIs.
 */
export type ActionParameterV2Config =
  | ActionPrimitiveType
  | {
    type: ActionPrimitiveType | "object" | "objectSet";
    objectType?: ObjectV2Def;
    nullable?: boolean;
    multiplicity?: boolean;
    description?: string;
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
}

/**
 * Branded intermediate type returned by defineActionV2.
 * Carries the full config as a type parameter for later use by finalizeTypes.
 */
export type ActionV2Def<T extends ActionV2Config = ActionV2Config> = T & {
  readonly __brand: "ActionV2Def";
};

/** Map a V2 parameter type to V1 ActionParameterType */
function toV1ParamType(param: ActionParameterV2Config): ActionParameterType {
  if (typeof param === "string") {
    // Map V2 primitive names to V1 names
    if (param === "datetime") return "date";
    return param;
  }
  if (param.type === "object" && param.objectType) {
    return {
      type: "objectReference",
      objectReference: {
        objectTypeId: param.objectType.__v1Def.apiName,
      },
    } as unknown as ActionParameterType;
  }
  if (param.type === "objectSet" && param.objectType) {
    return {
      type: "objectSetRid",
      objectSetRid: {
        objectTypeId: param.objectType.__v1Def.apiName,
      },
    } as unknown as ActionParameterType;
  }
  const baseType = param.type === "datetime" ? "date" : param.type;
  return baseType as ActionParameterType;
}

/** Map a primitive type to V1 allowedValues */
function getAllowedValues(
  primType: string,
): Record<string, unknown> {
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
      return { type: "marking" };
    default:
      return { type: "text" };
  }
}

/** Build V1 ActionParameter array from V2 config */
function buildV1Parameters(
  params: Record<string, ActionParameterV2Config>,
): ActionParameter[] {
  return Object.entries(params).map(([id, param]) => {
    const isNullable = typeof param === "object" && param.nullable === true;
    const primType = typeof param === "string" ? param : param.type;
    const isObjectParam = typeof param === "object"
      && (param.type === "object" || param.type === "objectSet");
    return {
      id,
      displayName: (typeof param === "object" && param.description) || id,
      type: toV1ParamType(param),
      validation: {
        required: !isNullable,
        allowedValues: isObjectParam
          ? { type: "objectQuery" }
          : getAllowedValues(primType),
      },
    } as ActionParameter;
  });
}

/** Build V1 logic rules from modifiedEntities */
function buildV1Rules(
  config: ActionV2Config,
): Array<Record<string, unknown>> {
  const rules: Array<Record<string, unknown>> = [];

  if (config.modifiedEntities) {
    for (
      const [entityName, { created, modified, deleted }] of Object.entries(
        config.modifiedEntities,
      )
    ) {
      // Find the object param that references this entity (for modify/delete)
      const objectParamId = Object.entries(config.parameters).find(
        ([_, p]) =>
          typeof p === "object" && p.type === "object"
          && p.objectType?.apiName === entityName,
      )?.[0];

      // Apply namespace to entity name
      const namespacedEntityName = addNamespaceIfNone(entityName);

      if (deleted && objectParamId) {
        // Delete rule
        rules.push({
          type: "deleteObjectRule",
          deleteObjectRule: {
            objectToDelete: objectParamId,
          },
        });
      } else if (created && !modified) {
        // Create rule: map all non-object params as property values
        const propertyValues: Record<string, unknown> = {};
        for (const [paramId, param] of Object.entries(config.parameters)) {
          const isObjectParam = typeof param === "object"
            && (param.type === "object" || param.type === "objectSet");
          if (!isObjectParam) {
            propertyValues[paramId] = {
              type: "parameterId",
              parameterId: paramId,
            };
          }
        }
        rules.push({
          type: "addObjectRule",
          addObjectRule: {
            objectTypeId: namespacedEntityName,
            propertyValues,
            structFieldValues: {},
          },
        });
      } else if (modified && objectParamId) {
        // Modify rule
        const propertyValues: Record<string, unknown> = {};
        for (const [paramId, param] of Object.entries(config.parameters)) {
          const isObjectParam = typeof param === "object"
            && (param.type === "object" || param.type === "objectSet");
          if (!isObjectParam) {
            propertyValues[paramId] = {
              type: "parameterId",
              parameterId: paramId,
            };
          }
        }
        rules.push({
          type: "modifyObjectRule",
          modifyObjectRule: {
            objectToModify: objectParamId,
            propertyValues,
            structFieldValues: {},
          },
        });
      }
    }
  }

  // Fallback: if no rules could be derived, add a minimal addObjectRule
  if (rules.length === 0) {
    rules.push({
      type: "addObjectRule",
      addObjectRule: {
        objectTypeId: "unknown",
        propertyValues: {},
        structFieldValues: {},
      },
    });
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
    rules: buildV1Rules(config) as any,
    entities: {
      affectedObjectTypes,
      affectedInterfaceTypes: [],
      affectedLinkTypes: [],
      typeGroups: [],
    },
  });

  return config as ActionV2Def<T>;
}
