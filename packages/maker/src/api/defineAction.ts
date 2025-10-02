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
  OntologyIrParameterPrefill,
  ParameterId,
} from "@osdk/client.unstable";
import { consola } from "consola";
import invariant from "tiny-invariant";
import {
  convertToDisplayName,
  getAllInterfaceProperties,
} from "./defineObject.js";
import {
  importedTypes,
  namespace,
  ontologyDefinition,
  updateOntology,
} from "./defineOntology.js";
import {
  convertConditionDefinition,
  convertMappingValue,
} from "./ontologyUtils.js";
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
  CREATE_OR_MODIFY_OBJECT_PARAMETER,
  type InterfaceType,
  MODIFY_OBJECT_PARAMETER,
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
          allowedValues: extractAllowedValuesFromPropertyType(
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
        validation: convertValidationRule(validation),
      }
      : {}),
  });
}

export function defineCreateObjectAction(
  def: ActionTypeUserDefinition,
): ActionType {
  validateActionParameters(def);
  const propertyParameters = Object.keys(def.objectType.properties ?? {})
    .filter(
      id =>
        !Object.keys(def.nonParameterMappings ?? {}).includes(id)
        && !def.excludedProperties?.includes(id)
        && !isStruct(def.objectType.properties?.[id].type!),
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
  const parameters = createParameters(def, parameterNames);
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
      ?? createDefaultParameterOrdering(def, parameters),
    ...(def.actionLevelValidation
      ? {
        validation: convertValidationRule(def.actionLevelValidation),
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
    ...(def.submissionMetadata
      && { submissionMetadata: def.submissionMetadata }),
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
          allowedValues: extractAllowedValuesFromPropertyType(
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
        validation: convertValidationRule(validation),
      }
      : {}),
  });
}

export function defineModifyObjectAction(
  def: ActionTypeUserDefinition,
): ActionType {
  validateActionParameters(def);
  const propertyParameters = Object.keys(def.objectType.properties ?? {})
    .filter(
      id =>
        !Object.keys(def.nonParameterMappings ?? {}).includes(id)
        && !def.excludedProperties?.includes(id)
        && !isStruct(def.objectType.properties?.[id].type!)
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
      def.parameterOrdering = [
        MODIFY_OBJECT_PARAMETER,
        ...def.parameterOrdering,
      ];
    }
    validateParameterOrdering(
      def.parameterOrdering,
      parameterNames,
      actionApiName,
    );
  }
  const parameters = createParameters(def, parameterNames);
  parameters.forEach(
    p => {
      if (p.id !== MODIFY_OBJECT_PARAMETER && p.defaultValue === undefined) {
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
        parameters,
        MODIFY_OBJECT_PARAMETER,
      ),
    ...(def.actionLevelValidation
      ? {
        validation: convertValidationRule(def.actionLevelValidation),
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
    ...(def.submissionMetadata
      && { submissionMetadata: def.submissionMetadata }),
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
        validation: convertValidationRule(def.actionLevelValidation),
      }
      : {}),
  });
}

export function defineCreateOrModifyObjectAction(
  def: ActionTypeUserDefinition,
): ActionType {
  validateActionParameters(def);
  const propertyParameters = Object.keys(def.objectType.properties ?? {})
    .filter(
      id =>
        !Object.keys(def.nonParameterMappings ?? {}).includes(id)
        && !def.excludedProperties?.includes(id)
        && !isStruct(def.objectType.properties?.[id].type!)
        && id !== def.objectType.primaryKeyPropertyApiName,
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
      def.parameterOrdering = [
        CREATE_OR_MODIFY_OBJECT_PARAMETER,
        ...def.parameterOrdering,
      ];
    }
    validateParameterOrdering(
      def.parameterOrdering,
      parameterNames,
      actionApiName,
    );
  }
  const parameters = createParameters(def, parameterNames);
  parameters.forEach(
    p => {
      if (
        p.id !== CREATE_OR_MODIFY_OBJECT_PARAMETER
        && p.defaultValue === undefined
      ) {
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
        parameters,
        CREATE_OR_MODIFY_OBJECT_PARAMETER,
      ),
    ...(def.actionLevelValidation
      ? {
        validation: convertValidationRule(def.actionLevelValidation),
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
    ...(def.submissionMetadata
      && { submissionMetadata: def.submissionMetadata }),
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
    if (rule.type === "modifyInterfaceRule") {
      // all referenced SPTs exist globally
      Object.keys(rule.modifyInterfaceRule.sharedPropertyValues).forEach(
        spt => {
          invariant(
            ontologyDefinition.SHARED_PROPERTY_TYPE[spt] !== undefined
              || importedTypes.SHARED_PROPERTY_TYPE[spt] !== undefined,
            `Shared property type ${spt} does not exist.
            If this SPT was imported, you may need to use [spt.apiName] as the key so that it is qualified with the right namespace`,
          );
        },
      );

      // The there must be a parameter for the interface, and the interface there must exist
      const interfaceParam = actionDef.parameters!.find(p =>
        p.id === rule.modifyInterfaceRule.interfaceObjectToModifyParameter
      );
      invariant(
        interfaceParam !== undefined && typeof interfaceParam.type === "object"
          && (interfaceParam.type.type === "interfaceReference"
            || interfaceParam.type.type === "interfaceReferenceList"),
        `Interface object to modify parameter must be an interface reference`,
      );
      const interfaceReference =
        interfaceParam.type.type === "interfaceReference"
          ? interfaceParam.type.interfaceReference.interfaceTypeRid
          : interfaceParam.type.interfaceReferenceList.interfaceTypeRid;
      invariant(
        ontologyDefinition.INTERFACE_TYPE[interfaceReference] !== undefined
          || importedTypes.INTERFACE_TYPE[interfaceReference] !== undefined,
        `Interface type ${interfaceReference} does not exist`,
      );

      // All referenced SPTs must exist on the interface
      const interfaceType =
        ontologyDefinition.INTERFACE_TYPE[interfaceReference];
      Object.keys(rule.modifyInterfaceRule.sharedPropertyValues).forEach(
        spt => {
          invariant(
            Object.keys(getAllInterfaceProperties(interfaceType)).includes(spt),
            `Shared property type ${spt} does not exist in interface type ${interfaceReference}`,
          );
        },
      );
    }
    if (rule.type === "addInterfaceRule") {
      // All referenced SPTs must exist globally
      Object.keys(rule.addInterfaceRule.sharedPropertyValues).forEach(spt => {
        invariant(
          ontologyDefinition.SHARED_PROPERTY_TYPE[spt] !== undefined
            || importedTypes.SHARED_PROPERTY_TYPE[spt] !== undefined,
          `Shared property type ${spt} does not exist. 
          If this SPT was imported, you may need to use [spt.apiName] as the key so that it is qualified with the right namespace`,
        );
      });

      // The referenced interface must exist globally
      const interfaceType = ontologyDefinition
        .INTERFACE_TYPE[rule.addInterfaceRule.interfaceApiName]
        ?? importedTypes.INTERFACE_TYPE[rule.addInterfaceRule.interfaceApiName];
      invariant(
        interfaceType !== undefined,
        `Interface type ${rule.addInterfaceRule.interfaceApiName} does not exist`,
      );

      // All referenced SPTs must exist on the interface
      Object.keys(rule.addInterfaceRule.sharedPropertyValues).forEach(spt => {
        invariant(
          Object.keys(getAllInterfaceProperties(interfaceType)).includes(spt),
          `Shared property type ${spt} does not exist in interface type ${interfaceType.apiName}`,
        );
      });
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
  validateActionConfiguration(fullAction);
  updateOntology(fullAction);
  return fullAction;
}

function createParameters(
  def: ActionTypeUserDefinition,
  parameterSet: Set<string>,
): Array<ActionParameter> {
  const targetParam: Array<ActionParameter> = [];
  parameterSet.forEach(name => {
    if (name === MODIFY_OBJECT_PARAMETER) {
      targetParam.push({
        id: MODIFY_OBJECT_PARAMETER,
        displayName: def.parameterConfiguration?.[name]?.displayName
          ?? "Modify object",
        type: {
          type: "objectReference",
          objectReference: { objectTypeId: def.objectType.apiName },
        },
        validation: {
          ...def.parameterConfiguration?.[name],
          allowedValues: { type: "objectQuery" },
          required: def.parameterConfiguration?.[name]?.required ?? true,
        },
        defaultValue: def.parameterConfiguration?.[name]?.defaultValue,
        description: def.parameterConfiguration?.[name]?.description,
      });
      parameterSet.delete(MODIFY_OBJECT_PARAMETER);
    }
    if (name === CREATE_OR_MODIFY_OBJECT_PARAMETER) {
      targetParam.push({
        id: CREATE_OR_MODIFY_OBJECT_PARAMETER,
        displayName: def.parameterConfiguration?.[name]?.displayName
          ?? "Create or modify object",
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
          ...def.parameterConfiguration?.[name],
          allowedValues: { type: "objectQuery" },
          required: def.parameterConfiguration?.[name]?.required ?? true,
        },
        defaultValue: def.parameterConfiguration?.[name]?.defaultValue,
        description: def.parameterConfiguration?.[name]?.description,
      });
      parameterSet.delete(CREATE_OR_MODIFY_OBJECT_PARAMETER);
    }
  });
  return [
    ...targetParam,
    ...Array.from(parameterSet).map(
      id => (
        {
          id,
          displayName: def.parameterConfiguration?.[id]?.displayName
            ?? def.objectType.properties?.[id]?.displayName
            ?? convertToDisplayName(id),
          type: def.parameterConfiguration?.[id]?.customParameterType
            ?? extractActionParameterType(def.objectType.properties?.[id]!),
          validation: (def.parameterConfiguration?.[id] !== undefined)
            ? {
              ...def.parameterConfiguration?.[id],
              allowedValues: def.parameterConfiguration?.[id].allowedValues
                ?? (def.parameterConfiguration?.[id].customParameterType
                  ? extractAllowedValuesFromActionParameterType(
                    def.parameterConfiguration?.[id].customParameterType,
                  )
                  : extractAllowedValuesFromPropertyType(
                    def.objectType.properties?.[id].type!,
                  )),
              required: def.parameterConfiguration?.[id].required
                ?? (def.objectType.properties?.[id]?.nullability?.noNulls
                  ?? false),
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
                  ?? false,
              allowedValues: extractAllowedValuesFromPropertyType(
                def.objectType.properties?.[id].type!,
              ),
            },
          defaultValue: def.parameterConfiguration?.[id]?.defaultValue,
          description: def.parameterConfiguration?.[id]?.description,
        }
      ),
    ),
  ];
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

function extractAllowedValuesFromActionParameterType(
  type: ActionParameterType,
): ActionParameterAllowedValues {
  if (typeof type === "object") {
    switch (type.type) {
      case "objectReference":
      case "objectReferenceList":
        return { type: "objectQuery" };
      case "struct":
      case "structList":
        throw new Error("Structs are not supported yet");
      default:
        throw new Error(
          `Inferred allowed values for ${type.type} not yet supported. Please explicitly provide allowed values.`,
        );
    }
  }
  switch (type) {
    case "boolean":
    case "booleanList":
      return { type: "boolean" };
    case "integer":
    case "integerList":
    case "decimal":
    case "decimalList":
    case "double":
    case "doubleList":
    case "long":
    case "longList":
      return { type: "range" };
    case "timestamp":
    case "timestampList":
    case "date":
    case "dateList":
      return { type: "datetime" };
    case "string":
    case "stringList":
      return { type: "text" };
    case "geohash":
    case "geohashList":
      return { type: "geohash" };
    case "geoshape":
    case "geoshapeList":
      return { type: "geoshape" };
    case "mediaReference":
    case "mediaReferenceList":
      return { type: "mediaReference" };
    case "geotimeSeriesReference":
    case "geotimeSeriesReferenceList":
      return { type: "geotimeSeriesReference" };
    case "attachment":
    case "attachmentList":
      return { type: "attachment" };
    default:
      throw new Error(
        `Inferred allowed values for ${type} not yet supported. Please explicitly provide allowed values.`,
      );
  }
}

function extractAllowedValuesFromPropertyType(
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
): Array<ActionValidationRule> {
  return actionValidation.map(rule => {
    return {
      condition: convertConditionDefinition(rule.condition),
      displayMetadata: rule.displayMetadata ?? {
        failureMessage: "Did not satisfy validation",
        typeClasses: [],
      },
    };
  });
}

function validateActionConfiguration(action: ActionType): void {
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
      validateParameterCondition(
        override.condition,
        param.id,
        seenParameterIds,
        action.parameters,
      );
    });
    validateParameterPrefill(
      param.id,
      seenParameterIds,
      action.parameters,
      param.defaultValue,
    );
    seenParameterIds.add(param.id);
  });
}

function validateParameterCondition(
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
          validateParameterCondition(
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
          validateParameterCondition(
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

function validateParameterPrefill(
  currentParameterId: ParameterId,
  seenParameterIds: Set<ParameterId>,
  parameters?: ActionParameter[],
  defaultValue?: OntologyIrParameterPrefill,
): void {
  if (!defaultValue) return;
  switch (defaultValue.type) {
    case "objectParameterPropertyValue":
      invariant(
        parameters?.some(p =>
          p.id === defaultValue.objectParameterPropertyValue.parameterId
        ),
        `Default value for parameter ${currentParameterId} is referencing unknown parameter ${defaultValue.objectParameterPropertyValue.parameterId}`,
      );
      invariant(
        seenParameterIds.has(
          defaultValue.objectParameterPropertyValue.parameterId,
        ),
        `Default value for parameter ${currentParameterId} is referencing later parameter ${defaultValue.objectParameterPropertyValue.parameterId}`,
      );
      break;
    case "staticValue":
      invariant(
        defaultValue.staticValue.type
          === parameters?.find(p => p.id === currentParameterId)?.type,
        `Default static value for parameter ${currentParameterId} does not match type`,
      );
      break;
    case "staticObject":
    case "interfaceParameterPropertyValue":
    case "objectQueryPrefill":
    case "objectQueryPropertyValue":
    case "objectSetRidPrefill":
    case "redacted":
      break;
    default:
      throw new Error(
        `Unknown default value type for parameter ${currentParameterId}`,
      );
  }
}

function validateActionParameters(def: ActionTypeUserDefinition): void {
  // validates that parameters either exist as object properties or have a type defined
  [
    ...Object.keys(def.parameterConfiguration ?? {}),
  ].forEach(id => {
    invariant(
      def.objectType.properties?.[id] !== undefined
        || (def.parameterConfiguration?.[id].customParameterType !== undefined)
        || id === MODIFY_OBJECT_PARAMETER
        || id === CREATE_OR_MODIFY_OBJECT_PARAMETER,
      `Parameter ${id} does not exist as a property on ${def.objectType.apiName} and its type is not explicitly defined`,
    );
  });
  [
    ...Object.keys(def.nonParameterMappings ?? {}),
    ...def.excludedProperties ?? [],
  ].forEach(id => {
    invariant(
      def.objectType.properties?.[id] !== undefined,
      `Property ${id} does not exist as a property on ${def.objectType.apiName}`,
    );
  });
}

// Parameters with configurations will be ordered first in the order they were defined
// followed by the rest of the parameters in the order they were defined on the object type
function createDefaultParameterOrdering(
  def: ActionTypeUserDefinition,
  parameters: ActionParameter[],
  priorityId?: string,
): string[] {
  return [
    ...priorityId ? [priorityId] : [],
    ...Object.keys(def.parameterConfiguration ?? {}),
    ...Object.keys(def.objectType.properties ?? {}).filter(id =>
      !def.parameterConfiguration?.[id] && parameters.some(p => p.id === id)
    ),
  ];
}

function validateParameterOrdering(
  parameterOrdering: string[],
  parameterSet: Set<string>,
  actionApiName: string,
): void {
  const orderingSet = new Set(parameterOrdering);
  const missingParameters = [...parameterSet].filter(
    param => !orderingSet.has(param),
  );
  const extraneousParameters = parameterOrdering.filter(param =>
    !parameterSet.has(param)
  );
  invariant(
    extraneousParameters.length === 0
      && missingParameters.length === 0,
    `Action parameter ordering for ${actionApiName} does not match expected parameters. Extraneous parameters in ordering: {${extraneousParameters}}, Missing parameters in ordering: {${missingParameters}}`,
  );
}
