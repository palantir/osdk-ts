/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  ActionTypeStatus,
  OntologyIr,
  OntologyIrActionTypeBlockDataV2,
  OntologyIrAllowedParameterValues,
  OntologyIrObjectTypeDatasource,
  OntologyIrObjectTypeDatasourceDefinition,
  OntologyIrParameter,
  OntologyIrSection,
  OntologyIrValueTypeBlockData,
  ParameterId,
  ParameterRenderHint,
  SectionId,
} from "@osdk/client.unstable";
import * as fs from "fs";
import * as path from "path";
import { convertActionParameters } from "../conversion/toMarketplace/convertActionParameters.js";
import { convertActionSections } from "../conversion/toMarketplace/convertActionSections.js";
import { convertActionValidation } from "../conversion/toMarketplace/convertActionValidation.js";
import { convertOntologyDefinition } from "../conversion/toMarketplace/convertOntologyDefinition.js";
import { convertOntologyToValueTypeIr } from "../conversion/toMarketplace/convertOntologyToValueTypeIr.js";
import { getFormContentOrdering } from "../conversion/toMarketplace/getFormContentOrdering.js";
import type {
  ActionParameter,
  ActionParameterValidation,
} from "./action/ActionParameter.js";
import type { ActionParameterAllowedValues } from "./action/ActionParameterAllowedValues.js";
import type { ActionType } from "./action/ActionType.js";
import { createCodeSnippets } from "./code-snippets/createCodeSnippets.js";
import type { OntologyDefinition } from "./common/OntologyDefinition.js";
import { OntologyEntityTypeEnum } from "./common/OntologyEntityTypeEnum.js";
import type { OntologyEntityType } from "./common/OntologyEntityTypeMapping.js";

// type -> apiName -> entity
/** @internal */
export let ontologyDefinition: OntologyDefinition;

// type -> apiName -> entity
/** @internal */
export let importedTypes: OntologyDefinition;

// namespace -> version
/** @internal */
export let dependencies: Record<string, string>;

/** @internal */
export let namespace: string;

export function updateOntology<
  T extends OntologyEntityType,
>(
  entity: T,
): void {
  if (entity.__type !== OntologyEntityTypeEnum.VALUE_TYPE) {
    ontologyDefinition[entity.__type][entity.apiName] = entity;
    return;
  }
  // value types are a special case
  if (
    ontologyDefinition[OntologyEntityTypeEnum.VALUE_TYPE][entity.apiName]
      === undefined
  ) {
    ontologyDefinition[OntologyEntityTypeEnum.VALUE_TYPE][entity.apiName] = [];
  }
  ontologyDefinition[OntologyEntityTypeEnum.VALUE_TYPE][entity.apiName]
    .push(entity);
}

export async function defineOntology(
  ns: string,
  body: () => void | Promise<void>,
  outputDir: string | undefined,
  dependencyFile?: string,
  codeSnippetFiles?: boolean,
  snippetPackageName?: string,
  snippetFileOutputDir?: string,
  randomnessKey?: string,
): Promise<OntologyIr> {
  namespace = ns;
  dependencies = {};
  ontologyDefinition = {
    OBJECT_TYPE: {},
    ACTION_TYPE: {},
    LINK_TYPE: {},
    INTERFACE_TYPE: {},
    SHARED_PROPERTY_TYPE: {},
    VALUE_TYPE: {},
  };
  importedTypes = {
    SHARED_PROPERTY_TYPE: {},
    OBJECT_TYPE: {},
    ACTION_TYPE: {},
    LINK_TYPE: {},
    INTERFACE_TYPE: {},
    VALUE_TYPE: {},
  };
  try {
    await body();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      "Unexpected error while processing the body of the ontology",
      e,
    );
    throw e;
  }
  if (outputDir) {
    writeStaticObjects(outputDir);
  }
  if (dependencyFile) {
    writeDependencyFile(dependencyFile);
  }
  if (codeSnippetFiles) {
    createCodeSnippets(
      ontologyDefinition,
      snippetPackageName,
      snippetFileOutputDir,
    );
  }

  return convertOntologyDefinition(ontologyDefinition, randomnessKey);
}

export function writeStaticObjects(outputDir: string): void {
  const codegenDir = path.resolve(outputDir, "codegen");
  const typeDirs = {
    [OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE]: "shared-property-types",
    [OntologyEntityTypeEnum.ACTION_TYPE]: "action-types",
    [OntologyEntityTypeEnum.OBJECT_TYPE]: "object-types",
    [OntologyEntityTypeEnum.LINK_TYPE]: "link-types",
    [OntologyEntityTypeEnum.INTERFACE_TYPE]: "interface-types",
    [OntologyEntityTypeEnum.VALUE_TYPE]: "value-types",
  };

  if (!fs.existsSync(codegenDir)) {
    fs.mkdirSync(codegenDir, { recursive: true });
  }

  Object.values(typeDirs).forEach(typeDirNameFromMap => {
    const currentTypeDirPath = path.join(codegenDir, typeDirNameFromMap);
    if (fs.existsSync(currentTypeDirPath)) {
      fs.rmSync(currentTypeDirPath, { recursive: true, force: true });
    }
    fs.mkdirSync(currentTypeDirPath, { recursive: true });
  });

  const topLevelExportStatements: string[] = [];

  Object.entries(ontologyDefinition).forEach(
    ([ontologyTypeEnumKey, entities]) => {
      const typeDirName =
        typeDirs[ontologyTypeEnumKey as OntologyEntityTypeEnum];

      const typeDirPath = path.join(codegenDir, typeDirName);
      const entityModuleNames: string[] = [];

      Object.entries(entities).forEach(
        ([apiName, entity]: [string, OntologyEntityType]) => {
          const entityFileNameBase = camel(withoutNamespace(apiName))
            + (ontologyTypeEnumKey as OntologyEntityTypeEnum
                === OntologyEntityTypeEnum.VALUE_TYPE
              ? "ValueType"
              : "");
          const filePath = path.join(typeDirPath, `${entityFileNameBase}.ts`);
          const entityTypeName = getEntityTypeName(ontologyTypeEnumKey);
          const entityJSON = JSON.stringify(entity, null, 2).replace(
            /("__type"\s*:\s*)"([^"]*)"/g,
            (_, prefix, value) => `${prefix}OntologyEntityTypeEnum.${value}`,
          );
          const content = `
import { wrapWithProxy, OntologyEntityTypeEnum } from '@osdk/maker';
import type { ${entityTypeName} } from '@osdk/maker';

/** @type {import('@osdk/maker').${entityTypeName}} */
const ${entityFileNameBase}_base: ${entityTypeName} = ${
            ontologyTypeEnumKey === "VALUE_TYPE"
              ? entityJSON.slice(1, -2)
              : entityJSON
          } as unknown as ${entityTypeName};
        
export const ${entityFileNameBase}: ${entityTypeName} = wrapWithProxy(${entityFileNameBase}_base);
        `;
          fs.writeFileSync(filePath, content, { flag: "w" });
          entityModuleNames.push(entityFileNameBase);
        },
      );

      for (const entityModuleName of entityModuleNames) {
        topLevelExportStatements.push(
          `export { ${entityModuleName} } from "./codegen/${typeDirName}/${entityModuleName}.js";`,
        );
      }
    },
  );

  if (topLevelExportStatements.length > 0) {
    const mainIndexContent = dependencyInjectionString()
      + topLevelExportStatements.join("\n") + "\n";
    const mainIndexFilePath = path.join(outputDir, "index.ts");
    fs.writeFileSync(mainIndexFilePath, mainIndexContent, { flag: "w" });
  }
}

export function buildDatasource(
  apiName: string,
  definition: OntologyIrObjectTypeDatasourceDefinition,
  classificationMarkingGroupName?: string,
  mandatoryMarkingGroupName?: string,
): OntologyIrObjectTypeDatasource {
  const needsSecurity = classificationMarkingGroupName !== undefined
    || mandatoryMarkingGroupName !== undefined;

  const securityConfig = needsSecurity
    ? {
      classificationConstraint: classificationMarkingGroupName
        ? {
          markingGroupName: classificationMarkingGroupName,
        }
        : undefined,
      markingConstraint: mandatoryMarkingGroupName
        ? {
          markingGroupName: mandatoryMarkingGroupName,
        }
        : undefined,
    }
    : undefined;
  return ({
    datasourceName: apiName,
    datasource: definition,
    editsConfiguration: {
      onlyAllowPrivilegedEdits: false,
    },
    redacted: false,
    ...((securityConfig !== undefined) && { dataSecurity: securityConfig }),
  });
}

export function cleanAndValidateLinkTypeId(apiName: string): string {
  // Insert a dash before any uppercase letter that follows a lowercase letter or digit
  const step1 = apiName.replace(/([a-z0-9])([A-Z])/g, "$1-$2");
  // Insert a dash after a sequence of uppercase letters when followed by a lowercase letter
  // then convert the whole string to lowercase
  // e.g., apiName, APIname, and apiNAME will all be converted to api-name
  const linkTypeId = step1.replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();

  const VALIDATION_PATTERN = /^([a-z][a-z0-9\-]*)$/;
  if (!VALIDATION_PATTERN.test(linkTypeId)) {
    throw new Error(
      `LinkType id '${linkTypeId}' must be lower case with dashes.`,
    );
  }
  return linkTypeId;
}

export function dumpOntologyFullMetadata(): OntologyIr {
  return convertOntologyDefinition(ontologyDefinition);
}

export function dumpValueTypeWireType(): OntologyIrValueTypeBlockData {
  return convertOntologyToValueTypeIr(ontologyDefinition);
}

export function convertObjectStatus(status: any): any {
  if (status === undefined) {
    return {
      type: "active",
      active: {},
    };
  }

  if (status === "active") {
    return {
      type: "active",
      active: {},
    };
  }

  if (status === "experimental") {
    return {
      type: "experimental",
      experimental: {},
    };
  }

  if (status === "example") {
    return {
      type: "example",
      example: {},
    };
  }

  if (typeof status === "object" && status.type === "deprecated") {
    return {
      type: "deprecated",
      deprecated: {
        message: status.message,
        deadline: status.deadline,
        replacedBy: undefined,
      },
    };
  }

  return status;
}

export function convertAction(
  action: ActionType,
): OntologyIrActionTypeBlockDataV2 {
  const actionValidation = convertActionValidation(action);
  const actionParameters: Record<ParameterId, OntologyIrParameter> =
    convertActionParameters(action);
  const actionSections: Record<SectionId, OntologyIrSection> =
    convertActionSections(action);
  const parameterOrdering = action.parameterOrdering
    ?? (action.parameters ?? []).map(p => p.id);
  return {
    actionType: {
      actionTypeLogic: {
        logic: {
          rules: action.rules,
        },
        validation: actionValidation,
      },
      metadata: {
        apiName: action.apiName,
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
            type: "blueprint",
            blueprint: action.icon ?? { locator: "edit", color: "#000000" },
          },
          successMessage: action.submissionMetadata?.successMessage
            ? [{
              type: "message",
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
        },
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
        entities: action.entities,
      },
    },
  };
}

export function extractAllowedValues(
  allowedValues: ActionParameterAllowedValues,
): OntologyIrAllowedParameterValues {
  switch (allowedValues.type) {
    case "oneOf":
      return {
        type: "oneOf",
        oneOf: {
          type: "oneOf",
          oneOf: {
            labelledValues: allowedValues.oneOf,
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
      // TODO(dpaquin): there's probably a TS clean way to do this
  }
}

export function renderHintFromBaseType(
  parameter: ActionParameter,
  validation?: ActionParameterValidation,
): ParameterRenderHint {
  // TODO(dpaquin): these are just guesses, we should find where they're actually defined
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

export function extractNamespace(apiName: string): string {
  return apiName.substring(0, apiName.lastIndexOf(".") + 1);
}

export function withoutNamespace(apiName: string): string {
  const lastDot = apiName.lastIndexOf(".");
  if (lastDot === -1) {
    return apiName;
  }
  return apiName.substring(lastDot + 1);
}

function camel(str: string): string {
  if (!str) {
    return str;
  }
  let result = str.replace(/[-_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
  result = result.charAt(0).toLowerCase() + result.slice(1);
  return result;
}

/**
 * Gets the TypeScript type name corresponding to an OntologyEntityTypeEnum value
 */
function getEntityTypeName(type: string): string {
  return {
    [OntologyEntityTypeEnum.OBJECT_TYPE]: "ObjectType",
    [OntologyEntityTypeEnum.LINK_TYPE]: "LinkType",
    [OntologyEntityTypeEnum.INTERFACE_TYPE]: "InterfaceType",
    [OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE]: "SharedPropertyType",
    [OntologyEntityTypeEnum.ACTION_TYPE]: "ActionType",
    [OntologyEntityTypeEnum.VALUE_TYPE]: "ValueTypeDefinitionVersion",
  }[type]!;
}

function writeDependencyFile(dependencyFile: string): void {
  fs.writeFileSync(dependencyFile, JSON.stringify(dependencies, null, 2));
}

function dependencyInjectionString(): string {
  const namespaceNoDot: string = namespace.endsWith(".")
    ? namespace.slice(0, -1)
    : namespace;

  return `import { addDependency } from "@osdk/maker";
// @ts-ignore
addDependency("${namespaceNoDot}", new URL(import.meta.url).pathname);
`;
}

export function addNamespaceIfNone(apiName: string): string {
  return apiName.includes(".") ? apiName : namespace + apiName;
}
