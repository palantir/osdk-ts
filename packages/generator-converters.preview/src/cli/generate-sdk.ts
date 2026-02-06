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
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { PreviewOntologyIrConverter } from "../PreviewOntologyIrConverter.js";

const USAGE =
  `Usage: generate-sdk <input-ontology-ir.json> <package-name> <package-version> <output-dir>

Arguments:
  input-ontology-ir.json  Path to the OntologyIR JSON file
  package-name            Name for the generated SDK package
  package-version         Version string for the generated SDK
  output-dir              Directory where the SDK will be generated`;

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.length < 4) {
    // eslint-disable-next-line no-console
    console.error(USAGE);
    process.exit(1);
  }

  const [inputArg, packageName, packageVersion, outputArg] = args;
  const inputFile = path.resolve(inputArg);
  const outputDir = path.resolve(outputArg);

  // Validate input file exists
  try {
    await fs.access(inputFile);
  } catch {
    // eslint-disable-next-line no-console
    console.error(`Error: Input file does not exist: ${inputFile}`);
    process.exit(1);
  }

  // eslint-disable-next-line no-console
  console.log(`Converting ${inputFile}...`);

  const fileContent = await fs.readFile(inputFile, "utf-8");
  let irJson: unknown;
  try {
    const parsed = JSON.parse(fileContent);
    // Handle both wrapped (ontology.objectTypes) and unwrapped (objectTypes) formats
    irJson = parsed.ontology ?? parsed;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Error: Failed to parse JSON from ${inputFile}`);
    process.exit(1);
  }

  const previewMetadata = PreviewOntologyIrConverter
    .getPreviewFullMetadataFromIr(
      irJson as Parameters<
        typeof PreviewOntologyIrConverter.getPreviewFullMetadataFromIr
      >[0],
    );

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

  // eslint-disable-next-line no-console
  console.log(`Generating SDK to ${fullOutputDir}...`);

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

  // eslint-disable-next-line no-console
  console.log(`Wrote ${metadataPath}`);
  // eslint-disable-next-line no-console
  console.log("Done!");
}

main().catch((err: unknown) => {
  // eslint-disable-next-line no-console
  console.error("Error:", err instanceof Error ? err.message : err);
  process.exit(1);
});
