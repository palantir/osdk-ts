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
  ParameterId,
  OntologyIrBaseParameterType_struct,
  DelegateToAllowedStructFieldValues, // TODO(jcai): woo! this exists!
 } from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import {
  namespace,
  ontologyDefinition,
  updateOntology,
} from "./defineOntology.js";
import {
  type ActionParameterAllowedValues,
  type ActionParameterType,
  type ActionParameterTypePrimitive,
  type ActionType,
  type ActionTypeDefinition,
  type ActionValidationDefinition,
  type ActionValidationRule,
  type InterfaceType,
  type ObjectPropertyType,
  type ObjectType,
  OntologyEntityTypeEnum,
  type PropertyTypeType,
  type SharedPropertyType,
} from "./types.js";

export function defineCreateInterfaceObjectAction(
  interfaceType: InterfaceType,
  objectType?: ObjectType,
  validation?: ActionValidationDefinition,
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
          // need new field here: structFieldValues
          /*
                        {
                            "type": "modifyInterfaceRule",
                            "modifyInterfaceRule": {
                                "interfaceObjectToModify": "com.palantir.defense.ontology.mil2525CSymbol",
                                "sharedPropertyValues": {},
                                "structFieldValues": {
                                    "ri.ontology.main.shared-property.566fc910-e9a2-4c74-a775-94e80a5472f0": {
                                        "ri.ontology.main.struct-field.095d8bab-b48e-4090-90e3-761d1b7c654c": {
                                            "type": "structParameterFieldValue",
                                            "structParameterFieldValue": {
                                                "parameterId": "com.palantir.defense.ontology.mil2525Speed",
                                                "structFieldApiName": "speedValue"
                                            }
                                        },
                                        "ri.ontology.main.struct-field.de6a3818-0226-4dc5-a0a0-90f92386019e": {
                                            "type": "structParameterFieldValue",
                                            "structParameterFieldValue": {
                                                "parameterId": "com.palantir.defense.ontology.mil2525Speed",
                                                "structFieldApiName": "speedUnit"
                                            }
                                        }
                                    }
                                }
                            }
                        }
          */
        },
      },
    ],
    ...(validation
      ? {
        validation: [
          createValidationRule(validation),
          // TODO(jcai): 
          // this just does interfaceObjectQuery for allowedValues
          // no need to do any structFieldValidations
          // and metadata -> parameters -> interfaceReference, no need for anything else
        ],
      }
      : {}),
  });
}

export function defineCreateObjectAction(
  objectType: ObjectType,
  validation?: ActionValidationDefinition,
): ActionType {
  return defineAction({
    apiName: `create-object-${
      kebab(objectType.apiName.split(".").pop() ?? objectType.apiName)
    }`,
    displayName: `Create ${objectType.displayName}`,
    parameters: [
      ...(objectType.properties?.map(prop => ({
        id: prop.apiName,
        displayName: prop.displayName,
        type: extractActionParameterType(prop),
        validation: {
          required: true,
          allowedValues: extractAllowedValuesFromType(prop.type),
          // TODO(jcai): this is where metadata -> parameters -> validation goes
          // parameters -> struct -> type struct w structFieldTypes
          // parameters -> struct -> displayMetadata w structFieldsV2 (apiName and displayName)
          // deletes -> objectQuery
          // delete interface -> deleteObjectRule but w allowedValues interfaceObjectQuery
          // metadata > parameters -> interfaceReference"
        },
      })) ?? []),
    ],
    status: "active",
    rules: [{
      type: "addObjectRule",
      addObjectRule: {
        objectTypeId: objectType.apiName,
        propertyValues: objectType.properties
          ? Object.fromEntries(
            objectType.properties.filter(prop => !(typeof prop.type === "object" && prop.type?.type === "struct")).map(
              p => [p.apiName, { type: "parameterId", parameterId: p.apiName }],
            ),
          )
          : {},
        structFieldValues: objectType.properties
          ? Object.fromEntries(
            objectType.properties.filter(prop => (typeof prop.type === "object" && prop.type?.type === "struct")).map(
              (prop) => {
                // we know this but it is making me do this grr -- make less gross later
                if (typeof prop.type === "object" && prop.type?.type === "struct") {
                  // link OMS rid generation logic
                  const structFieldMapping = Object.fromEntries(
                    Object.entries(prop.type.structDefinition).map((
                      [fieldName, _fieldType],
                    ) => [
                      "ri.ontology-metadata.temp.struct-field." + fieldName,
                      { parameterId: prop.apiName, structFieldApiName: fieldName },
                    ]),
                  )
                  return [prop.apiName, structFieldMapping];
                }
                return [];
              }
            ),
          )
          : {}
      },
    }],
    ...(validation
      ? {
        validation: [
          createValidationRule(validation), // TODO(jcai): this validation's
          // parameterValidations must have struct -> allowedValues struct delegate
          // default seems to be editable, textInput, blah blah
          // and also parameterValidations -> structFieldValidations w base type
        ],
      }
      : {}),
  });
}

export function defineModifyInterfaceObjectAction(
  interfaceType: InterfaceType,
  objectType?: ObjectType,
  validation?: ActionValidationDefinition,
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
    ...(validation
      ? {
        validation: [
          createValidationRule(validation),
          // TODO(jcai): probs need to do same thing here as we do for OTs? maybe??
        ],
      }
      : {}),
  });
}

export function defineModifyObjectAction(
  objectType: ObjectType,
  validation?: ActionValidationDefinition,
): ActionType {
  return defineAction({
    apiName: `modify-object-${
      kebab(objectType.apiName.split(".").pop() ?? objectType.apiName)
    }`,
    displayName: `Modify ${objectType.displayName}`,
    parameters: [
      {
        id: "objectToModifyParameter",
        displayName: "Modify object",
        type: {
          type: "objectReference",
          objectReference: { objectTypeId: objectType.apiName },
        },
        validation: {
          allowedValues: { type: "objectQuery" },
          required: true,
        },
      },
      ...(objectType.properties?.map(prop => ({
        id: prop.apiName,
        displayName: prop.displayName,
        type: extractActionParameterType(prop),
        validation: {
          required: false,
          allowedValues: extractAllowedValuesFromType(prop.type),
        },
      })) ?? []),
    ],
    status: "active",
    rules: [
      {
        type: "modifyObjectRule",
        modifyObjectRule: {
          objectToModify: "objectToModifyParameter",
          propertyValues: objectType.properties
            ? Object.fromEntries(
              objectType.properties.map(
                p => [p.apiName, {
                  type: "parameterId",
                  parameterId: p.apiName,
                }],
              ),
            )
            : {},
          structFieldValues: {}, // TODO(jcai): struct things go here :)
        },
      },
    ],
    ...(validation
      ? {
        validation: [
          createValidationRule(validation), // TODO(jcai): this validation's
          // parameterValidations must have struct -> allowedValues struct delegate
          // default seems to be editable, textInput, blah blah
          // and also parameterValidations -> structFieldValidations w base type
          // what about parameterValidations???
          // modify -> objectQuery
          // create -> structFieldValidations
          // modifyInterface -> interfaceObjectQuery (no need for structFieldValidations, weirdly)
          // metadata - parameters -> interfaceReference
          // same structFieldValues
          // addInterface -> parametrValidation, allowedValues is objectTypeReference
          // metadata -> parameters -> objectTypeReference
          // rn do actions on interfaces work at all...
        ],
      }
      : {}),
  });
}

export function defineDeleteObjectAction(
  objectType: ObjectType,
  validation?: ActionValidationDefinition,
): ActionType {
  return defineAction({
    apiName: `delete-object-${
      kebab(objectType.apiName.split(".").pop() ?? objectType.apiName)
    }`,
    displayName: `Delete ${objectType.displayName}`,
    parameters: [
      {
        id: "objectToDeleteParameter",
        displayName: "Delete object",
        type: {
          type: "objectReference",
          objectReference: { objectTypeId: objectType.apiName },
        },
        validation: {
          required: true,
          allowedValues: { type: "objectQuery" },
        },
      },
    ],
    status: "active",
    rules: [
      {
        type: "deleteObjectRule",
        deleteObjectRule: {
          objectToDelete: "objectToDeleteParameter",
        },
      },
    ],
    ...(validation
      ? {
        validation: [
          createValidationRule(validation),
        ],
      }
      : {}),
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
    __type: OntologyEntityTypeEnum.ACTION_TYPE,
  } as ActionType;
  updateOntology(fullAction);
  return fullAction;
}

function referencedParameterIds(
  actionDef: ActionTypeDefinition,
): Set<ParameterId> {
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
        case "struct":
          return { type: "struct" };
        default:
          throw new Error("Unknown type");
      }
      break;
  }
}

function extractActionParameterType(
  pt: SharedPropertyType | ObjectPropertyType,
): ActionParameterType {
  const typeType = pt.type;
  if (typeof typeType === "object") {
    switch (typeType.type) {
      case "marking":
        return maybeAddList("marking", pt);
      case "struct":
        return ((pt.array ?? false) ? "structList" : "struct") as ActionParameterType;
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
  type: ActionParameterType,
  pt: SharedPropertyType | ObjectPropertyType,
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

function createValidationRule(
  actionValidation: ActionValidationDefinition,
): ActionValidationRule {
  if (!("type" in actionValidation)) {
    return actionValidation;
  }
  switch (actionValidation.type) {
    case "group":
      return {
        condition: {
          type: "comparison",
          comparison: {
            operator: "EQUALS",
            left: {
              type: "userProperty",
              userProperty: {
                userId: {
                  type: "currentUser",
                  currentUser: {},
                },
                propertyValue: {
                  type: "groupIds",
                  groupIds: {},
                },
              },
            },
            right: {
              type: "staticValue",
              staticValue: {
                type: "stringList",
                stringList: {
                  strings: [
                    actionValidation.name,
                  ],
                },
              },
            },
          },
        },
        displayMetadata: {
          failureMessage:
            "Insufficient permissions. Missing organization membership required to submit action",
          typeClasses: [],
        },
      };
    default:
      throw new Error(
        `Unknown action validation type: ${actionValidation.type}`,
      );
  }
}
