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
  ActionTypeBlockDataV2,
  MarketplaceActionTypeMetadata,
  ObjectTypeDatasource,
  ObjectTypeDatasourceDefinition,
  OntologyIrAllowedParameterValues,
  Parameter,
  ParameterId,
  ParameterRenderHint,
  Section,
  SectionId,
} from "@osdk/client.unstable";
import type {
  IDataType,
  IListDataType,
  IObjectDataType,
  IObjectSetDataType,
  ISetDataType,
} from "@osdk/generator-converters.ontologyir";
import type {
  ActionParameter,
  ActionParameterAllowedValues,
  ActionParameterValidation,
  ActionType,
  InterfaceType,
} from "@osdk/maker";
import { getOntologyDefinition, uppercaseFirstLetter } from "@osdk/maker";
import consola from "consola";
import invariant from "tiny-invariant";
import type { FunctionsIr } from "../../api/defineOntologyV2.js";
import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { ReadableIdGenerator } from "../../util/generateRid.js";
import { convertActionParameters } from "./convertActionParameters.js";
import { convertActionSections } from "./convertActionSections.js";
import { convertActionValidation } from "./convertActionValidation.js";
import { flattenInterface } from "./convertObject.js";
import { getFormContentOrdering } from "./getFormContentOrdering.js";

export function buildDatasource(
  apiName: string,
  definition: ObjectTypeDatasourceDefinition,
  ridGenerator: OntologyRidGenerator,
  classificationMarkingGroupName?: string,
  mandatoryMarkingGroupName?: string,
): ObjectTypeDatasource {
  const needsSecurity = classificationMarkingGroupName !== undefined
    || mandatoryMarkingGroupName !== undefined;

  const securityConfig = needsSecurity
    ? {
      classificationConstraint: classificationMarkingGroupName
        ? {
          markings: [classificationMarkingGroupName],
        }
        : undefined,
      markingConstraint: mandatoryMarkingGroupName
        ? {
          markingIds: [mandatoryMarkingGroupName],
        }
        : undefined,
    }
    : undefined;
  return ({
    rid: ridGenerator.generateDatasourceRid(apiName),
    datasource: definition,
    editsConfiguration: {
      onlyAllowPrivilegedEdits: false,
    },
    redacted: false,
    ...((securityConfig !== undefined) && { dataSecurity: securityConfig }),
  });
}

export function convertAction(
  action: ActionType,
  ridGenerator: OntologyRidGenerator,
  functionsIr?: FunctionsIr,
): ActionTypeBlockDataV2 | undefined {
  if (action.rules.map(rule => rule.type === "functionRule").some(v => v)) {
    if (!functionsIr) {
      consola.info(
        "No functions IR file found, skipping some function-backed actions",
      );
      return undefined;
    }
    return convertFunctionBackedAction(action, ridGenerator, functionsIr);
  }
  const actionValidation = convertActionValidation(action, ridGenerator);
  const actionParameters: Record<ParameterId, Parameter> =
    convertActionParameters(action, ridGenerator);
  const actionSections: Record<SectionId, Section> = convertActionSections(
    action,
    ridGenerator,
  );
  const parameterOrdering = action.parameterOrdering
    ?? (action.parameters ?? []).map(p => p.id);

  // Build parameterIds mapping: UUID (BlockInternalId) -> ParameterId (API name)
  const parameterIds: Record<string, ParameterId> = {};
  (action.parameters ?? []).forEach(p => {
    const readableId = ReadableIdGenerator.getForParameter(
      action.apiName,
      p.id,
    );
    const uuid = ridGenerator.toBlockInternalId(readableId);
    parameterIds[uuid] = p.id;
  });

  const ontologyDefinition = getOntologyDefinition();

  // Helper function to convert interface property values from API names to RIDs
  const convertInterfacePropertyValuesToRids = (
    interfacePropertyValues: Record<string, any>,
    allParentInterfaces: Array<InterfaceType>,
  ): Record<string, any> => {
    const result: Record<string, any> = {};
    for (const [apiName, value] of Object.entries(interfacePropertyValues)) {
      const parentInterface = allParentInterfaces.find(maybeSourceParent =>
        maybeSourceParent.propertiesV3[apiName] !== undefined
      )!;
      const rid = ridGenerator.generateInterfacePropertyTypeRid(
        apiName,
        parentInterface.apiName,
      );
      result[rid] = value;
    }
    return result;
  };

  // Helper function to convert shared property values from API names to RIDs
  const convertSharedPropertyValuesToRids = (
    sharedPropertyValues: Record<string, any>,
  ): Record<string, any> => {
    const result: Record<string, any> = {};
    for (const [apiName, value] of Object.entries(sharedPropertyValues)) {
      const rid = ridGenerator.generateSptRid(apiName);
      result[rid] = value;
    }
    return result;
  };
  return {
    actionType: {
      actionTypeLogic: {
        logic: {
          // Convert logic rules with proper RID mappings
          rules: action.rules.map(rule => {
            if (rule.type === "addInterfaceRule") {
              const interfaceAndParents = flattenInterface(
                ontologyDefinition
                  .INTERFACE_TYPE[rule.addInterfaceRule.interfaceApiName],
                new Set(),
              );
              return {
                type: "addInterfaceRule",
                addInterfaceRule: {
                  interfaceTypeRid: ridGenerator.generateRidForInterface(
                    rule.addInterfaceRule.interfaceApiName,
                  ),
                  objectType: rule.addInterfaceRule.objectTypeParameter,
                  interfacePropertyValues: convertInterfacePropertyValuesToRids(
                    rule.addInterfaceRule.interfacePropertyValues,
                    interfaceAndParents,
                  ),
                  sharedPropertyValues: convertSharedPropertyValuesToRids(
                    rule.addInterfaceRule.sharedPropertyValues,
                  ),
                  structFieldValues: {},
                  logicRuleRid: rule.addInterfaceRule.logicRuleRid,
                },
              };
            } else if (rule.type === "modifyInterfaceRule") {
              const interfaceAndParents = flattenInterface(
                ontologyDefinition
                  .INTERFACE_TYPE[rule.modifyInterfaceRule.interfaceApiName],
                new Set(),
              );

              return {
                type: "modifyInterfaceRule",
                modifyInterfaceRule: {
                  interfaceObjectToModify:
                    rule.modifyInterfaceRule.interfaceObjectToModifyParameter,
                  interfacePropertyValues: convertInterfacePropertyValuesToRids(
                    rule.modifyInterfaceRule.interfacePropertyValues,
                    interfaceAndParents,
                  ),
                  sharedPropertyValues: convertSharedPropertyValuesToRids(
                    rule.modifyInterfaceRule.sharedPropertyValues,
                  ),
                  structFieldValues: {},
                },
              };
            } else if (rule.type === "addObjectRule") {
              return {
                type: "addObjectRule",
                addObjectRule: {
                  objectTypeId: ridGenerator.generateObjectTypeId(
                    rule.addObjectRule.objectTypeId,
                  ),
                  propertyValues: rule.addObjectRule.propertyValues,
                  structFieldValues: rule.addObjectRule.structFieldValues,
                  logicRuleRid: rule.addObjectRule.logicRuleRid,
                },
              };
            }
            // Pass through other rule types unchanged
            return rule as any;
          }),
        },
        validation: actionValidation,
        notifications: [],
      },
      metadata: buildActionMetadata(
        action,
        ridGenerator,
        parameterOrdering,
        actionParameters,
        actionSections,
      ),
    },
    parameterIds,
  };
}

function convertFunctionBackedAction(
  actionInput: ActionType,
  ridGenerator: OntologyRidGenerator,
  functionsIr: FunctionsIr,
): ActionTypeBlockDataV2 {
  let action: ActionType = actionInput;

  // The placeholder functionRid holds the function's API name
  const rule = action.rules[0];
  invariant(
    rule.type === "functionRule",
    "Function-backed action must have a functionRule",
  );
  const functionName = rule.functionRule.functionRid;

  const discoveredFunction = functionsIr.discoveredFunctions.find(
    f => f.locator.typescript?.functionName === functionName,
  );
  invariant(
    discoveredFunction != null,
    `Function "${functionName}" not found in functions IR`,
  );

  const parameters: Record<ParameterId, Parameter> = {};
  const functionInputValues: Record<
    string,
    { type: "parameterId"; parameterId: string }
  > = {};
  const parameterOrdering: string[] = [];

  for (const input of discoveredFunction.inputs) {
    if (
      input.dataType.type === "ontologyEdit" || input.dataType.type === "client"
    ) continue;

    const paramId = input.name;
    parameterOrdering.push(paramId);
    functionInputValues[paramId] = {
      type: "parameterId",
      parameterId: paramId,
    };

    const paramType = convertFunctionInputDataType(
      input.dataType,
      ridGenerator,
    );

    parameters[paramId] = {
      id: paramId,
      rid: ridGenerator.generateRidForParameter(action.apiName, paramId),
      type: paramType,
      displayMetadata: {
        displayName: uppercaseFirstLetter(paramId),
        description: "",
        typeClasses: [],
        structFields: {},
        structFieldsV2: [],
      },
    };
  }

  const syntheticParameters: ActionParameter[] = Object.entries(parameters)
    .map(([paramId, param]) => ({
      id: paramId,
      displayName: param.displayMetadata.displayName,
      type: param.type.type as ActionParameter["type"],
      validation: {
        required: true,
        defaultVisibility: "editable",
        allowedValues: param.type.type === "objectReference"
            || param.type.type === "objectReferenceList"
          ? {
            type: "objectQuery",
            objectQuery: {
              type: "objectQuery",
              objectQuery: { objectSet: null },
            },
          }
          : undefined,
      },
    }));
  action = {
    ...action,
    parameters: syntheticParameters,
    entities: {
      affectedObjectTypes: Object.keys(
        discoveredFunction.ontologyProvenance?.editedObjects ?? {},
      ),
      affectedLinkTypes: [],
      affectedInterfaceTypes: Object.keys(
        discoveredFunction.ontologyProvenance?.editedInterfaces ?? {},
      ),
      typeGroups: [],
    },
  };

  const functionRid = `ri.function-registry.main.function.${functionName}`;

  return {
    actionType: {
      actionTypeLogic: {
        logic: {
          rules: [{
            type: "functionRule",
            functionRule: {
              functionRid,
              functionVersion: "0.1.0",
              functionInputValues,
              customExecutionMode: null,
              experimentalDeclarativeEditInformation: null,
            },
          }],
          actionLogRule: null,
        },
        validation: convertActionValidation(action, ridGenerator),
        revert: {
          enabledFor: [{
            type: "actionApplier",
            actionApplier: {
              withinDuration: { value: 24, unit: "HOUR" },
            },
          }],
        },
        webhooks: null,
        notifications: [],
        effects: null,
      },
      metadata: buildActionMetadata(
        action,
        ridGenerator,
        parameterOrdering,
        parameters,
        {},
      ),
    },
    parameterIds: {},
  };
}

const PRIMITIVE_TYPES: Record<string, Parameter["type"]> = {
  "string": { type: "string", string: {} },
  "boolean": { type: "boolean", boolean: {} },
  "integer": { type: "integer", integer: {} },
  "long": { type: "long", long: {} },
  "double": { type: "double", double: {} },
  "date": { type: "date", date: {} },
  "timestamp": { type: "timestamp", timestamp: {} },
  "attachment": { type: "attachment", attachment: {} },
};

function convertFunctionInputDataType(
  dataType: IDataType,
  ridGenerator: OntologyRidGenerator,
): Parameter["type"] {
  switch (dataType.type) {
    case "object": {
      invariant(dataType.object, "object data type missing object field");
      const objectData = dataType as IObjectDataType;
      const objectTypeId = ridGenerator.generateObjectTypeId(
        objectData.object.objectTypeId,
      );
      return {
        type: "objectReference",
        objectReference: { objectTypeId, maybeCreateObjectOption: null },
      };
    }
    case "objectSet": {
      invariant(
        dataType.objectSet,
        "objectSet data type missing objectSet field",
      );
      const objectSetData = dataType as IObjectSetDataType;
      const objectTypeId = ridGenerator.generateObjectTypeId(
        objectSetData.objectSet.objectTypeId,
      );
      return {
        type: "objectSetRid",
        objectSetRid: {
          objectTypeId,
        },
      };
    }
    case "list": {
      const listData = dataType as IListDataType;
      const innerType = listData.list.elementsType;
      return convertFunctionInputListDataType(
        innerType,
        ridGenerator,
      );
    }
    case "set": {
      const setData = dataType as ISetDataType;
      const innerType = setData.set.elementsType;
      return convertFunctionInputListDataType(
        innerType,
        ridGenerator,
      );
    }
    default: {
      const key = dataType.type;
      if (key in PRIMITIVE_TYPES) {
        return PRIMITIVE_TYPES[key];
      }
      throw new Error(
        `Unsupported function input data type for action parameter: ${dataType.type}`,
      );
    }
  }
}

const PRIMITIVE_LIST_TYPES: Record<string, Parameter["type"]> = {
  "string": { type: "stringList", stringList: {} },
  "boolean": { type: "booleanList", booleanList: {} },
  "integer": { type: "integerList", integerList: {} },
  "long": { type: "longList", longList: {} },
  "double": { type: "doubleList", doubleList: {} },
  "date": { type: "dateList", dateList: {} },
  "timestamp": { type: "timestampList", timestampList: {} },
  "attachment": { type: "attachmentList", attachmentList: {} },
};

function convertFunctionInputListDataType(
  elementType: IDataType,
  ridGenerator: OntologyRidGenerator,
): Parameter["type"] {
  switch (elementType.type) {
    case "object": {
      const objectData = elementType as IObjectDataType;
      const objectTypeId = ridGenerator.generateObjectTypeId(
        objectData.object.objectTypeId,
      );
      return {
        type: "objectReferenceList",
        objectReferenceList: { objectTypeId },
      };
    }
    default: {
      const key = elementType.type;
      if (key in PRIMITIVE_LIST_TYPES) {
        return PRIMITIVE_LIST_TYPES[key];
      }
      throw new Error(
        `Unsupported list element data type for action parameter: ${elementType.type}`,
      );
    }
  }
}

/**
 * Build action type metadata with all fields that Java produces.
 * Uses an intermediate variable to allow extra fields beyond the TS type definition
 * (notificationSettings, applyingMessage) without casting to any.
 */
function buildActionMetadata(
  action: ActionType,
  ridGenerator: OntologyRidGenerator,
  parameterOrdering: string[],
  actionParameters: Record<ParameterId, Parameter>,
  actionSections: Record<SectionId, Section>,
): MarketplaceActionTypeMetadata {
  const displayMetadata = {
    configuration: {
      defaultLayout: action.defaultFormat ?? "FORM",
      displayAndFormat: action.displayAndFormat ?? {
        table: {
          columnWidthByParameterRid: {},
          enableFileImport: true,
          fitHorizontally: false,
          frozenColumnCount: 0,
          rowHeightInLines: 1,
        },
      },
      enableLayoutUserSwitch: action.enableLayoutSwitch ?? false,
    },
    description: action.description ?? "",
    displayName: action.displayName,
    applyingMessage: [] as Array<{ type: string; message: string }>,
    successMessage: action.submissionMetadata?.successMessage
      ? [{
        type: "message" as const,
        message: action.submissionMetadata.successMessage,
      }]
      : [],
    typeClasses: action.typeClasses ?? [],
    ...(action.submissionMetadata?.submitButtonDisplayMetadata
      && {
        submitButtonDisplayMetadata:
          action.submissionMetadata.submitButtonDisplayMetadata,
      }),
    ...(action.submissionMetadata?.undoButtonConfiguration
      && {
        undoButtonConfiguration:
          action.submissionMetadata.undoButtonConfiguration,
      }),
  };

  const metadata = {
    rid: ridGenerator.generateRidForActionType(action.apiName),
    version: "",
    apiName: action.apiName,
    notificationSettings: {
      renderingSettings: {
        type: "anyNotificationRenderingCanFail" as const,
        anyNotificationRenderingCanFail: {},
      },
      redactionOverride: null,
    },
    displayMetadata,
    parameterOrdering,
    formContentOrdering: getFormContentOrdering(action, parameterOrdering),
    parameters: actionParameters,
    sections: actionSections,
    status: typeof action.status === "string"
      ? {
        type: action.status,
        [action.status]: {},
      }
      : action.status,
    entities: action.entities
      ? {
        affectedInterfaceTypes: action.entities.affectedInterfaceTypes.map(
          apiName => ridGenerator.generateRidForInterface(apiName),
        ),
        affectedLinkTypes: action.entities.affectedLinkTypes,
        affectedObjectTypes: action.entities.affectedObjectTypes.map(
          apiName => ridGenerator.generateObjectTypeId(apiName),
        ),
        typeGroups: action.entities.typeGroups,
      }
      : {
        affectedInterfaceTypes: [],
        affectedLinkTypes: [],
        affectedObjectTypes: [],
        typeGroups: [],
      },
  };
  return metadata as MarketplaceActionTypeMetadata;
}

// Helper function to convert allowed value option values with ObjectTypeId conversion
function convertAllowedValueOptionValue(
  value: any,
  ridGenerator: OntologyRidGenerator,
): any {
  if (value?.type === "objectType") {
    return {
      type: "objectType",
      objectType: {
        objectTypeId: ridGenerator.generateObjectTypeId(
          value.objectType.objectTypeId,
        ),
      },
    };
  }
  // Pass through other value types unchanged (staticValue, parameterValue, etc.)
  return value;
}

export function extractAllowedValues(
  allowedValues: ActionParameterAllowedValues,
  ridGenerator: OntologyRidGenerator,
): OntologyIrAllowedParameterValues {
  switch (allowedValues.type) {
    case "oneOf":
      return {
        type: "oneOf",
        oneOf: {
          type: "oneOf",
          oneOf: {
            labelledValues: allowedValues.oneOf.map(option => ({
              ...option,
              value: convertAllowedValueOptionValue(option.value, ridGenerator),
            })),
            otherValueAllowed: {
              allowed: allowedValues.otherValueAllowed
                ?? false,
            },
          },
        },
      };
    case "range":
      const { min, max } = allowedValues;
      return {
        type: "range",
        range: {
          type: "range",
          range: {
            ...(min === undefined
              ? {}
              : { minimum: { inclusive: true, value: min } }),
            ...(max === undefined
              ? {}
              : { maximum: { inclusive: true, value: max } }),
          },
        },
      };
    case "text":
      const { minLength, maxLength, regex } = allowedValues;
      return {
        type: "text",
        text: {
          type: "text",
          text: {
            ...(minLength === undefined
              ? {}
              : { minLength }),
            ...(maxLength === undefined
              ? {}
              : { maxLength }),
            ...(regex === undefined
              ? {}
              : { regex: { regex, failureMessage: "Invalid input" } }),
          },
        },
      };
    case "datetime":
      const { minimum, maximum } = allowedValues;
      return {
        type: "datetime",
        datetime: {
          type: "datetime",
          datetime: {
            minimum,
            maximum,
          },
        },
      };
    case "objectTypeReference":
      return {
        type: "objectTypeReference",
        objectTypeReference: {
          type: "objectTypeReference",
          objectTypeReference: {
            interfaceTypeRids: allowedValues.interfaceTypes,
          },
        },
      };
    case "redacted":
      return {
        type: "redacted",
        redacted: {},
      };
    case "geotimeSeriesReference":
      return {
        type: "geotimeSeriesReference",
        geotimeSeriesReference: {
          type: "geotimeSeries",
          geotimeSeries: {},
        },
      };
    case "user":
      return {
        type: "user",
        user: {
          type: "user",
          user: {
            filter: (allowedValues.fromGroups ?? []).map(group => {
              // Register static group IDs with ridGenerator
              if (group.type === "static") {
                ridGenerator.getGroupIds().put(
                  ReadableIdGenerator.getForGroup(group.name),
                  group.name,
                );
              }

              return {
                type: "groupFilter",
                groupFilter: {
                  groupId: group.type === "static"
                    ? {
                      type: "staticValue",
                      staticValue: {
                        type: "string",
                        string: group.name,
                      },
                    }
                    : {
                      type: "parameterId",
                      parameterId: group.parameter,
                    },
                },
              };
            }),
          },
        },
      };
    case "multipassGroup":
      return {
        type: "multipassGroup",
        multipassGroup: {
          type: "group",
          group: {},
        },
      };
    default:
      const k: Partial<OntologyIrAllowedParameterValues["type"]> =
        allowedValues.type;
      return {
        type: k,
        [k]: {
          type: k,
          [k]: {},
        },
      } as unknown as OntologyIrAllowedParameterValues;
  }
}

export function renderHintFromBaseType(
  parameter: ActionParameter,
  validation?: ActionParameterValidation,
): ParameterRenderHint {
  const type = typeof parameter.type === "string"
    ? parameter.type
    : parameter.type.type;
  switch (type) {
    case "boolean":
    case "booleanList":
      return { type: "checkbox", checkbox: {} };
    case "integer":
    case "integerList":
    case "long":
    case "longList":
    case "double":
    case "doubleList":
    case "decimal":
    case "decimalList":
      return { type: "numericInput", numericInput: {} };
    case "string":
      if (
        validation?.allowedValues?.type === "user"
        || validation?.allowedValues?.type === "multipassGroup"
      ) {
        return { type: "userDropdown", userDropdown: {} };
      }
    case "stringList":
    case "geohash":
    case "geohashList":
    case "geoshape":
    case "geoshapeList":
    case "objectSetRid":
      return { type: "textInput", textInput: {} };
    case "timestamp":
    case "timestampList":
    case "date":
    case "dateList":
      return { type: "dateTimePicker", dateTimePicker: {} };
    case "attachment":
    case "attachmentList":
      return { type: "filePicker", filePicker: {} };
    case "marking":
    case "markingList":
      if (parameter.validation.allowedValues?.type === "mandatoryMarking") {
        return { type: "mandatoryMarkingPicker", mandatoryMarkingPicker: {} };
      } else if (parameter.validation.allowedValues?.type === "cbacMarking") {
        return { type: "cbacMarkingPicker", cbacMarkingPicker: {} };
      } else {
        throw new Error(
          `The allowed values for "${parameter.displayName}" are not compatible with the base parameter type`,
        );
      }
    case "timeSeriesReference":
    case "objectReference":
    case "objectReferenceList":
    case "interfaceReference":
    case "interfaceReferenceList":
    case "objectTypeReference":
    case "mediaReference":
    case "mediaReferenceList":
    case "geotimeSeriesReference":
    case "geotimeSeriesReferenceList":
      return { type: "dropdown", dropdown: {} };
    case "struct":
    case "structList":
      throw new Error("Structs are not supported yet");
    default:
      throw new Error(`Unknown type ${type}`);
  }
}
