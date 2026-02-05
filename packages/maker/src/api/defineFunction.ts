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

import * as path from "path";
import * as ts from "typescript";
import type { FunctionIrBlockData } from "./types.js";

// Type definitions for optional function discovery dependencies
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IFunctionDiscoverer = new (...args: any[]) => {
  discover(): { discoveredFunctions: IDiscoveredFunction[]; diagnostics?: unknown };
};

interface IDiscoveredFunction {
  locator:
    | { type: "typescriptOsdk"; typescriptOsdk: { functionName: string } }
    | { type: string };
  [key: string]: unknown;
}

interface IEntityMetadataMapping {
  ontologies: Record<
    string,
    {
      objectTypes: Record<
        string,
        {
          objectTypeId: string;
          primaryKey: { propertyId: string };
          propertyTypes: Record<string, { propertyId: string }>;
          linkTypes: Record<string, unknown>;
        }
      >;
      interfaceTypes: Record<string, unknown>;
    }
  >;
}

// Lazy-loaded function discovery module
let FunctionDiscoverer: IFunctionDiscoverer | null = null;

async function loadFunctionDiscoverer(): Promise<IFunctionDiscoverer | null> {
  if (FunctionDiscoverer !== null) {
    return FunctionDiscoverer;
  }
  try {
    const modulePath = "@foundry/functions-typescript-osdk-discovery";
    const module = await import(/* @vite-ignore */ modulePath);
    FunctionDiscoverer = module.FunctionDiscoverer;
    return FunctionDiscoverer;
  } catch {
    return null;
  }
}

export async function defineFunction(
  dirPath: string,
): Promise<FunctionIrBlockData> {
  const FD = await loadFunctionDiscoverer();
  if (!FD) {
    throw new Error(
      "Function discovery requires @foundry/functions-typescript-osdk-discovery to be installed",
    );
  }

  const srcDir =
    "/Volumes/git/osdk-ts/packages/generator-converters.ontologyir/src";
  const tsConfigFilePath = path.join(srcDir, "tsconfig.json");
  const program = createProgram(tsConfigFilePath, srcDir);
  const entryPointPath = path.join(srcDir, "index.ts");
  const fullFilePath = path.join(srcDir, dirPath);

  // Initialize FunctionDiscoverer with the program
  const fd = new FD(program, entryPointPath, fullFilePath);

  // Discover functions using the provided filePath as the functionsDirectoryPath
  const functions = fd.discover();
  return {
    functionsBlockDataV1: Object.fromEntries(
      functions.discoveredFunctions.map((fn: IDiscoveredFunction) =>
        fn.locator.type === "typescriptOsdk"
          ? [(fn.locator as { typescriptOsdk: { functionName: string } }).typescriptOsdk.functionName, fn]
          : (() => {
            throw new Error("OAC functions must be TypeScript");
          })()
      ),
    ),
  };
}

export async function testDefineFunction(
  dirPath: string,
): Promise<FunctionIrBlockData> {
  const FD = await loadFunctionDiscoverer();
  if (!FD) {
    throw new Error(
      "Function discovery requires @foundry/functions-typescript-osdk-discovery to be installed",
    );
  }

  const srcDir =
    "/Volumes/git/ethana-ontology-local/test-ontology-ontology-as-code/test-ontology-ontology/src";
  const tsConfigFilePath = path.join(srcDir, "tsconfig.json");
  const program = createProgram(tsConfigFilePath, srcDir);
  const entryPointPath = path.join(srcDir, "index.ts");
  const fullFilePath = path.join(srcDir, dirPath);

  // Initialize FunctionDiscoverer with the program
  const entityMetadataMapping: IEntityMetadataMapping = {
    ontologies: {
      ontologyRid: {
        objectTypes: {
          "com.palantir.test-group.test-ontology-ontology.employees26": {
            objectTypeId: "test-id",
            primaryKey: {
              propertyId: "id",
            },
            propertyTypes: {
              id: { propertyId: "id" },
            },
            linkTypes: {},
          },
        },
        interfaceTypes: {},
      },
    },
  };
  const fd = new FD(
    program,
    entryPointPath,
    fullFilePath,
    entityMetadataMapping,
  );

  // Discover functions using the provided filePath as the functionsDirectoryPath
  const functions = fd.discover();
  // eslint-disable-next-line no-console
  console.log(functions.diagnostics);
  return {
    functionsBlockDataV1: Object.fromEntries(
      functions.discoveredFunctions.map((fn: IDiscoveredFunction) =>
        fn.locator.type === "typescriptOsdk"
          ? [(fn.locator as { typescriptOsdk: { functionName: string } }).typescriptOsdk.functionName, fn]
          : (() => {
            throw new Error("OAC functions must be TypeScript");
          })()
      ),
    ),
  };
}

function createProgram(
  tsConfigFilePath: string,
  projectDir: string,
): ts.Program {
  const { config } = ts.readConfigFile(tsConfigFilePath, ts.sys.readFile);
  const { options, fileNames, errors } = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    projectDir,
  );
  return ts.createProgram({
    options,
    rootNames: fileNames,
    configFileParsingDiagnostics: errors,
  });
}

export async function generateFunctionsIr(
  rootDir: string,
  configPath?: string,
  entityMappings?: IEntityMetadataMapping,
): Promise<FunctionIrBlockData> {
  const FD = await loadFunctionDiscoverer();
  if (!FD) {
    throw new Error(
      "Function discovery requires @foundry/functions-typescript-osdk-discovery to be installed",
    );
  }

  const tsConfigPath = configPath ?? "tsconfig.json";
  const program = createProgram(tsConfigPath, rootDir);
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(entityMappings, null, 2));
  const fd = new FD(program, rootDir, rootDir + "/functions", entityMappings);
  const functions = fd.discover();
  // eslint-disable-next-line no-console
  console.log(functions.diagnostics);
  return {
    functionsBlockDataV1: Object.fromEntries(
      functions.discoveredFunctions.map((fn: IDiscoveredFunction) =>
        fn.locator.type === "typescriptOsdk"
          ? [(fn.locator as { typescriptOsdk: { functionName: string } }).typescriptOsdk.functionName, fn]
          : (() => {
            throw new Error("OAC functions must be TypeScript");
          })()
      ),
    ),
  };
}
