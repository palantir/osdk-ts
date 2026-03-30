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
  ActionTypeStatus,
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
  ActionParameter,
  ActionParameterAllowedValues,
  ActionParameterValidation,
  ActionType,
  InterfaceType,
} from "@osdk/maker";
import { getOntologyDefinition, uppercaseFirstLetter } from "@osdk/maker";
import * as fs from "node:fs";
import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { ReadableIdGenerator } from "../../util/generateRid.js";
import { convertActionParameters } from "./convertActionParameters.js";
import { convertActionSections } from "./convertActionSections.js";
import { convertActionValidation } from "./convertActionValidation.js";
import { flattenInterface } from "./convertObject.js";
import { getFormContentOrdering } from "./getFormContentOrdering.js";
import invariant from "tiny-invariant";
import consola from "consola";

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
  functionsIrFile?: string, 
): ActionTypeBlockDataV2 | undefined {
  if (action.rules.map(rule => rule.type === "functionRule").some(v => v)) {
    if (!functionsIrFile) {
      consola.info("No functions IR file found, skipping some function-backed actions");
      return undefined;
    }
    return convertFunctionBackedAction(action, ridGenerator, functionsIrFile);
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

interface FunctionDataType {
  type: string;
  object?: { objectTypeId: string };
  objectSet?: { objectTypeId: string };
  list?: { elementsType: FunctionDataType };
  set?: { elementsType: FunctionDataType };
  [key: string]: unknown;
}

interface DiscoveredFunction {
  locator: { type: string; typescriptOsdk?: { functionName: string } };
  inputs: Array<{ name: string; dataType: FunctionDataType }>;
  output: { single: { dataType: FunctionDataType } };
  customTypes: Record<string, unknown>;
}

interface FunctionsIr {
  discoveredFunctions: Array<DiscoveredFunction>;
}

function convertFunctionBackedAction(
  action: ActionType,
  ridGenerator: OntologyRidGenerator,
  functionsIrFile: string,
): ActionTypeBlockDataV2 {
  const functionsIr: FunctionsIr = JSON.parse(
    fs.readFileSync(functionsIrFile, "utf-8"),
  );

  // The placeholder functionRid holds the function's API name
  const rule = action.rules[0];
  invariant(
    rule.type === "functionRule",
    "Function-backed action must have a functionRule",
  );
  const functionApiName = rule.functionRule.functionRid;

  const discoveredFunction = functionsIr.discoveredFunctions.find(
    f => f.locator.typescriptOsdk?.functionName === functionApiName,
  );
  invariant(
    discoveredFunction != null,
    `Function "${functionApiName}" not found in functions IR file`,
  );

  // Build parameters and function input mappings from discovered function inputs
  const parameters: Record<ParameterId, Parameter> = {};
  const functionInputValues: Record<
    string,
    { type: "parameterId"; parameterId: string }
  > = {};
  const parameterOrdering: string[] = [];
  const affectedObjectTypeIds: string[] = [];

  for (const input of discoveredFunction.inputs) {
    if (input.dataType.type === "ontologyEdit") continue;

    const paramId = input.name;
    parameterOrdering.push(paramId);
    functionInputValues[paramId] = {
      type: "parameterId",
      parameterId: paramId,
    };

    const paramType = convertFunctionInputDataType(
      input.dataType,
      ridGenerator,
      affectedObjectTypeIds,
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

  const functionRid =
    `ri.function-registry.main.function.${functionApiName}`;

  // Build per-parameter validations with sensible defaults
  const parameterValidations = Object.fromEntries(
    Object.entries(parameters).map(([paramId, param]) => [
      paramId,
      {
        conditionalOverrides: [],
        defaultValidation: {
          display: {
            visibility: { type: "editable" as const, editable: {} },
            renderHint: getDefaultRenderHintForBaseType(param.type),
            prefill: null,
          },
          validation: {
            required: { type: "required" as const, required: {} },
            allowedValues: getDefaultAllowedValuesForBaseType(param.type),
          },
        },
        structFieldValidations: {},
      },
    ]),
  );

  const formContentOrdering = parameterOrdering.map(p => ({
    type: "parameterId" as const,
    parameterId: p,
  }));

  const metadata = {
    rid: ridGenerator.generateRidForActionType(action.apiName),
    version: "1.0",
    apiName: action.apiName,
    notificationSettings: {
      renderingSettings: {
        type: "allNotificationRenderingMustSucceed" as const,
        allNotificationRenderingMustSucceed: {},
      },
      redactionOverride: null,
    },
    displayMetadata: {
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
      icon: {
        type: "blueprint" as const,
        blueprint: action.icon ?? { locator: "take-action", color: "#738091" },
      },
      applyingMessage: [] as Array<{ type: string; message: string }>,
      successMessage: action.submissionMetadata?.successMessage
        ? [{
          type: "message" as const,
          message: action.submissionMetadata.successMessage,
        }]
        : [],
      typeClasses: [],
    },
    parameterOrdering,
    formContentOrdering,
    parameters,
    sections: {},
    status: typeof action.status === "string"
      ? {
        type: action.status,
        [action.status]: {},
      } as unknown as ActionTypeStatus
      : action.status,
    entities: {
      affectedObjectTypes: affectedObjectTypeIds,
      affectedLinkTypes: [] as string[],
      affectedInterfaceTypes: [] as string[],
      typeGroups: [] as string[],
    },
  };

  return {
    actionType: {
      actionTypeLogic: {
        logic: {
          rules: [{
            type: "functionRule" as const,
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
        validation: {
          actionTypeLevelValidation: {
            rules: {},
            ordering: [],
            dataSecurityRequirement: null,
          },
          parameterValidations,
          sectionValidations: {},
        },
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
      metadata: metadata as MarketplaceActionTypeMetadata,
    },
    parameterIds: {},
  };
}

function convertFunctionInputDataType(
  dataType: FunctionDataType,
  ridGenerator: OntologyRidGenerator,
  affectedObjectTypeIds: string[],
): Parameter["type"] {
  switch (dataType.type) {
    case "object": {
      invariant(dataType.object, "object data type missing object field");
      const objectTypeId = ridGenerator.generateObjectTypeId(
        dataType.object.objectTypeId,
      );
      affectedObjectTypeIds.push(objectTypeId);
      return {
        type: "objectReference" as const,
        objectReference: { objectTypeId, maybeCreateObjectOption: null },
      } as Parameter["type"];
    }
    case "objectSet": {
      invariant(
        dataType.objectSet,
        "objectSet data type missing objectSet field",
      );
      const objectTypeId = ridGenerator.generateObjectTypeId(
        dataType.objectSet.objectTypeId,
      );
      affectedObjectTypeIds.push(objectTypeId);
      return {
        type: "objectSetRid" as const,
        objectSetRid: {},
      } as unknown as Parameter["type"];
    }
    case "string":
    case "boolean":
    case "integer":
    case "long":
    case "double":
    case "date":
    case "timestamp":
    case "attachment":
      return {
        type: dataType.type,
        [dataType.type]: {},
      } as unknown as Parameter["type"];
    case "list":
    case "set": {
      const innerType = dataType.type === "list"
        ? dataType.list?.elementsType
        : dataType.set?.elementsType;
      invariant(innerType, `${dataType.type} data type missing elementsType`);
      return convertFunctionInputListDataType(
        innerType,
        ridGenerator,
        affectedObjectTypeIds,
      );
    }
    default:
      throw new Error(
        `Unsupported function input data type for action parameter: ${dataType.type}`,
      );
  }
}

const PRIMITIVE_LIST_TYPES: Record<string, string> = {
  string: "stringList",
  boolean: "booleanList",
  integer: "integerList",
  long: "longList",
  double: "doubleList",
  date: "dateList",
  timestamp: "timestampList",
  attachment: "attachmentList",
};

function convertFunctionInputListDataType(
  elementType: FunctionDataType,
  ridGenerator: OntologyRidGenerator,
  affectedObjectTypeIds: string[],
): Parameter["type"] {
  switch (elementType.type) {
    case "object": {
      invariant(elementType.object, "object data type missing object field");
      const objectTypeId = ridGenerator.generateObjectTypeId(
        elementType.object.objectTypeId,
      );
      affectedObjectTypeIds.push(objectTypeId);
      return {
        type: "objectReferenceList" as const,
        objectReferenceList: { objectTypeId, maybeCreateObjectOption: null },
      } as Parameter["type"];
    }
    default: {
      const listType = PRIMITIVE_LIST_TYPES[elementType.type];
      if (listType) {
        return {
          type: listType,
          [listType]: {},
        } as unknown as Parameter["type"];
      }
      throw new Error(
        `Unsupported list element data type for action parameter: ${elementType.type}`,
      );
    }
  }
}

function getDefaultRenderHintForBaseType(
  paramType: Parameter["type"],
): ParameterRenderHint {
  switch (paramType.type) {
    case "objectReference":
    case "objectReferenceList":
    case "interfaceReference":
    case "interfaceReferenceList":
      return {
        type: "dropdown",
        dropdown: { shouldRemoveListQueryAfterSelection: null },
      };
    case "boolean":
      return { type: "checkbox", checkbox: {} };
    case "integer":
    case "long":
    case "double":
    case "decimal":
      return { type: "numericInput", numericInput: {} };
    case "date":
    case "timestamp":
      return { type: "dateTimePicker", dateTimePicker: {} };
    case "attachment":
      return { type: "filePicker", filePicker: {} };
    default:
      return { type: "textInput", textInput: {} };
  }
}

function getDefaultAllowedValuesForBaseType(
  paramType: Parameter["type"],
): OntologyIrAllowedParameterValues {
  switch (paramType.type) {
    case "objectReference":
    case "objectReferenceList":
      return {
        type: "objectQuery",
        objectQuery: {
          type: "objectQuery",
          objectQuery: { objectSet: null },
        },
      } as unknown as OntologyIrAllowedParameterValues;
    default:
      return {
        type: "noop",
        noop: {},
      } as unknown as OntologyIrAllowedParameterValues;
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
    icon: {
      type: "blueprint" as const,
      blueprint: action.icon ?? { locator: "edit", color: "#000000" },
    },
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
    parameterOrdering: parameterOrdering,
    formContentOrdering: getFormContentOrdering(action, parameterOrdering),
    parameters: actionParameters,
    sections: actionSections,
    status: typeof action.status === "string"
      ? {
        type: action.status,
        [action.status]: {},
      } as unknown as ActionTypeStatus
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
              : { minLength: minLength }),
            ...(maxLength === undefined
              ? {}
              : { maxLength: maxLength }),
            ...(regex === undefined
              ? {}
              : { regex: { regex: regex, failureMessage: "Invalid input" } }),
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
