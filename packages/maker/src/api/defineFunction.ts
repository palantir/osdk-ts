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

import { FunctionDiscoverer } from "@foundry/functions-typescript-osdk-discovery";
import type { FunctionIrBlockData } from "./types.js";

export function defineFunction(dirPath: string): FunctionIrBlockData {
  const srcDir =
    "/Volumes/git/osdk-ts/packages/generator-converters.ontologyir/src";
  const tsConfigFilePath = path.join(srcDir, "tsconfig.json");
  const program = createProgram(tsConfigFilePath, srcDir);
  const entryPointPath = path.join(srcDir, "index.ts");
  const fullFilePath = path.join(srcDir, dirPath);

  // Initialize FunctionDiscoverer with the program
  const fd = new FunctionDiscoverer(program, entryPointPath, fullFilePath);

  // Discover functions using the provided filePath as the functionsDirectoryPath
  const functions = fd.discover();
  return {
    functionsBlockDataV1: Object.fromEntries(
      functions.discoveredFunctions.map(fn =>
        "typescriptOsdk" in fn.locator
          ? [fn.locator.typescriptOsdk.functionName, fn]
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

export function generateFunctionsIr(rootDir: string): FunctionIrBlockData {
  const tsConfigPath = "tsconfig.json";
  const program = createProgram(tsConfigPath, rootDir);
  const fd = new FunctionDiscoverer(program, rootDir, rootDir + "/functions");
  const functions = fd.discover();
  return {
    functionsBlockDataV1: Object.fromEntries(
      functions.discoveredFunctions.map(fn =>
        "typescriptOsdk" in fn.locator
          ? [fn.locator.typescriptOsdk.functionName, fn]
          : (() => {
            throw new Error("OAC functions must be TypeScript");
          })()
      ),
    ),
  };
}
