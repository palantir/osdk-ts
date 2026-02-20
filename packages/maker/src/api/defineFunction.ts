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

import { OntologyIrToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import { consola } from "consola";
import * as path from "node:path";
import type * as ts from "typescript";

export interface FunctionIrBlockData {
  functionsBlockDataV1: Record<string, unknown>;
}

// Type definitions for optional function discovery dependencies
type IFunctionDiscoverer = new(
  program: ts.Program,
  entryPointPath: string,
  fullFilePath: string,
  entityMappings?: IEntityMetadataMapping,
) => {
  discover(): {
    discoveredFunctions: IDiscoveredFunction[];
    diagnostics?: unknown;
  };
};

interface IDiscoveredFunction {
  locator:
    | { type: "typescriptOsdk"; typescriptOsdk: { functionName: string } }
    | { type: string };
  [key: string]: unknown;
}

export interface IEntityMetadataMapping {
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
let cachedFunctionDiscoverer: IFunctionDiscoverer | null = null;

async function loadFunctionDiscoverer(): Promise<IFunctionDiscoverer | null> {
  if (cachedFunctionDiscoverer != null) {
    return cachedFunctionDiscoverer;
  }
  try {
    const modulePath = "@foundry/functions-typescript-osdk-discovery";
    const module = await import(/* @vite-ignore */ modulePath);
    cachedFunctionDiscoverer = module.FunctionDiscoverer;
    return cachedFunctionDiscoverer;
  } catch (e: unknown) {
    consola.warn(
      "Failed to load @foundry/functions-typescript-osdk-discovery:",
      e instanceof Error ? e.message : e,
    );
    return null;
  }
}

function extractFunctionEntries(
  discoveredFunctions: IDiscoveredFunction[],
): Array<[string, IDiscoveredFunction]> {
  return discoveredFunctions.map((fn: IDiscoveredFunction) => {
    if (fn.locator.type !== "typescriptOsdk") {
      throw new Error(
        `OAC functions must be TypeScript, got type: ${fn.locator.type}`,
      );
    }
    const locator = fn.locator as {
      typescriptOsdk: { functionName: string };
    };
    return [locator.typescriptOsdk.functionName, fn];
  });
}

export async function generateFunctionsIr(
  rootDir: string,
  configPath?: string,
  entityMappings?: IEntityMetadataMapping,
): Promise<FunctionIrBlockData> {
  const functionsDiscoverer = await loadFunctionDiscoverer();
  if (!functionsDiscoverer) {
    throw new Error(
      "Function discovery requires @foundry/functions-typescript-osdk-discovery to be installed",
    );
  }

  const tsConfigPath = configPath ?? path.join(rootDir, "tsconfig.json");
  const program = OntologyIrToFullMetadataConverter.createProgram(
    tsConfigPath,
    rootDir,
  );
  const functionsDir = path.join(rootDir, "functions");
  const fd = new functionsDiscoverer(
    program,
    rootDir,
    functionsDir,
    entityMappings,
  );
  const functions = fd.discover();

  return {
    functionsBlockDataV1: Object.fromEntries(
      extractFunctionEntries(functions.discoveredFunctions),
    ),
  };
}
