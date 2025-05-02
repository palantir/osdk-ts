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

import type { ParameterId } from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import { namespace, ontologyDefinition } from "./defineOntology.js";
import type {
  ActionParameterAllowedValues,
  ActionParameterType,
  ActionParameterTypePrimitive,
  ActionType,
  InterfaceType,
  ObjectType,
  SharedPropertyType,
} from "./types.js";

export function defineCreateAction(
  interfaceType: InterfaceType,
  objectType?: ObjectType,
): ActionType {
  return defineAction({
    apiName: `create-${
      kebab(interfaceType.apiName.split(".").pop() ?? interfaceType.apiName)
    }${
      objectType === undefined
        ? ""
        : `-${kebab(objectType.apiName.split(".").pop() ?? objectType.apiName)}`
    }`,
    displayName: `Create ${interfaceType.displayMetadata.displayName}`,
    parameters: [
      {
        id: "objectTypeParameter",
        displayName: "Object type to create",
        type: {
          type: "objectTypeReference",
          objectTypeReference: { interfaceTypeRids: [interfaceType.apiName] },
        },
        validation: {
          required: true,
          allowedValues: objectType === undefined
            ? {
              type: "objectTypeReference",
              interfaceTypes: [interfaceType.apiName],
            }
            : {
              type: "oneOf",
              oneOf: [{
                label: objectType.displayName,
                value: {
                  type: "objectType",
                  objectType: { objectTypeId: objectType.apiName },
                },
              }],
            },
        },
      },
      ...Object.entries(interfaceType.propertiesV2).map((
        [id, prop],
      ) => ({
        id,
        displayName: prop.sharedPropertyType.displayName
          ?? prop.sharedPropertyType.nonNameSpacedApiName,
        type: extractActionParameterTypeFromSpt(prop.sharedPropertyType),
        typeClasses: prop.sharedPropertyType.typeClasses ?? [],
        validation: {
          required: true,
          allowedValues: extractAllowedValuesFromSpt(
            prop.sharedPropertyType,
          ),
        },
      })),
    ],
    status: interfaceType.status.type !== "deprecated"
      ? interfaceType.status.type
      : interfaceType.status,
    rules: [
      {
        type: "addInterfaceRule",
        addInterfaceRule: {
          interfaceApiName: interfaceType.apiName,
          objectTypeParameter: "objectTypeParameter",
          sharedPropertyValues: Object.fromEntries(
            Object.entries(interfaceType.propertiesV2).map((
              [id, prop],
            ) => [id, { type: "parameterId", parameterId: id }]),
          ),
        },
      },
    ],
  });
}

export function defineModifyAction(
  interfaceType: InterfaceType,
  objectType?: ObjectType,
): ActionType {
  return defineAction({
    apiName: `modify-${
      kebab(interfaceType.apiName.split(".").pop() ?? interfaceType.apiName)
    }${
      objectType === undefined
        ? ""
        : `-${kebab(objectType.apiName.split(".").pop() ?? objectType.apiName)}`
    }`,
    displayName: `Modify ${interfaceType.displayMetadata.displayName}`,
    parameters: [
      {
        id: "interfaceObjectToModifyParameter",
        displayName: "Object type to modify",
        type: {
          type: "interfaceReference",
          interfaceReference: { interfaceTypeRid: interfaceType.apiName },
        },
        validation: {
          required: true,
          allowedValues: objectType === undefined
            ? { type: "interfaceObjectQuery" }
            : {
              type: "oneOf",
              oneOf: [{
                label: objectType.displayName,
                value: {
                  type: "objectType",
                  objectType: { objectTypeId: objectType.apiName },
                },
              }],
            },
        },
      },
      ...Object.entries(interfaceType.propertiesV2).map((
        [id, prop],
      ) => ({
        id,
        displayName: prop.sharedPropertyType.displayName
          ?? prop.sharedPropertyType.nonNameSpacedApiName,
        type: extractActionParameterTypeFromSpt(prop.sharedPropertyType),
        typeClasses: prop.sharedPropertyType.typeClasses ?? [],
        validation: {
          required: true,
          allowedValues: extractAllowedValuesFromSpt(
            prop.sharedPropertyType,
          ),
        },
      })),
    ],
    status: interfaceType.status.type !== "deprecated"
      ? interfaceType.status.type
      : interfaceType.status,
    rules: [
      {
        type: "modifyInterfaceRule",
        modifyInterfaceRule: {
          interfaceObjectToModifyParameter: "interfaceObjectToModifyParameter",
          sharedPropertyValues: Object.fromEntries(
            Object.entries(interfaceType.propertiesV2).map((
              [id, prop],
            ) => [id, { type: "parameterId", parameterId: id }]),
          ),
        },
      },
    ],
  });
}

export function defineAction(actionDef: ActionType): ActionType {
  const apiName = namespace + actionDef.apiName;
  const parameterIds = (actionDef.parameters ?? []).map(p => p.id);

  if (ontologyDefinition.actionTypes[apiName] !== undefined) {
    throw new Error(
      `Action type with apiName ${actionDef.apiName} is already defined`,
    );
  }
  invariant(
    /^[a-z0-9]+(-[a-z0-9]+)*$/.test(actionDef.apiName),
    `Action type apiName "${actionDef.apiName}" must be alphanumeric, lowercase, and kebab-case`,
  );

  const parameterIdsSet = new Set(parameterIds);
  invariant(
    parameterIdsSet.size === parameterIds.length,
    `Parameter ids must be unique`,
  );

  const parameterIdsNotFound = Array.from(referencedParameterIds(actionDef))
    .filter(p => !parameterIdsSet.has(p));
  invariant(
    parameterIdsNotFound.length === 0,
    `Parameters ${
      JSON.stringify(parameterIdsNotFound)
    } were referenced but not defined`,
  );

  const definedSectionIds = new Set(Object.keys(actionDef.sections ?? []));
  const undefinedSectionsInOrdering = (actionDef.formContentOrdering ?? [])
    .flatMap(
      s => s.type === "parameterId" ? [] : [s.sectionId],
    ).filter(sId => !definedSectionIds.has(sId));
  invariant(
    undefinedSectionsInOrdering.length === 0,
    `Sections [${undefinedSectionsInOrdering}] were referenced in content ordering but not defined`,
  );

  invariant(
    actionDef.rules.length > 0,
    `Action type ${actionDef.apiName} must have at least one logic rule`,
  );

  const fullAction = { ...actionDef, apiName: apiName };
  ontologyDefinition.actionTypes[apiName] = fullAction;
  return fullAction;
}

function referencedParameterIds(actionDef: ActionType): Set<ParameterId> {
  const parameterIds: Set<ParameterId> = new Set();

  // section definitions
  Object.values(actionDef.sections ?? {})
    .flatMap(p => p).forEach(pId => parameterIds.add(pId));

  // form content ordering
  (actionDef.formContentOrdering ?? []).forEach(item => {
    if (item.type === "parameterId") {
      parameterIds.add(item.parameterId);
    }
  });

  // logic rules
  actionDef.rules.forEach(rule => {
    // when visiting each rule, we also do drive-by namespace prefixing
    switch (rule.type) {
      case "addInterfaceRule":
        rule.addInterfaceRule.interfaceApiName = sanitize(
          rule.addInterfaceRule.interfaceApiName,
        );
        parameterIds.add(rule.addInterfaceRule.objectTypeParameter);
        Object.entries(rule.addInterfaceRule.sharedPropertyValues).forEach(
          ([k, v]) => {
            if (v.type === "parameterId") {
              parameterIds.add(v.parameterId);
            }
            rule.addInterfaceRule.sharedPropertyValues[sanitize(k)] = v;
            delete rule.addInterfaceRule.sharedPropertyValues[k];
          },
        );
        break;
      case "modifyInterfaceRule":
        parameterIds.add(
          rule.modifyInterfaceRule.interfaceObjectToModifyParameter,
        );
        Object.entries(rule.modifyInterfaceRule.sharedPropertyValues).forEach(
          ([k, v]) => {
            if (v.type === "parameterId") {
              parameterIds.add(v.parameterId);
            }
            rule.modifyInterfaceRule.sharedPropertyValues[sanitize(k)] = v;
            delete rule.modifyInterfaceRule.sharedPropertyValues[k];
          },
        );
        break;
    }
  });
  return parameterIds;
}

function extractAllowedValuesFromSpt(
  spt: SharedPropertyType,
): ActionParameterAllowedValues {
  switch (spt.type) {
    case "boolean":
      return { type: "boolean" };
    case "byte":
      return {
        type: "range",
        min: {
          type: "staticValue",
          staticValue: { type: "integer", integer: 0 },
        },
        max: {
          type: "staticValue",
          staticValue: { type: "integer", integer: 255 },
        },
      };
    case "timestamp":
    case "date":
      return { type: "datetime" };
    case "decimal":
    case "double":
    case "float":
    case "integer":
    case "long":
      return { type: "range" };
    case "short":
      return {
        type: "range",
        min: {
          type: "staticValue",
          staticValue: { type: "integer", integer: 0 },
        },
        max: {
          type: "staticValue",
          staticValue: { type: "integer", integer: 65535 },
        },
      };
    case "string":
      return { type: "text" };
    case "geopoint":
    case "geoshape":
      return { type: "geoshape" };
    case "mediaReference":
      return { type: "mediaReference" };
    case "geotimeSeries":
      return { type: "geotimeSeriesReference" };
    default:
      switch (spt.type.type) {
        case "marking":
          return spt.type.markingType === "CBAC"
            ? { type: "cbacMarking" }
            : { type: "mandatoryMarking" };
        case "struct":
          throw new Error("Structs are not supported yet");
        default:
          throw new Error("Unknown type");
      }
      break;
  }
}

function extractActionParameterTypeFromSpt(
  spt: SharedPropertyType,
): ActionParameterType {
  const typeType = spt.type;
  if (typeof typeType === "object") {
    switch (typeType.type) {
      case "marking":
        break;
      case "struct":
        break;
      default:
        throw new Error(`Unknown type`);
    }
  }
  if (
    typeof typeType === "string" && isActionParameterTypePrimitive(typeType)
  ) {
    return maybeAddList(typeType, spt);
  }
  switch (typeType) {
    case "byte":
    case "short":
      return maybeAddList("integer", spt);
    case "geopoint":
      return maybeAddList("geoshape", spt);
    case "float":
      return maybeAddList("double", spt);
    case "geotimeSeries":
      return maybeAddList("geotimeSeriesReference", spt);
    default:
      throw new Error("Unknown type");
  }
}

function maybeAddList(
  type: ActionParameterTypePrimitive,
  spt: SharedPropertyType,
): ActionParameterType {
  return ((spt.array ?? false) ? type + "List" : type) as ActionParameterType;
}

function isActionParameterTypePrimitive(
  type: string,
): type is ActionParameterTypePrimitive {
  return [
    "boolean",
    "booleanList",
    "integer",
    "integerList",
    "long",
    "longList",
    "double",
    "doubleList",
    "string",
    "stringList",
    "decimal",
    "decimalList",
    "timestamp",
    "timestampList",
    "geohash",
    "geohashList",
    "geoshape",
    "geoshapeList",
    "timeSeriesReference",
    "date",
    "dateList",
    "objectTypeReference",
    "attachment",
    "attachmentList",
    "marking",
    "markingList",
    "mediaReference",
    "mediaReferenceList",
    "geotimeSeriesReference",
    "geotimeSeriesReferenceList",
  ].includes(type);
}

function kebab(s: string): string {
  return s
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .replace(/\./g, "-")
    .toLowerCase();
}

function sanitize(s: string): string {
  return s.includes(".") ? s : namespace + s;
}
