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

import type { OntologyIr } from "@osdk/client.unstable";
import { OntologyIrToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import { consola } from "consola";
import { execa } from "execa";
import { createJiti } from "jiti";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import invariant from "tiny-invariant";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import type { IEntityMetadataMapping } from "../api/defineFunction.js";
import { defineOntology } from "../api/defineOntology.js";

// Dynamic imports for optional function discovery dependencies
let generateFunctionsIr:
  | ((
    rootDir: string,
    configPath: string | undefined,
    entityMappings: IEntityMetadataMapping,
  ) => Promise<unknown>)
  | undefined;

async function loadFunctionDiscoveryDeps(): Promise<boolean> {
  try {
    const defineFunctionModule = await import("../api/defineFunction.js");
    generateFunctionsIr = defineFunctionModule.generateFunctionsIr;
    return true;
  } catch (e: unknown) {
    consola.warn(
      "Failed to load function discovery dependencies:",
      e instanceof Error ? e.message : e,
    );
    return false;
  }
}

const apiNamespaceRegex = /^[a-z0-9-]+(\.[a-z0-9-]+)*\.$/;
const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export default async function main(
  args: string[] = process.argv,
): Promise<void> {
  const commandLineOpts: {
    input: string;
    output: string;
    apiNamespace: string;
    snapshotDir: string;
    valueTypesOutput: string;
    outputDir?: string;
    dependencies?: string;
    generateCodeSnippets: boolean;
    codeSnippetPackageName: string;
    codeSnippetDir: string;
    randomnessKey?: string;
    generateFunctionsOsdk?: string;
    functionsRootDir?: string;
    functionsOutput?: string;
    configPath?: string;
    pythonFunctionsDir?: string;
    pythonBinary?: string;
    pythonRootProjectDir?: string;
  } = await yargs(hideBin(args))
    .version(process.env.PACKAGE_VERSION ?? "")
    .wrap(Math.min(150, yargs().terminalWidth()))
    .strict()
    .help()
    .options({
      input: {
        alias: "i",
        describe: "Input file",
        type: "string",
        default: ".ontology/ontology.ts",
        coerce: path.resolve,
      },
      output: {
        alias: "o",
        describe: "Output file",
        type: "string",
        default: "ontology.json",
        coerce: path.resolve,
      },
      apiNamespace: {
        describe: "Api name prefix for namespaced ontology types",
        type: "string",
        default: "",
      },
      snapshotDir: {
        alias: "s",
        describe: "Snapshot directory",
        type: "string",
        default: "snapshots",
        coerce: path.resolve,
      },
      outputDir: {
        alias: "d",
        describe: "Directory for generated ontology entities",
        type: "string",
        coerce: path.resolve,
      },
      valueTypesOutput: {
        describe: "Value Type Output File",
        type: "string",
        default: "value-types.json",
        coerce: path.resolve,
      },
      dependencies: {
        describe: "File to write dependencies to",
        type: "string",
        coerce: path.resolve,
      },
      generateCodeSnippets: {
        describe: "Enable code snippet files creation",
        type: "boolean",
        default: false,
      },
      codeSnippetPackageName: {
        describe:
          "The package name that will be displayed in the code snippets",
        default: "",
        type: "string",
      },
      codeSnippetDir: {
        describe: "Directory for generated code snippet files",
        type: "string",
        default: "./",
        coerce: path.resolve,
      },
      randomnessKey: {
        describe: "Value used to assure uniqueness of entities",
        type: "string",
        coerce: path.resolve,
      },
      generateFunctionsOsdk: {
        describe: "Output folder for generated OSDK for functions",
        type: "string",
        coerce: path.resolve,
      },
      functionsRootDir: {
        describe: "Root folder containing function definitions",
        type: "string",
        coerce: path.resolve,
      },
      functionsOutput: {
        describe: "Output folder for function IR",
        type: "string",
        coerce: path.resolve,
      },
      configPath: {
        describe: "Path to the TypeScript config file",
        type: "string",
        coerce: path.resolve,
      },
      pythonFunctionsDir: {
        describe:
          "Path to Python functions source directory (enables Python function discovery)",
        type: "string",
        coerce: path.resolve,
      },
      pythonBinary: {
        describe:
          "Path to Python binary (required when using --pythonFunctionsDir)",
        type: "string",
        coerce: path.resolve,
      },
      pythonRootProjectDir: {
        describe:
          "Root project directory for Python functions (defaults to parent of pythonFunctionsDir)",
        type: "string",
        coerce: path.resolve,
      },
    })
    .parseAsync();
  let apiNamespace = "";
  if (commandLineOpts.apiNamespace.length !== 0) {
    apiNamespace = (commandLineOpts.apiNamespace.slice(-1) !== ".")
      ? commandLineOpts.apiNamespace + "."
      : commandLineOpts.apiNamespace;
    invariant(apiNamespace.length < 1024, "API namespace is too long.");
    invariant(
      apiNamespaceRegex.test(apiNamespace),
      "API namespace is invalid! It is expected to conform to ^[a-z0-9-]+(\.[a-z0-9-]+)*\.$",
    );
  }

  consola.info(`Loading ontology from ${commandLineOpts.input}`);

  if (
    !commandLineOpts.generateCodeSnippets
    && (commandLineOpts.codeSnippetPackageName !== ""
      || commandLineOpts.codeSnippetDir !== path.resolve("./"))
  ) {
    consola.info(
      "Package name and/or directory supplied for code snippets, but code snippet generation is false.",
    );
  }

  if (commandLineOpts.randomnessKey !== undefined) {
    invariant(
      uuidRegex.test(commandLineOpts.randomnessKey),
      "Supplied randomness key is not a uuid and shouldn't be used as a uniqueness guarantee",
    );
  }

  const ontologyIr = await loadOntology(
    commandLineOpts.input,
    apiNamespace,
    commandLineOpts.outputDir,
    commandLineOpts.dependencies,
    commandLineOpts.generateCodeSnippets,
    commandLineOpts.codeSnippetPackageName,
    commandLineOpts.codeSnippetDir,
    commandLineOpts.randomnessKey,
  );
  consola.info(`Saving ontology to ${commandLineOpts.output}`);
  await fs.writeFile(
    commandLineOpts.output,
    JSON.stringify(
      ontologyIr,
      null,
      2,
    ),
  );
  // No point in generating block if there aren't any value types
  if (
    ontologyIr.valueTypes.valueTypes.length > 0
    || ontologyIr.importedValueTypes.valueTypes.length > 0
  ) {
    await fs.writeFile(
      commandLineOpts.valueTypesOutput,
      JSON.stringify(
        ontologyIr.valueTypes,
        null,
        2,
      ),
    );
  }

  if (commandLineOpts.pythonFunctionsDir && !commandLineOpts.pythonBinary) {
    consola.error(
      "--pythonBinary is required when using --pythonFunctionsDir",
    );
    return;
  }

  // Function discovery feature (requires optional dependencies)
  if (
    commandLineOpts.functionsOutput !== undefined
    && commandLineOpts.functionsRootDir !== undefined
  ) {
    const hasFunctionDeps = await loadFunctionDiscoveryDeps();
    if (!hasFunctionDeps || !generateFunctionsIr) {
      consola.error(
        "Function discovery requires optional dependencies. Install @foundry/functions-typescript-* packages.",
      );
      return;
    }
    consola.info(`Loading function IR`);
    const functionsIr = await generateFunctionsIr(
      commandLineOpts.functionsRootDir,
      commandLineOpts.configPath,
      createEntityMappings(ontologyIr),
    );
    await fs.writeFile(
      commandLineOpts.functionsOutput,
      JSON.stringify(functionsIr, null, 2),
    );
    return;
  }

  if (commandLineOpts.generateFunctionsOsdk !== undefined) {
    // Generate full ontology metadata for functions OSDK
    const fullMetadata = OntologyIrToFullMetadataConverter
      .getFullMetadataFromIr(ontologyIr.ontology);

    // Discover Python functions and merge into ontology metadata
    if (commandLineOpts.pythonFunctionsDir) {
      const effectivePythonRootDir = commandLineOpts.pythonRootProjectDir
        ?? path.dirname(commandLineOpts.pythonFunctionsDir);

      const queryTypes = await OntologyIrToFullMetadataConverter
        .getOsdkQueryTypes(
          commandLineOpts.pythonBinary,
          undefined,
          undefined,
          commandLineOpts.pythonFunctionsDir,
          effectivePythonRootDir,
        );

      const functionNames = Object.keys(queryTypes);
      if (functionNames.length > 0) {
        fullMetadata.queryTypes = queryTypes;
        consola.info(
          `Discovered ${functionNames.length} Python function(s): ${
            functionNames.join(", ")
          }`,
        );
      } else {
        consola.info("No Python functions discovered.");
      }
    }

    consola.info(
      `Saving full ontology metadata to ${commandLineOpts.generateFunctionsOsdk}`,
    );

    await fs.writeFile(
      path.join(commandLineOpts.generateFunctionsOsdk, ".ontology.json"),
      JSON.stringify(fullMetadata, null, 2),
    );

    await fullMetadataToOsdk(commandLineOpts.generateFunctionsOsdk);
  }
}

async function loadOntology(
  input: string,
  apiNamespace: string,
  outputDir: string | undefined,
  dependencyFile: string | undefined,
  generateCodeSnippets: boolean,
  snippetPackageName: string,
  codeSnippetDir: string,
  randomnessKey?: string,
) {
  const q = await defineOntology(
    apiNamespace,
    async () => {
      const jiti = createJiti(import.meta.filename, {
        moduleCache: true,
        debug: false,
        importMeta: import.meta,
      });
      await jiti.import(input);
    },
    outputDir,
    dependencyFile,
    generateCodeSnippets,
    snippetPackageName,
    codeSnippetDir,
    randomnessKey,
  );
  return q;
}

async function fullMetadataToOsdk(
  workDir: string,
): Promise<void> {
  // First create a clean temporary directory to generate the SDK into
  const functionOsdkDir = path.join(
    workDir,
    "generated",
  );
  await fs.rm(functionOsdkDir, { recursive: true, force: true });
  await fs.mkdir(functionOsdkDir, { recursive: true });

  try {
    // Generate the source code for the osdk
    await execa("pnpm", [
      "exec",
      "osdk",
      "unstable",
      "typescript",
      "generate",
      "--outDir",
      functionOsdkDir,
      "--ontologyPath",
      path.join(workDir, ".ontology.json"),
      "--beta",
      "true",
      "--packageType",
      "module",
      "--version",
      "dev",
    ]);
  } catch (error) {
    await fs.rm(functionOsdkDir, { recursive: true, force: true });
    throw error;
  }
}

function createEntityMappings(ontologyIr: OntologyIr): IEntityMetadataMapping {
  const entityMappings: IEntityMetadataMapping = {
    ontologies: {},
  };

  const ontologyRid = "ontology";
  entityMappings.ontologies[ontologyRid] = {
    objectTypes: {},
    interfaceTypes: {},
  };

  for (
    const [apiName, blockData] of Object.entries(
      ontologyIr.ontology.objectTypes,
    )
  ) {
    const propertyTypesMap: Record<string, { propertyId: string }> = {};

    Object.keys(blockData.objectType.propertyTypes).forEach((propertyName) => {
      propertyTypesMap[propertyName] = { propertyId: propertyName };
    });

    entityMappings.ontologies[ontologyRid].objectTypes[apiName] = {
      objectTypeId: apiName,
      primaryKey: {
        propertyId: blockData.objectType.primaryKeys[0],
      },
      propertyTypes: propertyTypesMap,
      linkTypes: {},
    };
  }

  return entityMappings;
}
