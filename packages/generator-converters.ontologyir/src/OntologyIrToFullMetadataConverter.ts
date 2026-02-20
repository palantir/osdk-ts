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
  OntologyIrActionTypeBlockDataV2,
  OntologyIrActionTypeStatus,
  OntologyIrInterfaceTypeBlockDataV2,
  OntologyIrLinkTypeBlockDataV2,
  OntologyIrLinkTypeStatus,
  OntologyIrMarketplaceInterfaceLinkType,
  OntologyIrObjectTypeBlockDataV2,
  OntologyIrObjectTypeStatus,
  OntologyIrOntologyBlockDataV2,
  OntologyIrSharedPropertyTypeBlockDataV2,
  OntologyIrType,
} from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";

import { consola } from "consola";
import { spawnSync } from "node:child_process";
import { hash } from "node:crypto";
import { accessSync, constants } from "node:fs";
import { createRequire } from "node:module";
import * as path from "node:path";
import { pathToFileURL } from "node:url";
import invariant from "tiny-invariant";
import * as ts from "typescript";
import type { ApiName } from "./ApiName.js";
import { convertDataType } from "./convertDataType.js";

// Type definitions for optional function discovery dependencies
// These are declared inline to avoid compile-time dependency on optional packages
export interface IDataType {
  type: string;
  [key: string]: unknown;
}

interface IDiscoveredFunction {
  locator: { type: string; typescriptOsdk?: { functionName: string } };
  inputs: Array<{ name: string; dataType: IDataType }>;
  output: { single: { dataType: IDataType } };
  customTypes: Record<string, unknown>;
}

interface IFunctionDiscoverer {
  discover(): { discoveredFunctions: IDiscoveredFunction[] };
}

interface IFunctionDiscovererConstructor {
  new(
    program: ts.Program,
    entryPointPath: string,
    fullFilePath: string,
  ): IFunctionDiscoverer;
}

// Python discovery output uses the same format as IDataType with type field at top level
interface IPythonDiscoveredFunction {
  locator: {
    type: "python3";
    python3: { moduleName: string; functionName: string };
  };
  inputs: Array<{ name: string; dataType: IDataType; required?: boolean }>;
  output: { type: "single"; single: { dataType: IDataType } };
  customTypes?: Record<string, IPythonCustomType>;
}

interface IPythonCustomType {
  fieldMetadata: Record<string, { required?: boolean }>;
  fields: Record<string, IDataType>;
}

interface IPythonDiscoveryResult {
  functions: IPythonDiscoveredFunction[];
  errors?: Array<unknown>;
}

function discoverPythonFunctions(
  srcDir: string,
  rootProjectDir: string,
  pythonBinary: string,
): IPythonDiscoveryResult | null {
  const pythonPath = pythonBinary;
  try {
    accessSync(pythonPath, constants.X_OK);
  } catch {
    throw new Error(
      `Python binary not found or not executable at ${pythonPath}`,
    );
  }

  const result = spawnSync(
    pythonPath,
    [
      "-m",
      "functions.bin",
      "parse",
      "--src-dir",
      srcDir,
      "--root-project-dir",
      rootProjectDir,
      "--handle-errors",
    ],
    {
      cwd: rootProjectDir,
      encoding: "utf-8",
      maxBuffer: 50 * 1024 * 1024, // 50MB buffer - function discovery can produce large JSON output
    },
  );

  if (result.error) {
    consola.warn(
      `Python function discovery spawn error: ${result.error.message}`,
    );
    return null;
  }

  if (result.status !== 0) {
    // Parse error - could log stderr but return null for now
    consola.error(
      `Python function discovery failed: ${result.stderr || result.stdout}`,
    );
    return null;
  }

  try {
    // The Python command may output log lines before the JSON on stdout.
    // Try parsing JSON from each line boundary starting from the end,
    // which is more robust than matching a specific marker string.
    const stdout = result.stdout;
    const lines = stdout.split("\n");
    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i].trimStart();
      if (line.startsWith("{")) {
        const candidate = lines.slice(i).join("\n");
        try {
          const parsed = JSON.parse(candidate) as IPythonDiscoveryResult;
          if ("functions" in parsed) {
            return parsed;
          }
        } catch {
          // Not valid JSON from this line, try earlier
        }
      }
    }
    consola.error(
      `No valid JSON found in Python discovery output: ${stdout.slice(0, 500)}`,
    );
    return null;
  } catch (e: unknown) {
    consola.error(
      `Failed to parse Python discovery output: ${
        e instanceof Error ? e.message : e
      }`,
    );
    return null;
  }
}

interface FunctionDiscoveryModules {
  FunctionDiscoverer: IFunctionDiscovererConstructor;
  typescript: typeof ts;
}

// Lazy-loaded function discovery modules, keyed by nodeModulesPath
const discoveryModulesCache = new Map<
  string | undefined,
  FunctionDiscoveryModules
>();

async function loadFunctionDiscoverer(
  nodeModulesPath?: string,
): Promise<FunctionDiscoveryModules | null> {
  const cached = discoveryModulesCache.get(nodeModulesPath);
  if (cached) {
    return cached;
  }
  try {
    let modules: FunctionDiscoveryModules;
    if (nodeModulesPath) {
      // Use createRequire to load from the specified node_modules path
      // Both FunctionDiscoverer and TypeScript must be from the same node_modules
      // to ensure version compatibility (TypeScript versions must match for
      // program/typechecker interoperability)
      const requireFromPath = createRequire(
        pathToFileURL(path.join(nodeModulesPath, "package.json")).href,
      );
      const module = requireFromPath(
        "@foundry/functions-typescript-osdk-discovery",
      );
      modules = {
        FunctionDiscoverer: module.FunctionDiscoverer,
        typescript: requireFromPath("typescript"),
      };
    } else {
      // Use dynamic import to avoid compile-time dependency on optional package
      const modulePath = "@foundry/functions-typescript-osdk-discovery";
      const module = await import(/* @vite-ignore */ modulePath);
      modules = {
        FunctionDiscoverer: module.FunctionDiscoverer,
        typescript: ts, // Use the bundled TypeScript
      };
    }
    discoveryModulesCache.set(nodeModulesPath, modules);
    return modules;
  } catch (e: unknown) {
    consola.warn(
      "Failed to load function discovery modules:",
      e instanceof Error ? e.message : e,
    );
    return null;
  }
}

/**
 * TypeScript equivalent of OntologyIrToFullMetadataConverter.java
 * Converts ontology IR data to full metadata format for OSDK generation
 */
export class OntologyIrToFullMetadataConverter {
  /**
   * Main entry point - converts IR to full metadata
   */
  static getFullMetadataFromIr(
    ir: OntologyIrOntologyBlockDataV2,
  ): Ontologies.OntologyFullMetadata {
    const interfaceTypes = this.getOsdkInterfaceTypes(
      Object.values(ir.interfaceTypes),
    );
    const sharedPropertyTypes = this.getOsdkSharedPropertyTypes(
      Object.values(ir.sharedPropertyTypes),
    );
    const objectTypes = this.getOsdkObjectTypes(
      Object.values(ir.objectTypes),
      Object.values(ir.linkTypes),
    );
    const actionTypes = this.getOsdkActionTypes(Object.values(ir.actionTypes));

    return {
      interfaceTypes,
      sharedPropertyTypes,
      objectTypes,
      queryTypes: {},
      actionTypes,
      ontology: {
        apiName: "ontology",
        rid: `ri.00000`,
        displayName: "ontology",
        description: "",
      },
      valueTypes: {},
    };
  }

  static async getOsdkQueryTypes(
    pythonBinary?: string,
    functionsDir?: string,
    nodeModulesPath?: string,
    pythonFunctionsDir?: string,
    pythonRootProjectDir?: string,
  ): Promise<
    Record<Ontologies.VersionedQueryTypeApiName, Ontologies.QueryTypeV2>
  > {
    const queries: Ontologies.QueryTypeV2[] = [];

    if (functionsDir) {
      const tsQueries = await this.discoverTypeScriptFunctions(
        functionsDir,
        nodeModulesPath,
      );
      queries.push(...tsQueries);
    }

    if (pythonFunctionsDir && pythonRootProjectDir) {
      if (!pythonBinary) {
        throw new Error(
          "pythonBinary is required when pythonFunctionsDir is specified",
        );
      }
      const pyQueries = this.discoverPythonQueryTypes(
        pythonFunctionsDir,
        pythonRootProjectDir,
        pythonBinary,
      );
      queries.push(...pyQueries);
    }

    return queries.reduce<
      Record<
        Ontologies.VersionedQueryTypeApiName,
        Ontologies.QueryTypeV2
      >
    >(
      (acc, query) => {
        acc[query.apiName as string] = query;
        return acc;
      },
      {},
    );
  }

  private static async discoverTypeScriptFunctions(
    functionsDir: string,
    nodeModulesPath?: string,
  ): Promise<Ontologies.QueryTypeV2[]> {
    const discoveryModules = await loadFunctionDiscoverer(nodeModulesPath);
    if (!discoveryModules) {
      return [];
    }

    const { FunctionDiscoverer, typescript: discoveryTs } = discoveryModules;
    const { tsConfigPath, projectDir } = discoverComponentRoot(
      discoveryTs,
      functionsDir,
    );

    const program = this.createProgram(
      tsConfigPath,
      projectDir,
      discoveryTs,
    );

    const fd = new FunctionDiscoverer(program, projectDir, functionsDir);
    const functions = fd.discover();

    const queries: Ontologies.QueryTypeV2[] = [];
    functions.discoveredFunctions.forEach((func: IDiscoveredFunction) => {
      if (func.locator.type !== "typescriptOsdk") {
        return;
      }
      const functionName = func.locator.typescriptOsdk!.functionName;
      const queryType: Ontologies.QueryTypeV2 = {
        apiName: functionName,
        rid: `ri.function-registry.main.function.${functionName}`,
        version: "0.0.0",
        parameters: func.inputs.reduce<
          Record<ApiName, Ontologies.QueryParameterV2>
        >((acc, input) => {
          acc[input.name] = {
            dataType: convertDataType(input.dataType, func.customTypes),
          };
          return acc;
        }, {}),
        output: convertDataType(
          func.output.single.dataType,
          func.customTypes,
        ),
      };
      queries.push(queryType);
    });
    return queries;
  }

  private static discoverPythonQueryTypes(
    pythonFunctionsDir: string,
    pythonRootProjectDir: string,
    pythonBinary: string,
  ): Ontologies.QueryTypeV2[] {
    const pythonResult = discoverPythonFunctions(
      pythonFunctionsDir,
      pythonRootProjectDir,
      pythonBinary,
    );

    if (!pythonResult) {
      return [];
    }

    const queries: Ontologies.QueryTypeV2[] = [];
    for (const func of pythonResult.functions) {
      const functionName = func.locator.python3.functionName;
      const customTypes = func.customTypes ?? {};
      const queryType: Ontologies.QueryTypeV2 = {
        apiName: functionName,
        rid: `ri.function-registry.main.function.${functionName}`,
        version: "0.0.0",
        parameters: func.inputs.reduce<
          Record<ApiName, Ontologies.QueryParameterV2>
        >((acc, input) => {
          acc[input.name] = {
            dataType: convertDataType(
              input.dataType,
              customTypes,
              input.required,
            ),
          };
          return acc;
        }, {}),
        output: convertDataType(
          func.output.single.dataType,
          customTypes,
        ),
      };
      queries.push(queryType);
    }
    return queries;
  }

  static createProgram(
    tsConfigFilePath: string,
    projectDir: string,
    typescript: typeof ts = ts,
  ): ts.Program {
    const configFile = typescript.readConfigFile(
      tsConfigFilePath,
      typescript.sys.readFile,
    );
    if (configFile.error) {
      throw new Error(
        `Failed to read tsconfig at ${tsConfigFilePath}: ${
          typescript.flattenDiagnosticMessageText(
            configFile.error.messageText,
            "\n",
          )
        }`,
      );
    }
    const { options, fileNames, errors } = typescript
      .parseJsonConfigFileContent(
        configFile.config,
        typescript.sys,
        projectDir,
      );
    return typescript.createProgram({
      options,
      rootNames: fileNames,
      configFileParsingDiagnostics: errors,
    });
  }

  /**
   * Convert IR object types to OSDK format
   */
  static getOsdkObjectTypes(
    objects: OntologyIrObjectTypeBlockDataV2[],
    links: OntologyIrLinkTypeBlockDataV2[],
  ): Record<ApiName, Ontologies.ObjectTypeFullMetadata> {
    const linkMappings = this.getLinkMappings(links);

    const result: Record<ApiName, Ontologies.ObjectTypeFullMetadata> = {};

    for (const fullObject of objects) {
      const object = fullObject.objectType;
      const icon = object.displayMetadata.icon;

      if (icon.type !== "blueprint") {
        throw new Error("Only blueprint icons are supported");
      }

      // Ensure we have exactly one primary key
      if (object.primaryKeys.length !== 1) {
        throw new Error("Object must have exactly 1 primary key");
      }

      // Build a mapping from property RID to apiName for resolving references
      const propRidToApiName: Record<string, string> = {};
      for (const [propRid, prop] of Object.entries(object.propertyTypes)) {
        propRidToApiName[propRid] = prop.apiName;
      }

      // Resolve primaryKey and titleProperty from RID to apiName
      const primaryKeyRid = object.primaryKeys[0];
      const primaryKey = propRidToApiName[primaryKeyRid] ?? primaryKeyRid;
      const titlePropertyRid = object.titlePropertyTypeRid;
      const titleProperty = propRidToApiName[titlePropertyRid]
        ?? titlePropertyRid;

      const properties: Record<ApiName, Ontologies.PropertyV2> = {};
      for (const [propRid, prop] of Object.entries(object.propertyTypes)) {
        const propApiName = prop.apiName;
        const visibility = prop.displayMetadata.visibility;
        let visibilityEnum: "NORMAL" | "PROMINENT" | "HIDDEN" = "NORMAL";

        if (!visibility) {
          visibilityEnum = "NORMAL";
        } else {
          switch (visibility) {
            case "PROMINENT":
              visibilityEnum = "PROMINENT";
              break;
            case "NORMAL":
              visibilityEnum = "NORMAL";
              break;
            case "HIDDEN":
              visibilityEnum = "HIDDEN";
              break;
            default:
              visibilityEnum = "NORMAL";
          }
        }

        const dataType = this.getOsdkPropertyType(prop.type);
        if (dataType) {
          const status = {
            type: prop.status.type,
            ...((prop.status as unknown as Record<string, unknown>)[
              prop.status.type
            ] ?? {}),
          } as unknown as Ontologies.PropertyTypeStatus;

          properties[propApiName] = {
            displayName: prop.displayMetadata.displayName,
            rid: `ri.${object.apiName}.${propApiName}`,
            status,
            description: prop.displayMetadata.description ?? undefined,
            visibility: visibilityEnum,
            dataType,
          };
        }
      }

      const objectTypeV2: Ontologies.ObjectTypeV2 = {
        apiName: object.apiName,
        description: object.displayMetadata.description ?? undefined,
        displayName: object.displayMetadata.displayName,
        pluralDisplayName: "", // Not available in IR
        primaryKey,
        titleProperty,
        icon: {
          type: "blueprint",
          color: icon.blueprint.color,
          name: icon.blueprint.locator,
        },
        status: this.convertObjectTypeStatus(object.status),
        properties,
        rid: `ri.${object.apiName}`,
      };

      const sharedPropertyTypeMappings: Record<ApiName, ApiName> = {};
      const implementsInterfaces2: Record<
        ApiName,
        Ontologies.ObjectTypeInterfaceImplementation
      > = {};

      for (const ii of object.implementsInterfaces2) {
        const interfaceApiName = ii.interfaceTypeApiName;
        const propertyMappings: Record<ApiName, ApiName> = {};

        for (
          const [sharedPropKey, propMapping] of Object.entries(ii.properties)
        ) {
          const propertyApiName = propMapping.propertyTypeRid;
          propertyMappings[sharedPropKey] = propertyApiName;
          sharedPropertyTypeMappings[sharedPropKey] = propertyApiName;
        }

        implementsInterfaces2[interfaceApiName] = {
          properties: propertyMappings,
          propertiesV2: {},
          links: {},
        };
      }

      const objectApiName = object.apiName;
      result[objectApiName] = {
        objectType: objectTypeV2,
        implementsInterfaces: [], // Empty for now - legacy field
        implementsInterfaces2,
        sharedPropertyTypeMapping: sharedPropertyTypeMappings,
        linkTypes: linkMappings[objectApiName] || [],
      };
    }

    return result;
  }

  /**
   * Create link mappings from IR link types
   */
  static getLinkMappings(
    links: OntologyIrLinkTypeBlockDataV2[],
  ): Record<string, Ontologies.LinkTypeSideV2[]> {
    const result: Record<string, Ontologies.LinkTypeSideV2[]> = {};

    for (const link of links) {
      const linkType = link.linkType;
      const linkStatus = this.convertLinkTypeStatus(linkType.status);

      let mappings: Record<string, Ontologies.LinkTypeSideV2>;
      switch (linkType.definition.type) {
        case "manyToMany": {
          const linkDef = linkType.definition.manyToMany;
          const sideA: Ontologies.LinkTypeSideV2 = {
            apiName: linkDef.objectTypeAToBLinkMetadata.apiName ?? "",
            displayName: linkDef.objectTypeAToBLinkMetadata
              .displayMetadata.displayName,
            cardinality: "MANY",
            objectTypeApiName: linkDef.objectTypeRidB,
            linkTypeRid:
              `ri.${linkDef.objectTypeRidA}.${linkType.id}.${linkDef.objectTypeRidB}`,
            status: linkStatus,
          };

          const sideB: Ontologies.LinkTypeSideV2 = {
            ...sideA,
            apiName: linkDef.objectTypeBToALinkMetadata.apiName
              ?? "",
            objectTypeApiName: linkDef.objectTypeRidA,
          };

          mappings = {
            [linkDef.objectTypeRidA]: sideA,
            [linkDef.objectTypeRidB]: sideB,
          };
          break;
        }
        case "oneToMany": {
          const linkDef = linkType.definition.oneToMany;

          invariant(
            linkDef.oneSidePrimaryKeyToManySidePropertyMapping.length === 1,
          );

          const common = {
            linkTypeRid:
              `ri.${linkDef.objectTypeRidOneSide}.${linkType.id}.${linkDef.objectTypeRidManySide}`,
            status: linkStatus,
          };

          const manySide: Ontologies.LinkTypeSideV2 = {
            ...common,
            apiName: linkDef.oneToManyLinkMetadata.apiName ?? "",
            displayName:
              linkDef.oneToManyLinkMetadata.displayMetadata.displayName,
            objectTypeApiName: linkDef.objectTypeRidOneSide,
            cardinality: "ONE",
            // This should only exist on the one side and it should be the property on this object
            // that points to the PK on the other object
            foreignKeyPropertyApiName:
              linkDef.oneSidePrimaryKeyToManySidePropertyMapping[0].to
                .apiName,
          };

          const oneSide: Ontologies.LinkTypeSideV2 = {
            ...common,
            cardinality: "MANY",
            apiName: linkDef.manyToOneLinkMetadata.apiName ?? "",
            displayName:
              linkDef.manyToOneLinkMetadata.displayMetadata.displayName,
            objectTypeApiName: linkDef.objectTypeRidManySide,
          };

          mappings = {
            [linkDef.objectTypeRidOneSide]: oneSide,
            [linkDef.objectTypeRidManySide]: manySide,
          };
          break;
        }
        default:
          throw new Error("Unknown link definition type");
      }

      // Add mappings to result
      for (const [objectTypeApiName, linkSide] of Object.entries(mappings)) {
        if (!result[objectTypeApiName]) {
          result[objectTypeApiName] = [];
        }
        result[objectTypeApiName].push(linkSide);
      }
    }

    return result;
  }

  /**
   * Convert IR action types to OSDK format
   */
  static getOsdkActionTypes(
    actions: OntologyIrActionTypeBlockDataV2[],
  ): Record<ApiName, Ontologies.ActionTypeV2> {
    const result: Record<ApiName, Ontologies.ActionTypeV2> = {};

    for (const action of actions) {
      const metadata = action.actionType.metadata;
      const actionType: Ontologies.ActionTypeV2 = {
        rid: `ri.action.${metadata.apiName}`,
        apiName: metadata.apiName,
        displayName: metadata.displayMetadata.displayName,
        description: metadata.displayMetadata.description,
        parameters: this.getOsdkActionParameters(action),
        operations: this.getOsdkActionOperations(action),
        status: this.convertActionTypeStatus(metadata.status),
      };

      result[actionType.apiName] = actionType;
    }

    return result;
  }

  /**
   * Convert action operations from IR
   */
  static getOsdkActionOperations(
    action: OntologyIrActionTypeBlockDataV2,
  ): Ontologies.LogicRule[] {
    return action.actionType.actionTypeLogic.logic.rules.map(irLogic => {
      switch (irLogic.type) {
        case "addInterfaceRule": {
          const r = irLogic.addInterfaceRule;
          return {
            type: "createInterfaceObject",
            interfaceTypeApiName: r.interfaceApiName,
          } satisfies Ontologies.LogicRule;
        }
        case "addLinkRule":
          throw new Error("Add link rule not supported");
        case "addObjectRule": {
          const r = irLogic.addObjectRule;
          return {
            type: "createObject",
            objectTypeApiName: r.objectTypeId,
          } satisfies Ontologies.LogicRule;
        }
        case "addOrModifyObjectRuleV2": {
          const r = irLogic.addOrModifyObjectRuleV2;

          const modifyParamType =
            action.actionType.metadata.parameters[r.objectToModify].type;
          if (modifyParamType.type === "objectReference") {
            return {
              type: "modifyObject",
              objectTypeApiName: modifyParamType.objectReference.objectTypeId,
            } satisfies Ontologies.LogicRule;
          } else {
            throw new Error(
              "Unable to convert modifyAction because parameter does not exist",
            );
          }
        }
        case "deleteLinkRule":
          throw new Error("Delete link rule not supported");
        case "deleteObjectRule": {
          const r = irLogic.deleteObjectRule;
          const ontologyIrParameter =
            action.actionType.metadata.parameters[r.objectToDelete];
          if (ontologyIrParameter.type.type !== "objectReference") {
            throw new Error("invalid parameter type");
          }

          return {
            type: "deleteObject",
            objectTypeApiName:
              ontologyIrParameter.type.objectReference.objectTypeId,
          } satisfies Ontologies.LogicRule;
        }
        case "modifyInterfaceRule": {
          const r = irLogic.modifyInterfaceRule;
          const parameter = action.actionType.metadata
            .parameters[r.interfaceObjectToModifyParameter];
          if (!parameter) {
            throw new Error("Could not find interface type api name");
          }

          let interfaceTypeApiName: string | null = null;
          switch (parameter.type.type) {
            case "interfaceReference":
              interfaceTypeApiName =
                parameter.type.interfaceReference.interfaceTypeRid;
              break;
            case "interfaceReferenceList":
              interfaceTypeApiName =
                parameter.type.interfaceReferenceList.interfaceTypeRid;
              break;
            default:
              interfaceTypeApiName = null;
          }

          if (!interfaceTypeApiName) {
            throw new Error("Could not find interface type api name");
          }

          return {
            type: "modifyInterfaceObject",
            interfaceTypeApiName,
          } satisfies Ontologies.LogicRule;
        }
        case "modifyObjectRule": {
          const r = irLogic.modifyObjectRule;

          const modifyParamType =
            action.actionType.metadata.parameters[r.objectToModify].type;
          if (modifyParamType.type === "objectReference") {
            return {
              type: "modifyObject",
              objectTypeApiName: modifyParamType.objectReference.objectTypeId,
            } satisfies Ontologies.LogicRule;
          } else {
            throw new Error(
              "Unable to convert modifyAction because parameter does not exist",
            );
          }
        }
        default:
          throw new Error("Unknown logic rule type");
      }
    });
  }

  /**
   * Convert action parameters from IR
   */
  static getOsdkActionParameters(
    action: OntologyIrActionTypeBlockDataV2,
  ): Record<string, Ontologies.ActionParameterV2> {
    const result: Record<string, Ontologies.ActionParameterV2> = {};

    for (
      const [paramKey, irParameter] of Object.entries(
        action.actionType.metadata.parameters,
      )
    ) {
      let dataType: Ontologies.ActionParameterType;
      switch (irParameter.type.type) {
        case "attachment":
          dataType = { type: "attachment" };
          break;
        case "attachmentList":
          dataType = {
            type: "array",
            subType: { type: "attachment" },
          };
          break;
        case "boolean":
          dataType = { type: "boolean" };
          break;
        case "booleanList":
          dataType = {
            type: "array",
            subType: { type: "boolean" },
          };
          break;
        case "date":
          dataType = { type: "date" };
          break;
        case "dateList":
          dataType = {
            type: "array",
            subType: { type: "date" },
          };
          break;
        case "decimal":
          throw new Error("Decimal type not supported");
        case "decimalList":
          throw new Error("Decimal list type not supported");
        case "double":
          dataType = { type: "double" };
          break;
        case "doubleList":
          dataType = {
            type: "array",
            subType: { type: "double" },
          };
          break;
        case "geohash":
          dataType = { type: "geohash" };
          break;
        case "geohashList":
          dataType = {
            type: "array",
            subType: { type: "geohash" },
          };
          break;
        case "geoshape":
          dataType = { type: "geoshape" };
          break;
        case "geoshapeList":
          dataType = {
            type: "array",
            subType: { type: "geoshape" },
          };
          break;
        case "geotimeSeriesReference":
          throw new Error("Geotime series reference type not supported");
        case "geotimeSeriesReferenceList":
          throw new Error("Geotime series reference list type not supported");
        case "integer":
          dataType = { type: "integer" };
          break;
        case "integerList":
          dataType = {
            type: "array",
            subType: { type: "integer" },
          };
          break;
        case "interfaceReference":
          throw new Error("Interface reference type not supported");
        case "interfaceReferenceList":
          throw new Error("Interface reference list type not supported");
        case "long":
          dataType = { type: "long" };
          break;
        case "longList":
          dataType = {
            type: "array",
            subType: { type: "long" },
          };
          break;
        case "marking":
          dataType = { type: "marking" };
          break;
        case "markingList":
          dataType = {
            type: "array",
            subType: { type: "marking" },
          };
          break;
        case "mediaReference":
          dataType = { type: "mediaReference" };
          break;
        case "mediaReferenceList":
          dataType = {
            type: "array",
            subType: { type: "mediaReference" },
          };
          break;
        case "objectReference": {
          const t = irParameter.type.objectReference;
          dataType = {
            type: "object",
            objectTypeApiName: t.objectTypeId,
            objectApiName: t.objectTypeId,
          };
          break;
        }
        case "objectReferenceList": {
          const t = irParameter.type.objectReferenceList;
          dataType = {
            type: "array",
            subType: {
              type: "object",
              objectTypeApiName: t.objectTypeId,
              objectApiName: t.objectTypeId,
            },
          };
          break;
        }
        case "objectSetRid":
          dataType = { type: "objectSet" };
          break;
        case "objectTypeReference":
          dataType = { type: "objectType" };
          break;
        case "string":
          dataType = { type: "string" };
          break;
        case "stringList":
          dataType = {
            type: "array",
            subType: { type: "string" },
          };
          break;
        case "struct":
          throw new Error("Struct type not supported (lazy implementation)");
        case "structList":
          throw new Error("Struct list type not supported");
        case "timeSeriesReference":
          throw new Error("Time series reference type not supported");
        case "timestamp":
          dataType = { type: "timestamp" };
          break;
        case "timestampList":
          dataType = {
            type: "array",
            subType: { type: "timestamp" },
          };
          break;
        default:
          throw new Error("Unknown parameter type");
      }

      result[paramKey] = {
        displayName: irParameter.displayMetadata.displayName,
        description: irParameter.displayMetadata.description,
        required: isParameterRequired(action, paramKey),
        dataType,
      };
    }

    return result;
  }

  /**
   * Convert interface types from IR
   */
  static getOsdkInterfaceTypes(
    interfaces: OntologyIrInterfaceTypeBlockDataV2[],
  ): Record<ApiName, Ontologies.InterfaceType> {
    const result: Record<ApiName, Ontologies.InterfaceType> = {};

    for (const interfaceData of interfaces) {
      const interfaceType = interfaceData.interfaceType;

      // Convert shared properties to interface shared properties
      const properties: Record<
        ApiName,
        Ontologies.InterfaceSharedPropertyType
      > = {};
      for (
        const [propKey, propValue] of Object.entries(interfaceType.propertiesV2)
      ) {
        const spt = propValue.sharedPropertyType;
        const dataType = this.getOsdkPropertyType(spt.type);
        if (dataType) {
          properties[propKey] = {
            rid: `ri.interface.${interfaceType.apiName}.${spt.apiName}`,
            apiName: spt.apiName,
            displayName: spt.displayMetadata.displayName,
            description: spt.displayMetadata.description ?? undefined,
            dataType,
            required: false, // Default to false for now - this should come from IR if available
          };
        }
      }

      const result_interfaceType: Ontologies.InterfaceType = {
        apiName: interfaceType.apiName,
        rid: `ri.interface.${interfaceType.apiName}`,
        properties,
        allProperties: properties, // Same as properties for now
        propertiesV2: {},
        allPropertiesV2: {},
        extendsInterfaces: interfaceType.extendsInterfaces.map(val => val),
        allExtendsInterfaces: interfaceType.extendsInterfaces.map(val => val), // Same as extendsInterfaces for now
        implementedByObjectTypes: [], // Empty for now
        displayName: interfaceType.displayMetadata.displayName,
        description: interfaceType.displayMetadata.description ?? undefined,
        links: this.getOsdkInterfaceLinkTypes(interfaceType.links),
        allLinks: this.getOsdkInterfaceLinkTypes(interfaceType.links), // Same as links for now
      };

      result[result_interfaceType.apiName] = result_interfaceType;
    }

    return result;
  }

  /**
   * Convert interface link types from IR
   */
  static getOsdkInterfaceLinkTypes(
    ilts: OntologyIrMarketplaceInterfaceLinkType[],
  ): Record<ApiName, Ontologies.InterfaceLinkType> {
    const result: Record<ApiName, Ontologies.InterfaceLinkType> = {};

    for (const ilt of ilts) {
      let linkedEntityApiName: {
        type: "interfaceTypeApiName";
        apiName: string;
      };
      switch (ilt.linkedEntityTypeId.type) {
        case "interfaceType": {
          const interfaceType = ilt.linkedEntityTypeId.interfaceType;
          linkedEntityApiName = {
            type: "interfaceTypeApiName" as const,
            apiName: interfaceType,
          };
          break;
        }
        case "objectType":
          throw new Error(
            "Interface links to object types should not be possible in ontology as code yet",
          );
        default:
          throw new Error("Unknown linked entity type");
      }

      let cardinality: Ontologies.InterfaceLinkTypeCardinality;
      switch (ilt.cardinality) {
        case "SINGLE":
          cardinality = "ONE";
          break;
        case "MANY":
          cardinality = "MANY";
          break;
        default:
          throw new Error("Unknown cardinality type");
      }

      const interfaceLinkType: Ontologies.InterfaceLinkType = {
        rid:
          `ri.interfacelink.${linkedEntityApiName.apiName}.${ilt.metadata.apiName}`,
        apiName: ilt.metadata.apiName,
        displayName: ilt.metadata.displayName,
        description: ilt.metadata.description,
        linkedEntityApiName,
        cardinality,
        required: ilt.required,
      };

      result[interfaceLinkType.apiName] = interfaceLinkType;
    }

    return result;
  }

  /**
   * Convert shared property types from IR
   */
  static getOsdkSharedPropertyTypes(
    spts: OntologyIrSharedPropertyTypeBlockDataV2[],
  ): Record<ApiName, Ontologies.SharedPropertyType> {
    const result: Record<ApiName, Ontologies.SharedPropertyType> = {};

    for (const spt of spts) {
      const dataType = this.getOsdkPropertyType(spt.sharedPropertyType.type);
      if (dataType) {
        const sharedPropertyType: Ontologies.SharedPropertyType = {
          rid: `ri.spt.${spt.sharedPropertyType.apiName}`,
          apiName: spt.sharedPropertyType.apiName,
          displayName: spt.sharedPropertyType.displayMetadata.displayName,
          description: spt.sharedPropertyType.displayMetadata.description
            ?? undefined,
          dataType,
        };

        result[sharedPropertyType.apiName] = sharedPropertyType;
      } else {
        throw new Error(
          `Unsupported property type '${
            JSON.stringify(spt.sharedPropertyType.type)
          }' for spt '${spt.sharedPropertyType.apiName}'`,
        );
      }
    }

    return result;
  }

  /**
   * Convert property types from IR to OSDK format
   */
  static getOsdkPropertyType(
    type: OntologyIrType,
  ): Ontologies.ObjectPropertyType | null {
    switch (type.type) {
      case "array": {
        const value = type.array;
        const subType = this.getOsdkPropertyType(value.subtype);
        return subType ? { type: "array", subType, reducers: [] } : null;
      }
      case "boolean":
        return { type: "boolean" };
      case "byte":
        return { type: "byte" };
      case "date":
        return { type: "date" };
      case "decimal":
        return { type: "decimal" };
      case "double":
        return { type: "double" };
      case "float":
        return { type: "float" };
      case "geohash":
        return { type: "geopoint" };
      case "geoshape":
        return { type: "geoshape" };
      case "integer":
        return { type: "integer" };
      case "long":
        return { type: "long" };
      case "short":
        return { type: "short" };
      case "string":
        return { type: "string" };
      case "experimentalTimeDependentV1":
        return null;
      case "timestamp":
        return { type: "timestamp" };
      case "attachment":
        return { type: "attachment" };
      case "marking":
        return { type: "marking" };
      case "cipherText":
        return null;
      case "mediaReference":
        return null;
      case "vector":
        return null;
      case "geotimeSeriesReference":
        return null;
      case "struct": {
        const value = type.struct;
        const ridBase = `ri.struct.${
          hash("sha256", JSON.stringify(type)).slice(0, 10)
        }`;
        return {
          type: "struct",
          structFieldTypes: value.structFields.map(field => {
            const fieldDataType = this.getOsdkPropertyType(field.fieldType);
            if (!fieldDataType) {
              throw new Error(
                `Unsupported field type in struct: ${field.apiName}`,
              );
            }
            return {
              apiName: field.apiName,
              rid: `${ridBase}.${field.apiName}`,
              dataType: fieldDataType,
            };
          }),
        };
      }
      default:
        return null;
    }
  }

  private static convertObjectTypeStatus(
    status: OntologyIrObjectTypeStatus,
  ): "ACTIVE" | "DEPRECATED" | "EXPERIMENTAL" {
    switch (status.type) {
      case "active":
        return "ACTIVE";
      case "deprecated":
        return "DEPRECATED";
      case "endorsed":
        throw new Error("Endorsed status is not supported yet");
      case "example":
        throw new Error("Example status has no mapping");
      case "experimental":
        return "EXPERIMENTAL";
      default:
        throw new Error(`Unknown object type status: ${status}`);
    }
  }

  private static convertActionTypeStatus(
    status: OntologyIrActionTypeStatus,
  ): "ACTIVE" | "DEPRECATED" | "EXPERIMENTAL" {
    switch (status.type) {
      case "active":
        return "ACTIVE";
      case "deprecated":
        return "DEPRECATED";
      case "example":
        throw new Error("Example status has no mapping");
      case "experimental":
        return "EXPERIMENTAL";
      default:
        throw new Error(`Unknown action type status: ${status}`);
    }
  }

  private static convertLinkTypeStatus(
    status: OntologyIrLinkTypeStatus,
  ): "ACTIVE" | "DEPRECATED" | "EXPERIMENTAL" {
    switch (status.type) {
      case "active":
        return "ACTIVE";
      case "deprecated":
        return "DEPRECATED";
      case "example":
        throw new Error("Example status has no mapping");
      case "experimental":
        return "EXPERIMENTAL";
      default:
        throw new Error(`Unknown link type status: ${status}`);
    }
  }
}

function discoverComponentRoot(
  typescript: typeof ts,
  functionsDir: string,
): { tsConfigPath: string; projectDir: string } {
  // Find tsconfig.json - try functionsDir first, then parent directory
  let tsConfigPath = path.join(functionsDir, "tsconfig.json");
  let projectDir = functionsDir;
  const configResult = typescript.readConfigFile(
    tsConfigPath,
    typescript.sys.readFile,
  );
  if (configResult.error) {
    tsConfigPath = path.join(path.dirname(functionsDir), "tsconfig.json");
    projectDir = path.dirname(functionsDir);
  }
  return { tsConfigPath, projectDir };
}

function isParameterRequired(
  action: OntologyIrActionTypeBlockDataV2,
  paramKey: string,
): boolean {
  return action.actionType.actionTypeLogic.validation
    .parameterValidations[paramKey].defaultValidation.validation.required.type
    === "required";
}
