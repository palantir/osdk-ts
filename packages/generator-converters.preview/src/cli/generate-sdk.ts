#!/usr/bin/env node
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

import { generateClientSdkVersionTwoPointZero } from "@osdk/generator";
import { OntologyIrToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import { consola } from "consola";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { PreviewOntologyIrConverter } from "../PreviewOntologyIrConverter.js";

async function main(): Promise<void> {
  const argv = await yargs(hideBin(process.argv))
    .strict()
    .help()
    .version(false) // so that we can use --version argument for the package version
    .usage(
      "$0 --input <path> --package-name <name> --version <ver> --output-dir <dir>",
    )
    .options({
      "input": {
        describe: "Path to the OntologyIR JSON file",
        type: "string",
        demandOption: true,
        coerce: path.resolve,
      },
      "package-name": {
        describe: "Name for the generated SDK package",
        type: "string",
        demandOption: true,
      },
      "version": {
        describe: "Version string for the generated SDK",
        type: "string",
        demandOption: true,
      },
      "output-dir": {
        describe: "Directory where the SDK will be generated",
        type: "string",
        demandOption: true,
        coerce: path.resolve,
      },
      "functions-dir": {
        describe:
          "Path to TypeScript functions source directory (enables TS function discovery)",
        type: "string",
        coerce: path.resolve,
      },
      "node-modules-path": {
        describe:
          "Path to node_modules containing @foundry packages (for TS function discovery)",
        type: "string",
        coerce: path.resolve,
      },
      "python-functions-dir": {
        describe:
          "Path to Python functions source directory (enables Python function discovery)",
        type: "string",
        coerce: path.resolve,
      },
      "python-root-project-dir": {
        describe:
          "Root project directory for Python functions (defaults to parent of python-functions-dir)",
        type: "string",
        coerce: path.resolve,
      },
      "python-binary": {
        describe:
          "Path to Python binary (required when using --python-functions-dir)",
        type: "string",
        coerce: path.resolve,
      },
    })
    .parse();

  const inputFile = argv.input;
  const packageName = argv.packageName;
  const packageVersion = argv.version;
  const outputDir = argv.outputDir;

  // Validate input file exists
  try {
    await fs.access(inputFile);
  } catch {
    consola.error(`Input file does not exist: ${inputFile}`);
    process.exit(1);
  }

  consola.info(`Converting ${inputFile}...`);

  const fileContent = await fs.readFile(inputFile, "utf-8");
  let irJson: unknown;
  try {
    const parsed = JSON.parse(fileContent);
    // Handle both wrapped (ontology.objectTypes) and unwrapped (objectTypes) formats
    irJson = parsed.ontology ?? parsed;
  } catch {
    consola.error(`Failed to parse JSON from ${inputFile}`);
    process.exit(1);
  }

  // Basic structural validation before passing to converter
  const ir = irJson as Record<string, unknown>;
  if (
    !ir
    || typeof ir !== "object"
    || !("objectTypes" in ir)
    || !("actionTypes" in ir)
  ) {
    consola.error(
      `Invalid OntologyIR structure in ${inputFile}. Expected objectTypes and actionTypes fields.`,
    );
    process.exit(1);
  }

  const previewMetadata = PreviewOntologyIrConverter
    .getPreviewFullMetadataFromIr(
      irJson as Parameters<
        typeof PreviewOntologyIrConverter.getPreviewFullMetadataFromIr
      >[0],
    );

  // Function discovery is optional - only run if at least one functions flag is provided
  if (argv.functionsDir || argv.pythonFunctionsDir) {
    if (argv.pythonFunctionsDir && !argv.pythonBinary) {
      consola.error(
        "--python-binary is required when using --python-functions-dir",
      );
      process.exit(1);
    }

    const effectivePythonRootDir = argv.pythonRootProjectDir
      ?? (argv.pythonFunctionsDir
        ? path.dirname(argv.pythonFunctionsDir)
        : undefined);

    const queryTypes = await OntologyIrToFullMetadataConverter
      .getOsdkQueryTypes(
        argv.pythonBinary,
        argv.functionsDir,
        argv.nodeModulesPath,
        argv.pythonFunctionsDir,
        effectivePythonRootDir,
      );

    const functionNames = Object.keys(queryTypes);
    if (functionNames.length > 0) {
      previewMetadata.queryTypes = queryTypes;
      consola.info(
        `Discovered ${functionNames.length} function(s): ${
          functionNames.join(", ")
        }`,
      );
    } else {
      consola.info("No functions discovered.");
    }
  }

  // Convert ActionTypeFullMetadata to ActionTypeV2 for generator compatibility
  const metadata = {
    ...previewMetadata,
    actionTypes: Object.fromEntries(
      Object.entries(previewMetadata.actionTypes).map(([key, fullMeta]) => [
        key,
        fullMeta.actionType,
      ]),
    ),
  };

  const fullOutputDir = path.join(outputDir, packageName);
  await fs.mkdir(fullOutputDir, { recursive: true });

  const hostFs = {
    async writeFile(filePath: string, contents: string): Promise<void> {
      const fullPath = path.isAbsolute(filePath)
        ? filePath
        : path.join(fullOutputDir, filePath);
      await fs.mkdir(path.dirname(fullPath), { recursive: true });
      await fs.writeFile(fullPath, contents, "utf-8");
    },
    async mkdir(dirPath: string): Promise<void> {
      const fullPath = path.isAbsolute(dirPath)
        ? dirPath
        : path.join(fullOutputDir, dirPath);
      await fs.mkdir(fullPath, { recursive: true });
    },
    async readdir(dirPath: string): Promise<string[]> {
      return fs.readdir(dirPath);
    },
  };

  consola.info(`Generating SDK to ${fullOutputDir}...`);

  await generateClientSdkVersionTwoPointZero(
    metadata,
    `osdk-generator/${packageVersion} (from-ir)`,
    hostFs,
    fullOutputDir,
    "module",
    new Map(),
    new Map(),
    new Map(),
    false,
    [],
  );

  const metadataPath = path.join(fullOutputDir, "ontology-metadata.json");
  await fs.writeFile(
    metadataPath,
    JSON.stringify(previewMetadata, null, 2),
    "utf-8",
  );

  consola.info(`Wrote ${metadataPath}`);
  consola.success("Done!");
}

main().catch((err: unknown) => {
  consola.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
