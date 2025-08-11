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
import { consola } from "consola";
import invariant from "tiny-invariant";
import {
  convertToDisplayName,
  getAllInterfaceProperties,
} from "./defineObject.js";
import {
  namespace,
  ontologyDefinition,
  updateOntology,
} from "./defineOntology.js";
import { convertConditionDefinition } from "./ontologyUtils.js";
import {
  type ActionLevelValidationDefinition,
  type ActionParameter,
  type ActionParameterAllowedValues,
  type ActionParameterType,
  type ActionParameterTypePrimitive,
  type ActionType,
  type ActionTypeDefinition,
  type ActionTypeUserDefinition,
  type ActionValidationRule,
  type ConditionDefinition,
  type InterfaceType,
  type ObjectPropertyType,
  type ObjectPropertyTypeUserDefinition,
  type ObjectTypeDefinition,
  OntologyEntityTypeEnum,
  type PropertyTypeType,
  type PropertyTypeTypeStruct,
  type SharedPropertyType,
} from "./types.js";

export function defineCreateInterfaceObjectAction(
  interfaceType: InterfaceType,
  objectType?: ObjectTypeDefinition,
  validation?: ActionLevelValidationDefinition,
): ActionType {
  const allProperties = Object.entries(getAllInterfaceProperties(interfaceType))
    .filter(([_, prop]) => !isStruct(prop.sharedPropertyType.type));
  if (
    allProperties.length
      !== Object.entries(getAllInterfaceProperties(interfaceType)).length
  ) {
    consola.info(
      `Some properties on ${interfaceType.apiName} were skipped in the create action because they are structs`,
    );
  }
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
      ...allProperties.map((
        [id, prop],
      ) => ({
        id,
        displayName: prop.sharedPropertyType.displayName
          ?? prop.sharedPropertyType.nonNameSpacedApiName,
        type: extractActionParameterType(prop.sharedPropertyType),
        typeClasses: prop.sharedPropertyType.typeClasses ?? [],
        validation: {
          required: (prop.sharedPropertyType.array ?? false)
            ? { listLength: {} }
            : prop.required,
          allowedValues: extractAllowedValuesFromType(
            prop.sharedPropertyType.type,
          ),
        },
      })),
    ],
    status: interfaceType.status.type !== "deprecated"
      ? interfaceType.status.type
      : interfaceType.status,
    entities: {
      affectedInterfaceTypes: [interfaceType.apiName],
      affectedObjectTypes: [],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    rules: [
      {
        type: "addInterfaceRule",
        addInterfaceRule: {
          interfaceApiName: interfaceType.apiName,
          objectTypeParameter: "objectTypeParameter",
          sharedPropertyValues: Object.fromEntries(
            allProperties.map((
              [id, _prop],
            ) => [id, { type: "parameterId", parameterId: id }]),
          ),
        },
      },
    ],
    ...(validation
      ? {
        validation: [
          convertValidationRule(validation),
        ],
      }
      : {}),
  });
}

export function defineCreateObjectAction(
  def: ActionTypeUserDefinition,
): ActionType {
  Object.keys(def.parameterConfiguration ?? {}).forEach(id => {
    invariant(
      def.objectType.properties?.[id] !== undefined,
      `Property ${id} does not exist on ${def.objectType.apiName}`,
    );
  });
  (def.excludedProperties ?? []).forEach(id => {
    invariant(
      def.objectType.properties?.[id] !== undefined,
      `Property ${id} does not exist on ${def.objectType.apiName}`,
    );
  });

  const parameterNames = Object.keys(def.objectType.properties ?? {}).filter(
    id =>
      !def.excludedProperties?.includes(id)
      && !isStruct(def.objectType.properties?.[id].type!),
  );
  if (def.parameterOrdering) {
    const sortedOrdering = [...def.parameterOrdering].sort();
    const sortedParameterNames = [...parameterNames].sort();
    invariant(
      sortedOrdering.length === sortedParameterNames.length
        && sortedOrdering.every((name, index) =>
          name === sortedParameterNames[index]
        ),
      `Action parameter ordering for ${def.objectType.apiName} does not match non-excluded properties`,
    );
  }
  const parameters = createParameters(def, parameterNames, true);

  return defineAction({
    apiName: def.apiName
      ?? `create-object-${
        kebab(def.objectType.apiName.split(".").pop() ?? def.objectType.apiName)
      }`,
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
        propertyValues: Object.fromEntries(
          parameters.map(
            p => [p.id, { type: "parameterId", parameterId: p.id }],
          ),
        ),
        structFieldValues: {},
      },
    }],
    ...(def.actionLevelValidation
      ? {
        validation: [
          convertValidationRule(def.actionLevelValidation),
        ],
      }
      : {}),
    ...(def.defaultFormat && { defaultFormat: def.defaultFormat }),
    ...(def.enableLayoutSwitch
      && { enableLayoutSwitch: def.enableLayoutSwitch }),
    ...(def.displayAndFormat && { displayAndFormat: def.displayAndFormat }),
    ...(def.sections
      && {
        sections: Object.fromEntries(
          def.sections.map(section => [section.id, section]),
        ),
      }),
    ...(def.parameterOrdering && { parameterOrdering: def.parameterOrdering }),
  });
}

export function defineModifyInterfaceObjectAction(
  interfaceType: InterfaceType,
  objectType?: ObjectTypeDefinition,
  validation?: ActionLevelValidationDefinition,
): ActionType {
  const allProperties = Object.entries(getAllInterfaceProperties(interfaceType))
    .filter(([_, prop]) => !isStruct(prop.sharedPropertyType.type));
  if (
    allProperties.length
      !== Object.entries(getAllInterfaceProperties(interfaceType)).length
  ) {
    consola.info(
      `Some properties on ${interfaceType.apiName} were skipped in the modify action because they are structs`,
    );
  }
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
      ...allProperties.map((
        [id, prop],
      ) => ({
        id,
        displayName: prop.sharedPropertyType.displayName
          ?? prop.sharedPropertyType.nonNameSpacedApiName,
        type: extractActionParameterType(prop.sharedPropertyType),
        typeClasses: prop.sharedPropertyType.typeClasses ?? [],
        validation: {
          required: (prop.sharedPropertyType.array ?? false)
            ? { listLength: {} }
            : prop.required,
          allowedValues: extractAllowedValuesFromType(
            prop.sharedPropertyType.type,
          ),
        },
      })),
    ],
    status: interfaceType.status.type !== "deprecated"
      ? interfaceType.status.type
      : interfaceType.status,
    entities: {
      affectedInterfaceTypes: [interfaceType.apiName],
      affectedObjectTypes: [],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    rules: [
      {
        type: "modifyInterfaceRule",
        modifyInterfaceRule: {
          interfaceObjectToModifyParameter: "interfaceObjectToModifyParameter",
          sharedPropertyValues: Object.fromEntries(
            allProperties.map((
              [id, _prop],
            ) => [id, { type: "parameterId", parameterId: id }]),
          ),
        },
      },
    ],
    ...(validation
      ? {
        validation: [
          convertValidationRule(validation),
        ],
      }
      : {}),
  });
}

export function defineModifyObjectAction(
  def: ActionTypeUserDefinition,
): ActionType {
  Object.keys(def.parameterConfiguration ?? {}).forEach(id => {
    invariant(
      def.objectType.properties?.[id] !== undefined,
      `Property ${id} does not exist on ${def.objectType.apiName}`,
    );
  });
  (def.excludedProperties ?? []).forEach(id => {
    invariant(
      def.objectType.properties?.[id] !== undefined,
      `Property ${id} does not exist on ${def.objectType.apiName}`,
    );
  });

  const parameterNames = Object.keys(def.objectType.properties ?? {}).filter(
    id =>
      !def.excludedProperties?.includes(id)
      && !isStruct(def.objectType.properties?.[id].type!)
      && id !== def.objectType.primaryKeyPropertyApiName,
  );
  if (def.parameterOrdering) {
    const sortedOrdering = [...def.parameterOrdering].sort();
    const sortedParameterNames = [...parameterNames].sort();
    invariant(
      sortedOrdering.length === sortedParameterNames.length
        && sortedOrdering.every((name, index) =>
          name === sortedParameterNames[index]
        ),
      `Action parameter ordering for ${def.objectType.apiName} does not match non-excluded properties`,
    );
  }
  const parameters = createParameters(def, parameterNames, false);

  return defineAction({
    apiName: def.apiName
      ?? `modify-object-${
        kebab(def.objectType.apiName.split(".").pop() ?? def.objectType.apiName)
      }`,
    displayName: def.displayName ?? `Modify ${def.objectType.displayName}`,
    parameters: [
      {
        id: "objectToModifyParameter",
        displayName: "Modify object",
        type: {
          type: "objectReference",
          objectReference: { objectTypeId: def.objectType.apiName },
        },
        validation: {
          allowedValues: { type: "objectQuery" },
          required: true,
        },
      },
      ...parameters,
    ],
    status: def.status ?? "active",
    rules: [{
      type: "modifyObjectRule",
      modifyObjectRule: {
        objectToModify: "objectToModifyParameter",
        propertyValues: Object.fromEntries(
          parameters.map(
            p => [p.id, { type: "parameterId", parameterId: p.id }],
          ),
        ),
        structFieldValues: {},
      },
    }],
    entities: {
      affectedInterfaceTypes: [],
      affectedObjectTypes: [def.objectType.apiName],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    ...(def.actionLevelValidation
      ? {
        validation: [
          convertValidationRule(def.actionLevelValidation),
        ],
      }
      : {}),
    ...(def.defaultFormat && { defaultFormat: def.defaultFormat }),
    ...(def.enableLayoutSwitch
      && { enableLayoutSwitch: def.enableLayoutSwitch }),
    ...(def.displayAndFormat && { displayAndFormat: def.displayAndFormat }),
    ...(def.sections
      && {
        sections: Object.fromEntries(
          def.sections.map(section => [section.id, section]),
        ),
      }),
    ...(def.parameterOrdering && { parameterOrdering: def.parameterOrdering }),
  });
}

export function defineDeleteObjectAction(
  def: ActionTypeUserDefinition,
): ActionType {
  return defineAction({
    apiName: def.apiName
      ?? `delete-object-${
        kebab(def.objectType.apiName.split(".").pop() ?? def.objectType.apiName)
      }`,
    displayName: def.displayName ?? `Delete ${def.objectType.displayName}`,
    parameters: [
      {
        id: "objectToDeleteParameter",
        displayName: "Delete object",
        type: {
          type: "objectReference",
          objectReference: { objectTypeId: def.objectType.apiName },
        },
        validation: {
          required: true,
          allowedValues: { type: "objectQuery" },
        },
      },
    ],
    status: def.status ?? "active",
    rules: [{
      type: "deleteObjectRule",
      deleteObjectRule: {
        objectToDelete: "objectToDeleteParameter",
      },
    }],
    entities: {
      affectedInterfaceTypes: [],
      affectedObjectTypes: [def.objectType.apiName],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    ...(def.actionLevelValidation
      ? {
        validation: [
          convertValidationRule(def.actionLevelValidation),
        ],
      }
      : {}),
  });
}

export function defineCreateOrModifyObjectAction(
  def: ActionTypeUserDefinition,
): ActionType {
  Object.keys(def.parameterConfiguration ?? {}).forEach(id => {
    invariant(
      def.objectType.properties?.[id] !== undefined,
      `Property ${id} does not exist on ${def.objectType.apiName}`,
    );
  });
  (def.excludedProperties ?? []).forEach(id => {
    invariant(
      def.objectType.properties?.[id] !== undefined,
      `Property ${id} does not exist on ${def.objectType.apiName}`,
    );
  });

  const parameterNames = Object.keys(def.objectType.properties ?? {}).filter(
    id =>
      !def.excludedProperties?.includes(id)
      && !isStruct(def.objectType.properties?.[id].type!)
      && id !== def.objectType.primaryKeyPropertyApiName,
  );
  if (def.parameterOrdering) {
    const sortedOrdering = [...def.parameterOrdering].sort();
    const sortedParameterNames = [...parameterNames].sort();
    invariant(
      sortedOrdering.length === sortedParameterNames.length
        && sortedOrdering.every((name, index) =>
          name === sortedParameterNames[index]
        ),
      `Action parameter ordering for ${def.objectType.apiName} does not match non-excluded properties`,
    );
  }
  const parameters = createParameters(def, parameterNames, false);
  parameters.forEach(
    p => {
      if (p.defaultValue === undefined) {
        p.defaultValue = {
          type: "objectParameterPropertyValue",
          objectParameterPropertyValue: {
            parameterId: "objectToCreateOrModifyParameter",
            propertyTypeId: p.id,
          },
        };
      }
    },
  );

  return defineAction({
    apiName: def.apiName
      ?? `create-or-modify-${
        kebab(def.objectType.apiName.split(".").pop() ?? def.objectType.apiName)
      }`,
    displayName: def.displayName
      ?? `Create or Modify ${def.objectType.displayName}`,
    parameters: [
      {
        id: "objectToCreateOrModifyParameter",
        displayName: "Create or modify object",
        type: {
          type: "objectReference",
          objectReference: {
            objectTypeId: def.objectType.apiName,
            maybeCreateObjectOption:
              !def.primaryKeyOption || def.primaryKeyOption === "autoGenerated"
                ? {
                  type: "autoGenerated",
                  autoGenerated: {},
                }
                : {
                  type: "userInput",
                  userInput: {},
                },
          },
        },
        validation: {
          allowedValues: { type: "objectQuery" },
          required: true,
        },
      },
      ...parameters,
    ],
    status: def.status ?? "active",
    rules: [{
      type: "addOrModifyObjectRuleV2",
      addOrModifyObjectRuleV2: {
        objectToModify: "objectToCreateOrModifyParameter",
        propertyValues: Object.fromEntries(
          parameters.map(
            p => [p.id, { type: "parameterId", parameterId: p.id }],
          ),
        ),
        structFieldValues: {},
      },
    }],
    entities: {
      affectedInterfaceTypes: [],
      affectedObjectTypes: [def.objectType.apiName],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    ...(def.actionLevelValidation
      ? {
        validation: [
          convertValidationRule(def.actionLevelValidation),
        ],
      }
      : {}),
    ...(def.defaultFormat && { defaultFormat: def.defaultFormat }),
    ...(def.enableLayoutSwitch
      && { enableLayoutSwitch: def.enableLayoutSwitch }),
    ...(def.displayAndFormat && { displayAndFormat: def.displayAndFormat }),
    ...(def.sections
      && {
        sections: Object.fromEntries(
          def.sections.map(section => [section.id, section]),
        ),
      }),
    ...(def.parameterOrdering && { parameterOrdering: def.parameterOrdering }),
  });
}

export function defineAction(actionDef: ActionTypeDefinition): ActionType {
  const apiName = namespace + actionDef.apiName;
  const parameterIds = (actionDef.parameters ?? []).map(p => p.id);

  if (
    ontologyDefinition[OntologyEntityTypeEnum.ACTION_TYPE][apiName]
      !== undefined
  ) {
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
  actionDef.rules.forEach(rule => {
    if (rule.type === "modifyObjectRule") {
      invariant(
        parameterIds.some(id => id === rule.modifyObjectRule.objectToModify),
        `Object to modify parameter must be defined in parameters`,
      );
    }
    if (rule.type === "deleteObjectRule") {
      invariant(
        parameterIds.some(id => id === rule.deleteObjectRule.objectToDelete),
        `Object to delete parameter must be defined in parameters`,
      );
    }
  });

  const fullAction = {
    ...actionDef,
    apiName: apiName,
    entities: actionDef.entities ?? {
      affectedInterfaceTypes: [],
      affectedObjectTypes: [],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    __type: OntologyEntityTypeEnum.ACTION_TYPE,
  } as ActionType;
  validateActionValidation(fullAction);
  updateOntology(fullAction);
  return fullAction;
}

function createParameters(
  def: ActionTypeUserDefinition,
  parameterNames: string[],
  defaultRequired: boolean,
): Array<ActionParameter> {
  return Array.from(parameterNames).map(
    id => (
      {
        id,
        displayName: def.parameterConfiguration?.[id]?.displayName
          ?? def.objectType.properties?.[id].displayName
          ?? convertToDisplayName(id),
        type: extractActionParameterType(def.objectType.properties?.[id]!),
        validation: (def.parameterConfiguration?.[id] !== undefined)
          ? {
            ...def.parameterConfiguration?.[id],
            allowedValues: def.parameterConfiguration?.[id].allowedValues
              ?? extractAllowedValuesFromType(
                def.objectType.properties?.[id].type!,
              ),
            required: def.parameterConfiguration?.[id].required
              ?? defaultRequired,
          }
          : {
            required: (def.objectType.properties?.[id].array ?? false)
              ? {
                listLength: def.objectType.properties?.[id].nullability
                    ?.noEmptyCollections
                  ? { min: 1 }
                  : {},
              }
              : def.objectType.properties?.[id].nullability?.noNulls
                ?? defaultRequired,
            allowedValues: extractAllowedValuesFromType(
              def.objectType.properties?.[id].type!,
            ),
          },
        defaultValue: def.parameterConfiguration?.[id]?.defaultValue,
        description: def.parameterConfiguration?.[id]?.description,
      }
    ),
  );
}

function referencedParameterIds(
  actionDef: ActionTypeDefinition,
): Set<ParameterId> {
  const parameterIds: Set<ParameterId> = new Set();

  // section definitions
  Object.values(actionDef.sections ?? {})
    .flatMap(p => p.parameters).forEach(pId => parameterIds.add(pId));

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
            delete rule.addInterfaceRule.sharedPropertyValues[k];
            rule.addInterfaceRule.sharedPropertyValues[sanitize(k)] = v;
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
            delete rule.modifyInterfaceRule.sharedPropertyValues[k];
            rule.modifyInterfaceRule.sharedPropertyValues[sanitize(k)] = v;
          },
        );
        break;
      case "addObjectRule":
        Object.entries(rule.addObjectRule.propertyValues).forEach(([k, v]) => {
          if (v.type === "parameterId") {
            parameterIds.add(v.parameterId);
          }
        });
        break;
      case "modifyObjectRule":
        Object.entries(rule.modifyObjectRule.propertyValues).forEach(
          ([k, v]) => {
            if (v.type === "parameterId") {
              parameterIds.add(v.parameterId);
            }
          },
        );
        break;
      case "addOrModifyObjectRuleV2":
        Object.entries(rule.addOrModifyObjectRuleV2.propertyValues).forEach(
          ([k, v]) => {
            if (v.type === "parameterId") {
              parameterIds.add(v.parameterId);
            }
          },
        );
        break;
    }
  });
  return parameterIds;
}

function extractAllowedValuesFromType(
  type: PropertyTypeType,
): ActionParameterAllowedValues {
  switch (type) {
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
      return { type: "geohash" };
    case "geoshape":
      return { type: "geoshape" };
    case "mediaReference":
      return { type: "mediaReference" };
    case "geotimeSeries":
      return { type: "geotimeSeriesReference" };
    default:
      switch (type.type) {
        case "marking":
          return type.markingType === "CBAC"
            ? { type: "cbacMarking" }
            : { type: "mandatoryMarking" };
        case "string":
          return { type: "text" };
        case "struct":
          throw new Error("Structs are not supported yet");
        default:
          throw new Error("Unknown type");
      }
      break;
  }
}

function extractActionParameterType(
  pt:
    | SharedPropertyType
    | ObjectPropertyType
    | ObjectPropertyTypeUserDefinition,
): ActionParameterType {
  const typeType = pt.type;
  if (typeof typeType === "object") {
    switch (typeType.type) {
      case "marking":
        return maybeAddList("marking", pt);
      case "string":
        return maybeAddList("string", pt);
      case "struct":
        throw new Error("Structs are not supported yet");
      default:
        throw new Error(`Unknown type`);
    }
  }
  if (
    typeof typeType === "string" && isActionParameterTypePrimitive(typeType)
  ) {
    return maybeAddList(typeType, pt);
  }
  switch (typeType) {
    case "byte":
    case "short":
      return maybeAddList("integer", pt);
    case "geopoint":
      return maybeAddList("geohash", pt);
    case "float":
      return maybeAddList("double", pt);
    case "geotimeSeries":
      return maybeAddList("geotimeSeriesReference", pt);
    default:
      throw new Error("Unknown type");
  }
}

function maybeAddList(
  type: ActionParameterTypePrimitive,
  pt:
    | SharedPropertyType
    | ObjectPropertyType
    | ObjectPropertyTypeUserDefinition,
): ActionParameterType {
  return ((pt.array ?? false) ? type + "List" : type) as ActionParameterType;
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
    "objectReference",
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

function isStruct(type: PropertyTypeType): type is PropertyTypeTypeStruct {
  return typeof type === "object" && type.type === "struct";
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

function convertValidationRule(
  actionValidation: ActionLevelValidationDefinition,
): ActionValidationRule {
  return {
    condition: convertConditionDefinition(actionValidation.condition),
    displayMetadata: actionValidation.displayMetadata ?? {
      failureMessage: "Did not satisfy validation",
      typeClasses: [],
    },
  };
}

function validateActionValidation(action: ActionType): void {
  const seenParameterIds = new Set<ParameterId>();
  const parameterMap: Record<string, ActionParameter> =
    action.parameters?.reduce((acc, param) => {
      acc[param.id] = param;
      return acc;
    }, {} as Record<string, ActionParameter>) ?? {};
  const orderedParameters =
    action.parameterOrdering?.map(id => parameterMap[id]) ?? action.parameters;

  orderedParameters?.forEach(param => {
    param.validation.conditionalOverrides?.forEach(override => {
      validateActionCondition(
        override.condition,
        param.id,
        seenParameterIds,
        action.parameters,
      );
    });
    if (param.defaultValue?.type === "staticValue") {
      invariant(
        param.defaultValue.staticValue.type === param.type,
        `Default static value for parameter ${param.id} does not match type`,
      );
    }
    seenParameterIds.add(param.id);
  });
}

function validateActionCondition(
  condition: ConditionDefinition,
  currentParameterId: ParameterId,
  seenParameterIds: Set<ParameterId>,
  parameters?: ActionParameter[],
): void {
  switch (condition.type) {
    case "parameter":
      const overrideParamId = condition.parameterId;
      invariant(
        parameters?.some(p => p.id === overrideParamId),
        `Parameter condition on ${currentParameterId} is referencing unknown parameter ${overrideParamId}`,
      );
      invariant(
        overrideParamId !== currentParameterId,
        `Parameter condition on ${currentParameterId} is referencing itself`,
      );
      invariant(
        seenParameterIds.has(overrideParamId),
        `Parameter condition on ${currentParameterId} is referencing later parameter ${overrideParamId}`,
      );
      break;
    case "and":
      // this will not catch the niche edge case where users use the full syntax for unions
      if ("conditions" in condition) {
        condition.conditions.forEach(c =>
          validateActionCondition(
            c,
            currentParameterId,
            seenParameterIds,
            parameters,
          )
        );
      }
      break;
    case "or":
      if ("conditions" in condition) {
        condition.conditions.forEach(c =>
          validateActionCondition(
            c,
            currentParameterId,
            seenParameterIds,
            parameters,
          )
        );
      }
      break;
    case "comparison":
    case "group":
    case "not":
    case "markings":
    case "regex":
    case "redacted":
    case "true":
      break;
    default:
      throw new Error(
        `Unknown condition type on parameter ${currentParameterId}`,
      );
  }
}
